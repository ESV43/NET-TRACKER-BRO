# CSIR NET PHYSICAL SCIENCE: ADVANCED STUDY MODULE

---

# SECTION II: CLASSICAL MECHANICS

---

## 1. DYNAMICAL SYSTEMS, PHASE SPACE DYNAMICS, AND STABILITY ANALYSIS

### 1.1 Phase Space Representation and Trajectories
In Classical Mechanics, the state of a dynamical system with $f$ degrees of freedom is specified at any instant of time by $f$ generalized coordinates $q = (q_1, q_2, \dots, q_f)$ and $f$ generalized momenta $p = (p_1, p_2, \dots, p_f)$.

*   **Phase Space ($\Gamma$-Space):** A $2f$-dimensional Euclidean/Riemannian manifold spanned by the orthogonal axes $(q_1, \dots, q_f, p_1, \dots, p_f)$.
*   **Phase Trajectory:** A continuous curve in phase space parameterized by time $t$, given by the state vector $\mathbf{x}(t) = (\mathbf{q}(t), \mathbf{p}(t))$.

#### Fundamental Theorem of Phase Space Trajectories (Uniqueness)
For a time-independent Hamiltonian $H(q,p)$, Hamilton's equations of motion represent a set of $2f$ first-order ordinary differential equations:
$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i} \quad (i = 1, 2, \dots, f)$$

By the Picard–Lindelöf theorem, if $H(q,p)$ is continuously differentiable ($C^1$), then through any point $(q_0, p_0) \in \Gamma$, there exists **one and only one trajectory**. 

$$\text{Key Consequence: Phase trajectories can NEVER cross each other in phase space.}$$

### 1.2 Liouville's Theorem
#### Statement
The phase space distribution function $\rho(q, p, t)$, which defines the density of system points in microstates, behaves like an incompressible fluid. The phase space volume $\Omega = \int dq \, dp$ occupied by a ensemble of system states is conserved under Hamiltonian time evolution.

#### Step-by-Step Derivation
Consider an infinitesimal hypercube in $2f$-dimensional phase space bounded by $[q_i, q_i + dq_i]$ and $[p_i, p_i + dp_i]$.

The total number of particles/states $N$ in a volume $V_\Gamma$ is:
$$N = \int_{\Omega} \rho(q_1 \dots q_f, p_1 \dots p_f, t) \, dq_1 \dots dq_f \, dp_1 \dots dp_f$$

The local conservation of phase points requires the continuity equation in phase space:
$$\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla}_{\Gamma} \cdot (\rho \mathbf{v}_{\Gamma}) = 0$$

where:
*   $\boldsymbol{\nabla}_{\Gamma} = \sum_{i=1}^f \left( \hat{\mathbf{e}}_{q_i} \frac{\partial}{\partial q_i} + \hat{\mathbf{e}}_{p_i} \frac{\partial}{\partial p_i} \right)$
*   $\mathbf{v}_{\Gamma} = (\dot{q}_1, \dots, \dot{q}_f, \dot{p}_1, \dots, \dot{p}_f)$

Expanding the divergence term:
$$\boldsymbol{\nabla}_{\Gamma} \cdot (\rho \mathbf{v}_{\Gamma}) = \sum_{i=1}^f \left[ \frac{\partial}{\partial q_i}(\rho \dot{q}_i) + \frac{\partial}{\partial p_i}(\rho \dot{p}_i) \right] = \sum_{i=1}^f \left[ \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} + \rho \left( \frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} \right) \right]$$

Now, substitute Hamilton's equations ($\dot{q}_i = \frac{\partial H}{\partial p_i}$ and $\dot{p}_i = -\frac{\partial H}{\partial q_i}$):
$$\frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} = \frac{\partial}{\partial q_i}\left(\frac{\partial H}{\partial p_i}\right) + \frac{\partial}{\partial p_i}\left(-\frac{\partial H}{\partial q_i}\right) = \frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i \partial q_i} = 0$$

Thus, the phase space velocity field is divergence-free:
$$\boldsymbol{\nabla}_{\Gamma} \cdot \mathbf{v}_{\Gamma} = 0$$

Substituting this back into the continuity equation gives:
$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^f \left( \frac{\partial \rho}{\partial q_i}\dot{q}_i + \frac{\partial \rho}{\partial p_i}\dot{p}_i \right) = 0 \implies \frac{d\rho}{dt} = 0$$

$$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \{\rho, H\} = 0$$

### 1.3 Autonomous Systems and Fixed Point Analysis
An autonomous dynamical system in $n$ dimensions is described by:
$$\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}), \quad \mathbf{x} \in \mathbb{R}^n$$

*   **Fixed Points (Equilibrium / Singular Points):** Points $\mathbf{x}^* \in \mathbb{R}^n$ where $\mathbf{f}(\mathbf{x}^*) = \mathbf{0}$.

#### Linear Stability Analysis
To determine the stability of a fixed point $\mathbf{x}^*$, introduce a perturbation $\boldsymbol{\xi}(t) = \mathbf{x}(t) - \mathbf{x}^*$.
Expanding using Taylor series:
$$\dot{\boldsymbol{\xi}} = \dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}^* + \boldsymbol{\xi}) = \mathbf{f}(\mathbf{x}^*) + \mathbb{J}|_{\mathbf{x}^*} \boldsymbol{\xi} + \mathcal{O}(\boldsymbol{\xi}^2)$$

Since $\mathbf{f}(\mathbf{x}^*) = \mathbf{0}$, the linearized dynamics are governed by:
$$\dot{\boldsymbol{\xi}} = \mathbb{J} \boldsymbol{\xi}$$

where $\mathbb{J}$ is the **Jacobian Matrix** evaluated at $\mathbf{x}^*$:
$$\mathbb{J}_{ij} = \left. \frac{\partial f_i}{\partial x_j} \right|_{\mathbf{x} = \mathbf{x}^*}$$

The general solution is $\boldsymbol{\xi}(t) = \sum_{k=1}^n c_k \mathbf{v}_k e^{\lambda_k t}$, where $\lambda_k$ are the eigenvalues of $\mathbb{J}$ and $\mathbf{v}_k$ are the corresponding eigenvectors ($\mathbb{J}\mathbf{v}_k = \lambda_k \mathbf{v}_k$).

#### Classification of Fixed Points in 2D Systems ($n=2$)
For a 2D system with Jacobian $\mathbb{J} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
*   **Trace:** $\tau = \text{Tr}(\mathbb{J}) = a + d = \lambda_1 + \lambda_2$
*   **Determinant:** $\Delta = \det(\mathbb{J}) = ad - bc = \lambda_1 \lambda_2$
*   **Characteristic Equation:** $\lambda^2 - \tau \lambda + \Delta = 0 \implies \lambda_{1,2} = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}$

```
                  ^ Tau^2 - 4*Delta = 0 (Parabola)
                  |    
        Unstable  |  Unstable Foci / Spirals
         Nodes    |   (Tau > 0, Tau^2 - 4*Delta < 0)
                  |
 -----------------+----------------------------> Tau (Trace)
                  |
         Stable   |   Stable Foci / Spirals
         Nodes    |   (Tau < 0, Tau^2 - 4*Delta < 0)
                  |
                  | Center: Tau = 0, Delta > 0
```

1.  **Saddle Point ($\Delta < 0$):** $\lambda_1, \lambda_2$ are real with opposite signs. Always unstable.
2.  **Nodes ($\Delta > 0, \tau^2 - 4\Delta \ge 0$):**
    *   **Stable Node:** $\tau < 0$ ($\lambda_1, \lambda_2 < 0$).
    *   **Unstable Node:** $\tau > 0$ ($\lambda_1, \lambda_2 > 0$).
3.  **Spirals / Foci ($\Delta > 0, \tau^2 - 4\Delta < 0$):** Eigenvalues are complex conjugates $\lambda = \alpha \pm i\beta$.
    *   **Stable Focus:** $\tau < 0 \implies \text{Re}(\lambda) < 0$.
    *   **Unstable Focus:** $\tau > 0 \implies \text{Re}(\lambda) > 0$.
4.  **Center ($\tau = 0, \Delta > 0$):** Purely imaginary eigenvalues $\lambda = \pm i\omega$. Trajectories form closed concentric ellipses (neutrally stable).
    *   *Note for Hamiltonian Systems:* Since Hamiltonian flow conserves phase area, $\text{Tr}(\mathbb{J}) = \frac{\partial \dot{q}}{\partial q} + \frac{\partial \dot{p}}{\partial p} = 0$. Hence, Hamiltonian fixed points are either **Saddles** ($\Delta < 0$) or **Centers** ($\Delta > 0$). Spirals and nodes do NOT exist in conservative Hamiltonian systems.

### 1.4 Bifurcation Theory Essentials
A bifurcation occurs when a smooth change in a control parameter $r$ causes a topological change in the phase portrait.

1.  **Saddle-Node Bifurcation:** Creation/annihilation of fixed points.
    *   Normal form: $\dot{x} = r - x^2$.
    *   $r < 0$: No fixed points. $r > 0$: Two fixed points at $x^* = \pm \sqrt{r}$ (one stable, one unstable).
2.  **Transcritical Bifurcation:** Exchange of stability between two fixed points.
    *   Normal form: $\dot{x} = rx - x^2$.
    *   Fixed points at $x^* = 0$ and $x^* = r$.
3.  **Pitchfork Bifurcation:**
    *   **Supercritical:** $\dot{x} = rx - x^3$. $r < 0$: $x^* = 0$ (stable). $r > 0$: $x^* = 0$ (unstable), $x^* = \pm \sqrt{r}$ (stable).
    *   **Subcritical:** $\dot{x} = rx + x^3$.

---

## 2. POISSON BRACKETS AND CANONICAL TRANSFORMATIONS

### 2.1 Poisson Brackets: Definition and Fundamental Properties
For any two dynamical variables $A(q, p, t)$ and $B(q, p, t)$ in phase space, the Poisson Bracket (PB) is defined as:
$$\{A, B\}_{q,p} = \sum_{k=1}^f \left( \frac{\partial A}{\partial q_k} \frac{\partial B}{\partial p_k} - \frac{\partial A}{\partial p_k} \frac{\partial B}{\partial q_k} \right)$$

