# CSIR-NET (Physical Sciences) — Unit VI: Electronics and Experimental Methods
### Comprehensive Study Notes with Derivations and Formulas

> Circuit schematics and characteristic curves are provided as study references. Some figures are cropped from the uploaded *Electronic Devices and Circuit Theory* book; copyright remains with the rightful owner and the figures will be removed upon request.

---

## Table of Contents
1. Semiconductor Physics Basics
2. p-n Junction Diode
3. Special Diodes (Zener, Tunnel, Varactor, Schottky)
4. Rectifiers and Power Supplies
5. Bipolar Junction Transistor (BJT)
6. Field Effect Transistors (JFET, MOSFET)
7. Homojunction vs Heterojunction Devices
8. Opto-electronic Devices (Solar cells, Photodetectors, LEDs, LASER diode)
9. Operational Amplifiers and Applications
10. Digital Electronics (Combinational + Sequential)
11. A/D and D/A Converters
12. Microprocessor and Microcontroller Basics
13. Data Interpretation, Precision, Accuracy
14. Error Analysis and Propagation of Errors
15. Least Squares Fitting

---

# 1. Semiconductor Physics Basics

## 1.1 Band Theory Recap
- Insulator: $E_g > 5$ eV; Semiconductor: $E_g \sim 0.1$–3 eV (Si: 1.12 eV, Ge: 0.67 eV, GaAs: 1.42 eV); Conductor: overlapping bands.
- Intrinsic carrier concentration:
$$
n_i = 2\left(\frac{2\pi \sqrt{m_e^* m_h^*}\,k_BT}{h^2}\right)^{3/2} e^{-E_g/2k_BT}
$$
- Fermi level in intrinsic semiconductor (assuming $m_e^*=m_h^*$) lies at midgap:
$$
E_F = \frac{E_c+E_v}{2} + \frac{3}{4}k_BT\ln\left(\frac{m_h^*}{m_e^*}\right)
$$

## 1.2 Carrier Concentrations
$$
n = N_c\, e^{-(E_c-E_F)/k_BT}, \qquad p = N_v\, e^{-(E_F-E_v)/k_BT}
$$
where effective densities of states:
$$
N_c = 2\left(\frac{2\pi m_e^* k_BT}{h^2}\right)^{3/2}, \quad
N_v = 2\left(\frac{2\pi m_h^* k_BT}{h^2}\right)^{3/2}
$$
**Mass-action law** (independent of doping, valid in equilibrium):
$$
np = n_i^2
$$

## 1.3 Doping
- **n-type**: Group V donor (P, As, Sb) donates electron; $E_D$ just below $E_c$.
- **p-type**: Group III acceptor (B, Al, Ga) creates hole; $E_A$ just above $E_v$.
- For n-type at full ionization: $n \approx N_D$, and $p = n_i^2/N_D$.
- For p-type: $p \approx N_A$, $n = n_i^2/N_A$.
- Fermi level shift with doping:
$$
E_F - E_i = k_BT \ln\left(\frac{N_D}{n_i}\right) \quad (\text{n-type}), \qquad
E_i - E_F = k_BT \ln\left(\frac{N_A}{n_i}\right) \quad (\text{p-type})
$$

## 1.4 Carrier Transport
**Drift:** $J_{drift} = q(n\mu_n + p\mu_p)E = \sigma E$, conductivity $\sigma = q(n\mu_n+p\mu_p)$.

**Diffusion:** $J_{diff,n} = qD_n\frac{dn}{dx}$, $J_{diff,p} = -qD_p\frac{dp}{dx}$.

**Einstein relation:**
$$
\frac{D_n}{\mu_n} = \frac{D_p}{\mu_p} = \frac{k_BT}{q} = V_T
$$
($V_T \approx 25.85$ mV at $T=300$K — the **thermal voltage**, appears throughout diode/BJT equations.)

**Continuity equation** (for minority carriers, e.g., holes in n-region):
$$
\frac{\partial p_n}{\partial t} = D_p\frac{\partial^2 p_n}{\partial x^2} - \frac{p_n - p_{n0}}{\tau_p} + G
$$
Steady state, no generation, gives exponential decay with **diffusion length** $L_p = \sqrt{D_p \tau_p}$.

---

# 2. p-n Junction Diode

## 2.1 Formation and Built-in Potential
When p and n regions join, diffusion of majority carriers across the junction leaves behind fixed ionized dopants, creating a **depletion region** and a **built-in electric field** opposing further diffusion (drift-diffusion equilibrium).

**Built-in potential** (derived by setting $E_{Fn}=E_{Fp}$ at equilibrium, or equivalently $J_{diff}=J_{drift}$ for both carrier types):
$$
V_{bi} = \frac{k_BT}{q}\ln\left(\frac{N_A N_D}{n_i^2}\right)
$$

**Derivation sketch:** In equilibrium hole current must vanish:
$$
J_p = q\mu_p p E - qD_p\frac{dp}{dx} = 0 \implies E = \frac{D_p}{\mu_p}\frac{1}{p}\frac{dp}{dx} = V_T \frac{1}{p}\frac{dp}{dx}
$$
Since $E=-d\phi/dx$, integrating from p-side ($p=N_A$) to n-side ($p = n_i^2/N_D$):
$$
V_{bi} = \phi(n) - \phi(p) = V_T \ln\frac{N_A}{n_i^2/N_D} = V_T\ln\left(\frac{N_AN_D}{n_i^2}\right)
$$

## 2.2 Depletion Width (Step/Abrupt Junction)
Solving Poisson's equation $\dfrac{d^2\phi}{dx^2} = -\dfrac{\rho(x)}{\epsilon_s}$ with the depletion approximation ($\rho = qN_D$ in n-side of width $x_n$, $\rho=-qN_A$ in p-side of width $x_p$), and charge neutrality $N_Ax_p = N_Dx_n$:

$$
W = x_n+x_p = \sqrt{\frac{2\epsilon_s}{q}\left(\frac{1}{N_A}+\frac{1}{N_D}\right)(V_{bi}-V_A)}
$$
where $V_A$ is applied voltage (positive for forward bias). Individual widths:
$$
x_n = W\frac{N_A}{N_A+N_D}, \qquad x_p = W\frac{N_D}{N_A+N_D}
$$

**Peak electric field** (triangular field profile):
$$
E_{max} = \frac{qN_Dx_n}{\epsilon_s} = \frac{qN_Ax_p}{\epsilon_s} = \sqrt{\frac{2q(V_{bi}-V_A)}{\epsilon_s}\cdot\frac{N_AN_D}{N_A+N_D}}
$$

## 2.3 Junction Capacitance
**Depletion (transition) capacitance:**
$$
C_j = \frac{\epsilon_s A}{W} = A\sqrt{\frac{q\epsilon_s}{2}\frac{N_AN_D}{N_A+N_D}}\cdot\frac{1}{\sqrt{V_{bi}-V_A}} \; \propto \; \frac{1}{\sqrt{V_{bi}-V_A}}
$$
This voltage-dependence is the basis of the **varactor diode**.

**Diffusion capacitance** (dominant in forward bias, due to stored minority-carrier charge):
$$
C_d = \frac{dQ}{dV} = \frac{\tau_p}{V_T}I_D \quad (\text{approx, for one-sided junction})
$$

