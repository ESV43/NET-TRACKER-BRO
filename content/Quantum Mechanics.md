# COMPREHENSIVE STUDY NOTES: QUANTUM MECHANICS
**Target Exam:** CSIR NET Physical Sciences (Module IV)

---

## SECTION 1: FOUNDATIONS OF QUANTUM MECHANICS & THE SCHRÖDINGER EQUATION

### 1.1 Wave-Particle Duality and Wave Packets
Quantum mechanics reconciles the dual wave-like and particle-like properties of matter and radiation.

#### 1.1.1 De Broglie Hypothesis
In 1924, Louis de Broglie postulated that any moving particle of momentum $p$ and total energy $E$ has an associated matter wave characterized by a wavelength $\lambda$ and frequency $\nu$:

$$\lambda = \frac{h}{p} = \frac{2\pi \hbar}{p}, \quad \nu = \frac{E}{h} \implies \omega = \frac{E}{\hbar}$$

where $h$ is Planck's constant and $\hbar = h/2\pi$.

#### 1.1.2 Wave Packets: Phase Velocity vs. Group Velocity
A localized classical particle is represented in quantum mechanics by a **wave packet**, constructed by superposing monochromatic plane waves over a continuous band of wave vectors $k$:

$$\Psi(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} A(k) \, e^{i(kx - \omega(k) t)} \, dk$$

* **Phase Velocity ($v_p$):** The velocity of propagation of the phase of a single monochromatic wave component:

  $$v_p = \frac{\omega}{k}$$

* **Group Velocity ($v_g$):** The velocity of propagation of the envelope (the localized packet peak), which corresponds to the physical velocity of the classical particle:

  $$v_g = \frac{d\omega}{dk} = \frac{dE}{dp}$$

##### Relativistic & Non-Relativistic Relations
1. **Non-Relativistic Free Particle:**
   $$E = \frac{p^2}{2m} = \frac{\hbar^2 k^2}{2m} \implies \omega(k) = \frac{\hbar k^2}{2m}$$
   $$v_p = \frac{\omega}{k} = \frac{\hbar k}{2m} = \frac{v}{2}$$
   $$v_g = \frac{d\omega}{dk} = \frac{\hbar k}{m} = v_{\text{particle}}$$
   Thus, $v_g = 2 v_p = v_{\text{particle}}$.

2. **Relativistic Free Particle:**
   $$E = \sqrt{p^2 c^2 + m_0^2 c^4} \implies \hbar \omega = \sqrt{\hbar^2 k^2 c^2 + m_0^2 c^4}$$
   $$v_p = \frac{E}{p} = \frac{\gamma m_0 c^2}{\gamma m_0 v} = \frac{c^2}{v} > c$$
   $$v_g = \frac{dE}{dp} = \frac{p c^2}{E} = v_{\text{particle}} < c$$
   Product relation: $v_p \cdot v_g = c^2$.

---

### 1.2 The Schrödinger Equation
The wave function $\Psi(\mathbf{r}, t)$ contains all dynamically available information about a quantum system.

#### 1.2.1 Time-Dependent Schrödinger Equation (TDSE)
In one dimension for a particle moving in potential $V(x,t)$:

$$i\hbar \frac{\partial}{\partial t} \Psi(x,t) = \left( -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right) \Psi(x,t)$$

In three dimensions, with Hamiltonian operator $\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r},t)$:

$$i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \hat{H} \Psi(\mathbf{r},t)$$

#### 1.2.2 Time-Independent Schrödinger Equation (TISE)
When the potential energy function is time-independent, $V(\mathbf{r},t) = V(\mathbf{r})$, the TDSE can be separated via spatial and temporal variables:

$$\Psi(\mathbf{r},t) = \psi(\mathbf{r}) \phi(t)$$

Substituting into TDSE:

$$i\hbar \psi(\mathbf{r}) \frac{d\phi(t)}{dt} = \left[ -\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r})\psi(\mathbf{r}) \right] \phi(t)$$

Dividing both sides by $\psi(\mathbf{r})\phi(t)$:

$$\frac{i\hbar}{\phi(t)} \frac{d\phi(t)}{dt} = \frac{1}{\psi(\mathbf{r})} \left[ -\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r}) \right] \psi(\mathbf{r}) = E \quad \text{(Separation Constant)}$$

This yields two distinct differential equations:
1. **Time Part:** $\frac{d\phi}{dt} = -\frac{i E}{\hbar} \phi(t) \implies \phi(t) = e^{-i E t / \hbar}$
2. **Space Part (TISE):** 

$$\hat{H}\psi(\mathbf{r}) = \left( -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}) \right) \psi(\mathbf{r}) = E \psi(\mathbf{r})$$

A complete stationary state solution is given by:

$$\Psi(\mathbf{r},t) = \psi(\mathbf{r}) e^{-i E t / \hbar}$$

---

### 1.3 Statistical Interpretation and Continuity Equation

#### 1.3.1 Born Interpretation of the Wave Function
Max Born postulated that $\rho(\mathbf{r},t) = |\Psi(\mathbf{r},t)|^2 = \Psi^*(\mathbf{r},t)\Psi(\mathbf{r},t)$ represents the **probability density** of finding the particle at position $\mathbf{r}$ at time $t$.

* **Normalization Condition:** Since the particle must exist somewhere in all space:

  $$\int_{-\infty}^{\infty} |\Psi(\mathbf{r},t)|^2 \, d^3\mathbf{r} = 1$$

* **Standard Wavefunction Requirements:** To be physically acceptable (square-integrable, $\mathcal{L}^2$), $\psi(\mathbf{r})$ must be:
  1. Single-valued everywhere.
  2. Continuous everywhere.
  3. Continuous derivative $\frac{\partial \psi}{\partial x}$ everywhere (except where the potential $V(x)$ contains an infinite discontinuity, e.g., Dirac delta potential or infinite step).

---

#### 1.3.2 Full Derivation of the Probability Continuity Equation
We derive the conservation of probability from the TDSE.

**Step 1:** Write TDSE and its complex conjugate.
$$\text{(1)} \quad i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \nabla^2 \Psi + V(\mathbf{r})\Psi$$

Taking the complex conjugate of (1) (assuming potential $V(\mathbf{r})$ is real):
$$\text{(2)} \quad -i\hbar \frac{\partial \Psi^*}{\partial t} = -\frac{\hbar^2}{2m} \nabla^2 \Psi^* + V(\mathbf{r})\Psi^*$$

**Step 2:** Evaluate the time derivative of the probability density $\rho = \Psi^* \Psi$.
$$\frac{\partial \rho}{\partial t} = \frac{\partial}{\partial t}(\Psi^* \Psi) = \Psi^* \frac{\partial \Psi}{\partial t} + \Psi \frac{\partial \Psi^*}{\partial t}$$

**Step 3:** Substitute $\frac{\partial \Psi}{\partial t}$ and $\frac{\partial \Psi^*}{\partial t}$ from equations (1) and (2):

$$\Psi^* \left( \frac{\partial \Psi}{\partial t} \right) = \Psi^* \left( \frac{i\hbar}{2m} \nabla^2 \Psi - \frac{i}{\hbar} V \Psi \right)$$

$$\Psi \left( \frac{\partial \Psi^*}{\partial t} \right) = \Psi \left( -\frac{i\hbar}{2m} \nabla^2 \Psi^* + \frac{i}{\hbar} V \Psi^* \right)$$

Summing these terms:

$$\frac{\partial \rho}{\partial t} = \frac{i\hbar}{2m} \left( \Psi^* \nabla^2 \Psi - \Psi \nabla^2 \Psi^* \right)$$

**Step 4:** Rewrite using vector calculus identities:
$$\Psi^* \nabla^2 \Psi - \Psi \nabla^2 \Psi^* = \boldsymbol{\nabla} \cdot \left( \Psi^* \boldsymbol{\nabla} \Psi - \Psi \boldsymbol{\nabla} \Psi^* \right)$$

Thus:

$$\frac{\partial \rho}{\partial t} = \boldsymbol{\nabla} \cdot \left[ \frac{i\hbar}{2m} \left( \Psi^* \boldsymbol{\nabla} \Psi - \Psi \boldsymbol{\nabla} \Psi^* \right) \right]$$