#### Fundamental Canonical Poisson Brackets
$$\{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0, \quad \{q_i, p_j\} = \delta_{ij}$$

#### Algebraic Properties
1.  **Antisymmetry:** $\{A, B\} = -\{B, A\} \implies \{A, A\} = 0$
2.  **Linearity:** $\{c_1 A + c_2 B, C\} = c_1 \{A, C\} + c_2 \{B, C\}$
3.  **Leibniz Product Rule:** $\{AB, C\} = A\{B, C\} + \{A, C\}B$
4.  **Jacobi Identity:**
    $$\{A, \{B, C\}\} + \{B, \{C, A\}\} + \{C, \{A, B\}\} = 0$$

#### Equations of Motion in Poisson Bracket Notation
Let $A(q, p, t)$ be an arbitrary physical quantity:
$$\frac{dA}{dt} = \sum_{k=1}^f \left( \frac{\partial A}{\partial q_k}\dot{q}_k + \frac{\partial A}{\partial p_k}\dot{p}_k \right) + \frac{\partial A}{\partial t}$$

Using Hamilton's equations $\dot{q}_k = \frac{\partial H}{\partial p_k}$ and $\dot{p}_k = -\frac{\partial H}{\partial q_k}$:
$$\frac{dA}{dt} = \sum_{k=1}^f \left( \frac{\partial A}{\partial q_k} \frac{\partial H}{\partial p_k} - \frac{\partial A}{\partial p_k} \frac{\partial H}{\partial q_k} \right) + \frac{\partial A}{\partial t} \implies \frac{dA}{dt} = \{A, H\} + \frac{\partial A}{\partial t}$$

*   **Constants of Motion:** If $A$ has no explicit time dependence ($\frac{\partial A}{\partial t} = 0$), then $A$ is conserved if and only if $\{A, H\} = 0$.
*   **Poisson's Theorem:** If $A$ and $B$ are two constants of motion (with no explicit time dependence), then their Poisson bracket $\{A, B\}$ is also a constant of motion.

### 2.2 Canonical Transformations (CT)
A transformation from old canonical coordinates $(q, p)$ to new coordinates $(Q, P)$ where $Q_i = Q_i(q, p, t)$ and $P_i = P_i(q, p, t)$ is **Canonical** if there exists a new Hamiltonian $K(Q, P, t)$ such that Hamilton's equations retain their form:
$$\dot{Q}_i = \frac{\partial K}{\partial P_i}, \quad \dot{P}_i = -\frac{\partial K}{\partial Q_i}$$

#### Condition for Canonicality
By Hamilton's Principle of Least Action:
$$\delta \int_{t_1}^{t_2} \left[ \sum_i p_i \dot{q}_i - H(q,p,t) \right] dt = 0 \quad \text{and} \quad \delta \int_{t_1}^{t_2} \left[ \sum_i P_i \dot{Q}_i - K(Q,P,t) \right] dt = 0$$

This implies the integrands can differ only by a total time derivative of a function $F$ (Generating Function):
$$\sum_{i=1}^f p_i dq_i - H dt = \sum_{i=1}^f P_i dQ_i - K dt + dF$$

#### Alternative Criterion via Fundamental Poisson Brackets
A transformation $(q, p) \to (Q, P)$ is canonical if and only if the fundamental Poisson brackets are preserved:
$$\{Q_i, Q_j\}_{q,p} = 0, \quad \{P_i, P_j\}_{q,p} = 0, \quad \{Q_i, P_j\}_{q,p} = \delta_{ij}$$

#### Symplectic Condition
Defining $\boldsymbol{\eta} = \begin{pmatrix} \mathbf{q} \\ \mathbf{p} \end{pmatrix}$, the transformation is $\boldsymbol{\zeta} = \begin{pmatrix} \mathbf{Q} \\ \mathbf{P} \end{pmatrix}$.
Let the Jacobian matrix of the transformation be $\mathbb{M} = \frac{\partial \boldsymbol{\zeta}}{\partial \boldsymbol{\eta}}$. The canonical condition is:
$$\mathbb{M}^T \mathbb{J} \mathbb{M} = \mathbb{J}, \quad \text{where } \mathbb{J} = \begin{pmatrix} \mathbf{0}_{f\times f} & \mathbb{I}_{f\times f} \\ -\mathbb{I}_{f\times f} & \mathbf{0}_{f\times f} \end{pmatrix}$$

### 2.3 Generating Functions
The continuous generating function $F$ can depend on one old variable and one new variable. The four basic types derived via Legendre Transformations are:

| Type | Generating Function | Independent Variables | Transformation Relations | New Hamiltonian $K$ |
| :--- | :--- | :--- | :--- | :--- |
| **$F_1$** | $F_1(q, Q, t)$ | $(q, Q)$ | $p_i = \frac{\partial F_1}{\partial q_i}, \quad P_i = -\frac{\partial F_1}{\partial Q_i}$ | $K = H + \frac{\partial F_1}{\partial t}$ |
| **$F_2$** | $F_2(q, P, t) - \sum P_i Q_i$ | $(q, P)$ | $p_i = \frac{\partial F_2}{\partial q_i}, \quad Q_i = \frac{\partial F_2}{\partial P_i}$ | $K = H + \frac{\partial F_2}{\partial t}$ |
| **$F_3$** | $F_3(p, Q, t) + \sum p_i q_i$ | $(p, Q)$ | $q_i = -\frac{\partial F_3}{\partial p_i}, \quad P_i = -\frac{\partial F_3}{\partial Q_i}$ | $K = H + \frac{\partial F_3}{\partial t}$ |
| **$F_4$** | $F_4(p, P, t) + \sum p_i q_i - \sum P_i Q_i$ | $(p, P)$ | $q_i = -\frac{\partial F_4}{\partial p_i}, \quad Q_i = \frac{\partial F_4}{\partial P_i}$ | $K = H + \frac{\partial F_4}{\partial t}$ |

#### Derivation of Relations for $F_2(q, P, t)$
Start from $p dq - H dt = P dQ - K dt + dF_1(q, Q, t)$.
Let $F_2(q, P, t) = F_1(q, Q, t) + \sum_i P_i Q_i$.
Taking the total differential:
$$dF_2 = dF_1 + \sum P_i dQ_i + \sum Q_i dP_i$$
Substitute $dF_1 = \sum p_i dq_i - \sum P_i dQ_i + (K - H) dt$:
$$dF_2 = \sum p_i dq_i + \sum Q_i dP_i + (K - H) dt$$
Since $F_2 = F_2(q, P, t)$, its differential is also given by:
$$dF_2 = \sum \frac{\partial F_2}{\partial q_i} dq_i + \sum \frac{\partial F_2}{\partial P_i} dP_i + \frac{\partial F_2}{\partial t} dt$$
Equating coefficients of $dq_i, dP_i,$ and $dt$:
$$p_i = \frac{\partial F_2}{\partial q_i}, \quad Q_i = \frac{\partial F_2}{\partial P_i}, \quad K = H + \frac{\partial F_2}{\partial t}$$

---

## 3. SYMMETRY, INVARIANCE, AND NOETHER’S THEOREM

### 3.1 Continuous Symmetries and Cyclic Coordinates
A coordinate $q_k$ is **cyclic** (or ignorable) if it does not explicitly appear in the Lagrangian $L(q, \dot{q}, t)$:
$$\frac{\partial L}{\partial q_k} = 0$$

By Lagrange's equation of motion:
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_k}\right) - \frac{\partial L}{\partial q_k} = 0 \implies \frac{d}{dt}(p_k) = 0 \implies p_k = \text{constant}$$

$$\text{Every cyclic coordinate corresponds directly to a conserved conjugate momentum.}$$

### 3.2 Noether’s Theorem
#### Statement
Every continuous global symmetry of the action integral corresponds to a conservation law in the physical system.

#### Mathematical Derivation (Lagrangian Formalism)
Consider a continuous transformation of coordinates parameterized by an infinitesimal parameter $\epsilon$:
$$q_i(t) \to q_i'(t) = q_i(t) + \epsilon \eta_i(q, \dot{q}, t)$$
$$t \to t' = t + \epsilon \zeta(q, \dot{q}, t)$$

The action $S[q] = \int_{t_1}^{t_2} L(q, \dot{q}, t) dt$ is invariant under this transformation if the Lagrangian transforms up to a total time derivative of some function $F(q, t)$:
$$L(q', \dot{q}', t') \frac{dt'}{dt} - L(q, \dot{q}, t) = \epsilon \frac{dF}{dt}$$

Evaluating the variation in $L$:
$$\delta L = L(q', \dot{q}', t') \left(1 + \epsilon \dot{\zeta}\right) - L(q, \dot{q}, t) = \epsilon \left[ \sum_i \frac{\partial L}{\partial q_i} \eta_i + \sum_i \frac{\partial L}{\partial \dot{q}_i} \dot{\eta}_i + \frac{\partial L}{\partial t}\zeta + L \dot{\zeta} \right]$$

Now consider the total change in coordinate $\delta q_i = q_i'(t') - q_i(t) = \epsilon \eta_i$.
The variation at fixed time is $\bar{\delta} q_i = q_i'(t) - q_i(t) = \epsilon (\eta_i - \dot{q}_i \zeta)$.

Substitute Euler-Lagrange equations $\frac{\partial L}{\partial q_i} = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)$:
$$\delta L = \sum_i \left[ \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) \epsilon (\eta_i - \dot{q}_i \zeta) + \frac{\partial L}{\partial \dot{q}_i} \frac{d}{dt}\big(\epsilon(\eta_i - \dot{q}_i \zeta)\big) \right] + \frac{d}{dt}(L \epsilon \zeta)$$
$$\delta L = \frac{d}{dt} \left[ \sum_i \frac{\partial L}{\partial \dot{q}_i} \epsilon (\eta_i - \dot{q}_i \zeta) + L \epsilon \zeta \right] = \epsilon \frac{dF}{dt}$$

Equating terms proportional to $\epsilon$:
$$\frac{d}{dt} \left[ \sum_i p_i \eta_i - \left(\sum_i p_i \dot{q}_i - L\right)\zeta - F \right] = 0$$

Thus, the conserved **Noether Charge $I$** is:
$$I = \sum_{i} p_i \eta_i - H \zeta - F = \text{Constant}$$

#### Fundamental Symmetry Transformations and Associated Conserved Quantities

1.  **Spatial Translation Invariance ($\mathbf{r}_i \to \mathbf{r}_i + \epsilon \mathbf{n}$):**
    *   $\zeta = 0$, $\boldsymbol{\eta}_i = \mathbf{n}$, $F = 0$.
    *   Conserved Quantity: **Total Linear Momentum** $\mathbf{P} = \sum_i \mathbf{p}_i$.
2.  **Time Translation Invariance ($t \to t + \epsilon$):**
    *   $\zeta = 1$, $\boldsymbol{\eta}_i = 0$, $F = 0$.
    *   Conserved Quantity: **Total Energy / Hamiltonian** $H = \sum p_i \dot{q}_i - L$.
3.  **Rotational Invariance ($\mathbf{r}_i \to \mathbf{r}_i + \boldsymbol{\epsilon} \times \mathbf{r}_i$):**
    *   $\zeta = 0$, $\boldsymbol{\eta}_i = \hat{\mathbf{n}} \times \mathbf{r}_i$, $F = 0$.
    *   Conserved Quantity: **Total Angular Momentum** $\mathbf{L} = \sum_i (\mathbf{r}_i \times \mathbf{p}_i)$.

---

## 4. HAMILTON-JACOBI THEORY

### 4.1 The Hamilton-Jacobi (H-J) Equation
Hamilton-Jacobi theory seeks a canonical transformation $(q, p, t) \to (Q, P, t)$ such that the new transformed Hamiltonian $K \equiv 0$.
Under such a transformation:
$$\dot{Q}_i = \frac{\partial K}{\partial P_i} = 0 \implies Q_i = \alpha_i \text{ (constant)}$$
$$\dot{P}_i = -\frac{\partial K}{\partial Q_i} = 0 \implies P_i = \beta_i \text{ (constant)}$$