## 2.4 Ideal Diode Equation (Shockley Equation)
Solve the minority carrier diffusion equation in quasi-neutral regions with boundary conditions from the **law of the junction**:
$$
p_n(0) = p_{n0}\,e^{V_A/V_T}, \qquad n_p(0) = n_{p0}\,e^{V_A/V_T}
$$
(law of the junction derived from Boltzmann relation across the junction potential barrier $V_{bi}-V_A$).

Solving the diffusion equation with these boundary conditions in long-base diode approximation gives exponentially decaying excess carrier profiles, and total current:
$$
I = I_0\left(e^{V_A/nV_T} - 1\right), \qquad
I_0 = qA\left(\frac{D_p p_{n0}}{L_p} + \frac{D_n n_{p0}}{L_n}\right)
$$
- $n$ = ideality factor (1 for pure diffusion current, 2 for recombination-dominated current in depletion region, per Sah-Noyce-Shockley theory)
- $I_0$ = reverse saturation current, strongly temperature dependent through $n_i^2 \propto e^{-E_g/k_BT}$, roughly **doubling every 10°C** for Si.

## 2.5 Small-Signal (AC) Model
**Dynamic/AC resistance** at operating point $I_D$:
$$
r_d = \frac{dV}{dI} = \frac{nV_T}{I_D + I_0} \approx \frac{nV_T}{I_D}
$$
Full small-signal model: $r_d$ in parallel with $C_j + C_d$, in series with bulk resistance $r_s$.

## 2.6 Diode Switching / Reverse Recovery
When diode switches from forward to reverse bias, stored minority charge must be removed before diode blocks — **reverse recovery time** $t_{rr}$, important at high frequency; $t_{rr}\approx$ few $\tau_p$ (limits diode switching speed).

![Diode I-V characteristic](img/diode_iv.png)

---

# 3. Special Diodes

## 3.1 Zener Diode
Heavily doped junction → thin depletion width → high field even at low reverse bias.
- **Zener breakdown** (< ~5 V): direct quantum tunneling of electrons across narrow depletion region (field ~$10^6$ V/cm sufficient for tunneling).
- **Avalanche breakdown** (> ~5-6 V): carriers accelerated by field gain enough energy to impact-ionize, creating electron-hole pairs — multiplicative avalanche.
- Zener has *negative* temperature coefficient (bandgap narrowing dominates), avalanche has *positive* temperature coefficient (mean free path decreases with T, lattice scattering); at ~5-6V the two effects cancel (minimum tempco point — used for precision voltage references).
- **Voltage regulator formula:**
$$
V_{out} = V_Z, \qquad I_S = \frac{V_{in}-V_Z}{R_S}, \qquad I_L = I_S - I_Z
$$
Load/line regulation figures of merit:
$$
\text{Line regulation} = \frac{\Delta V_Z}{\Delta V_{in}}, \qquad \text{Load regulation} = \frac{\Delta V_Z}{\Delta I_L}
$$

## 3.2 Tunnel (Esaki) Diode
Extremely heavy doping on both sides → degenerate semiconductor, $E_F$ inside bands. At small forward bias, filled states on n-side align with empty states on p-side within the gap → **band-to-band tunneling current**, giving **negative differential resistance (NDR)** region in I-V curve after the tunnel current peak, before normal diffusion current takes over at higher V. Used in high-frequency oscillators (up to microwave) because tunneling is a majority-carrier, near-instantaneous process (no minority carrier storage delay).

## 3.3 Varactor (Varicap) Diode
Uses voltage-dependent $C_j \propto (V_{bi}-V_A)^{-m}$ ($m=1/2$ abrupt, $m=1/3$ linearly-graded junction). Used for voltage-controlled tuning (VCO, FM tuning).

## 3.4 Schottky Diode
Metal–semiconductor junction (rectifying if $\phi_m > \phi_s$ for n-type). 
- Barrier height: $\phi_B = \phi_m - \chi$ (Schottky-Mott rule, $\chi$ = electron affinity of semiconductor).
- **Majority-carrier device** (thermionic emission, not diffusion) → no minority carrier storage → very fast switching, low forward drop (~0.2-0.3 V vs 0.7 V for Si p-n).
- Thermionic emission current:
$$
J = A^*T^2 e^{-\phi_B/k_BT}\left(e^{qV/k_BT}-1\right)
$$
where $A^*$ = effective Richardson constant.

---

# 4. Rectifiers and Power Supplies

## 4.1 Half-Wave Rectifier
$$
V_{dc} = \frac{V_m}{\pi}, \qquad V_{rms} = \frac{V_m}{2}, \qquad \text{ripple factor } r = \sqrt{\left(\frac{V_{rms}}{V_{dc}}\right)^2-1} = 1.21
$$
$$
\text{Efficiency } \eta = \frac{P_{dc}}{P_{ac}} = \frac{(2/\pi)^2}{1+ (R_f/R_L)}\times \text{(order 40.6\% max)}
$$
PIV (peak inverse voltage) = $V_m$.

## 4.2 Full-Wave Rectifier (Center-tap / Bridge)
$$
V_{dc} = \frac{2V_m}{\pi}, \qquad V_{rms} = \frac{V_m}{\sqrt2}, \qquad r = 0.482
$$
Max efficiency $\eta_{max} = 81.2\%$. Bridge rectifier: PIV $=V_m$ (vs $2V_m$ for center-tap), uses 4 diodes but no center-tapped transformer.

## 4.3 Capacitor Filter
Ripple voltage (approx, for $R_LC \gg T$):
$$
V_r(pp) \approx \frac{I_{dc}}{fC} \; (\text{half-wave}), \qquad \frac{I_{dc}}{2fC}\;(\text{full-wave})
$$
$$
\text{Ripple factor} \approx \frac{1}{4\sqrt3\, fCR_L} \;(\text{full-wave})
$$

![Rectifier waveforms](img/rectifier_wave.png)
![Half-wave rectifier circuit](img/halfwave_ckt.png)

---

# 5. Bipolar Junction Transistor (BJT)

## 5.1 Structure and Operation
Two back-to-back junctions (n-p-n or p-n-p) with a thin, lightly-doped base. In **active mode**: emitter-base (EB) forward biased, collector-base (CB) reverse biased.

Physical action: EB forward bias injects minority carriers into base; because base is thin ($W_B \ll L_p$ diffusion length), most diffuse across to the CB junction and are swept into collector by the reverse-biased field, rather than recombining.

## 5.2 Current Components and Transport Factor
- **Emitter injection efficiency:** $\gamma = \dfrac{I_{En}}{I_E} = \dfrac{1}{1+\frac{D_pN_D W_B}{D_nN_AL_p}}$ (npn, using base/emitter doping ratio $N_A/N_D$≡ base/emitter — want $N_E \gg N_B$ for $\gamma\to1$)
- **Base transport factor:** $\alpha_T = \dfrac{I_{Cn}}{I_{En}} \approx 1-\dfrac{1}{2}\left(\dfrac{W_B}{L_n}\right)^2$ (want $W_B \ll L_n$)
- **Common-base current gain:** $\alpha = \gamma\,\alpha_T$ (~0.98–0.998)
- **Common-emitter current gain:**
$$
\beta = \frac{\alpha}{1-\alpha}, \qquad \alpha = \frac{\beta}{1+\beta}
$$
- Terminal relations: $I_E = I_B+I_C$; $I_C = \alpha I_E + I_{CBO}$; $I_C = \beta I_B + (1+\beta)I_{CBO}$