$$\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{J} = 0$$

where the **Probability Current Density Vector** $\mathbf{J}$ is defined as:

$$\mathbf{J} = \frac{\hbar}{2mi} \left( \Psi^* \boldsymbol{\nabla} \Psi - \Psi \boldsymbol{\nabla} \Psi^* \right) = \frac{\hbar}{m} \text{Im} \left( \Psi^* \boldsymbol{\nabla} \Psi \right) = \text{Re}\left( \Psi^* \left[ \frac{\hat{\mathbf{p}}}{m} \right] \Psi \right)$$

##### Key Formula Summary for Current Density $\mathbf{J}$
1. For a standard 1D plane wave $\Psi(x,t) = A e^{i(kx - \omega t)}$:

   $$J_x = |A|^2 \frac{\hbar k}{m} = |A|^2 v$$

2. For a real wave function $\psi(x) = \psi^*(x)$:

   $$J_x = 0$$

---

## SECTION 2: COORDINATE AND MOMENTUM REPRESENTATIONS

### 2.1 State Representations in Hilbert Space
A state vector $|\psi\rangle$ can be projected into continuous coordinate space $\{|x\rangle\}$ or continuous momentum space $\{|p\rangle\}$.

* **Position Representation Wave Function:**
  $$\psi(x) = \langle x | \psi \rangle$$

* **Momentum Representation Wave Function:**
  $$\phi(p) = \langle p | \psi \rangle$$

---

### 2.2 Fourier Transform Connection
The basis transformation between coordinate and momentum representations is governed by the plane wave inner product $\langle x | p \rangle = \frac{1}{\sqrt{2\pi\hbar}} e^{i p x / \hbar}$.

#### 2.2.1 Coordinate-to-Momentum Transformation (Direct Fourier Transform)
$$\phi(p) = \langle p | \psi \rangle = \int_{-\infty}^{\infty} \langle p | x \rangle \langle x | \psi \rangle \, dx = \frac{1}{\sqrt{2\pi\hbar}} \int_{-\infty}^{\infty} \psi(x) \, e^{-ipx/\hbar} \, dx$$

#### 2.2.2 Momentum-to-Coordinate Transformation (Inverse Fourier Transform)
$$\psi(x) = \langle x | \psi \rangle = \int_{-\infty}^{\infty} \langle x | p \rangle \langle p | \psi \rangle \, dp = \frac{1}{\sqrt{2\pi\hbar}} \int_{-\infty}^{\infty} \phi(p) \, e^{ipx/\hbar} \, dp$$

---

### 2.3 Operator Representations

| Physical Observable | Position Representation ($\hat{x}$-basis) | Momentum Representation ($\hat{p}$-basis) |
| :--- | :--- | :--- |
| **Position Operator $\hat{x}$** | $x$ | $i\hbar \frac{\partial}{\partial p}$ |
| **Momentum Operator $\hat{p}$** | $-i\hbar \frac{\partial}{\partial x}$ | $p$ |
| **Kinetic Energy Operator $\hat{T}$** | $-\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}$ | $\frac{p^2}{2m}$ |
| **Potential Energy Operator $\hat{V}$** | $V(x)$ | $V\left(i\hbar \frac{\partial}{\partial p}\right)$ |

