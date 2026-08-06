# CSIR NET PHYSICAL SCIENCES MASTER STUDY NOTES

---

# SECTION 1: EXPERIMENTAL TECHNIQUES & INSTRUMENTATION

---

## 1.1 Noise Reduction, Shielding, and Grounding

### Fundamental Noise Mechanisms

Experimental physical measurements are fundamentally limited by stochastic fluctuations known as noise.

#### 1. Thermal Noise (Johnson-Nyquist Noise)
Originates from the thermal agitation of charge carriers inside an electrical conductor in equilibrium. It is independent of applied DC voltage (white noise).

The spectral density of thermal voltage noise per unit frequency is constant:
$$S_v(f) = 4 k_B T R \quad [\text{V}^2/\text{Hz}]$$

The root-mean-square (RMS) thermal noise voltage measured over a bandwidth $\Delta f$ is:
$$v_n = \sqrt{4 k_B T R \Delta f}$$

Similarly, the RMS thermal noise current using Norton equivalent is:
$$i_n = \sqrt{\frac{4 k_B T \Delta f}{R}} = \sqrt{4 k_B T G \Delta f}$$

where:
- $k_B = 1.380649 \times 10^{-23} \text{ J/K}$ (Boltzmann constant)
- $T$ = Absolute temperature in Kelvin
- $R$ = Resistance in Ohms ($\Omega$)
- $G = 1/R$ = Conductance in Siemens (S)
- $\Delta f$ = Measurement bandwidth in Hertz (Hz)

#### 2. Shot Noise (Schottky Noise)
Arises from the quantized, discrete nature of electric charge carriers crossing a potential barrier (e.g., $p-n$ junctions, vacuum tubes, photodiode junctions) at random arrival times governed by a Poisson process.

The RMS shot noise current is given by:
$$i_n = \sqrt{2 q I_{DC} \Delta f}$$

where:
- $q = 1.602 \times 10^{-19} \text{ C}$ (Elementary charge)
- $I_{DC}$ = Average direct current flowing through the barrier

#### 3. Flicker Noise ($1/f$ Noise)
Dominates at low frequencies ($f < 1 \text{ kHz}$). It arises from trapping and release mechanisms of charge carriers at surface states, material impurities, and interfaces.

The voltage spectral density is expressed as:
$$S_v(f) = \frac{K \cdot V_\alpha^2}{f^\beta}$$

where $\alpha \approx 2$, $\beta \approx 1$, and $K$ is a material/geometry constant. The corner frequency $f_c$ is defined as the frequency at which the $1/f$ noise power density equals the white noise power density.

#### 4. Popcorn Noise (Burst Noise)
Consists of sudden, discrete step transitions between two or more discrete voltage/current levels at random intervals. Caused by heavy-metal ion contamination or structural defects in semiconductor lattices.

---

### Signal-to-Noise Ratio (SNR) and Noise Calculations

#### Signal-to-Noise Ratio Definitions
$$\text{SNR}_{\text{linear}} = \frac{P_{\text{signal}}}{P_{\text{noise}}} = \left( \frac{V_{\text{signal, rms}}}{V_{\text{noise, rms}}} \right)^2$$

$$\text{SNR}_{\text{dB}} = 10 \log_{10} \left( \frac{P_{\text{signal}}}{P_{\text{noise}}} \right) = 20 \log_{10} \left( \frac{V_{\text{signal, rms}}}{V_{\text{noise, rms}}} \right)$$

#### Noise Factor ($F$) and Noise Figure ($\text{NF}$)
For any two-port signal processing network:
$$F = \frac{\text{SNR}_{\text{in}}}{\text{SNR}_{\text{out}}} = \frac{P_{s,\text{in}} / P_{n,\text{in}}}{P_{s,\text{out}} / P_{n,\text{out}}} = 1 + \frac{N_a}{G \cdot P_{n,\text{in}}}$$

$$\text{NF} = 10 \log_{10}(F) \quad [\text{dB}]$$

where $N_a$ is the added noise power by the device, and $G$ is the power gain of the network.

#### Friis Formula for Cascaded Stages
For $N$ linear amplifier stages connected in series, each having power gain $G_i$ and noise factor $F_i$:

$$F_{\text{total}} = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1 G_2} + \frac{F_4 - 1}{G_1 G_2 G_3} + \dots + \frac{F_N - 1}{\prod_{i=1}^{N-1} G_i}$$

*Key Design Rule:* The first stage of a signal chain (pre-amplifier) must possess high power gain ($G_1 \gg 1$) and low noise factor ($F_1 \approx 1$) to suppress noise contributions from subsequent stages.

---

### Grounding and Shielding Strategies

#### Grounding Architectures

```
SERIES GROUNDING (Chaining - Bad for precision):
 [Stage 1] ----> [Stage 2] ----> [Stage 3] ----> Common Ground Reference
                   (Common Impedance Coupling Occurs Here)

PARALLEL SINGLE-POINT GROUNDING (Good for low frequency f < 1 MHz):
 [Stage 1] ------+
 [Stage 2] ------+-----> Central Ground Point (Star Ground)
 [Stage 3] ------+

MULTI-POINT GROUNDING (Good for high frequency f > 10 MHz):
 [Stage 1] --+   [Stage 2] --+   [Stage 3] --+
     |               |               |
====+=+=============+=+=============+=+==== Low-Impedance Ground Plane
```

1. **Single-Point Series Grounding:** Introduces common-impedance coupling. Current $I_3$ from Stage 3 creates a noise voltage drop $V_n = (I_1 + I_2 + I_3) Z_g$ across the shared ground trace $Z_g$, corrupting Stage 1 reference.
2. **Single-Point Parallel (Star Grounding):** Eliminates common-impedance coupling; ideal for low frequencies ($f < 1 \text{ MHz}$).
3. **Multi-Point Grounding:** Utilizes a continuous, low-impedance copper ground plane. Mandatory for high-frequency circuits ($f > 10 \text{ MHz}$) to minimize trace inductance $L_g$ ($V = L_g \frac{di}{dt}$).

#### Shielding Theory

##### Electric Field Shielding
Achieved by surrounding the target volume with a continuous high-conductivity enclosure (Faraday cage) connected directly to reference ground. This forces the internal electric field to zero by charge redistribution on the conductor surface.

##### Magnetic Field Shielding
At low frequencies ($f < 100 \text{ kHz}$), quasistatic magnetic fields bypass conductive shields. High-permeability materials ($\mu_r \gg 1$, e.g., $\mu$-metal, permalloy) are required to divert magnetic flux lines away from sensitive regions.

At high frequencies, eddy currents induced in conductive shields counter the incident magnetic field.

##### Electromagnetic Shielding Effectiveness ($\text{SE}$)
The total attenuation factor of an incident electromagnetic wave passing through a metallic shield of thickness $d$ is:

$$\text{SE (dB)} = R_{\text{dB}} + A_{\text{dB}} + B_{\text{dB}}$$

1. **Reflection Loss ($R_{\text{dB}}$):**
   $$R_{\text{dB}} = 20 \log_{10} \left( \frac{|E_i|}{|E_t|} \right) \approx 168 + 10 \log_{10} \left( \frac{\sigma_r}{\mu_r f} \right)$$
2. **Absorption Loss ($A_{\text{dB}}$):**
   $$A_{\text{dB}} = 20 \log_{10} \left( e^{d/\delta} \right) = 8.686 \left( \frac{d}{\delta} \right)$$
   where $\delta$ is the electromagnetic **skin depth**:
   $$\delta = \sqrt{\frac{2}{\omega \mu \sigma}} = \frac{1}{\sqrt{\pi f \mu_0 \mu_r \sigma}}$$
3. **Multiple Reflection Correction Factor ($B_{\text{dB}}$):** Negligible when $d \gg \delta$.

---

## 1.2 Fourier Transforms in Experimental Signal Processing

### Continuous Fourier Transform Pair
The continuous-time Fourier transform $\mathcal{F}\{f(t)\} = F(\omega)$ and its inverse $\mathcal{F}^{-1}\{F(\omega)\} = f(t)$ are defined as:

$$F(\omega) = \int_{-\infty}^{\infty} f(t) \, e^{-i \omega t} \, dt$$

$$f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) \, e^{i \omega t} \, d\omega$$

---

### Fundamental Theorems for Signal Processing

| Operation / Property | Time Domain $f(t)$ | Frequency Domain $F(\omega)$ |
| :--- | :--- | :--- |
| **Linearity** | $a f(t) + b g(t)$ | $a F(\omega) + b G(\omega)$ |
| **Time Shifting** | $f(t - t_0)$ | $e^{-i \omega t_0} F(\omega)$ |
| **Frequency Shifting** | $e^{i \omega_0 t} f(t)$ | $F(\omega - \omega_0)$ |
| **Time Scaling** | $f(a t)$ | $\frac{1}{|a|} F\left(\frac{\omega}{a}\right)$ |
| **Time Differentiation** | $\frac{d^n f(t)}{dt^n}$ | $(i \omega)^n F(\omega)$ |
| **Frequency Differentiation**| $(-i t)^n f(t)$ | $\frac{d^n F(\omega)}{d\omega^n}$ |
| **Convolution** | $(f * g)(t) = \int_{-\infty}^\infty f(\tau)g(t-\tau)d\tau$ | $F(\omega) \cdot G(\omega)$ |
| **Modulation / Multiplication**| $f(t) \cdot g(t)$ | $\frac{1}{2\pi} (F * G)(\omega)$ |
| **Cross-Correlation** | $R_{fg}(t) = \int_{-\infty}^\infty f^*(\tau) g(t+\tau) d\tau$ | $F^*(\omega) \cdot G(\omega)$ |

#### Parseval's (Plancherel's) Energy Theorem
The total energy in time domain equals total energy in frequency domain:

$$E = \int_{-\infty}^{\infty} |f(t)|^2 \, dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 \, d\omega = \int_{-\infty}^{\infty} |F(f)|^2 \, df$$

---

### Windowing Functions and Spectral Leakage

Truncating an infinite time domain signal $x(t)$ with a finite rectangular window $w(t)$ of duration $T$ creates artifacts known as **spectral leakage**. This arises because sharp temporal truncations introduce high-frequency sidelobes via convolution with a $\text{sinc}$ function in the frequency domain.

To mitigate spectral leakage, smooth window functions $w(t)$ defined on $t \in [-T/2, T/2]$ are applied.

```
RECTANGULAR:       HANNING (Hann):           HAMMING:
  +---------+         .---.                    .---.
  |         |        /     \                  /     \
  |         |       /       \                /       \
--+---------+--   -'---------'-            -'---------'-
(High Leakage)    (Zero at edges)          (Non-zero pedestal: 0.08)
```

#### Common Window Functions

##### 1. Rectangular Window
$$w(t) = \begin{cases} 1, & |t| \le \frac{T}{2} \\ 0, & \text{otherwise} \end{cases}$$
$$W(\omega) = T \cdot \text{sinc}\left(\frac{\omega T}{2\pi}\right) = T \frac{\sin(\omega T / 2)}{\omega T / 2}$$
- First sidelobe level: $-13 \text{ dB}$ relative to mainlobe peak.
- Mainlobe width: $\Delta \omega = \frac{4\pi}{T}$ (or $\Delta f = \frac{2}{T}$).

##### 2. Hanning (Hann) Window
$$w(t) = \frac{1}{2} \left[ 1 + \cos\left(\frac{2\pi t}{T}\right) \right] = \cos^2\left(\frac{\pi t}{T}\right), \quad |t| \le \frac{T}{2}$$
- First sidelobe level: $-32 \text{ dB}$.
- Mainlobe width: $\Delta f = \frac{4}{T}$.

##### 3. Hamming Window
$$w(t) = 0.54 + 0.46 \cos\left(\frac{2\pi t}{T}\right), \quad |t| \le \frac{T}{2}$$
- First sidelobe level: $-43 \text{ dB}$.
- Mainlobe width: $\Delta f = \frac{4}{T}$.

##### 4. Blackman Window
$$w(t) = 0.42 + 0.5 \cos\left(\frac{2\pi t}{T}\right) + 0.08 \cos\left(\frac{4\pi t}{T}\right), \quad |t| \le \frac{T}{2}$$
- First sidelobe level: $-58 \text{ dB}$.
- Mainlobe width: $\Delta f = \frac{6}{T}$.

---

## 1.3 Lock-In Detector (Phase-Sensitive Detection - PSD)

### Principles of Phase-Sensitive Detection

A Lock-in Amplifier (LIA) extracts weak signals modulated at a specific reference frequency $f_r = \omega_r / 2\pi$ from noisy backgrounds whose amplitude may be up to $10^6$ times greater than the signal itself.

```
                  +-------------------------------------------------+
                  | LOCK-IN AMPLIFIER ARCHITECTURE                  |
                  |                                                 |
Signal In V_s(t) -+--> [ Pre-Amp ] ---> ( X ) ---> [ Low-Pass Filter ] ---> Output V_out
                                         ^          (Time Constant tau)
Reference In -----+--> [ Phase Shifter ]-+
                         (Phase phi_r)
                  +-------------------------------------------------+
```

#### Step-by-Step Mathematical Derivation of PSD Operation

##### 1. Input Signals
Let the input signal containing noise $n(t)$ be:
$$V_{\text{in}}(t) = V_A \sin(\omega_s t + \theta_s) + n(t)$$

Let the internal or external reference signal fed into the phase-shifter be:
$$V_{\text{ref}}(t) = V_B \sin(\omega_r t + \theta_r)$$

##### 2. Multiplier (Phase-Sensitive Detector / Mixer Stage) Output
$$V_{\text{mix}}(t) = V_{\text{in}}(t) \cdot V_{\text{ref}}(t) = \Big[ V_A \sin(\omega_s t + \theta_s) + n(t) \Big] \cdot V_B \sin(\omega_r t + \theta_r)$$

Applying the trigonometric identity $\sin A \sin B = \frac{1}{2} \Big[ \cos(A - B) - \cos(A + B) \Big]$:

$$V_{\text{mix}}(t) = \frac{1}{2} V_A V_B \cos\Big[ (\omega_s - \omega_r) t + (\theta_s - \theta_r) \Big] - \frac{1}{2} V_A V_B \cos\Big[ (\omega_s + \omega_r) t + (\theta_s + \theta_r) \Big] + n(t) V_B \sin(\omega_r t + \theta_r)$$

##### 3. Low-Pass Filter (LPF) Stage
The mixed signal passes through a Low-Pass Filter characterized by an integration time constant $\tau = R C$ and equivalent noise bandwidth:
$$\Delta f_{\text{LPF}} = \frac{1}{4 \tau} \quad (\text{for a 1st-order single RC filter})$$

The filter removes high-frequency components $(\omega_s + \omega_r)$, un-correlated noise products $n(t) V_{\text{ref}}(t)$, and all frequencies where $\omega_s \neq \omega_r$.

When the signal is phase-locked to the reference ($\omega_s = \omega_r$):
$$\lim_{\tau \to \infty} \frac{1}{\tau} \int_0^\tau V_{\text{mix}}(t) \, dt = V_{\text{out}}$$

$$V_{\text{out}} = \frac{1}{2} V_A V_B \cos(\theta_s - \theta_r)$$

##### 4. Phase Dependence
- When $(\theta_s - \theta_r) = 0^\circ$: $V_{\text{out}} = \frac{1}{2} V_A V_B$ (Maximum Positive Output).
- When $(\theta_s - \theta_r) = 90^\circ$: $V_{\text{out}} = 0$ (Null Output).
- When $(\theta_s - \theta_r) = 180^\circ$: $V_{\text{out}} = -\frac{1}{2} V_A V_B$ (Maximum Negative Output).

---