## 5.3 Ebers-Moll Model
General (all bias regions) model treating BJT as two diodes with coupling:
$$
I_E = I_{ES}(e^{V_{BE}/V_T}-1) - \alpha_R I_{CS}(e^{V_{BC}/V_T}-1)
$$
$$
I_C = \alpha_F I_{ES}(e^{V_{BE}/V_T}-1) - I_{CS}(e^{V_{BC}/V_T}-1)
$$
with reciprocity relation $\alpha_F I_{ES} = \alpha_R I_{CS} = I_S$ (transport saturation current).

## 5.4 Regions of Operation
| Region | EBJ | CBJ | Use |
|---|---|---|---|
| Active | Fwd | Rev | Amplification |
| Saturation | Fwd | Fwd | Switch ON |
| Cutoff | Rev | Rev | Switch OFF |
| Reverse active | Rev | Fwd | rarely used |

## 5.5 Early Effect (Base-Width Modulation)
Increase in $V_{CE}$ widens CB depletion region → decreases effective base width → increases $\alpha,\beta$ slightly, and $I_C$ increases with $V_{CE}$ even in "active" region. Extrapolated output characteristic lines meet at **Early voltage** $V_A$ on the negative $V_{CE}$ axis:
$$
I_C = I_{C0}\left(1+\frac{V_{CE}}{V_A}\right), \qquad r_o = \frac{\partial V_{CE}}{\partial I_C}\bigg|_{I_B} \approx \frac{V_A + V_{CE}}{I_C} \approx \frac{V_A}{I_C}
$$

## 5.6 Small-Signal (Hybrid-π and h-parameter) Models
**h-parameter model** (common-emitter):
$$
V_{be} = h_{ie}I_b + h_{re}V_{ce}, \qquad I_c = h_{fe}I_b + h_{oe}V_{ce}
$$
- $h_{ie}$: input impedance ($\approx r_\pi$), $h_{fe}\approx\beta$ (current gain), $h_{re}$: reverse voltage gain (~0, often neglected), $h_{oe}$: output admittance ($=1/r_o$).

**Hybrid-π model** parameters:
$$
g_m = \frac{I_C}{V_T}, \qquad r_\pi = \frac{\beta}{g_m} = \frac{\beta V_T}{I_C}, \qquad r_o = \frac{V_A}{I_C}
$$

## 5.7 Biasing
**Fixed bias:** simple but poor stability (depends directly on $\beta$).

**Voltage-divider (self) bias** — most stable, widely used:
$$
V_{TH} = V_{CC}\frac{R_2}{R_1+R_2}, \quad R_{TH}=R_1\|R_2
$$
$$
I_B = \frac{V_{TH}-V_{BE}}{R_{TH}+(1+\beta)R_E}, \qquad I_C \approx \beta I_B
$$
**Stability factor** $S = \dfrac{\partial I_C}{\partial I_{CO}}\Big|_{V_{BE},\beta} = \dfrac{1+\beta}{1-\beta\frac{\partial I_B}{\partial I_C}}$; minimized (→best stability, $S\to 1$) when $R_{TH}\ll(1+\beta)R_E$.

## 5.8 Amplifier Configurations
| Config | $Z_{in}$ | $Z_{out}$ | $A_V$ | $A_I$ | Phase | Use |
|---|---|---|---|---|---|---|
| CE | Medium | Medium-High | High | High | 180° | General amplification |
| CB | Low | High | High | ≈1 | 0° | High-freq/impedance matching |
| CC (emitter follower) | High | Low | ≈1 | High | 0° | Buffer/impedance matching |

**CE amplifier voltage gain** (with $R_E$ bypassed):
$$
A_V = -g_mR_C = -\frac{I_CR_C}{V_T}
$$

## 5.9 Frequency Response
Internal capacitances ($C_\pi, C_\mu$—the Miller capacitance) limit high-frequency response.

**Miller effect:** feedback capacitance $C_\mu$ between input & output of an inverting amplifier of gain $-A_v$ appears at input as:
$$
C_{in,Miller} = C_\mu(1+A_v)
$$
**Cutoff/transition frequencies:**
- $f_\beta$: frequency where $\beta$ drops to $0.707\beta_0$ (3dB point of current gain)
- $f_T$ (gain-bandwidth product / unity current gain frequency): $f_T \approx \beta_0 f_\beta$
$$
f_T = \frac{g_m}{2\pi(C_\pi+C_\mu)}
$$

---

# 6. Field Effect Transistors

## 6.1 JFET
Channel current controlled by reverse-biased gate junction depletion width.
**Shockley equation:**
$$
I_D = I_{DSS}\left(1-\frac{V_{GS}}{V_P}\right)^2, \quad V_{GS(off)} = V_P \text{ (pinch-off voltage)}
$$
**Transconductance:**
$$
g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac{-2I_{DSS}}{V_P}\left(1-\frac{V_{GS}}{V_P}\right) = g_{m0}\left(1-\frac{V_{GS}}{V_P}\right), \quad g_{m0}=\frac{-2I_{DSS}}{V_P}
$$

## 6.2 MOSFET
### Structure
Metal(or poly-Si)-Oxide-Semiconductor capacitor forms channel by field effect (inversion), source/drain are heavily doped regions of opposite type to substrate.

### Threshold Voltage
$$
V_T = V_{FB} + 2\phi_F + \frac{\sqrt{2\epsilon_s qN_A(2\phi_F)}}{C_{ox}}
$$
where $V_{FB}$=flat-band voltage, $\phi_F = V_T\ln(N_A/n_i)$ (Fermi potential), $C_{ox}=\epsilon_{ox}/t_{ox}$ (oxide capacitance per area).

### I-V Relations (long-channel, square-law model)
**Triode/linear region** ($V_{DS} < V_{GS}-V_T$):
$$
I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS}-V_T)V_{DS}-\frac{V_{DS}^2}{2}\right]
$$
**Saturation region** ($V_{DS}\ge V_{GS}-V_T$):
$$
I_D = \frac{1}{2}\mu_nC_{ox}\frac{W}{L}(V_{GS}-V_T)^2(1+\lambda V_{DS})
$$
($\lambda$ = channel-length modulation parameter, analogous to Early effect.)

**Derivation sketch (gradual channel approximation):** Charge per unit area in channel at position $y$ where local channel voltage is $V(y)$: $Q_n(y) = C_{ox}[V_{GS}-V(y)-V_T]$. Current continuity: $I_D = W\mu_nQ_n(y)\dfrac{dV}{dy}$ (constant along channel). Integrate $y:0\to L$, $V:0\to V_{DS}$ to get the triode equation above; saturation occurs when channel pinches off at $y=L$, i.e. $V(L)=V_{GS}-V_T$.

**Transconductance:**
$$
g_m = \frac{\partial I_D}{\partial V_{GS}}\bigg|_{sat} = \mu_nC_{ox}\frac{W}{L}(V_{GS}-V_T) = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}
$$
**Output resistance:** $r_o = \dfrac{1}{\lambda I_D} \approx \dfrac{1}{\partial I_D/\partial V_{DS}}$