#### Inner Products and Expectation Values in Both Representations
* **Inner Product (Parseval's Identity):**
  $$\langle \psi | \phi \rangle = \int_{-\infty}^{\infty} \psi^*(x) \phi(x) \, dx = \int_{-\infty}^{\infty} \phi^*(p) \psi(p) \, dp$$

* **Expectation Value of $f(x, p)$:**
  $$\langle f(x, p) \rangle = \int_{-\infty}^{\infty} \psi^*(x) f\left(x, -i\hbar \frac{\partial}{\partial x}\right) \psi(x) \, dx = \int_{-\infty}^{\infty} \phi^*(p) f\left(i\hbar \frac{\partial}{\partial p}, p\right) \phi(p) \, dp$$

---

## SECTION 3: DIRAC FORMALISM, OPERATORS & UNCERTAINTY PRINCIPLE

### 3.1 Dirac Formalism & Hilbert Space

#### 3.1.1 Ket and Bra Vectors
* **Ket Vector $|\psi\rangle$:** An abstract state vector residing in a complex vector space $\mathcal{H}$ (Hilbert Space).
* **Bra Vector $\langle\psi|$:** An element of the dual space $\mathcal{H}^*$, formed via continuous conjugate transposition:

  $$(c |\psi\rangle)^\dagger = c^* \langle\psi|$$

#### 3.1.2 Inner Product Properties
1. $\langle \phi | \psi \rangle = \langle \psi | \phi \rangle^*$
2. Positivity: $\langle \psi | \psi \rangle \ge 0$, and $\langle \psi | \psi \rangle = 0 \iff |\psi\rangle = 0$.
3. Linearity: $\langle \psi | c_1 \phi_1 + c_2 \phi_2 \rangle = c_1 \langle \psi | \phi_1 \rangle + c_2 \langle \psi | \phi_2 \rangle$.

---

### 3.2 Operators and Matrix Mechanics

#### 3.2.1 Hermitian Operators
An operator $\hat{A}$ is Hermitian if $\hat{A}^\dagger = \hat{A}$, where $\hat{A}^\dagger$ is defined via $\langle \phi | \hat{A} \psi \rangle = \langle \hat{A}^\dagger \phi | \psi \rangle$.

##### Fundamental Theorems of Hermitian Operators
1. All eigenvalues of a Hermitian operator are real.
2. Eigenvectors of a Hermitian operator corresponding to distinct eigenvalues are mutually orthogonal:
   $$\text{If } \hat{A}|a_n\rangle = a_n |a_n\rangle \quad \text{and} \quad \hat{A}|a_m\rangle = a_m |a_m\rangle, \quad a_n \neq a_m \implies \langle a_n | a_m \rangle = \delta_{nm}$$

#### 3.2.2 Projection Operators
An operator $\hat{P}$ is a projection operator if it is Hermitian ($\hat{P}^\dagger = \hat{P}$) and idempotent ($\hat{P}^2 = \hat{P}$).
* Projection onto a normalized state $|\phi\rangle$:

  $$\hat{P}_\phi = |\phi\rangle\langle\phi|$$

* **Completeness Relation (Resolution of Identity):** For any complete orthonormal basis $\{|n\rangle\}$:

  $$\sum_n |n\rangle\langle n| = \mathbb{I} \quad \left(\text{or } \int |x\rangle\langle x| \, dx = \mathbb{I}\right)$$

#### 3.2.3 Unitary Operators
An operator $\hat{U}$ is unitary if its adjoint equals its inverse:

$$\hat{U}^\dagger \hat{U} = \hat{U} \hat{U}^\dagger = \mathbb{I} \iff \hat{U}^\dagger = \hat{U}^{-1}$$

Unitary operators preserve the inner product: $\langle \hat{U}\phi | \hat{U}\psi \rangle = \langle \phi | \psi \rangle$.

---

### 3.3 Commutator Algebra
The commutator of two operators $\hat{A}$ and $\hat{B}$ is defined as $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

#### Essential Commutator Identities
1. **Anti-symmetry:** $[\hat{A}, \hat{B}] = -[\hat{B}, \hat{A}]$
2. **Linearity:** $[\hat{A}, \hat{B} + \hat{C}] = [\hat{A}, \hat{B}] + [\hat{A}, \hat{C}]$
3. **Leibniz Product Rules:**
   * $[\hat{A}, \hat{B}\hat{C}] = [\hat{A}, \hat{B}]\hat{C} + \hat{B}[\hat{A}, \hat{C}]$
   * $[\hat{A}\hat{B}, \hat{C}] = \hat{A}[\hat{B}, \hat{C}] + [\hat{A}, \hat{C}]\hat{B}$
4. **Hermitian Conjugate:** $[\hat{A}, \hat{B}]^\dagger = [\hat{B}^\dagger, \hat{A}^\dagger]$
5. **Jacobi Identity:**

   $$[\hat{A}, [\hat{B}, \hat{C}]] + [\hat{B}, [\hat{C}, \hat{A}]] + [\hat{C}, [\hat{A}, \hat{B}]] = 0$$

6. **Canonical Commutator:** $[\hat{x}_i, \hat{p}_j] = i\hbar \delta_{ij} \mathbb{I}$
7. **Canonical Function Relations (for analytical functions $f$ and $g$):**

   $$[\hat{x}, f(\hat{p})] = i\hbar \frac{\partial f}{\partial \hat{p}}$$

   $$[\hat{p}, g(\hat{x})] = -i\hbar \frac{\partial g}{\partial \hat{x}}$$

---

### 3.4 Rigorous Derivation of the Generalized Uncertainty Principle
For any two observable Hermitian operators $\hat{A}$ and $\hat{B}$, define uncertainty (standard deviation) as:

$$\Delta A = \sqrt{\langle (\Delta\hat{A})^2 \rangle}, \quad \text{where } \Delta\hat{A} = \hat{A} - \langle A \rangle \mathbb{I}$$

$$\Delta B = \sqrt{\langle (\Delta\hat{B})^2 \rangle}, \quad \text{where } \Delta\hat{B} = \hat{B} - \langle B \rangle \mathbb{I}$$

#### Step-by-Step Derivation (Robertson-Schrödinger Relation)
1. Construct state vectors $|f\rangle = \Delta\hat{A} |\psi\rangle$ and $|g\rangle = \Delta\hat{B} |\psi\rangle$.
2. Apply the **Cauchy-Schwarz Inequality**: $\langle f | f \rangle \langle g | g \rangle \ge |\langle f | g \rangle|^2$.
3. Compute norms:
   $$\langle f | f \rangle = \langle \psi | (\Delta\hat{A})^\dagger \Delta\hat{A} | \psi \rangle = \langle \psi | (\Delta\hat{A})^2 | \psi \rangle = (\Delta A)^2$$
   $$\langle g | g \rangle = \langle \psi | (\Delta\hat{B})^\dagger \Delta\hat{B} | \psi \rangle = \langle \psi | (\Delta\hat{B})^2 | \psi \rangle = (\Delta B)^2$$
4. Decompose the product $\langle f | g \rangle = \langle \psi | \Delta\hat{A} \Delta\hat{B} | \psi \rangle$:
   $$\Delta\hat{A} \Delta\hat{B} = \frac{1}{2} [\Delta\hat{A}, \Delta\hat{B}] + \frac{1}{2} \{\Delta\hat{A}, \Delta\hat{B}\}$$
   Notice that $[\Delta\hat{A}, \Delta\hat{B}] = [\hat{A}, \hat{B}]$ (anti-Hermitian) and $\{\Delta\hat{A}, \Delta\hat{B}\}$ is Hermitian.
5. Evaluating expectations:
   $$\langle f | g \rangle = \frac{1}{2} \langle [\hat{A}, \hat{B}] \rangle + \frac{1}{2} \langle \{\Delta\hat{A}, \Delta\hat{B}\} \rangle$$
   Since $\langle [\hat{A}, \hat{B}] \rangle$ is purely imaginary and $\langle \{\Delta\hat{A}, \Delta\hat{B}\} \rangle$ is purely real:
   $$|\langle f | g \rangle|^2 = \frac{1}{4} \left| \langle [\hat{A}, \hat{B}] \rangle \right|^2 + \frac{1}{4} \left| \langle \{\Delta\hat{A}, \Delta\hat{B}\} \rangle \right|^2 \ge \frac{1}{4} \left| \langle [\hat{A}, \hat{B}] \rangle \right|^2$$
6. Substituting into Cauchy-Schwarz yields the **Generalized Heisenberg Uncertainty Principle**:

$$\Delta A \cdot \Delta B \ge \frac{1}{2} \left| \langle [\hat{A}, \hat{B}] \rangle \right|$$

* For $\hat{A} = \hat{x}$ and $\hat{B} = \hat{p}_x$, since $[\hat{x}, \hat{p}_x] = i\hbar$:

  $$\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$$

---

## SECTION 4: ONE-DIMENSIONAL EIGENVALUE PROBLEMS & POTENTIAL BARRIERS

### 4.1 The Infinite Square Well (Particle in a Box)

#### 4.1.1 Asymmetric Infinite Well: $V(x) = 0$ for $0 \le x \le a$; $V(x) = \infty$ elsewhere
* **TISE in Region:** $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi \implies \frac{d^2\psi}{dx^2} + k^2\psi = 0$, where $k = \sqrt{\frac{2mE}{\hbar^2}}$.
* **Boundary Conditions:** $\psi(0) = 0$ and $\psi(a) = 0$.
* **Solutions:** $\psi(x) = A \sin(kx) + B \cos(kx)$.
  * $\psi(0) = 0 \implies B = 0$.
  * $\psi(a) = 0 \implies \sin(ka) = 0 \implies ka = n\pi \quad (n = 1, 2, 3, \dots)$.

##### Wavefunctions and Energy Spectrum
$$E_n = \frac{n^2 \pi^2 \hbar^2}{2m a^2}, \quad n = 1, 2, 3, \dots$$

$$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$$

```
  n=3  --- E3 = 9 E1 -------------------  \/\/\  (2 nodes)
  n=2  --- E2 = 4 E1 -------------------  /\/\   (1 node)
  n=1  --- E1 = pi^2 hbar^2 / (2m a^2) --  /\    (0 nodes)
       x=0                               x=a
```

#### 4.1.2 Symmetric Infinite Well: $V(x) = 0$ for $-a/2 \le x \le a/2$; $V(x) = \infty$ elsewhere
By shifting coordinates ($x' = x - a/2$), wavefunctions split strictly by parity:

$$\psi_n(x) = \begin{cases} \sqrt{\frac{2}{a}} \cos\left(\frac{n\pi x}{a}\right) & n = 1, 3, 5, \dots \quad \text{(Even Parity)} \\ \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right) & n = 2, 4, 6, \dots \quad \text{(Odd Parity)} \end{cases}$$

#### 4.1.3 Fundamental Expectation Values (Asymmetric Box $0 \le x \le a$)
* $\langle x \rangle = \frac{a}{2}$
* $\langle x^2 \rangle = a^2 \left( \frac{1}{3} - \frac{1}{2n^2\pi^2} \right)$
* $\langle p \rangle = 0$
* $\langle p^2 \rangle = 2m E_n = \frac{n^2 \pi^2 \hbar^2}{a^2}$
* $\Delta x \cdot \Delta p = \frac{\hbar}{2} \sqrt{\frac{n^2 \pi^2}{3} - 2}$ (For $n=1$, $\Delta x \cdot \Delta p \approx 0.568 \hbar > \frac{\hbar}{2}$).

#### 4.1.4 3D Box Generalization
$$E_{n_x, n_y, n_z} = \frac{\pi^2 \hbar^2}{2m} \left( \frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2} \right)$$
For a cubic box ($L_x = L_y = L_z = L$):
* Ground state: $(1,1,1) \implies E_{111} = \frac{3\pi^2\hbar^2}{2mL^2}$ (Non-degenerate).
* 1st excited state: $(2,1,1), (1,2,1), (1,1,2) \implies E = \frac{6\pi^2\hbar^2}{2mL^2}$ (3-fold degenerate).

---

### 4.2 Finite Square Well
Potential: $V(x) = -V_0$ for $|x| \le a/2$, and $V(x) = 0$ for $|x| > a/2$.

#### Analytical Transcendental Equations for Bound States ($E < 0$)
Let $k = \sqrt{\frac{2m(E + V_0)}{\hbar^2}}$ inside the well, and $\alpha = \sqrt{\frac{-2mE}{\hbar^2}}$ outside.
Define dimensionless parameters $\xi = \frac{k a}{2}$ and $\eta = \frac{\alpha a}{2}$. Note: $\xi^2 + \eta^2 = \gamma^2 = \frac{m V_0 a^2}{2\hbar^2}$.

1. **Even States:** $\eta = \xi \tan \xi$
2. **Odd States:** $\eta = -\xi \cot \xi$

##### Key CSIR NET Results for Finite Well
* A 1D finite square well, no matter how shallow ($V_0 \to 0$), **always possesses at least ONE bound state** (an even state).
* Total number of bound states $N$:

  $$N = 1 + \left\lfloor \frac{1}{\pi} \sqrt{\frac{2m V_0 a^2}{\hbar^2}} \right\rfloor$$