### Dual-Phase Lock-in Architecture
To eliminate the need for manual phase alignment, a dual-phase lock-in amplifier uses two parallel mixers driven by orthogonal reference channels:

```
                  +---> Mixer 1 (Ref: sin(w_r t)) ---> LPF ---> In-Phase Component (I)
Input Signal -----|
                  +---> Mixer 2 (Ref: cos(w_r t)) ---> LPF ---> Quadrature Component (Q)
```

- **In-Phase Channel ($I$ or $X$):**
  $$X = \frac{1}{2} V_A V_B \cos\theta \quad (\text{where } \theta = \theta_s - \theta_r)$$
- **Quadrature Channel ($Q$ or $Y$):**
  $$Y = \frac{1}{2} V_A V_B \sin\theta$$

From $X$ and $Y$, the phase-independent magnitude $R$ and phase angle $\theta$ are reconstructed:

$$R = \sqrt{X^2 + Y^2} = \frac{1}{2} V_A V_B$$

$$\theta = \tan^{-1}\left(\frac{Y}{X}\right)$$

---

### SNR Improvement Calculation

Let input noise spectral density be $e_n [\text{V}/\sqrt{\text{Hz}}]$. The noise voltage passing through the measurement chain with wideband pre-amplifier bandwidth $B_{\text{wide}}$ versus lock-in output filter bandwidth $\Delta f = \frac{1}{4\tau}$ gives:

$$\text{SNR}_{\text{improvement}} = \frac{\text{SNR}_{\text{out}}}{\text{SNR}_{\text{in}}} = \sqrt{\frac{B_{\text{wide}}}{\Delta f}} = \sqrt{4 \tau \, B_{\text{wide}}}$$

*Example:* If broadband noise spans $B_{\text{wide}} = 100 \text{ kHz}$ and the lock-in integration time constant is set to $\tau = 1 \text{ s}$ ($\Delta f = 0.25 \text{ Hz}$):

$$\text{SNR}_{\text{improvement}} = \sqrt{4 \times 1 \times 100,000} = \sqrt{400,000} \approx 632.45 \implies +56 \text{ dB improvement}$$

---

## 1.4 Box-car Integrator

### Operating Principle of Gated Integration
A Box-car Integrator (Gated Integrator) is designed to recover fast, low-duty-cycle repetitive pulsed signals buried in noise.

```
Pulsed Signal s(t) :   ___/\___         ___/\___         ___/\___
Gate Pulse G(t)     :  __|  |__         __|  |__         __|  |__
                       <--t_g-->        <--t_g-->        <--t_g-->
Integration Event   :   [Int. 1]         [Int. 2]         [Int. 3]
```

It operates by opening a fast electronic switch (gate) of duration $t_g$ for a specific delay time $t_d$ relative to a trigger pulse, integrating the signal *only* during the gate period, and holding the sampled voltage on a capacitor.

---

### Mathematical Model of Box-car Integration

For a single trigger event $k$, the integrated output voltage is:

$$V_{\text{out}}^{(k)} = \frac{1}{t_g} \int_{t_d}^{t_d + t_g} \Big[ s(t) + n(t) \Big] \, dt = S_k + N_k$$

where:
- $S_k = \frac{1}{t_g} \int_{t_d}^{t_d + t_g} s(t) \, dt = \bar{s}$ (deterministic average value of signal during gate interval)
- $N_k = \frac{1}{t_g} \int_{t_d}^{t_d + t_g} n(t) \, dt$ (zero-mean random variable representing integrated noise)

---

### Derivation of SNR Enhancement via $N$-Sample Exponential Averaging

When integrating over $N$ repeated signal pulses using either a linear baseline average or an RC exponential moving filter:

#### 1. Signal Summation
Since the signal $s(t)$ is periodic and phase-locked to the trigger:
$$\sum_{k=1}^N S_k = N \cdot \bar{s}$$

#### 2. Noise Summation
Assuming stationary zero-mean white noise $n(t)$ with autocorrelation function $\langle n(t) n(t') \rangle = \sigma_n^2 \delta(t - t')$:

$$\langle N_k \rangle = 0$$

$$\langle N_k N_m \rangle = \sigma_k^2 \delta_{km}$$

The mean-square noise integrated over a single gate duration $t_g$ is:
$$\sigma_{\text{single}}^2 = \left\langle \left( \frac{1}{t_g} \int_0^{t_g} n(t) \, dt \right)^2 \right\rangle = \frac{1}{t_g^2} \int_0^{t_g} \int_0^{t_g} \langle n(t) n(t') \rangle \, dt \, dt' = \frac{\sigma_n^2}{t_g}$$

Summing over $N$ independent statistical realizations:
$$\sigma_{\text{total}}^2 = \sum_{k=1}^N \sigma_{\text{single}}^2 = N \cdot \frac{\sigma_n^2}{t_g}$$

The RMS accumulated noise after $N$ pulses is:
$$\text{RMS}_{\text{noise}}(N) = \sqrt{N} \cdot \sigma_{\text{single}}$$

#### 3. Signal-to-Noise Ratio Enhancement Formula
$$\text{SNR}_N = \frac{\text{Signal}_{\text{accumulated}}}{\text{Noise}_{\text{accumulated}}} = \frac{N \cdot \bar{s}}{\sqrt{N} \cdot \sigma_{\text{single}}} = \sqrt{N} \cdot \left( \frac{\bar{s}}{\sigma_{\text{single}}} \right) = \sqrt{N} \cdot \text{SNR}_1$$

$$\text{SNR}_{\text{improvement}} = \sqrt{N}$$

*Conclusion:* Averaging over $N = 10,000$ pulses improves the Signal-to-Noise Ratio by a factor of $\sqrt{10,000} = 100$ ($+40 \text{ dB}$).

---

## 1.5 Modulation Techniques

Modulation impresses a low-frequency information-bearing signal (baseband signal) $m(t)$ onto a high-frequency carrier wave $c(t) = A_c \cos(\omega_c t + \phi_0)$.

---

### Amplitude Modulation (AM)

#### Standard AM Equation
Let baseband modulating signal be single-tone: $m(t) = A_m \cos(\omega_m t)$, where $\omega_m \ll \omega_c$.

$$s_{\text{AM}}(t) = A_c \left[ 1 + \mu \cos(\omega_m t) \right] \cos(\omega_c t)$$

where $\mu = \frac{A_m}{A_c}$ is the **modulation index** ($0 \le \mu \le 1$).

#### Expansion into Frequency Components
$$s_{\text{AM}}(t) = A_c \cos(\omega_c t) + \frac{\mu A_c}{2} \cos\Big[(\omega_c + \omega_m)t\Big] + \frac{\mu A_c}{2} \cos\Big[(\omega_c - \omega_m)t\Big]$$

- Carrier Component: $\omega_c$, Amplitude $A_c$
- Upper Sideband (USB): $\omega_c + \omega_m$, Amplitude $\frac{\mu A_c}{2}$
- Lower Sideband (LSB): $\omega_c - \omega_m$, Amplitude $\frac{\mu A_c}{2}$

#### AM Bandwidth and Power Derivations

##### Bandwidth
$$B_{\text{AM}} = (\omega_c + \omega_m) - (\omega_c - \omega_m) = 2 \omega_m \implies f_{\text{bandwidth}} = 2 f_m$$

##### Power Relations
Average total power $P_T$ transmitted across a load resistor $R$:

$$P_T = P_{\text{carrier}} + P_{\text{USB}} + P_{\text{LSB}} = \frac{A_c^2}{2R} + \frac{(\mu A_c / 2)^2}{2R} + \frac{(\mu A_c / 2)^2}{2R}$$

$$P_T = P_c \left( 1 + \frac{\mu^2}{4} + \frac{\mu^2}{4} \right) = P_c \left( 1 + \frac{\mu^2}{2} \right)$$

where $P_c = \frac{A_c^2}{2R}$ is the unmodulated carrier power.

When maximum non-distorting modulation occurs ($\mu = 1$):
$$P_{\text{sidebands}} = \frac{1}{3} P_T, \quad P_c = \frac{2}{3} P_T$$

---

### Frequency Modulation (FM)

In FM, the instantaneous angular frequency $\omega_i(t)$ varies linearly with the modulating signal $m(t)$:

$$\omega_i(t) = \omega_c + k_f \, m(t)$$

where $k_f$ is the frequency sensitivity factor $[\text{rad}/(\text{s}\cdot\text{V})]$.

The phase $\theta_i(t)$ is the integral of instantaneous frequency:
$$\theta_i(t) = \int_0^t \omega_i(\tau) \, d\tau = \omega_c t + k_f \int_0^t m(\tau) \, d\tau$$

For single-tone modulation $m(t) = A_m \cos(\omega_m t)$:
$$\theta_i(t) = \omega_c t + \frac{k_f A_m}{\omega_m} \sin(\omega_m t) = \omega_c t + \beta \sin(\omega_m t)$$

where the **FM modulation index** $\beta$ is defined as:
$$\beta = \frac{\Delta f}{f_m} = \frac{k_f A_m}{\omega_m}$$
with peak frequency deviation $\Delta f = \frac{k_f A_m}{2\pi}$.

#### Continuous Time Representation
$$s_{\text{FM}}(t) = A_c \cos\Big( \omega_c t + \beta \sin(\omega_m t) \Big)$$

#### Spectral Decomposition using Bessel Functions
Expanding $s_{\text{FM}}(t)$ via Jacobi-Anger expansion:

$$s_{\text{FM}}(t) = A_c \sum_{n=-\infty}^{\infty} J_n(\beta) \cos\Big( (\omega_c + n \omega_m) t \Big)$$

where $J_n(\beta)$ is the Bessel function of the first kind of order $n$:

$$J_n(\beta) = \sum_{k=0}^{\infty} \frac{(-1)^k}{k! \, \Gamma(n + k + 1)} \left( \frac{\beta}{2} \right)^{n + 2k}$$

##### Properties of Bessel Coefficients
1. $J_{-n}(\beta) = (-1)^n J_n(\beta)$
2. $\sum_{n=-\infty}^{\infty} J_n^2(\beta) = 1$ (Total power in FM wave remains constant $P_T = P_c = \frac{A_c^2}{2R}$ regardless of $\beta$).

#### Carson's Bandwidth Rule
While theoretically infinite in spectral extent, $98\%$ of total signal power in an FM wave is contained within Carson's Bandwidth:

$$B_{\text{FM}} = 2 (\Delta f + f_m) = 2 f_m (\beta + 1)$$

- Narrowband FM ($\beta \ll 1$): $B_{\text{FM}} \approx 2 f_m$ (Similar bandwidth to AM).
- Wideband FM ($\beta \gg 1$): $B_{\text{FM}} \approx 2 \Delta f$.

---

### Phase Modulation (PM)

In PM, instantaneous phase $\theta_i(t)$ varies linearly with $m(t)$:

$$s_{\text{PM}}(t) = A_c \cos\Big( \omega_c t + k_p \, m(t) \Big)$$

where $k_p$ is phase sensitivity in $\text{rad}/\text{V}$. The PM modulation index is $\beta_p = k_p A_m$.

```
Comparison Summary:
Feature                 AM                     FM                     PM
-------------------------------------------------------------------------------------
Parameter Modified      Carrier Amplitude      Carrier Frequency      Carrier Phase
Constant Parameter      Frequency & Phase      Amplitude              Amplitude
Bandwidth Required      2 * f_m                2 * (beta + 1) * f_m   2 * (beta_p + 1) * f_m
Noise Immunity          Low                    High                   High
```

---

## 1.6 High-Frequency Devices (Generators & Detectors)

### Microwave Generators

```
Microwave Frequency Spectrum Ranges:
3 GHz                  30 GHz                300 GHz
  |-- Centimeter wave --|-- Millimeter wave --|-- Sub-millimeter / THz --|
```

---

#### 1. Gunn Diode (Transferred Electron Device - TED)
A bulk semiconductor device (typically $n$-type GaAs, InP, or CdTe) lacking a $p-n$ junction.

##### Ridley-Watkins-Hilsum (RWH) Mechanism
GaAs has a two-valley conduction band structure:
1. **Lower Valley ($\Gamma$-valley):** High electron mobility $\mu_L \approx 8000 \text{ cm}^2/(\text{V}\cdot\text{s})$, low effective mass $m_e^* = 0.067 m_0$.
2. **Upper Valley ($L$-valley):** Separated by energy gap $\Delta E \approx 0.31 \text{ eV}$. Low mobility $\mu_U \approx 180 \text{ cm}^2/(\text{V}\cdot\text{s})$, high effective mass $m_e^* = 0.55 m_0$.

```
    Conduction Band E(k) Structure of GaAs:
       E ^
         |      Upper Valley (L) [Low mobility mu_U, High mass]
         |       \_____/
         |          ^
         |          | Delta E = 0.31 eV
         |       \_____/
         |      Lower Valley (Gamma) [High mobility mu_L, Low mass]
         +---------------------------------> k
```

##### Negative Differential Resistance (NDR) Derivation
When an applied electric field exceeds threshold $E_{\text{th}} \approx 3.2 \text{ kV/cm}$, thermal kinetic energy enables electrons to scatter from the lower to the upper valley. Average drift velocity $v_d$ drops as field $E$ increases:

$$\bar{v}_d = \frac{\mu_L + \mu_U \left( \frac{m_U^*}{m_L^*} \right)^{3/2} \exp\left(-\frac{\Delta E}{k_B T}\right)}{1 + \left( \frac{m_U^*}{m_L^*} \right)^{3/2} \exp\left(-\frac{\Delta E}{k_B T}\right)} E$$

Differential conductivity becomes negative:
$$\sigma_d = \frac{d J}{d E} = q \bar{v}_d \frac{d n}{d E} + q n \frac{d \bar{v}_d}{d E} < 0$$

This forms high-field domains travelling at drift velocity $v_d \approx 10^7 \text{ cm/s}$ across length $L$, emitting microwave radiation at fundamental frequency:

$$f = \frac{v_d}{L_{\text{domain}}}$$

---

#### 2. IMPATT Diode (Impact Avalanche Transit-Time Diode)
High-power microwave diode based on a reverse-biased $p^+-n-i-n^+$ diode structure operating near avalanche breakdown.

##### Operating Dynamics
Combines two phase-delay mechanisms to generate $180^\circ$ phase shift between voltage and current, producing dynamic negative resistance ($R = -V/I$):

1. **Avalanche Multiplication Delay ($\phi_1 = 90^\circ$):** Electron-hole pairs generated by impact ionization reach peak current $90^\circ$ after peak AC voltage:
   $$\frac{d I_a}{dt} = \frac{2}{\tau_a} I_a \left( \int_0^W \alpha(E) \, dx - 1 \right)$$
2. **Transit-Time Delay ($\phi_2 = 90^\circ$):** Generated carriers drift across intrinsic zone $W$ at saturation velocity $v_s$, adding another $90^\circ$ delay ($\theta = \omega W / v_s = \pi$).

##### Oscillation Frequency
$$f_0 = \frac{v_s}{2 W}$$

---

#### 3. Klystron (Linear Beam Vacuum Tube)

##### Two-Cavity Klystron
Consists of an electron gun, cavity resonator 1 (Buncher Cavity), drift space $L$, and cavity resonator 2 (Catcher Cavity).

```
   Electron Gun ===> [ Buncher Cavity ] ====> Drift Space L ====> [ Catcher Cavity ] ===> Collector
                          ^ RF In                                      v RF Out
```

1. **Velocity Modulation:** Electrons with initial kinetic energy $\frac{1}{2} m v_0^2 = q V_0$ pass through the buncher gap with RF voltage $V_1 \sin(\omega t)$. Instantaneous velocity leaving the gap is:
   $$v(t) = v_0 \sqrt{1 + \frac{\beta_i V_1}{V_0} \sin(\omega t)} \approx v_0 \left[ 1 + \frac{\beta_i V_1}{2 V_0} \sin(\omega t) \right]$$
   where $\beta_i = \frac{\sin(\theta_g/2)}{\theta_g/2}$ is the gap beam-coupling coefficient.
2. **Density Bunching:** Faster electrons overtake slower ones in the field-free drift space $L$. The **bunching parameter** $X$ is:
   $$X = \frac{\pi N \beta_i V_1}{V_0} = \frac{\omega L \beta_i V_1}{2 v_0 V_0}$$
3. Optimal current delivery to catcher cavity occurs at maximum value of first-order Bessel function $J_1(X)$, yielding $X = 1.84$.

##### Reflex Klystron
Uses a single cavity serving as both buncher and catcher. A negative Repeller Voltage $V_R$ reflects the velocity-modulated electron beam back through the same cavity. Oscillation condition requires total transit time $T$:

$$\omega T = 2\pi \left( n + \frac{3}{4} \right) \quad \text{for mode } n = 0, 1, 2, \dots$$

---

#### 4. Magnetron (Crossed-Field Cavity Resonator Oscillator)
A high-efficiency ($>70\%$) microwave generator where perpendicular electric ($\mathbf{E} = -E_r \hat{r}$) and magnetic ($\mathbf{B} = B_z \hat{z}$) fields guide electron motion in an annular cavity.

```
   Crossed Field Magnetron Geometry:
             Anode V_0 (Cavity Resonators)
             +-----------------------+
             |    ( )   ( )   ( )    |
             |  /                 \  |
             | |     Cathode       | |   B_z (Out of page)
             |  \                 /  |
             |    ( )   ( )   ( )    |
             +-----------------------+
```

##### Hull Cut-Off Voltage Condition
Under radial electric field $E_r$ and axial magnetic field $B_z$, an electron starting from cathode radius $r_c$ barely grazing anode radius $r_a$ yields the threshold **Hull Cut-Off Voltage** $V_c$:

From Conservation of Angular Momentum ($\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$):
$$m r^2 \frac{d\theta}{dt} = q B_z \int_{r_c}^r r' \, dr' = \frac{q B_z}{2} (r^2 - r_c^2)$$

At graze condition $r = r_a$, tangential kinetic energy equals potential energy $q V_c = \frac{1}{2} m v_\theta^2 = \frac{1}{2} m (r_a \dot{\theta})^2$:

$$V_c = \frac{q B_z^2 r_a^2}{8 m} \left( 1 - \frac{r_c^2}{r_a^2} \right)^2$$

For oscillations to occur, operating voltage $V_0 < V_c$ forces electron trajectories into cycloidal spokes interacting with the $\pi$-mode cavity electromagnetic fields.

---

#### 5. Traveling Wave Tube (TWT)
A broadband amplifier ($1 \text{ GHz} - 100 \text{ GHz}$) utilizing continuous wave-particle interaction along a slow-wave structure (e.g., wire helix).

The phase velocity of the electromagnetic wave along the helix path is reduced to match the electron beam drift velocity $v_0$:

$$v_{\text{phase}} = c \cdot \left( \frac{p}{2\pi a} \right) \approx v_0 = \sqrt{\frac{2 q V_0}{m}}$$

where $p$ is pitch and $a$ is helix radius. Continuous kinetic energy transfer from electron beam to RF field generates exponential spatial gain $A(z) \propto e^{\alpha z}$.

---

### High-Frequency Detectors

#### Schottky Barrier Diode
A metal-semiconductor junction (e.g., Au-N-GaAs) replacing the $p-n$ junction.

```
 Schottky Barrier Energy Band Structure:
   Metal  |  N-Type Semiconductor
          |      /--- Conduction Band E_c
          |     /
   q*phi_b|    /  q*V_bi
   =======+---/--------------- Fermi Level E_F
          |  /
          | /   Valence Band E_v
```

##### Conduction Mechanism
Conduction relies exclusively on **majority carriers** injected via thermionic emission over the barrier height $\phi_b$:

$$J_{\text{Schottky}} = A^* T^2 \exp\left( -\frac{q \phi_b}{k_B T} \right) \left[ \exp\left( \frac{q V}{n k_B T} \right) - 1 \right]$$

where $A^* = \frac{4\pi m^* q k_B^2}{h^3}$ is the effective Richardson constant ($A^* \approx 8.1 \text{ A}/(\text{cm}^2\cdot\text{K}^2)$ for $n$-GaAs).

##### Advantage for High Frequency
Because minority carrier storage delay is zero ($\tau_{\text{rr}} \approx 0 \text{ ps}$), junction capacitance $C_j \approx \frac{A}{2}\sqrt{\frac{2 \epsilon q N_D}{V_{bi}-V}}$ is very low ($<10 \text{ fF}$). Cutoff frequency extends into the THz domain:

$$f_c = \frac{1}{2\pi R_s C_j} > 1 \text{ THz}$$

---

# SECTION 2: ATOMIC PHYSICS

---

## 2.1 Quantum States of an Electron in an Atom

### Schrödinger Equation for Hydrogen-like Atoms
The spatial non-relativistic Schrödinger equation for a single electron of reduced mass $\mu = \frac{m_e M}{m_e + M}$ in a central Coulomb potential $V(r) = -\frac{Z e^2}{4\pi\epsilon_0 r}$ is:

$$\left[ -\frac{\hbar^2}{2\mu} \nabla^2 - \frac{Z e^2}{4\pi\epsilon_0 r} \right] \psi(r, \theta, \phi) = E \psi(r, \theta, \phi)$$

Using spherical coordinates $\nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r}\left( r^2 \frac{\partial}{\partial r} \right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta}\left( \sin\theta \frac{\partial}{\partial \theta} \right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2}{\partial \phi^2}$:

$$\psi_{n l m_l}(r, \theta, \phi) = R_{n l}(r) Y_l^{m_l}(\theta, \phi)$$

---

### Radial Wavefunctions and Quantum Numbers

#### Radial Differential Equation
$$\frac{d}{dr}\left( r^2 \frac{dR_{nl}}{dr} \right) + \frac{2\mu r^2}{\hbar^2} \left[ E + \frac{Z e^2}{4\pi\epsilon_0 r} - \frac{l(l+1)\hbar^2}{2\mu r^2} \right] R_{nl}(r) = 0$$

#### Analytical Solution Formula
Defining dimensionless distance $\rho = \frac{2 Z r}{n a_0}$ (where Bohr radius $a_0 = \frac{4\pi\epsilon_0 \hbar^2}{\mu e^2} \approx 0.529177 \text{ \AA}$):

$$R_{nl}(r) = -\sqrt{ \left(\frac{2Z}{n a_0}\right)^3 \frac{(n-l-1)!}{2n [(n+l)!]^3} } e^{-\rho/2} \rho^l L_{n+l}^{2l+1}(\rho)$$

where $L_{n+l}^{2l+1}(\rho)$ are Associated Laguerre Polynomials.

#### Explicit Low-L Radial Functions

$$R_{10}(r) = 2 \left( \frac{Z}{a_0} \right)^{3/2} e^{-Z r / a_0}$$

$$R_{20}(r) = \frac{1}{\sqrt{2}} \left( \frac{Z}{a_0} \right)^{3/2} \left( 1 - \frac{Z r}{2 a_0} \right) e^{-Z r / 2 a_0}$$

$$R_{21}(r) = \frac{1}{2\sqrt{6}} \left( \frac{Z}{a_0} \right)^{3/2} \left( \frac{Z r}{a_0} \right) e^{-Z r / 2 a_0}$$

$$R_{30}(r) = \frac{2}{3\sqrt{3}} \left( \frac{Z}{a_0} \right)^{3/2} \left( 1 - \frac{2 Z r}{3 a_0} + \frac{2 Z^2 r^2}{27 a_0^2} \right) e^{-Z r / 3 a_0}$$

$$R_{31}(r) = \frac{8}{27\sqrt{6}} \left( \frac{Z}{a_0} \right)^{3/2} \left( \frac{Z r}{a_0} \right) \left( 1 - \frac{Z r}{6 a_0} \right) e^{-Z r / 3 a_0}$$

$$R_{32}(r) = \frac{4}{81\sqrt{30}} \left( \frac{Z}{a_0} \right)^{3/2} \left( \frac{Z r}{a_0} \right)^2 e^{-Z r / 3 a_0}$$

---

### Expectation Values for Hydrogenic Radial Operators $\langle r^k \rangle$

$$\langle r \rangle_{n l} = \frac{a_0}{2 Z} \left[ 3 n^2 - l(l+1) \right]$$

$$\langle r^2 \rangle_{n l} = \frac{a_0^2 n^2}{2 Z^2} \left[ 5 n^2 + 1 - 3 l(l+1) \right]$$

$$\left\langle \frac{1}{r} \right\rangle_{n l} = \frac{Z}{a_0 n^2}$$

$$\left\langle \frac{1}{r^2} \right\rangle_{n l} = \frac{Z^2}{a_0^2 n^3 \left( l + \frac{1}{2} \right)}$$

$$\left\langle \frac{1}{r^3} \right\rangle_{n l} = \frac{Z^3}{a_0^3 n^3 \, l \left( l + \frac{1}{2} \right) (l + 1)}$$

$$\left\langle \frac{1}{r^4} \right\rangle_{n l} = \frac{Z^4 \left[ 3 n^2 - l(l+1) \right]}{2 a_0^4 n^5 \left(l - \frac{1}{2}\right) l \left(l + \frac{1}{2}\right) (l + 1) \left(l + \frac{3}{2}\right)}$$

---

### Angular Part: Spherical Harmonics $Y_l^m(\theta, \phi)$

$$Y_l^m(\theta, \phi) = (-1)^m \sqrt{ \frac{(2l+1)}{4\pi} \frac{(l-m)!}{(l+m)!} } P_l^m(\cos\theta) \, e^{i m \phi}$$

where $P_l^m(x)$ are Associated Legendre Polynomials:
$$P_l^m(x) = \frac{(-1)^m}{2^l l!} (1-x^2)^{m/2} \frac{d^{l+m}}{dx^{l+m}}(x^2 - 1)^l$$

#### Orthogonality Relation
$$\int_0^{2\pi} d\phi \int_0^\pi d\theta \, \sin\theta \, \Big[ Y_l^m(\theta, \phi) \Big]^* Y_{l'}^{m'}(\theta, \phi) = \delta_{ll'} \delta_{mm'}$$

---

### Electron Spin Theory and Pauli Matrices

Intrinsic angular momentum operator $\hat{\mathbf{S}} = (\hat{S}_x, \hat{S}_y, \hat{S}_z) = \frac{\hbar}{2} \boldsymbol{\sigma}$.

#### Matrix Representations in Basis $\left\{ |\alpha\rangle = \begin{pmatrix}1\\0\end{pmatrix}, |\beta\rangle = \begin{pmatrix}0\\1\end{pmatrix} \right\}$

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

#### Algebra Rules
1. Anti-commutation: $\{\sigma_i, \sigma_j\} = \sigma_i \sigma_j + \sigma_j \sigma_i = 2 \delta_{ij} \mathbf{I}_2$
2. Commutation: $[\sigma_i, \sigma_j] = 2 i \epsilon_{ijk} \sigma_k$
3. Pauli Identity: $(\boldsymbol{\sigma} \cdot \mathbf{A})(\boldsymbol{\sigma} \cdot \mathbf{B}) = (\mathbf{A} \cdot \mathbf{B})\mathbf{I}_2 + i \boldsymbol{\sigma} \cdot (\mathbf{A} \times \mathbf{B})$

---

## 2.2 Spectrum of Helium and Alkali Atoms

### The Helium Atom Problem

#### Two-Electron Non-Relativistic Hamiltonian
$$H = -\frac{\hbar^2}{2m} \nabla_1^2 - \frac{\hbar^2}{2m} \nabla_2^2 - \frac{2 e^2}{4\pi\epsilon_0 r_1} - \frac{2 e^2}{4\pi\epsilon_0 r_2} + \frac{e^2}{4\pi\epsilon_0 r_{12}}$$

where $r_{12} = |\mathbf{r}_1 - \mathbf{r}_2|$.

#### Total Wavefunction Symmetry (Pauli Principle)
The total state vector $\Psi(1, 2) = \psi_{\text{spatial}}(\mathbf{r}_1, \mathbf{r}_2) \cdot \chi_{\text{spin}}(1, 2)$ must be antisymmetric under exchange of electrons $1 \leftrightarrow 2$.

```
                        HELIUM ATOM STATES
                                |
        +-----------------------+-----------------------+
        |                                               |
  PARHELIUM (S = 0)                              ORTHOHELIUM (S = 1)
  - Singlet Spin State                           - Triplet Spin States
  - Symmetric Spatial Wavefunction               - Antisymmetric Spatial Wavefunction
  - Higher Energy (Higher Repulsion)             - Lower Energy (Lower Repulsion)
```

1. **Parahelium ($S = 0$, Spin Singlet State):**
   - Spin function (Antisymmetric): $\chi_{0,0} = \frac{1}{\sqrt{2}}\left( |\alpha\beta\rangle - |\beta\alpha\rangle \right)$
   - Spatial function (Symmetric): $\psi_{S}(\mathbf{r}_1, \mathbf{r}_2) = \frac{1}{\sqrt{2}}\left[ \phi_a(\mathbf{r}_1)\phi_b(\mathbf{r}_2) + \phi_b(\mathbf{r}_1)\phi_a(\mathbf{r}_2) \right]$

2. **Orthohelium ($S = 1$, Spin Triplet States):**
   - Spin functions (Symmetric):
     $$\chi_{1,1} = |\alpha\alpha\rangle, \quad \chi_{1,0} = \frac{1}{\sqrt{2}}\left( |\alpha\beta\rangle + |\beta\alpha\rangle \right), \quad \chi_{1,-1} = |\beta\beta\rangle$$
   - Spatial function (Antisymmetric): $\psi_{A}(\mathbf{r}_1, \mathbf{r}_2) = \frac{1}{\sqrt{2}}\left[ \phi_a(\mathbf{r}_1)\phi_b(\mathbf{r}_2) - \phi_b(\mathbf{r}_1)\phi_a(\mathbf{r}_2) \right]$

#### Electrostatic Energy Terms with Direct ($J$) and Exchange ($K$) Integrals

First-order perturbation theory energy shifts:

$$E_{\text{para}} = E_a + E_b + J + K$$

$$E_{\text{ortho}} = E_a + E_b + J - K$$

Where:
- Direct Coulomb Integral:
  $$J = \iint \frac{e^2}{4\pi\epsilon_0 r_{12}} |\phi_a(\mathbf{r}_1)|^2 |\phi_b(\mathbf{r}_2)|^2 \, d^3r_1 \, d^3r_2 > 0$$
- Exchange Integral:
  $$K = \iint \frac{e^2}{4\pi\epsilon_0 r_{12}} \phi_a^*(\mathbf{r}_1)\phi_b^*(\mathbf{r}_2)\phi_b(\mathbf{r}_1)\phi_a(\mathbf{r}_2) \, d^3r_1 \, d^3r_2 > 0$$

*Physical Result:* $E_{\text{ortho}} < E_{\text{para}}$. Orthohelium states lie lower in energy than Parahelium states because the spatial antisymmetry keeps electrons further apart, reducing inter-electronic Coulomb repulsion.

---

### Alkali Atom Spectrum and Quantum Defect

Alkali elements (Li, Na, K, Rb, Cs) possess a single valence electron moving outside a spherically symmetric closed core of $Z-1$ electrons.

#### Central Field Approximation & Quantum Defect ($\delta_l$)
The effective core potential experienced by the outer electron deviates from pure Coulombic $1/r$ at short radii due to penetration of inner shells:

$$V_{\text{eff}}(r) = -\frac{Z_{\text{eff}}(r) e^2}{4\pi\epsilon_0 r}$$

The binding energy for an alkali state $(n, l)$ is expressed using the **Rydberg-Ritz Formula**:

$$E_{n, l} = -\frac{R_{hc} Z_{\text{eff}}^2}{(n^*)^2} = -\frac{R_{hc}}{(n - \delta_l)^2}$$

where:
- $n^* = n - \delta_l$ is the Effective Principal Quantum Number.
- $\delta_l$ is the **Quantum Defect**, dependent on orbital quantum number $l$.
- Penetration order: $\delta_s > \delta_p > \delta_d > \delta_f \approx 0$.

#### Spectral Series of Alkali Atoms

Transitions down to the lowest accessible states give rise to four principal spectral series:

```
  Alkali Transitions:
  Sharp Series (S)    :  n s ----> 3 p   (Delta l = -1)
  Principal Series (P):  n p ----> 3 s   (Delta l = -1)
  Diffuse Series (D)  :  n d ----> 3 p   (Delta l = -1)
  Fundamental (F)     :  n f ----> 3 d   (Delta l = -1)
```

1. **Principal Series:** $n p \to 3 s \quad (n \ge 3)$ (Doublet structure due to $p_{3/2}, p_{1/2}$ fine splitting, e.g., Sodium D-lines $D_1: 589.6\text{ nm}, D_2: 589.0\text{ nm}$).
2. **Sharp Series:** $n s \to 3 p \quad (n \ge 4)$.
3. **Diffuse Series:** $n d \to 3 p \quad (n \ge 3)$ (Triplet-like compound doublet structure).
4. **Fundamental Series:** $n f \to 3 d \quad (n \ge 4)$.

---

## 2.3 Relativistic Corrections for Energy Levels of Hydrogen Atom (Fine Structure)

The fine structure of hydrogen arises from two effects of order $\alpha^2$ relative to the non-relativistic Bohr energy $E_n = -\frac{\alpha^2 \mu c^2}{2 n^2}$: Relativistic Kinetic Energy correction, Spin-Orbit Coupling, and the quantum-electrodynamic Darwin term.

$$\alpha = \frac{e^2}{4\pi\epsilon_0 \hbar c} \approx \frac{1}{137.036}$$

---

### Step 1: Relativistic Kinetic Energy Correction ($H_{\text{rel}}'$)

Expand relativistic kinetic energy operator $T = \sqrt{p^2 c^2 + m^2 c^4} - m c^2$:

$$T = m c^2 \left( 1 + \frac{p^2}{m^2 c^2} \right)^{1/2} - m c^2 = \frac{p^2}{2m} - \frac{p^4}{8 m^3 c^2} + \dots$$

$$H_{\text{rel}}' = -\frac{p^4}{8 m^3 c^2} = -\frac{1}{2 m c^2} \left( \frac{p^2}{2m} \right)^2 = -\frac{1}{2 m c^2} \left( H_0 - V(r) \right)^2$$

Using first-order perturbation theory:

$$\Delta E_{\text{rel}} = \langle H_{\text{rel}}' \rangle = -\frac{1}{2 m c^2} \left[ E_n^2 - 2 E_n \langle V \rangle + \langle V^2 \rangle \right]$$

Substitute $V(r) = -\frac{Z e^2}{4\pi\epsilon_0 r}$ and radial expectation values $\langle 1/r \rangle$, $\langle 1/r^2 \rangle$:

$$\Delta E_{\text{rel}} = -\frac{E_n^2}{2 m c^2} \left[ \frac{4 n}{l + 1/2} - 3 \right]$$

---

### Step 2: Spin-Orbit Coupling ($H_{\text{SO}}'$)

An electron moving at velocity $\mathbf{v}$ through an electrostatic field $\mathbf{E} = -\nabla V = -\frac{1}{e} \frac{d V(r)}{dr} \frac{\mathbf{r}}{r}$ experiences an internal magnetic field $\mathbf{B}_{\text{int}} = -\frac{\mathbf{v} \times \mathbf{E}}{c^2}$.

Including the Thomas Precession factor of $1/2$ (transformation from accelerating electron frame to lab frame):

$$H_{\text{SO}}' = \frac{1}{2 m^2 c^2} \frac{1}{r} \frac{d V(r)}{dr} (\mathbf{L} \cdot \mathbf{S}) = \frac{Z e^2}{8\pi\epsilon_0 m^2 c^2 r^3} (\mathbf{L} \cdot \mathbf{S})$$

Using total angular momentum $\mathbf{J} = \mathbf{L} + \mathbf{S} \implies J^2 = L^2 + S^2 + 2\mathbf{L}\cdot\mathbf{S}$:

$$\mathbf{L} \cdot \mathbf{S} = \frac{\hbar^2}{2} \left[ j(j+1) - l(l+1) - s(s+1) \right]$$

Evaluating expectation value with $\left\langle \frac{1}{r^3} \right\rangle_{n l}$:

$$\Delta E_{\text{SO}} = \frac{Z e^2 \hbar^2}{16\pi\epsilon_0 m^2 c^2} \frac{j(j+1) - l(l+1) - 3/4}{a_0^3 n^3 \, l \left(l + \frac{1}{2}\right) (l + 1)} \quad (\text{for } l \neq 0)$$

Using $E_n = -\frac{Z^2 e^2}{8\pi\epsilon_0 a_0 n^2}$:

$$\Delta E_{\text{SO}} = \frac{E_n^2}{m c^2} \frac{n \left[ j(j+1) - l(l+1) - 3/4 \right]}{l \left(l + \frac{1}{2}\right) (l + 1)}$$

---

### Step 3: Darwin Term ($H_{\text{Darwin}}'$)

Originates from non-local zitterbewegung (rapid relativistic oscillation) of the electron over a Compton wavelength $\lambda_c = \frac{\hbar}{mc}$.

$$H_{\text{Darwin}}' = \frac{\hbar^2}{8 m^2 c^2} \nabla^2 V(r) = \frac{\hbar^2}{8 m^2 c^2} \frac{Z e^2}{\epsilon_0} \delta^3(\mathbf{r})$$

Since $|\psi_{n l m}(0)|^2 = \frac{Z^3}{\pi a_0^3 n^3} \delta_{l, 0}$, this term acts **only on $s$-states ($l=0$)**:

$$\Delta E_{\text{Darwin}} = \frac{E_n^2}{m c^2} (2n) \cdot \delta_{l,0}$$

---

### Total Combined Fine Structure Formula

Summing $\Delta E_{\text{rel}} + \Delta E_{\text{SO}} + \Delta E_{\text{Darwin}}$ for any orbital angular momentum $l$:

$$\Delta E_{\text{FS}} = \Delta E_{\text{rel}} + \Delta E_{\text{SO/Darwin}} = -\frac{E_n^2}{2 m c^2} \left[ \frac{4n}{j + 1/2} - 3 \right]$$

Adding this shift to the unperturbed Bohr energy gives the Dirac Fine Structure Formula for Hydrogen:

$$E_{n, j} = E_n \left[ 1 + \frac{\alpha^2 Z^2}{n^2} \left( \frac{n}{j + 1/2} - \frac{3}{4} \right) \right]$$

#### Energy Level Splitting Spectrum ($n=2$)
- $2s_{1/2}$ ($l=0, j=1/2$) and $2p_{1/2}$ ($l=1, j=1/2$) remain strictly degenerate in Dirac theory.
- $2p_{3/2}$ ($l=1, j=3/2$) lies higher by $\Delta E = \frac{\alpha^4 m c^2}{32} \approx 4.5 \times 10^{-5} \text{ eV} \quad (10.9 \text{ GHz})$.
- *Note:* The Lamb Shift ($\approx 1057 \text{ MHz}$) breaks the $2s_{1/2} - 2p_{1/2}$ degeneracy due to vacuum fluctuation interactions.

---

## 2.4 Hyperfine Structure and Isotopic Shift

### Hyperfine Structure (HFS)

Originates from the magnetic interaction between the total electronic angular momentum $\mathbf{J}$ and the nuclear spin angular momentum $\mathbf{I}$.

#### Hamiltonian and Total Angular Momentum $\mathbf{F}$
$$\mathbf{F} = \mathbf{J} + \mathbf{I}$$

Quantum numbers $F$ take discrete values:
$$F = |J - I|, \, |J - I| + 1, \, \dots, \, J + I$$

$$H_{\text{HFS}} = A \, (\mathbf{I} \cdot \mathbf{J})$$

where $A$ is the Magnetic Dipole Hyperfine Coupling Constant $[\text{Hz}]$:
$$A = \frac{\mu_0}{4\pi} g_e \mu_B g_I \mu_N \left\langle \frac{1}{r^3} \right\rangle$$

#### Energy Shift Derivation
$$\mathbf{I} \cdot \mathbf{J} = \frac{1}{2} \left[ F^2 - J^2 - I^2 \right] = \frac{\hbar^2}{2} \Big[ F(F+1) - J(J+1) - I(I+1) \Big]$$

$$\Delta E_{\text{HFS}} = \frac{A}{2} \Big[ F(F+1) - J(J+1) - I(I+1) \Big]$$

#### Landé Interval Rule for Hyperfine Structure
The separation between two adjacent hyperfine sub-levels $F$ and $F-1$ is proportional to $F$:

$$\Delta E_{\text{HFS}}(F) - \Delta E_{\text{HFS}}(F-1) = A \cdot F$$

---

### Isotopic Shift

The spectral line frequency shift observed between different isotopes ($A_1, A_2$) of the same element consists of two distinct physical contributions:

$$\Delta \nu_{\text{isotope}} = \Delta \nu_{\text{mass}} + \Delta \nu_{\text{field}}$$

#### 1. Mass Shift ($\Delta \nu_{\text{mass}}$)
Dominates in light elements ($Z < 30$).

##### Normal Mass Shift (NMS)
Accounts for change in reduced mass $\mu = \frac{m_e M}{m_e + M}$:
$$\Delta \nu_{\text{NMS}} = \nu_0 \left( \frac{m_e}{M_2} - \frac{m_e}{M_1} \right) = \nu_0 \frac{m_e (M_1 - M_2)}{M_1 M_2}$$

##### Specific Mass Shift (SMS)
Accounts for dynamic momentum cross-correlations between electrons:
$$H_{\text{SMS}} = \frac{1}{M} \sum_{i < j} \mathbf{p}_i \cdot \mathbf{p}_j$$

#### 2. Field (Volume) Shift ($\Delta \nu_{\text{field}}$)
Dominates in heavy elements ($Z > 60$).

Assumes the nucleus is a sphere of finite charge radius $R = r_0 A^{1/3}$. The potential inside the nucleus deviates from $-\frac{Z e^2}{4\pi\epsilon_0 r}$, causing an energy shift proportional to $s$-electron density at origin $|\psi(0)|^2$:

$$\Delta E_{\text{field}} = \frac{2\pi}{3} \left(\frac{Z e^2}{4\pi\epsilon_0}\right) |\psi(0)|^2 \delta \langle r_{\text{nuc}}^2 \rangle$$

where $\delta \langle r_{\text{nuc}}^2 \rangle \propto (A_2^{2/3} - A_1^{2/3})$ is the change in mean-square nuclear charge radius.

---

## 2.5 Width of Spectral Lines

Spectral lines are not infinitely sharp delta functions; they display characteristic line-shape profiles $I(\nu)$ broadened by quantum and statistical mechanisms.

```
       LORENTZIAN (Natural/Pressure)           GAUSSIAN (Thermal Doppler)
              I ^                                     I ^
                |   |                                   |  / \
                |  / \                                  | /   \
                | /   \                                 |/     \
           -----+-------+-----> nu                 -----+-------+-----> nu
              (Heavy Tails)                           (Narrow Tails)
```

---

### Natural Broadening (Homogeneous)

Originates from the finite lifetime $\tau$ of quantum states mandated by the Heisenberg Energy-Time Uncertainty Principle $\Delta E \cdot \tau \ge \frac{\hbar}{2}$.

The radiative decay rate is $\gamma = \sum_{i} A_{fi} = \frac{1}{\tau}$.

#### Lorentzian Line Shape Profile
$$I_{\text{Nat}}(\nu) = I_0 \frac{\frac{\gamma}{2\pi}}{(\nu - \nu_0)^2 + \left( \frac{\gamma}{4\pi} \right)^2}$$

#### Full Width at Half Maximum (FWHM)
$$\Delta \nu_{\text{Nat}} = \frac{\gamma}{2\pi} = \frac{1}{2\pi \tau}$$

---

### Thermal Doppler Broadening (Inhomogeneous)

Originates from the random thermal motion of emitting gas atoms following a Maxwell-Boltzmann velocity distribution:

$$f(v_x) \, dv_x = \sqrt{\frac{M}{2\pi k_B T}} \exp\left( -\frac{M v_x^2}{2 k_B T} \right) \, dv_x$$

Non-relativistic Doppler frequency shift: $\nu = \nu_0 \left( 1 + \frac{v_x}{c} \right) \implies v_x = c \frac{\nu - \nu_0}{\nu_0}$.

#### Gaussian Line Shape Profile
$$I_{\text{Dop}}(\nu) = I_0 \exp\left[ -\frac{M c^2 (\nu - \nu_0)^2}{2 k_B T \nu_0^2} \right]$$

#### FWHM Derivation
Set $I(\nu) = \frac{1}{2} I_0$:

$$\frac{M c^2 (\nu - \nu_0)^2}{2 k_B T \nu_0^2} = \ln 2 \implies (\nu - \nu_0) = \sqrt{\frac{2 k_B T \ln 2}{M c^2}} \nu_0$$

$$\Delta \nu_{\text{Dop}} = 2 |\nu - \nu_0| = 2 \nu_0 \sqrt{\frac{2 k_B T \ln 2}{M c^2}} = \sqrt{\frac{8 k_B T \ln 2}{M c^2}} \nu_0$$

---

### Pressure (Collisional) Broadening (Homogeneous)

Collisions between emitting atoms interrupt the coherent phase of emitted radiation. The time between collisions is $\tau_{\text{coll}} = \frac{1}{n \sigma v_{\text{rel}}}$.

#### Lorentzian Line Shape Profile with FWHM
$$\Delta \nu_{\text{coll}} = \frac{1}{\pi \tau_{\text{coll}}} = \frac{n \sigma}{\pi} \sqrt{\frac{8 k_B T}{\pi \mu_{\text{atom}}}}$$

---

### Voigt Profile

When Doppler broadening and collisional/natural broadening occur simultaneously, the resulting line shape is the convolution of Gaussian and Lorentzian functions (a **Voigt Profile**):

$$I_{\text{Voigt}}(\nu) = \int_{-\infty}^{\infty} I_{\text{Lorentzian}}(\nu') \, I_{\text{Gaussian}}(\nu - \nu') \, d\nu'$$

---

## 2.6 LS & JJ Couplings

### Russell-Saunders ($LS$) Coupling Scheme

Applies to light atoms ($Z < 30$), where electrostatic inter-electron repulsion dominates over internal spin-orbit interactions ($H_{\text{electrostatic}} \gg H_{\text{SO}}$).

#### Coupling Order
1. Orbital angular momenta couple strongly: $\mathbf{L} = \sum_i \mathbf{l}_i$
2. Individual electron spins couple strongly: $\mathbf{S} = \sum_i \mathbf{s}_i$
3. Net orbital and spin angular momenta couple weakly: $\mathbf{J} = \mathbf{L} + \mathbf{S}$

#### Term Symbol Notation
$$^{2S+1}L_J$$

where $L$ values correspond to spectroscopic letter code:
$$L = 0 \to \text{S}, \quad 1 \to \text{P}, \quad 2 \to \text{D}, \quad 3 \to \text{F}, \quad 4 \to \text{G}$$