### CMOS
Complementary NMOS+PMOS: near-zero static power (only one device conducts in each logic state) — basis of nearly all modern digital ICs.

![MOSFET characteristics](img/mosfet_char.png)
![BJT output characteristics](img/bjt_output.png)

## 6.3 JFET vs MOSFET vs BJT (Comparison)
| Property | BJT | JFET | MOSFET |
|---|---|---|---|
| Control | Current | Voltage | Voltage |
| Input impedance | Low (kΩ) | High (MΩ-GΩ) | Very high (Ω→∞, gate insulated) |
| Carrier type | Both (minority injection) | Majority only | Majority only |
| Noise | Higher (shot+partition) | Low | Low (but flicker/1/f noise at low f) |
| Speed | High $g_m$, good for analog | Good | Scales well, dominant in digital |
| Temp. coefficient | Negative (thermal runaway risk) | — | Can be zero-TC biased (self-limiting) |

---

# 7. Homojunction vs Heterojunction Devices

## 7.1 Homojunction
Junction between same material with different doping (e.g. Si p-n Si). Band offsets arise only from doping-induced band bending; both conduction and valence band edges vary together (parallel band edges away from junction).

## 7.2 Heterojunction
Junction between **different** semiconductors (e.g., AlGaAs/GaAs, InGaAs/InP) with different bandgaps, giving **discontinuities** in conduction and valence bands:
$$
\Delta E_c + \Delta E_v = \Delta E_g = E_{g2}-E_{g1}
$$
Determined empirically/by **Anderson's rule** (electron affinity model):
$$
\Delta E_c = \chi_1-\chi_2, \qquad \Delta E_v = \Delta E_g - \Delta E_c
$$
- **Type I (straddling gap):** e.g. AlGaAs/GaAs — both electrons and holes confine in the narrower-gap material, ideal for lasers/LEDs (carrier confinement plus optical confinement together).
- **Type II (staggered/broken gap):** e.g. InAs/GaSb — electrons and holes confine in *different* layers.

## 7.3 Why Heterojunctions Matter
- **Carrier confinement**: band offset acts as a potential well confining injected carriers to the active region, giving much higher radiative recombination efficiency (basis of double-heterostructure LEDs/laser diodes).
- **HBT (Heterojunction Bipolar Transistor):** wide-gap emitter (e.g. AlGaAs) with narrow-gap base (GaAs) suppresses hole back-injection into the emitter, improving injection efficiency independent of doping ratio. This allows a heavily-doped base (low base resistance) without sacrificing injection efficiency, giving very high transition frequency, used in RF/microwave power amplifiers.
- **HEMT (High Electron Mobility Transistor):** heterojunction (e.g. AlGaAs/GaAs) creates a 2D electron gas at the interface via modulation doping. Electrons are spatially separated from ionized donors, drastically reducing ionized-impurity scattering and giving very high mobility, used in low-noise microwave amplifiers.
- **Quantum wells** formed by a thin narrow-gap layer sandwiched in wider-gap material — basis for quantum-well lasers.

---

# 8. Opto-electronic Devices

## 8.1 Photodiode (p-n and p-i-n)
Reverse-biased junction; absorbed photons generate electron-hole pairs in/near the depletion region, swept by the field to produce photocurrent.

**Total current:**
$$
I = I_0(e^{V/V_T}-1) - I_{ph}, \qquad I_{ph} = q\eta \frac{P_{opt}}{h\nu}A
$$
- eta = quantum efficiency (electrons collected per incident photon).
- **Responsivity:**
$$
R = \frac{I_{ph}}{P_{opt}} = \frac{q\eta}{h\nu} = \frac{\eta \lambda(\mu m)}{1.24}\;\; \text{A/W}
$$
**p-i-n photodiode**: intrinsic layer widens the depletion region, giving more absorption volume and lower junction capacitance for a given width — faster response, used for high-speed/low-noise detection.

**Avalanche photodiode (APD):** operated near breakdown, uses impact ionization for internal current gain; increases responsivity but adds excess (multiplication) noise.

**Modes of operation:**
- *Photovoltaic mode* (zero bias): used in solar cells, low noise, nonlinear response, limited bandwidth (dominated by diffusion capacitance).
- *Photoconductive mode* (reverse biased): linear response, wider bandwidth (junction capacitance reduced), somewhat higher dark current/noise.

## 8.2 Solar Cell
Same physical structure as a photodiode, operated in the power-delivering quadrant.

**I-V equation under illumination:**
$$
I = I_0\left(e^{V/nV_T}-1\right) - I_L
$$
- $I_L$ = light-generated current, proportional to incident flux.
- **Open circuit voltage** (I=0):
$$
V_{OC} = nV_T\ln\left(\frac{I_L}{I_0}+1\right)
$$
- **Short circuit current** (V=0): $I_{SC}\approx I_L$.
- **Fill Factor:**
$$
FF = \frac{P_{max}}{V_{OC}I_{SC}} = \frac{V_mI_m}{V_{OC}I_{SC}}
$$
- **Efficiency:**
$$
\eta = \frac{P_{max}}{P_{in}} = \frac{V_{OC}\,I_{SC}\,FF}{P_{in}}
$$
- **Equivalent circuit:** current source $I_L$ in parallel with the diode, shunt resistance (leakage), series resistance (contact/bulk resistance) — both degrade the fill factor (ideal: series resistance zero, shunt resistance infinite).
- **Shockley-Queisser limit**: theoretical maximum efficiency (around 33% for a single junction at the optimal bandgap) from balance of absorption (favoring low bandgap) versus voltage/thermalization loss (favoring high bandgap); multi-junction (tandem) cells exceed this by splitting the spectrum.

## 8.3 LED (Light Emitting Diode)
Forward-biased junction; radiative recombination of injected minority carriers emits a photon with energy approximately equal to the bandgap.

**Emission wavelength:**
$$
\lambda(\text{nm}) = \frac{1240}{E_g(\text{eV})}
$$
- Requires **direct bandgap** material (GaAs, GaN, InGaN, AlGaInP, etc.) for efficient radiative recombination (momentum conservation without phonon assistance); Si/Ge (indirect gap) are poor light emitters.
- **Internal quantum efficiency:** ratio of radiative recombination rate to total recombination rate (radiative plus non-radiative).
- **External quantum efficiency** additionally includes extraction efficiency, limited by total internal reflection at the semiconductor-air interface.
- Double-heterostructure LEDs (Section 7.3) confine carriers for higher internal quantum efficiency.

## 8.4 LASER Diode
Requires: (i) population inversion via heavy forward-bias injection, (ii) optical gain exceeding loss, (iii) optical feedback (cleaved facets acting as a Fabry-Perot cavity).

**Threshold condition:** gain equals total loss (mirror loss plus internal loss):
$$
g_{th} = \alpha_i + \frac{1}{L}\ln\left(\frac{1}{R_1R_2}\right)^{1/2}
$$
Output power above threshold is proportional to the differential (slope) quantum efficiency times the excess current above threshold.

## 8.5 Photomultiplier Tube (PMT) — Brief
Photocathode (photoelectric emission) followed by electron multiplication via cascaded dynodes (secondary emission), gain of order a million; used for extremely low-light detection, common in scintillation counting.

