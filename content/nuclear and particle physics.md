# CSIR NET PHYSICAL SCIENCES
## MASTER CLASS STUDY NOTES: NUCLEAR AND PARTICLE PHYSICS

---

# SECTION 1: BASIC NUCLEAR PROPERTIES & QUANTUM MEASURABLES

## 1.1 Nuclear Size, Radius, and Spatial Distributions

The nucleus cannot be treated as a rigid sphere with a sharp boundary. Instead, it exhibits a continuous spatial charge and matter distribution.

### Charge Density Parameterization: Fermi (Woods-Saxon) Distribution
The radial charge distribution of spherical nuclei is modeled by the two-parameter Fermi distribution (or Woods-Saxon profile):

$$\rho(r) = \frac{\rho_0}{1 + \exp\left( \frac{r - R_{1/2}}{a} \right)}$$

Where:
*   $\rho_0$: Central charge density ($\approx 0.17 \text{ nucleons/fm}^3$ or $\approx 10^{17} \text{ kg/m}^3$).
*   $R_{1/2}$: Half-density radius, defined as the radial distance at which $\rho(R_{1/2}) = \frac{1}{2}\rho_0$.
*   $a$: Surface diffuseness parameter related to the skin thickness $t$ by:
    $$t = t_{90-10} = (2 \ln 9) a \approx 4.4 a \approx 2.4 \text{ fm}$$
    The surface skin thickness $t$ is defined as the distance over which the density drops from $90\%$ to $10\%$ of $\rho_0$.

```
     Density ρ(r)
     ^
  ρ₀ |-----------+
     |           \
 ρ₀/2|............\............ (r = R₁/₂ = R₀ A¹/³)
     |             \
  0  +--------------+----------> Radial distance r
     |<--- R₁/₂ --->|
                    |<- t ->| (Skin thickness)
```

### Nuclear Radius Scaling Law
From high-energy electron scattering experiments (Rutherford scattering deviations and Mott scattering), the equivalent uniform radius of a nucleus with mass number $A$ is:

$$R = R_0 A^{1/3}$$

Where $R_0 \approx 1.2 \times 10^{-15} \text{ m} = 1.2 \text{ fm}$ (charge radius) or $R_0 \approx 1.4 \text{ fm}$ (potential/matter radius).

### Root-Mean-Square (RMS) Radius
For a uniform spherical charge distribution of radius $R$:

$$\langle r^2 \rangle = \frac{\int_0^R r^2 \cdot (4\pi r^2 dr)}{\int_0^R 4\pi r^2 dr} = \frac{3}{5} R^2 \implies R_{\text{rms}} = \sqrt{\langle r^2 \rangle} = \sqrt{\frac{3}{5}} R$$

### Experimental Determination of Nuclear Radius

#### 1. High-Energy Electron Scattering (Charge Radius)
Electrons interact exclusively via the electromagnetic force. The differential cross-section in the Born approximation is given by the Mott cross-section multiplied by the squared nuclear form factor:

$$\left(\frac{d\sigma}{d\Omega}\right)_{\text{exp}} = \left(\frac{d\sigma}{d\Omega}\right)_{\text{Mott}} |F(q^2)|^2$$

The nuclear form factor $F(q^2)$ is the 3D Fourier transform of the charge distribution $\rho(\vec{r})$:

$$F(q^2) = \frac{4\pi}{Z e} \int_0^\infty \rho(r) \frac{\sin(qr/\hbar)}{qr/\hbar} r^2 dr$$

Expanding for small momentum transfer $q = |\vec{q}|$:

$$F(q^2) \approx 1 - \frac{q^2 \langle r^2 \rangle}{6\hbar^2} + \dots$$

Measuring $F(q^2)$ at low $q^2$ yields the rms charge radius $\sqrt{\langle r^2 \rangle}$ directly.

#### 2. Coulomb Energy Difference of Mirror Nuclei
Mirror nuclei are pairs of isobaric nuclei with neutron and proton numbers interchanged: 
$$Z_1 = Z, N_1 = Z+1 \quad \text{and} \quad Z_2 = Z+1, N_2 = Z$$

Assuming the nuclear force is charge-symmetric, the binding energy difference $\Delta B = B(Z_2, N_2) - B(Z_1, N_1)$ arises entirely from the Coulomb energy difference $\Delta E_C$:

$$\Delta E_C = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} [Z_2(Z_2-1) - Z_1(Z_1-1)]$$

For $Z_2 = Z+1$ and $Z_1 = Z$:

$$\Delta E_C = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} \left[ (Z+1)Z - Z(Z-1) \right] = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} (2Z)$$

Measuring the maximum $\beta^+$ endpoint energy $E_{\max}$ yields $\Delta E_C$, allowing the direct extraction of $R_0$:

$$\Delta E_C = E_{\max} + (m_n - m_p)c^2 - m_e c^2$$

---

## 1.2 Nuclear Spin and Parity

### Nuclear Spin ($\vec{I}$)
The total angular momentum of a nucleus, conventionally called nuclear spin $\vec{I}$, is the vector sum of individual orbital angular momenta $\vec{l}_i$ and intrinsic spins $\vec{s}_i$ of all constituent nucleons:

$$\vec{I} = \sum_{i=1}^{A} (\vec{l}_i + \vec{s}_i) = \sum_{i=1}^{A} \vec{j}_i$$

*   **Even-$A$ Nuclei**: Contain an even number of nucleons. The total nuclear spin integer $I$ is an **integer** ($I = 0, 1, 2, \dots$).
    *   *Even-Even Nuclei* ($Z$ even, $N$ even): All nucleon spins pair up in the ground state to yield **$I = 0$**.
*   **Odd-$A$ Nuclei**: Contain an odd number of nucleons. The total spin $I$ is a **half-odd integer** ($I = \frac{1}{2}, \frac{3}{2}, \frac{5}{2}, \dots$).

### Nuclear Parity ($\pi$)
Parity describes the behavior of the nuclear spatial wavefunction under spatial inversion $\vec{r} \to -\vec{r}$:

$$\hat{P} \psi(\vec{r}) = \pi \psi(\vec{r}) = (-1)^L \psi(\vec{r})$$

The overall parity of a multi-nucleon nucleus is the product of individual orbital parities:

$$\pi_{\text{total}} = \prod_{i=1}^{A} (-1)^{l_i}$$

The complete state of a nucleus is designated by the shorthand notation:

$$I^\pi$$

---

## 1.3 Electric Quadrupole Moment ($Q$)

The electric quadrupole moment measures the deviation of the nuclear charge distribution from spherical symmetry.

### Formal Definition
The classical electric quadrupole moment with respect to the symmetry axis $z$ is:

$$Q_e = \int \rho(\vec{r}) (3z^2 - r^2) \, d^3r$$

In quantum mechanics, the spectroscopic electric quadrupole moment $Q$ (in units of area, $\text{cm}^2$ or Barns, where $1 \text{ b} = 10^{-28} \text{ m}^2$) is defined for the substate with maximum magnetic quantum number $M = I$:

$$Q = \frac{1}{e} \int \psi_{I, M=I}^* \left[ \sum_{i=1}^Z (3z_i^2 - r_i^2) \right] \psi_{I, M=I} \, d\tau$$

```
   Prolate (Q > 0)          Spherical (Q = 0)         Oblate (Q < 0)
     Cigar-shaped                 Perfect                Pancake-shaped
        
        /\                         /\                        /\
       /  \                       /  \                      /  \
      |    |                     (    )                    |----|
      |    |                      \  /                      \  /
       \  /                        \/                        \/
        \/
```

### Deformed Ellipsoidal Charge Model
Assuming a uniformly charged ellipsoid with semi-major axis $a$ (along the symmetry axis) and semi-minor axis $b$:

$$Q_0 = \frac{2}{5} Z (a^2 - b^2) = \frac{4}{5} Z R^2 \left( \frac{a - b}{R} \right) = \frac{4}{5} Z R^2 \delta$$

where $R = \frac{a+b}{2}$ and $\delta = \frac{a-b}{R}$ is the deformation parameter.

*   **$Q > 0$ (Prolate / Cigar-shaped)**: $a > b$; charge is elongated along the spin axis.
*   **$Q < 0$ (Oblate / Pancake-shaped)**: $a < b$; charge is flattened along the spin axis.
*   **$Q = 0$ (Spherical)**: $a = b$; charge is spherically symmetric.

### Projection Relation (Spectroscopic vs. Intrinsic Quadrupole Moment)
The relationship between the measured spectroscopic quadrupole moment $Q$ in the lab frame and the intrinsic quadrupole moment $Q_0$ in the body-fixed frame is:

$$Q = \frac{3K^2 - I(I+1)}{(I+1)(2I+3)} Q_0$$

For ground state rotational bands where $K = I$:

$$Q = \frac{I(2I - 1)}{(I + 1)(2I + 3)} Q_0$$

> **Crucial Selection Rule**: If $I = 0$ or $I = 1/2$, $Q \equiv 0$ strictly, regardless of the intrinsic shape of the nucleus. A nucleus must have $I \ge 1$ to exhibit a non-zero spectroscopic electric quadrupole moment.

---

## 1.4 Nuclear Magnetic Dipole Moment ($\mu$)

### Definition and Operators
The magnetic dipole moment operator $\vec{\hat{\mu}}$ of a nucleus composed of $A$ nucleons is:

$$\vec{\hat{\mu}} = \sum_{i=1}^A \left[ g_l^{(i)} \vec{l}_i + g_s^{(i)} \vec{s}_i \right] \mu_N$$

Where the **Nuclear Magneton** $\mu_N$ is defined as:

$$\mu_N = \frac{e\hbar}{2 m_p} = 3.15245 \times 10^{-8} \text{ eV/T} = 5.05078 \times 10^{-27} \text{ J/T}$$

Notice the mass in the denominator is the **proton mass** $m_p$, making $\mu_N \approx \frac{1}{1836} \mu_B$ (Bohr Magneton).

### Free Nucleon $g$-factors
*   **Proton**: $g_l^{(p)} = 1$, \quad $g_s^{(p)} = +5.58569$
*   **Neutron**: $g_l^{(n)} = 0$, \quad $g_s^{(n)} = -3.82608$

The non-zero magnetic moment of the uncharged neutron and the anomalous value for the proton provide direct evidence that nucleons are not fundamental point particles, but composite structures built of quarks.

### Effective Spin Gyromagnetic Factor ($g_I$)
The observable magnetic dipole moment $\mu$ is defined as the expectation value of the $z$-component of $\vec{\hat{\mu}}$ in the state with maximum projection $M_I = +I$:

$$\mu = \frac{\langle I, M_I=I | \vec{\hat{\mu}} \cdot \vec{I} | I, M_I=I \rangle}{I+1} = g_I I \mu_N$$

---

## 1.5 Solved Benchmark Examples

### Example 1.1: RMS Radius of a Uniformly Charged Sphere
**Problem**: Calculate the root-mean-square radius $R_{\text{rms}}$ for a nucleus modeled as a rigid sphere of uniform charge density $\rho_0$ and radius $R$.

**Solution**:
The charge distribution is:

$$\rho(r) = \begin{cases} \rho_0 & \text{for } r \le R \\ 0 & \text{for } r > R \end{cases}$$

