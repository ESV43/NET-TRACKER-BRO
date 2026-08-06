# CSIR NET PHYSICAL SCIENCES - COMPREHENSIVE ADVANCED STUDY NOTES

---

# PART I: THERMODYNAMIC AND STATISTICAL PHYSICS

---

## 1. Phase Transitions

Phase transitions represent singularities or non-analyticities in the thermodynamic free energy of a system in the thermodynamic limit ($N \to \infty, V \to \infty$ with $N/V = \rho = \text{constant}$).

```
                             Phase Transitions
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
  First-Order Transitions                             Continuous (Second-Order)
  • Latent heat L > 0                                 • Latent heat L = 0
  • Discontinuous 1st derivatives of G                • Continuous 1st derivatives of G
  • Examples: Boiling, Melting                        • Divergent/discontinuous 2nd derivatives
                                                      • Examples: Ferromagnetic Tc, BEC
```

---

### 1.1 Ehrenfest Classification of Phase Transitions

Ehrenfest classified phase transitions based on the lowest derivative of the Gibbs free energy $G(T, P)$ that exhibits a discontinuity at the transition temperature $T_c$.

The Gibbs free energy differential is:
$$dG = -S dT + V dP$$

The first-order partial derivatives are:
$$\left(\frac{\partial G}{\partial T}\right)_P = -S, \quad \left(\frac{\partial G}{\partial P}\right)_T = V$$

The second-order partial derivatives are related to physical response functions:
$$\left(\frac{\partial^2 G}{\partial T^2}\right)_P = -\left(\frac{\partial S}{\partial T}\right)_P = -\frac{C_P}{T}$$

$$\left(\frac{\partial^2 G}{\partial P^2}\right)_T = \left(\frac{\partial V}{\partial P}\right)_T = -V \kappa_T \quad (\text{where } \kappa_T \text{ is isothermal compressibility})$$

$$\frac{\partial^2 G}{\partial T \partial P} = \left(\frac{\partial V}{\partial T}\right)_P = V \alpha_P \quad (\text{where } \alpha_P \text{ is isobaric thermal expansion coefficient})$$

#### First-Order Phase Transitions
A transition is **first-order** if the first derivative of Gibbs free energy with respect to its thermodynamic variables ($T$ or $P$) is **discontinuous** across the phase boundary:
$$\Delta S = S_2 - S_1 \neq 0, \quad \Delta V = V_2 - V_1 \neq 0$$

*   **Latent Heat ($L$):** The entropy discontinuity gives rise to latent heat absorbed or released during the phase transition:
    $$L = T_c \Delta S = T_c (S_2 - S_1)$$
*   **Response Functions:** $C_P$, $\kappa_T$, and $\alpha_P$ exhibit delta-function singularities at $T_c$.

#### Continuous (Second-Order) Phase Transitions
A transition is **second-order** (or continuous) if the first derivatives of $G$ ($S$ and $V$) are continuous across $T_c$, but the second derivatives are **discontinuous or divergent**:
$$\Delta S = 0 \implies L = 0$$
$$\Delta V = 0$$
$$\Delta C_P = C_{P,2} - C_{P,1} \neq 0 \quad \text{or} \quad C_P \to \infty \text{ as } T \to T_c$$

---

### 1.2 Clausius-Clapeyron Equation (First-Order Transitions)

Consider two phases (Phase 1 and Phase 2) in dynamic thermodynamic equilibrium along a phase boundary $P(T)$.

Along the co-existence curve:
$$G_1(T, P) = G_2(T, P)$$

For a infinitesimal displacement $(dT, dP)$ along the phase boundary:
$$dG_1 = dG_2$$
$$-S_1 dT + V_1 dP = -S_2 dT + V_2 dP$$

Rearranging terms:
$$(V_2 - V_1) dP = (S_2 - S_1) dT$$

$$\frac{dP}{dT} = \frac{S_2 - S_1}{V_2 - V_1} = \frac{\Delta S}{\Delta V}$$

Since the latent heat of transition is $L = T \Delta S$:

$$\frac{dP}{dT} = \frac{L}{T (V_2 - V_1)}$$

#### Applications & Limiting Cases:
1.  **Vaporization/Sublimation ($V_{gas} \gg V_{liquid/solid}$):**
    Assuming the vapor behaves as an ideal gas ($V_{gas} = \frac{R T}{P}$ per mole) and ignoring liquid/solid volume ($V_1 \approx 0$):
    $$\frac{dP}{dT} = \frac{L}{T \left(\frac{RT}{P}\right)} \implies \frac{1}{P} \frac{dP}{dT} = \frac{L}{R T^2}$$
    Integrating assuming constant latent heat $L$:
    $$\ln P = -\frac{L}{R T} + \text{constant} \implies P(T) = P_0 \exp\left[-\frac{L}{R}\left(\frac{1}{T} - \frac{1}{T_0}\right)\right]$$

2.  **Melting (Solid $\to$ Liquid):**
    *   Normal substances: $V_{liquid} > V_{solid} \implies \frac{dP}{dT} > 0$.
    *   Water/Ice anomaly: $V_{ice} > V_{water} \implies \Delta V < 0 \implies \frac{dP}{dT} < 0$ (Melting point decreases with pressure).

---

### 1.3 Ehrenfest Equations (Second-Order Transitions)

For continuous transitions, $S_1 = S_2$ and $V_1 = V_2$ along the phase boundary $P(T)$.

Equating entropy differentials $dS_1 = dS_2$:
$$\left(\frac{\partial S_1}{\partial T}\right)_P dT + \left(\frac{\partial S_1}{\partial P}\right)_T dP = \left(\frac{\partial S_2}{\partial T}\right)_P dT + \left(\frac{\partial S_2}{\partial P}\right)_T dP$$

Using $\left(\frac{\partial S}{\partial T}\right)_P = \frac{C_P}{T}$ and Maxwell relation $\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P = -V \alpha_P$:
$$\frac{C_{P,1}}{T} dT - V \alpha_{P,1} dP = \frac{C_{P,2}}{T} dT - V \alpha_{P,2} dP$$

$$\frac{dP}{dT} = \frac{C_{P,2} - C_{P,1}}{T V (\alpha_{P,2} - \alpha_{P,1})} = \frac{\Delta C_P}{T V \Delta \alpha_P}$$

Similarly, equating volume differentials $dV_1 = dV_2$:
$$\left(\frac{\partial V_1}{\partial T}\right)_P dT + \left(\frac{\partial V_1}{\partial P}\right)_T dP = \left(\frac{\partial V_2}{\partial T}\right)_P dT + \left(\frac{\partial V_2}{\partial P}\right)_T dP$$
$$V \alpha_{P,1} dT - V \kappa_{T,1} dP = V \alpha_{P,2} dT - V \kappa_{T,2} dP$$

$$\frac{dP}{dT} = \frac{\alpha_{P,2} - \alpha_{P,1}}{\kappa_{T,2} - \kappa_{T,1}} = \frac{\Delta \alpha_P}{\Delta \kappa_T}$$

---

### 1.4 Landau Theory of Continuous Phase Transitions

Landau theory provides a phenomenological framework for second-order transitions based on the concept of **spontaneous symmetry breaking** and an **order parameter ($\eta$)**.

*   $\eta = 0$ in the disordered phase ($T > T_c$, high symmetry).
*   $\eta \neq 0$ in the ordered phase ($T < T_c$, lower symmetry).

#### Free Energy Expansion
Near $T_c$, $\eta$ is small. Assuming inversion symmetry ($\eta \to -\eta$ invariance), the Landau free energy density $f(T, \eta)$ is expanded in even powers of $\eta$:

$$f(T, \eta) = f_0(T) + \frac{1}{2} a(T) \eta^2 + \frac{1}{4} b \eta^4 + \frac{1}{6} c \eta^6 - h \eta$$

Where:
*   $b > 0$ for stability in second-order transitions.
*   $a(T)$ changes sign at $T_c$: $a(T) = a_0 (T - T_c)$ with $a_0 > 0$.
*   $h$ is an external conjugate field (e.g., magnetic field $B$).

```
        T > Tc (a > 0)                      T < Tc (a < 0)
          f(T, η)                             f(T, η)
            │                                   │
            │     /\                            │  \     /
            │    /  \                           │   \___/  <-- Minima at ±η0
            │   /    \                          │     │
   ─────────┴───  •  ───► η            ─────────┴─────┼─────► η
              Min at η=0                              0
```

#### Equilibrium Order Parameter ($h = 0$)
Minimizing free energy $\frac{\partial f}{\partial \eta} = 0$:
$$\frac{\partial f}{\partial \eta} = a(T) \eta + b \eta^3 = \eta \left( a_0 (T - T_c) + b \eta^2 \right) = 0$$

1.  **For $T > T_c$ ($a > 0$):**
    The only real root is $\eta_0 = 0$ (Disordered state).
    $\frac{\partial^2 f}{\partial \eta^2} = a(T) > 0$ (Minimum).

2.  **For $T < T_c$ ($a < 0$):**
    Roots are:
    $$\eta_0 = 0 \quad \text{and} \quad \eta_0 = \pm \sqrt{\frac{a_0 (T_c - T)}{b}}$$
    Evaluating stability at $\eta_0 = 0$: $\frac{\partial^2 f}{\partial \eta^2} = a(T) < 0$ (Unstable local maximum).
    At $\eta_0 = \pm \sqrt{\frac{a_0 (T_c - T)}{b}}$:
    $$\frac{\partial^2 f}{\partial \eta^2} = a + 3b \eta_0^2 = a + 3b \left(-\frac{a}{b}\right) = -2a = 2 a_0 (T_c - T) > 0 \quad (\text{Stable minima})$$

Therefore, the order parameter vanishes continuously as $T \to T_c^-$ with exponent $\beta = 1/2$:
$$\eta_0 \propto (T_c - T)^{1/2}$$

#### Susceptibility ($\chi$)
The conjugate field response is $\chi = \left(\frac{\partial \eta}{\partial h}\right)_{h \to 0} = \left(\frac{\partial^2 f}{\partial \eta^2}\right)^{-1}$.

*   **For $T > T_c$ ($\eta_0 = 0$):**
    $$\chi_+ = \frac{1}{a(T)} = \frac{1}{a_0 (T - T_c)} \implies \gamma_+ = 1$$
*   **For $T < T_c$ ($\eta_0 \neq 0$):**
    $$\chi_- = \frac{1}{2 a_0 (T_c - T)} \implies \gamma_- = 1$$

Note the universal mean-field ratio: $\frac{\chi_+(T_c + \Delta T)}{\chi_-(T_c - \Delta T)} = 2$.

#### Critical Isotherm ($T = T_c \implies a = 0$)
At $T = T_c$, equation of state with external field $h$ becomes:
$$\frac{\partial f}{\partial \eta} = b \eta^3 = h \implies \eta \propto h^{1/3} \implies \delta = 3$$

#### Specific Heat Discontinuity ($\Delta C$)
Substitute $\eta_0(T)$ back into $f(T, \eta)$:
*   $T > T_c$: $f(T) = f_0(T)$
*   $T < T_c$: $f(T) = f_0(T) - \frac{a_0^2 (T_c - T)^2}{4b}$

Specific heat $C = -T \frac{\partial^2 f}{\partial T^2}$:
*   $T > T_c$: $C = C_0 = -T \frac{\partial^2 f_0}{\partial T^2}$
*   $T < T_c$: $C = C_0 + T \frac{a_0^2}{2b}$

At $T = T_c$, there is a jump discontinuity:
$$\Delta C = C(T_c^-) - C(T_c^+) = \frac{a_0^2 T_c}{2b}$$
Since there is a jump without divergence, exponent $\alpha = 0$.