---

# 9. Operational Amplifiers and Applications

## 9.1 Ideal Op-Amp Characteristics
- Infinite open-loop gain
- Infinite input impedance (no input current)
- Zero output impedance
- Infinite bandwidth, zero offset

**Virtual short concept** (for negative feedback configurations): the two input terminals sit at the same potential, and no current flows into either input.

## 9.2 Basic Configurations

**Inverting amplifier:**
$$
A_V = -\frac{R_f}{R_1}, \qquad Z_{in}=R_1
$$
*Derivation:* the inverting node is a virtual ground. KCL there gives $(V_{in}-0)/R_1 = (0-V_{out})/R_f$, hence $V_{out}=-\dfrac{R_f}{R_1}V_{in}$.

**Non-inverting amplifier:**
$$
A_V = 1+\frac{R_f}{R_1}, \qquad Z_{in}\to\infty
$$

**Voltage follower (buffer):** unity gain (feedback resistor zero, input resistor infinite); used for impedance matching/isolation.

**Summing amplifier (inverting):**
$$
V_{out} = -R_f\left(\frac{V_1}{R_1}+\frac{V_2}{R_2}+\cdots\right)
$$

**Difference amplifier:**
$$
V_{out} = \frac{R_f}{R_1}(V_2-V_1) \quad (\text{when the two input resistor pairs and feedback resistors are matched})
$$

**Integrator:**
$$
V_{out}(t) = -\frac{1}{RC}\int V_{in}(t)\,dt
$$

**Differentiator:**
$$
V_{out}(t) = -RC\frac{dV_{in}}{dt}
$$

**Instrumentation amplifier** (3 op-amp version): high input impedance at both inputs, high CMRR, gain set by a single resistor:
$$
A_V = \left(1+\frac{2R}{R_G}\right)\frac{R_3}{R_2}
$$

## 9.3 Non-Ideal Parameters
- **Open-loop gain** (finite, of order $10^5$-$10^6$), rolls off at 20 dB/decade above a dominant pole frequency.
- **Gain-Bandwidth Product (GBW):** constant for a given op-amp; closing the loop trades gain for bandwidth.
- **Slew rate:** maximum rate of change of output, limits large-signal high-frequency performance and sets the full-power bandwidth.
- **Input offset voltage**, **input bias current**, **input offset current** (difference between the two input bias currents).
- **CMRR (Common Mode Rejection Ratio):** ratio of differential gain to common-mode gain, usually expressed in dB.
- **PSRR** (Power Supply Rejection Ratio): sensitivity of output to supply variations.

## 9.4 Frequency Compensation and Stability
Feedback loop stability requires avoiding a loop gain magnitude of one at 180 degrees phase shift (Barkhausen criterion for oscillation). Dominant-pole compensation trades bandwidth for phase margin; a phase margin of at least 45 degrees is typically targeted for good transient response without excessive ringing.

![Op-amp open-loop Bode plot](img/opamp_bode.png)
![Inverting amplifier schematic](img/opamp_inv.png)

## 9.5 Other Applications
- **Comparator:** open-loop op-amp comparing input to a reference, output saturating to one supply rail or the other depending on the sign of the input difference.
- **Schmitt trigger:** comparator with positive feedback, giving hysteresis with distinct upper and lower thresholds; used to clean noisy signals and avoid multiple triggering.
- **Active filters:** e.g. Sallen-Key, using op-amp plus RC networks to realize low-pass/high-pass/band-pass responses without inductors.
- **Precision rectifier:** overcomes the diode forward-voltage-drop limitation using op-amp feedback around the diode.
- **Log/antilog amplifiers:** exploit the exponential diode/BJT current-voltage relation to realize a logarithmic response, used in analog multipliers and compressors.
- **Wien-bridge and phase-shift oscillators:** op-amp based sinusoidal oscillators satisfying the Barkhausen criterion at the desired frequency.

---

# 10. Digital Electronics

## 10.1 Number Systems and Codes
Binary, octal, hex, BCD; **Gray code** (single bit change between adjacent values, used to avoid glitches in position encoders); 2's complement for signed numbers.

## 10.2 Boolean Algebra and Logic Gates
Basic operations AND, OR, NOT; universal gates NAND and NOR (either alone can realize all logic functions).

**De Morgan's theorems:**
$$
\overline{A\cdot B} = \bar A+\bar B, \qquad \overline{A+B}=\bar A\cdot \bar B
$$
**Karnaugh map (K-map)** for minimization; sum-of-products and product-of-sums canonical forms.

## 10.3 Combinational Circuits
- **Half adder:** sum is A XOR B, carry is A AND B. **Full adder** extends this with a carry-in.
- **Multiplexer:** many inputs to one output via select lines. **Demultiplexer, decoder, encoder, priority encoder** are related building blocks.
- **Magnitude comparator:** compares two n-bit numbers and indicates which is larger, or equality.

## 10.4 Sequential Circuits — Flip-Flops
| Type | Notes |
|---|---|
| SR | Basic latch; simultaneous set and reset is an invalid state |
| D | Stores the data input at the clock edge; no invalid state |
| JK | Toggles when both inputs are high; resolves the SR ambiguity |
| T | Toggle flip-flop; output complements every clock edge when enabled; used in counters |

**Master-slave configuration** avoids the race-around condition in JK flip-flops using two cascaded latches.

## 10.5 Registers
- **Shift register** (serial/parallel in, serial/parallel out variants): cascaded flip-flops shifting data on each clock, used in serial-to-parallel conversion and delay lines.
- **Ring counter:** shift register with output fed back to input, an n-state counter for n flip-flops.
- **Johnson (twisted-ring) counter:** feedback is inverted, giving twice as many states for the same number of flip-flops.

## 10.6 Counters
**Asynchronous (ripple) counter:** flip-flops toggle sequentially; cumulative propagation delay limits maximum operating frequency, but the design is simple.

**Synchronous counter:** all flip-flops clocked simultaneously, with combinational logic determining each flip-flop's input; faster, more complex design.

**MOD-N counter:** cycles through N states; the number of flip-flops needed is the smallest integer at least log base 2 of N.

## 10.7 Multivibrators
- **Astable:** free-running square-wave generator (e.g., 555 timer astable mode).
- **Monostable (one-shot):** produces a single pulse of defined width on triggering.
- **Bistable:** a flip-flop, with two stable states requiring an external trigger to change state.

## 10.8 Logic Families (brief)
TTL, CMOS — key parameters: noise margin, fan-out, propagation delay, power dissipation. CMOS has near-zero static power (dynamic power scales with capacitance, voltage squared, and frequency); TTL was historically faster but has higher static power dissipation.


# 11. A/D and D/A Converters

## 11.1 D/A Converter (DAC)

**Weighted-resistor DAC:**
$$
V_{out} = -R_f\sum_{i=0}^{n-1}\frac{b_i}{R_i}\,V_{ref}, \qquad R_i = R\cdot2^{(n-1-i)}
$$
Drawback: wide resistor value spread for large n (poor matching/precision at large n).

**R-2R ladder DAC** (preferred in practice): uses only two resistor values (R and 2R), so:
$$
V_{out} = -\frac{R_f}{R}\,V_{ref}\sum_{i=0}^{n-1}b_i2^{-(n-i)} = -\frac{R_f}{R}\,V_{ref}\cdot\frac{D}{2^n}
$$
where $D$ = decimal equivalent of the binary input word.