The mean-square radius $\langle r^2 \rangle$ is:

$$\langle r^2 \rangle = \frac{\int r^2 \rho(\vec{r}) \, d^3r}{\int \rho(\vec{r}) \, d^3r} = \frac{\int_0^R r^2 (4\pi r^2 \, dr)}{\int_0^R (4\pi r^2 \, dr)} = \frac{4\pi \int_0^R r^4 \, dr}{4\pi \int_0^R r^2 \, dr} = \frac{\frac{R^5}{5}}{\frac{R^3}{3}} = \frac{3}{5} R^2$$

Taking the square root:

$$R_{\text{rms}} = \sqrt{\langle r^2 \rangle} = \sqrt{\frac{3}{5}} R \approx 0.7746 R$$

### Example 1.2: Coulomb Energy Difference Calculation
**Problem**: Estimate the nuclear radius constant $R_0$ if the energy difference between mirror pair $^{15}_7\text{N}$ and $^{15}_8\text{O}$ is $\Delta E_C = 3.537 \text{ MeV}$.

**Solution**:
For mirror nuclei $Z_1 = 7$, $Z_2 = 8$, $A = 15$:

$$\Delta E_C = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} [Z_2^2 - Z_1^2] = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} (8^2 - 7^2) = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R} (64 - 49) = \frac{9 e^2}{4\pi\varepsilon_0 R}$$

Given $\frac{e^2}{4\pi\varepsilon_0} \hbar c = 1.44 \text{ MeV}\cdot\text{fm}$:

$$R = \frac{9 \times 1.44 \text{ MeV}\cdot\text{fm}}{3.537 \text{ MeV}} = \frac{12.96}{3.537} \text{ fm} \approx 3.664 \text{ fm}$$

Since $R = R_0 A^{1/3}$:

$$R_0 = \frac{R}{A^{1/3}} = \frac{3.664}{(15)^{1/3}} = \frac{3.664}{2.466} \approx 1.486 \text{ fm}$$

---

# SECTION 2: BINDING ENERGY & THE LIQUID DROP MODEL

## 2.1 Nuclear Binding Energy

The mass of any bound nucleus $(A, Z)$ is strictly less than the total mass of its constituent free protons and neutrons. The mass defect $\Delta m$ is:

$$\Delta m(Z, A) = Z m_p + (A-Z) m_n - M(Z, A)$$

The total Binding Energy $B(Z, A)$ is defined as the energy required to completely disassemble the nucleus into its constituent free nucleons:

$$B(Z, A) = \left[ Z m_p + (A-Z) m_n - M(Z, A) \right] c^2$$

In terms of atomic masses $m(x, y)$ (accounting for $Z$ electron masses $m_e$):

$$B(Z, A) = \left[ Z m(^1\text{H}) + (A-Z) m_n - m(Z, A) \right] c^2$$

### Binding Energy per Nucleon ($B/A$) Curve Features
1.  **Saturation Value**: For $A \ge 20$, $B/A$ is approximately constant at $B/A \approx 8.5 \text{ MeV/nucleon}$.
2.  **Peak**: $B/A$ reaches a maximum of $\approx 8.8 \text{ MeV/nucleon}$ near ${}^{56}\text{Fe}$ and ${}^{62}\text{Ni}$.
3.  **Light Nuclei Peaks**: Local pronounced peaks occur at $A = 4, 8, 12, 16, 20$ (i.e., $\alpha$-particle multiples: ${}^4\text{He}, {}^8\text{Be}, {}^{12}\text{C}, {}^{16}\text{O}, {}^{20}\text{Ne}$).
4.  **Heavy Nuclei Decrease**: For $A > 100$, $B/A$ drops gradually to $\approx 7.6 \text{ MeV/nucleon}$ for ${}^{238}\text{U}$ due to long-range Coulomb repulsion.

```
 B/A (MeV)
  9 |       56Fe, 62Ni
    |        /\
  8 |---/\--/  \-------------------
    |  /  \/    \                  \
  7 | /          \                  \--- 238U
    |/            \
  4 | 4He          \
    |               \
  0 +-----------------------------------> Mass Number (A)
    0  4  20  56   100  150  200  250
```

---

## 2.2 Complete Derivation of Semi-Empirical Mass Formula (SEMF)

The Semi-Empirical Mass Formula (Weizsäcker Mass Formula) models the nucleus as a charged, incompressible drop of liquid.

$$B(Z, A) = a_v A - a_s A^{2/3} - a_c \frac{Z(Z-1)}{A^{1/3}} - a_a \frac{(A-2Z)^2}{A} + \delta(A, Z)$$

### Derivation of Individual Terms

#### 1. Volume Term ($E_v = +a_v A$)
*   **Physics**: Short-range, saturated nature of nuclear forces. Each nucleon interacts only with its nearest neighbors.
*   **Derivation**: Total volume $V = \frac{4}{3} \pi R^3 = \frac{4}{3} \pi R_0^3 A \propto A$. Thus, potential energy contribution is directly proportional to $A$.
*   **Empirical Constant**: $a_v \approx 15.7 \text{ MeV}$.

#### 2. Surface Term ($E_s = -a_s A^{2/3}$)
*   **Physics**: Nucleons on the nuclear surface have fewer nearest neighbors than inner nucleons, reducing total binding energy.
*   **Derivation**: Surface area $S = 4\pi R^2 = 4\pi R_0^2 A^{2/3} \propto A^{2/3}$. The deficit in binding energy is proportional to $S$.
*   **Empirical Constant**: $a_s \approx 17.8 \text{ MeV}$.

#### 3. Coulomb Term ($E_c = -a_c \frac{Z(Z-1)}{A^{1/3}}$)
*   **Physics**: Electrostatic repulsion between $Z$ positively charged protons reduces stability.
*   **Derivation**: The self-energy of a uniformly charged sphere of radius $R$ containing charge $Q = Ze$ is:
    $$U_C = \frac{3}{5} \frac{Q^2}{4\pi\varepsilon_0 R} = \frac{3}{5} \frac{Z^2 e^2}{4\pi\varepsilon_0 R_0 A^{1/3}}$$
    Correcting for self-interaction (a proton cannot repel itself), $Z^2 \to Z(Z-1)$:
    $$E_c = -\frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R_0} \frac{Z(Z-1)}{A^{1/3}} = -a_c \frac{Z(Z-1)}{A^{1/3}}$$
*   **Empirical Constant**: $a_c = \frac{3}{5} \frac{e^2}{4\pi\varepsilon_0 R_0} \approx 0.71 \text{ MeV}$ (for $R_0 = 1.2 \text{ fm}$).

#### 4. Asymmetry (Symmetry) Term ($E_a = -a_a \frac{(A-2Z)^2}{A}$)
*   **Physics**: Pauli Exclusion Principle requires non-identical Fermi gases for protons and neutrons. Deviations from $N=Z$ shift nucleons to higher kinetic energy levels.
*   **Derivation from Fermi Gas Model**:
    The Fermi energy of a 3D gas of $N$ particles in volume $V$ is:
    $$E_F = \frac{\hbar^2}{2m} \left( \frac{3\pi^2 N}{V} \right)^{2/3}$$
    Total kinetic energy of $N$ particles: $E_{\text{total}} = \frac{3}{5} N E_F \propto \frac{N^{5/3}}{V^{2/3}}$.
    For $Z$ protons and $N$ neutrons in volume $V \propto A$:
    $$E_{K} = C \frac{Z^{5/3} + N^{5/3}}{A^{2/3}}$$
    Expressing in terms of $A = N+Z$ and asymmetry parameter $\Delta = N-Z = A-2Z \ll A$:
    $$Z = \frac{A}{2}\left(1 - \frac{\Delta}{A}\right), \quad N = \frac{A}{2}\left(1 + \frac{\Delta}{A}\right)$$
    Expanding $(1 \pm x)^{5/3} = 1 \pm \frac{5}{3}x + \frac{5}{9}x^2 + \dots$:
    $$Z^{5/3} + N^{5/3} = \left(\frac{A}{2}\right)^{5/3} \left[ \left(1 - \frac{\Delta}{A}\right)^{5/3} + \left(1 + \frac{\Delta}{A}\right)^{5/3} \right] \approx 2\left(\frac{A}{2}\right)^{5/3} \left[ 1 + \frac{5}{9}\left(\frac{\Delta}{A}\right)^2 \right]$$
    The excess kinetic energy due to asymmetry is:
    $$\Delta E_K \propto \frac{A^{5/3}}{A^{2/3}} \cdot \frac{\Delta^2}{A^2} = \frac{\Delta^2}{A} = \frac{(A-2Z)^2}{A}$$
*   **Empirical Constant**: $a_a \approx 23.6 \text{ MeV}$.

#### 5. Pairing Term ($\delta(A, Z)$)
*   **Physics**: Quantum mechanics favors pairing of identical nucleons with anti-parallel spins ($J=0^+$ pairs).
*   **Mathematical Form**:
    $$\delta(A, Z) = \begin{cases} +\Delta = +\frac{a_p}{A^{1/2}} \quad (\text{or } a_p A^{-3/4}) & \text{for Even-}Z, \text{ Even-}N \text{ (Even-Even)} \\ 0 & \text{for Odd-}A \text{ (Even-}Z, \text{ Odd-}N \text{ or Odd-}Z, \text{ Even-}N) \\ -\Delta = -\frac{a_p}{A^{1/2}} \quad (\text{or } a_p A^{-3/4}) & \text{for Odd-}Z, \text{ Odd-}N \text{ (Odd-Odd)} \end{cases}$$
*   **Empirical Constant**: $a_p \approx 12 \text{ MeV} \text{ (or } 34 \text{ MeV for } A^{-3/4})$.

---

## 2.3 Applications of SEMF

### 1. Most Stable Isobar for a Given $A$ ($Z_0$)
To find the nuclear atomic number $Z_0$ that maximizes binding energy $B(Z,A)$ (or minimizes mass $M(Z,A)$) for a constant mass number $A$:

$$\left( \frac{\partial M(Z,A)}{\partial Z} \right)_A = 0 \quad \text{or} \quad \left( \frac{\partial B(Z,A)}{\partial Z} \right)_A = 0$$

Treating $Z$ as a continuous variable in $B(Z,A)$:

$$\frac{\partial}{\partial Z} \left[ a_v A - a_s A^{2/3} - a_c \frac{Z(Z-1)}{A^{1/3}} - a_a \frac{(A-2Z)^2}{A} + \delta \right] = 0$$

$$- \frac{a_c}{A^{1/3}}(2Z - 1) - \frac{a_a}{A} \cdot 2(A - 2Z)(-2) = 0$$

$$- \frac{a_c}{A^{1/3}}(2Z - 1) + \frac{4 a_a}{A}(A - 2Z) = 0$$

Approximating $2Z - 1 \approx 2Z$:

$$- \frac{2 a_c Z}{A^{1/3}} + 4 a_a - \frac{8 a_a Z}{A} = 0$$

$$4 a_a = 2 Z \left[ \frac{8 a_a}{2 A} + \frac{a_c}{A^{1/3}} \right] = 2 Z \left[ \frac{4 a_a}{A} + \frac{a_c}{A^{1/3}} \right]$$

Dividing both sides by $4 a_a$:

$$1 = Z \left[ \frac{1}{A} + \frac{a_c}{4 a_a A^{1/3}} \right] = \frac{Z}{A} \left[ 1 + \frac{a_c}{4 a_a} A^{2/3} \right]$$

$$Z_0 = \frac{A}{2 + \frac{a_c}{2 a_a} A^{2/3}}$$

*   For **light nuclei** ($A \to 0$): $Z_0 \approx \frac{A}{2}$ (i.e., $N = Z$).
*   For **heavy nuclei** ($A \sim 238$): $Z_0 < \frac{A}{2}$ (neutron excess becomes essential to counter Coulomb repulsion).

### 2. Mass Parabolas and $\beta$-Decay Stability
The mass $M(Z,A)$ as a function of $Z$ for fixed $A$ forms a quadratic parabola:

$$M(Z,A) = \alpha A + \beta Z + \gamma Z^2 + \delta'(A,Z)$$

```
     Odd-A: Single Parabola                    Even-A: Two Parabolas
  M(Z) ^                                    M(Z) ^
       |      \        /                         |    \  Odd-Odd  /
       |       \  *   /                          |     \*       */
       |        \*   /                           |------\-------/------
       |         \*/                             |       \ Even /
       |          * (Stable)                     |        \*   /
       +-------------------> Z                   +-------------------> Z
```

*   **Odd-$A$ Isobars** ($\delta = 0$): Only **one** parabola exists. There is exactly **one stable isobar** located at the minimum $Z_0$.
*   **Even-$A$ Isobars** ($\delta = \pm \Delta$): Two distinct parabolas exist separated vertically by $2\Delta$:
    *   Upper parabola for **Odd-Odd** nuclei.
    *   Lower parabola for **Even-Even** nuclei.
    *   This leads to multiple beta-stable isobars (e.g., ${}^{106}\text{Cd}$ and ${}^{106}\text{Pd}$) and allows Double Beta Decay ($\beta\beta$-decay).

---

## 2.4 Bohr-Wheeler Theory of Nuclear Fission

Nuclear fission is modeled as the deformation of a spherical liquid drop into a prolate ellipsoid, then a dumbbell shape, and finally scission into two fragments.

```
 Spherical       Slight Prolate     Scission Point    Two Fragments
    (0)             (ε)                 (Dumbbell)         (1 + 2)
   ---               --                     --               -     -
  /   \             /  \                   /  \             ( )   ( )
  \   /             \  /                   \  /              -     -
   ---               --                     --
```

### Quadrupole Distortion Parameter $\epsilon$
Let the deformed surface radius be:

$$R(\theta) = R_0 \left[ 1 + \epsilon P_2(\cos\theta) \right]$$

Under constant volume, the change in surface and Coulomb energies to second order in $\epsilon$ are:

$$\Delta E_s = +E_s^{(0)} \left( \frac{2}{5} \epsilon^2 \right) = +a_s A^{2/3} \left( \frac{2}{5} \epsilon^2 \right)$$

$$\Delta E_c = -E_c^{(0)} \left( \frac{1}{5} \epsilon^2 \right) = -a_c \frac{Z^2}{A^{1/3}} \left( \frac{1}{5} \epsilon^2 \right)$$

The net energy change $\Delta E = \Delta E_s + \Delta E_c$ is:

$$\Delta E = \frac{1}{5} \epsilon^2 \left[ 2 a_s A^{2/3} - a_c \frac{Z^2}{A^{1/3}} \right]$$

### Fission Instability Condition
For spontaneous deformation to lower total energy ($\Delta E < 0$):

$$2 a_s A^{2/3} < a_c \frac{Z^2}{A^{1/3}} \implies \frac{Z^2}{A} > \left(\frac{Z^2}{A}\right)_{\text{crit}} = \frac{2 a_s}{a_c}$$

Substituting standard empirical values $a_s \approx 17.8 \text{ MeV}$ and $a_c \approx 0.71 \text{ MeV}$:

$$\left(\frac{Z^2}{A}\right)_{\text{crit}} = \frac{2 \times 17.8}{0.71} \approx 50.1$$

*   If $\frac{Z^2}{A} \ge 47-50$, the nucleus undergoes **instantaneous spontaneous fission** without any potential barrier.
*   For $\frac{Z^2}{A} \sim 35-36$ (e.g., ${}^{235}\text{U}$, ${}^{238}\text{U}$), a finite activation energy barrier ($E_B \approx 5-6 \text{ MeV}$) exists.

---

## 2.5 Solved Benchmark Examples

### Example 2.1: Finding the Most Stable Isobar
**Problem**: Calculate the most stable isobar $Z_0$ for $A = 125$. Use $a_c = 0.7 \text{ MeV}$ and $a_a = 23 \text{ MeV}$.

**Solution**:
Using the derived formula:

$$Z_0 = \frac{A}{2 + \frac{a_c}{2 a_a} A^{2/3}}$$

Calculate $A^{2/3} = (125)^{2/3} = (5^3)^{2/3} = 5^2 = 25$.

$$Z_0 = \frac{125}{2 + \left( \frac{0.7}{2 \times 23} \right) \times 25} = \frac{125}{2 + \left( \frac{0.7}{46} \right) \times 25} = \frac{125}{2 + \frac{17.5}{46}} = \frac{125}{2 + 0.3804} = \frac{125}{2.3804} \approx 52.51$$

Since $Z$ must be an integer, $Z_0 = 52$ (Tellurium, ${}^{125}_{52}\text{Te}$ is stable).

---

# SECTION 3: NATURE OF NUCLEAR FORCES & THE DEUTERON PROBLEM

## 3.1 Phenomenological Properties of Nucleon-Nucleon ($N-N$) Force

1.  **Short Range**: Acts effectively over $r \le 1.4-2.0 \text{ fm}$. Vanishes completely for $r > 3 \text{ fm}$.
2.  **Strong Intensity**: Approximately 100 times stronger than electromagnetism ($g_s^2 / \hbar c \approx 1 - 14$).
3.  **Charge Independence**: The nuclear force between $p-p$, $n-n$, and $p-n$ in identical spatial and spin quantum states is identical:
    $$V_{pp} = V_{nn} = V_{pn} \quad (\text{for same } T, T_z \text{ state})$$
4.  **Charge Symmetry**: The interaction between two protons is identical to that between two neutrons ($V_{pp} = V_{nn}$).
5.  **Saturation Property**: Binding energy per nucleon ($B/A$) is roughly constant ($\approx 8 \text{ MeV}$), indicating nucleons only interact with immediate neighbors.
6.  **Spin Dependency**: The force depends strongly on the orientation of nucleon spins. The bound state of the deuteron exists only in the spin triplet state ($S=1$), whereas the spin singlet state ($S=0$) is unbound.
7.  **Non-Central / Tensor Component**: The force depends on the spatial orientation of spins relative to the inter-particle vector $\vec{r}$. It is non-central:
    $$V_{TN} = V_T(r) \hat{S}_{12}$$
    where the tensor operator $\hat{S}_{12}$ is:
    $$\hat{S}_{12} = \frac{3 (\vec{\sigma}_1 \cdot \vec{r})(\vec{\sigma}_2 \cdot \vec{r})}{r^2} - (\vec{\sigma}_1 \cdot \vec{\sigma}_2)$$
8.  **Repulsive Core**: At extremely short distances ($r < 0.5 \text{ fm}$), the potential becomes strongly repulsive ($V(r) \to +\infty$), preventing nuclear collapse.

---

## 3.2 Yukawa's Meson Theory of Nuclear Force

Hideki Yukawa (1935) proposed that nuclear forces are mediated by the exchange of massive virtual bosons (pions $\pi^+, \pi^-, \pi^0$).

```
       p \               / p
          \  Exchange   /
           \   Pion    /
            \=========/ (π+)
             \       /
              \     /
               n   n
```

### Derivation of Yukawa Potential
The static Klein-Gordon wave equation for a scalar field $\phi(r)$ with mass $m_\pi$ generated by a point source at the origin is:

$$\left( \nabla^2 - \frac{m_\pi^2 c^2}{\hbar^2} \right) \phi(r) = 0 \quad (\text{for } r > 0)$$

For spherical symmetry:

$$\frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{d\phi}{dr} \right) - \mu^2 \phi(r) = 0 \quad \text{where } \mu = \frac{m_\pi c}{\hbar}$$

Substituting $U(r) = r \phi(r)$:

$$\frac{d^2 U}{dr^2} - \mu^2 U = 0 \implies U(r) = A e^{-\mu r} + B e^{+\mu r}$$

Requiring boundary condition $\phi(r) \to 0$ as $r \to \infty$ sets $B = 0$:

$$\phi(r) = A \frac{e^{-\mu r}}{r}$$

Matching to electrodynamics as $m_\pi \to 0$ gives $A = -g^2$, yielding the **Yukawa Potential**:

$$V(r) = -g^2 \frac{e^{-\mu r}}{r} = -g^2 \frac{e^{-r/R}}{r}$$

### Mass-Range Relationship
The characteristic range of the force $R$ corresponds to the Compton wavelength of the exchange particle:

$$R = \frac{1}{\mu} = \frac{\hbar}{m_\pi c}$$

Using $R \approx 1.4 \text{ fm}$:

$$m_\pi c^2 = \frac{\hbar c}{R} = \frac{197.3 \text{ MeV}\cdot\text{fm}}{1.4 \text{ fm}} \approx 140 \text{ MeV}$$

This predicted the existence of the $\pi$-meson ($\text{mass} \approx 139.6 \text{ MeV}/c^2$) before its experimental discovery.

---

## 3.3 Theoretical Solution of the Deuteron Ground State ($^2\text{H}$)

The deuteron is the only bound system of two nucleons (one proton and one neutron).

### Measured Empirical Properties
*   Binding Energy ($B$): $2.2245 \text{ MeV}$
*   Total Angular Momentum / Spin ($J^\pi$): $1^+$
*   Isospin ($T$): $0$
*   Magnetic Dipole Moment ($\mu_d$): $0.8574 \mu_N$
*   Electric Quadrupole Moment ($Q_d$): $+0.00288 \text{ b} = +2.88 \times 10^{-31} \text{ m}^2 \neq 0$

### Square Well Potential Solution
Model the central $p-n$ interaction as a 3D rectangular square well:

$$V(r) = \begin{cases} -V_0 & \text{for } r < b \quad \text{(Well depth } V_0 > 0 \text{)} \\ 0 & \text{for } r > b \quad \text{(Range } b \approx 2.1 \text{ fm)} \end{cases}$$

```
  V(r) ^
       |                   r
  0----+-------------------> 
       |       |
 -V₀ --+-------+  (r = b)
       |<--b-->|
       |  Region I  | Region II
```

The radial Schrödinger equation for spatial S-state ($L=0$) with $u(r) = r R(r)$ is:

$$\frac{d^2 u}{dr^2} + \frac{2 m_r}{\hbar^2} \left[ V(r) - E \right] u(r) = 0$$

where reduced mass $m_r = \frac{m_p m_n}{m_p + m_n} \approx \frac{m}{2}$ ($m \approx 938 \text{ MeV/c}^2$).

For a bound state $E = -B$ where $B = 2.2245 \text{ MeV}$:

#### Region I ($0 \le r < b$):
$$\frac{d^2 u_1}{dr^2} + k_1^2 u_1 = 0 \quad \text{where } k_1 = \sqrt{\frac{m(V_0 - B)}{\hbar^2}}$$

Boundary condition $u_1(0) = 0 \implies u_1(r) = A \sin(k_1 r)$.

#### Region II ($r > b$):
$$\frac{d^2 u_2}{dr^2} - k_2^2 u_2 = 0 \quad \text{where } k_2 = \sqrt{\frac{m B}{\hbar^2}}$$

Boundary condition $u_2(r) \to 0$ as $r \to \infty \implies u_2(r) = C e^{-k_2 r}$.

#### Matching Boundary Conditions at $r = b$:
Continuity of wavefunction and its derivative requires matching logarithmic derivatives:

$$\left. \frac{1}{u_1} \frac{du_1}{dr} \right|_{r=b} = \left. \frac{1}{u_2} \frac{du_2}{dr} \right|_{r=b}$$

$$k_1 \cot(k_1 b) = -k_2$$

$$\cot(k_1 b) = -\frac{k_2}{k_1} = -\sqrt{\frac{B}{V_0 - B}}$$

### Depth-Range Relation
Since $B \approx 2.22 \text{ MeV}$ is very small compared to $V_0 \approx 35-40 \text{ MeV}$, $k_2 \ll k_1$:

$$\cot(k_1 b) \approx 0^- \implies k_1 b \approx \frac{\pi}{2}$$

Substituting $k_1 = \sqrt{\frac{m(V_0 - B)}{\hbar^2}} \approx \sqrt{\frac{m V_0}{\hbar^2}}$:

$$\sqrt{\frac{m V_0}{\hbar^2}} b \approx \frac{\pi}{2} \implies V_0 b^2 \approx \frac{\pi^2 \hbar^2}{4 m}$$

Inserting numerical values ($m \approx 938 \text{ MeV}/c^2$ and $b = 2.1 \text{ fm}$):

$$V_0 b^2 \approx \frac{\pi^2 (197.3 \text{ MeV}\cdot\text{fm})^2}{4 \times 938 / 2 \text{ MeV}} \approx 102 \text{ MeV}\cdot\text{fm}^2$$

$$V_0 \approx \frac{102}{(2.1)^2} \approx 35 - 40 \text{ MeV}$$

### Why No Excited Bound States Exist
1.  **Spin Singlet State ($^1S_0$)**: Unbound state by $\approx 60 \text{ keV}$ (virtual state). Potential depth in singlet state is weaker ($\approx 25 \text{ MeV}$), insufficient to support a bound state ($V_0 b^2 < \frac{\pi^2 \hbar^2}{4m}$).
2.  **Orbital Excited States ($L \ge 1$)**: For $L=1$, the centrifugal potential barrier $+\frac{\hbar^2 L(L+1)}{m r^2}$ raises energy above zero.

---

## 3.4 Tensor Force and $D$-State Admixture

If the $p-n$ interaction were purely central, the ground state would be a pure ${}^3S_1$ state ($L=0, S=1, J=1$).
However, a pure ${}^3S_1$ state implies:
1.  $Q_d \equiv 0$ (spherical symmetry).
2.  $\mu_d = \mu_p + \mu_n = 2.79284 - 1.91304 = 0.8798 \mu_N$.

### Experimental vs Pure S-state Values:
*   $\mu_d^{\text{exp}} = 0.8574 \mu_N \neq 0.8798 \mu_N$.
*   $Q_d^{\text{exp}} = +0.00288 \text{ b} \neq 0$.

### Resolution ($S-D$ Mixing)
The tensor interaction couples states with identical $J^\pi = 1^+$ and same spin $S=1$, but differing $L$ by $\Delta L = 0, \pm 2$.

$$\Psi_{\text{deuteron}} = a_S \psi({}^3S_1) + a_D \psi({}^3D_1)$$

where $|a_S|^2 + |a_D|^2 = 1$.
Fitting to measured magnetic and quadrupole moments gives:

$$|a_S|^2 \approx 96\% \quad (L=0) \quad \text{and} \quad |a_D|^2 \approx 4\% \quad (L=2)$$

---

# SECTION 4: SINGLE-PARTICLE SHELL MODEL & COLLECTIVE MODEL

## 4.1 Evidence for Nuclear Shell Structure (Magic Numbers)

Nuclei exhibit exceptional stability at specific numbers of protons or neutrons, called **Magic Numbers**:

$$2, 8, 20, 28, 50, 82, 126$$

### Key Experimental Evidence:
1.  **Abundance**: Elements with magic $Z$ or $N$ are significantly more abundant in the universe (e.g., ${}^4_2\text{He}$, ${}^{16}_8\text{O}$, ${}^{40}_{20}\text{Ca}$, ${}^{208}_{82}\text{Pb}$).
2.  **Neutron Capture Cross-Section**: Nuclei with magic $N$ have very small capture cross-sections for thermal neutrons (closed shell shells do not readily absorb additional nucleons).
3.  **Separation Energies**: High nucleon separation energy ($S_n$ or $S_p$) is required to remove a particle from a magic nucleus, dropping sharply for $N+1$ or $Z+1$.
4.  **Excitation Energy**: First excited state $2^+$ of even-even magic nuclei lies unusually high above ground state.

---

## 4.2 Hamiltonian and Spin-Orbit Coupling

Simple potential wells (3D isotropic harmonic oscillator or finite square well) reproduce only the first three magic numbers ($2, 8, 20$).

```
Harmonic Oscillator Levels          With Spin-Orbit Coupling L.S
                                     (Reproduces All Magic Numbers)

  N=3  (1f, 2p)  -----------------  1f7/2 ------------ (8)  ===> 28
                                    2p3/2, 1f5/2, 2p1/2

  N=2  (1d, 2s)  -----------------  1d5/2 ------------ (6)
                                    2s1/2 ------------ (2)
                                    1d3/2 ------------ (4)  ===> 20

  N=1  (1p)      -----------------  1p3/2 ------------ (4)
                                    1p1/2 ------------ (2)  ===> 8

  N=0  (1s)      -----------------  1s1/2 ------------ (2)  ===> 2
```

### The Shell Model Hamiltonian
Haxel, Jensen, Suess, and Mayer (1949) introduced a strong **Spin-Orbit Interaction**:

$$H = H_0 + V_{\text{so}}(r) \, \vec{L} \cdot \vec{S}$$

Where $H_0 = \frac{p^2}{2m} + \frac{1}{2} m \omega^2 r^2 + D \vec{L}^2$.

### Expectation Value of $\vec{L} \cdot \vec{S}$
Using $\vec{J} = \vec{L} + \vec{S} \implies \vec{J}^2 = \vec{L}^2 + \vec{S}^2 + 2 \vec{L} \cdot \vec{S}$:

$$\vec{L} \cdot \vec{S} = \frac{1}{2} \left[ \vec{J}^2 - \vec{L}^2 - \vec{S}^2 \right]$$

For a nucleon ($s = 1/2$), the total angular momentum can be $j = l + 1/2$ or $j = l - 1/2$:

$$\langle \vec{L} \cdot \vec{S} \rangle = \frac{\hbar^2}{2} [j(j+1) - l(l+1) - s(s+1)]$$

1.  **For $j = l + 1/2$**:
    $$\langle \vec{L} \cdot \vec{S} \rangle = \frac{\hbar^2}{2} \left[ \left(l + \frac{1}{2}\right)\left(l + \frac{3}{2}\right) - l(l+1) - \frac{3}{4} \right] = \frac{\hbar^2}{2} l$$
2.  **For $j = l - 1/2$**:
    $$\langle \vec{L} \cdot \vec{S} \rangle = \frac{\hbar^2}{2} \left[ \left(l - \frac{1}{2}\right)\left(l + \frac{1}{2}\right) - l(l+1) - \frac{3}{4} \right] = -\frac{\hbar^2}{2} (l + 1)$$

### Level Energy Splitting
Because $V_{\text{so}}(r)$ is **negative** (attractive for parallel alignment):

$$\Delta E_{\text{so}} = E(j = l - 1/2) - E(j = l + 1/2) = \frac{\hbar^2}{2} (2l + 1) |V_{\text{so}}|$$

*   The $j = l + 1/2$ subshell is lowered in energy (more tightly bound).
*   The splitting increases linearly with $l$, creating the large gaps required at $28, 50, 82, 126$.

---

## 4.3 Ground State Spin-Parity ($I^\pi$) Predictions

### Rules for Determining Ground State $I^\pi$:
1.  **Even-Even Nuclei**: $I^\pi = 0^+$.
2.  **Odd-$A$ Nuclei**: $I^\pi$ is dictated by the single unpaired nucleon in the highest occupied single-particle subshell:
    $$I = j, \quad \pi = (-1)^l$$
3.  **Odd-Odd Nuclei**: Determined by coupling proton $(j_p, l_p)$ and neutron $(j_n, l_n)$ using **Nordheim's Rules**:
    *   Define Nordheim number $N = (j_p - l_p) + (j_n - l_n)$.
    *   **Strong Rule**: If $N = 0$ (i.e., spin-orbit alignments are opposite), $I = |j_p - j_n|$.
    *   **Weak Rule**: If $N = \pm 1$ (i.e., spin-orbit alignments are parallel), $I$ lies in the range $|j_p - j_n| \le I \le j_p + j_n$ (usually $I = j_p + j_n$).

---

## 4.4 Derivation of Schmidt Lines for Magnetic Moments

The magnetic moment of an odd-$A$ nucleus in single-particle model is given by the single unpaired nucleon.

$$\vec{\mu} = \left[ g_l \vec{L} + g_s \vec{S} \right] \mu_N$$

Projecting along $\vec{J}$:

$$\mu = \frac{\langle \vec{\mu} \cdot \vec{J} \rangle}{J + 1} = \frac{j}{j+1} \left[ g_l \frac{\vec{L} \cdot \vec{J}}{j(j+1)} + g_s \frac{\vec{S} \cdot \vec{J}}{j(j+1)} \right]$$

Using identities $\vec{L} \cdot \vec{J} = \frac{j(j+1) + l(l+1) - s(s+1)}{2}$ and $\vec{S} \cdot \vec{J} = \frac{j(j+1) + s(s+1) - l(l+1)}{2}$:

### 1. Case $j = l + 1/2$:
$$\mu = \left[ g_l \left( j - \frac{1}{2} \right) + \frac{1}{2} g_s \right] \mu_N$$

### 2. Case $j = l - 1/2$:
$$\mu = \left[ g_l \frac{j(j+2)}{j+1} - \frac{1}{2} \frac{j}{j+1} g_s \right] \mu_N$$

### Summary Table of Schmidt Formulas:
| Nucleon Type | State Alignment | Schmidt Formula $\mu / \mu_N$ |
| :--- | :--- | :--- |
| **Odd Proton** | $j = l + 1/2$ | $j + 2.29$ |
| **Odd Proton** | $j = l - 1/2$ | $j - 2.29 \frac{j}{j+1}$ |
| **Odd Neutron** | $j = l + 1/2$ | $-1.91$ |
| **Odd Neutron** | $j = l - 1/2$ | $+1.91 \frac{j}{j+1}$ |