The multiplicity is $2S + 1$. Total number of fine-structure levels for a term is:
$$\text{Number of levels} = \begin{cases} 2S + 1 & \text{if } L \ge S \\ 2L + 1 & \text{if } L < S \end{cases}$$

---

### Hund's Empirical Rules for Ground State Terms

For equivalent electrons occupying the same subshell:

1. **Rule 1 (Maximum Spin Multiplicity):** The ground state configuration maximizes total spin $S = \sum m_s$ to minimize Coulomb electron repulsion.
2. **Rule 2 (Maximum Orbital Angular Momentum):** For a given $S$, the ground state maximizes total orbital angular momentum $L = \sum m_l$.
3. **Rule 3 (Determination of Total Angular Momentum $J$):**
   - If the subshell is **less than half-filled**, $J = |L - S|$ (Normal multiplet).
   - If the subshell is **more than half-filled**, $J = L + S$ (Inverted multiplet).
   - If the subshell is **exactly half-filled**, $L = 0 \implies J = S$.

---

### $JJ$ Coupling Scheme

Applies to heavy atoms ($Z > 60$), where relativistic spin-orbit interactions dominate over electrostatic repulsion ($H_{\text{SO}} \gg H_{\text{electrostatic}}$).

#### Coupling Order
1. For each electron $i$, orbital and spin couple: $\mathbf{j}_i = \mathbf{l}_i + \mathbf{s}_i$
2. Individual total angular momenta couple: $\mathbf{J} = \sum_i \mathbf{j}_i$

#### Term Symbol Notation
$$(j_1, j_2)_J$$

---

### Selection Rules for Electric Dipole ($E1$) Transitions

1. **Parity Rule (Laporte's Rule):** Parity of initial and final states must be opposite ($\Delta l = \pm 1$).
2. **Total Angular Momentum:** $\Delta J = 0, \pm 1 \quad (J = 0 \not\to J = 0 \text{ is forbidden})$.
3. **Magnetic Substate:** $\Delta M_J = 0, \pm 1$.
4. **In Pure $LS$ Coupling:**
   - $\Delta S = 0$ (Spin-conserving transitions)
   - $\Delta L = 0, \pm 1 \quad (L = 0 \not\to L = 0 \text{ is forbidden})$
5. **In Pure $JJ$ Coupling:**
   - $\Delta j_i = 0, \pm 1$ for single active electron.

---

## 2.7 Zeeman, Paschen-Bach, and Stark Effects

```
MAGNETIC FIELD REGIMES:
 Weak Field (H_Z << H_SO)        ---->   ANOMALOUS ZEEMAN EFFECT  (Basis: |J, M_J>)
 Intermediate Field (H_Z ~ H_SO)  ---->   PARTIAL DECOUPLING
 Strong Field (H_Z >> H_SO)      ---->   PASCHEN-BACH EFFECT     (Basis: |L, M_L, S, M_S>)
```

---

### 1. Zeeman Effect (Weak External Magnetic Field $\mathbf{B} = B \hat{z}$)

Interaction Hamiltonian:

$$H_Z = -\boldsymbol{\mu} \cdot \mathbf{B} = \frac{\mu_B}{\hbar} (\mathbf{L} + g_s \mathbf{S}) \cdot \mathbf{B} = \frac{\mu_B}{\hbar} (L_z + 2 S_z) B$$

where Bohr magneton $\mu_B = \frac{e \hbar}{2 m_e} \approx 9.274 \times 10^{-24} \text{ J/T}$, and $g_s \approx 2$.

#### A. Normal Zeeman Effect ($S = 0$)
Since spin $S = 0$, $J = L$.

$$\Delta E_Z = \langle H_Z \rangle = \frac{\mu_B B}{\hbar} \langle L_z \rangle = M_L \mu_B B$$

A single spectral line splits into three distinct components:
- $\pi$-component ($\Delta M_L = 0$): Unshifted frequency $\nu_0$ (Linearly polarized parallel to $\mathbf{B}$).
- $\sigma^\pm$-components ($\Delta M_L = \pm 1$): Shifted frequencies $\nu = \nu_0 \pm \frac{\mu_B B}{h} = \nu_0 \pm \nu_L$ (Circularly polarized in transverse plane).

#### B. Anomalous Zeeman Effect ($S \neq 0$)
The weak magnetic field cannot break spin-orbit coupling ($\mathbf{J}$ remains a good quantum number). We evaluate expectation value of operator $(L_z + 2S_z)$ via the Wigner-Eckart Projection Theorem:

$$\langle L_z + 2 S_z \rangle = \frac{\langle (\mathbf{L} + 2\mathbf{S}) \cdot \mathbf{J} \rangle}{J(J+1)} M_J \hbar = g_J M_J \hbar$$

##### Derivation of Landé $g$-Factor
Expand $(\mathbf{L} + 2\mathbf{S}) \cdot \mathbf{J} = (\mathbf{J} + \mathbf{S}) \cdot \mathbf{J} = J^2 + \mathbf{S} \cdot \mathbf{J}$:

Using $\mathbf{L} = \mathbf{J} - \mathbf{S} \implies L^2 = J^2 + S^2 - 2\mathbf{S}\cdot\mathbf{J} \implies \mathbf{S}\cdot\mathbf{J} = \frac{1}{2}\left( J^2 + S^2 - L^2 \right)$:

$$(\mathbf{L} + 2\mathbf{S}) \cdot \mathbf{J} = J^2 + \frac{1}{2}\left( J^2 + S^2 - L^2 \right) = \frac{3 J^2 + S^2 - L^2}{2}$$

Substituting operators with quantum numbers $J(J+1), S(S+1), L(L+1)$:

$$g_J = \frac{3 J(J+1) + S(S+1) - L(L+1)}{2 J(J+1)} = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2 J(J+1)}$$

##### Energy Level Shift
$$\Delta E_Z = g_J \, M_J \, \mu_B \, B$$

where $M_J = -J, -J+1, \dots, +J$.

---

### 2. Paschen-Bach Effect (Strong External Magnetic Field $\mathbf{B} = B \hat{z}$)

Occurs when magnetic potential energy exceeds spin-orbit coupling energy ($H_Z \gg H_{\text{SO}}$). $\mathbf{L}$ and $\mathbf{S}$ decouple from each other and process independently around $\mathbf{B}$.

- Good quantum numbers: $|L, M_L, S, M_S\rangle$.

#### Unperturbed Field Energy Shift
$$\Delta E_{\text{PB}}^{(0)} = \frac{\mu_B B}{\hbar} \langle L_z + 2 S_z \rangle = (M_L + 2 M_S) \mu_B B$$

#### First-Order Fine-Structure Correction
$$\Delta E_{\text{SO}}' = A \, \langle \mathbf{L} \cdot \mathbf{S} \rangle = A \, \langle L_z S_z \rangle = A \, \hbar^2 \, M_L M_S$$

#### Total Energy Shift
$$\Delta E_{\text{Paschen-Bach}} = (M_L + 2 M_S) \mu_B B + A \, M_L M_S$$

##### Selection Rules
$$\Delta M_S = 0, \quad \Delta M_L = 0, \pm 1$$

The spectrum simplifies into an apparent triplet identical to the Normal Zeeman splitting pattern.

---

### 3. Stark Effect (External Uniform Electric Field $\mathbf{E} = \mathcal{E} \hat{z}$)

Interaction perturbation Hamiltonian:

$$H_{\text{Stark}} = -\mathbf{d} \cdot \mathbf{E} = e \, \mathcal{E} \, z = e \, \mathcal{E} \, r \cos\theta$$

---

#### A. Linear Stark Effect (Degenerate Hydrogen States)
Applies to excited states of Hydrogen ($n \ge 2$) due to spatial degeneracy between states of opposite parity ($s$ and $p$ orbitals).

##### Matrix Representation for Hydrogen $n=2$ Subspace
Basis states: $|200\rangle (2s), |210\rangle (2p_0), |211\rangle (2p_1), |21,-1\rangle (2p_{-1})$.

Because $z$ is an odd parity operator ($\pi = -1$), non-zero matrix elements require $\Delta l = \pm 1, \Delta m_l = 0$:

$$\langle 200 | e \mathcal{E} z | 210 \rangle = \int_0^\infty R_{20}(r) (e \mathcal{E} r) R_{21}(r) r^2 dr \int_0^\pi \Theta_{00}(\theta) \cos\theta \, \Theta_{10}(\theta) \sin\theta \, d\theta = -3 e \mathcal{E} a_0$$

The $4 \times 4$ Hamiltonian matrix in this subspace is:

$$H_{\text{Stark}} = \begin{pmatrix} 0 & -3e\mathcal{E}a_0 & 0 & 0 \\ -3e\mathcal{E}a_0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

##### Diagonalization and Energy Shifts
Diagonalizing yields four energy eigenvalues:

$$\Delta E^{(1)} = +3 e \mathcal{E} a_0, \quad 0, \quad 0, \quad -3 e \mathcal{E} a_0$$

- State $\frac{1}{\sqrt{2}}(|2s\rangle - |2p_0\rangle)$: Energy shift $\Delta E = +3 e \mathcal{E} a_0$ (Permanent electric dipole moment along $-\hat{z}$).
- State $\frac{1}{\sqrt{2}}(|2s\rangle + |2p_0\rangle)$: Energy shift $\Delta E = -3 e \mathcal{E} a_0$.
- States $|2p_1\rangle, |2p_{-1}\rangle$: Unshifted ($\Delta E = 0$).

---

#### B. Quadratic Stark Effect (Non-Degenerate States / Ground State)
Applies to ground state Hydrogen ($1s$) and multi-electron atoms lacking parity degeneracy.

- First-order shift: $\Delta E^{(1)} = \langle 1s | e \mathcal{E} z | 1s \rangle = 0$ (Spatial parity symmetry).
- Second-order perturbation energy formula:

$$\Delta E^{(2)} = \sum_{k \neq n} \frac{|\langle k | e \mathcal{E} z | n \rangle|^2}{E_n^{(0)} - E_k^{(0)}} = -\frac{1}{2} \alpha_p \mathcal{E}^2$$

where $\alpha_p$ is the static atomic electric polarizability:
$$\alpha_p = 2 e^2 \sum_{k \neq n} \frac{|\langle k | z | n \rangle|^2}{E_k^{(0)} - E_n^{(0)}}$$

For Ground State Hydrogen ($1s$):
$$\alpha_p = \frac{9}{2} 4\pi\epsilon_0 a_0^3 \implies \Delta E^{(2)} = -\frac{9}{4} (4\pi\epsilon_0) a_0^3 \mathcal{E}^2$$

---

## 2.8 Electron Spin Resonance (ESR / EPR)

### Physical Principle and Spin Hamiltonian
Electron Spin Resonance (ESR) detects transitions of unpaired electron spins induced by microwave electromagnetic radiation in a static magnetic field $\mathbf{B}_0 = B_0 \hat{z}$.

#### Spin Hamiltonian with Hyperfine Coupling
$$H_{\text{ESR}} = g \mu_B B_0 S_z + A \, \mathbf{S} \cdot \mathbf{I}$$

Ignoring nuclear interaction initially ($\mathbf{I} = 0$), electron Zeeman splitting produces two energy levels:
$$E(M_S = +1/2) = +\frac{1}{2} g \mu_B B_0$$
$$E(M_S = -1/2) = -\frac{1}{2} g \mu_B B_0$$

#### Resonance Condition
Applying transverse microwave field at frequency $\nu_0$ satisfying selection rule $\Delta M_S = \pm 1$:

$$\Delta E = h \nu_0 = g \mu_B B_0$$

where:
- $g \approx 2.0023$ for free electrons.
- Typical experimental parameters: $X$-band frequency $\nu_0 \approx 9.5 \text{ GHz} \implies B_0 \approx 0.34 \text{ T} \quad (3400 \text{ Gauss})$.

---

### Hyperfine Structure Splitting in ESR

Interaction between electron spin $S=1/2$ and nuclear magnetic moments $I$:

$$E(M_S, M_I) = g \mu_B B_0 M_S + A M_S M_I$$

Selection rules: $\Delta M_S = \pm 1, \Delta M_I = 0$.

Transitional frequencies:
$$h \nu = \Delta E = g \mu_B B_0 + A M_I$$

```
ESR HYPERFINE SPLITTING PATTERNS:

Single Nucleus (Spin I)    --->   2I + 1 lines of EQUAL intensity.

N Equivalent Nuclei (Spin I = 1/2) ---> N + 1 lines with BINOMIAL intensity ratios.
  - N = 1 (1:1)
  - N = 2 (1:2:1)
  - N = 3 (1:3:3:1)
  - N = 4 (1:4:6:4:1)
```

#### Example: Methyl Radical ($\text{CH}_3^\bullet$)
Unpaired electron interacts with 3 equivalent protons ($I = 1/2$).
- Number of ESR lines = $2 N I + 1 = 2(3)(1/2) + 1 = 4 \text{ lines}$.
- Relative Intensities: $1 : 3 : 3 : 1$.

---

## 2.9 Nuclear Magnetic Resonance (NMR) & Chemical Shift

### Principle of NMR
Measures energy absorption of nuclear spins ($I > 0$) in a static magnetic field $\mathbf{B}_0$.

$$\boldsymbol{\mu}_N = \gamma_n \hbar \mathbf{I} = g_I \mu_N \mathbf{I}$$

where $\gamma_n$ is the nuclear gyromagnetic ratio, and nuclear magneton $\mu_N = \frac{e \hbar}{2 M_p} \approx 5.05078 \times 10^{-27} \text{ J/T}$.

#### Larmor Precession Frequency Equation
$$\omega_L = 2\pi \nu_L = \gamma_n B_0 = \frac{g_I \mu_N B_0}{\hbar}$$

For a Proton ($^1\text{H}, I = 1/2$) at $B_0 = 11.75 \text{ T}$: $\nu_L \approx 500 \text{ MHz}$ (Radiofrequency region).

---

### Chemical Shift ($\delta$)

Electrons orbiting the nucleus generate an induced secondary magnetic field opposing $\mathbf{B}_0$:

$$B_{\text{local}} = B_0 (1 - \sigma_{\text{shield}})$$

where $\sigma_{\text{shield}}$ is the isotropic dimensionless chemical shielding constant.

#### Dimensionless Scale (Parts Per Million - ppm)
The chemical shift $\delta$ relative to a standard reference compound (Tetramethylsilane, TMS: $\text{Si(CH}_3)_4$, where $\delta_{\text{TMS}} \equiv 0 \text{ ppm}$) is defined as:

$$\delta = \frac{\nu_{\text{sample}} - \nu_{\text{reference}}}{\nu_{\text{reference}}} \times 10^6 \quad [\text{ppm}]$$

---

### Spin-Spin Indirect Coupling ($J$-Coupling)

Nuclear spins interact indirectly through polarization of bonding electrons.

For two non-equivalent sets of nuclei ($A$ and $X$) with $N_X$ equivalent protons of spin $1/2$:

$$\text{Multiplet Splitting Rule} = N_X + 1 \text{ peaks}$$

The relative peak intensities follow Pascal's Triangle coefficients $\binom{N_X}{k}$.

---

# SECTION 3: MOLECULAR PHYSICS

---

## 3.1 Born-Oppenheimer Approximation

### Non-Relativistic Molecular Hamiltonian

For a system of $N_e$ electrons ($\mathbf{r}_i$) and $N_n$ nuclei ($\mathbf{R}_A$):

$$H_{\text{total}} = T_n + T_e + V_{ee} + V_{nn} + V_{en}$$