**Key DAC parameters:**
- **Resolution:** $\dfrac{V_{ref}}{2^n}$ (smallest output step, also called 1 LSB), improves (finer) with more bits n.
- **Full-scale output:** $V_{ref}\dfrac{2^n-1}{2^n}$
- **Settling time:** time to settle within specified error band after code change.
- **Accuracy specs:** offset error, gain error, linearity error, differential non-linearity (DNL), integral non-linearity (INL). **Monotonicity**: output never decreases for increasing input code.

## 11.2 A/D Converter (ADC)

**Flash (parallel) ADC:** $2^n-1$ comparators compare $V_{in}$ against reference ladder voltages simultaneously → priority encoder gives digital output. **Fastest** (single clock cycle conversion) but hardware grows exponentially with resolution ($2^n$ comparators) — impractical beyond ~8 bits.

**Successive Approximation Register (SAR) ADC:** Binary search algorithm — DAC output compared to $V_{in}$, MSB to LSB set/tested successively.
$$
T_{conv} = n\times T_{clock} \quad (n = \text{number of bits})
$$
Good balance of speed, resolution, cost — most common general-purpose ADC.

**Dual-Slope (Integrating) ADC:** Integrate $V_{in}$ for a fixed time $T_1$, then integrate a reference of opposite polarity until output returns to zero, taking time $T_2$:
$$
\frac{V_{in}}{V_{ref}} = \frac{T_2}{T_1} \implies V_{in} = V_{ref}\frac{T_2}{T_1}
$$
Since only the *ratio* of times matters, clock frequency drift cancels out → very high accuracy/noise immunity (good common-mode/line-frequency noise rejection when $T_1$ = integer multiple of mains period) but **slow** — used in precision digital multimeters.

**Counter-ramp (Digital-ramp) ADC:** counter drives DAC, compares to $V_{in}$, counts up until DAC output ≥ $V_in$; conversion time up to $2^n$ clock cycles — slow, simple.

**Sigma-Delta ($\Sigma\Delta$) ADC:** oversamples input at rate ≫ Nyquist, uses 1-bit (or few-bit) quantizer inside a feedback loop with integrator — pushes quantization noise to higher frequencies (**noise shaping**), then digital decimation filter yields high effective resolution at lower bandwidth. Used in high-resolution audio/instrumentation ADCs.

### Key ADC/DAC Comparison
| ADC Type | Speed | Resolution | Complexity |
|---|---|---|---|
| Flash | Fastest | Low (≤8 bit typical) | High (exponential HW) |
| SAR | Medium | Medium-High | Medium |
| Dual-slope | Slow | High | Low-medium |
| Sigma-Delta | Slow-medium | Very high | Medium (digital-heavy) |

### Sampling Theorem (relevant to ADC)
**Nyquist criterion:** sampling frequency $f_s \ge 2f_{max}$ to avoid **aliasing**. Anti-aliasing (low-pass) filter placed before ADC to band-limit input.

**Quantization error/noise:**
$$
\text{Max quantization error} = \pm\frac{1}{2}\text{LSB} = \pm\frac{V_{ref}}{2^{n+1}}
$$
$$
SNR_{quant}(\text{dB}) \approx 6.02n + 1.76
$$
(derivation: quantization error modeled as uniform random variable over $[-q/2,q/2]$, $q=$ LSB step; its variance is $q^2/12$; comparing to full-scale sinusoid power $\left(\frac{2^nq}{2\sqrt2}\right)^2$ gives the formula above.)

---

# 12. Microprocessor and Microcontroller Basics

## 12.1 Microprocessor Architecture (generic, e.g. 8085/8086-level understanding expected)
- **CPU** = ALU + Control Unit + Registers.
- **Registers:** Accumulator, general purpose registers, Program Counter (PC, holds address of next instruction), Stack Pointer (SP), Instruction Register (IR), Flag/Status register (Carry, Zero, Sign, Parity, Auxiliary Carry/Overflow flags).
- **Buses:** Address bus (unidirectional, determines addressable memory: $2^N$ locations for N-bit bus), Data bus (bidirectional, width = word size, e.g. 8/16/32-bit), Control bus (RD, WR, READY, INTR, etc.)

## 12.2 Instruction Cycle
Fetch → Decode → Execute (→ sometimes Memory-read/write, Interrupt-check). Each broken into **T-states** (clock cycles); **machine cycles** (opcode fetch, memory read, memory write, I/O read, I/O write, interrupt acknowledge) each take a fixed/variable number of T-states.

## 12.3 Addressing Modes
Immediate, Direct, Register, Register-indirect, Indexed.

## 12.4 Interrupts
- **Vectored vs non-vectored**, **maskable vs non-maskable (NMI)**.
- **Interrupt Service Routine (ISR):** upon interrupt, PC and flags pushed to stack, control jumps to fixed/vectored ISR address; RETI/IRET restores context.
- **Priority resolution** for simultaneous interrupts (hardware priority encoder or software polling).

## 12.5 Memory Organization
RAM (volatile, read/write), ROM/EPROM/EEPROM/Flash (non-volatile); **memory-mapped I/O** vs **isolated (port-mapped) I/O** (separate address space with IN/OUT instructions, e.g. 8085).

## 12.6 Microprocessor vs Microcontroller
| Feature | Microprocessor | Microcontroller |
|---|---|---|
| Integration | CPU only (external RAM/ROM/I/O needed) | CPU + RAM + ROM + I/O + timers on single chip |
| Typical use | General computing | Embedded, dedicated control tasks |
| Cost/power | Higher | Lower, optimized for low power |
| Example | 8085, 8086, x86 | 8051, PIC, AVR, ARM Cortex-M |

## 12.7 8051 Microcontroller Basics (commonly referenced)
- 8-bit CPU, 4KB ROM, 128 bytes RAM (on typical variant), 4 I/O ports (P0-P3, 8-bit each), 2 timers/counters (16-bit), UART for serial comm, 5 interrupt sources.
- **Timer modes:** Mode 0 (13-bit), Mode 1 (16-bit), Mode 2 (8-bit auto-reload), Mode 3 (split timer).
- **Special Function Registers (SFRs):** memory-mapped control registers (e.g. TMOD, TCON, SCON for timer/serial config).

## 12.8 Programmable Peripheral Devices (typical for old syllabi)
- **8255 (PPI):** programmable parallel I/O, 3 ports (A, B, C), modes 0/1/2.
- **8253/8254 (PIT):** programmable interval timer, used for counting/timing/baud-rate generation.
- **8259 (PIC):** programmable interrupt controller, handles priority + vectoring for multiple interrupt sources.

---

# 13. Data Interpretation, Precision, and Accuracy

## 13.1 Definitions
- **Accuracy:** closeness of a measured value to the *true* value. Governed by systematic errors.
- **Precision:** closeness/reproducibility among repeated measurements (spread), regardless of proximity to true value. Governed by random errors.
- A measurement set can be precise but inaccurate (systematic offset/bias) or accurate on average but imprecise (large random scatter) — classic "dartboard" illustration.