---

### 4.3 Delta-Function Potential
Potential: $V(x) = -\alpha \delta(x)$ with $\alpha > 0$ (Attractive Well).

#### Boundary Condition at Delta Source ($x = 0$)
Integrating TISE $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$ over $[-\epsilon, +\epsilon]$ as $\epsilon \to 0$:

$$\left. \frac{d\psi}{dx} \right|_{+\epsilon} - \left. \frac{d\psi}{dx} \right|_{-\epsilon} = -\frac{2m\alpha}{\hbar^2} \psi(0)$$

#### Bound State Analysis ($E < 0$)
For $x \neq 0$: $\psi(x) = A e^{-\kappa |x|}$ where $\kappa = \frac{\sqrt{-2mE}}{\hbar}$.
Using the derivative jump condition:

$$(-\kappa A) - (\kappa A) = -\frac{2m\alpha}{\hbar^2} A \implies 2\kappa = \frac{2m\alpha}{\hbar^2} \implies \kappa = \frac{m\alpha}{\hbar}$$

##### Energy Eigenvalue & Normalized Bound State
$$E = -\frac{\hbar^2 \kappa^2}{2m} = -\frac{m \alpha^2}{2\hbar^2}$$

$$\psi(x) = \frac{\sqrt{m\alpha}}{\hbar} \, e^{-\frac{m\alpha}{\hbar} |x|}$$

* **Note:** An attractive 1D delta potential supports **exactly ONE bound state**. A repulsive delta potential ($+\alpha \delta(x)$) supports **zero bound states**.

---

### 4.4 Quantum Tunneling through a Rectangular Barrier
Potential: $V(x) = V_0$ for $0 < x < a$, and $V(x) = 0$ elsewhere. Assume particle energy $E < V_0$.

#### 4.4.1 Transmission Coefficient Derivation Summary
In region I ($x<0$): $\psi_I(x) = e^{ikx} + R e^{-ikx}$, $k = \frac{\sqrt{2mE}}{\hbar}$.
In region II ($0<x<a$): $\psi_{II}(x) = A e^{\kappa x} + B e^{-\kappa x}$, $\kappa = \frac{\sqrt{2m(V_0-E)}}{\hbar}$.
In region III ($x>a$): $\psi_{III}(x) = T e^{ikx}$.

Matching boundary conditions of $\psi$ and $d\psi/dx$ at $x=0$ and $x=a$ yields the exact Transmission Probability $T$:

$$T = \frac{1}{1 + \frac{V_0^2}{4E(V_0 - E)} \sinh^2(\kappa a)}$$

#### 4.4.2 High/Wide Barrier Approximation ($\kappa a \gg 1$)
Since $\sinh(\kappa a) \approx \frac{1}{2} e^{\kappa a}$:

$$T \approx 16 \frac{E}{V_0} \left(1 - \frac{E}{V_0}\right) e^{-2\kappa a}$$

#### 4.4.3 WKB Approximation for Arbitrary Barrier Shapes
For a spatially varying potential barrier $V(x) > E$ between turning points $x_1$ and $x_2$:

$$T \approx \exp\left( -2 \int_{x_1}^{x_2} \sqrt{\frac{2m}{\hbar^2} [V(x) - E]} \, dx \right)$$

---

### 4.5 The One-Dimensional Harmonic Oscillator

#### 4.5.1 Hamiltonian and Ladder Operator Algebra
$$\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2 \hat{x}^2$$

Define non-Hermitian ladder operators (Annihilation $\hat{a}$, Creation $\hat{a}^\dagger$):

$$\hat{a} = \sqrt{\frac{m\omega}{2\hbar}} \left( \hat{x} + \frac{i}{m\omega} \hat{p} \right), \quad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}} \left( \hat{x} - \frac{i}{m\omega} \hat{p} \right)$$

##### Key Operator Relations
* **Inverting for $\hat{x}$ and $\hat{p}$:**

  $$\hat{x} = \sqrt{\frac{\hbar}{2m\omega}} (\hat{a} + \hat{a}^\dagger)$$

  $$\hat{p} = -i \sqrt{\frac{m\hbar\omega}{2}} (\hat{a} - \hat{a}^\dagger)$$

* **Fundamental Commutator:** $[\hat{a}, \hat{a}^\dagger] = \mathbb{I}$
* **Hamiltonian in terms of Ladder Operators:**

  $$\hat{H} = \hbar\omega \left( \hat{a}^\dagger \hat{a} + \frac{1}{2} \right) = \hbar\omega \left( \hat{N} + \frac{1}{2} \right)$$

  where $\hat{N} = \hat{a}^\dagger \hat{a}$ is the Hermitian **Number Operator**.

#### 4.5.2 Derivation of Energy Spectrum
Let $|n\rangle$ be an eigenstate of $\hat{N}$ with eigenvalue $n$: $\hat{N}|n\rangle = n|n\rangle$.
1. $[\hat{N}, \hat{a}] = [\hat{a}^\dagger \hat{a}, \hat{a}] = [\hat{a}^\dagger, \hat{a}]\hat{a} = -\hat{a}$
2. $[\hat{N}, \hat{a}^\dagger] = [\hat{a}^\dagger \hat{a}, \hat{a}^\dagger] = \hat{a}^\dagger [\hat{a}, \hat{a}^\dagger] = +\hat{a}^\dagger$
3. Compute $\hat{N}(\hat{a}|n\rangle) = (\hat{a}\hat{N} - \hat{a})|n\rangle = (n-1)(\hat{a}|n\rangle)$. Thus, $\hat{a}|n\rangle$ lowers the eigenvalue by 1.
4. Compute norm: $\| \hat{a}|n\rangle \|^2 = \langle n | \hat{a}^\dagger \hat{a} | n \rangle = n \ge 0$.
5. The sequence terminates at ground state $|0\rangle$ such that $\hat{a}|0\rangle = 0 \implies n_0 = 0$.
6. Thus, $n$ must be an integer $n = 0, 1, 2, 3, \dots$.

##### Energy Eigenvalues
$$E_n = \left( n + \frac{1}{2} \right) \hbar\omega, \quad n = 0, 1, 2, \dots$$

* Zero-Point Energy: $E_0 = \frac{1}{2}\hbar\omega$ (Consequence of uncertainty principle).

##### Ladder Actions on Basis States
$$\hat{a}|n\rangle = \sqrt{n} \, |n-1\rangle$$

$$\hat{a}^\dagger|n\rangle = \sqrt{n+1} \, |n+1\rangle$$

#### 4.5.3 Coordinate Representation Wavefunctions
Using $\hat{a}|0\rangle = 0 \implies \sqrt{\frac{m\omega}{2\hbar}}\left(x + \frac{\hbar}{m\omega}\frac{d}{dx}\right) \psi_0(x) = 0$:

$$\psi_0(x) = \left( \frac{m\omega}{\pi\hbar} \right)^{1/4} \exp\left( -\frac{m\omega}{2\hbar} x^2 \right)$$

Higher excited states via $\psi_n(x) = \frac{(\hat{a}^\dagger)^n}{\sqrt{n!}} \psi_0(x)$:

$$\psi_n(x) = \left( \frac{m\omega}{\pi\hbar} \right)^{1/4} \frac{1}{\sqrt{2^n n!}} \, H_n\left(\sqrt{\frac{m\omega}{\hbar}} x\right) \, \exp\left( -\frac{m\omega}{2\hbar} x^2 \right)$$

where $H_n(\xi)$ are the **Hermite Polynomials** ($H_0=1, H_1=2\xi, H_2=4\xi^2-2, H_3=8\xi^3-12\xi$).