$$H_{\text{total}} = -\sum_{A=1}^{N_n} \frac{\hbar^2}{2 M_A} \nabla_A^2 - \sum_{i=1}^{N_e} \frac{\hbar^2}{2 m_e} \nabla_i^2 + \sum_{i < j}^{N_e} \frac{e^2}{4\pi\epsilon_0 r_{ij}} + \sum_{A < B}^{N_n} \frac{Z_A Z_B e^2}{4\pi\epsilon_0 R_{AB}} - \sum_{i=1}^{N_e} \sum_{A=1}^{N_n} \frac{Z_A e^2}{4\pi\epsilon_0 r_{iA}}$$

---

### Separation of Electronic and Nuclear Motions

Because mass ratio $\frac{m_e}{M_A} \sim 10^{-4} \to 10^{-5} \ll 1$, electron velocities are substantially higher than nuclear velocities. Nuclei can be treated as stationary while electrons adjust instantaneously to changes in nuclear geometry.

#### Wavefunction Ansatz
$$\Psi_{\text{total}}(\mathbf{r}, \mathbf{R}) = \psi_e(\mathbf{r}; \mathbf{R}) \cdot \chi_n(\mathbf{R})$$

---

### Mathematical Derivation of Two-Step Solution

#### Step 1: Electronic Equation
Solve for electronic spatial eigenfunction $\psi_e(\mathbf{r}; \mathbf{R})$ at fixed nuclear positions $\mathbf{R}$:

$$\Big[ T_e + V_{ee} + V_{en}(\mathbf{r}, \mathbf{R}) \Big] \psi_e(\mathbf{r}; \mathbf{R}) = E_e(\mathbf{R}) \, \psi_e(\mathbf{r}; \mathbf{R})$$

$E_e(\mathbf{R})$ forms the continuous **Parametric Electronic Energy Surface**.

#### Step 2: Nuclear Motion Equation
Substitute $\Psi_{\text{total}} = \psi_e \chi_n$ into full Schrödinger equation $H_{\text{total}} \Psi_{\text{total}} = E_{\text{total}} \Psi_{\text{total}}$:

$$-\sum_A \frac{\hbar^2}{2 M_A} \nabla_A^2 \Big( \psi_e(\mathbf{r}; \mathbf{R}) \chi_n(\mathbf{R}) \Big) + \Big[ E_e(\mathbf{R}) + V_{nn}(\mathbf{R}) \Big] \psi_e \chi_n = E_{\text{total}} \psi_e \chi_n$$

Expanding the nuclear Laplacian acting on a product:
$$\nabla_A^2 (\psi_e \chi_n) = \psi_e \nabla_A^2 \chi_n + 2 (\nabla_A \psi_e) \cdot (\nabla_A \chi_n) + \chi_n \nabla_A^2 \psi_e$$

##### The Adiabatic Approximation Assumption
The Born-Oppenheimer approximation neglects non-adiabatic derivative coupling terms ($\nabla_A \psi_e \approx 0, \nabla_A^2 \psi_e \approx 0$):

$$C_{AB} = \left\langle \psi_e \left| -\frac{\hbar^2}{2M_A} \nabla_A^2 \right| \psi_e \right\rangle \approx 0$$

Multiplying by $\psi_e^*$ and integrating over electronic space $\mathbf{r}$ yields the isolated Nuclear Motion Schrödinger Equation:

$$\left[ -\sum_{A=1}^{N_n} \frac{\hbar^2}{2 M_A} \nabla_A^2 + V_{\text{eff}}(\mathbf{R}) \right] \chi_n(\mathbf{R}) = E_{\text{total}} \, \chi_n(\mathbf{R})$$

where the Effective Potential for nuclear motion is:
$$V_{\text{eff}}(\mathbf{R}) = E_e(\mathbf{R}) + V_{nn}(\mathbf{R})$$

---

## 3.2 Franck-Condon Principle

### Physical Principle
Electronic transitions occur on timescales $\approx 10^{-15} \text{ s}$, whereas nuclear vibrational periods take $\approx 10^{-13} \text{ s}$. Consequently, an electronic transition occurs without significant change in nuclear positions or momenta (a **vertical transition** on a potential energy diagram).

```
   Potential Energy (V)
       ^
       |        /---\  Excited State E_f
       |       /  |  \
       |         v    <--- Vertical Transition (FC Vector)
       |      /----\  Ground State E_i
       |     /      \
       +----------------------------> Internuclear Distance (R)
```

---

### Quantum Mechanical Derivation of Transition Probability

The transition dipole moment vector $\mathbf{M}_{i \to f}$ between initial state $\Psi_i = \psi_{e'}(\mathbf{r}; \mathbf{R}) \chi_{v'}(\mathbf{R})$ and final state $\Psi_f = \psi_{e''}(\mathbf{r}; \mathbf{R}) \chi_{v''}(\mathbf{R})$ is:

$$\mathbf{M}_{i \to f} = \iint \Psi_f^* \, \boldsymbol{\mu} \, \Psi_i \, d^3r \, d^3R$$

Electric dipole operator decomposed into electronic and nuclear components:
$$\boldsymbol{\mu} = \boldsymbol{\mu}_e + \boldsymbol{\mu}_n = -e \sum_i \mathbf{r}_i + e \sum_A Z_A \mathbf{R}_A$$