```
   Proton Schmidt Lines                       Neutron Schmidt Lines
  μ (μN) ^                                   μ (μN) ^
       |     / (j = l + 1/2)                      |     +1.91 (j = l - 1/2)
       |    /                                     |    /-----------
       |   /                                      |   /
     0 +------------------> j                   0 +------------------> j
       |  \                                       |  \
       |   \ (j = l - 1/2)                        |   \-----------
       v                                          v     -1.91 (j = l + 1/2)
```

---

## 4.5 Collective Model & Rotational/Vibrational Spectra

For heavily deformed nuclei ($150 < A < 190$ and $A > 220$), single-particle shell model breaks down and nucleons exhibit collective motions.

### 1. Rotational Spectra (Deformed Even-Even Nuclei)
Rotational energy levels of a rigid axially symmetric rotor are:

$$E(I) = \frac{\hbar^2}{2\mathcal{I}} I(I+1), \quad I^\pi = 0^+, 2^+, 4^+, 6^+, 8^+, \dots$$

Where $\mathcal{I}$ is the effective moment of inertia.

#### Key Characteristic Ratios:
$$\frac{E(4^+)}{E(2^+)} = \frac{4(5)}{2(3)} = \frac{20}{6} = 3.33$$

$$\frac{E(6^+)}{E(2^+)} = \frac{6(7)}{2(3)} = \frac{42}{6} = 7.00$$

$$\frac{E(8^+)}{E(2^+)} = \frac{8(9)}{2(3)} = \frac{72}{6} = 12.00$$

### 2. Vibrational Spectra (Harmonic Quadrupole Surface Oscillations)
Equally spaced energy levels generated by quadrupole phonons ($\lambda = 2$, $J^\pi = 2^+$):

$$E(N) = N \hbar\omega, \quad N = 0, 1, 2, \dots$$

*   **$N = 0$ Ground State**: $0^+$
*   **$N = 1$ First Excited State**: $2^+$ at energy $\hbar\omega$
*   **$N = 2$ Second Excited Triplet**: Degenerate multiplet of states $0^+, 2^+, 4^+$ at energy $2\hbar\omega$

#### Key Characteristic Ratio:
$$\frac{E(N=2)}{E(N=1)} = \frac{E(0^+, 2^+, 4^+)}{E(2^+)} = 2.00$$

---

## 4.6 Solved Benchmark Examples

### Example 4.1: Spin-Parity of $^{17}_8\text{O}$ and $^{39}_{19}\text{K}$
**Problem**: Predict ground state $I^\pi$ for ${}^{17}_8\text{O}$ and ${}^{39}_{19}\text{K}$.

**Solution**:
1.  **For ${}^{17}_8\text{O}$**: $Z = 8$ (even, closed shell), $N = 9$ (odd).
    *   Unpaired neutron configuration: Fill states $1s_{1/2}(2), 1p_{3/2}(4), 1p_{1/2}(2)$ [total 8].
    *   9th neutron goes to $1d_{5/2}$ subshell ($l=2, j=5/2$).
    *   $I = 5/2$, $\pi = (-1)^2 = +1 \implies I^\pi = \mathbf{\frac{5}{2}^+}$.
2.  **For ${}^{39}_{19}\text{K}$**: $Z = 19$ (odd), $N = 20$ (even, closed shell).
    *   Unpaired proton configuration: Fill states up to $1d_{5/2}(6), 2s_{1/2}(2)$ [total 16].
    *   Remaining 3 protons fill $1d_{3/2}$ subshell (capacity 4), leaving 1 hole in $1d_{3/2}$ ($l=2, j=3/2$).
    *   $I = 3/2$, $\pi = (-1)^2 = +1 \implies I^\pi = \mathbf{\frac{3}{2}^+}$.

### Example 4.2: Rotational Transition Energy Calculation
**Problem**: The $2^+$ state of a rotational band in ${}^{160}\text{Gd}$ has energy $84 \text{ keV}$. Calculate the energy of the $4^+$ state and moment of inertia $\mathcal{I}$.

**Solution**:
$$E(I) = \frac{\hbar^2}{2\mathcal{I}} I(I+1)$$

For $I = 2$:

$$E(2^+) = \frac{\hbar^2}{2\mathcal{I}} (2 \times 3) = \frac{3\hbar^2}{\mathcal{I}} = 84 \text{ keV} \implies \frac{\hbar^2}{2\mathcal{I}} = 14 \text{ keV}$$

For $I = 4$:

$$E(4^+) = \frac{\hbar^2}{2\mathcal{I}} (4 \times 5) = 14 \text{ keV} \times 20 = \mathbf{280 \text{ keV}}$$

---

# SECTION 5: NUCLEAR DECAYS & SELECTION RULES

## 5.1 $\alpha$-Decay Kinematics and Quantum Tunneling Theory

The $\alpha$-decay process is expressed as:

$${}_Z^A X \to {}_{Z-2}^{A-4} Y + {}_2^4 \alpha$$

### 1. Kinematics and $Q$-Value
The reaction energy release $Q_\alpha$ is:

$$Q_\alpha = \left[ M(A, Z) - M(A-4, Z-2) - m_\alpha \right] c^2$$

Conservation of linear momentum in parent rest frame ($p_\alpha = p_Y$):

$$Q_\alpha = T_\alpha + T_Y = \frac{p_\alpha^2}{2m_\alpha} + \frac{p_Y^2}{2m_Y} = T_\alpha \left( 1 + \frac{m_\alpha}{m_Y} \right) \approx T_\alpha \left( 1 + \frac{4}{A-4} \right) = T_\alpha \left( \frac{A}{A-4} \right)$$

$$T_\alpha = Q_\alpha \left( \frac{A-4}{A} \right)$$

### 2. Gamow Theory of $\alpha$-Decay (Quantum Tunneling Derivation)

```
  V(r) ^
       |     Coulomb Barrier V(r) = 2Ze² / 4πε₀r
  V_c  |---------\
       |   /\     \
       |  /  \     \
    E  |-+----+-----\-------- Energy level of α-particle
       | | II | III  \
  -V₀ -+-+----+-------+----> r
       0 R    R_c
```

The decay constant $\lambda$ is:

$$\lambda = \nu \cdot P$$

where $\nu = \frac{v_{\text{inside}}}{2R} \approx 10^{21} \text{ s}^{-1}$ is the attempt frequency.
Using WKB Approximation, transmission coefficient $P$ through Coulomb barrier from $r = R$ to classical turning point $r = R_c = \frac{2 Z e^2}{4\pi\varepsilon_0 E}$:

$$P = \exp\left( -2 \int_{R}^{R_c} K(r) \, dr \right) = \exp\left( -\frac{2}{\hbar} \int_{R}^{R_c} \sqrt{2 m_\alpha \left[ \frac{2 Z e^2}{4\pi\varepsilon_0 r} - E \right]} \, dr \right)$$

Letting $\cos^2\theta = \frac{r}{R_c}$:

$$P = \exp\left[ -4 Z e^2 \sqrt{\frac{2 m_\alpha}{4\pi\varepsilon_0 \hbar^2 E}} \left( \arccos\sqrt{\frac{R}{R_c}} - \sqrt{\frac{R}{R_c}\left(1 - \frac{R}{R_c}\right)} \right) \right]$$

For $R \ll R_c$, $\arccos\sqrt{x} \approx \frac{\pi}{2} - \sqrt{x}$:

$$\ln P \approx -C_1 \frac{Z}{\sqrt{E}} + C_2 \sqrt{Z R}$$

Taking the logarithm yields the **Geiger-Nuttall Law**:

$$\log_{10} \lambda = A + B \frac{Z}{\sqrt{E_\alpha}}$$

### 3. Selection Rules for $\alpha$-Decay
$$\vec{I}_i = \vec{I}_f + \vec{L}_\alpha \implies |I_i - I_f| \le L_\alpha \le I_i + I_f$$

$$\pi_i \pi_f = (-1)^{L_\alpha}$$

---

## 5.2 $\beta$-Decay & Fermi Theory

### 1. Decay Modes and $Q$-Values
*   **$\beta^-$ Decay**: $n \to p + e^- + \bar{\nu}_e$
    $$Q_{\beta^-} = \left[ M(Z, A) - M(Z+1, A) \right] c^2$$
*   **$\beta^+$ Decay**: $p \to n + e^+ + \nu_e$
    $$Q_{\beta^+} = \left[ M(Z, A) - M(Z-1, A) - 2 m_e \right] c^2$$
*   **Electron Capture (EC)**: $p + e^- \to n + \nu_e$
    $$Q_{\text{EC}} = \left[ M(Z, A) - M(Z-1, A) \right] c^2 - E_B$$

### 2. Fermi Theory of $\beta$-Decay & Kurie Plot
Transition rate by Fermi's Golden Rule:

$$d\lambda = \frac{2\pi}{\hbar} |H_{fi}|^2 \frac{dn}{dE_0}$$

The electron momentum distribution spectrum is:

$$N(p_e) \, dp_e = \frac{g^2 |M_{fi}|^2}{2\pi^3 \hbar^7 c^3} F(Z, E_e) p_e^2 (E_0 - E_e)^2 \, dp_e$$

where $F(Z, E_e)$ is the Fermi Function accounting for Coulomb interaction.

```
 N(p) ^                                 Kurie Plot ^
      |       Continuous                           |          Linear Extrapolation
      |        Spectrum                            |          to E₀
      |         /\                                 |         \
      |        /  \                                |          \
      |       /    \                               |           \
      +------+------+-----> p_e                    +------------+-----> E_e
             0      p_max                                 0     E₀
```

#### Kurie Plot Expression:
$$\sqrt{\frac{N(p_e)}{p_e^2 F(Z, E_e)}} \propto (E_0 - E_e)$$

Extrapolating the linear Kurie plot to zero yields the endpoint energy $E_0$ and neutrino mass bounds.

---

### 3. Classification of $\beta$-Decay Selection Rules