Using an $F_2(q, P, t)$ type generating function, denoted as **Hamilton's Principal Function $S(q_1 \dots q_f, \alpha_1 \dots \alpha_f, t)$**:
$$p_i = \frac{\partial S}{\partial q_i}, \quad Q_i = \beta_i = \frac{\partial S}{\partial \alpha_i}$$

Since $K = H + \frac{\partial S}{\partial t} = 0$, $S$ satisfies the **Hamilton-Jacobi Partial Differential Equation**:
$$H\left(q_1, q_2, \dots, q_f, \frac{\partial S}{\partial q_1}, \frac{\partial S}{\partial q_2}, \dots, \frac{\partial S}{\partial q_f}, t\right) + \frac{\partial S}{\partial t} = 0$$

### 4.2 Time-Independent Systems and Hamilton's Characteristic Function
If $H$ does not explicitly depend on time $t$, $H(q, p) = E$ (total energy).
We can separate variables in $S$:
$$S(q, \alpha, t) = W(q, \alpha) - E t$$

where $W(q, \alpha)$ is **Hamilton's Characteristic Function**, and $E = \alpha_1$.
The H-J equation reduces to:
$$H\left(q_1, \dots, q_f, \frac{\partial W}{\partial q_1}, \dots, \frac{\partial W}{\partial q_f}\right) = E$$

where $p_i = \frac{\partial W}{\partial q_i}$.

### 4.3 Application: 1D Simple Harmonic Oscillator via H-J Theory
Hamiltonian:
$$H = \frac{p^2}{2m} + \frac{1}{2} m \omega^2 q^2 = E = \alpha$$

Substitute $p = \frac{dW}{dq}$:
$$\frac{1}{2m}\left(\frac{dW}{dq}\right)^2 + \frac{1}{2} m \omega^2 q^2 = \alpha \implies \frac{dW}{dq} = \sqrt{2m\alpha - m^2 \omega^2 q^2}$$

Integrating to find $W(q, \alpha)$:
$$W(q, \alpha) = \int \sqrt{2m\alpha - m^2 \omega^2 q^2} \, dq$$

Using $S(q, \alpha, t) = W(q, \alpha) - \alpha t$, set $\beta = \frac{\partial S}{\partial \alpha}$:
$$\beta = \frac{\partial W}{\partial \alpha} - t = \frac{\partial}{\partial \alpha}\left[ \int \sqrt{2m\alpha - m^2 \omega^2 q^2} \, dq \right] - t$$
$$\beta + t = \int \frac{m \, dq}{\sqrt{2m\alpha - m^2 \omega^2 q^2}} = \frac{1}{\omega} \int \frac{dq}{\sqrt{\frac{2\alpha}{m\omega^2} - q^2}} = \frac{1}{\omega} \arcsin\left( q \sqrt{\frac{m\omega^2}{2\alpha}} \right)$$

Inverting this yields the exact trajectory:
$$q(t) = \sqrt{\frac{2E}{m\omega^2}} \sin(\omega(t + \beta))$$

### 4.4 Action-Angle Variables
For continuous periodic physical systems (libration or rotation), we define **Action Variables ($I_k$)**:
$$I_k = \frac{1}{2\pi} \oint p_k \, dq_k = \frac{1}{2\pi} \oint \frac{\partial W_k(q_k, \alpha)}{\partial q_k} \, dq_k$$

where the integration $\oint$ is performed over a complete cycle of $q_k$.

*   Since $I_k$ are constants of motion, $H = H(I_1, I_2, \dots, I_f)$.
*   The generalized conjugate coordinate is the **Angle Variable ($\theta_k$)**:
    $$\theta_k = \frac{\partial W}{\partial I_k}$$
*   Hamilton's equations in Action-Angle variables:
    $$\dot{I}_k = -\frac{\partial H}{\partial \theta_k} = 0 \implies I_k = \text{constant}$$
    $$\dot{\theta}_k = \frac{\partial H(I)}{\partial I_k} \equiv \nu_k \text{ (Fundamental Frequency)}$$

#### Frequency Calculation for 1D Harmonic Oscillator
$$I = \frac{1}{2\pi} \oint \sqrt{2mE - m^2 \omega^2 q^2} \, dq$$
Substituting $q = \sqrt{\frac{2E}{m\omega^2}} \sin \phi \implies dq = \sqrt{\frac{2E}{m\omega^2}} \cos \phi \, d\phi$:
$$I = \frac{1}{2\pi} \int_0^{2\pi} \sqrt{2mE(1 - \sin^2\phi)} \sqrt{\frac{2E}{m\omega^2}} \cos\phi \, d\phi = \frac{2E}{2\pi \omega} \int_0^{2\pi} \cos^2\phi \, d\phi = \frac{E}{\omega} \left(\frac{\pi}{\pi}\right) = \frac{E}{\omega}$$

$$\implies H = E = I \omega$$

The frequency of oscillation is:
$$\nu = \frac{\partial H}{\partial I} = \frac{\partial(I\omega)}{\partial I} = \omega \implies f = \frac{\nu}{2\pi} = \frac{\omega}{2\pi}$$

---

## High-Yield Summary Box: Classical Mechanics Formulas

$$\begin{array}{|l|l|}
\hline
\textbf{Physical Concept} & \textbf{Mathematical Formula / Core Identity} \\ \hline
\text{Liouville's Theorem} & \frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \{\rho, H\} = 0 \\ \hline
\text{2D Jacobian Stability} & \lambda_{1,2} = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}, \quad \tau = \text{Tr}(\mathbb{J}), \, \Delta = \det(\mathbb{J}) \\ \hline
\text{Poisson Bracket} & \{A, B\} = \sum_k \left( \frac{\partial A}{\partial q_k} \frac{\partial B}{\partial p_k} - \frac{\partial A}{\partial p_k} \frac{\partial B}{\partial q_k} \right) \\ \hline
\text{Time Evolution via PB} & \frac{dA}{dt} = \{A, H\} + \frac{\partial A}{\partial t} \\ \hline
\text{Generating Function } F_2(q, P) & p = \frac{\partial F_2}{\partial q}, \quad Q = \frac{\partial F_2}{\partial P}, \quad K = H + \frac{\partial F_2}{\partial t} \\ \hline
\text{Noether Conserved Charge} & I = \sum_i p_i \eta_i - H \zeta - F \\ \hline
\text{Hamilton-Jacobi Equation} & H\left(q, \frac{\partial S}{\partial q}, t\right) + \frac{\partial S}{\partial t} = 0 \\ \hline
\text{Action Variable} & I = \frac{1}{2\pi} \oint p \, dq, \quad \nu = \frac{\partial H}{\partial I} \\ \hline
\end{array}$$

---

# SECTION III: ELECTROMAGNETIC THEORY

---

## 1. DISPERSION RELATIONS IN PLASMA

### 1.1 Microscopic Model of Electron Plasma
Consider a cold, dilute, neutral plasma gas composed of fixed positive ions ($M \gg m_e$) and free electrons with number density $n_e$.

When an electromagnetic wave $\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)}$ propagates through the plasma, the equation of motion for an electron (ignoring thermal motion and collisions, $\nu = 0$) is:
$$m_e \frac{d\mathbf{v}}{dt} = -e \mathbf{E}$$

Substituting $\mathbf{v}(\mathbf{r}, t) = \mathbf{v}_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)}$:
$$-i\omega m_e \mathbf{v} = -e \mathbf{E} \implies \mathbf{v} = \frac{e \mathbf{E}}{i m_e \omega}$$

The induced macroscopic electric current density $\mathbf{J}$ is:
$$\mathbf{J} = -n_e e \mathbf{v} = -\frac{n_e e^2}{i m_e \omega} \mathbf{E} = i \frac{n_e e^2}{m_e \omega} \mathbf{E}$$

By Ohm's Law $\mathbf{J} = \sigma(\omega) \mathbf{E}$, the complex conductivity of plasma is:
$$\sigma(\omega) = i \frac{n_e e^2}{m_e \omega}$$

### 1.2 Derivation of Plasma Frequency and Dielectric Function
Substitute $\mathbf{J}$ into Maxwell's Ampère-Maxwell equation:
$$\boldsymbol{\nabla} \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \mu_0 \left( i \frac{n_e e^2}{m_e \omega} \mathbf{E} \right) + \mu_0 \epsilon_0 (-i\omega \mathbf{E})$$
$$\boldsymbol{\nabla} \times \mathbf{B} = -i \omega \mu_0 \epsilon_0 \left[ 1 - \frac{n_e e^2}{\epsilon_0 m_e \omega^2} \right] \mathbf{E}$$

Define the **Plasma Frequency ($\omega_p$)**:
$$\omega_p = \sqrt{\frac{n_e e^2}{\epsilon_0 m_e}}$$

The relative dielectric permittivity $\epsilon_r(\omega)$ of the plasma medium becomes:
$$\epsilon_r(\omega) = 1 - \frac{\omega_p^2}{\omega^2}$$

### 1.3 Derivation of EM Wave Dispersion Relation
Taking the curl of Maxwell's Faraday equation $\boldsymbol{\nabla} \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$:
$$\boldsymbol{\nabla} \times (\boldsymbol{\nabla} \times \mathbf{E}) = -\frac{\partial}{\partial t}(\boldsymbol{\nabla} \times \mathbf{B})$$
$$\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \mathbf{E}) - \nabla^2 \mathbf{E} = -\mu_0 \frac{\partial \mathbf{J}}{\partial t} - \frac{1}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

For transverse electromagnetic waves in charge-neutral plasma ($\boldsymbol{\nabla} \cdot \mathbf{E} = 0$):
$$-\nabla^2 \mathbf{E} = -\mu_0 \left( \frac{n_e e^2}{m_e} \mathbf{E} \right) + \frac{\omega^2}{c^2} \mathbf{E}$$

Substituting $\nabla^2 \to -k^2$:
$$k^2 \mathbf{E} = -\frac{\omega_p^2}{c^2} \mathbf{E} + \frac{\omega^2}{c^2} \mathbf{E}$$

Yielding the fundamental **Plasma Dispersion Relation**:
$$\omega^2 = \omega_p^2 + c^2 k^2$$

```
   Omega
     ^
     |       /  Transverse Propagation Zone (Omega > Omega_p)
     |      /  w^2 = w_p^2 + c^2 k^2
  w_p +----/-----------------------
     |   /  Evanescent Wave Zone 
     |  /   (Cut-off Region, k is imaginary)
     +-----------------------------------> k
```

### 1.4 Wave Propagation Modes & Phase/Group Velocities
From the dispersion relation $k = \frac{1}{c}\sqrt{\omega^2 - \omega_p^2}$:

1.  **Case $\omega > \omega_p$:** $k$ is real. Transverse EM waves propagate freely through the plasma without attenuation.
    *   **Phase Velocity ($v_p$):**
        $$v_p = \frac{\omega}{k} = \frac{\omega}{\frac{1}{c}\sqrt{\omega^2 - \omega_p^2}} = \frac{c}{\sqrt{1 - \frac{\omega_p^2}{\omega^2}}} > c$$
    *   **Group Velocity ($v_g$):**
        Differentiating $\omega^2 = \omega_p^2 + c^2 k^2 \implies 2\omega \, d\omega = 2c^2 k \, dk$:
        $$v_g = \frac{d\omega}{dk} = \frac{c^2 k}{\omega} = c \sqrt{1 - \frac{\omega_p^2}{\omega^2}} < c$$
    *   **Relativistic Consistency Relation:**
        $$v_p \cdot v_g = c^2$$