#### Step-by-Step Factorization
$$\mathbf{M}_{i \to f} = \int d^3R \, \chi_{v''}^*(\mathbf{R}) \left[ \int d^3r \, \psi_{e''}^*(\mathbf{r}; \mathbf{R}) \, (\boldsymbol{\mu}_e + \boldsymbol{\mu}_n) \, \psi_{e'}(\mathbf{r}; \mathbf{R}) \right] \chi_{v'}(\mathbf{R})$$

Since $\int \psi_{e''}^* \boldsymbol{\mu}_n \psi_{e'} \, d^3r = \boldsymbol{\mu}_n \int \psi_{e''}^* \psi_{e'} \, d^3r = 0$ for orthogonal electronic states ($e'' \neq e'$):

$$\mathbf{M}_{i \to f} = \int d^3R \, \chi_{v''}^*(\mathbf{R}) \, \boldsymbol{\mu}_{e' e''}(\mathbf{R}) \, \chi_{v'}(\mathbf{R})$$

where Electronic Dipole Transition Matrix Element $\boldsymbol{\mu}_{e' e''}(\mathbf{R}) = \int \psi_{e''}^* \boldsymbol{\mu}_e \psi_{e'} \, d^3r$.

Using Taylor expansion of $\boldsymbol{\mu}_{e' e''}(\mathbf{R})$ around equilibrium $R_e$:
$$\boldsymbol{\mu}_{e' e''}(\mathbf{R}) \approx \boldsymbol{\mu}_{e' e''}(R_e) + \text{higher order terms}$$

$$\mathbf{M}_{i \to f} \approx \boldsymbol{\mu}_{e' e''}(R_e) \int d^3R \, \chi_{v''}^*(\mathbf{R}) \chi_{v'}(\mathbf{R})$$

---

### Franck-Condon Factor ($q_{v' v''}$)

Transition probability $P_{i \to f} \propto |\mathbf{M}_{i \to f}|^2$:

$$P_{v' \to v''} \propto |\boldsymbol{\mu}_{e' e''}(R_e)|^2 \cdot q_{v' v''}$$

where the **Franck-Condon Factor** $q_{v' v''}$ is defined as the square of the vibrational overlap integral:

$$q_{v' v''} = \left| \int \chi_{v''}^*(\mathbf{R}) \, \chi_{v'}(\mathbf{R}) \, d^3R \right|^2$$

$$\sum_{v''} q_{v' v''} = 1 \quad (\text{Completeness Relation})$$

---

## 3.3 Rotational Spectra of Diatomic Molecules

### 1. Rigid Rotor Model

Assumes bond length $r_0$ remains strictly invariant during rotation.

```
       m_1 (Mass 1) ------- r_0 ------- m_2 (Mass 2)
       <-- r_1 --> (CM) <---- r_2 ---->
```

#### Center of Mass & Reduced Mass ($\mu$)
$$m_1 r_1 = m_2 r_2, \quad r_1 + r_2 = r_0$$
$$r_1 = \frac{m_2}{m_1 + m_2} r_0, \quad r_2 = \frac{m_1}{m_1 + m_2} r_0$$

Moment of Inertia:
$$I = m_1 r_1^2 + m_2 r_2^2 = \frac{m_1 m_2}{m_1 + m_2} r_0^2 = \mu r_0^2$$

#### Energy Level Expression
Rotational Hamiltonian $H = \frac{J^2}{2I}$:

$$E_J = \frac{\hbar^2}{2I} J(J+1) \quad [\text{Joules}], \quad J = 0, 1, 2, \dots$$

Dividing by $h c$ converts energy to rotational term value $F(J)$ in wavenumbers $[\text{cm}^{-1}]$:

$$F(J) = \frac{E_J}{h c} = B \, J(J+1) \quad [\text{cm}^{-1}]$$

where the **Rotational Constant** $B$ is:
$$B = \frac{\hbar}{4\pi c I} = \frac{h}{8\pi^2 I c}$$

#### Selection Rules and Transition Frequencies
- Selection Rule for Dipole Radiation: Permanent electric dipole moment $\mu_{\text{permanent}} \neq 0$ (Homonuclear diatomics like $\text{N}_2, \text{O}_2, \text{H}_2$ are rotationally inactive).
- Quantum State Selection Rule: $\Delta J = \pm 1$.

Absorption transition frequency from $J \to J+1$:
$$\tilde{\nu}_J = F(J+1) - F(J) = B(J+1)(J+2) - B J(J+1)$$

$$\tilde{\nu}_J = 2 B (J+1) \quad [\text{cm}^{-1}], \quad \text{for } J = 0, 1, 2, \dots$$

```
Rotational Absorption Spectrum:
 Line:       J=0->1     J=1->2     J=2->3     J=3->4
 Frequency:   2B         4B         6B         8B
              |----------|----------|----------|
                        Spacing = 2B
```

Consecutive spectral line separation is uniform:
$$\Delta \tilde{\nu} = \tilde{\nu}_{J+1} - \tilde{\nu}_J = 2 B$$

---

### 2. Non-Rigid Rotor Model

Centrifugal forces stretch the elastic bond at high angular velocities, increasing moment of inertia $I$ and lowering energy levels.

#### Modified Energy Term
$$F(J) = B \, J(J+1) - D \, J^2(J+1)^2$$

where $D$ is the **Centrifugal Distortion Constant** $[\text{cm}^{-1}]$:
$$D = \frac{4 B^3}{\omega_e^2}$$

where $\omega_e$ is fundamental vibrational frequency. (Since $D \ll B$, usually $D / B \sim 10^{-4}$).

#### Transition Frequency
$$\tilde{\nu}_J = F(J+1) - F(J) = 2B(J+1) - 4D(J+1)^3$$

Spectral line spacing shrinks progressively at higher $J$ values.

---

### 3. Population Distribution and Intensity Maximum

The relative population of rotational energy level $J$ at temperature $T$ is governed by Maxwell-Boltzmann statistics multiplied by spatial degeneracy $(2J + 1)$:

$$N_J \propto (2J + 1) \, \exp\left( -\frac{E_J}{k_B T} \right) = (2J + 1) \, \exp\left( -\frac{h c B J(J+1)}{k_B T} \right)$$

#### Derivation of State of Maximum Population ($J_{\text{max}}$)
Treating $J$ as continuous variable, maximize $N_J$ by setting $\frac{d N_J}{d J} = 0$:

$$\frac{d}{dJ} \left[ (2J + 1) \exp\left( -\frac{h c B (J^2 + J)}{k_B T} \right) \right] = 0$$

$$2 \exp\left( -\frac{h c B (J^2 + J)}{k_B T} \right) + (2J + 1) \left( -\frac{h c B (2J + 1)}{k_B T} \right) \exp\left( -\frac{h c B (J^2 + J)}{k_B T} \right) = 0$$

$$2 - \frac{h c B (2J + 1)^2}{k_B T} = 0 \implies (2J + 1)^2 = \frac{2 k_B T}{h c B}$$

$$J_{\text{max}} = \sqrt{\frac{k_B T}{2 h c B}} - \frac{1}{2}$$

---

### 4. Isotopic Effect in Rotational Spectra

Substituting an isotope alters mass $m \to m'$, which shifts reduced mass $\mu \to \mu'$ without changing internuclear equilibrium distance $r_0$ or chemical potential curve.

$$\frac{B'}{B} = \frac{I}{I'} = \frac{\mu}{\mu'} = \rho^2 \quad (\text{where } \rho = \sqrt{\mu/\mu'})$$

If isotopic mass increases ($\mu' > \mu$): $B' < B$. Spectral line position shifts down in frequency:

$$\tilde{\nu}_J' = 2 B' (J+1) < 2 B (J+1)$$

---

## 3.4 Vibrational Spectra of Diatomic Molecules

### 1. Harmonic Oscillator Model

Potential Energy Function: $V(r) = \frac{1}{2} k (r - r_e)^2$.

#### Energy Level Expression
$$E_v = \hbar \omega \left( v + \frac{1}{2} \right) \quad [\text{Joules}], \quad v = 0, 1, 2, \dots$$

$$G(v) = \frac{E_v}{h c} = \omega_e \left( v + \frac{1}{2} \right) \quad [\text{cm}^{-1}]$$

where fundamental harmonic frequency parameter $\omega_e$ is:
$$\omega_e = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}} \quad [\text{cm}^{-1}]$$

#### Zero-Point Energy (ZPE)
Ground vibrational state ($v=0$) retains finite non-zero energy due to uncertainty principle:

$$E_0 = \frac{1}{2} \hbar \omega \implies G(0) = \frac{1}{2} \omega_e$$

#### Selection Rules & Transition
- Active Condition: Electric dipole moment must change during vibration $\left( \frac{d\mu}{dr} \right)_{r_e} \neq 0$. (Homonuclear diatomics are vibrationally inactive).
- Selection Rule: $\Delta v = \pm 1$.

Transition energy for all adjacent absorption steps:
$$\Delta G = G(v+1) - G(v) = \omega_e$$

---

### 2. Anharmonic Oscillator Model (Morse Potential)

Real molecular bonds weaken and dissociate at large internuclear separations. Modelled using the **Morse Potential**:

$$V(r) = D_e \left[ 1 - e^{-a(r - r_e)} \right]^2$$

where $D_e$ is depth of potential well, and parameter $a = \omega_e \sqrt{\frac{2\pi^2 c \mu}{h D_e}}$.

```
   Morse Potential Curve vs Harmonic Oscillator:
   Potential V(r)
      ^
      |         / Harmonic Oscillator
      |        /
      |       /   ---- Dissociation Limit D_e
      |      +---/     Anharmonic Morse Potential
      |     /
      +----+-----------------------------> r
```

#### Energy Term Expansion
Solving Schrödinger equation with Morse potential yields:

$$G(v) = \omega_e \left( v + \frac{1}{2} \right) - \omega_e x_e \left( v + \frac{1}{2} \right)^2 + \omega_e y_e \left( v + \frac{1}{2} \right)^3 + \dots$$

where $\omega_e x_e$ is the **Anharmonicity Constant**:
$$\omega_e x_e = \frac{\hbar \omega_e^2}{4 D_e} = \frac{a^2 \hbar}{8\pi c \mu}$$

#### Selection Rules and Transition Transitions
Anharmonicity relaxes absolute dipole selection rules: $\Delta v = \pm 1, \pm 2, \pm 3, \dots$

1. **Fundamental Band ($v = 0 \to 1$):**
   $$\tilde{\nu}_{0 \to 1} = G(1) - G(0) = \omega_e (1 - 2 x_e)$$
2. **First Overtone Band ($v = 0 \to 2$):**
   $$\tilde{\nu}_{0 \to 2} = G(2) - G(0) = 2 \omega_e (1 - 3 x_e)$$
3. **Second Overtone Band ($v = 0 \to 3$):**
   $$\tilde{\nu}_{0 \to 3} = G(3) - G(0) = 3 \omega_e (1 - 4 x_e)$$
4. **Hot Bands ($v = 1 \to 2$):** Originates from populated excited state at elevated temperature:
   $$\tilde{\nu}_{1 \to 2} = G(2) - G(1) = \omega_e (1 - 4 x_e)$$

#### Dissociation Energy Calculation (Birge-Spooner Extrapolation)
Separation between adjacent levels $\Delta G_{v+1/2} = G(v+1) - G(v) = \omega_e - 2\omega_e x_e (v+1)$.

Setting $\Delta G_{v_{\text{max}}+1/2} = 0$ gives maximum vibrational quantum number before dissociation:

$$v_{\text{max}} = \frac{\omega_e}{2 \omega_e x_e} - 1$$

Dissociation energy relative to potential minimum ($D_e$) and relative to $v=0$ state ($D_0$):

$$D_e = \frac{\omega_e^2}{4 \omega_e x_e}$$

$$D_0 = D_e - G(0) = \frac{\omega_e^2}{4 \omega_e x_e} - \frac{1}{2}\omega_e \left(1 - \frac{1}{2}x_e\right)$$

---

## 3.5 Vibration-Rotation Spectra

Simultaneous vibrational and rotational state transitions yield fine structure bands.

### Total Energy Term Value
$$S(v, J) = G(v) + F_v(J) = \omega_e \left(v + \frac{1}{2}\right) - \omega_e x_e \left(v + \frac{1}{2}\right)^2 + B_v J(J+1) - D_v J^2 (J+1)^2$$

where Vibration-Rotation Interaction Constant $\alpha_e$ gives rotational dependence:
$$B_v = B_e - \alpha_e \left( v + \frac{1}{2} \right)$$

---

### Selection Rules and Spectral Branch Definitions

For fundamental vibrational transition ($v = 0 \to 1$):
- $\Delta v = +1$
- $\Delta J = -1 \implies$ **P-Branch**
- $\Delta J = 0 \implies$ **Q-Branch** (Forbidden for linear molecules in $\Sigma$ electronic states; allowed for states with orbital momentum $\Pi, \Delta$)
- $\Delta J = +1 \implies$ **R-Branch**

Let band origin frequency be $\tilde{\nu}_0 = G(1) - G(0) = \omega_e (1 - 2x_e)$.

```
            VIBRATION-ROTATION FINE STRUCTURE BANDS
   P-Branch (Delta J = -1)    Q-Branch      R-Branch (Delta J = +1)
   <--- Decreasing Freq.      (Delta J=0)    Increasing Freq. --->
   ... P(3)  P(2)  P(1)          |           R(0)  R(1)  R(2) ...
   ------------------------------+------------------------------
                             Band Origin nu_0
```

#### 1. R-Branch Frequency Equation ($\Delta J = +1, J'' = J, J' = J+1$)
$$\tilde{\nu}_R(J) = \tilde{\nu}_0 + B_1 (J+1)(J+2) - B_0 J(J+1), \quad \text{for } J = 0, 1, 2, \dots$$

Assuming $B_1 \approx B_0 = B$:
$$\tilde{\nu}_R(J) = \tilde{\nu}_0 + 2 B (J+1)$$

#### 2. P-Branch Frequency Equation ($\Delta J = -1, J'' = J, J' = J-1$)
$$\tilde{\nu}_P(J) = \tilde{\nu}_0 + B_1 (J-1)J - B_0 J(J+1), \quad \text{for } J = 1, 2, 3, \dots$$

Assuming $B_1 \approx B_0 = B$:
$$\tilde{\nu}_P(J) = \tilde{\nu}_0 - 2 B J$$

#### 3. Q-Branch Frequency Equation ($\Delta J = 0, J'' = J, J' = J$)
$$\tilde{\nu}_Q(J) = \tilde{\nu}_0 + (B_1 - B_0) J(J+1)$$

If $B_1 = B_0$, all $Q$-branch transitions coalesce into a single intense line at $\tilde{\nu}_0$.

#### Combined Empirical Formula for P and R Branches
Defining a single index $m$:
- $m = J + 1$ for R-branch ($m = 1, 2, 3, \dots$)
- $m = -J$ for P-branch ($m = -1, -2, -3, \dots$)

$$\tilde{\nu}(m) = \tilde{\nu}_0 + (B_1 + B_0) m + (B_1 - B_0) m^2$$

---

## 3.6 Raman Spectra

### 1. Classical Theory of Raman Scattering

An electric field $\mathbf{E} = \mathbf{E}_0 \cos(2\pi \nu_0 t)$ induces an electric dipole moment $\mathbf{P}$ in a molecule:

$$\mathbf{P} = \boldsymbol{\alpha} \cdot \mathbf{E}$$

where $\boldsymbol{\alpha}$ is the Molecular Polarizability Tensor.

#### A. Vibrational Raman Active Mechanism
Nuclear vibrations modulate polarizability around equilibrium $\alpha_0$:

$$\alpha(t) = \alpha_0 + \left( \frac{d\alpha}{dq} \right)_0 q_0 \cos(2\pi \nu_v t)$$

Substituting $\alpha(t)$ into induced dipole equation:
$$P(t) = \left[ \alpha_0 + \left( \frac{d\alpha}{dq} \right)_0 q_0 \cos(2\pi \nu_v t) \right] \mathbf{E}_0 \cos(2\pi \nu_0 t)$$

Using product-to-sum trigonometric identities:

$$P(t) = \alpha_0 \mathbf{E}_0 \cos(2\pi \nu_0 t) + \frac{1}{2} \left( \frac{d\alpha}{dq} \right)_0 q_0 \mathbf{E}_0 \left\{ \cos\Big[2\pi (\nu_0 - \nu_v) t\Big] + \cos\Big[2\pi (\nu_0 + \nu_v) t\Big] \right\}$$

- **Rayleigh Scattering:** Frequency $\nu_0$, Amplitude $\alpha_0 \mathbf{E}_0$ (Unshifted).
- **Stokes Raman Scattering:** Frequency $\nu_0 - \nu_v$ (Red-shifted).
- **Anti-Stokes Raman Scattering:** Frequency $\nu_0 + \nu_v$ (Blue-shifted).

*Raman Vibrational Activity Rule:* A vibrational mode is Raman active if and only if polarizability changes during vibration: $\left( \frac{d\alpha}{dq} \right)_0 \neq 0$.

#### B. Rotational Raman Active Mechanism
Molecular rotation alters polarizability relative to a fixed lab axis at twice the rotational frequency ($2 \nu_r$):

$$\alpha(t) = \alpha_0 + \Delta \alpha \cos(2\pi \cdot 2\nu_r t)$$

Yielding rotational sidebands shifted by $\pm 2\nu_r$.

---

### 2. Quantum Theory and Selection Rules

```
       RAMAN SCATTERING ENERGY LEVEL TRANSITIONS
       =========================================
       Virtual State ---------------------------
                        ^      |         ^    |
          Incident h*nu0|      |         |    |h*nu0
                        |      |h(nu0-nu)|    |
                        |      v         |    v
       v = 1 ------------------          ------
                        ^                     |
                        |                     v
       v = 0 -----------                      ---------
                     RAYLEIGH           STOKES        ANTI-STOKES
```

#### A. Pure Rotational Raman Spectra
- Activity Condition: Anisotropy of polarizability ($\alpha_\parallel \neq \alpha_\perp$). Homonuclear diatomic molecules ($\text{N}_2, \text{O}_2, \text{H}_2$) ARE Rotational Raman Active!
- Selection Rule: $\Delta J = 0, \pm 2$.

##### Line Positions
- **Stokes Lines ($\Delta J = +2, J \to J+2$):**
  $$\tilde{\nu}_{\text{Stokes}} = \tilde{\nu}_0 - \Big( F(J+2) - F(J) \Big) = \tilde{\nu}_0 - B(2J+3)(2J+2) + B J(J+1)$$
  $$\tilde{\nu}_{\text{Stokes}} = \tilde{\nu}_0 - B(4J + 6) \quad [\text{for } J = 0, 1, 2, \dots]$$
  First Stokes line ($J=0$) appears at $\tilde{\nu}_0 - 6B$.

- **Anti-Stokes Lines ($\Delta J = -2, J \to J-2$):**
  $$\tilde{\nu}_{\text{Anti-Stokes}} = \tilde{\nu}_0 + B(4J - 2) \quad [\text{for } J = 2, 3, 4, \dots]$$
  First Anti-Stokes line ($J=2$) appears at $\tilde{\nu}_0 + 6B$.

- **Separation between adjacent lines:** $\Delta \tilde{\nu} = 4 B$.
- **Separation between Rayleigh line and first line:** $\Delta \tilde{\nu}_{\text{first}} = 6 B$.

---

#### B. Pure Vibrational Raman Spectra
- Selection Rule: $\Delta v = \pm 1$.

Stokes transition ($v=0 \to 1$): $\tilde{\nu} = \tilde{\nu}_0 - \omega_e(1 - 2x_e)$.

##### Anti-Stokes to Stokes Intensity Ratio Formula
Governed by Boltzmann population ratio of vibrational states:

$$\frac{I_{\text{Anti-Stokes}}}{I_{\text{Stokes}}} = \left( \frac{\nu_0 + \nu_v}{\nu_0 - \nu_v} \right)^4 \exp\left( -\frac{h \nu_v}{k_B T} \right)$$

---

### Rule of Mutual Exclusion
For molecules possessing a **center of inversion symmetry** (centrosymmetric molecules, e.g., $\text{CO}_2, \text{C}_2\text{H}_4, \text{N}_2$):

> **Vibrational modes active in Infrared (IR) are forbidden in Raman, and modes active in Raman are forbidden in Infrared.**

- Non-centrosymmetric molecules (e.g., $\text{H}_2\text{O}, \text{NH}_3, \text{HCl}$) may have modes active in both IR and Raman.

---

## 3.7 Electronic Spectra & Fortrat Diagrams

Vibronic electronic transitions involve simultaneous changes in electronic, vibrational, and rotational quantum numbers.

### Fortrat Parabola Derivation

Recall the empirical formula for combined $P$ and $R$ branches:

$$\tilde{\nu}(m) = \tilde{\nu}_0 + (B' + B'') m + (B' - B'') m^2$$

where:
- $B'$ is rotational constant of upper electronic state.
- $B''$ is rotational constant of lower electronic state.
- $m = J'' + 1$ for R-branch ($m > 0$).
- $m = -J''$ for P-branch ($m < 0$).

Completing the square gives the algebraic equation of a parabola (a **Fortrat Parabola**):

$$\tilde{\nu}(m) - \left[ \tilde{\nu}_0 - \frac{(B' + B'')^2}{4(B' - B'')} \right] = (B' - B'') \left[ m + \frac{B' + B''}{2(B' - B'')} \right]^2$$

```
           FORTRAT PARABOLA & BAND HEAD FORMATION
   Vertex m_head < 0 (Degrades to Red)       Vertex m_head > 0 (Degrades to Violet)
        Freq \                                   Freq \
             \     Band Head                          \     Band Head
              \   )                                    \   (
               \ /                                      \ /
    ------------+----------------            ------------+----------------
```

#### Band Head Formation and Vertex Location
The vertex of the parabola defines the **Band Head** where lines converge and reverse direction ($\frac{d\tilde{\nu}}{dm} = 0$):

$$m_{\text{head}} = -\frac{B' + B''}{2(B' - B'')}$$

1. **Band Degraded to the Red (Shaded to Red):**
   - Occurs when $B' < B''$ (Internuclear distance increases in excited state, $r_e' > r_e''$).
   - Vertex $m_{\text{head}} < 0$, so band head forms in the **R-branch**. Lines pile up at higher frequency and head turns back toward red.
2. **Band Degraded to the Violet (Shaded to Violet):**
   - Occurs when $B' > B''$ ($r_e' < r_e''$).
   - Vertex $m_{\text{head}} > 0$, so band head forms in the **P-branch**.

---

# SECTION 4: LASERS AND QUANTUM ELECTRONICS

---

## 4.1 Spontaneous & Stimulated Emission, Einstein A & B Coefficients

Consider a two-level quantum system with energy levels $E_1$ and $E_2$ ($E_2 > E_1$), degeneracies $g_1$ and $g_2$, immersed in isotropic radiation of spectral energy density $\rho(\nu) \, [\text{J}\cdot\text{s}/\text{m}^3]$.

```
   TWO-LEVEL SYSTEM TRANSITIONS:
   E_2 ---------------------        E_2 ---------------------        E_2 ---------------------
         ^                                |                                |   |
         | Absorption                     | Spontaneous                    |   | Stimulated
         | Rate: B_12*N_1*rho             v Emission                       v   v Emission
   E_1 ---------------------        E_1 ---------------------        E_1 ---------------------
                                          Rate: A_21*N_2                   Rate: B_21*N_2*rho
```

### Transition Rate Definitions
1. **Stimulated Absorption:** $\left( \frac{dN_1}{dt} \right)_{\text{abs}} = -B_{12} \, N_1 \, \rho(\nu)$
2. **Spontaneous Emission:** $\left( \frac{dN_2}{dt} \right)_{\text{spont}} = -A_{21} \, N_2$
3. **Stimulated Emission:** $\left( \frac{dN_2}{dt} \right)_{\text{stim}} = -B_{21} \, N_2 \, \rho(\nu)$

---

### Step-by-Step Thermodynamic Equilibrium Derivation

At thermal equilibrium at temperature $T$, total transition rate upward equals total rate downward:

$$B_{12} \, N_1 \, \rho(\nu) = A_{21} \, N_2 + B_{21} \, N_2 \, \rho(\nu)$$

Solving for spectral energy density $\rho(\nu)$:

$$\rho(\nu) \left[ B_{12} N_1 - B_{21} N_2 \right] = A_{21} N_2$$

$$\rho(\nu) = \frac{A_{21} N_2}{B_{12} N_1 - B_{21} N_2} = \frac{A_{21} / B_{21}}{\frac{B_{12}}{B_{21}} \left( \frac{N_1}{N_2} \right) - 1}$$

From Maxwell-Boltzmann distribution, energy populations satisfy:
$$\frac{N_1}{N_2} = \frac{g_1}{g_2} \exp\left( \frac{h \nu}{k_B T} \right)$$

Substituting population ratio:
$$\rho(\nu) = \frac{A_{21} / B_{21}}{\frac{g_1 B_{12}}{g_2 B_{21}} \exp\left( \frac{h \nu}{k_B T} \right) - 1}$$

Comparing this directly with **Planck's Radiation Law**:
$$\rho(\nu) = \frac{8\pi h \nu^3}{c^3} \frac{1}{\exp\left( \frac{h \nu}{k_B T} \right) - 1}$$

For both expressions to hold identically at all temperatures $T$:

#### Einstein Relations
1. Ratio of Absorption/Stimulated Coefficients:
   $$g_1 B_{12} = g_2 B_{21} \implies B_{12} = B_{21} \quad (\text{if } g_1 = g_2)$$
2. Ratio of Spontaneous to Stimulated Coefficients:
   $$\frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3}$$

---

### Ratio of Spontaneous to Stimulated Emission Rates

$$\frac{\text{Rate}_{\text{spont}}}{\text{Rate}_{\text{stim}}} = \frac{A_{21} N_2}{B_{21} N_2 \rho(\nu)} = \frac{A_{21}}{B_{21} \rho(\nu)} = \exp\left( \frac{h \nu}{k_B T} \right) - 1$$

- At optical frequencies ($\nu \sim 10^{14} \text{ Hz}, h\nu \gg k_B T$): Spontaneous emission dominates thermal environments; achieving optical amplification requires non-equilibrium pumping.
- At microwave frequencies ($\nu \sim 10^9 \text{ Hz}, h\nu \ll k_B T$): Stimulated emission dominates naturally (basis of MASERs).

---

## 4.2 Optical Pumping, Population Inversion, and Rate Equations

Laser action requires **Population Inversion**:
$$\Delta N = N_2 - \frac{g_2}{g_1} N_1 > 0$$

A pure two-level system cannot achieve steady-state population inversion via optical pumping because $B_{12} = B_{21}$ forces maximum saturation at $N_2 = N_1$. Multilevel systems are required.

---

### 1. Three-Level Laser System (e.g., Ruby Laser: $\text{Cr}^{3+}:\text{Al}_2\text{O}_3$)

```
   THREE-LEVEL LASER SYSTEM:
   E_3 ---------------------  Pump Level (Short lifetime tau_32 ~ 10^-8 s)
         ^              |
         | Pump W_p     v Fast Non-Radiative Decay
   E_2 --+------------------  Metastable Laser Level (Long lifetime tau_21 ~ 3 ms)
         |              |
         |              v Lasing Transition (h*nu_21)
   E_1 --+------------------  Ground State (Highly Populated)
```

#### Rate Equations
Total population $N = N_1 + N_2 + N_3$.

$$\frac{dN_3}{dt} = W_p (N_1 - N_3) - S_{32} N_3$$

$$\frac{dN_2}{dt} = S_{32} N_3 - A_{21} N_2 - B_{21} (N_2 - N_1) \rho_\nu$$

$$\frac{dN_1}{dt} = -W_p (N_1 - N_3) + A_{21} N_2 + B_{21} (N_2 - N_1) \rho_\nu$$

Assuming rapid non-radiative decay $S_{32} \gg W_p \implies N_3 \approx 0 \implies N \approx N_1 + N_2$.

#### Steady-State Inversion Below Lasing Threshold ($\rho_\nu \to 0$)
$$W_p N_1 \approx A_{21} N_2 = \frac{N_2}{\tau_{21}}$$

$$N_2 = W_p \tau_{21} N_1 = W_p \tau_{21} (N - N_2) \implies N_2 = N \frac{W_p \tau_{21}}{1 + W_p \tau_{21}}$$

$$\Delta N = N_2 - N_1 = N \left( \frac{W_p \tau_{21} - 1}{W_p \tau_{21} + 1} \right)$$

*Threshold Condition:* To achieve inversion ($\Delta N > 0$), pump rate must satisfy $W_p > \frac{1}{\tau_{21}}$. Over half of total ground state population must be pumped to level 2, requiring high threshold pump power.

---

### 2. Four-Level Laser System (e.g., Nd:YAG Laser, He-Ne Laser)

```
   FOUR-LEVEL LASER SYSTEM:
   E_3 ---------------------  Pump Level
         ^              |
         | Pump W_p     v Fast Decay
   E_2 --+------------------  Upper Laser Level (Metastable, Long tau_21)
         |              |
         |              v LASING TRANSITION
   E_1 --+------------------  Lower Laser Level (Fast emptying tau_10 << tau_21)
                        |
                        v Fast Decay
   E_0 ---------------------  Ground State
```

#### Rate Equations
Assuming rapid decay from level 3 to 2 ($S_{32} \to \infty$) and level 1 to 0 ($S_{10} \to \infty$):
$$N_3 \approx 0, \quad N_1 \approx 0, \quad N \approx N_0 + N_2$$

$$\frac{dN_2}{dt} = W_p N_0 - \frac{N_2}{\tau_{21}} - B_{21} N_2 \rho_\nu$$

#### Steady-State Inversion Below Threshold
$$\Delta N \approx N_2 = W_p \tau_{21} N_0$$

Since $N_1 \approx 0$, *any* non-zero pumping rate $W_p > 0$ yields population inversion ($\Delta N > 0$). Four-level lasers have far lower pump thresholds than three-level lasers.

---

## 4.3 Modes of Optical Resonators

An optical resonator consists of two coaxial spherical or planar mirrors with reflectivities $R_1, R_2$ separated by cavity length $L$.

```
   OPTICAL RESONATOR (Fabry-Perot Cavity):
     Mirror 1 (R_1)                               Mirror 2 (R_2)
     +---+                                            +---+
     |   | ======= Standing Wave Optical Mode ======= |   |
     |   | <----------------- L --------------------> |   |
     +---+                                            +---+
```

---

### Longitudinal (Axial) Modes

Longitudinal modes govern the resonant frequencies supported by the cavity based on constructive standing wave interference:

$$L = q \frac{\lambda_q}{2} = q \frac{c}{2 n \nu_q} \quad (q = 1, 2, 3, \dots)$$

#### Resonant Frequencies Equation
$$\nu_q = q \frac{c}{2 n L}$$

#### Mode Spacing / Free Spectral Range (FSR)
$$\Delta \nu_{\text{FSR}} = \nu_{q+1} - \nu_q = \frac{c}{2 n L}$$

$$\Delta \lambda_{\text{FSR}} = \frac{\lambda_0^2}{2 n L}$$

---

### Cavity Linewidth, Finesse ($\mathcal{F}$), and Quality Factor ($Q$)

#### Round-Trip Loss & Cavity Lifetime ($\tau_c$)
Fractional power loss per round trip is $1 - R_1 R_2 e^{-2\alpha L} \approx 1 - R$ (for $R_1=R_2=R, \alpha=0$).

$$\tau_c = \frac{2 L}{c (1 - R_1 R_2)}$$

#### Finesse ($\mathcal{F}$) Definition
$$\mathcal{F} = \frac{\Delta \nu_{\text{FSR}}}{\delta \nu_{\text{cavity}}} = \frac{\pi \sqrt{R_1 R_2}}{1 - R_1 R_2} \approx \frac{\pi \sqrt{R}}{1 - R}$$

#### Cavity Mode Linewidth (FWHM)
$$\delta \nu_{\text{cavity}} = \frac{\Delta \nu_{\text{FSR}}}{\mathcal{F}} = \frac{c (1 - R_1 R_2)}{2\pi L \sqrt{R_1 R_2}}$$

#### Resonator Quality Factor ($Q$)
$$Q = \frac{\nu_0}{\delta \nu_{\text{cavity}}} = 2\pi \nu_0 \tau_c = \frac{2\pi L \nu_0 \sqrt{R_1 R_2}}{c (1 - R_1 R_2)}$$

---

### Transverse Electromagnetic Modes ($\text{TEM}_{mn}$)

Transverse modes define the cross-sectional intensity distribution perpendicular to the optical axis, governed by Hermite-Gaussian profiles:

$$I_{mn}(x, y, z) = I_0 \left[ H_m\left( \frac{\sqrt{2} x}{w(z)} \right) \exp\left(-\frac{x^2}{w(z)^2}\right) \right]^2 \cdot \left[ H_n\left( \frac{\sqrt{2} y}{w(z)} \right) \exp\left(-\frac{y^2}{w(z)^2}\right) \right]^2$$

where $H_m(x)$ is the Hermite Polynomial of order $m$.

- $m, n$: Number of transverse intensity nodes along $x$ and $y$ axes.
- $\text{TEM}_{00}$ (Fundamental Gaussian Mode): Smooth circular profile ($H_0(x)=1$), minimum diffraction divergence.

#### Gaussian Beam Parameters
1. **Beam Waist Radius $w(z)$:**
   $$w(z) = w_0 \sqrt{1 + \left( \frac{z}{z_R} \right)^2}$$
2. **Rayleigh Range ($z_R$):** Distance where beam cross-sectional area doubles:
   $$z_R = \frac{\pi w_0^2}{\lambda}$$
3. **Far-Field Divergence Half-Angle ($\theta$):**
   $$\theta = \lim_{z \to \infty} \frac{w(z)}{z} = \frac{\lambda}{\pi w_0}$$

---

## 4.4 Coherence Length and Coherence Time

Coherence quantifies the phase correlation stability of an optical field across space and time.

```
                  TEMPORAL vs SPATIAL COHERENCE
  Temporal Coherence (Phase correlation over time t)
  WAVE 1: ~~~~~~~~~~~~~~~~~~~~~~~~~~ Continuous Single Frequency (Long tau_c)
  WAVE 2: ~~~___~~~___~~~___~~~___~~ Wave Packets / Phase Jumps (Short tau_c)

  Spatial Coherence (Phase correlation across beam wavefront space)
  Point A *---------------------> Phase Lock Kept across Transverse Area
  Point B *--------------------->
```

---

### 1. Temporal Coherence (First-Order Time Correlation)

Measures phase predictability of a light beam at a fixed spatial point between times $t$ and $t + \tau$.

#### Coherence Time ($\tau_c$)
The characteristic delay over which phase predictability is maintained is inversely proportional to the spectral linewidth $\Delta \nu$:

$$\tau_c \approx \frac{1}{\Delta \nu}$$

#### Coherence Length ($L_c$)
Path length over which phase coherence is preserved:

$$L_c = c \cdot \tau_c = \frac{c}{\Delta \nu} = \frac{\lambda_0^2}{\Delta \lambda}$$

---

### 2. Spatial Coherence (Transverse Mutual Coherence)

Measures phase correlation between two spatially separated points $(x_1, y_1)$ and $(x_2, y_2)$ on the same wavefront at the same time.

For an extended incoherent source of diameter $d$ located at distance $R$:

#### Lateral Coherence Width ($r_c$)
From the Van Cittert-Zernike Theorem:

$$r_c \approx \frac{1.22 \, \lambda \, R}{d} = \frac{1.22 \, \lambda}{\theta_{\text{source}}}$$

where $\theta_{\text{source}} = d/R$ is angular diameter of source.

---

### 3. Degree of Coherence and Fringe Visibility

In a Michelson or Young's double-slit interference setup:

#### Complex Degree of Coherence $g^{(1)}(\tau)$
$$g^{(1)}(\tau) = \frac{\langle E^*(t) E(t+\tau) \rangle}{\langle |E(t)|^2 \rangle}$$

#### Michelson Interference Fringe Visibility ($V$)
$$V = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}} = \frac{2 \sqrt{I_1 I_2}}{I_1 + I_2} |g^{(1)}(\tau)|$$