| Decay Classification | Orbital Angular Momentum ($L$) | Spin State ($S$) | $\Delta I = |I_i - I_f|$ | Parity Change ($\Delta \pi = \pi_i \pi_f$) | Comparative Half-Life ($\log ft$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Allowed Fermi** | $L=0$ | $S=0$ (Singlet) | $\Delta I = 0$ | **No** ($+ \to +$ or $- \to -$) | $2 - 4$ (Superallowed: $3.1 - 3.7$) |
| **Allowed Gamow-Teller** | $L=0$ | $S=1$ (Triplet) | $\Delta I = 0, \pm 1$ (no $0 \to 0$) | **No** | $4 - 6$ |
| **1st Forbidden Fermi** | $L=1$ | $S=0$ | $\Delta I = 0, \pm 1$ | **Yes** ($+ \leftrightarrow -$) | $6 - 8$ |
| **1st Forbidden GT** | $L=1$ | $S=1$ | $\Delta I = 0, \pm 1, \pm 2$ | **Yes** | $6 - 9$ |
| **2nd Forbidden** | $L=2$ | $S=0, 1$ | $\Delta I = \pm 2, \pm 3$ | **No** | $10 - 13$ |

> **Note**: For $0^+ \to 0^+$ transitions, Gamow-Teller component is strictly forbidden; it is a **pure Fermi transition**.

---

## 5.3 $\gamma$-Decay & Selection Rules

A nucleus transitions from an excited state $I_i^{\pi_i}$ to a lower state $I_f^{\pi_f}$ by emitting electromagnetic multipole radiation of angular momentum $L$.

### Selection Rules for Multipole Transition ($E L$ and $M L$)

#### 1. Conservation of Angular Momentum:
$$\vec{I}_i = \vec{I}_f + \vec{L} \implies |I_i - I_f| \le L \le I_i + I_f$$

*   Single photon emission with $L = 0$ is strictly **forbidden**. Thus, $0^+ \to 0^+$ or $0^- \to 0^-$ $\gamma$-decay is forbidden. (These proceed via Internal Conversion).

#### 2. Parity Rules:
*   **Electric Multipole ($EL$)**:
    $$\pi(EL) = (-1)^L$$
*   **Magnetic Multipole ($ML$)**:
    $$\pi(ML) = (-1)^{L+1}$$

### Summary Table of Parity Rules for Multipoles:
| Multipole Order ($L$) | Radiation Type | Electric ($EL$) Parity | Magnetic ($ML$) Parity |
| :--- | :--- | :--- | :--- |
| $L = 1$ | Dipole ($E1, M1$) | **Yes** ($\Delta\pi = -1$) | **No** ($\Delta\pi = +1$) |
| $L = 2$ | Quadrupole ($E2, M2$) | **No** ($\Delta\pi = +1$) | **Yes** ($\Delta\pi = -1$) |
| $L = 3$ | Octupole ($E3, M3$) | **Yes** ($\Delta\pi = -1$) | **No** ($\Delta\pi = +1$) |
| $L = 4$ | Hexadecapole ($E4, M4$) | **No** ($\Delta\pi = +1$) | **Yes** ($\Delta\pi = -1$) |

### Dominance Rules:
1. Lowest allowed $L$ dominates.
2. For same $L$, $E L$ transitions are much faster than $M L$ transitions:
   $$\frac{T(E L)}{T(M L)} \sim 10^2 - 10^3$$

---

## 5.4 Solved Benchmark Examples

### Example 5.1: $\gamma$-Transition Multipole Identification
**Problem**: Identify all allowed multipoles for a gamma transition from state $I_i^{\pi_i} = \frac{3}{2}^+$ to ground state $I_f^{\pi_f} = \frac{1}{2}^-$. Which multipole dominates?

**Solution**:
1.  **Angular Momentum Constraint**:
    $$L \in [|3/2 - 1/2|, 3/2 + 1/2] = [1, 2]$$
    Allowed $L$ values: $L = 1, 2$.
2.  **Parity Change**:
    $$\Delta\pi = \pi_i \times \pi_f = (+) \times (-) = -1 \quad (\text{Parity Changes})$$
3.  **Evaluating Multipoles**:
    *   For $L = 1$:
        *   $E1$: Parity change $= (-1)^1 = -1$ $\to$ **Allowed**.
        *   $M1$: Parity change $= (-1)^{1+1} = +1$ $\to$ **Forbidden**.
    *   For $L = 2$:
        *   $E2$: Parity change $= (-1)^2 = +1$ $\to$ **Forbidden**.
        *   $M2$: Parity change $= (-1)^{2+1} = -1$ $\to$ **Allowed**.

Allowed multipoles are **$E1$ and $M2$**.
The lowest order multipole **$E1$** dominates.

---

# SECTION 6: NUCLEAR REACTIONS & MECHANISMS

## 6.1 Reaction Kinematics and $Q$-Value Equation

Consider nuclear reaction:

$$X + a \to Y + b \quad \text{or shorthand } X(a, b)Y$$

Where $X$ is target (at rest), $a$ is projectile, $Y$ is recoil nucleus, $b$ is emitted particle.

```
          Target X (at rest)
               O
               ^
              / 
  Projectile a \-------->  Scattering Angle θ
                          \
                           \---> Emitted particle b
```

### $Q$-Value Definition:
$$Q = \left[ (m_X + m_a) - (m_Y + m_b) \right] c^2 = T_Y + T_b - T_a$$

*   **Exothermic Reaction**: $Q > 0$ (energy released; spontaneous).
*   **Endothermic Reaction**: $Q < 0$ (energy absorbed; requires threshold kinetic energy).

### Derivation of Threshold Energy ($T_{\text{th}}$)
For an endothermic reaction ($Q < 0$), threshold kinetic energy $T_{\text{th}}$ of projectile $a$ in LAB frame is derived using invariant mass squared in 4-momentum:

$$P_{\text{total}}^\mu P_{\mu, \text{total}} = \text{Invariant}$$

Before reaction (LAB frame):

$$P_{\text{total}}^\mu = \left( \frac{E_a + m_X c^2}{c}, \vec{p}_a \right)$$

$$P^\mu P_\mu = \frac{(E_a + m_X c^2)^2}{c^2} - p_a^2 c^2 = \frac{E_a^2 - p_a^2 c^2 + 2 E_a m_X c^2 + m_X^2 c^4}{c^2} = m_a^2 c^2 + m_X^2 c^2 + 2 E_a m_X$$

At threshold, created particles are produced at rest in CM frame:

$$P_{\text{CM}}^\mu P_{\mu, \text{CM}} = \left( \sum m_{\text{final}} \right)^2 c^2 = (m_Y + m_b)^2 c^2$$

Equating LAB and CM invariants:

$$m_a^2 c^2 + m_X^2 c^2 + 2 E_a m_X = (m_Y + m_b)^2 c^2$$

Substituting $E_a = T_a + m_a c^2$:

$$m_a^2 c^2 + m_X^2 c^2 + 2 (T_{\text{th}} + m_a c^2) m_X = (m_Y + m_b)^2 c^2$$

$$(m_a + m_X)^2 c^2 + 2 T_{\text{th}} m_X = (m_Y + m_b)^2 c^2$$

$$2 T_{\text{th}} m_X = \left[ (m_Y + m_b)^2 - (m_a + m_X)^2 \right] c^2 = \left[ (m_Y + m_b + m_a + m_X)(m_Y + m_b - m_a - m_X) \right] c^2$$

Since $Q = (m_a + m_X - m_Y - m_b)c^2$:

$$2 T_{\text{th}} m_X \approx (2 m_a + 2 m_X) (-Q) = 2 (m_a + m_X) |Q|$$

$$T_{\text{th}} = |Q| \left( 1 + \frac{m_a}{m_X} \right)$$

---

## 6.2 Reaction Mechanisms

### 1. Direct Reactions
*   **Time Scale**: Fast ($\tau \sim 10^{-22} \text{ s}$, time taken to traverse nucleus).
*   **Mechanism**: Interaction involves only surface nucleons.
*   **Types**: Stripping ($d, p$), Pick-up ($p, d$), Knock-out.
*   **Angular Distribution**: Strongly forward-peaked ($\theta \approx 0^\circ$).

### 2. Compound Nucleus Hypothesis (Niels Bohr, 1936)
*   **Time Scale**: Slow ($\tau \sim 10^{-16} - 10^{-18} \text{ s}$).
*   **Mechanism**: Reaction occurs in two independent steps:

$$A + a \to C^* \to B + b$$

The compound nucleus $C^*$ "forgets" its precise mode of formation; its decay depends only on excitation energy and conserved total quantum numbers ($J, \pi, T$).

```
  Formation Phase               Equilibration                Decay Phase
  a + A  ------------->    [ Compound Nucleus C* ] ------>    B + b
                           (Energy distributed)               (Isotropic)
```

---

## 6.3 Breit-Wigner Single-Level Resonance Formula

Near an isolated energy level $E_r$ of a compound nucleus, the cross section for reaction $a + X \to C^* \to b + Y$ is:

$$\sigma_{ab}(E) = \frac{\pi}{k^2} \frac{(2J+1)}{(2I_a+1)(2I_X+1)} \frac{\Gamma_a \Gamma_b}{(E - E_r)^2 + \frac{\Gamma^2}{4}}$$

Where:
*   $k = \frac{\sqrt{2m E}}{\hbar}$: Incident wave number.
*   $E$: Center-of-mass energy.
*   $E_r$: Resonance energy level.
*   $\Gamma_a, \Gamma_b$: Partial decay widths for entry channel $a$ and exit channel $b$.
*   $\Gamma = \sum_i \Gamma_i$: Total decay width, related to lifetime $\tau$ by $\Gamma = \frac{\hbar}{\tau}$.

```
 Cross-Section σ(E) ^
                    |          Resonance Peak
                    |               /\
                    |              /  \
                    |             /    \   <--- Width Γ
                    |            /      \
                    +-----------+---+----+--------> Incident Energy E
                                0  E_r
```

---

## 6.4 Solved Benchmark Examples

### Example 6.1: Threshold Energy Calculation
**Problem**: Calculate threshold energy for endothermic reaction ${}^{14}_7\text{N}(\alpha, p){}^{17}_8\text{O}$.
Given masses: $m({}^{14}\text{N}) = 14.003074 \text{ u}$, $m(\alpha) = 4.002603 \text{ u}$, $m(p) = 1.007825 \text{ u}$, $m({}^{17}\text{O}) = 16.999131 \text{ u}$. ($1 \text{ u} = 931.5 \text{ MeV/c}^2$).

**Solution**:
1.  **Calculate $Q$-Value**:
    $$Q = \left[ (14.003074 + 4.002603) - (16.999131 + 1.007825) \right] \times 931.5 \text{ MeV}$$
    $$Q = [18.005677 - 18.006956] \times 931.5 = -0.001279 \times 931.5 \text{ MeV} = -1.1913 \text{ MeV}$$
2.  **Calculate Threshold Energy**:
    $$T_{\text{th}} = |Q| \left( 1 + \frac{m_\alpha}{m_N} \right) = 1.1913 \left( 1 + \frac{4.002603}{14.003074} \right) = 1.1913 \times (1 + 0.2858) = 1.1913 \times 1.2858 \approx \mathbf{1.532 \text{ MeV}}$$

---

# SECTION 7: CLASSIFICATION OF ELEMENTARY PARTICLES & QUANTUM NUMBERS

## 7.1 The Four Fundamental Interactions

| Interaction | Relative Strength | Mediator Gauge Boson | Rest Mass ($GeV/c^2$) | Range ($m$) | Typical Lifetime ($\tau$) | Conserved Quantities |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Strong** | $1$ | Gluons ($g$, 8 types) | $0$ | $\sim 10^{-15}$ (1 fm) | $10^{-23} \text{ s}$ | All ($I, I_3, S, P, C, T$) |
| **Electromagnetic** | $10^{-2}$ | Photon ($\gamma$) | $0$ | $\infty$ | $10^{-16} - 10^{-20} \text{ s}$ | $I_3, S, P, C, T$ (violates $I$) |
| **Weak** | $10^{-6}$ | $W^\pm, Z^0$ | $W^\pm: 80.4, Z^0: 91.2$ | $\sim 10^{-18}$ | $10^{-8} - 10^{-13} \text{ s}$ | Violates $P, C, T, S, I, I_3$ |
| **Gravitational** | $10^{-39}$ | Graviton (hypothetical) | $0$ | $\infty$ | - | All macroscopic |

---

## 7.2 Particle Classification

Particles fall into two main groups based on spin statistics:

```
                            ELEMENTARY PARTICLES
                                     |
           +-------------------------+-------------------------+
           |                                                   |
    FERMIONS (Spin 1/2)                                 BOSONS (Integer Spin)
           |                                                   |
  +--------+--------+                                 +--------+--------+
  |                 |                                 |                 |
LEPTONS          HADRONS                          GAUGE BOSONS       MESONS
(No Strong)   (Strong interaction)                (Interactions)   (q q̄ pairs)
                    |                                                   |
             +------+------+                                            +---> (π, K, η, ρ)
             |             |
          BARYONS       HYPERONS
          (qqq)         (S ≠ 0)
             |
             +---> (p, n, Λ, Σ, Ξ, Ω)
```

### 1. Leptons (Spin $1/2$, Fundamental Point-like)
Organized into three generations:

$$\begin{pmatrix} e^- \\ \nu_e \end{pmatrix}, \quad \begin{pmatrix} \mu^- \\ \nu_\mu \end{pmatrix}, \quad \begin{pmatrix} \tau^- \\ \nu_\tau \end{pmatrix}$$

Conserved Lepton Numbers: $L_e, L_\mu, L_\tau$.

---

## 7.3 Quantum Numbers & Gell-Mann-Nishijima Formula

### Quantum Number Definitions:
1.  **Baryon Number ($B$)**: $+1$ for baryons, $-1$ for antibaryons, $0$ for mesons and leptons.
2.  **Isospin ($I$) and 3rd Component ($I_3$)**:
    Multiplet degeneracy $N_{\text{states}} = 2I + 1$.
    $$I_3 = \frac{1}{2} (Z - N) \quad \text{for light hadrons}$$
3.  **Strangeness ($S$)**: Count of strange quarks ($S = -1$ per $s$-quark, $+1$ per $\bar{s}$-quark).
4.  **Hypercharge ($Y$)**: Defined as:
    $$Y = B + S + C + B' + T'$$

### Gell-Mann-Nishijima Formula:
$$Q = I_3 + \frac{Y}{2} = I_3 + \frac{B + S + C + B' + T'}{2}$$

---

# SECTION 8: QUARK MODEL, SYMMETRIES & CONSERVATION LAWS

## 8.1 The Quark Model

Hadrons are built from fundamental spin-1/2 point-like constituents called **Quarks**.

### Standard Quark Properties Table:
| Quark Flavor | Charge $Q/e$ | Spin $J$ | Baryon No. $B$ | $I$ | $I_3$ | Strangeness $S$ | Charm $C$ | Bottomness $B'$ | Topness $T'$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Up ($u$)** | $+2/3$ | $1/2$ | $1/3$ | $1/2$ | $+1/2$ | $0$ | $0$ | $0$ | $0$ |
| **Down ($d$)** | $-1/3$ | $1/2$ | $1/3$ | $1/2$ | $-1/2$ | $0$ | $0$ | $0$ | $0$ |
| **Strange ($s$)** | $-1/3$ | $1/2$ | $1/3$ | $0$ | $0$ | $-1$ | $0$ | $0$ | $0$ |
| **Charm ($c$)** | $+2/3$ | $1/2$ | $1/3$ | $0$ | $0$ | $0$ | $+1$ | $0$ | $0$ |
| **Bottom ($b$)** | $-1/3$ | $1/2$ | $1/3$ | $0$ | $0$ | $0$ | $0$ | $-1$ | $0$ |
| **Top ($t$)** | $+2/3$ | $1/2$ | $1/3$ | $0$ | $0$ | $0$ | $0$ | $0$ | $+1$ |

---

## 8.2 Quark Composition of Common Hadrons

### 1. Mesons ($q\bar{q}$) — Pseudoscalar ($J^P = 0^-$ Octet)
*   $\pi^+ = u\bar{d}$ ($I_3 = +1, S=0$)
*   $\pi^0 = \frac{1}{\sqrt{2}}(u\bar{u} - d\d)$ ($I_3 = 0, S=0$)
*   $\pi^- = d\bar{u}$ ($I_3 = -1, S=0$)
*   $K^+ = u\bar{s}$ ($I_3 = +1/2, S=+1$)
*   $K^0 = d\bar{s}$ ($I_3 = -1/2, S=+1$)
*   $\bar{K}^0 = s\bar{d}$ ($I_3 = +1/2, S=-1$)
*   $K^- = s\bar{u}$ ($I_3 = -1/2, S=-1$)
*   $\eta = \frac{1}{\sqrt{6}}(u\bar{u} + d\bar{d} - 2s\bar{s})$ ($I_3 = 0, S=0$)

### 2. Baryons ($qqq$) — Spin-$1/2^+$ Octet
*   Proton ($p$) $= uud$
*   Neutron ($n$) $= udd$
*   $\Lambda^0 = uds$ ($I=0, S=-1$)
*   $\Sigma^+ = uus$, \quad $\Sigma^0 = uds$, \quad $\Sigma^- = dds$ ($S=-1$)
*   $\Xi^0 = uss$, \quad $\Xi^- = dss$ ($S=-2$)

### 3. Baryons ($qqq$) — Spin-$3/2^+$ Decuplet
*   $\Delta^{++} = uuu$, \quad $\Delta^+ = uud$, \quad $\Delta^0 = udd$, \quad $\Delta^- = ddd$ ($S=0$)
*   $\Omega^- = sss$ ($S=-3, I=0$)

```
          Baryon Octet (J^P = 1/2+)             Baryon Decuplet (J^P = 3/2+)
               Y ^                                   Y ^
                 |                                     |
             n   |   p   (S=0)                  Δ-     |    Δ⁰   Δ⁺   Δ⁺⁺ (S=0)
          o------+------o                       o------o----o----o
         /       |       \                     /       |          \
     Σ⁻ o   Σ⁰, Λ|   Σ⁺   (S=-1)           Σ*⁻ o    Σ*⁰|   Σ*⁺     (S=-1)
         \       |       /                     \       |       /
          o------+------o                       o------o------o     (S=-2)
             Ξ⁻  |   Ξ⁰  (S=-2)                    Ξ*⁻ |   Ξ*⁰
                 +-------------------> I₃              \   |   /
                                                        o--+--o     (S=-3, Ω⁻)
                                                           |
                                                           +-------------------> I₃
```

---

## 8.3 Discrete Symmetries: $C, P, T$ Invariance

### 1. Charge Conjugation ($C$)
Operators flip all internal quantum numbers ($Q, B, L, S, I_3 \to -Q, -B, -L, -S, -I_3$) keeping space-time coordinates unchanged.

Only neutral systems with zero quantum numbers ($Q=B=S=0$) can be eigenstates of $C$:
*   $C |\gamma\rangle = -1 |\gamma\rangle$
*   $C |\pi^0\rangle = +1 |\pi^0\rangle$
*   For a neutral meson bound state of $q\bar{q}$ with orbital $L$ and spin $S$:
    $$C = (-1)^{L+S}$$

### 2. Parity ($P$)
Inverts spatial coordinates: $\vec{r} \to -\vec{r}$.
*   Intrinsic parity of Quarks: $+1$; Anti-quarks: $-1$.
*   Intrinsic parity of Mesons ($q\bar{q}$):
    $$\pi_{\text{meson}} = (-1)( -1)^L = (-1)^{L+1}$$
*   Intrinsic parity of Baryons ($qqq$):
    $$\pi_{\text{baryon}} = (+1)^3 (-1)^{L_{12} + L_3} = (-1)^{L_{12} + L_3}$$

### 3. Time Reversal ($T$)
Reverses time coordinate: $t \to -t$. Reverses momenta $\vec{p} \to -\vec{p}$ and spin $\vec{S} \to -\vec{S}$.

### 4. $CPT$ Theorem
Any Lorentz-invariant local quantum field theory is strictly invariant under combined transformation $\hat{C}\hat{P}\hat{T}$.

#### Direct Consequences of $CPT$ Invariance:
1. Particle and anti-particle have **exact identical mass** ($m = \bar{m}$).
2. Particle and anti-particle have **exact identical total lifetime** ($\tau = \bar{\tau}$).
3. Particle and anti-particle have **equal magnitude but opposite sign** magnetic moments ($\mu = -\bar{\mu}$).

---

## 8.4 Conservation Laws Master Table

| Physical Quantity | Strong Interaction | Electromagnetic | Weak Interaction |
| :--- | :--- | :--- | :--- |
| **Energy / Momentum / Angular Momentum** | Conserved | Conserved | Conserved |
| **Electric Charge ($Q$)** | Conserved | Conserved | Conserved |
| **Baryon Number ($B$)** | Conserved | Conserved | Conserved |
| **Lepton Numbers ($L_e, L_\mu, L_\tau$)** | Conserved | Conserved | Conserved |
| **Isospin Vector ($\vec{I}$)** | **Conserved** ($\Delta I = 0$) | Violated ($\Delta I = 0, 1$) | Violated |
| **3rd Component Isospin ($I_3$)** | **Conserved** ($\Delta I_3 = 0$) | **Conserved** ($\Delta I_3 = 0$) | Violated |
| **Strangeness ($S$)** | **Conserved** ($\Delta S = 0$) | **Conserved** ($\Delta S = 0$) | Violated ($\Delta S = \pm 1$) |
| **Parity ($P$)** | **Conserved** | **Conserved** | **Violated Strictly** |
| **Charge Conjugation ($C$)** | **Conserved** | **Conserved** | **Violated Strictly** |
| **Combined $CP$ / $T$** | **Conserved** | **Conserved** | Violated (Slightly in $K^0, B^0$) |

---

## 8.5 Parity Non-Conservation in Weak Interaction & Neutrino Helicity

### 1. Wu's Experiment (1957)
Chien-Shiung Wu aligned polarized ${}^{60}\text{Co}$ nuclei at ultra-low temperatures in a magnetic field and monitored $\beta^-$ emission relative to nuclear spin direction $\vec{J}$:

$${}_{27}^{60}\text{Co} \to {}_{28}^{60}\text{Ni} + e^- + \bar{\nu}_e$$

```
    Spin Alignment J
          ^
          |
    +-----+-----+
    |   60Co    |
    +-----+-----+
          |
          v   Preferential Electron Emission (Opposite to J)
```

The intensity distribution followed:

$$I(\theta) \propto 1 - \alpha \frac{\vec{J} \cdot \vec{p}_e}{E_e} = 1 - \alpha \cos\theta$$

Under parity inversion $\hat{P}$, $\vec{J} \to +\vec{J}$ (axial vector) but $\vec{p}_e \to -\vec{p}_e$ (polar vector), transforming $(1 - \alpha \cos\theta) \to (1 + \alpha \cos\theta)$.
As symmetric emission was not observed, **Parity is maximally violated in weak interactions**.

### 2. Helicity ($h$) of Neutrinos
Helicity is defined as the projection of intrinsic spin along momentum direction:

$$h = \frac{\vec{S} \cdot \vec{p}}{|\vec{S}| |\vec{p}|}$$

*   **Massless Neutrinos ($\nu$)**: Pure **Left-Handed** ($h = -1$).
*   **Massless Anti-neutrinos ($\bar{\nu}$)**: Pure **Right-Handed** ($h = +1$).

---

## 8.6 Solved Benchmark Examples

### Example 8.1: Checking Reaction Feasibility
**Problem**: Determine if the following reaction is allowed or forbidden by fundamental interactions:

$$\pi^- + p \to K^0 + \Lambda^0$$

**Solution**:
Check all quantum numbers:

1.  **Electric Charge ($Q$)**:
    $$\text{LHS: } (-1) + (+1) = 0 \quad | \quad \text{RHS: } 0 + 0 = 0 \quad \implies \text{Conserved!}$$
2.  **Baryon Number ($B$)**:
    $$\text{LHS: } 0 + 1 = 1 \quad | \quad \text{RHS: } 0 + 1 = 1 \quad \implies \text{Conserved!}$$
3.  **Lepton Number ($L$)**:
    $$\text{LHS: } 0 \quad | \quad \text{RHS: } 0 \quad \implies \text{Conserved!}$$
4.  **Strangeness ($S$)**:
    $$\text{LHS: } 0 + 0 = 0 \quad | \quad \text{RHS: } (+1) + (-1) = 0 \quad \implies \text{Conserved!}$$
5.  **Isospin ($I_3$)**:
    $$\text{LHS: } (-1) + (+1/2) = -1/2 \quad | \quad \text{RHS: } (-1/2) + 0 = -1/2 \quad \implies \text{Conserved!}$$

Since all quantum numbers including $S$ and $I_3$ are strictly conserved, the reaction is **ALLOWED via Strong Interaction**.

---

# SECTION 9: RELATIVISTIC KINEMATICS & REACTION DYNAMICS

## 9.1 Relativistic Four-Momentum Formalism

The relativistic four-momentum vector $P^\mu$ is:

$$P^\mu = \left( \frac{E}{c}, \vec{p} \right) = \left( \frac{E}{c}, p_x, p_y, p_z \right)$$

Minkowski metric tensor (signature $+ - - -$):

$$P^\mu P_\mu = g_{\mu\nu} P^\mu P^\nu = \frac{E^2}{c^2} - |\vec{p}|^2 = m^2 c^2$$

This scalar product is a **Lorentz Invariant** quantity (has identical value in all inertial frames).

---

## 9.2 Mandelstam Variables ($s, t, u$)

For a 2-body to 2-body reaction $1 + 2 \to 3 + 4$:

```
    1 \       / 3
       \     /
        \===/
        /   \
    2 /       \ 4
```

The Mandelstam Lorentz-invariant variables are defined as:

$$s = (P_1 + P_2)^2 = (P_3 + P_4)^2$$

$$t = (P_1 - P_3)^2 = (P_2 - P_4)^2$$

$$u = (P_1 - P_4)^2 = (P_2 - P_3)^2$$

### Fundamental Identity:
$$s + t + u = (m_1^2 + m_2^2 + m_3^2 + m_4^2) c^2$$

Physical significance of $s$:
In the Center-of-Mass (CM) frame, $\vec{p}_1 + \vec{p}_2 = 0$:

$$s = \left( \frac{E_1^* + E_2^*}{c}, \vec{0} \right)^2 = \frac{E_{\text{CM}}^2}{c^2}$$

Thus, $\sqrt{s}$ is the total available energy in the CM frame.

---

## 9.3 General Formula for Threshold Energy in Particle Production

To produce a set of final particles $3, 4, \dots, N$ by colliding projectile 1 into stationary target 2 ($1 + 2 \to 3 + 4 + \dots + N$):

### Derivation:
Equate Lorentz invariant $s = P_{\text{total}}^\mu P_{\mu, \text{total}}$ in LAB frame and CM frame at threshold.

#### In LAB frame (Target 2 at rest, $\vec{p}_2 = 0, E_2 = m_2 c^2$):
$$s = (P_1 + P_2)^2 = m_1^2 c^2 + m_2^2 c^2 + 2 \frac{E_1 (m_2 c^2)}{c^2} = (m_1^2 + m_2^2)c^2 + 2 E_1 m_2$$

#### In CM frame at threshold:
All created particles are produced at rest relative to each other ($\vec{p}_i^* = 0$):

$$s = \left( \sum_{i=3}^N m_i \right)^2 c^2$$

Equating LAB and CM invariants:

$$(m_1^2 + m_2^2)c^2 + 2 E_{1, \text{th}} m_2 = \left( \sum_{i=3}^N m_i \right)^2 c^2$$

$$E_{1, \text{th}} = \frac{\left( \sum_{i=3}^N m_i \right)^2 - m_1^2 - m_2^2}{2 m_2} c^2$$

Subtracting rest energy $m_1 c^2$ gives the **Threshold Kinetic Energy ($T_{\text{th}}$)**:

$$T_{\text{th}} = E_{1, \text{th}} - m_1 c^2 = \frac{\left( \sum_{i=3}^N m_i \right)^2 - (m_1 + m_2)^2}{2 m_2} c^2$$

---

## 9.4 Solved Benchmark Examples

### Example 9.1: Threshold Energy for Antiproton Production
**Problem**: Calculate the threshold kinetic energy of a proton colliding with a stationary proton target to produce a proton-antiproton pair:

$$p + p \to p + p + p + \bar{p}$$

Given proton rest mass $m_p$.

**Solution**:
1.  **Identify initial and final particles**:
    *   $m_1 = m_p, m_2 = m_p$.
    *   Final particles: 3 protons + 1 antiproton $\implies \sum m_{\text{final}} = 4 m_p$.
2.  **Apply Threshold Formula**:
    $$T_{\text{th}} = \frac{\left( \sum m_{\text{final}} \right)^2 - (m_1 + m_2)^2}{2 m_2} c^2$$
    $$T_{\text{th}} = \frac{(4 m_p)^2 - (m_p + m_p)^2}{2 m_p} c^2 = \frac{16 m_p^2 - 4 m_p^2}{2 m_p} c^2 = \frac{12 m_p^2}{2 m_p} c^2 = \mathbf{6 m_p c^2}$$

Taking $m_p c^2 \approx 0.938 \text{ GeV}$:

$$T_{\text{th}} = 6 \times 0.938 \text{ GeV} \approx \mathbf{5.63 \text{ GeV}}$$

---

### Example 9.2: Threshold Energy for Pion Production
**Problem**: Find the minimum kinetic energy of a incident proton colliding with a target proton at rest to produce a neutral pion ($\pi^0$):

$$p + p \to p + p + \pi^0$$

Given $m_p c^2 = 938 \text{ MeV}$ and $m_\pi c^2 = 135 \text{ MeV}$.

**Solution**:
1.  **Identify Masses**:
    *   $m_1 = m_p, m_2 = m_p$.
    *   $\sum m_{\text{final}} = 2 m_p + m_\pi$.
2.  **Apply Formula**:
    $$T_{\text{th}} = \frac{(2 m_p + m_\pi)^2 - (2 m_p)^2}{2 m_p} c^2 = \frac{4 m_p^2 + 4 m_p m_\pi + m_\pi^2 - 4 m_p^2}{2 m_p} c^2 = \frac{4 m_p m_\pi + m_\pi^2}{2 m_p} c^2 = m_\pi c^2 \left( 2 + \frac{m_\pi}{2 m_p} \right)$$
3.  **Calculate Numerical Value**:
    $$T_{\text{th}} = 135 \text{ MeV} \times \left( 2 + \frac{135}{2 \times 938} \right) = 135 \times (2 + 0.07196) = 135 \times 2.07196 \approx \mathbf{279.7 \text{ MeV}}$$

---

# SECTION 10: QUICK FORMULA SUMMARY FOR CSIR NET EXAM

```
====================================================================================================
CONCEPT                             FORMULA / EXPRESSION
====================================================================================================
Nuclear Radius                      R = R₀ A¹/³  (R₀ ≈ 1.2 fm)

Charge Density Profile              ρ(r) = ρ₀ / [ 1 + exp((r - R₁/₂)/a) ]

RMS Radius (Uniform Sphere)         R_rms = √(3/5) R

Coulomb Energy Mirror Nuclei        ΔE_c = (3/5) (e²/4πε₀ R) [Z₂² - Z₁²]

Electric Quadrupole Moment          Q = (1/e) ∫ ρ(r) (3z² - r²) d³r
Ellipsoid Quadrupole Moment         Q₀ = (2/5) Z (a² - b²) = (4/5) Z R² δ

Spectroscopic Quadrupole Projection Q = [ I(2I-1) / ((I+1)(2I+3)) ] Q₀

Nuclear Magnetic Dipole Moment      μ = g_I I μ_N  where  μ_N = eħ / (2 m_p)

SEMF Mass / Binding Energy          B(Z,A) = a_v A - a_s A²/³ - a_c Z(Z-1)/A¹/³ - a_a (A-2Z)²/A + δ(A,Z)
                                    a_v ≈ 15.7, a_s ≈ 17.8, a_c ≈ 0.71, a_a ≈ 23.6 (MeV)

Most Stable Isobar Z₀               Z₀ = A / [ 2 + (a_c / 2a_a) A²/³ ]

Fission Instability Condition       Z²/A > (Z²/A)_crit ≈ 47 - 50

Deuteron Square-Well Depth          V₀ b² ≈ π² ħ² / (4 m) ≈ 102 MeV·fm²

Yukawa Potential                    V(r) = -g² exp(-μ r) / r   where μ = m_π c / ħ

Spin-Orbit Splitting Energy         ΔE_so = (ħ²/2) (2l + 1) |V_so|

Schmidt Magnetic Moments            j = l + 1/2:  μ_p = j + 2.29 ,  μ_n = -1.91  (in μ_N)
                                    j = l - 1/2:  μ_p = j - 2.29 [j/(j+1)],  μ_n = +1.91 [j/(j+1)]

Rotational Energy (Even-Even)       E(I) = (ħ² / 2I) I(I+1)    ratio E(4⁺)/E(2⁺) = 3.33

Alpha Decay Kinetic Energy          T_α = Q_α (A - 4) / A

Geiger-Nuttall Law                  log₁₀ λ = A + B (Z / √E_α)

Beta Decay Endpoint Kurie Plot      √[ N(p) / (p² F(Z,E)) ] ∝ (E₀ - E)

Gamma Selection Rules               |I_i - I_f| ≤ L ≤ I_i + I_f   (No L=0 photon)
                                    Parity: E L => (-1)^L ;  M L => (-1)^(L+1)

Nuclear Reaction Threshold Energy   T_th = |Q| ( 1 + m_a / m_X )   [for Q < 0]

Breit-Wigner Single Level Formula   σ_ab(E) = (π/k²) [ (2J+1) / ((2I_a+1)(2I_X+1)) ] [ Γ_a Γ_b / ((E-E_r)² + Γ²/4) ]

Gell-Mann-Nishijima Formula         Q = I₃ + Y/2 = I₃ + (B + S + C + B' + T') / 2

Pseudoscalar Meson Parity           π = (-1)^(L+1)   (For q q̄ ground state L=0, π = -1)

Baryon Parity                       π = (-1)^(L₁₂ + L₃)  (For qqq ground state, π = +1)

Helicity Operator                   h = (S · p) / (|S||p|)  [ν: h = -1;  ν̄: h = +1]

Mandelstam Identity                 s + t + u = ∑ m_i² c²

Relativistic Particle Threshold     T_th = [ (∑ m_final)² - (m₁ + m₂)² ] c² / (2 m₂)
====================================================================================================
```
