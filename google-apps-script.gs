// Google Apps Script web app for the tracker cloud backup.
// Sheet columns: username | password | backupData | sessionToken | updatedAt | verified | verificationToken
const SHEET_NAME = 'Users';
const HEADERS = ['username', 'password', 'backupData', 'sessionToken', 'updatedAt', 'verified', 'verificationToken'];

function sheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  else sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  return sheet;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function hash_(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b < 0 ? b + 256 : b).toString(16)).slice(-2); }).join('');
}

function token_() {
  return Utilities.base64EncodeWebSafe(Utilities.getUuid() + ':' + new Date().getTime());
}

// Run this once manually in the Apps Script editor as the deployment owner.
// Google will show the authorization dialog for sending verification emails via Gmail.
function authorizeTracker() {
  MailApp.getRemainingDailyQuota();
  try {
    GmailApp.getAliases();
  } catch (e) {}
  return 'Mail authorization is ready.';
}

function email_(username, token) {
  // Set WEB_APP_URL to the deployed /exec URL when available. This avoids
  // verification links pointing at an editor/development deployment.
  const serviceUrl = PropertiesService.getScriptProperties().getProperty('WEB_APP_URL') || 'https://script.google.com/macros/s/AKfycbyDDh2WkLmHd7ERcSL3X1EEr3a4hDYxys408W8ES4P0Lh-Ao44KIbC5_xKa3hBJW1hwZg/exec';
  const link = serviceUrl ? (serviceUrl + '?action=verify&token=' + encodeURIComponent(token)) : '';
  const senderName = 'Physics NET Tracker';
  const subject = 'Physics NET Tracker — verify your account';

  const textBody = 
    'Welcome to Physics NET Tracker!\n\n' +
    'Please verify your email address to complete your account registration.\n\n' +
    'Verification Link:\n' + link + '\n\n' +
    'If you did not create this account, please ignore this email.\n\n' +
    '— Physics NET Tracker Team';

  const htmlBody = '<!DOCTYPE html>' +
'<html>' +
'<head>' +
'  <meta charset="utf-8">' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
'  <title>Verify your Physics NET Tracker account</title>' +
'</head>' +
'<body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">' +
'  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">' +
'    <tr>' +
'      <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px 40px; text-align: center;">' +
'        <h1 style="color: #38bdf8; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">Physics NET Tracker</h1>' +
'        <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 14px;">Account Email Verification</p>' +
'      </td>' +
'    </tr>' +
'    <tr>' +
'      <td style="padding: 40px 40px 30px 40px;">' +
'        <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 20px; font-weight: 600;">Verify your email address</h2>' +
'        <p style="margin: 0 0 24px 0; color: #475569; font-size: 15px; line-height: 1.6;">' +
'          Thank you for registering with <strong>Physics NET Tracker</strong>. To activate your cloud backup and sync features, please verify your email address by clicking the button below.' +
'        </p>' +
'        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 28px 0;">' +
'          <tr>' +
'            <td align="center">' +
'              <a href="' + link + '" target="_blank" style="display: inline-block; padding: 14px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px; border-radius: 8px; box-shadow: 0 2px 5px rgba(37,99,235,0.3);">Verify My Account</a>' +
'            </td>' +
'          </tr>' +
'        </table>' +
'        <div style="margin-top: 30px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; color: #64748b; line-height: 1.5;">' +
'          <p style="margin: 0 0 8px 0; font-weight: 600; color: #475569;">Having trouble clicking the button?</p>' +
'          <p style="margin: 0 0 8px 0;">Copy and paste this URL into your browser address bar:</p>' +
'          <a href="' + link + '" style="color: #2563eb; word-break: break-all; font-size: 12px;">' + link + '</a>' +
'        </div>' +
'      </td>' +
'    </tr>' +
'    <tr>' +
'      <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5;">' +
'        <p style="margin: 0 0 6px 0;">If you did not register for a Physics NET Tracker account, you can safely ignore this email.</p>' +
'        <p style="margin: 0;">&copy; Physics NET Tracker. All rights reserved.</p>' +
'      </td>' +
'    </tr>' +
'  </table>' +
'</body>' +
'</html>';

  try {
    GmailApp.sendEmail(username, subject, textBody, {
      name: senderName,
      htmlBody: htmlBody
    });
  } catch (e) {
    MailApp.sendEmail({
      to: username,
      name: senderName,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody
    });
  }
}