2.  **Case $\omega < \omega_p$:** $k$ is purely imaginary ($k = i\kappa$).
    *   Waves undergo exponential decay/reflection. The electric field is $\mathbf{E}(z, t) = \mathbf{E}_0 e^{-\kappa z} e^{-i\omega t}$.
    *   **Skin Depth / Penetration Depth ($\delta$):**
        $$\delta = \frac{1}{\kappa} = \frac{c}{\sqrt{\omega_p^2 - \omega^2}}$$

---

## 2. LORENTZ INVARIANCE OF MAXWELL'S EQUATIONS

### 2.1 Four-Vector Formalism
In Minkowski spacetime with metric $g_{\mu\nu} = \text{diag}(1, -1, -1, -1)$, events are indexed by 4-vectors $x^\mu = (ct, x, y, z) = (ct, \mathbf{r})$.

*   **4-Gradient:** $\partial_\mu = \frac{\partial}{\partial x^\mu} = \left( \frac{1}{c}\frac{\partial}{\partial t}, \boldsymbol{\nabla} \right)$
*   **4-Current Density:** $J^\mu = (c\rho, \mathbf{J})$
    *   Continuity equation: $\partial_\mu J^\mu = \frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{J} = 0$
*   **4-Potential:** $A^\mu = \left( \frac{\Phi}{c}, \mathbf{A} \right)$
    *   Lorenz Gauge Condition: $\partial_\mu A^\mu = \frac{1}{c} \frac{\partial (\Phi/c)}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{A} = 0 \implies \frac{1}{c^2}\frac{\partial \Phi}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{A} = 0$

### 2.2 Electromagnetic Field Tensor $F^{\mu\nu}$
The anti-symmetric 2nd-rank Field Field Tensor $F^{\mu\nu}$ is defined by:
$$F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$$

Matrix representation of $F^{\mu\nu}$ (where $\mu$ is row, $\nu$ is column):
$$F^{\mu\nu} = \begin{pmatrix}
0 & -E_x/c & -E_y/c & -E_z/c \\
E_x/c & 0 & -B_z & B_y \\
E_y/c & B_z & 0 & -B_x \\
E_z/c & -B_y & B_x & 0
\end{pmatrix}$$

The covariant form $F_{\mu\nu} = g_{\mu\alpha} g_{\nu\beta} F^{\alpha\beta}$ is obtained by flipping signs of $F^{0i}$:
$$F_{\mu\nu} = \begin{pmatrix}
0 & E_x/c & E_y/c & E_z/c \\
-E_x/c & 0 & -B_z & B_y \\
-E_y/c & B_z & 0 & -B_x \\
-E_z/c & -B_y & B_x & 0
\end{pmatrix}$$

### 2.3 Covariant Formulation of Maxwell's Equations
All 4 classical Maxwell equations reduce to two compact, manifestly covariant 4-vector equations:

1.  **Inhomogeneous Maxwell Equations (Source Terms):**
    $$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$$
    *   For $\nu = 0$: $\boldsymbol{\nabla} \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ (Gauss's Law).
    *   For $\nu = 1, 2, 3$: $\boldsymbol{\nabla} \times \mathbf{B} - \frac{1}{c^2}\frac{\partial \mathbf{E}}{\partial t} = \mu_0 \mathbf{J}$ (Ampère-Maxwell Law).

2.  **Homogeneous Maxwell Equations (Internal Consistency):**
    Using Dual Tensor $\tilde{F}^{\mu\nu} = \frac{1}{2} \epsilon^{\mu\nu\alpha\beta} F_{\alpha\beta}$:
    $$\partial_\mu \tilde{F}^{\mu\nu} = 0 \quad \text{or Bianchi Identity: } \partial_\alpha F_{\beta\gamma} + \partial_\beta F_{\gamma\alpha} + \partial_\gamma F_{\alpha\beta} = 0$$
    *   Yields $\boldsymbol{\nabla} \cdot \mathbf{B} = 0$ and $\boldsymbol{\nabla} \times \mathbf{E} + \frac{\partial \mathbf{B}}{\partial t} = 0$.

### 2.4 Lorentz Transformation of Electric and Magnetic Fields
For a reference frame $S'$ moving with velocity $\mathbf{v} = v \hat{\mathbf{x}}$ relative to frame $S$:
$$F'^{\mu\nu} = \Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta F^{\alpha\beta}$$

Expanding the matrix multiplication gives the transformation relations:

$$\begin{aligned}
E'_x &= E_x, & B'_x &= B_x \\
E'_y &= \gamma \left( E_y - v B_z \right), & B'_y &= \gamma \left( B_y + \frac{v}{c^2} E_z \right) \\
E'_z &= \gamma \left( E_z + v B_y \right), & B'_z &= \gamma \left( B_z - \frac{v}{c^2} E_y \right)
\end{aligned}$$

where $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$.

In vector notation parallel ($|$) and perpendicular ($\perp$) to velocity $\mathbf{v}$:
$$\begin{aligned}
\mathbf{E}'_\| &= \mathbf{E}_\|, & \mathbf{B}'_\| &= \mathbf{B}_\| \\
\mathbf{E}'_\perp &= \gamma \left( \mathbf{E}_\perp + \mathbf{v} \times \mathbf{B} \right), & \mathbf{B}'_\perp &= \gamma \left( \mathbf{B}_\perp - \frac{\mathbf{v} \times \mathbf{E}}{c^2} \right)
\end{aligned}$$

### 2.5 Relativistic Invariants of the EM Field
Quantities formed by contracting field tensors are Lorentz scalars (identical in all inertial frames):

1.  **First Invariant (Scalar):**
    $$F_{\mu\nu} F^{\mu\nu} = 2 \left( \mathbf{B}^2 - \frac{\mathbf{E}^2}{c^2} \right) = \text{Invariant}$$
2.  **Second Invariant (Pseudoscalar):**
    $$\epsilon^{\mu\nu\alpha\beta} F_{\mu\nu} F_{\alpha\beta} = -\frac{8}{c} (\mathbf{E} \cdot \mathbf{B}) = \text{Invariant}$$

---

## 3. TRANSMISSION LINES AND WAVEGUIDES

### 3.1 Transmission Line Theory (Distributed Parameter Model)
A transmission line is modeled as a pair of continuous conductors with distributed parameters per unit length: $R$ (resistance $\Omega/m$), $L$ (inductance $H/m$), $G$ (conductance $S/m$), $C$ (capacitance $F/m$).

#### Telegrapher's Equations Derivation
Applying Kirchhoff's laws to an infinitesimal line segment $\Delta z$:
$$\frac{\partial V(z, t)}{\partial z} = -R I(z, t) - L \frac{\partial I(z, t)}{\partial t}$$
$$\frac{\partial I(z, t)}{\partial z} = -G V(z, t) - C \frac{\partial V(z, t)}{\partial t}$$

Assuming sinusoidal time dependence $e^{j\omega t}$:
$$\frac{d V}{dz} = -(R + j\omega L) I, \quad \frac{d I}{dz} = -(G + j\omega C) V$$

Differentiating yields the Helmholtz transmission wave equations:
$$\frac{d^2 V}{dz^2} = \gamma^2 V, \quad \frac{d^2 I}{dz^2} = \gamma^2 I$$

where **Propagation Constant ($\gamma$)** is:
$$\gamma = \alpha + j\beta = \sqrt{(R + j\omega L)(G + j\omega C)}$$
*   $\alpha$ = Attenuation constant (nepers/m)
*   $\beta$ = Phase constant (rad/m)

#### Characteristic Impedance ($Z_0$)
$$Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}$$

*   **Lossless Line ($R = 0, G = 0$):**
    $$\gamma = j\omega \sqrt{LC} \implies \alpha = 0, \quad \beta = \omega \sqrt{LC}$$
    $$Z_0 = \sqrt{\frac{L}{C}} \quad (\text{Purely Real Constant})$$
    $$v_p = \frac{\omega}{\beta} = \frac{1}{\sqrt{LC}}$$

#### Reflection Coefficient ($\Gamma$) and SWR
For a line terminated by load impedance $Z_L$:
$$\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$$
$$\text{Voltage Standing Wave Ratio (VSWR)} = \frac{1 + |\Gamma|}{1 - |\Gamma|}$$

---

### 3.2 Rectangular Waveguides
Consider a hollow rectangular metallic pipe extending along $z$-axis with transverse dimensions $x \in [0, a]$ and $y \in [0, b]$ where $a > b$.

```
       y ^
         |  +------------------------+
         |  |                        |
         b  |                        |
         |  |                        |
         +--+------------------------+---> x
            0                        a
```

#### Longitudinal Field Decomposition
All fields vary as $e^{i(k_z z - \omega t)}$.
Maxwell's equations reduce intermediate components ($E_x, E_y, B_x, B_y$) to derivatives of longitudinal components $E_z$ and $B_z$:
$$E_x = \frac{i}{k_c^2} \left( k_z \frac{\partial E_z}{\partial x} + \omega \frac{\partial B_z}{\partial y} \right)$$
$$E_y = \frac{i}{k_c^2} \left( k_z \frac{\partial E_z}{\partial y} - \omega \frac{\partial B_z}{\partial x} \right)$$
$$B_x = \frac{i}{k_c^2} \left( k_z \frac{\partial B_z}{\partial x} - \frac{\omega}{c^2} \frac{\partial E_z}{\partial y} \right)$$
$$B_y = \frac{i}{k_c^2} \left( k_z \frac{\partial B_z}{\partial y} + \frac{\omega}{c^2} \frac{\partial E_z}{\partial x} \right)$$

where $k_c^2 = \frac{\omega^2}{c^2} - k_z^2$ is the **Cutoff Wave Vector**.

#### Transverse Electric ($\text{TE}_{mn}$) Modes ($E_z = 0, B_z \neq 0$)
The wave equation for $B_z$ is:
$$\left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + k_c^2 \right) B_z = 0$$

Boundary Condition at perfectly conducting walls: $\left. \frac{\partial B_z}{\partial n} \right|_{\text{wall}} = 0$.
Using separation of variables $B_z(x,y) = X(x)Y(y)$:
$$B_z(x, y) = B_0 \cos\left( \frac{m\pi x}{a} \right) \cos\left( \frac{n\pi y}{b} \right) e^{i(k_z z - \omega t)}$$

where $m, n = 0, 1, 2, \dots$ (but not $m=n=0$ simultaneously).

#### Transverse Magnetic ($\text{TM}_{mn}$) Modes ($B_z = 0, E_z \neq 0$)
Boundary Condition: $\left. E_z \right|_{\text{wall}} = 0$.
$$E_z(x, y) = E_0 \sin\left( \frac{m\pi x}{a} \right) \sin\left( \frac{n\pi y}{b} \right) e^{i(k_z z - \omega t)}$$