## 13.2 Types of Errors
- **Systematic (determinate) errors:** consistent bias — instrumental (zero error, calibration drift), environmental, observational (parallax), theoretical (approximation in model). Can in principle be corrected/calibrated out.
- **Random (indeterminate) errors:** unpredictable fluctuations from uncontrolled variables, noise; reduced (but not eliminated) by averaging over repeated measurements ($\sigma_{mean} = \sigma/\sqrt{N}$).
- **Gross errors:** blunders (misreading, wrong recording) — should be identified and discarded (e.g. via outlier tests, Chauvenet's criterion), not part of formal error propagation.

## 13.3 Statistical Description
**Mean:** $\bar x = \dfrac1N\sum_i x_i$

**Standard deviation (sample):**
$$
s = \sqrt{\frac{1}{N-1}\sum_{i=1}^N(x_i-\bar x)^2}
$$
(N-1: Bessel's correction, accounts for using estimated mean rather than true mean, giving unbiased variance estimator.)

**Standard error of the mean:**
$$
\sigma_{\bar x} = \frac{s}{\sqrt N}
$$
(Precision of the *mean* improves as $1/\sqrt N$ even though individual-measurement precision (s) does not.)

## 13.4 Significant Figures
Rules: leading zeros not significant; trailing zeros after decimal point significant; result of a calculation reported to the precision of the least precise input (multiplication/division → fewest sig figs; addition/subtraction → fewest decimal places).


---

# 14. Error Analysis and Propagation of Errors

## 14.1 Absolute, Relative, Percentage Error
- **Absolute error:** $\Delta x = x_{measured}-x_{true}$ (or estimated uncertainty $\delta x$).
- **Relative error:** $\dfrac{\delta x}{x}$
- **Percentage error:** $\dfrac{\delta x}{x}\times100\%$

## 14.2 General Error Propagation Formula
For a quantity $z = f(x,y,\ldots)$ computed from measured quantities each with uncertainty, using a **first-order Taylor expansion** about the mean values:
$$
\delta z \approx \sqrt{\left(\frac{\partial f}{\partial x}\right)^2(\delta x)^2 + \left(\frac{\partial f}{\partial y}\right)^2(\delta y)^2 + 2\frac{\partial f}{\partial x}\frac{\partial f}{\partial y}\,\text{cov}(x,y) + \cdots}
$$
If $x,y$ are **independent** (uncorrelated), the covariance term vanishes:
$$
(\delta z)^2 = \left(\frac{\partial f}{\partial x}\right)^2(\delta x)^2 + \left(\frac{\partial f}{\partial y}\right)^2(\delta y)^2 + \cdots
$$

**Derivation sketch:** Write $z+\delta z = f(x+\delta x, y+\delta y,\ldots)$. Taylor expand to first order:
$$
z+\delta z \approx f(x,y) + \frac{\partial f}{\partial x}\delta x + \frac{\partial f}{\partial y}\delta y
$$
so $\delta z \approx \frac{\partial f}{\partial x}\delta x + \frac{\partial f}{\partial y}\delta y$. Since errors are random with zero mean and (for independent variables) uncorrelated, squaring and taking expectation value kills cross terms (given $\langle \delta x\,\delta y\rangle=0$), giving quadrature (root-sum-square) addition of variances as above.

## 14.3 Common Special Cases
**Addition/Subtraction** ($z = x\pm y$): absolute errors add in quadrature
$$
(\delta z)^2 = (\delta x)^2+(\delta y)^2
$$
**Multiplication/Division** ($z=xy$ or $z=x/y$): *relative* errors add in quadrature
$$
\left(\frac{\delta z}{z}\right)^2 = \left(\frac{\delta x}{x}\right)^2+\left(\frac{\delta y}{y}\right)^2
$$
**Power law** ($z = x^n$):
$$
\frac{\delta z}{z} = |n|\frac{\delta x}{x}
$$
**General product of powers** ($z = x^ay^b/w^c$):
$$
\left(\frac{\delta z}{z}\right)^2 = a^2\left(\frac{\delta x}{x}\right)^2+b^2\left(\frac{\delta y}{y}\right)^2+c^2\left(\frac{\delta w}{w}\right)^2
$$
**Logarithm** ($z=\ln x$): $\delta z = \dfrac{\delta x}{x}$

**Exponential** ($z=e^x$): $\dfrac{\delta z}{z} = \delta x$

## 14.4 Worst-Case vs Statistical (Quadrature) Error
- **Worst-case (maximum) error:** simple linear (algebraic) sum of individual contributions — overly pessimistic, assumes all errors align in the same direction simultaneously.
$$
\delta z_{max} = \left|\frac{\partial f}{\partial x}\right|\delta x + \left|\frac{\partial f}{\partial y}\right|\delta y + \cdots
$$
- **Statistical (quadrature/RSS) error:** root-sum-square as derived above — realistic for independent random errors, since it's statistically unlikely all errors align.

## 14.5 Distribution of Random Errors
**Gaussian (normal) distribution** is the typical model for random measurement error (justified by the **Central Limit Theorem** when many small independent random contributions sum):
$$
P(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-(x-\mu)^2/2\sigma^2}
$$
- 68.3% of values lie within $\pm1\sigma$, 95.4% within $\pm2\sigma$, 99.7% within $\pm3\sigma$.
- **Poisson distribution** relevant for counting experiments (radioactive decay, photon counting): for N counts, $\sigma_N = \sqrt N$ — fundamental "counting statistics" limit relevant to Eldho's photon/X-ray-counting-adjacent solar spectroscopy work.
- **Chi-squared ($\chi^2$) statistic**, used for goodness-of-fit testing:
$$
\chi^2 = \sum_i\frac{(O_i-E_i)^2}{\sigma_i^2}
$$
Reduced chi-square $\chi^2_\nu = \chi^2/\nu$ (where $\nu$=degrees of freedom = number of data points minus number of fitted parameters) should be $\approx1$ for a good fit with correctly-estimated errors — directly relevant to XSPEC spectral fitting quality assessment.

---

# 15. Least Squares Fitting

## 15.1 Principle
Given data points $(x_i,y_i)$ with (assumed known) uncertainties $\sigma_i$, and a model $y=f(x;\vec a)$ with parameters $\vec a$, the **best-fit** parameters minimize the weighted sum of squared residuals:
$$
\chi^2(\vec a) = \sum_{i=1}^N\left(\frac{y_i - f(x_i;\vec a)}{\sigma_i}\right)^2
$$
This is the **Maximum Likelihood Estimate** under the assumption of Gaussian-distributed, independent errors (since minimizing $\chi^2$ is equivalent to maximizing the joint Gaussian likelihood $\mathcal{L}\propto e^{-\chi^2/2}$).

## 15.2 Linear Least Squares (Straight Line Fit)
Model: $y = a+bx$. Minimize:
$$
\chi^2 = \sum_i\frac{(y_i-a-bx_i)^2}{\sigma_i^2}
$$
Setting $\partial\chi^2/\partial a = 0$ and $\partial\chi^2/\partial b=0$ gives the **normal equations**. For the unweighted case ($\sigma_i=\sigma$ constant), defining:
$$
S_x=\sum x_i,\ S_y=\sum y_i,\ S_{xx}=\sum x_i^2,\ S_{xy}=\sum x_iy_i,\ N=\text{no. of points}
$$
solving the 2×2 linear system yields:
$$
b = \frac{N S_{xy}-S_xS_y}{N S_{xx}-S_x^2}, \qquad a = \frac{S_{xx}S_y-S_xS_{xy}}{NS_{xx}-S_x^2}
$$
Equivalently, in terms of means: $b=\dfrac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$, $a=\bar y - b\bar x$.

**Derivation of normal equations (unweighted case):**
$$
\frac{\partial \chi^2}{\partial a} = -2\sum(y_i-a-bx_i)=0 \implies \sum y_i = Na+b\sum x_i
$$
$$
\frac{\partial \chi^2}{\partial b} = -2\sum x_i(y_i-a-bx_i)=0 \implies \sum x_iy_i = a\sum x_i+b\sum x_i^2
$$
These are the two normal equations solved simultaneously above.

## 15.3 Uncertainties in Fitted Parameters
Propagating measurement errors through the (linear) fit formulas:
$$
\sigma_b^2 = \frac{N\sigma^2}{NS_{xx}-S_x^2} = \frac{\sigma^2}{\sum(x_i-\bar x)^2}, \qquad
\sigma_a^2 = \frac{\sigma^2 S_{xx}}{NS_{xx}-S_x^2}
$$
where (if $\sigma_i$ not known a priori) $\sigma^2$ can be estimated post-fit from residuals:
$$
\sigma^2 \approx \frac{1}{N-2}\sum_i(y_i-a-bx_i)^2 \quad (\text{straight-line fit, 2 parameters})
$$

## 15.4 Correlation Coefficient
$$
r = \frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum(x_i-\bar x)^2\sum(y_i-\bar y)^2}}
$$
$r=\pm1$: perfect linear correlation; $r=0$: no linear correlation. $r^2$ (coefficient of determination) = fraction of variance in y "explained" by the linear fit.