---

### 1.5 Critical Exponents and Universality Scaling Laws

Critical exponents describe asymptotic power-law behavior of thermodynamic quantities near critical point reduced temperature $t = \frac{T - T_c}{T_c}$:

| Quantity | Definition | Exponent | Mean Field Value |
| :--- | :--- | :--- | :--- |
| Heat Capacity | $C \propto \|t\|^{-\alpha}$ | $\alpha$ | $0$ (jump) |
| Order Parameter | $\eta \propto (-t)^\beta \quad (t < 0)$ | $\beta$ | $1/2$ |
| Susceptibility | $\chi \propto \|t\|^{-\gamma}$ | $\gamma$ | $1$ |
| Critical Isotherm | $h \propto \|\eta\|^\delta \text{ s.t. } (\text{sgn } \eta) \quad (t = 0)$ | $\delta$ | $3$ |
| Correlation Length | $\xi \propto \|t\|^{-\nu}$ | $\nu$ | $1/2$ |
| Correlation Function | $G(r) \propto r^{-(d - 2 + \eta_c)} \quad (t = 0)$ | $\eta_c$ | $0$ |

#### Scaling Relations (Identities linking exponents):
1.  **Rushbrooke Inequality / Identity:**
    $$\alpha + 2\beta + \gamma = 2$$
2.  **Widom Identity:**
    $$\gamma = \beta (\delta - 1)$$
3.  **Fisher Identity:**
    $$\gamma = \nu (2 - \eta_c)$$
4.  **Josephson Hyper-scaling Relation ($d$ = spatial dimension):**
    $$d \nu = 2 - \alpha$$

---

## 2. Diamagnetism, Paramagnetism, and Ferromagnetism

Magnetic susceptibility is defined as:
$$\chi = \frac{\partial M}{\partial H} \approx \frac{\mu_0 M}{B}$$

---

### 2.1 Diamagnetism (Langevin Classical/Quantum Theory)

Diamagnetism is a universal property present in all atoms, arising from the change in orbital magnetic moment induced by an applied magnetic field (Larmor precession). It is temperature-independent and yields $\chi < 0$.

#### Derivation of Langevin Diamagnetism Formula:
Consider an electron with mass $m_e$ and charge $-e$ moving in an atomic orbit under magnetic field $\mathbf{B} = B \hat{z}$.

By Larmor's theorem, the magnetic field induces a precession of orbital motion with Larmor frequency:
$$\omega_L = \frac{e B}{2 m_e}$$

This precession corresponds to an induced current loop $I$:
$$I = \frac{\Delta q}{\Delta t} = \frac{-e}{2\pi / \omega_L} = -\frac{e \omega_L}{2\pi} = -\frac{e^2 B}{4\pi m_e}$$

The magnetic moment $\mu_{ind}$ of a circular planar loop of area $A = \pi \langle \rho^2 \rangle = \pi \langle x^2 + y^2 \rangle$:
$$\mu_{ind} = I A = -\frac{e^2 B}{4\pi m_e} \pi \langle x^2 + y^2 \rangle = -\frac{e^2 B}{4 m_e} \langle x^2 + y^2 \rangle$$

For a spherically symmetric atomic charge distribution:
$$\langle x^2 \rangle = \langle y^2 \rangle = \langle z^2 \rangle = \frac{1}{3} \langle r^2 \rangle$$
$$\implies \langle x^2 + y^2 \rangle = \frac{2}{3} \langle r^2 \rangle$$

Substituting into induced moment per electron:
$$\mu_{ind} = -\frac{e^2 B}{6 m_e} \langle r^2 \rangle$$

For $N$ atoms per unit volume with $Z$ electrons per atom:
$$M = N Z \mu_{ind} = -\frac{N Z e^2 B}{6 m_e} \langle r^2 \rangle$$

The diamagnetic susceptibility is:
$$\chi_{dia} = \frac{\mu_0 M}{B} = -\frac{\mu_0 N Z e^2 \langle r^2 \rangle}{6 m_e}$$

---

### 2.2 Classical Langevin Theory of Paramagnetism

Applies to permanent magnetic dipoles $\boldsymbol{\mu}$ free to orient in 3D space under external field $B \hat{z}$.

Energy of a dipole:
$$E(\theta) = -\boldsymbol{\mu} \cdot \mathbf{B} = -\mu B \cos\theta$$

Number of dipoles in solid angle $d\Omega = 2\pi \sin\theta d\theta$ follows Boltzmann distribution:
$$dN \propto \exp\left( \frac{\mu B \cos\theta}{k_B T} \right) \sin\theta d\theta$$

Let $x = \frac{\mu B}{k_B T}$. Total magnetization $M = N \langle \mu_z \rangle = N \mu \langle \cos\theta \rangle$:

$$\langle \cos\theta \rangle = \frac{\int_0^\pi \cos\theta e^{x \cos\theta} \sin\theta d\theta}{\int_0^\pi e^{x \cos\theta} \sin\theta d\theta}$$

Let $u = \cos\theta \implies du = -\sin\theta d\theta$:
$$\langle \cos\theta \rangle = \frac{\int_{-1}^1 u e^{x u} du}{\int_{-1}^1 e^{x u} du} = \frac{d}{dx} \ln \left( \int_{-1}^1 e^{x u} du \right) = \frac{d}{dx} \ln \left( \frac{e^x - e^{-x}}{x} \right) = \frac{d}{dx} \left[ \ln(2 \sinh x) - \ln x \right]$$

$$\langle \cos\theta \rangle = \coth x - \frac{1}{x} \equiv L(x) \quad (\text{Langevin Function})$$

$$M = N \mu L(x)$$

```
                         Langevin Function L(x)
                 1.0 ┌─────────────────────────────------
                     │                           /
                     │                          /
                 0.5 │                         /
                     │                   .----'
                     │            .-----'
                 0.0 └───────────┴───────────┴───────────► x
                     0           2           4
```

#### High-Temperature Limit ($x \ll 1 \implies \mu B \ll k_B T$):
Taylor expansion: $\coth x = \frac{1}{x} + \frac{x}{3} - \frac{x^3}{45} + \dots$
$$\implies L(x) \approx \frac{x}{3}$$

$$M \approx N \mu \left( \frac{\mu B}{3 k_B T} \right) = \frac{N \mu^2 B}{3 k_B T}$$