where $m, n = 1, 2, 3, \dots$ (No $\text{TM}_{00}, \text{TM}_{10}, \text{TM}_{01}$ modes exist!).

#### Cutoff Frequency and Dispersion Properties
From eigenvalue condition:
$$k_c^2 = \left( \frac{m\pi}{a} \right)^2 + \left( \frac{n\pi}{b} \right)^2$$

$$\omega_{mn} = c k_c = c \sqrt{\left( \frac{m\pi}{a} \right)^2 + \left( \frac{n\pi}{b} \right)^2}$$
$$f_{mn} = \frac{c}{2} \sqrt{\left( \frac{m}{a} \right)^2 + \left( \frac{n}{b} \right)^2}$$

*   **Dominant Mode:** The mode with lowest cutoff frequency. For $a > b$, it is the $\mathbf{\text{TE}_{10}}$ mode:
    $$f_{10} = \frac{c}{2a}, \quad \lambda_c = 2a$$
*   **Propagation Wavevector $k_z$:**
    $$k_z = \sqrt{\frac{\omega^2}{c^2} - k_c^2} = \frac{\omega}{c} \sqrt{1 - \left(\frac{f_{mn}}{f}\right)^2}$$
*   **Phase & Group Velocities:**
    $$v_p = \frac{\omega}{k_z} = \frac{c}{\sqrt{1 - (f_{mn}/f)^2}} > c$$
    $$v_g = \frac{d\omega}{dk_z} = c \sqrt{1 - \left(\frac{f_{mn}}{f}\right)^2} < c \implies v_p \cdot v_g = c^2$$

---

## 4. RADIATION FROM MOVING CHARGES, DIPOLES, AND RETARDED POTENTIALS

### 4.1 Retarded Potentials and Green's Function
In Lorenz Gauge ($\frac{1}{c^2}\frac{\partial V}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{A} = 0$), Maxwell's equations yield inhomogeneous wave equations:
$$\Box V = \nabla^2 V - \frac{1}{c^2}\frac{\partial^2 V}{\partial t^2} = -\frac{\rho(\mathbf{r}, t)}{\epsilon_0}$$
$$\Box \mathbf{A} = \nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J}(\mathbf{r}, t)$$

Using the Green's function for the $3\mathrm{D}$ d'Alembertian operator, $G(\mathbf{r}, t | \mathbf{r}', t') = \frac{\delta(t' - (t - |\mathbf{r}-\mathbf{r}'|/c))}{4\pi |\mathbf{r}-\mathbf{r}'|}$:

$$V(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r} - \mathbf{r}'|} \, d^3r'$$
$$\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r} - \mathbf{r}'|} \, d^3r'$$

where $t_r = t - \frac{|\mathbf{r} - \mathbf{r}'|}{c}$ is the **Retarded Time**.

### 4.2 Liénard-Wiechert Potentials for Point Charges
For a point charge $q$ following a trajectory $\mathbf{w}(t)$ with velocity $\mathbf{v}(t) = \dot{\mathbf{w}}(t)$ and $\boldsymbol{\beta} = \mathbf{v}/c$:
$$\rho(\mathbf{r}', t') = q \, \delta^3(\mathbf{r}' - \mathbf{w}(t'))$$

Performing integration over the delta function gives the Liénard-Wiechert potentials:
$$V(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0} \frac{q}{\left( \mathcal{R} - \boldsymbol{\mathcal{R}} \cdot \boldsymbol{\beta} \right)_{\text{ret}}} = \frac{1}{4\pi\epsilon_0} \left[ \frac{q}{\mathcal{R}(1 - \hat{\mathbf{n}} \cdot \boldsymbol{\beta})} \right]_{\text{ret}}$$
$$\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \left[ \frac{q \mathbf{v}}{\mathcal{R}(1 - \hat{\mathbf{n}} \cdot \boldsymbol{\beta})} \right]_{\text{ret}} = \frac{\boldsymbol{\beta}_{\text{ret}}}{c} V(\mathbf{r}, t)$$

where $\boldsymbol{\mathcal{R}} = \mathbf{r} - \mathbf{w}(t_r)$, $\mathcal{R} = |\boldsymbol{\mathcal{R}}|$, and $\hat{\mathbf{n}} = \boldsymbol{\mathcal{R}} / \mathcal{R}$.

### 4.3 Electric and Magnetic Fields of Moving Charges
Calculating $\mathbf{E} = -\boldsymbol{\nabla}V - \frac{\partial \mathbf{A}}{\partial t}$ and $\mathbf{B} = \boldsymbol{\nabla} \times \mathbf{A}$:

$$\mathbf{E}(\mathbf{r}, t) = \underbrace{\frac{q}{4\pi\epsilon_0} \frac{\hat{\mathbf{n}} - \boldsymbol{\beta}}{\gamma^2 (1 - \hat{\mathbf{n}}\cdot\boldsymbol{\beta})^3 \mathcal{R}^2}}_{\text{Velocity Field } \mathbf{E}_{\text{vel}} \propto \frac{1}{\mathcal{R}^2}} + \underbrace{\frac{q}{4\pi\epsilon_0 c} \frac{\hat{\mathbf{n}} \times \left( (\hat{\mathbf{n}} - \boldsymbol{\beta}) \times \mathbf{a} \right)}{(1 - \hat{\mathbf{n}}\cdot\boldsymbol{\beta})^3 \mathcal{R}}}_{\text{Acceleration / Radiation Field } \mathbf{E}_{\text{rad}} \propto \frac{1}{\mathcal{R}}}$$

$$\mathbf{B}(\mathbf{r}, t) = \frac{1}{c} \left( \hat{\mathbf{n}} \times \mathbf{E}(\mathbf{r}, t) \right)$$

### 4.4 Larmor Formula and Relativistic Generalization
The Poynting flux associated with the radiation field $\mathbf{S}_{\text{rad}} = \frac{1}{\mu_0} (\mathbf{E}_{\text{rad}} \times \mathbf{B}_{\text{rad}})$ integrated over a sphere at infinity yields the total instantaneous power radiated.

#### Larmor Formula (Non-Relativistic $v \ll c$)
$$P = \frac{\mu_0 q^2 a^2}{6\pi c} = \frac{q^2 a^2}{6\pi \epsilon_0 c^3}$$

where $a = |\dot{\mathbf{v}}|$ is the acceleration.

#### Liénard's Relativistic Generalization
$$P = \frac{\mu_0 q^2 \gamma^6}{6\pi c} \left[ a^2 - \left( \boldsymbol{\beta} \times \mathbf{a} \right)^2 \right]$$

1.  **Linear Acceleration ($\mathbf{v} \parallel \mathbf{a}$):**
    $$P = \frac{\mu_0 q^2 a^2 \gamma^6}{6\pi c}$$
2.  **Circular Acceleration ($\mathbf{v} \perp \mathbf{a}$, Synchrotron Radiation):**
    $$P = \frac{\mu_0 q^2 a^2 \gamma^4}{6\pi c}$$

### 4.5 Electric Dipole Radiation
Consider an oscillating electric dipole $\mathbf{p}(t) = p_0 \cos(\omega t) \hat{\mathbf{z}}$.

In the radiation zone (far field: $r \gg \lambda \gg d$):

*   Vector Potential:
    $$\mathbf{A}(\mathbf{r}, t) = -\frac{\mu_0 p_0 \omega}{4\pi r} \sin(\omega(t - r/c)) \hat{\mathbf{z}}$$
*   Electric Field:
    $$\mathbf{E}_{\text{rad}}(\mathbf{r}, t) = -\frac{\mu_0 p_0 \omega^2}{4\pi} \left( \frac{\sin\theta}{r} \right) \cos(\omega(t - r/c)) \hat{\boldsymbol{\theta}}$$
*   Magnetic Field:
    $$\mathbf{B}_{\text{rad}}(\mathbf{r}, t) = -\frac{\mu_0 p_0 \omega^2}{4\pi c} \left( \frac{\sin\theta}{r} \right) \cos(\omega(t - r/c)) \hat{\boldsymbol{\phi}}$$

#### Radiated Power and Angular Distribution
Time-averaged Poynting Vector:
$$\langle \mathbf{S} \rangle = \frac{1}{2\mu_0} \text{Re}(\mathbf{E} \times \mathbf{B}^*) = \frac{\mu_0 p_0^2 \omega^4}{32 \pi^2 c} \frac{\sin^2\theta}{r^2} \hat{\mathbf{r}}$$

*   **Angular Power Distribution:**
    $$\frac{dP}{d\Omega} = \frac{\mu_0 p_0^2 \omega^4}{32\pi^2 c} \sin^2\theta \propto \omega^4 \sin^2\theta$$
*   **Total Radiated Power:**
    $$P_{\text{total}} = \int \langle \mathbf{S} \rangle \cdot d\mathbf{a} = \frac{\mu_0 p_0^2 \omega^4}{32\pi^2 c} \int_0^{2\pi} d\phi \int_0^\pi \sin^3\theta \, d\theta = \frac{\mu_0 p_0^2 \omega^4}{12\pi c}$$

---

## High-Yield Summary Box: Electromagnetic Theory Formulas

$$\begin{array}{|l|l|}
\hline
\textbf{Physical Concept} & \textbf{Mathematical Formula / Core Identity} \\ \hline
\text{Plasma Frequency} & \omega_p = \sqrt{\frac{n_e e^2}{\epsilon_0 m_e}} \\ \hline
\text{Plasma Dispersion Relation} & \omega^2 = \omega_p^2 + c^2 k^2, \quad v_p v_g = c^2 \\ \hline
\text{4-Potential \& 4-Current} & A^\mu = (\Phi/c, \mathbf{A}), \quad J^\mu = (c\rho, \mathbf{J}) \\ \hline
\text{EM Field Tensor } F^{\mu\nu} & F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu, \quad \partial_\mu F^{\mu\nu} = \mu_0 J^\nu \\ \hline
\text{Lorentz Field Invariants} & I_1 = \mathbf{B}^2 - \frac{\mathbf{E}^2}{c^2}, \quad I_2 = \mathbf{E} \cdot \mathbf{B} \\ \hline
\text{Telegrapher's Impedance} & Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}} \xrightarrow{\text{lossless}} \sqrt{\frac{L}{C}} \\ \hline
\text{Waveguide Cutoff Freq } (a \times b) & f_{mn} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2} \\ \hline
\text{Larmor Radiated Power} & P = \frac{\mu_0 q^2 a^2}{6\pi c} = \frac{q^2 a^2}{6\pi \epsilon_0 c^3} \\ \hline
\text{Electric Dipole Radiated Power} & P = \frac{\mu_0 p_0^2 \omega^4}{12\pi c} \propto \omega^4 \\ \hline
\end{array}$$

---

# SECTION IV: QUANTUM MECHANICS

---

## 1. SPIN-ORBIT COUPLING AND FINE STRUCTURE OF HYDROGEN

The fine structure of hydrogen arises from three relativistic corrections to the unperturbed Bohr Hamiltonian $H_0 = \frac{p^2}{2m} - \frac{e^2}{4\pi\epsilon_0 r}$:

$$H_{\text{fine}} = H_r' + H_{\text{so}}' + H_D'$$

### 1.1 Relativistic Kinetic Energy Correction ($H_r'$)
The relativistic kinetic energy is:
$$T = \sqrt{p^2 c^2 + m^2 c^4} - m c^2 = m c^2 \left[ \sqrt{1 + \frac{p^2}{m^2 c^2}} - 1 \right] \approx \frac{p^2}{2m} - \frac{p^4}{8 m^3 c^2}$$

The perturbation Hamiltonian is $H_r' = -\frac{p^4}{8 m^3 c^2} = -\frac{1}{2mc^2}\left( \frac{p^2}{2m} \right)^2$.
Since $H_0 = \frac{p^2}{2m} + V(r) \implies \frac{p^2}{2m} = H_0 - V(r)$:

$$E_r^{(1)} = \langle n l m_l | H_r' | n l m_l \rangle = -\frac{1}{2m c^2} \left[ \left(E_n^{(0)}\right)^2 - 2 E_n^{(0)} \langle V \rangle + \langle V^2 \rangle \right]$$

Using quantum expectation values for hydrogenic atoms:
$$\left\langle \frac{1}{r} \right\rangle = \frac{1}{n^2 a_0}, \quad \left\langle \frac{1}{r^2} \right\rangle = \frac{1}{\left(l + \frac{1}{2}\right) n^3 a_0^2}$$

$$\implies E_r^{(1)} = -\frac{\left(E_n^{(0)}\right)^2}{2 m c^2} \left[ \frac{4n}{l + 1/2} - 3 \right]$$

### 1.2 Spin-Orbit Coupling ($H_{\text{so}}'$)
An electron moving with velocity $\mathbf{v}$ in an electrostatic potential $V(r)$ experiences an effective magnetic field in its rest frame:
$$\mathbf{B}_{\text{eff}} = -\frac{\mathbf{v} \times \mathbf{E}}{c^2} = \frac{1}{m e c^2} \left( \frac{1}{r} \frac{dV}{dr} \right) \mathbf{L}$$

Including Thomas Precession (a factor of $1/2$ due to transformation from non-inertial rest frame):
$$H_{\text{so}}' = \frac{1}{2} \left( -\boldsymbol{\mu}_s \cdot \mathbf{B}_{\text{eff}} \right) = \frac{e^2}{8 \pi \epsilon_0 m^2 c^2 r^3} \mathbf{L} \cdot \mathbf{S}$$

Using $\mathbf{J} = \mathbf{L} + \mathbf{S} \implies \mathbf{J}^2 = \mathbf{L}^2 + \mathbf{S}^2 + 2\mathbf{L}\cdot\mathbf{S}$:
$$\mathbf{L} \cdot \mathbf{S} = \frac{\hbar^2}{2} \left[ j(j+1) - l(l+1) - s(s+1) \right]$$

Using expectation value $\left\langle \frac{1}{r^3} \right\rangle = \frac{1}{l(l + 1/2)(l + 1) n^3 a_0^3}$:

$$E_{\text{so}}^{(1)} = \frac{\left(E_n^{(0)}\right)^2}{m c^2} \left[ \frac{n \left[ j(j+1) - l(l+1) - 3/4 \right]}{l(l + 1/2)(l + 1)} \right] \quad (l \neq 0)$$

### 1.3 Darwin Term ($H_D'$)
The Darwin term accounts for the relativistic *Zitterbewegung* (rapid quantum fluctuation of position) of s-states ($l=0$):
$$H_D' = \frac{\hbar^2 \pi e^2}{2 m^2 c^2 (4\pi\epsilon_0)} \delta^3(\mathbf{r})$$

$$E_D^{(1)} = \langle H_D' \rangle = \frac{\hbar^2 \pi e^2}{2 m^2 c^2 (4\pi\epsilon_0)} |\psi_{n00}(0)|^2 = \frac{\left(E_n^{(0)}\right)^2}{m c^2} (2n)$$

### 1.4 Combined Total Fine Structure Formula
Summing all three corrections ($E_{\text{fine}}^{(1)} = E_r^{(1)} + E_{\text{so}}^{(1)} + E_D^{(1)}$) yields a unified expression dependent **only** on $n$ and $j$:

$$E_{n, j} = E_n^{(0)} \left[ 1 + \frac{\alpha^2}{n^2} \left( \frac{n}{j + 1/2} - \frac{3}{4} \right) \right]$$

where $\alpha = \frac{e^2}{4\pi\epsilon_0 \hbar c} \approx \frac{1}{137.036}$ is the **Fine Structure Constant**.

$$\text{Key Result: Energy levels with equal } n \text{ and } j \text{ remain degenerate (e.g., } 2S_{1/2} \text{ and } 2P_{1/2} \text{ are degenerate in Fine Structure Theory).}$$

---

## 2. WKB (WENTZEL-KRAMERS-BRILLOUIN) APPROXIMATION

### 2.1 Semi-Classical Wavefunction Derivation
The 1D time-independent Schrödinger equation is:
$$\frac{d^2 \psi}{dx^2} + \frac{2m}{\hbar^2}\left( E - V(x) \right) \psi = 0 \implies \frac{d^2 \psi}{dx^2} + \frac{p^2(x)}{\hbar^2} \psi = 0$$