## 15.5 Polynomial / General Linear Least Squares
For model $y=\sum_{j=0}^m a_j x^j$ (or any model linear in parameters, e.g. $y=a_1\phi_1(x)+a_2\phi_2(x)+\cdots$), minimizing $\chi^2$ gives a **matrix normal equation**:
$$
(A^TA)\,\vec a = A^T\vec y \implies \vec a = (A^TA)^{-1}A^T\vec y
$$
where $A_{ij}=\phi_j(x_i)/\sigma_i$ is the **design matrix**. This is the general **matrix least-squares (normal equation)** solution, foundational to essentially all linear regression / linear model fitting, and directly generalizes to the weighted case via $A_{ij}=\phi_j(x_i)/\sigma_i$, $\vec y \to y_i/\sigma_i$.

**Covariance matrix of fitted parameters:** $\text{Cov}(\vec a) = (A^TA)^{-1}$ (diagonal elements give $\sigma_{a_j}^2$; off-diagonal give parameter correlations — important when parameters are highly correlated/degenerate, as often happens in multi-parameter spectral model fitting, e.g. DEM fits with several free temperature/EM parameters).

## 15.6 Non-linear Least Squares
When $f(x;\vec a)$ is **non-linear** in parameters (e.g. Gaussian DEM models, exponential decay fits — directly relevant to Eldho's XSM/chgausdem spectral fitting work), no closed-form solution exists in general. Iterative methods are used:
- **Gauss-Newton method:** linearize model about current parameter estimate via Taylor expansion, solve linear least-squares for the parameter *update* $\Delta\vec a$, iterate until convergence.
- **Levenberg-Marquardt (LM) algorithm:** interpolates between Gauss-Newton (fast near minimum) and gradient descent (robust far from minimum) via a damping parameter $\lambda$, is the de facto standard for non-linear curve fitting (used internally by PyXSPEC's fitting engine, `scipy.optimize.curve_fit`, etc.)
$$
(J^TJ+\lambda\,\text{diag}(J^TJ))\Delta\vec a = J^T(\vec y - f(\vec a))
$$
where $J$ = Jacobian matrix of partial derivatives $\partial f_i/\partial a_j$. Large $\lambda$ → steepest descent (safe, slow); small $\lambda$ → Gauss-Newton (fast, can diverge far from minimum).

## 15.7 Goodness of Fit and Model Comparison
- **Reduced $\chi^2_\nu \approx 1$** indicates a statistically acceptable fit (given correct error estimates); $\chi^2_\nu \gg 1$ suggests underestimated errors or a poor/incomplete model; $\chi^2_\nu \ll 1$ suggests overestimated errors or overfitting.
- **F-test:** compares nested models (e.g. single- vs double-Gaussian DEM) to test whether adding parameters gives a statistically significant improvement in fit.
$$
F = \frac{(\chi^2_1-\chi^2_2)/(\nu_1-\nu_2)}{\chi^2_2/\nu_2}
$$
- **Akaike/Bayesian Information Criteria (AIC/BIC)** penalize extra free parameters, used for more rigorous model selection.

---

# Quick-Reference Formula Sheet

| Topic | Key Formula |
|---|---|
| Diode current | $I=I_0(e^{V/nV_T}-1)$ |
| Built-in potential | $V_{bi}=V_T\ln(N_AN_D/n_i^2)$ |
| Depletion width | $W\propto\sqrt{V_{bi}-V_A}$ |
| BJT gain relation | $\beta=\alpha/(1-\alpha)$ |
| BJT transconductance | $g_m=I_C/V_T$ |
| MOSFET saturation current | $I_D=\frac12\mu_nC_{ox}(W/L)(V_{GS}-V_T)^2$ |
| Solar cell $V_{OC}$ | $V_{OC}=nV_T\ln(I_L/I_0+1)$ |
| LED wavelength | $\lambda(\text{nm})=1240/E_g(\text{eV})$ |
| Inverting op-amp | $A_V=-R_f/R_1$ |
| Non-inverting op-amp | $A_V=1+R_f/R_1$ |
| Op-amp GBW | constant; $A_{CL}\times BW_{CL}=$ const |
| R-2R DAC | $V_{out}\propto D/2^n$ |
| ADC quantization SNR | $6.02n+1.76$ dB |
| Standard error of mean | $\sigma_{\bar x}=s/\sqrt N$ |
| Error propagation (sum) | $(\delta z)^2=(\delta x)^2+(\delta y)^2$ |
| Error propagation (product) | $(\delta z/z)^2=(\delta x/x)^2+(\delta y/y)^2$ |
| Least-squares slope | $b=\dfrac{N S_{xy}-S_xS_y}{NS_{xx}-S_x^2}$ |
| Reduced chi-square | $\chi^2_\nu=\chi^2/(N-p)$, want $\approx1$ |

---

*Notes prepared as CSIR-NET Physical Sciences Unit VI reference. All plots/schematics are self-generated (matplotlib/schemdraw) for illustration — no external copyrighted diagrams used. For deeper circuit-level diagrams beyond what's shown here (specific pin-outs, IC datasheets), refer to standard texts: Sedra & Smith (*Microelectronic Circuits*), Millman & Halkias (*Electronic Devices and Circuits*), Streetman & Banerjee (*Solid State Electronic Devices*), Malvino (*Digital Computer Electronics*), and Bevington & Robinson (*Data Reduction and Error Analysis*) for the statistics/error-analysis sections.*