For equal intensity beams ($I_1 = I_2$):
$$V = |g^{(1)}(\tau)|$$

- Completely Coherent Light: $|g^{(1)}(\tau)| = 1 \implies V = 1$ (Maximum contrast).
- Partial Coherence: $0 < |g^{(1)}(\tau)| < 1 \implies 0 < V < 1$.
- Incoherent Light: $|g^{(1)}(\tau)| = 0 \implies V = 0$ (No fringes).

---

# QUICK REFERENCE FORMULA SHEET FOR EXAM REVISION

```
========================================================================================================
                                      INSTRUMENTATION & NOISE
========================================================================================================
- Johnson Noise Voltage       : v_n = sqrt(4 * k_B * T * R * Delta_f)
- Shot Noise Current          : i_n = sqrt(2 * q * I_DC * Delta_f)
- Friis Cascade Noise Factor  : F_total = F_1 + (F_2 - 1)/G_1 + (F_3 - 1)/(G_1 * G_2) + ...
- Lock-in LPF Output Voltage  : V_out = (1/2) * V_signal * V_ref * cos(theta_s - theta_r)
- Box-car Averaging SNR Gain  : SNR_N = sqrt(N) * SNR_1
- AM Total Power Ratio        : P_total = P_carrier * (1 + mu^2 / 2)
- Carson's FM Bandwidth       : B_FM = 2 * (Delta_f + f_m) = 2 * f_m * (beta + 1)
- Gunn Diode Fundamental Freq : f = v_drift / L
- IMPATT Transit Freq         : f = v_saturation / (2 * W)
- Magnetron Hull Voltage      : V_c = (q * B^2 * r_a^2 / 8m) * (1 - r_c^2 / r_a^2)^2

========================================================================================================
                                          ATOMIC PHYSICS
========================================================================================================
- Hydrogenic Expectation Values: <1/r> = Z / (a_0 * n^2)
                                <1/r^2> = Z^2 / [a_0^2 * n^3 * (l + 1/2)]
                                <1/r^3> = Z^3 / [a_0^3 * n^3 * l * (l + 1/2) * (l + 1)]
- Hydrogenic Energy Shift (FS) : E_{n,j} = E_n * [ 1 + (alpha^2 * Z^2 / n^2) * ( n/(j + 1/2) - 3/4 ) ]
- Fine Structure Constant      : alpha = e^2 / (4 * pi * epsilon_0 * hbar * c) approx 1 / 137.036
- Hyperfine Shift              : Delta E_HFS = (A / 2) * [ F(F+1) - J(J+1) - I(I+1) ]
- Landé Interval Rule          : E(F) - E(F-1) = A * F
- Thermal Doppler FWHM         : Delta nu_D = nu_0 * sqrt( (8 * k_B * T * ln 2) / (M * c^2) )
- Landé g-Factor (Zeeman)      : g_J = 1 + [ J(J+1) + S(S+1) - L(L+1) ] / [ 2 * J(J+1) ]
- Anomalous Zeeman Shift       : Delta E = g_J * M_J * mu_B * B
- Paschen-Bach Energy Shift    : Delta E = (M_L + 2 * M_S) * mu_B * B + A * M_L * M_S
- Linear Stark Shift (H n=2)   : Delta E = +/- 3 * e * E_field * a_0
- ESR Resonance Condition      : h * nu = g * mu_B * B_0
- NMR Larmor Frequency         : omega_L = gamma_n * B_0 * (1 - sigma_shield)

========================================================================================================
                                         MOLECULAR PHYSICS
========================================================================================================
- Rotational Constant          : B = h / (8 * pi^2 * I * c)    [cm^-1]
- Rigid Rotor Line Separation  : Delta nu = 2 * B
- Rotational Centrifugal Shift : F(J) = B * J(J+1) - D * J^2 * (J+1)^2  where D = 4*B^3 / omega_e^2
- Max Populated J State        : J_max = sqrt( k_B * T / (2 * h * c * B) ) - 1/2
- Morse Potential Energy       : G(v) = omega_e*(v + 1/2) - omega_e*x_e*(v + 1/2)^2
- Morse Dissociation Energy    : D_e = omega_e^2 / (4 * omega_e * x_e)
- Vibration-Rotation P & R     : nu_R(J) = nu_0 + 2*B*(J+1),   nu_P(J) = nu_0 - 2*B*J
- Rotational Raman Stokes Line : nu_Stokes = nu_0 - B * (4*J + 6)   (Separation = 4B, First line = 6B)
- Raman Intensity Ratio        : I_AntiStokes / I_Stokes = ( (nu_0 + nu_v)/(nu_0 - nu_v) )^4 * exp(-h*nu_v / k_B*T)
- Fortrat Parabola Head        : m_head = - (B' + B'') / [ 2 * (B' - B'') ]

========================================================================================================
                                      LASERS & QUANTUM ELECTRONICS
========================================================================================================
- Einstein Coefficients Ratio  : A_21 / B_21 = 8 * pi * h * nu^3 / c^3
- Spont / Stim Rate Ratio      : Rate_spont / Rate_stim = exp( h * nu / (k_B * T) ) - 1
- Longitudinal Mode Spacing    : Delta nu_FSR = c / (2 * n * L)
- Cavity Finesse               : Finesse = pi * sqrt(R) / (1 - R)
- Laser Cavity Q-Factor        : Q = 2 * pi * L * nu_0 / [ c * (1 - R) ]
- Beam Rayleigh Range          : z_R = pi * w_0^2 / lambda
- Coherence Length             : L_c = c * tau_c = lambda_0^2 / Delta_lambda
========================================================================================================
```