where $p(x) = \sqrt{2m(E - V(x))}$.
Substitute ansatz $\psi(x) = e^{i S(x) / \hbar}$:
$$i \hbar S''(x) - (S'(x))^2 + p^2(x) = 0$$

Expanding $S(x)$ in powers of $\hbar$: $S(x) = S_0(x) + \hbar S_1(x) + \dots$

*   **$\mathcal{O}(\hbar^0)$ terms:** $-(S_0')^2 + p^2 = 0 \implies S_0'(x) = \pm p(x) \implies S_0(x) = \pm \int p(x) dx$
*   **$\mathcal{O}(\hbar^1)$ terms:** $i S_0'' - 2 S_0' S_1' = 0 \implies S_1' = \frac{i S_0''}{2 S_0'} = \frac{i p'}{2p} \implies S_1(x) = \frac{i}{2} \ln p(x)$

Thus, the semi-classical WKB wavefunction in classically allowed regions ($E > V(x)$) is:

$$\psi_{\text{WKB}}(x) \approx \frac{C_1}{\sqrt{p(x)}} \exp\left( \frac{i}{\hbar} \int p(x) dx \right) + \frac{C_2}{\sqrt{p(x)}} \exp\left( -\frac{i}{\hbar} \int p(x) dx \right)$$

In classically forbidden regions ($E < V(x)$), $p(x) = i |p(x)|$:
$$\psi_{\text{WKB}}(x) \approx \frac{D_1}{\sqrt{|p(x)|}} \exp\left( \frac{1}{\hbar} \int |p(x)| dx \right) + \frac{D_2}{\sqrt{|p(x)|}} \exp\left( -\frac{1}{\hbar} \int |p(x)| dx \right)$$

### 2.2 Turning Points and Connection Formulas
At turning points ($E = V(x)$), $p(x) \to 0$, causing WKB wavefunctions to diverge. By matching WKB solutions with Airy functions $\text{Ai}(x)$ and $\text{Bi}(x)$ across turning points, we get the connection rules:

```
 Region 1 (Forbidden)  | Region 2 (Allowed)
 E < V(x)              | E > V(x)
 ----------------------*---------------------> x
                 Turning Point x_0
```

*   **For a potential with soft boundary at both ends ($x_1$ and $x_2$):**
    $$\int_{x_1}^{x_2} p(x) \, dx = \left( n + \frac{1}{2} \right) \pi \hbar, \quad n = 0, 1, 2, \dots$$

### 2.3 Generalized Bohr-Sommerfeld Quantization Rule
$$\int_{x_1}^{x_2} p(x) \, dx = \left( n + \frac{\gamma}{4} \right) \pi \hbar$$

$$\begin{array}{|l|c|}
\hline
\textbf{Potential Wall Configuration} & \text{Phase Index } \gamma \\ \hline
\text{Two Soft Turning Points (e.g., Harmonic Oscillator)} & \gamma = 2 \implies \left(n + \frac{1}{2}\right)\pi\hbar \\ \hline
\text{One Rigid Wall + One Soft Point (e.g., Bounce Potential)} & \gamma = 3 \implies \left(n + \frac{3}{4}\right)\pi\hbar \\ \hline
\text{Two Rigid Walls (e.g., Infinite Square Well)} & \gamma = 4 \implies (n + 1)\pi\hbar \\ \hline
\end{array}$$

### 2.4 Quantum Tunneling through a Barrier
For a broad barrier $V(x) > E$ spanning $x \in [a, b]$, the WKB transmission coefficient $T$ is:

$$T \approx \exp\left( -\frac{2}{\hbar} \int_{a}^{b} \sqrt{2m(V(x) - E)} \, dx \right)$$

---

## 3. ELEMENTARY THEORY OF SCATTERING

### 3.1 Asymptotic Wavefunction and Cross-Sections
Consider a beam of non-relativistic particles scattered by a localized potential $V(\mathbf{r})$.
As $r \to \infty$, the asymptotic wavefunction is:
$$\psi(\mathbf{r}) \sim e^{i k z} + f(\theta, \phi) \frac{e^{i k r}}{r}$$

where $k = \frac{\sqrt{2mE}}{\hbar}$, $e^{i k z}$ is the incident plane wave, and $f(\theta, \phi)$ is the **Scattering Amplitude**.

*   **Differential Cross-Section:**
    $$\frac{d\sigma}{d\Omega} = |f(\theta, \phi)|^2$$
*   **Total Cross-Section:**
    $$\sigma_{\text{tot}} = \int \frac{d\sigma}{d\Omega} d\Omega = \int_0^{2\pi} d\phi \int_0^\pi |f(\theta, \phi)|^2 \sin\theta \, d\theta$$

```
 Incident Wave
 ======>       Potential V(r)       Scattered Spherical Wave
 ======>  --->   (Target)   --->   ) ) ) f(theta) e^(ikr) / r
 ======>
```

### 3.2 Partial Wave Analysis (Spherical Symmetry)
For a spherically symmetric potential $V(r)$, angular momentum is conserved. Expand $f(\theta)$ in terms of Legendre Polynomials $P_l(\cos\theta)$:

$$f(\theta) = \frac{1}{k} \sum_{l=0}^{\infty} (2l + 1) e^{i \delta_l} \sin(\delta_l) P_l(\cos\theta)$$

where $\delta_l$ is the **Phase Shift** of the $l$-th partial wave.

#### Total Cross-Section in Partial Waves
$$\sigma_{\text{tot}} = \frac{4\pi}{k^2} \sum_{l=0}^{\infty} (2l + 1) \sin^2(\delta_l)$$

#### The Optical Theorem
Relates total cross-section to the imaginary part of the forward scattering amplitude ($\theta = 0$):
$$\sigma_{\text{tot}} = \frac{4\pi}{k} \text{Im}[f(0)]$$

#### Low-Energy Scattering Limit ($k \to 0$)
At very low energies, $l = 0$ (s-wave) dominates.
$$\delta_0 \approx -k a \quad \text{where } a \text{ is the scattering length}$$
$$f(\theta) \approx \frac{e^{i\delta_0}\sin\delta_0}{k} \approx -a$$
$$\sigma_{\text{tot}} = 4\pi a^2$$

### 3.3 Born Approximation
From Lippmann-Schwinger integral equation:
$$\psi(\mathbf{r}) = \psi_0(\mathbf{r}) - \frac{m}{2\pi\hbar^2} \int \frac{e^{i k |\mathbf{r} - \mathbf{r}'|}}{|\mathbf{r} - \mathbf{r}'|} V(\mathbf{r}') \psi(\mathbf{r}') \, d^3r'$$

#### First Born Approximation
Replace $\psi(\mathbf{r}')$ inside integral with incident plane wave $e^{i \mathbf{k}_i \cdot \mathbf{r}'}$:

$$f(\theta, \phi) = -\frac{m}{2\pi\hbar^2} \int e^{-i \mathbf{q} \cdot \mathbf{r}'} V(\mathbf{r}') \, d^3r'$$

where $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$ is the **Momentum Transfer Vector**.
Magnitude: $q = |\mathbf{k}_f - \mathbf{k}_i| = 2k \sin\left(\frac{\theta}{2}\right)$.

For a Spherically Symmetric Potential $V(r)$:
$$f(\theta) = -\frac{2m}{\hbar^2 q} \int_0^{\infty} r V(r) \sin(qr) \, dr$$

#### Application: Yukawa Potential
$$V(r) = V_0 \frac{e^{-\mu r}}{r}$$

$$f(\theta) = -\frac{2m V_0}{\hbar^2 q} \int_0^\infty e^{-\mu r} \sin(qr) \, dr = -\frac{2m V_0}{\hbar^2 (q^2 + \mu^2)}$$

Substituting $q^2 = 4k^2 \sin^2(\theta/2)$:
$$\frac{d\sigma}{d\Omega} = \left( \frac{2m V_0}{\hbar^2 \left(4k^2 \sin^2(\theta/2) + \mu^2\right)} \right)^2$$

*   **Rutherford Scattering Limit ($\mu \to 0, V_0 = \frac{q_1 q_2}{4\pi\epsilon_0}$):**
    $$\frac{d\sigma}{d\Omega} = \left( \frac{q_1 q_2}{16 \pi \epsilon_0 E \sin^2(\theta/2)} \right)^2$$

---

## 4. RELATIVISTIC QUANTUM MECHANICS

### 4.1 Klein-Gordon (K-G) Equation
Designed for spin-0 relativistic scalar particles. Start from Einstein's energy-momentum relation:
$$E^2 = p^2 c^2 + m^2 c^4$$

Substituting operators $E \to i\hbar \frac{\partial}{\partial t}$ and $\mathbf{p} \to -i\hbar \boldsymbol{\nabla}$:
$$-\hbar^2 \frac{\partial^2 \psi}{\partial t^2} = -\hbar^2 c^2 \nabla^2 \psi + m^2 c^4 \psi$$

$$\left( \Box + \frac{m^2 c^2}{\hbar^2} \right) \psi = 0 \quad \text{where } \Box = \frac{1}{c^2}\frac{\partial^2}{\partial t^2} - \nabla^2$$

#### Probability Density Difficulty
The continuity equation $\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot \mathbf{j} = 0$ yields:
$$\rho = \frac{i\hbar}{2mc^2} \left( \psi^* \frac{\partial \psi}{\partial t} - \psi \frac{\partial \psi^*}{\partial t} \right)$$

Because the equation is second-order in time, $\psi$ and $\frac{\partial \psi}{\partial t}$ can be specified independently, leading to **non-definite (negative) probability densities**.
*(In modern Quantum Field Theory, $\rho$ is interpreted as charge density, not probability density).*

---

### 4.2 Dirac Equation
To solve the negative probability issue, Paul Dirac linearized the Hamiltonian in terms of first-order derivatives:

$$H = c \, \boldsymbol{\alpha} \cdot \mathbf{p} + \beta m c^2 = -i\hbar c \sum_{k=1}^3 \alpha_k \frac{\partial}{\partial x_k} + \beta m c^2$$

For $H^2 \psi = (p^2 c^2 + m^2 c^4)\psi$, coefficients $\alpha_1, \alpha_2, \alpha_3, \beta$ must satisfy:

1.  $\alpha_i^2 = \mathbb{I}, \quad \beta^2 = \mathbb{I}$
2.  $\{\alpha_i, \alpha_j\} = \alpha_i \alpha_j + \alpha_j \alpha_i = 2 \delta_{ij} \mathbb{I}$
3.  $\{\alpha_i, \beta\} = \alpha_i \beta + \beta \alpha_i = 0$

These properties require matrices of minimum dimension **$4 \times 4$**.

#### Standard Pauli-Dirac Representation
$$\boldsymbol{\alpha} = \begin{pmatrix} \mathbf{0} & \boldsymbol{\sigma} \\ \boldsymbol{\sigma} & \mathbf{0} \end{pmatrix}, \quad \beta = \begin{pmatrix} \mathbb{I}_{2\times 2} & \mathbf{0} \\ \mathbf{0} & -\mathbb{I}_{2\times 2} \end{pmatrix}$$

where $\boldsymbol{\sigma} = (\sigma_x, \sigma_y, \sigma_z)$ are the $2\times 2$ Pauli spin matrices.

### 4.3 Covariant Dirac Equation and Gamma Matrices
Multiplying Dirac equation by $\beta/c$ yields:
$$\left( i \gamma^\mu \partial_\mu - \frac{mc}{\hbar} \right) \psi = 0$$

where Dirac **Gamma Matrices ($\gamma^\mu$)** are:
$$\gamma^0 = \beta = \begin{pmatrix} \mathbb{I} & \mathbf{0} \\ \mathbf{0} & -\mathbb{I} \end{pmatrix}, \quad \boldsymbol{\gamma} = \beta \boldsymbol{\alpha} = \begin{pmatrix} \mathbf{0} & \boldsymbol{\sigma} \\ -\boldsymbol{\sigma} & \mathbf{0} \end{pmatrix}$$

#### Clifford Algebra Anti-commutation Relation
$$\{\gamma^\mu, \gamma^\nu\} = \gamma^\mu \gamma^\nu + \gamma^\nu \gamma^\mu = 2 g^{\mu\nu} \mathbb{I}_{4\times 4}$$

### 4.4 Probability Density and Current
Define Dirac adjoint spinor $\bar{\psi} = \psi^\dagger \gamma^0$.

*   **4-Vector Current:** $J^\mu = c \bar{\psi} \gamma^\mu \psi$
*   **Probability Density:** $\rho = \frac{1}{c} J^0 = \psi^\dagger \psi = \sum_{a=1}^4 |\psi_a|^2 \ge 0$ **(Strictly Positive Definite!)**
*   **Probability Current:** $\mathbf{j} = c \bar{\psi} \boldsymbol{\gamma} \psi = c \psi^\dagger \boldsymbol{\alpha} \psi$

### 4.5 Spin and Orbital Angular Momentum Conservation
For a free Dirac particle, evaluate commutator of Orbital Angular Momentum $\mathbf{L} = \mathbf{r} \times \mathbf{p}$ with $H$:
$$[L_x, H] = [y p_z - z p_y, c (\alpha_x p_x + \alpha_y p_y + \alpha_z p_z) + \beta m c^2] = i\hbar c (\alpha_y p_z - \alpha_z p_y) \neq 0$$

Orbital angular momentum is **NOT** conserved!

Define Spin Operator $\mathbf{S} = \frac{\hbar}{2} \boldsymbol{\Sigma} = \frac{\hbar}{2} \begin{pmatrix} \boldsymbol{\sigma} & \mathbf{0} \\ \mathbf{0} & \boldsymbol{\sigma} \end{pmatrix}$:
$$[S_x, H] = -i\hbar c (\alpha_y p_z - \alpha_z p_y)$$

Adding the two commutators gives:
$$[\mathbf{L} + \mathbf{S}, H] = 0 \implies \mathbf{J} = \mathbf{L} + \mathbf{S} \text{ is the conserved total angular momentum.}$$

Thus, intrinsic spin $s = 1/2$ arises naturally from relativistic invariance!

---

## 5. SEMI-CLASSICAL THEORY OF RADIATION

### 5.1 Atom-Field Interaction Hamiltonian
In semi-classical radiation theory, the atomic system is quantized while the electromagnetic radiation field is treated classically.

For an electron in a potential $V(r)$ interacting with an EM wave with vector potential $\mathbf{A}(\mathbf{r}, t)$:
$$H = \frac{1}{2m}\left( \mathbf{p} - e\mathbf{A} \right)^2 + V(r) = \frac{p^2}{2m} + V(r) - \frac{e}{2m}(\mathbf{p}\cdot\mathbf{A} + \mathbf{A}\cdot\mathbf{p}) + \frac{e^2}{2m}\mathbf{A}^2$$

In Coulomb Gauge ($\boldsymbol{\nabla} \cdot \mathbf{A} = 0 \implies [\mathbf{p}, \mathbf{A}] = 0$), neglecting small quadratic $\mathbf{A}^2$ terms:
$$H = H_0 + H_{\text{int}}(t) \quad \text{where } H_{\text{int}}(t) = -\frac{e}{m} \mathbf{A} \cdot \mathbf{p}$$

For a monochromatic wave $\mathbf{A}(\mathbf{r}, t) = 2 A_0 \hat{\boldsymbol{\epsilon}} \cos(\mathbf{k}\cdot\mathbf{r} - \omega t) = A_0 \hat{\boldsymbol{\epsilon}} \left( e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)} + e^{-i(\mathbf{k}\cdot\mathbf{r} - \omega t)} \right)$.

### 5.2 Electric Dipole Approximation (E1)
When the wavelength of radiation is much larger than atomic dimensions ($\lambda \gg a_0 \implies \mathbf{k} \cdot \mathbf{r} \ll 1$):
$$e^{\pm i \mathbf{k} \cdot \mathbf{r}} \approx 1$$

Using quantum commutator identity $[r_i, H_0] = \frac{i\hbar}{m} p_i \implies \mathbf{p} = \frac{i m}{\hbar} [H_0, \mathbf{r}]$:
$$\langle f | \mathbf{p} | i \rangle = \frac{i m}{\hbar} \langle f | (H_0 \mathbf{r} - \mathbf{r} H_0) | i \rangle = i m \omega_{fi} \langle f | \mathbf{r} | i \rangle$$

The dipole interaction Hamiltonian simplifies to:
$$H_{\text{int}}(t) = -e \mathbf{r} \cdot \mathbf{E}(t) = -\mathbf{d} \cdot \mathbf{E}(t)$$

where $\mathbf{d} = e \mathbf{r}$ is the **Electric Dipole Moment Operator**.

### 5.3 Transition Rates and Einstein A and B Coefficients
Using Fermi's Golden Rule from Time-Dependent Perturbation Theory:
$$w_{i \to f} = \frac{2\pi}{\hbar} |\langle f | H_{\text{int}} | i \rangle|^2 \rho(E_f)$$

For an unpolarized isotropic radiation field with spectral energy density $u(\nu)$:

*   **Stimulated Absorption Rate:** $W_{1 \to 2} = B_{12} u(\nu)$
*   **Stimulated Emission Rate:** $W_{2 \to 1}^{\text{stim}} = B_{21} u(\nu)$
*   **Spontaneous Emission Rate:** $A_{21}$

```
 State 2 (E_2)  -------o-------       -------o-------       -------o-------
                        |                     |                     |
                  Absorption             Stimulated             Spontaneous
                   (B_12)                 Emission               Emission
                        |                     | (B_21)              | (A_21)
                        v                     v                     v
 State 1 (E_1)  ---------------       ---------------       ---------------
```

#### Einstein's Thermodynamic Relations
Equating rates at thermal equilibrium with Planck's Radiation Law $u(\nu) = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_B T} - 1}$:

$$B_{12} = B_{21} = \frac{\pi e^2}{3 \epsilon_0 \hbar^2} |\mathbf{r}_{fi}|^2$$

$$A_{21} = \frac{8 \pi h \nu^3}{c^3} B_{21} = \frac{\omega_{ba}^3 e^2}{3 \pi \epsilon_0 \hbar c^3} |\langle f | \mathbf{r} | i \rangle|^2$$

### 5.4 Dipole Selection Rules
For transition matrix element $\langle n' l' m_l' | \mathbf{r} | n l m_l \rangle \neq 0$:

1.  **Orbital Angular Momentum:** $\Delta l = l' - l = \pm 1$
2.  **Magnetic Quantum Number:** $\Delta m_l = m_l' - m_l = 0, \pm 1$
    *   $\Delta m_l = 0 \implies$ Light polarized parallel to $z$-axis ($\pi$-polarization).
    *   $\Delta m_l = \pm 1 \implies$ Circularly polarized light in $xy$-plane ($\sigma^\pm$-polarization).

---

## High-Yield Summary Box: Quantum Mechanics Formulas

$$\begin{array}{|l|l|}
\hline
\textbf{Physical Concept} & \textbf{Mathematical Formula / Core Identity} \\ \hline
\text{Fine Structure Shift} & E_{n,j} = E_n^{(0)} \left[ 1 + \frac{\alpha^2}{n^2} \left( \frac{n}{j+1/2} - \frac{3}{4} \right) \right] \\ \hline
\text{WKB Quantization Condition} & \int_{x_1}^{x_2} p(x) \, dx = \left( n + \frac{\gamma}{4} \right) \pi \hbar \\ \hline
\text{WKB Tunneling Factor} & T \approx \exp\left( -\frac{2}{\hbar} \int_a^b \sqrt{2m(V(x)-E)} \, dx \right) \\ \hline
\text{Partial Wave Scattering} & \sigma_{\text{tot}} = \frac{4\pi}{k^2} \sum_l (2l+1) \sin^2(\delta_l) \\ \hline
\text{Optical Theorem} & \sigma_{\text{tot}} = \frac{4\pi}{k} \text{Im}[f(0)] \\ \hline
\text{1st Born Approximation} & f(\theta) = -\frac{2m}{\hbar^2 q} \int_0^\infty r V(r) \sin(qr) \, dr, \quad q = 2k\sin(\theta/2) \\ \hline
\text{Klein-Gordon Equation} & \left( \Box + \frac{m^2 c^2}{\hbar^2} \right) \psi = 0 \\ \hline
\text{Dirac Matrix Algebra} & \{\alpha_i, \alpha_j\} = 2\delta_{ij}\mathbb{I}, \quad \{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}\mathbb{I} \\ \hline
\text{Dirac Conserved Quantity} & \mathbf{J} = \mathbf{L} + \mathbf{S}, \quad \mathbf{S} = \frac{\hbar}{2}\boldsymbol{\Sigma} \\ \hline
\text{Einstein A Factor} & A_{21} = \frac{\omega^3 e^2}{3 \pi \epsilon_0 \hbar c^3} |\langle f | \mathbf{r} | i \rangle|^2 \\ \hline
\end{array}$$

---

# COMPREHENSIVE SOLVED EXEMPLAR PROBLEMS FOR CSIR NET EXAM PREPARATION

---

## Problem 1: Classical Mechanics (Phase Portrait & Fixed Points)
**Question:** A non-linear physical oscillator is governed by the second-order equation of motion:
$$\ddot{x} + x - x^3 = 0$$
(a) Convert this system to a 2D autonomous system and find all fixed points.
(b) Evaluate the Jacobian matrix at each fixed point and classify their stability.

**Solution:**
**(a) System Transformation:**
Let $x_1 = x$ and $x_2 = \dot{x}$.
$$\dot{x}_1 = x_2 = f_1(x_1, x_2)$$
$$\dot{x}_2 = -x_1 + x_1^3 = f_2(x_1, x_2)$$

For fixed points, set $\dot{x}_1 = 0$ and $\dot{x}_2 = 0$:
1. $x_2 = 0$
2. $-x_1(1 - x_1^2) = 0 \implies x_1 = 0, \pm 1$

Thus, there are **three fixed points**: $(0,0)$, $(1,0)$, and $(-1,0)$.

**(b) Linear Stability Analysis:**
The general Jacobian matrix is:
$$\mathbb{J}(x_1, x_2) = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -1 + 3x_1^2 & 0 \end{pmatrix}$$

1. **At Fixed Point $(0,0)$:**
   $$\mathbb{J}_{(0,0)} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$
   * $\text{Tr}(\mathbb{J}) = 0$, $\det(\mathbb{J}) = 0 - (-1) = 1 > 0$.
   * Eigenvalues: $\lambda^2 + 1 = 0 \implies \lambda = \pm i$.
   * **Classification:** **Center** (neutrally stable, closed elliptical orbits).

2. **At Fixed Points $(\pm 1, 0)$:**
   $$\mathbb{J}_{(\pm 1, 0)} = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$$
   * $\text{Tr}(\mathbb{J}) = 0$, $\det(\mathbb{J}) = -2 < 0$.
   * Eigenvalues: $\lambda^2 - 2 = 0 \implies \lambda = \pm \sqrt{2}$.
   * **Classification:** **Saddle Points** (Unstable).

---

## Problem 2: Electromagnetic Theory (Waveguide Cutoff & Mode Calculation)
**Question:** A hollow rectangular metallic waveguide has dimensions $a = 4\text{ cm}$ and $b = 2\text{ cm}$.
(a) Determine all propagating modes if an electromagnetic signal of frequency $f = 10\text{ GHz}$ is injected into the waveguide.
(b) Calculate the phase velocity $v_p$ and group velocity $v_g$ for the dominant mode.

**Solution:**
**(a) Propagation Condition:** A mode propogates if $f > f_{mn}$.
Cutoff frequency formula:
$$f_{mn} = \frac{c}{2} \sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

Substitute $c = 3 \times 10^{10} \text{ cm/s}$, $a = 4\text{ cm}$, $b = 2\text{ cm}$:
$$f_{mn} = \frac{3 \times 10^{10}}{2} \sqrt{\left(\frac{m}{4}\right)^2 + \left(\frac{n}{2}\right)^2} = 1.5 \times 10^{10} \sqrt{\frac{m^2}{16} + \frac{n^2}{4}} \text{ Hz} = 3.75 \sqrt{m^2 + 4n^2} \text{ GHz}$$

Let's test possible $(m,n)$ modes:
* $\mathbf{\text{TE}_{10}}$: $f_{10} = 3.75 \sqrt{1 + 0} = \mathbf{3.75\text{ GHz}} < 10\text{ GHz}$ (Propagates)
* $\mathbf{\text{TE}_{20}}$: $f_{20} = 3.75 \sqrt{4 + 0} = \mathbf{7.50\text{ GHz}} < 10\text{ GHz}$ (Propagates)
* $\mathbf{\text{TE}_{01} / \text{TM}_{01}}$: $f_{01} = 3.75 \sqrt{0 + 4} = \mathbf{7.50\text{ GHz}} < 10\text{ GHz}$ ($\text{TE}_{01}$ Propagates; $\text{TM}_{01}$ does not exist)
* $\mathbf{\text{TE}_{11} / \text{TM}_{11}}$: $f_{11} = 3.75 \sqrt{1 + 4} = 3.75 \sqrt{5} \approx \mathbf{8.385\text{ GHz}} < 10\text{ GHz}$ (Both Propagate)
* $\mathbf{\text{TE}_{30}}$: $f_{30} = 3.75 \sqrt{9} = \mathbf{11.25\text{ GHz}} > 10\text{ GHz}$ (Cut-off / Fails to propagate)

$$\text{Propagating Modes: } \mathbf{\text{TE}_{10}, \text{TE}_{20}, \text{TE}_{01}, \text{TE}_{11}, \text{TM}_{11}}$$

**(b) Velocity Calculations for Dominant $\text{TE}_{10}$ Mode ($f_{10} = 3.75\text{ GHz}$):**
$$\sqrt{1 - \left(\frac{f_{10}}{f}\right)^2} = \sqrt{1 - \left(\frac{3.75}{10}\right)^2} = \sqrt{1 - 0.140625} = \sqrt{0.859375} \approx 0.927$$

* **Phase Velocity:**
  $$v_p = \frac{c}{0.927} = \frac{3 \times 10^8 \text{ m/s}}{0.927} \approx \mathbf{3.236 \times 10^8 \text{ m/s}}$$
* **Group Velocity:**
  $$v_g = c \times 0.927 = (3 \times 10^8 \text{ m/s}) \times 0.927 = \mathbf{2.781 \times 10^8 \text{ m/s}}$$

---

## Problem 3: Quantum Mechanics (Born Approximation Scattering)
**Question:** Calculate the differential scattering cross-section $\frac{d\sigma}{d\Omega}$ in the First Born Approximation for a 3D spherically symmetric delta-shell potential:
$$V(r) = V_0 \, \delta(r - R)$$

**Solution:**
In First Born Approximation for spherical potential:
$$f(\theta) = -\frac{2m}{\hbar^2 q} \int_0^{\infty} r V(r) \sin(qr) \, dr$$

Substitute $V(r) = V_0 \delta(r - R)$:
$$f(\theta) = -\frac{2m}{\hbar^2 q} \int_0^{\infty} r \big[ V_0 \delta(r - R) \big] \sin(qr) \, dr = -\frac{2m V_0 R}{\hbar^2 q} \sin(qR)$$

Recall momentum transfer magnitude: $q = 2k \sin\left(\frac{\theta}{2}\right)$.

The differential cross-section is:
$$\frac{d\sigma}{d\Omega} = |f(\theta)|^2 = \frac{4 m^2 V_0^2 R^2}{\hbar^4 q^2} \sin^2(qR) = \frac{4 m^2 V_0^2 R^2}{\hbar^4 \left(4k^2 \sin^2(\theta/2)\right)} \sin^2\left(2k R \sin(\theta/2)\right)$$

$$\frac{d\sigma}{d\Omega} = \frac{m^2 V_0^2 R^2}{\hbar^4 k^2 \sin^2(\theta/2)} \sin^2\left(2k R \sin(\theta/2)\right)$$