$$\chi_{para} = \frac{\mu_0 M}{B} = \frac{\mu_0 N \mu^2}{3 k_B T} = \frac{C}{T} \quad (\text{Curie's Law, where } C = \frac{\mu_0 N \mu^2}{3 k_B})$$

---

### 2.3 Quantum Theory of Paramagnetism

Quantum mechanics restricts magnetic angular momentum orientation to discrete quantum states $J_z = -J, -J+1, \dots, J$.

Magnetic moment operator $\boldsymbol{\mu} = -g_J \mu_B \mathbf{J}/\hbar$, where $\mu_B = \frac{e \hbar}{2 m_e}$ is the Bohr Magneton and $g_J$ is the Landé $g$-factor.

Energy levels:
$$E_m = g_J \mu_B B m \quad \text{for } m = -J, -J+1, \dots, +J$$

Partition function $Z_1$:
$$Z_1 = \sum_{m=-J}^{J} e^{-\beta g_J \mu_B B m} = \sum_{m=-J}^J e^{-y m} \quad \text{where } y = g_J \mu_B B \beta = \frac{g_J \mu_B B}{k_B T}$$

This finite geometric series sums to:
$$Z_1 = \frac{\sinh\left( \frac{2J+1}{2J} x \right)}{\sinh\left( \frac{x}{2J} \right)} \quad \text{where } x = J y = \frac{g_J J \mu_B B}{k_B T}$$

Magnetization $M = N k_B T \frac{\partial \ln Z_1}{\partial B}$:

$$M = N g_J J \mu_B B_J(x)$$

Where $B_J(x)$ is the **Brillouin Function**:
$$B_J(x) = \frac{2J+1}{2J} \coth\left( \frac{2J+1}{2J} x \right) - \frac{1}{2J} \coth\left( \frac{x}{2J} \right)$$

#### Asymptotic Limits:
1.  **Classical Limit ($J \to \infty$):**
    $$B_\infty(x) = L(x)$$
2.  **Quantum Spin-1/2 Limit ($J = 1/2, g_J = 2$):**
    $$B_{1/2}(x) = 2 \coth(2x) - \coth(x) = \tanh(x)$$
    $$M = N \mu_B \tanh\left( \frac{\mu_B B}{k_B T} \right)$$
3.  **High Temperature / Low Field Limit ($x \ll 1$):**
    $B_J(x) \approx \frac{J+1}{3J} x$
    $$M = N g_J J \mu_B \left( \frac{J+1}{3J} \frac{g_J J \mu_B B}{k_B T} \right) = \frac{N g_J^2 J(J+1) \mu_B^2 B}{3 k_B T}$$
    $$\chi = \frac{\mu_0 N p_{eff}^2 \mu_B^2}{3 k_B T} \quad \left(\text{where } p_{eff} = g_J \sqrt{J(J+1)}\right)$$

---

### 2.4 Pauli Paramagnetism (Free Electron Gas)

In conduction metals, electron spins ($S = 1/2$) align with $B$. Classical theory fails because Pauli Exclusion Principle prevents most electrons from flipping spins.

```
       B = 0                                B > 0
  Density of States                    Density of States
  ┌────────┬────────┐                  ┌──────────┬──────┐
  │ SpinUp │ SpinDn │                  │  SpinUp  │SpinDn│
  │        │        │ EF               │  Shifted │      │ EF
  ├────────┼────────┤                  ├──────────┼──────┤
  │////////│////////│                  │//////////│//////│
  └────────┴────────┘                  └──────────┴──────┘
                                           <-2μBB->
```

Under field $B$, spin-up electron energies shift down by $-\mu_B B$, spin-down shift up by $+\mu_B B$.

Number of spin-up and spin-down electrons at $T = 0 \text{ K}$:
$$N_{\uparrow} = \frac{1}{2} \int_0^{E_F + \mu_B B} g(E) dE \approx \frac{1}{2} \int_0^{E_F} g(E) dE + \frac{1}{2} g(E_F) \mu_B B$$
$$N_{\downarrow} = \frac{1}{2} \int_0^{E_F - \mu_B B} g(E) dE \approx \frac{1}{2} \int_0^{E_F} g(E) dE - \frac{1}{2} g(E_F) \mu_B B$$

Net Magnetization:
$$M = \mu_B (N_{\uparrow} - N_{\downarrow}) = \mu_B^2 g(E_F) B$$

3D Free Electron Density of States at $E_F$: $g(E_F) = \frac{3 N}{2 E_F}$.

$$\chi_{Pauli} = \mu_0 \frac{M}{B} = \mu_0 \mu_B^2 g(E_F) = \frac{3 \mu_0 N \mu_B^2}{2 E_F}$$

*   **Key Property:** Pauli paramagnetism is **virtually independent of temperature** (for $T \ll T_F$).

---

### 2.5 Ferromagnetism and Weiss Molecular Field Theory

Ferromagnets exhibit spontaneous magnetization $M \neq 0$ below Curie temperature $T_c$ even when external field $B = 0$.

#### Weiss Hypothesis:
Internal interactions create an effective internal molecular field $B_m$ proportional to magnetization:
$$B_{eff} = B + B_m = B + \lambda M$$
Where $\lambda$ is the Weiss molecular field constant.

#### Self-Consistency Derivation (Spin-1/2 Case):
Substitute $B_{eff}$ into quantum paramagnetic result:
$$M = M_s \tanh\left( \frac{\mu_B (B + \lambda M)}{k_B T} \right)$$
Where $M_s = N \mu_B$ is saturation magnetization.

Let $B = 0$ (Spontaneous Magnetization) and define reduced variable $m = M / M_s$:
$$m = \tanh\left( \frac{\mu_B \lambda M_s m}{k_B T} \right) = \tanh\left( \frac{T_c}{T} m \right)$$

Where Curie Temperature $T_c$ is derived by equating slopes at $m \to 0$:
$$\left.\frac{d}{dm} \left[ \tanh\left( \frac{T_c}{T} m \right) \right]\right|_{m=0} = 1 \implies \frac{T_c}{T} = 1 \implies T_c = \frac{\mu_B \lambda M_s}{k_B}$$

For general quantum angular momentum $J$:
$$T_c = \frac{g_J (J+1) \mu_B \lambda M_s}{3 k_B} = \frac{\mu_0 N g_J^2 J (J+1) \mu_B^2 \lambda}{3 k_B}$$

#### Curie-Weiss Law ($T > T_c$):
When $T > T_c$, field $B \neq 0$ is weak, $m \ll 1$:
$$M \approx \frac{N g_J^2 J(J+1) \mu_B^2}{3 k_B T} (B + \lambda M)$$
$$M \left( 1 - \frac{T_c}{T} \right) = \frac{C B}{\mu_0 T}$$

$$\chi = \frac{\mu_0 M}{B} = \frac{C}{T - T_c} \quad (\text{Curie-Weiss Law})$$

---

### 2.6 Quantum Exchange Interaction (Heisenberg Model)

Weiss molecular field $B_m \sim 10^3 \text{ T}$ is too strong to be electrostatic dipole-dipole in origin. Its quantum origin lies in the **Exchange Interaction** (Pauli Exclusion + Coulomb Repulsion).

For a 2-electron system with spin states $\mathbf{S}_1, \mathbf{S}_2$:
The electrostatic potential depends on spatial symmetry (Symmetric singlet vs Antisymmetric triplet), leading to an effective exchange Hamiltonian:

$$H_{ex} = -2 J_{ij} \mathbf{S}_i \cdot \mathbf{S}_j$$

Where $J_{ij}$ is the exchange integral:
*   **$J_{ij} > 0$:** Ferromagnetic alignment (spins align parallel $\uparrow \uparrow$).
*   **$J_{ij} < 0$:** Antiferromagnetic alignment (spins align antiparallel $\uparrow \downarrow$).

---

## 3. The Ising Model

The Ising model is the fundamental microscopic model of phase transitions and cooperative phenomena in statistical mechanics.

---

### 3.1 Model Definition
Consider a lattice of $N$ sites where each site $i$ holds a discrete spin variable $\sigma_i \in \{+1, -1\}$.

The Hamiltonian in an external magnetic field $h$ is:
$$H = -J \sum_{\langle i, j \rangle} \sigma_i \sigma_j - h \sum_{i=1}^N \sigma_i$$

Where $\langle i, j \rangle$ denotes summation over nearest-neighbor pairs, and $J$ is the coupling constant ($J > 0$ Ferromagnetic, $J < 0$ Antiferromagnetic).

---

### 3.2 Exact Solution of 1D Ising Model (Transfer Matrix Method)

Consider $N$ spins on a 1D ring (Periodic Boundary Conditions: $\sigma_{N+1} = \sigma_1$).
$$H = -J \sum_{i=1}^N \sigma_i \sigma_{i+1} - \frac{h}{2} \sum_{i=1}^N (\sigma_i + \sigma_{i+1})$$

The canonical partition function is:
$$Z_N = \sum_{\sigma_1=\pm 1} \sum_{\sigma_2=\pm 1} \dots \sum_{\sigma_N=\pm 1} \exp\left[ \sum_{i=1}^N \left( K \sigma_i \sigma_{i+1} + \frac{H'}{2} (\sigma_i + \sigma_{i+1}) \right) \right]$$
Where dimensionless couplings are $K = \frac{J}{k_B T}$ and $H' = \frac{h}{k_B T}$.

Define the $2 \times 2$ **Transfer Matrix** $P$ with elements $P_{\sigma_i, \sigma_{i+1}}$:
$$P(\sigma_i, \sigma_{i+1}) = \exp\left[ K \sigma_i \sigma_{i+1} + \frac{H'}{2} (\sigma_i + \sigma_{i+1}) \right]$$

In matrix representation using basis states $\{|+1\rangle, |-1\rangle\}$:
$$P = \begin{pmatrix} P(+1, +1) & P(+1, -1) \\ P(-1, +1) & P(-1, -1) \end{pmatrix} = \begin{pmatrix} e^{K + H'} & e^{-K} \\ e^{-K} & e^{K - H'} \end{pmatrix}$$

The partition function simplifies to matrix trace:
$$Z_N = \sum_{\sigma_1} \dots \sum_{\sigma_N} P_{\sigma_1 \sigma_2} P_{\sigma_2 \sigma_3} \dots P_{\sigma_N \sigma_1} = \text{Tr}(P^N) = \lambda_1^N + \lambda_2^N$$

Where $\lambda_1, \lambda_2$ are the eigenvalues of $P$.

#### Finding Eigenvalues of $P$:
$$\det(P - \lambda I) = (e^{K+H'} - \lambda)(e^{K-H'} - \lambda) - e^{-2K} = 0$$
$$\lambda^2 - \lambda (e^{K+H'} + e^{K-H'}) + e^{2K} - e^{-2K} = 0$$
$$\lambda^2 - (2 e^K \cosh H') \lambda + 2 \sinh 2K = 0$$

Solving quadratic equation:
$$\lambda_{1,2} = e^K \cosh H' \pm \sqrt{e^{2K} \cosh^2 H' - 2 \sinh 2K}$$
Since $e^{2K} \cosh^2 H' - 2 \sinh 2K = e^{2K} (1 + \sinh^2 H') - (e^{2K} - e^{-2K}) = e^{2K} \sinh^2 H' + e^{-2K}$:

$$\lambda_{1,2} = e^K \cosh H' \pm \sqrt{e^{2K} \sinh^2 H' + e^{-2K}}$$

Let $\lambda_1 > \lambda_2$. In thermodynamic limit $N \to \infty$:
$$Z_N \approx \lambda_1^N \left[ 1 + \left(\frac{\lambda_2}{\lambda_1}\right)^N \right] \to \lambda_1^N$$

Free Energy per Spin ($f$):
$$f = -k_B T \lim_{N \to \infty} \frac{1}{N} \ln Z_N = -k_B T \ln \lambda_1$$

$$f = -k_B T \ln \left( e^K \cosh H' + \sqrt{e^{2K} \sinh^2 H' + e^{-2K}} \right)$$

#### Zero External Field Analysis ($h = 0 \implies H' = 0$):
$$\lambda_1 = e^K + e^{-K} = 2 \cosh K$$
$$\lambda_2 = e^K - e^{-K} = 2 \sinh K$$

$$f(T, 0) = -k_B T \ln (2 \cosh K) = -k_B T \ln\left( 2 \cosh\frac{J}{k_B T} \right)$$

*   **Internal Energy ($u$):**
    $$u = -J \tanh\left(\frac{J}{k_B T}\right)$$
*   **Heat Capacity ($C_V$):**
    $$C_V = \frac{\partial u}{\partial T} = k_B \left(\frac{J}{k_B T}\right)^2 \text{sech}^2\left(\frac{J}{k_B T}\right)$$

```
                          1D Ising Heat Capacity
                 Cv/kB
                  0.5 ┌──────────────.---.──────────────┐
                      │             /     \             │
                      │            /       \            │
                  0.0 └───────────┴─────────┴───────────► kBT/J
                      0          1.0       2.0
```

*   **Proof of No Phase Transition at $T > 0$:**
    Magnetization per spin $m$:
    $$m = -\frac{\partial f}{\partial h} = \frac{\sinh H'}{\sqrt{\sinh^2 H' + e^{-4K}}}$$
    Taking limit $h \to 0^+$ ($H' \to 0^+$):
    $$m = \frac{0}{\sqrt{0 + e^{-4K}}} = 0 \quad \text{for any } T > 0 \quad (K < \infty)$$
    Spontaneous magnetization vanishes for all non-zero finite temperatures $\implies \mathbf{T_c = 0 \text{ in 1D}}$.

---

### 3.3 Mean Field Theory (MFT) of $d$-Dimensional Ising Model

In MFT, fluctuations are neglected, and each spin experiences an effective average magnetic field created by its $z$ nearest neighbors.

$$h_{eff} = h + z J \langle \sigma \rangle$$

Self-consistent equation for magnetization $m = \langle \sigma \rangle$:
$$m = \tanh\left( \beta (h + z J m) \right)$$

Critical temperature in MFT:
$$k_B T_c^{MFT} = z J$$

Comparison of $T_c$ for 2D Square Lattice ($z = 4$):
*   Mean Field Theory: $k_B T_c / J = 4.0$
*   Onsager Exact Solution (2D): $k_B T_c / J = \frac{2}{\ln(1+\sqrt{2})} \approx 2.269$

---

## 4. Bose-Einstein Condensation (BEC)

Bose-Einstein Condensation is a purely quantum phase transition occurring in ideal non-interacting Bose gases when quantum degeneracy wavelength exceeds interparticle spacing.

---

### 4.1 Quantum Statistical Distribution of Bosons

For non-interacting bosons, single-particle energy level occupation numbers follow Grand Canonical distribution:

$$\langle n_k \rangle = \frac{1}{e^{\beta(\epsilon_k - \mu)} - 1}$$

To ensure non-negative occupations ($\langle n_k \rangle \ge 0$), the chemical potential must satisfy:
$$\mu \le \epsilon_0 \quad (\text{where } \epsilon_0 \text{ is the ground state energy; set } \epsilon_0 = 0)$$

---

### 4.2 Derivation of Critical Temperature $T_c$ (3D Free Bose Gas)

Total particle number equation:
$$N = N_0 + N_e$$

Where:
*   $N_0 = \frac{1}{e^{-\beta \mu} - 1}$ is ground state population ($\epsilon_0 = 0$).
*   $N_e = \int_0^\infty g(\epsilon) \frac{d\epsilon}{e^{\beta(\epsilon - \mu)} - 1}$ is total population in excited states.

3D density of states for non-relativistic particles ($E = \frac{\hbar^2 k^2}{2m}$ in volume $V$):
$$g(\epsilon) = \frac{V}{2\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \frac{1}{2} \sqrt{\epsilon} = \frac{(2s+1) V}{4\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \epsilon^{1/2}$$
For spinless bosons ($s = 0$):

$$g(\epsilon) = \frac{V}{4\pi^2 \left(\frac{\hbar^2}{2m}\right)^{3/2}} \epsilon^{1/2}$$

Max capacity of excited states occurs at $\mu \to 0^-$:
$$N_e^{max}(T) = \frac{V}{4\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \int_0^\infty \frac{\epsilon^{1/2} d\epsilon}{e^{\beta \epsilon} - 1}$$

Let $x = \beta \epsilon \implies \epsilon = k_B T x, d\epsilon = k_B T dx$:
$$N_e^{max}(T) = \frac{V}{4\pi^2} \left(\frac{2m k_B T}{\hbar^2}\right)^{3/2} \int_0^\infty \frac{x^{1/2} dx}{e^x - 1}$$

Using integral formula $\int_0^\infty \frac{x^{s-1} dx}{e^x - 1} = \Gamma(s) \zeta(s)$:
$$\int_0^\infty \frac{x^{1/2} dx}{e^x - 1} = \Gamma\left(\frac{3}{2}\right) \zeta\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2} (2.612)$$

Substitute and simplify using thermal de Broglie wavelength $\lambda_{dT} = \sqrt{\frac{2\pi \hbar^2}{m k_B T}}$:
$$N_e^{max}(T) = \frac{V}{\lambda_{dT}^3} \zeta(3/2) = 2.612 \frac{V}{\lambda_{dT}^3}$$

At $T = T_c$, excited states are saturated ($N_e^{max}(T_c) = N$):
$$N = 2.612 V \left( \frac{m k_B T_c}{2\pi \hbar^2} \right)^{3/2}$$

Solving for $T_c$:

$$T_c = \frac{2\pi \hbar^2}{m k_B} \left( \frac{N}{2.612 \, V} \right)^{2/3} = \frac{2\pi \hbar^2}{m k_B} \left( \frac{\rho}{2.612} \right)^{2/3}$$

```
                       Condensate Fraction N0/N
                 1.0 ┌──────────────.
                     │               \
                     │                \
                 0.5 │                 \  N0/N = 1 - (T/Tc)^(3/2)
                     │                  \
                 0.0 └───────────────────┴──────────────► T/Tc
                     0                  1.0
```

---

### 4.3 Temperature Dependence Below $T_c$ ($T < T_c$)

For $T < T_c$, chemical potential remains pinned at $\mu = 0$.

1.  **Excited State Population:**
    $$N_e(T) = N_e^{max}(T) = N \left(\frac{T}{T_c}\right)^{3/2}$$

2.  **Condensate Fraction ($N_0 / N$):**
    $$N_0(T) = N - N_e(T) \implies \frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

3.  **Internal Energy ($U$):**
    $$U(T) = \int_0^\infty \epsilon g(\epsilon) \frac{d\epsilon}{e^{\beta \epsilon} - 1} = \frac{V}{4\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} (k_B T)^{5/2} \Gamma(5/2) \zeta(5/2)$$
    Using $\Gamma(5/2) = \frac{3\sqrt{\pi}}{4}$ and $\zeta(5/2) \approx 1.341$:
    $$U(T) = 0.7701 \, N k_B T \left(\frac{T}{T_c}\right)^{3/2} \propto T^{5/2}$$

4.  **Heat Capacity ($C_V$):**
    $$C_V = \left(\frac{\partial U}{\partial T}\right)_V = \frac{5}{2} \frac{U(T)}{T} = 1.925 \, N k_B \left(\frac{T}{T_c}\right)^{3/2} \propto T^{3/2}$$

---

### 4.4 Dimensionality and Trapping Potential Dependencies

Generalized density of states proportional to energy: $g(\epsilon) = C \epsilon^{\sigma - 1}$.

Condition for non-zero $T_c$ BEC is convergence of integral $\int_0^\infty \frac{\epsilon^{\sigma-1} d\epsilon}{e^{\beta \epsilon}-1}$, requiring $\sigma > 1$.

| System Configuration | Density of States Exponent $\sigma$ | BEC Transition $T_c > 0$? | $T_c$ Dependence | Condensate Fraction $N_0/N$ |
| :--- | :--- | :--- | :--- | :--- |
| **1D Free Bose Gas** | $\sigma = 1/2$ | **NO** ($T_c = 0$) | N/A | N/A |
| **2D Free Bose Gas** | $\sigma = 1$ | **NO** ($T_c = 0$) | N/A | N/A |
| **3D Free Bose Gas** | $\sigma = 3/2$ | **YES** | $T_c \propto \rho^{2/3}$ | $1 - (T/T_c)^{3/2}$ |
| **3D Harmonic Trap** $V(r) = \frac{1}{2}m\omega^2 r^2$ | $\sigma = 3$ | **YES** | $T_c = \frac{\hbar \omega}{k_B} \left(\frac{N}{\zeta(3)}\right)^{1/3}$ | $1 - (T/T_c)^3$ |

---

## 5. Random Walk, Brownian Motion, and Diffusion Equation

---

### 5.1 Discrete 1D Random Walk

Consider a particle taking $N$ independent steps on a 1D lattice with step length $a$.
At each time interval $\tau$:
*   Probability of step right ($+a$): $p$
*   Probability of step left ($-a$): $q = 1 - p$

Let $n_1$ be steps right and $n_2$ steps left ($n_1 + n_2 = N$).
Net displacement: $x = (n_1 - n_2) a = (2 n_1 - N) a$.

Binomial Probability Distribution:
$$P(n_1, N) = \begin{pmatrix} N \\ n_1 \end{pmatrix} p^{n_1} q^{N - n_1}$$

#### Statistical Moments:
1.  $\langle n_1 \rangle = N p$
2.  $\text{Var}(n_1) = \langle n_1^2 \rangle - \langle n_1 \rangle^2 = N p q$
3.  **Mean Position:**
    $$\langle x \rangle = (2\langle n_1 \rangle - N) a = (2Np - N) a = (p - q) N a$$
4.  **Variance & Mean Square Displacement (MSD):**
    $$\langle \Delta x^2 \rangle = 4 a^2 \text{Var}(n_1) = 4 p q N a^2$$

For symmetric random walk ($p = q = 1/2$):
$$\langle x \rangle = 0$$
$$\langle x^2 \rangle = N a^2 = \left(\frac{t}{\tau}\right) a^2 = \left(\frac{a^2}{\tau}\right) t$$

---

### 5.2 Derivation of Continuum Diffusion Equation

Let $P(x, t)$ be probability density of finding the particle at position $x$ at time $t$.

Master equation for symmetric walk:
$$P(x, t + \tau) = \frac{1}{2} P(x - a, t) + \frac{1}{2} P(x + a, t)$$

Perform Taylor series expansion up to $O(\tau)$ and $O(a^2)$:

*   LHS: $P(x, t + \tau) \approx P(x, t) + \tau \frac{\partial P}{\partial t}$
*   RHS: $P(x \pm a, t) \approx P(x, t) \pm a \frac{\partial P}{\partial x} + \frac{a^2}{2} \frac{\partial^2 P}{\partial x^2}$

$$\frac{1}{2} P(x - a, t) + \frac{1}{2} P(x + a, t) \approx P(x, t) + \frac{a^2}{2} \frac{\partial^2 P}{\partial x^2}$$

Equating LHS and RHS:
$$P(x, t) + \tau \frac{\partial P}{\partial t} = P(x, t) + \frac{a^2}{2} \frac{\partial^2 P}{\partial x^2}$$

$$\frac{\partial P}{\partial t} = D \frac{\partial^2 P}{\partial x^2} \quad (\text{1D Diffusion Equation})$$

Where Diffusion Constant is defined as:
$$D = \lim_{a, \tau \to 0} \frac{a^2}{2 \tau}$$

#### Fundamental Solution (Green's Function):
For initial point delta source $P(x, 0) = \delta(x)$:
$$P(x, t) = \frac{1}{\sqrt{4\pi D t}} \exp\left( -\frac{x^2}{4 D t} \right)$$

Mean Square Displacement from Gaussian:
$$\langle x^2(t) \rangle = \int_{-\infty}^\infty x^2 P(x, t) dx = 2 D t$$
In $d$-dimensions:
$$\langle r^2(t) \rangle = 2 d D t$$

---

### 5.3 Langevin Theory of Brownian Motion

A Brownian particle (mass $m$, velocity $v$) moving in a fluid experiences friction $-\gamma v$ and random collision force $\xi(t)$:

$$m \frac{dv}{dt} = -\gamma v + \xi(t)$$

Properties of Gaussian White Noise $\xi(t)$:
1.  $\langle \xi(t) \rangle = 0$
2.  $\langle \xi(t) \xi(t') \rangle = 2 B \delta(t - t')$

#### Derivation of Einstein's Relation:
Multiply Langevin equation by position $x$:
$$m x \frac{dv}{dt} = -\gamma x v + x \xi(t)$$

Note identity: $x \frac{dv}{dt} = x \frac{d^2 x}{dt^2} = \frac{d}{dt}(x v) - v^2 = \frac{1}{2} \frac{d^2(x^2)}{dt^2} - v^2$.

Substitute into differential equation and take ensemble average:
$$\frac{m}{2} \frac{d^2 \langle x^2 \rangle}{dt^2} - m \langle v^2 \rangle = -\frac{\gamma}{2} \frac{d \langle x^2 \rangle}{dt} + \langle x \xi(t) \rangle$$

Since random force $\xi(t)$ is uncorrelated with position $x(t)$, $\langle x \xi(t) \rangle = 0$.
By Equipartition Theorem in 1D: $m \langle v^2 \rangle = k_B T$.

Let $w = \frac{d \langle x^2 \rangle}{dt}$:
$$\frac{m}{2} \frac{dw}{dt} + \frac{\gamma}{2} w = k_B T$$

Solving this linear differential equation:
$$w(t) = \frac{2 k_B T}{\gamma} + C \exp\left( -\frac{\gamma}{m} t \right)$$

In long-time limit ($t \gg m/\gamma \approx 10^{-8} \text{ s}$):
$$w = \frac{d \langle x^2 \rangle}{dt} \to \frac{2 k_B T}{\gamma}$$

Integrating with respect to $t$:
$$\langle x^2(t) \rangle = \left( \frac{2 k_B T}{\gamma} \right) t$$

Equating this to macroscopic diffusion relation $\langle x^2 \rangle = 2 D t$:

$$D = \frac{k_B T}{\gamma} \quad (\text{Einstein Relation})$$

Using Stokes' Drag Law for spherical particle of radius $r$ in viscosity $\eta$ ($\gamma = 6 \pi \eta r$):

$$D = \frac{k_B T}{6 \pi \eta r} \quad (\text{Stokes-Einstein Equation})$$

---

## 6. Introduction to Non-Equilibrium Processes

---

### 6.1 Thermodynamic Fluctuations (Einstein Theory)

Near equilibrium, entropy $S(\mathbf{x})$ is maximum. Probability of fluctuation in extensive variables $\mathbf{x} = (x_1, x_2, \dots, x_n)$ relative to mean $\mathbf{x} = 0$:

$$P(\mathbf{x}) d\mathbf{x} \propto \exp\left( \frac{\Delta S}{k_B} \right) d\mathbf{x}$$

Expanding $\Delta S$ around equilibrium state:
$$\Delta S = -\frac{1}{2} \sum_{i,j} g_{ij} x_i x_j \quad \text{where } g_{ij} = -\left.\frac{\partial^2 S}{\partial x_i \partial x_j}\right|_0$$

Giving multivariate Gaussian distribution:
$$\langle x_i x_j \rangle = k_B (g^{-1})_{ij}$$

---

### 6.2 Linear Thermodynamics and Onsager Reciprocal Relations

For non-equilibrium systems close to local equilibrium, rates of change of state variables are Thermodynamic Fluxes $J_i = \dot{x}_i$.

Thermodynamic Conjugate Forces $X_i$:
$$X_i = \frac{\partial S}{\partial x_i}$$

Rate of entropy production per unit volume:
$$\sigma = \frac{d S}{dt} = \sum_i J_i X_i \ge 0$$

#### Linear Phenomenological Laws:
$$J_i = \sum_{j} L_{ij} X_j$$
Where $L_{ij}$ are phenomenological transport coefficients (e.g., thermal conductivity, electrical conductivity).

#### Onsager Reciprocal Theorem:
Based on microscopic time-reversibility of underlying equations of motion:

$$L_{ij} = L_{ji}$$

In presence of external magnetic field $\mathbf{B}$ or rotation $\boldsymbol{\Omega}$:
$$L_{ij}(\mathbf{B}) = L_{ji}(-\mathbf{B})$$

#### Thermoelectric Example (Seebeck / Peltier Effect):
$$J_q = L_{11} X_q + L_{12} X_e \quad (\text{Heat Flux})$$
$$J_e = L_{21} X_q + L_{22} X_e \quad (\text{Electric Current})$$
Onsager relation implies $L_{12} = L_{21}$, proving Kelvin's 2nd Thermoelectric Relation: $\Pi = T S_{Seebeck}$.

---

### 6.3 Fluctuation-Dissipation Theorem (FDT)

FDT provides a quantitative bridge between thermal fluctuations in equilibrium and system's linear response / dissipation when perturbed.

#### Nyquist Noise Formula (Resistor Thermal Noise):
Consider a resistor $R$ at temperature $T$. Voltage fluctuations $v(t)$ across terminals have power spectral density $S_v(f)$:

$$S_v(f) = 4 k_B T R$$

Total mean-square voltage noise across measurement bandwidth $\Delta f$:
$$\langle v_n^2 \rangle = 4 k_B T R \Delta f$$

#### Generalized FDT Statement:
If variable $x(t)$ couples to external driving field $F(t)$ via $H_{int} = -x(t) F(t)$, response is governed by complex susceptibility $\chi(\omega) = \chi'(\omega) + j \chi''(\omega)$.

Power spectrum of equilibrium fluctuations $S_x(\omega)$ is directly proportional to imaginary dissipative part $\chi''(\omega)$:

$$S_x(\omega) = \frac{2 k_B T}{\omega} \chi''(\omega)$$

---

# PART II: ELECTRONICS AND EXPERIMENTAL METHODS

---

## 1. Linear and Nonlinear Curve Fitting & Chi-Square Test

---

### 1.1 Linear Least-Squares Regression

Given $N$ data points $(x_i, y_i)$ with individual measurement errors $\sigma_i$, fit to linear model:
$$f(x) = m x + c$$

Objective function to minimize (Sum of Squared Residuals):
$$S(m, c) = \sum_{i=1}^N w_i (y_i - m x_i - c)^2 \quad \left(\text{where weights } w_i = \frac{1}{\sigma_i^2}\right)$$

Minimization condition:
$$\frac{\partial S}{\partial m} = -2 \sum_{i=1}^N w_i x_i (y_i - m x_i - c) = 0$$
$$\frac{\partial S}{\partial c} = -2 \sum_{i=1}^N w_i (y_i - m x_i - c) = 0$$

Defining weighted sums $W = \sum w_i, W_x = \sum w_i x_i, W_y = \sum w_i y_i, W_{xx} = \sum w_i x_i^2, W_{xy} = \sum w_i x_i y_i$:

Matrix System:
$$\begin{pmatrix} W_{xx} & W_x \\ W_x & W \end{pmatrix} \begin{pmatrix} m \\ c \end{pmatrix} = \begin{pmatrix} W_{xy} \\ W_y \end{pmatrix}$$

Solving via Determinant $\Delta = W W_{xx} - (W_x)^2$:

$$m = \frac{W W_{xy} - W_x W_y}{\Delta}$$

$$c = \frac{W_{xx} W_y - W_x W_{xy}}{\Delta}$$

Uncertainties in Parameters:
$$\sigma_m = \sqrt{\frac{W}{\Delta}}, \quad \sigma_c = \sqrt{\frac{W_{xx}}{\Delta}}$$

---

### 1.2 Chi-Square ($\chi^2$) Goodness-of-Fit Test

#### Definition:
$$\chi^2 = \sum_{i=1}^N \frac{(y_i - f(x_i))^2}{\sigma_i^2}$$

Degrees of Freedom: $\nu = N - k$ (where $N$ = data points, $k$ = fitted parameters; $k=2$ for line).

Reduced Chi-Square:
$$\chi_\nu^2 = \frac{\chi^2}{\nu}$$

#### Interpretation Rules for CSIR NET Problems:
*   $\chi_\nu^2 \approx 1$: **Good Fit** (Model accurately describes data within estimated experimental errors).
*   $\chi_\nu^2 \gg 1$: **Poor Fit** (Model incorrect or experimental errors underestimated).
*   $\chi_\nu^2 \ll 1$: **Over-Fitting** (Errors overestimated or artificial data manipulation).

---

## 2. Transducers

Transducers convert non-electrical physical quantities into measurable electrical signals (voltage, current, resistance, capacitance).

```
  Physical Quantity                                               Electrical Signal
 (Temp, Press, B-Field) ───► [ TRANSDUCER / SENSOR ] ───────────► (mV, mA, ΔR, ΔC)
                                   │
                                   ▼
                       [ SIGNAL CONDITIONING ]
                       (Bridge, Op-Amp, Filter)
```

---

### 2.1 Complete Transducer Reference Guide

| Transducer Type | Physical Parameter | Fundamental Physics Principle | Output Formula / Characteristics | Practical Application Limits |
| :--- | :--- | :--- | :--- | :--- |
| **Thermocouple** | Temperature ($T$) | **Seebeck Effect**: Thermal gradient induces electromotive force ($V_{emf}$). | $V = a(T - T_0) + b(T - T_0)^2$<br>Sensitivity $S = \frac{dV}{dT} = a + 2bT$ | Type K (Chromel-Alumel): $-200^\circ\text{C}$ to $1260^\circ\text{C}$. Requires Cold Junction Compensation. |
| **RTD (Pt100)** | Temperature ($T$) | Resistance increases with $T$ due to electron-phonon scattering. | $R(T) = R_0 (1 + \alpha T)$<br>$\alpha_{Pt} = 0.00385 \ \Omega/\Omega/^\circ\text{C}$ | High accuracy, $-200^\circ\text{C}$ to $850^\circ\text{C}$. Linear response. |
| **Thermistor** | Temperature ($T$) | NTC Semiconductor: Thermal activation of charge carriers. | $R(T) = R_0 \exp\left[ \beta \left( \frac{1}{T} - \frac{1}{T_0} \right) \right]$ | Highly sensitive, highly non-linear, narrow range ($-50^\circ\text{C}$ to $300^\circ\text{C}$). |
| **Strain Gauge** | Strain ($\epsilon = \frac{\Delta L}{L}$) | **Piezoresistive Effect**: Geometric change + resistivity change under stress. | **Gauge Factor:**<br>$GF = \frac{\Delta R / R}{\epsilon} = 1 + 2\nu + \frac{\Delta \rho / \rho}{\epsilon}$ | $\nu \approx 0.3$ (Poisson's ratio). $GF \approx 2$ for metallic gauges, $\sim 100$ for semiconductors. |
| **Piezoelectric Sensor** | Force / Vibration / Pressure | Polarization induced by mechanical strain in non-centrosymmetric crystals (Quartz, PZT). | Charge $Q = d_{ij} F$<br>Voltage $V = \frac{g t F}{A}$ | **Dynamic measurements only** (DC leaks away). High frequency bandwidth. |
| **Hall Effect Sensor** | Magnetic Field ($B$) | **Lorentz Force** deflects charge carriers creating transverse potential. | $V_H = \frac{I B}{n e d} = R_H \frac{I B}{d}$<br>($d$ = thickness, $R_H$ = Hall coefficient) | Measures DC and AC magnetic fields (mT to T range). |
| **LVDT** | Displacement ($x$) | Variable mutual inductance in secondary coils. | $V_{out} = V_{S1} - V_{S2} \propto x$<br>Phase gives direction. | Contact linear displacement ($0.1 \ \mu\text{m}$ to $100 \text{ mm}$). Zero friction. |
| **Pirani Gauge** | Vacuum Pressure | Thermal conductivity of gas decreases with pressure in molecular flow regime. | Heat loss $\dot{Q} \propto P$<br>$\implies R_{filament}(P)$ | Vacuum measurement ($10^{-3} \text{ Torr}$ to $10 \text{ Torr}$). |
| **Ionization Gauge** | High Vacuum Pressure | Gas molecules ionized by electron beam; collector measures ion current. | $I_{ion} = S \cdot I_{electron} \cdot P$<br>($S$ = Sensitivity factor) | High/Ultra-High Vacuum ($10^{-10} \text{ Torr}$ to $10^{-3} \text{ Torr}$). |
| **PMT (Photomultiplier)** | Optical Photons | Photoelectric effect + Secondary electron emission across dynode chain. | Gain $G = \delta^N = (A V_{dyn}^\alpha)^N$<br>($N$ = number of dynodes) | Ultra-low light / Single-photon detection. High gain ($10^6 - 10^8$). |

---

### 2.2 Particle Radiation Detectors

```
                       Gas Detector Voltage Regimes
    Pulse Height
         ▲
         │                                       / Continuous
         │                         Geiger-      / Discharge
         │                         Müller      /
         │             Proportional Region    /
         │               Region   /          /
         │   Ionization /        /          /
         │    Chamber  /        /          /
         │   ┌────────/────────/          /
         │  /        /        /          /
         │ /        /        /          /
         └┴────────┴────────┴──────────┴────────► Voltage V
```

1.  **Gas-Filled Detectors Operating Regimes:**
    *   *Ionization Chamber Region:* Low voltage. No gas multiplication ($M = 1$). Measures primary ion pairs.
    *   *Proportional Counter Region:* Intermediate voltage. Primary electrons accelerate causing secondary ionization (**Townsend Avalanche**). Output pulse height is proportional to primary energy ($M \sim 10^3 - 10^5$).
    *   *Geiger-Müller (GM) Region:* High voltage. Avalanche spreads across full wire via UV photons ($M \sim 10^8$). Output pulse amplitude is independent of initial particle energy. Requires quenching gas (e.g., Alcohol/Bromine).
2.  **Scintillation Detectors:** Converts ionizing radiation to light in crystal (NaI(Tl), Plastic), then amplified by PMT. High efficiency for $\gamma$-rays.
3.  **Semiconductor Detectors (HPGe, Si(Li)):** Reverse-biased p-i-n junction. Low electron-hole pair creation energy ($\epsilon_{Si} \approx 3.6 \text{ eV}$ vs gas $\sim 30 \text{ eV}$), yielding exceptional energy resolution:
    $$R = \frac{\Delta E}{E} = 2.355 \sqrt{\frac{F \epsilon}{E}} \quad (F = \text{Fano factor})$$

---

## 3. Measurement, Control, and Signal Conditioning

---

### 3.1 PID Controller Theory

A closed-loop control system compares measured process variable $y(t)$ with setpoint $r(t)$ to calculate error signal $e(t) = r(t) - y(t)$.

Control output $u(t)$ in time domain:

$$u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$$

Laplace Transform Transfer Function $G_c(s) = \frac{U(s)}{E(s)}$:

$$G_c(s) = K_p + \frac{K_i}{s} + K_d s$$

#### Functions of Terms:
*   **Proportional Term ($K_p$):** Provides output proportional to current error. Higher $K_p$ increases response speed but causes overshoot and cannot eliminate steady-state error.
*   **Integral Term ($K_i$):** Accumulates past errors over time. **Eliminates steady-state error** completely.
*   **Derivative Term ($K_d$):** Predicts future error trend based on current rate of change. **Damps oscillations** and improves system stability.

---

### 3.2 Wheatstone Bridge Analysis

Used to accurately measure small fractional resistance changes ($\Delta R/R \ll 1$) from strain gauges or RTDs.

```
                    Vi
                   ┌─┴─┐
                   │   │
               R1  ┴   ┴  R3
                   ┬   ┬
                   │   │
                   ├─┬─┤
                   │ V │  Vo
                   ├─┴─┤
               R2  ┴   ┴  R4 (R + ΔR)
                   ┬   ┬
                   │   │
                   └─┬─┘
                    GND
```

General output voltage equation:
$$V_{out} = V_{in} \left( \frac{R_2}{R_1 + R_2} - \frac{R_4}{R_3 + R_4} \right)$$

#### Quarter-Bridge Configuration:
Let $R_1 = R_2 = R_3 = R$, and active sensor $R_4 = R + \Delta R$:
$$V_{out} = V_{in} \left( \frac{1}{2} - \frac{R + \Delta R}{2R + \Delta R} \right) = V_{in} \left( \frac{2R + \Delta R - 2R - 2\Delta R}{2(2R + \Delta R)} \right) = -V_{in} \frac{\Delta R}{4R + 2\Delta R}$$

For small variations ($\Delta R \ll R$):

$$V_{out} \approx -\frac{V_{in}}{4} \left( \frac{\Delta R}{R} \right)$$

#### Bridge Sensitivity Comparison:
*   Quarter Bridge: $V_{out} \approx \frac{V_{in}}{4} \left(\frac{\Delta R}{R}\right)$
*   Half Bridge (2 active arms opposite): $V_{out} \approx \frac{V_{in}}{2} \left(\frac{\Delta R}{R}\right)$
*   Full Bridge (4 active arms): $V_{out} \approx V_{in} \left(\frac{\Delta R}{R}\right)$

---

### 3.3 Impedance Matching and Maximum Power Transfer Theorem

For an AC source with complex source impedance $Z_S = R_S + j X_S$ connected to load impedance $Z_L = R_L + j X_L$:

Current in circuit:
$$I = \frac{V_S}{Z_S + Z_L} = \frac{V_S}{(R_S + R_L) + j(X_S + X_L)}$$

Active power delivered to load:
$$P_L = |I|^2 R_L = \frac{|V_S|^2 R_L}{(R_S + R_L)^2 + (X_S + X_L)^2}$$

#### Conditions for Maximum Power Transfer:
1.  To minimize denominator with respect to reactance: $X_L = -X_S$ (Resonance).
2.  Differentiating $P_L$ with respect to $R_L$ and setting to zero yields: $R_L = R_S$.

Combining conditions:

$$Z_L = Z_S^* \quad (\text{Complex Conjugate Matching})$$

Maximum active power transferred under matched conditions:

$$P_{max} = \frac{|V_S|^2}{4 R_S}$$

---

## 4. Amplification, Filtering, Noise Reduction, Shielding, and Grounding

---

### 4.1 Operational Amplifier Principles and Characteristics

#### Ideal vs Non-Ideal Op-Amp Parameter Table:

| Parameter | Ideal Op-Amp | Typical Real Op-Amp (e.g., $\mu\text{A741}$) |
| :--- | :--- | :--- |
| **Open-Loop Voltage Gain ($A_{OL}$)** | $\infty$ | $10^5 - 10^6$ ($100 \text{ dB}$) |
| **Input Impedance ($R_{in}$)** | $\infty$ | $2 \text{ M}\Omega$ (BJT), $10^{12} \ \Omega$ (FET) |
| **Output Impedance ($R_{out}$)** | $0$ | $75 \ \Omega$ |
| **Bandwidth ($BW$)** | $\infty$ | $1 \text{ MHz}$ (GBWP) |
| **Common-Mode Rejection Ratio ($CMRR$)**| $\infty$ | $90 \text{ dB}$ |
| **Slew Rate ($SR$)** | $\infty$ | $0.5 \text{ V}/\mu\text{s}$ |
| **Input Offset Voltage ($V_{os}$)** | $0$ | $1 - 5 \text{ mV}$ |
| **Input Bias Current ($I_b$)** | $0$ | $80 \text{ nA}$ |

#### Golden Rules for Ideal Op-Amp with Negative Feedback:
1.  **Virtual Short Circuit:** $V_+ = V_-$
2.  **Zero Input Current:** $I_+ = I_- = 0$

---

### 4.2 Key Op-Amp Circuits Formulas

1.  **Inverting Amplifier:**
    $$V_{out} = -\frac{R_f}{R_{in}} V_{in}$$
2.  **Non-Inverting Amplifier:**
    $$V_{out} = \left( 1 + \frac{R_f}{R_1} \right) V_{in}$$
3.  **Summing Amplifier:**
    $$V_{out} = -R_f \left( \frac{V_1}{R_1} + \frac{V_2}{R_2} + \dots + \frac{V_n}{R_n} \right)$$
4.  **Difference Amplifier:**
    If $\frac{R_2}{R_1} = \frac{R_4}{R_3}$:
    $$V_{out} = \frac{R_2}{R_1} (V_2 - V_1)$$
5.  **Ideal Integrator:**
    $$V_{out}(t) = -\frac{1}{R C} \int_0^t V_{in}(\tau) d\tau + V_{out}(0)$$
6.  **Ideal Differentiator:**
    $$V_{out}(t) = -R C \frac{d V_{in}(t)}{dt}$$

---

### 4.3 Instrumentation Amplifier (Three Op-Amp Topology)

Designed specifically for low-level differential signal amplification in high noise environments.

```
                     R1           R2
      V1 ───( + )───┐   ┌───/\/\/\───┐
            (Op1)   ├───┤            ├───( - )──┐
         ───( - )─┐ │   └───/\/\/\───┘   (Op3)  ├─── Vout
                  │ │        R1          ( + )──┘
                  ├─┴─/\/\/\──┐            │
                  │    Rg     │         [R3 to GND]
                  ├─┬─/\/\/\──┘            │
                  │ │        R1            │
         ───( - )─┘ │   ┌───/\/\/\───┐     │
            (Op2)   ├───┤            ├─────┘
      V2 ───( + )───┘   └───/\/\/\───┘
                             R2
```

#### Complete Step-by-Step Gain Derivation:
*   **Stage 1 (Buffer / Differential Gain Stage):**
    Op-Amps $A_1$ and $A_2$ act as non-inverting buffers for common-mode signals, but amplify differential signals.
    By virtual short at $A_1$ and $A_2$, node voltages at inputs of gain setting resistor $R_g$ are $V_1$ and $V_2$.

    Current flowing through $R_g$:
    $$I_g = \frac{V_1 - V_2}{R_g}$$

    Since zero current enters Op-Amp terminals, the exact same current $I_g$ flows through both feedback resistors $R_1$:
    $$V_{o1} - V_{o2} = I_g (R_1 + R_g + R_1) = \left( \frac{V_1 - V_2}{R_g} \right) (2 R_1 + R_g)$$

    $$V_{o1} - V_{o2} = \left( 1 + \frac{2 R_1}{R_g} \right) (V_1 - V_2)$$

*   **Stage 2 (Standard Difference Amplifier):**
    Op-Amp $A_3$ configured with matched resistors $R_2$ and $R_3$:
    $$V_{out} = \frac{R_3}{R_2} (V_{o2} - V_{o1})$$

*   **Overall System Differential Voltage Gain ($A_v$):**

    $$V_{out} = \left( 1 + \frac{2 R_1}{R_g} \right) \left( \frac{R_3}{R_2} \right) (V_2 - V_1)$$

$$A_v = \frac{V_{out}}{V_2 - V_1} = \left( 1 + \frac{2 R_1}{R_g} \right) \frac{R_3}{R_2}$$

*   **Key Advantage:** Ultra-high input impedance (FET inputs of $A_1, A_2$) and gain is variable via a single resistor $R_g$ without disturbing $CMRR$.

---

### 4.4 Feedback Topologies

Negative feedback alters amplifier input ($R_{in}$) and output ($R_{out}$) impedances:

| Feedback Topology | Sampled Quantity | Summed Quantity | $R_{in}$ with Feedback | $R_{out}$ with Feedback |
| :--- | :--- | :--- | :--- | :--- |
| **Voltage-Series** | Voltage | Voltage | $R_{in}(1 + A \beta)$ (Increases) | $R_{out} / (1 + A \beta)$ (Decreases) |
| **Voltage-Shunt** | Voltage | Current | $R_{in} / (1 + A \beta)$ (Decreases) | $R_{out} / (1 + A \beta)$ (Decreases) |
| **Current-Series** | Current | Voltage | $R_{in}(1 + A \beta)$ (Increases) | $R_{out}(1 + A \beta)$ (Increases) |
| **Current-Shunt** | Current | Current | $R_{in} / (1 + A \beta)$ (Decreases) | $R_{out}(1 + A \beta)$ (Increases) |

Gain-Bandwidth Relation:
$$A_f = \frac{A}{1 + A \beta}, \quad BW_f = BW \cdot (1 + A \beta)$$

---

### 4.5 Active and Passive Filters

```
               Passive RC Low-Pass                     Active Sallen-Key Low-Pass
                  R                                        R1       R2
         V_in ───/\/\/\───┬─── V_out              V_in ───/\/\/\───┬───/\/\/\──┬───( + )──┐
                          │                                       │           │    (Op)  ├─── V_out
                         ── C                                    ── C2       ── C1 ┌───( - )──┘
                         ──                                      ──          ──    │
                          │                                       │           ├────┴───/\/\─── GND
                         GND                                     GND          GND
```

#### 1st-Order Passive RC Low-Pass Filter:
Transfer Function $H(j\omega) = \frac{V_{out}}{V_{in}} = \frac{1/j\omega C}{R + 1/j\omega C} = \frac{1}{1 + j\omega R C}$.

Cutoff Frequency ($-3 \text{ dB}$ point):
$$f_c = \frac{1}{2\pi R C}$$
Roll-off rate: $-20 \text{ dB/decade}$.

#### Butterworth Filter General Transfer Function:
Designed for maximum magnitude flatness in passband (no ripple):

$$|H(j\omega)|^2 = \frac{1}{1 + \left( \frac{\omega}{\omega_c} \right)^{2n}}$$

Where $n$ is the order of the filter.
High-frequency attenuation slope = $-20 n \text{ dB/decade}$.

---

### 4.6 Noise Sources in Electronic Systems

1.  **Johnson-Nyquist Thermal Noise:** Thermal agitation of charge carriers inside resistive elements. White noise spectral density.
    $$\bar{v}_n^2 = 4 k_B T R \Delta f \quad (\text{Voltage Noise Square})$$
    $$\bar{i}_n^2 = \frac{4 k_B T \Delta f}{R} \quad (\text{Current Noise Square})$$
2.  **Shot Noise:** Quantum discreteness of electric charge crossing potential barriers (p-n junctions).
    $$\bar{i}_n^2 = 2 q I_{dc} \Delta f$$
3.  **Flicker ($1/f$) Noise:** Low-frequency surface trapping/recombination effects in semiconductors.
    $$\bar{v}_n^2 \propto \frac{1}{f^\alpha} \quad (\alpha \approx 1)$$
4.  **Noise Figure ($NF$):**
    $$NF = 10 \log_{10} \left( \frac{SNR_{in}}{SNR_{out}} \right) \text{ dB}$$

---

### 4.7 Shielding and Grounding Principles

1.  **Electrostatic Shielding:** Enclosing sensitive circuits inside metallic conductive enclosure (Faraday Cage) connected to system reference ground to terminate capacitive pick-up.
2.  **Ground Loops:** Occur when multiple ground return paths exist at different potentials, inducing power line hum ($50/60 \text{ Hz}$).
    *   *Solution:* **Single-Point Grounding** for low frequencies ($< 1 \text{ MHz}$) and **Star Grounding**.
3.  **Skin Depth ($\delta$) for Electromagnetic Shielding:**
    $$\delta = \sqrt{\frac{2}{\omega \mu \sigma}}$$

---

## 5. Signal Recovery Techniques

---

### 5.1 Fourier Transforms and Spectral Analysis

Continuous Fourier Transform Pair:
$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^\infty f(t) e^{-j \omega t} dt$$
$$f(t) = \frac{1}{2\pi} \int_{-\infty}^\infty F(\omega) e^{j \omega t} d\omega$$

#### Important Theorems:
1.  **Convolution Theorem:** $\mathcal{F}\{f(t) * g(t)\} = F(\omega) \cdot G(\omega)$
2.  **Parseval's Identity:** $\int_{-\infty}^\infty |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^\infty |F(\omega)|^2 d\omega$

---

### 5.2 Lock-In Amplifier (Phase-Sensitive Detection)

Lock-in amplifiers extract small AC signals deeply buried in background noise (SNR $< -60 \text{ dB}$) using narrowing measurement bandwidth via Phase-Sensitive Detector (PSD).

```
  Input Signal V_s(t) ────┐
                          ▼
  Reference Ref(t) ────► [ MULTIPLIER / PSD ] ────► [ LOW-PASS FILTER ] ────► V_dc Output
```

#### Mathematical Derivation of PSD Operation:
Let input signal be sinusoidal modulated at reference frequency $\omega_s$ with amplitude $A_s$ and phase $\theta_s$, plus noise $N(t)$:
$$V_{in}(t) = A_s \sin(\omega_s t + \theta_s) + N(t)$$

Internal reference signal generated by lock-in:
$$V_{ref}(t) = A_r \sin(\omega_r t + \theta_r)$$

1.  **Multiplier Stage Output ($V_{mult}(t) = V_{in}(t) \cdot V_{ref}(t)$):**
    $$V_{mult}(t) = A_s A_r \sin(\omega_s t + \theta_s) \sin(\omega_r t + \theta_r) + N(t) A_r \sin(\omega_r t + \theta_r)$$

    Using trigonometric identity $\sin A \sin B = \frac{1}{2} [\cos(A - B) - \cos(A + B)]$:
    $$V_{mult}(t) = \frac{1}{2} A_s A_r \cos\left[ (\omega_s - \omega_r) t + (\theta_s - \theta_r) \right] - \frac{1}{2} A_s A_r \cos\left[ (\omega_s + \omega_r) t + (\theta_s + \theta_r) \right] + \text{Noise Terms}$$

2.  **Phase Matching ($\omega_s = \omega_r$):**
    $$V_{mult}(t) = \frac{1}{2} A_s A_r \cos(\theta_s - \theta_r) - \frac{1}{2} A_s A_r \cos(2\omega_s t + \theta_s + \theta_r) + \text{Noise}$$

3.  **Low-Pass Filtering (Time Constant $\tau_{LPF} \gg \frac{1}{\omega_s}$):**
    The low-pass filter averages out the high frequency sum component $2\omega_s$ and unsynchronized noise $N(t)$:

    $$V_{out, dc} = \frac{1}{2} A_s A_r \cos(\Delta \theta) \quad (\text{where } \Delta \theta = \theta_s - \theta_r)$$

#### Dual-Phase Lock-In Amplifier:
To eliminate dependence on phase alignment $\Delta \theta$, a second PSD multiplies signal with $90^\circ$ phase-shifted reference $A_r \cos(\omega_r t + \theta_r)$:
*   In-phase output: $X = \frac{1}{2} A_s A_r \cos(\Delta \theta)$
*   Quadrature output: $Y = \frac{1}{2} A_s A_r \sin(\Delta \theta)$

Reconstructed Signal Magnitude:

$$R = \sqrt{X^2 + Y^2} = \frac{1}{2} A_s A_r \quad (\text{Phase-Independent})$$

Phase Angle:
$$\theta = \tan^{-1}\left(\frac{Y}{X}\right)$$

---

### 5.3 Box-Car Integrator (Gated Signal Averager)

Used for recovering repetitive **pulsed non-sinusoidal signals** with low duty cycles.

```
       Input Signal + Noise                      Gate Pulse
  ┌─┐                                        ┌────┐
  │ │/\  /\  /\                              │    │
  │ /  \/  \/  \                             │    │
  └───────────────► t                        └────┴──────────► t
          │                                        │
          └──────────────────┬─────────────────────┘
                             ▼
                    [ INTEGRATION GATE ]
                             │
                             ▼
                    Averaged Signal Output
```

#### Working Principle:
*   An electronic switch (gate) closes for duration $T_g$ only when triggered by synchronization pulse coinciding with fast transient signal.
*   Signal inside window charges capacitor $C$ through resistor $R$.
*   Averaging $N$ repeated pulses improves Signal-to-Noise Ratio by factor:

$$SNR_{improvement} = \sqrt{N}$$

---

### 5.4 Modulation Techniques

#### 1. Amplitude Modulation (AM)
Carrier $c(t) = A_c \cos(\omega_c t)$, Message $m(t) = A_m \cos(\omega_m t)$.

Modulated Wave:
$$s(t) = A_c \left[ 1 + \mu \cos(\omega_m t) \right] \cos(\omega_c t) \quad \left(\text{Modulation Index } \mu = \frac{A_m}{A_c}\right)$$

Expansion into frequency components:
$$s(t) = A_c \cos(\omega_c t) + \frac{\mu A_c}{2} \cos((\omega_c + \omega_m) t) + \frac{\mu A_c}{2} \cos((\omega_c - \omega_m) t)$$

Bandwidth $B = 2 f_m$. Total transmitted power:

$$P_T = P_c \left( 1 + \frac{\mu^2}{2} \right)$$

#### 2. Frequency Modulation (FM)
Carrier frequency varied proportionally to message signal:
$$\omega(t) = \omega_c + k_f m(t)$$

$$s(t) = A_c \cos\left( \omega_c t + \beta \sin(\omega_m t) \right)$$

Where FM Modulation Index $\beta = \frac{\Delta f}{f_m} = \frac{k_f A_m}{\omega_m}$.

Carson's Bandwidth Rule:
$$B_{FM} = 2 (\Delta f + f_m) = 2 f_m (\beta + 1)$$

---

## 6. High-Frequency Devices (Generators and Detectors)

At microwave frequencies ($> 1 \text{ GHz}$), conventional vacuum tubes and BJTs fail due to **electron transit-time effects** ($\tau \sim 1/f$) and interelectrode capacitive loading ($X_C = \frac{1}{2\pi f C} \to 0$). Specialized high-frequency devices are required.

---

### 6.1 Microwave Vacuum Tube Generators

```
                          Reflex Klystron Schematic
                             Refeller (-V)
                               │  │  │
                        ┌──────┴──┴──┴──────┐
                        │   Repeller Space  │
                        ├──────┬──┬──────┤
                        │ Cavity Resonator  │  <-- Velocity Modulation
                        ├──────┴──┴──────┤
                        │ Electron Beam  │
                        └──────┬──┬──────┘
                               │  │  │
                             Cathode (-V0)
```

#### 1. Reflex Klystron (Single-Cavity Oscillator):
*   **Mechanism:** Converts DC beam power to RF microwave energy via **Velocity Modulation** and **Density Modulation**.
*   Electron beam passes re-entrant cavity gap $V_{RF} \sin(\omega t)$. Electrons accelerated or decelerated depending on phase.
*   Electrons enter drift space, turned back by negative repeller voltage $V_R$.
*   Faster electrons catch up with slower ones forming bunches. Bunches return to cavity during retarding phase to deliver energy.
*   **Transit Time Condition for Mode $n$ Oscillation:**
    $$\tau_{drift} = \left(n + \frac{3}{4}\right) T = \left(n + \frac{3}{4}\right) \frac{1}{f} \quad (n = 1, 2, 3 \dots)$$

#### 2. Magnetron (Crossed-Field Device):
*   High power microwave source (e.g., Radar, Microwave Ovens).
*   Consists of central cylindrical cathode surrounded by resonant cavity anode block in static magnetic field $B \parallel z$ perpendicular to electric field $E \parallel r$.
*   Electrons execute cycloidal motion. Resonant cavities support $\pi$-mode phase oscillations transferring potential energy to RF field.

---

### 6.2 Solid-State Microwave Generators

#### 1. Gunn Diode (Transferred Electron Device - TED)
*   Does not rely on p-n junction; constructed from bulk n-type compound semiconductors (GaAs, InP).
*   **Mechanism:** **Ridley-Watkins-Hilsum (RWH) Two-Valley Model**.

```
                GaAs Energy Band Structure
        E ▲
          │         Upper Valley (Satellite L-Valley)
          │         High effective mass m2*, Low mobility μ2
          │            \___/
          │              ▲
          │              │ ΔE = 0.31 eV
          │            /   \
          │  Lower Valley (Central Γ-Valley)
          │  Low effective mass m1*, High mobility μ1
          └─────────────────────────────► k
```

*   At low electric field $E < E_{th} \approx 3.2 \text{ kV/cm}$, electrons reside in high-mobility central $\Gamma$-valley.
*   When $E > E_{th}$, electrons gain energy and scatter into satellite $L$-valley with higher effective mass ($m_2^* \gg m_1^*$) and lower mobility ($\mu_2 \ll \mu_1$).
*   This causes velocity reduction as electric field increases, creating a **Negative Differential Resistance (NDR)** region:

$$\frac{d v}{d E} < 0 \implies \frac{d I}{d V} < 0$$

```
                           Gunn Diode I-V Curve
                 Current I
                    ▲          /
                    │         /
                    │   Peak / \
                    │       •   \ <-- Negative Differential Resistance (NDR)
                    │            \   Valley
                    │             •────────►
                    └───────────────────────► Voltage V
                             V_th
```

*   NDR leads to domain formation (high electric field domains drifting across length $L$ at saturation velocity $v_s \approx 10^7 \text{ cm/s}$).
*   Oscillation Frequency:
    $$f = \frac{v_s}{L}$$

#### 2. IMPATT Diode (Impact Ionization Avalanche Transit Time)
*   High power solid-state device utilizing reverse-biased p-n junction operating in avalanche breakdown.
*   Combines two delays to create $180^\circ$ phase shift (effective negative resistance):
    1.  *Avalanche Breakdown Delay:* Current lags applied voltage by $90^\circ$.
    2.  *Transit Time Delay:* Drift across intrinsic layer adds another $90^\circ$ phase lag.
    *   Total delay $= 180^\circ \implies$ Phase mismatch generates RF amplification at microwave frequencies ($10 \text{ GHz} - 300 \text{ GHz}$).

---

### 6.3 Rectangular Waveguides

Waveguides are metallic pipes used to transport high-frequency electromagnetic waves ($> 3 \text{ GHz}$) with low dielectric loss.

```
                  Rectangular Waveguide Dimensions
                            z (Propagation)
                           ▲
                          /
                  ┌──────/──────┐
                b │     /       │
                  └────/────────┘
                       ◄───────►
                           a
```

For rectangular waveguide of cross-section dimensions $a \times b$ ($a > b$ along $x$ and $y$ axes respectively):

#### Wave Modes:
1.  **Transverse Electric ($\text{TE}_{mn}$):** $E_z = 0, H_z \neq 0$
2.  **Transverse Magnetic ($\text{TM}_{mn}$):** $H_z = 0, E_z \neq 0$
3.  **TEM Mode Cannot Propagate** inside hollow single-conductor waveguides (requires minimum 2 separate conductors).

#### Cutoff Frequency Formula:

$$f_{c, mn} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

Where $m, n = 0, 1, 2, \dots$ are mode indices (for TM, $m \ge 1, n \ge 1$).

#### Dominant Mode ($\text{TE}_{10}$):
Mode with lowest cutoff frequency ($m=1, n=0$):

$$f_{c, 10} = \frac{c}{2a}$$

Cutoff Wavelength: $\lambda_{c, 10} = 2a$.

*   Propagation Condition: Frequency $f > f_c$ (or wavelength $\lambda < \lambda_c$).
*   If $f < f_c$, wave attenuates exponentially (evanescent mode).

#### Wave Propagation Characteristics ($f > f_c$):
1.  **Guide Wavelength ($\lambda_g$):**
    $$\lambda_g = \frac{\lambda_0}{\sqrt{1 - \left(\frac{f_c}{f}\right)^2}} > \lambda_0$$
2.  **Phase Velocity ($v_p$):**
    $$v_p = \frac{c}{\sqrt{1 - \left(\frac{f_c}{f}\right)^2}} > c$$
3.  **Group Velocity ($v_g$):**
    $$v_g = c \sqrt{1 - \left(\frac{f_c}{f}\right)^2} < c$$
4.  **Velocity Identity:**
    $$v_p \cdot v_g = c^2$$

---

## 7. Solved Exam-Style Problems

---

### Problem 1: First-Order Phase Transition (Clausius-Clapeyron)
**Question:** The melting temperature of ice at atmospheric pressure ($1 \text{ atm} = 1.013 \times 10^5 \text{ N/m}^2$) is $273.15 \text{ K}$. Latent heat of fusion $L = 3.34 \times 10^5 \text{ J/kg}$. Specific volume of water $v_{water} = 1.000 \times 10^{-3} \text{ m}^3/\text{kg}$ and ice $v_{ice} = 1.091 \times 10^{-3} \text{ m}^3/\text{kg}$. Calculate the pressure increase required to lower the melting point of ice by $1^\circ\text{C}$.

**Solution:**
Using the Clausius-Clapeyron equation:
$$\frac{dP}{dT} = \frac{L}{T \Delta v} = \frac{L}{T (v_{water} - v_{ice})}$$

Substitute known values:
$$\Delta v = (1.000 - 1.091) \times 10^{-3} \text{ m}^3/\text{kg} = -0.091 \times 10^{-3} \text{ m}^3/\text{kg}$$

$$\frac{dP}{dT} = \frac{3.34 \times 10^5 \text{ J/kg}}{273.15 \text{ K} \times (-0.091 \times 10^{-3} \text{ m}^3/\text{kg})} = \frac{3.34 \times 10^5}{-0.024856} \approx -1.3438 \times 10^7 \text{ Pa/K}$$

For lowering temperature by $\Delta T = -1 \text{ K}$:
$$\Delta P = \left(\frac{dP}{dT}\right) \Delta T = (-1.3438 \times 10^7 \text{ Pa/K}) \times (-1 \text{ K}) = 1.3438 \times 10^7 \text{ Pa}$$

In atmospheres:
$$\Delta P = \frac{1.3438 \times 10^7}{1.013 \times 10^5} \approx 132.65 \text{ atm}$$

---

### Problem 2: 1D Ising Model Partition Function
**Question:** Consider a 1D Ising chain of $N$ spins in zero magnetic field with nearest-neighbor interaction $J$. Calculate internal energy per spin $u$ and magnetic susceptibility $\chi$ as $T \to 0$.

**Solution:**
From Transfer Matrix solution with $h = 0$, eigenvalues are $\lambda_1 = 2 \cosh(\beta J)$ and $\lambda_2 = 2 \sinh(\beta J)$.
Free energy per spin in thermodynamic limit:
$$f = -k_B T \ln (2 \cosh(\beta J))$$

Internal energy per spin $u$:
$$u = \frac{\partial (\beta f)}{\partial \beta} = \frac{\partial}{\partial \beta} \left( -\ln(2 \cosh(\beta J)) \right) = -J \tanh(\beta J)$$

As $T \to 0 \implies \beta \to \infty$:
$$\lim_{T \to 0} \tanh(\beta J) = 1 \implies u = -J$$
All spins align parallel ground state.

For zero-field susceptibility per spin $\chi = \left.\frac{\partial m}{\partial h}\right|_{h=0}$:
$$m = \frac{\sinh(\beta h)}{\sqrt{\sinh^2(\beta h) + e^{-4\beta J}}}$$
Differentiating with respect to $h$ at $h = 0$:
$$\chi = \left.\frac{\beta \cosh(\beta h)}{\sqrt{\sinh^2(\beta h) + e^{-4\beta J}}}\right|_{h=0} = \beta e^{2\beta J} = \frac{1}{k_B T} e^{2 J / k_B T}$$

As $T \to 0$, $\chi \to \infty$ exponentially, confirming correlation length diverges at $T = 0 \text{ K}$.

---

### Problem 3: Op-Amp Instrumentation Amplifier Gain
**Question:** In a standard 3 Op-Amp instrumentation amplifier, $R_1 = 50 \text{ k}\Omega$, $R_2 = 10 \text{ k}\Omega$, and $R_3 = 100 \text{ k}\Omega$. Find the value of gain-setting resistor $R_g$ required to achieve an overall differential voltage gain $A_v = 500$.

**Solution:**
The overall gain expression is:
$$A_v = \left( 1 + \frac{2 R_1}{R_g} \right) \left( \frac{R_3}{R_2} \right)$$

Substitute values:
$$500 = \left( 1 + \frac{2 \times 50 \text{ k}\Omega}{R_g} \right) \left( \frac{100 \text{ k}\Omega}{10 \text{ k}\Omega} \right)$$
$$500 = \left( 1 + \frac{100 \text{ k}\Omega}{R_g} \right) \times 10$$
$$50 = 1 + \frac{100 \text{ k}\Omega}{R_g} \implies 49 = \frac{100 \text{ k}\Omega}{R_g}$$

$$R_g = \frac{100 \text{ k}\Omega}{49} \approx 2.0408 \text{ k}\Omega = 2040.8 \ \Omega$$

---

### Problem 4: Rectangular Waveguide Cutoff Frequencies
**Question:** A rectangular metallic waveguide has inner dimensions $a = 3.0 \text{ cm}$ and $b = 1.5 \text{ cm}$. Determine:
1. Cutoff frequency of the dominant mode $\text{TE}_{10}$.
2. Cutoff frequency of the $\text{TE}_{11}$ mode.
3. Whether a signal at $f = 8 \text{ GHz}$ can propagate in $\text{TE}_{10}$ mode.

**Solution:**
Formula for cutoff frequency:
$$f_{c, mn} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$
Where $c = 3 \times 10^{10} \text{ cm/s}$.

1. **Dominant Mode $\text{TE}_{10}$ ($m=1, n=0$):**
   $$f_{c, 10} = \frac{c}{2a} = \frac{3 \times 10^{10} \text{ cm/s}}{2 \times 3.0 \text{ cm}} = 5 \times 10^9 \text{ Hz} = 5.0 \text{ GHz}$$

2. **Mode $\text{TE}_{11}$ ($m=1, n=1$):**
   $$f_{c, 11} = \frac{3 \times 10^{10}}{2} \sqrt{\left(\frac{1}{3.0}\right)^2 + \left(\frac{1}{1.5}\right)^2} = 1.5 \times 10^{10} \times \sqrt{\frac{1}{9} + \frac{4}{9}} = 1.5 \times 10^{10} \times \frac{\sqrt{5}}{3}$$
   $$f_{c, 11} = 0.5 \times 10^{10} \times 2.236 = 1.118 \times 10^{10} \text{ Hz} = 11.18 \text{ GHz}$$

3. **Propagation of $8 \text{ GHz}$ Signal:**
   For $f = 8 \text{ GHz}$:
   * $f > f_{c, 10} = 5.0 \text{ GHz} \implies$ **YES**, wave propagates in $\text{TE}_{10}$ mode.
   * $f < f_{c, 11} = 11.18 \text{ GHz} \implies$ Higher modes like $\text{TE}_{11}$ are evanescent and cannot propagate.

---

### Problem 5: Brownian Motion and Diffusion Coefficient
**Question:** A spherical pollen grain of radius $r = 1 \ \mu\text{m}$ is suspended in water at $T = 300 \text{ K}$. Dynamic viscosity of water $\eta = 1.0 \times 10^{-3} \text{ Pa}\cdot\text{s}$. Calculate:
1. Diffusion coefficient $D$.
2. Root-mean-square displacement $\sqrt{\langle x^2 \rangle}$ along 1D after $t = 10 \text{ s}$.

**Solution:**
Given: $r = 1.0 \times 10^{-6} \text{ m}$, $T = 300 \text{ K}$, $k_B = 1.38 \times 10^{-23} \text{ J/K}$.

1. **Stokes-Einstein Diffusion Coefficient $D$:**
   $$D = \frac{k_B T}{6 \pi \eta r} = \frac{1.38 \times 10^{-23} \times 300}{6 \pi \times (1.0 \times 10^{-3}) \times (1.0 \times 10^{-6})}$$
   $$D = \frac{4.14 \times 10^{-21}}{1.8849 \times 10^{-8}} \approx 2.196 \times 10^{-13} \text{ m}^2/\text{s}$$

2. **Root-Mean-Square Displacement $\sqrt{\langle x^2 \rangle}$:**
   In 1D Brownian motion:
   $$\langle x^2 \rangle = 2 D t = 2 \times (2.196 \times 10^{-13} \text{ m}^2/\text{s}) \times 10 \text{ s} = 4.392 \times 10^{-12} \text{ m}^2$$

   $$\sqrt{\langle x^2 \rangle} = \sqrt{4.392 \times 10^{-12}} \approx 2.096 \times 10^{-6} \text{ m} \approx 2.1 \ \mu\text{m}$$

---

# SUMMARY FORMULA REFERENCE MATRIX

```
===================================================================================================
 TOPIC                      PRIMARY MATHEMATICAL FORMULA                              KEY CONSTANTS
===================================================================================================
Clausius-Clapeyron          dP/dT = L / (T * ΔV)                                      L = Latent Heat
Landau Free Energy          f(T,η) = f0 + (a0/2)(T - Tc)η² + (b/4)η⁴                  β = 1/2, γ = 1
Curie-Weiss Law             χ = C / (T - Tc)                                          C = μ0 N μ² / 3kB
Pauli Paramagnetism         χ_Pauli = (3/2) * μ0 * N * μ_B² / E_F                     Temp-independent
1D Ising Free Energy        f = -kB * T * ln(2 * cosh(J / kB*T))                      Tc = 0 in 1D
3D BEC Transition Temp      Tc = (2π ħ² / m kB) * (N / (2.612 V))^(2/3)              N0/N = 1 - (T/Tc)^(3/2)
Einstein Diffusion          D = kB * T / (6 π η r)                                    <x²> = 2 D t
Onsager Reciprocity         L_ij = L_ji                                               Entropy Production σ >= 0
Nyquist Noise Formula       v_n² = 4 kB T R Δf                                        Shot noise i_n² = 2 q I Δf
Chi-Square Goodness-of-Fit  χ² = Σ (y_i - f(x_i))² / σ_i²                            Degrees of Freedom ν = N - k
Hall Voltage                V_H = I * B / (n * e * d)                                R_H = 1 / (n e)
Inst. Amp Voltage Gain      Av = (1 + 2 R1 / Rg) * (R3 / R2)                          High CMRR & Z_in
Lock-In LPF Output          V_dc = (1/2) * A_s * A_r * cos(θ_s - θ_r)                 Phase Sensitive Detection
AM Total Power              P_T = P_c * (1 + m² / 2)                                  Bandwidth = 2 f_m
Gunn Diode Oscillation      f = v_s / L                                               Negative Differential Resistance
Rectangular Waveguide fc    fc_mn = (c / 2) * sqrt((m/a)² + (n/b)²)                   TE10 Cutoff = c / (2a)
===================================================================================================
```