#### 4.5.4 Expectation Value Master Formulas via Ladder Algebra
For any stationary state $|n\rangle$:
* $\langle n | \hat{x} | n \rangle = 0$
* $\langle n | \hat{p} | n \rangle = 0$
* $\langle n | \hat{x}^2 | n \rangle = \frac{\hbar}{2m\omega} \langle n | (\hat{a} + \hat{a}^\dagger)^2 | n \rangle = \frac{\hbar}{2m\omega} \langle n | (\hat{a}\hat{a}^\dagger + \hat{a}^\dagger\hat{a}) | n \rangle = \frac{\hbar}{m\omega} \left( n + \frac{1}{2} \right)$
* $\langle n | \hat{p}^2 | n \rangle = -\frac{m\hbar\omega}{2} \langle n | (\hat{a} - \hat{a}^\dagger)^2 | n \rangle = m\hbar\omega \left( n + \frac{1}{2} \right)$
* **Equipartition Theorem / Virial Theorem:**

  $$\langle T \rangle = \langle V \rangle = \frac{1}{2} E_n = \frac{1}{2} \left( n + \frac{1}{2} \right) \hbar\omega$$

---

## SECTION 5: MOTION IN A CENTRAL POTENTIAL & HYDROGEN ATOM

### 5.1 Central Potential Reduction
For a 3D potential depending strictly on radius $V(\mathbf{r}) = V(r)$, the Hamiltonian separates in spherical coordinates $(r, \theta, \phi)$:

$$\nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial}{\partial r} \right) - \frac{\hat{L}^2}{\hbar^2 r^2}$$

$$\hat{H} = -\frac{\hbar^2}{2m} \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial}{\partial r} \right) + \frac{\hat{L}^2}{2m r^2} + V(r)$$

Ansatz: $\psi(r, \theta, \phi) = R(r) Y_{lm}(\theta, \phi)$.

---

### 5.2 Orbital Angular Momentum

#### 5.2.1 Vector Definition and Operator Components
$$\mathbf{L} = \mathbf{r} \times \mathbf{p}$$

* $L_x = y p_z - z p_y = -i\hbar \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right)$
* $L_y = z p_x - x p_z = -i\hbar \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right)$
* $L_z = x p_y - y p_x = -i\hbar \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right) = -i\hbar \frac{\partial}{\partial \phi}$

#### 5.2.2 Angular Momentum Algebra and Commutators
$$[L_i, L_j] = i\hbar \, \epsilon_{ijk} L_k$$

$$[L^2, L_i] = 0 \quad (\text{for } i = x, y, z)$$

#### 5.2.3 Ladder Operators $L_+$ and $L_-$
$$L_\pm = L_x \pm i L_y$$

* $[L_z, L_\pm] = \pm \hbar L_\pm$
* $[L_+, L_-] = 2\hbar L_z$
* $L^2 = L_\mp L_\pm + L_z^2 \pm \hbar L_z$

##### Eigenvalue Equations
$$L^2 |l, m\rangle = l(l+1)\hbar^2 |l, m\rangle, \quad l = 0, 1, 2, \dots$$

$$L_z |l, m\rangle = m\hbar |l, m\rangle, \quad m = -l, -l+1, \dots, +l$$

$$L_\pm |l, m\rangle = \hbar \sqrt{l(l+1) - m(m\pm 1)} \, |l, m\pm 1\rangle$$

#### 5.2.4 Spherical Harmonics $Y_{lm}(\theta, \phi)$
Spherical harmonics are joint eigenfunctions of $L^2$ and $L_z$:

$$Y_{lm}(\theta, \phi) = (-1)^m \sqrt{\frac{(2l+1)}{4\pi} \frac{(l-m)!}{(l+m)!}} \, P_l^m(\cos\theta) \, e^{i m \phi}$$

* **Orthonormality:** $\int_0^{2\pi} d\phi \int_0^\pi \sin\theta d\theta \, Y_{l'm'}^*(\theta, \phi) Y_{lm}(\theta, \phi) = \delta_{ll'} \delta_{mm'}$
* **Parity:** Spatial inversion $\mathbf{r} \to -\mathbf{r} \implies (r, \theta, \phi) \to (r, \pi-\theta, \phi+\pi)$:

  $$\hat{P} Y_{lm}(\theta, \phi) = Y_{lm}(\pi-\theta, \phi+\pi) = (-1)^l Y_{lm}(\theta, \phi)$$

---

### 5.3 The Hydrogen Atom
Electrostatic Coulomb Potential: $V(r) = -\frac{Z e^2}{4\pi\epsilon_0 r} = -\frac{e^2}{r}$ (in CGS units).

#### 5.3.1 Radial Equation and Substitutions
Substituting $\psi(r, \theta, \phi) = R_{nl}(r) Y_{lm}(\theta, \phi)$ into TISE and writing $u(r) = r R(r)$:

$$-\frac{\hbar^2}{2\mu} \frac{d^2 u}{dr^2} + \left[ V(r) + \frac{l(l+1)\hbar^2}{2\mu r^2} \right] u(r) = E u(r)$$

where $V_{eff}(r) = V(r) + \frac{l(l+1)\hbar^2}{2\mu r^2}$ is the **Effective Potential**.

```
 V_eff(r) ^
          |      /  Centrifugal Barrier ~ 1/r^2
          |     /
          |    /-----\
          |   /       \____  Effective Potential
  0 ------+---------------------> r
          |  \       /
          |   \_____/   Coulomb Potential ~ -1/r
```

#### 5.3.2 Energy Eigenvalues & Bohr Radius
Solving via series solution (Associated Laguerre Polynomials):

$$E_n = -\frac{\mu Z^2 e^4}{32 \pi^2 \epsilon_0^2 \hbar^2 n^2} = -\frac{13.6 \, Z^2}{n^2} \text{ eV}, \quad n = 1, 2, 3, \dots$$

Bohr Radius definition: $a_0 = \frac{4\pi\epsilon_0\hbar^2}{\mu e^2} \approx 0.529 \text{ \AA}$.

#### 5.3.3 Quantum Numbers and Degeneracy
* Principal quantum number: $n = 1, 2, 3, \dots$
* Azimuthal quantum number: $l = 0, 1, 2, \dots, n-1$
* Magnetic quantum number: $m_l = -l, -l+1, \dots, +l$ (Total $2l+1$ values).

##### Degeneracy Count
1. **Excluding Spin:** $g_n = \sum_{l=0}^{n-1} (2l+1) = n^2$
2. **Including Spin ($s=1/2$):** $g_n = 2 n^2$

#### 5.3.4 Radial Probability Distributions & Radial Expectation Values
Radial probability density: $P(r) dr = |R_{nl}(r)|^2 r^2 dr$.

##### Analytical Expectation Values for $\langle r^k \rangle$ in Hydrogen
* $\langle r \rangle_{n,l} = \frac{a_0}{2 Z} \left[ 3n^2 - l(l+1) \right]$
* $\langle r^2 \rangle_{n,l} = \frac{a_0^2 n^2}{2 Z^2} \left[ 5n^2 + 1 - 3l(l+1) \right]$
* $\left\langle \frac{1}{r} \right\rangle_{n,l} = \frac{Z}{a_0 n^2}$
* $\left\langle \frac{1}{r^2} \right\rangle_{n,l} = \frac{Z^2}{a_0^2 n^3 (l + 1/2)}$
* $\left\langle \frac{1}{r^3} \right\rangle_{n,l} = \frac{Z^3}{a_0^3 n^3 l (l + 1/2)(l + 1)}$

##### Ground State ($n=1, l=0, m=0$) Wavefunction
$$R_{10}(r) = 2 \left(\frac{Z}{a_0}\right)^{3/2} e^{-Zr/a_0}$$

Most probable radius: $r_{mp} = \frac{a_0}{Z}$.

---

## SECTION 6: SPIN, ANGULAR MOMENTUM ALGEBRA & STERN-GERLACH EXPERIMENT

### 6.1 Spin Angular Momentum & Pauli Matrices
Spin $\mathbf{S}$ is an intrinsic, non-spatial angular momentum. For spin-1/2 particles ($s=1/2$):

$$\mathbf{S} = \frac{\hbar}{2} \boldsymbol{\sigma}$$

where $\boldsymbol{\sigma} = (\sigma_x, \sigma_y, \sigma_z)$ are the **Pauli Spin Matrices**:

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