function findUser_(sheet, username) {
  const values = sheet.getDataRange().getValues();
  const needle = String(username).trim().toLowerCase();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === needle) return { row: i + 1, values: values[i] };
  }
  return null;
}

function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'verify') {
    const sheet = sheet_();
    const token = String(e.parameter.token || '');
    const values = sheet.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][6] || '') === token) {
        // Keep the token after verification. Gmail and security scanners often
        // pre-open links; clearing it on that first automated request made the
        // user's later click appear invalid.
        sheet.getRange(i + 1, 6).setValue(true);
        return HtmlService.createHtmlOutput('<h2>Account verified</h2><p>You can return to the tracker and log in now.</p>');
      }
    }
    return HtmlService.createHtmlOutput('<h2>Verification link invalid</h2><p>Please create a new account or request another verification email.</p>');
  }
  return json_({ ok: true, service: 'tracker-cloud-backup' });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const username = String(body.username || '').trim();
    const password = String(body.password || '');
    if (!username) return json_({ ok: false, error: 'A username is required.' });
    if ((body.action === 'register' || body.action === 'login') && password.length < 6) {
      return json_({ ok: false, error: 'A password of at least 6 characters is required.' });
    }
    const sheet = sheet_();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const user = findUser_(sheet, username);
      if (body.action === 'register') {
        if (user) return json_({ ok: false, error: 'That username is already in use. Please choose another username.' });
        const token = token_();
        const row = sheet.getLastRow() + 1;
        sheet.getRange(row, 1, 1, HEADERS.length).setValues([[username, hash_(password), '', '', new Date().toISOString(), false, token]]);
        try {
          email_(username, token);
        } catch (mailError) {
          sheet.deleteRow(row);
          return json_({ ok: false, error: 'Email permission is not enabled. In Apps Script, run authorizeTracker once as the deployment owner, approve Mail permission, then try again.' });
        }
        return json_({ ok: true, message: 'Account created. Check your email to verify it before logging in.' });
      }
      if (body.action === 'login') {
        if (!user) return json_({ ok: false, error: 'No account was found for this email. Try creating an account first.' });
        if (user.values[1] !== hash_(password)) return json_({ ok: false, error: 'Incorrect password.' });
        if (String(user.values[5]).toLowerCase() !== 'true') return json_({ ok: false, error: 'Please verify your account through the email we sent before logging in.' });
        const token = token_();
        sheet.getRange(user.row, 4, 1, 2).setValues([[token, new Date().toISOString()]]);
        return json_({ ok: true, token: token, backup: user.values[2] || '' });
      }
      if (body.action === 'resend') {
        if (!user) return json_({ ok: false, error: 'No account was found for this email. Try creating an account first.' });
        if (user.values[1] !== hash_(password)) return json_({ ok: false, error: 'Incorrect password.' });
        if (String(user.values[5]).toLowerCase() === 'true') return json_({ ok: true, message: 'This account is already verified.' });
        const token = token_();
        sheet.getRange(user.row, 7).setValue(token);
        email_(username, token);
        return json_({ ok: true, message: 'Verification email resent.' });
      }
      if (body.action === 'save') {
        if (!user || user.values[3] !== String(body.token || '')) return json_({ ok: false, error: 'Session expired. Log in again.' });
        sheet.getRange(user.row, 3, 1, 2).setValues([ [String(body.backup || ''), user.values[3]] ]);
        sheet.getRange(user.row, 5).setValue(new Date().toISOString());
        return json_({ ok: true });
      }
      if (body.action === 'load') {
        if (!user || user.values[3] !== String(body.token || '')) return json_({ ok: false, error: 'Session expired. Log in again.' });
        return json_({ ok: true, backup: user.values[2] || '', updatedAt: user.values[4] || '' });
      }
      return json_({ ok: false, error: 'Unknown action.' });
    } finally { lock.releaseLock(); }
  } catch (error) { return json_({ ok: false, error: String(error.message || error) }); }
}