#### 6.1.1 Matrix Properties of Pauli Matrices
1. **Hermitian:** $\sigma_i^\dagger = \sigma_i$
2. **Traceless:** $\operatorname{Tr}(\sigma_i) = 0$
3. **Unitary & Involutory:** $\sigma_i^2 = \mathbb{I} \implies \sigma_i^{-1} = \sigma_i$
4. **Determinant:** $\operatorname{Det}(\sigma_i) = -1$
5. **Commutator Algebra:** $[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k$
6. **Anti-commutator Algebra:** $\{\sigma_i, \sigma_j\} = \sigma_i \sigma_j + \sigma_j \sigma_i = 2 \delta_{ij} \mathbb{I}$
7. **Combined Product Master Identity:**

   $$\sigma_i \sigma_j = \delta_{ij} \mathbb{I} + i \epsilon_{ijk} \sigma_k$$

8. **Vector Identity (Crucial for CSIR NET):** For any vectors $\mathbf{A}$ and $\mathbf{B}$ commuting with $\boldsymbol{\sigma}$:

   $$(\boldsymbol{\sigma} \cdot \mathbf{A})(\boldsymbol{\sigma} \cdot \mathbf{B}) = (\mathbf{A} \cdot \mathbf{B}) \mathbb{I} + i \boldsymbol{\sigma} \cdot (\mathbf{A} \times \mathbf{B})$$

#### 6.1.2 Spinors (Eigenstates of $S_z$)
$$\chi_+ = \begin{pmatrix} 1 \\ 0 \end{pmatrix} = |s=1/2, m_s=+1/2\rangle \quad (\text{Spin Up})$$

$$\chi_- = \begin{pmatrix} 0 \\ 1 \end{pmatrix} = |s=1/2, m_s=-1/2\rangle \quad (\text{Spin Down})$$

---

### 6.2 Addition of Angular Momenta

#### 6.2.1 General Rules for $\mathbf{J} = \mathbf{J}_1 + \mathbf{J}_2$
The total angular momentum quantum number $j$ spans values in steps of 1:

$$|j_1 - j_2| \le j \le j_1 + j_2$$

For each $j$, the magnetic quantum number $m$ takes $2j+1$ values: $m = -j, -j+1, \dots, +j$.

#### 6.2.2 Uncoupled vs. Coupled Basis Transformations
* **Uncoupled Basis:** $|j_1, m_1, j_2, m_2\rangle$ (Simultaneous eigenfunctions of $J_1^2, J_{1z}, J_2^2, J_{2z}$). Total states = $(2j_1+1)(2j_2+1)$.
* **Coupled Basis:** $|j_1, j_2, j, m\rangle$ (Simultaneous eigenfunctions of $J_1^2, J_2^2, J^2, J_z$).
* Expansion via **Clebsch-Gordan (CG) Coefficients**:

  $$|j, m\rangle = \sum_{m_1, m_2} C_{m_1 m_2 m}^{j_1 j_2 j} |j_1, m_1\rangle |j_2, m_2\rangle$$

##### Selection Rules for CG Coefficients
1. $C_{m_1 m_2 m}^{j_1 j_2 j} \neq 0$ ONLY IF $m = m_1 + m_2$.
2. $|j_1 - j_2| \le j \le j_1 + j_2$.

#### 6.2.3 Explicit Coupling of Two Spin-1/2 Particles ($s_1 = 1/2, s_2 = 1/2$)
Allowed total spin values: $s = 1/2 + 1/2 = 1$ (Triplet) or $s = 1/2 - 1/2 = 0$ (Singlet).

##### Triplet States ($s = 1$, Symmetric under particle exchange)
$$|1, 1\rangle = |\uparrow\uparrow\rangle$$

$$|1, 0\rangle = \frac{1}{\sqrt{2}} (|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$$

$$|1, -1\rangle = |\downarrow\downarrow\rangle$$

##### Singlet State ($s = 0$, Anti-symmetric under particle exchange)
$$|0, 0\rangle = \frac{1}{\sqrt{2}} (|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)$$

---

### 6.3 Stern-Gerlach Experiment
The Stern-Gerlach (SG) experiment provides direct empirical proof of space quantization and electron intrinsic spin.

```
       N (Pointed Pole Piece)
       /\
      /  \
====>  *   ===========>  Deflected Beam (+z)
      \  /              ===========>  Deflected Beam (-z)
       \/
       S (Flat Pole Piece)
```

#### 6.3.1 Mathematical Analysis
* Magnetic dipole moment of atom: $\boldsymbol{\mu} = g \frac{q}{2m} \mathbf{S} = \gamma \mathbf{S}$.
* Inhomogeneous magnetic field along $z$-axis: $\mathbf{B} = B_0 \hat{k} + z \left( \frac{\partial B_z}{\partial z} \right) \hat{k}$.
* Potential Energy: $U = -\boldsymbol{\mu} \cdot \mathbf{B} = -\mu_z B_z$.
* Deflecting Deflection Force:

  $$\mathbf{F}_z = -\boldsymbol{\nabla} U = \boldsymbol{\nabla} (\boldsymbol{\mu} \cdot \mathbf{B}) \approx \mu_z \left( \frac{\partial B_z}{\partial z} \right) \hat{k} = g_s \left( \frac{e}{2m} \right) S_z \left( \frac{\partial B_z}{\partial z} \right) \hat{k}$$

#### 6.3.2 Experimental Findings & Quantum Interpretation
1. Classical physics predicts a **continuous beam trace** on the detector screen.
2. Experimentally (using ground state Silver $Ag$ atoms with $L=0, S=1/2$), the beam splits into **exactly 2 discrete spots**.
3. Splitting into $2s + 1$ components yields $2s + 1 = 2 \implies s = 1/2$. This proved intrinsic spin $s=1/2$ and spatial quantization of $S_z = \pm \hbar/2$.

---

## SECTION 7: APPROXIMATION METHODS

### 7.1 Time-Independent Perturbation Theory (TIPT)
Applies when Hamiltonian $\hat{H} = \hat{H}_0 + \lambda \hat{H}'$, where $\hat{H}_0$ is exactly solvable and $\lambda \hat{H}'$ is a small perturbation.

#### 7.1.1 Non-Degenerate Perturbation Theory
Expand energy and states as series: $E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + \dots$

##### First-Order Energy Correction
$$E_n^{(1)} = \langle n^{(0)} | \hat{H}' | n^{(0)} \rangle$$

##### First-Order State Vector Correction
$$|n^{(1)}\rangle = \sum_{k \neq n} \frac{\langle k^{(0)} | \hat{H}' | n^{(0)} \rangle}{E_n^{(0)} - E_k^{(0)}} |k^{(0)}\rangle$$

##### Second-Order Energy Correction
$$E_n^{(2)} = \sum_{k \neq n} \frac{\left| \langle k^{(0)} | \hat{H}' | n^{(0)} \rangle \right|^2}{E_n^{(0)} - E_k^{(0)}}$$

* **Important Theorem:** For the **ground state** ($n=0$), $E_0^{(0)} - E_k^{(0)} < 0$ for all $k \neq 0$. Therefore, **the second-order energy correction to the ground state is ALWAYS negative ($E_0^{(2)} \le 0$)**.

---

#### 7.1.2 Degenerate Perturbation Theory
When an unperturbed level $E_n^{(0)}$ is $g$-fold degenerate, ordinary TIPT diverges due to zero denominators.

##### Procedure
1. Identify the $g$-dimensional degenerate subspace spanned by $\{|\psi_1^{(0)}\rangle, |\psi_2^{(0)}\rangle, \dots, |\psi_g^{(0)}\rangle\}$.
2. Construct the $g \times g$ matrix representation of the perturbation operator $W_{ij} = \langle \psi_i^{(0)} | \hat{H}' | \psi_j^{(0)} \rangle$.
3. Solve the **Secular Determinant**:

   $$\operatorname{Det}\left( W_{ij} - E^{(1)} \delta_{ij} \right) = 0$$

4. The roots $E^{(1)}$ are the 1st-order energy corrections, lifting the degeneracy.

---

#### 7.1.3 Applications of TIPT

##### Application 1: Stark Effect in Hydrogen ($n=1$ and $n=2$)
Perturbation in electric field $\mathbf{E} = E_0 \hat{k}$: $\hat{H}' = - \boldsymbol{\mu} \cdot \mathbf{E} = e E_0 z = e E_0 r \cos\theta$.

1. **Ground State ($n=1$):**
   * $E_1^{(1)} = \langle 1,0,0 | e E_0 z | 1,0,0 \rangle = 0$ (due to odd parity of $z$).
   * No linear Stark effect. Shows only **quadratic Stark effect** ($E \propto E_0^2$).

2. **First Excited State ($n=2$, 4-fold degenerate: $|200\rangle, |210\rangle, |211\rangle, |21-1\rangle$):**
   * Non-zero matrix element occurs ONLY between states of opposite parity ($\Delta l = \pm 1, \Delta m = 0$):
     $$\langle 200 | e E_0 z | 210 \rangle = -3 e E_0 a_0$$
   * Secular Matrix in subspace $\{|200\rangle, |210\rangle, |211\rangle, |21-1\rangle\}$:

     $$W = \begin{pmatrix} 0 & -3eE_0 a_0 & 0 & 0 \\ -3eE_0 a_0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

   * **1st-Order Energy Splittings:**

     $$E^{(1)} = +3 e E_0 a_0, \quad 0, \quad 0, \quad -3 e E_0 a_0$$

   * Thus, the $n=2$ energy level splits linearly into **three distinct levels**.

```
 Unperturbed (n=2)                     Linear Stark Shift
 ---------------- (4-fold deg)  ------ +3 e E_0 a_0
                                ------ 0 (2-fold degenerate: m = +1, -1)
                                ------ -3 e E_0 a_0
```

---

##### Application 2: Fine Structure of Hydrogen
Fine structure corrections include two comparable $O(\alpha^2)$ perturbations ($\alpha \approx 1/137$):

1. **Relativistic Kinematic Correction ($\hat{H}_{rel}'$):**
   $$\hat{H}_{rel}' = \frac{p^4}{8m^3 c^2} \implies E_{rel}^{(1)} = -\frac{E_n^2}{2 m c^2} \left[ \frac{4n}{l + 1/2} - 3 \right]$$

2. **Spin-Orbit Coupling ($\hat{H}_{SO}'$):**
   $$\hat{H}_{SO}' = \frac{e^2}{8\pi\epsilon_0 m^2 c^2 r^3} \mathbf{L} \cdot \mathbf{S} = \frac{e^2 \hbar^2}{16\pi\epsilon_0 m^2 c^2 r^3} [j(j+1) - l(l+1) - s(s+1)]$$

3. **Combined Fine-Structure Energy Formula:**

   $$E_{FS}^{(1)} = E_n \frac{\alpha^2}{n^2} \left( \frac{n}{j + 1/2} - \frac{3}{4} \right)$$

   * **Key Feature:** The fine-structure energy correction depends strictly on total $j$, NOT individually on $l$.

---

### 7.2 The Variational Method
Used to approximate the ground state energy $E_0$ of a system whose TISE cannot be solved analytically.

#### 7.2.1 The Variational Theorem (Upper Bound Theorem)
For any arbitrary, well-behaved trial wave function $|\psi_{trial}\rangle$:

$$E_{var} = \frac{\langle \psi_{trial} | \hat{H} | \psi_{trial} \rangle}{\langle \psi_{trial} | \psi_{trial} \rangle} \ge E_0$$

##### Proof
Expand $|\psi_{trial}\rangle$ in the complete orthonormal basis of true eigenstates $\{|\phi_n\rangle\}$ of $\hat{H}$ (where $\hat{H}|\phi_n\rangle = E_n |\phi_n\rangle$):

$$|\psi_{trial}\rangle = \sum_n c_n |\phi_n\rangle$$

$$\langle \psi_{trial} | \hat{H} | \psi_{trial} \rangle = \sum_n |c_n|^2 E_n \ge E_0 \sum_n |c_n|^2 = E_0 \langle \psi_{trial} | \psi_{trial} \rangle$$

Dividing both sides by $\langle \psi_{trial} | \psi_{trial} \rangle$ proves $E_{var} \ge E_0$.

#### 7.2.2 Optimization Optimization Algorithm
1. Choose a parameterized trial function $\psi(x; \alpha, \beta, \dots)$.
2. Calculate $E(\alpha, \beta, \dots) = \frac{\langle \psi | \hat{H} | \psi \rangle}{\langle \psi | \psi \rangle}$.
3. Minimize with respect to parameters: $\frac{\partial E}{\partial \alpha} = 0, \frac{\partial E}{\partial \beta} = 0, \dots$.
4. Substitute optimal parameters back into $E(\alpha_{opt})$ to obtain the best upper-bound estimate for $E_0$.

---

### 7.3 Time-Dependent Perturbation Theory (TDPT) & Fermi's Golden Rule
Deals with transitions induced by time-varying potentials $\hat{H}(t) = \hat{H}_0 + \hat{H}'(t)$.

#### 7.3.1 Transition Amplitude Derivation
In the Interaction Picture, state $|\Psi(t)\rangle = \sum_k c_k(t) e^{-i E_k t/\hbar} |k\rangle$.

The differential equation governing expansion coefficients $c_b(t)$ is:

$$\frac{d c_b(t)}{dt} = -\frac{i}{\hbar} \sum_k c_k(t) e^{i \omega_{bk} t} \langle b | \hat{H}'(t) | k \rangle, \quad \text{where } \omega_{bk} = \frac{E_b - E_k}{\hbar}$$

Assuming initial state $c_a(0) = 1$ and $c_k(0) = 0$ for $k \neq a$, the **First-Order Transition Amplitude** for transition $a \to b$ is:

$$c_{a \to b}^{(1)}(t) = -\frac{i}{\hbar} \int_0^t \langle b | \hat{H}'(t') | a \rangle \, e^{i \omega_{ba} t'} \, dt'$$

---

#### 7.3.2 Harmonic Perturbation & Fermi's Golden Rule
For a sinusoidal perturbation $\hat{H}'(t) = \hat{V} e^{-i\omega t} + \hat{V}^\dagger e^{i\omega t}$:

$$c_{a \to b}^{(1)}(t) = -\frac{i}{\hbar} \langle b | \hat{V} | a \rangle \left[ \frac{e^{i(\omega_{ba} - \omega)t} - 1}{i(\omega_{ba} - \omega)} \right]$$

The transition probability $P_{a \to b}(t) = |c_{a \to b}^{(1)}(t)|^2$ contains the kernel $\frac{\sin^2[(\omega_{ba}-\omega)t/2]}{(\omega_{ba}-\omega)^2}$.

In the limit $t \to \infty$, using the representation of Dirac delta: $\lim_{t\to\infty} \frac{\sin^2(\alpha t)}{\pi t \alpha^2} = \delta(\alpha)$:

$$\Gamma_{a \to b} = \frac{d P_{a \to b}}{dt} = \frac{2\pi}{\hbar} \left| \langle b | \hat{V} | a \rangle \right|^2 \delta(E_b - E_a - \hbar\omega)$$

When transitioning into a continuum of final states with **Density of States** $\rho(E_b)$:

$$\Gamma_{a \to b} = \frac{2\pi}{\hbar} \left| \mathcal{M}_{ba} \right|^2 \rho(E_b)$$

This is **Fermi's Golden Rule**.

---

#### 7.3.3 Electric Dipole Selection Rules
For transitions induced by electromagnetic radiation (Dipole Operator $\mathbf{D} = -e\mathbf{r}$):

1. **Azimuthal Quantum Number:** $\Delta l = l_b - l_a = \pm 1$  (No $l=0 \to l=0$ transitions).
2. **Magnetic Quantum Number:** $\Delta m_l = m_b - m_a = 0, \pm 1$.
   * $\Delta m_l = 0 \implies$ Light polarized parallel to $z$-axis ($\pi$-polarization).
   * $\Delta m_l = \pm 1 \implies$ Light polarized in $xy$-plane ($\sigma^\pm$-polarization).

---

## SECTION 8: IDENTICAL PARTICLES, PAULI PRINCIPLE & SPIN-STATISTICS

### 8.1 Permutation Operator and Statistics
For a system of two identical particles, define the **Permutation Operator** $\hat{P}_{12}$:

$$\hat{P}_{12} \psi(\mathbf{r}_1, q_1; \, \mathbf{r}_2, q_2) = \psi(\mathbf{r}_2, q_2; \, \mathbf{r}_1, q_1)$$

Since $\hat{P}_{12}^2 = \mathbb{I}$, the eigenvalues of $\hat{P}_{12}$ are $\lambda = \pm 1$.

#### 8.1.1 Bosons vs. Fermions Classification
1. **Symmetric Wavefunctions ($\lambda = +1$):**
   $$\psi(1, 2) = +\psi(2, 1)$$
   * Associated with **Bosons** (particles with integer spin: $s = 0, 1, 2, \dots$).
   * Obey **Bose-Einstein Statistics**.

2. **Antisymmetric Wavefunctions ($\lambda = -1$):**
   $$\psi(1, 2) = -\psi(2, 1)$$
   * Associated with **Fermions** (particles with half-integer spin: $s = 1/2, 3/2, 5/2, \dots$).
   * Obey **Fermi-Dirac Statistics**.

#### 8.1.2 Spin-Statistics Theorem
Originating from relativistic quantum field theory (Pauli, 1940), this theorem dictates that integer-spin fields MUST be quantized using commutators (Bosons), while half-integer spin fields MUST be quantized using anti-commutators (Fermions).

---

### 8.2 Pauli Exclusion Principle & Slater Determinants

#### 8.2.1 Pauli Exclusion Principle
No two identical fermions can occupy the exact same quantum state simultaneously.
* *Proof:* If two fermions occupy identical single-particle state $\phi_\alpha$, then $\psi(1,2) = \phi_\alpha(1)\phi_\alpha(2)$. Antisymmetrization requires $\psi(1,2) = \phi_\alpha(1)\phi_\alpha(2) - \phi_\alpha(2)\phi_\alpha(1) \equiv 0$.

#### 8.2.2 Slater Determinant
For $N$ identical fermions in single-particle spin-orbitals $\chi_j(\mathbf{x}_i)$:

$$\Psi(\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_N) = \frac{1}{\sqrt{N!}} \begin{vmatrix} \chi_1(\mathbf{x}_1) & \chi_2(\mathbf{x}_1) & \cdots & \chi_N(\mathbf{x}_1) \\ \chi_1(\mathbf{x}_2) & \chi_2(\mathbf{x}_2) & \cdots & \chi_N(\mathbf{x}_2) \\ \vdots & \vdots & \ddots & \vdots \\ \chi_1(\mathbf{x}_N) & \chi_2(\mathbf{x}_N) & \cdots & \chi_N(\mathbf{x}_N) \end{vmatrix}$$

Swapping two particles corresponds to interchanging two rows, automatically producing a factor of $-1$.

---

### 8.3 Exchange Interaction & Helium Atom Physics
For a 2-electron system (e.g., Helium atom), the total state function splits into spatial and spin parts:

$$\Psi_{total}(1,2) = \psi_{space}(\mathbf{r}_1, \mathbf{r}_2) \otimes \chi_{spin}(1,2)$$

To ensure $\Psi_{total}$ is antisymmetric ($\lambda = -1$):
* If $\psi_{space}$ is **Symmetric** ($\mathcal{S}$), $\chi_{spin}$ must be **Singlet** ($\mathcal{A}, s=0$). $\implies$ **Para-Helium**
* If $\psi_{space}$ is **Antisymmetric** ($\mathcal{A}$), $\chi_{spin}$ must be **Triplet** ($\mathcal{S}, s=1$). $\implies$ **Ortho-Helium**

#### Direct and Exchange Integrals
The Coulomb repulsion energy $V_e = \frac{e^2}{4\pi\epsilon_0 |\mathbf{r}_1 - \mathbf{r}_2|}$ yields two terms:

1. **Direct Coulomb Integral ($J > 0$):**
   $$J = \iint |\psi_a(\mathbf{r}_1)|^2 \frac{e^2}{4\pi\epsilon_0 |\mathbf{r}_1 - \mathbf{r}_2|} |\psi_b(\mathbf{r}_2)|^2 \, d^3\mathbf{r}_1 d^3\mathbf{r}_2$$

2. **Exchange Integral ($K > 0$):**
   $$K = \iint \psi_a^*(\mathbf{r}_1) \psi_b^*(\mathbf{r}_2) \frac{e^2}{4\pi\epsilon_0 |\mathbf{r}_1 - \mathbf{r}_2|} \psi_b(\mathbf{r}_1) \psi_a(\mathbf{r}_2) \, d^3\mathbf{r}_1 d^3\mathbf{r}_2$$

##### Energy Levels of Excited Helium States
* **Para-helium (Singlet State, $s=0$):**
  $$E_{para} = E_a + E_b + J + K$$

* **Ortho-helium (Triplet State, $s=1$):**
  $$E_{ortho} = E_a + E_b + J - K$$

```
 Unperturbed Level E_a + E_b + J
 ------------------------------------  <--- Baseline with direct Coulomb
        |  +K  ----------------------  Para-Helium (Singlet, s=0)
        |  
        |  -K  ----------------------  Ortho-Helium (Triplet, s=1)
```

* **Conclusion:** The **Triplet state (Ortho-helium) lies lower in energy than the Singlet state (Para-helium)** by an exchange splitting of $\Delta E = 2K$.

---

## SECTION 9: HIGH-YIELD CSIR NET FORMULA MATRIX & SHORTCUT CHEAT-SHEET

### 9.1 Commutator Identities & Short-Cut Table

| Commutator | Result |
| :--- | :--- |
| $[\hat{x}^n, \hat{p}]$ | $i\hbar n \hat{x}^{n-1}$ |
| $[\hat{x}, \hat{p}^n]$ | $i\hbar n \hat{p}^{n-1}$ |
| $[\hat{L}_x, \hat{L}_y]$ | $i\hbar \hat{L}_z$ |
| $[\hat{L}^2, \hat{L}_z]$ | $0$ |
| $[\hat{L}_z, \phi]$ | $-i\hbar$ |
| $[\hat{L}_z, \cos\phi]$ | $i\hbar \sin\phi$ |
| $[\hat{L}_z, \sin\phi]$ | $-i\hbar \cos\phi$ |
| $[\sigma_x, \sigma_y]$ | $2i \sigma_z$ |
| $\{\sigma_x, \sigma_y\}$ | $0$ |

---

### 9.2 Key Virial Theorem Relations ($\langle T \rangle$ vs. $\langle V \rangle$)
If potential $V(r) \propto r^k$, then:

$$2\langle T \rangle = k \langle V \rangle$$

1. **Harmonic Oscillator ($V \propto x^2 \implies k=2$):**
   $$2\langle T \rangle = 2\langle V \rangle \implies \langle T \rangle = \langle V \rangle = \frac{1}{2} E_n$$

2. **Coulomb Potential ($V \propto r^{-1} \implies k=-1$):**
   $$2\langle T \rangle = -\langle V \rangle \implies \langle T \rangle = -E_n, \quad \langle V \rangle = 2 E_n$$

---

### 9.3 Quick Reference Summary Table for Canonical Systems

| System | Energy Eigenvalues ($E_n$) | Degeneracy ($g$) | Key Feature / Expectation |
| :--- | :--- | :--- | :--- |
| **1D Infinite Box ($0 \le x \le a$)** | $\frac{n^2 \pi^2 \hbar^2}{2m a^2}$ ($n=1,2,\dots$) | 1 (Non-degenerate) | $\langle x \rangle = a/2$; $\Delta x \Delta p > \hbar/2$ |
| **1D Harmonic Oscillator** | $(n + 1/2)\hbar\omega$ ($n=0,1,\dots$) | 1 (Non-degenerate) | $\langle T \rangle = \langle V \rangle = E_n/2$ |
| **3D Isotropic Oscillator** | $(N + 3/2)\hbar\omega$ ($N=n_x+n_y+n_z$) | $g_N = \frac{(N+1)(N+2)}{2}$ | Symmetric potential, separable in cartesian/spherical |
| **1D Attractive Delta Potential** | $E = -\frac{m\alpha^2}{2\hbar^2}$ | Single bound state | Continuous spectrum for $E > 0$ |
| **Hydrogen Atom (Ground State)** | $-13.6 \text{ eV}$ | $g_n = n^2$ (no spin), $2n^2$ (with spin) | $\langle r \rangle = \frac{3}{2} a_0$, $r_{mp} = a_0$ |
