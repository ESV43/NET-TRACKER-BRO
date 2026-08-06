# Comprehensive Study Notes: Mathematical Methods of Physics

---

## MODULE 1: DIMENSIONAL ANALYSIS & SCALING LAWS

### 1.1 Theoretical Foundations & Buckingham $\pi$ Theorem

Dimensional analysis is a fundamental mathematical tool used to deduce relationships between physical quantities by examining their base dimensions. In any physically meaningful equation, the dimensions of the terms on both sides must be identical (**Principle of Dimensional Homogeneity**).

#### Base Quantities in Physics
In classical and quantum physics, quantities are expressed in terms of fundamental dimensions:
* Mass $[M]$
* Length $[L]$
* Time $[T]$
* Electric Current $[I]$
* Temperature $[\Theta]$
* Amount of substance $[N]$
* Luminous intensity $[J]$

#### Buckingham $\pi$ Theorem
If a physical process involves $n$ dimensional variables $x_1, x_2, \dots, x_n$, which are expressible in terms of $m$ independent fundamental dimensions, then the relationship describing the system can be rewritten as an equation involving $k = n - m$ dimensionless parameters (called $\pi$-groups):

$$\Phi(\pi_1, \pi_2, \dots, \pi_k) = 0 \quad \text{or} \quad \pi_1 = \Psi(\pi_2, \dots, \pi_k)$$

#### Systematic Procedure for Constructing $\pi$-Groups
1. List all $n$ physical variables involved in the problem: $x_1, x_2, \dots, x_n$.
2. Express each variable in terms of fundamental dimensions $[M, L, T, \dots]$. Count the number of primary dimensions $m$.
3. Select $m$ repeating variables. Criteria for selection:
   * No two repeating variables can have the same dimensional formula.
   * Together, the repeating variables must contain all $m$ primary dimensions.
   * They must not form a dimensionless combination among themselves.
4. Set up $k = n - m$ equations for the non-repeating variables combined with powers of the repeating variables to form dimensionless $\pi$-groups.
5. Solve the linear algebraic system for the exponents to yield explicit dimensionless ratios.

---

### 1.2 Mathematical Derivation: Taylor-Sedov Blast Wave Scaling

Consider an intense spherical explosion releasing an amount of energy $E$ in a medium of uniform density $\rho$. We wish to determine the blast wave radius $R$ as a function of time $t$.

#### Step 1: Identify Physical Variables
The system depends on variables: $R$ (radius), $t$ (time), $E$ (energy), $\rho$ (density). Total variables $n = 4$.

#### Step 2: Write Dimensional Matrix
The fundamental dimensions involved are $[M], [L], [T]$, so $m = 3$.

$$[R] = L^1 M^0 T^0$$
$$[t] = L^0 M^0 T^1$$
$$[E] = M L^2 T^{-2}$$
$$[\rho] = M L^{-3} T^0$$

The number of dimensionless groups is $k = n - m = 4 - 3 = 1$.

#### Step 3: Form the Dimensionless Group $\pi_1$
Set $\pi_1 = R \cdot E^a \cdot \rho^b \cdot t^c$. Substituting the dimensions:

$$[\pi_1] = (L) \cdot (M L^2 T^{-2})^a \cdot (M L^{-3})^b \cdot (T)^c = M^0 L^0 T^0$$

Group exponents by fundamental dimensions:
* Mass $[M]$: $a + b = 0 \implies b = -a$
* Length $[L]$: $1 + 2a - 3b = 0$
* Time $[T]$: $-2a + c = 0 \implies c = 2a$

Substitute $b = -a$ into the length equation:

$$1 + 2a - 3(-a) = 0 \implies 1 + 5a = 0 \implies a = -\frac{1}{5}$$

Thus:

$$b = \frac{1}{5}, \quad c = -\frac{2}{5}$$

#### Step 4: Construct the Physical Scaling Relation

$$\pi_1 = R \cdot E^{-1/5} \cdot \rho^{1/5} \cdot t^{-2/5} = R \left( \frac{\rho}{E t^2} \right)^{1/5} = C$$

Where $C$ is a dimensionless constant of order unity. Therefore, the radius of the blast wave scales as:

$$R(t) = C \left( \frac{E}{\rho} \right)^{1/5} t^{2/5}$$

---

### 1.3 Formula Master List: Dimensional Analysis

| Physical Quantity | Dimensional Formula | Key Scaling Law / Relation |
| :--- | :--- | :--- |
| **Force / Tension** | $[M L T^{-2}]$ | $F = m a$ |
| **Energy / Work / Torque** | $[M L^2 T^{-2}]$ | $E \sim m v^2$ |
| **Dynamic Viscosity ($\eta$)** | $[M L^{-1} T^{-1}]$ | Stokes Drag: $F = 6\pi \eta r v$ |
| **Kinematic Viscosity ($\nu$)** | $[L^2 T^{-1}]$ | $\nu = \eta / \rho$ |
| **Surface Tension ($\gamma$)** | $[M T^{-2}]$ | Pressure jump $\Delta P = 2\gamma / R$ |
| **Thermal Conductivity ($k$)** | $[M L T^{-3} \Theta^{-1}]$ | Heat flux $q = -k \nabla T$ |
| **Diffusivity ($D$)** | $[L^2 T^{-1}]$ | Diffusion distance $x \sim \sqrt{D t}$ |
| **Planetary Orbital Period ($T$)** | $[T]$ | Kepler's 3rd Law: $T^2 \propto a^3 / (GM)$ |

---

### 1.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Viscous Drag Force at Low Reynolds Number
**Problem:** The viscous drag force $F$ acting on a small sphere falling through a viscous fluid depends on its velocity $v$, radius $r$, and dynamic viscosity $\eta$. Using dimensional analysis, derive the functional form of $F$.

**Solution:**
1. Let $F = C \cdot \eta^a \cdot r^b \cdot v^c$, where $C$ is a dimensionless constant.
2. Insert dimensions:

   $$[M L T^{-2}] = [M L^{-1} T^{-1}]^a \cdot [L]^b \cdot [L T^{-1}]^c$$

3. Equate exponents:
   * Mass $[M]$: $1 = a \implies a = 1$
   * Time $[T]$: $-2 = -a - c \implies -2 = -1 - c \implies c = 1$
   * Length $[L]$: $1 = -a + b + c \implies 1 = -1 + b + 1 \implies b = 1$

4. Resulting expression:

   $$F = C \, \eta \, r \, v$$

*(Hydrodynamic derivation via Navier-Stokes equations reveals $C = 6\pi$, giving Stokes' Law $F = 6\pi \eta r v$.)*

---

## MODULE 2: VECTOR ALGEBRA & VECTOR CALCULUS

### 2.1 Curvilinear Coordinate Systems & Scale Factors

In general orthogonal curvilinear coordinates $(u_1, u_2, u_3)$, an infinitesimal displacement vector $d\vec{r}$ is expressed in terms of scale factors $h_1, h_2, h_3$:

$$d\vec{r} = h_1 du_1 \hat{e}_1 + h_2 du_2 \hat{e}_2 + h_3 du_3 \hat{e}_3$$

where scale factors are defined as $h_i = \left| \frac{\partial \vec{r}}{\partial u_i} \right|$.

```
     Coordinate Systems & Scale Factors Summary
     
     Cartesian (x, y, z): 
       u1 = x, u2 = y, u3 = z  -->  h1 = 1, h2 = 1, h3 = 1
     
     Cylindrical (r, φ, z): 
       u1 = r, u2 = φ, u3 = z  -->  h1 = 1, h2 = r, h3 = 1
     
     Spherical Polar (r, θ, φ): 
       u1 = r, u2 = θ, u3 = φ  -->  h1 = 1, h2 = r, h3 = r sinθ
```

#### Differential Vector Operators in General Orthogonal Coordinates

##### Gradient ($\nabla f$):
$$\nabla f = \frac{1}{h_1} \frac{\partial f}{\partial u_1} \hat{e}_1 + \frac{1}{h_2} \frac{\partial f}{\partial u_2} \hat{e}_2 + \frac{1}{h_3} \frac{\partial f}{\partial u_3} \hat{e}_3$$

##### Divergence ($\nabla \cdot \vec{A}$):
$$\nabla \cdot \vec{A} = \frac{1}{h_1 h_2 h_3} \left[ \frac{\partial}{\partial u_1}(h_2 h_3 A_1) + \frac{\partial}{\partial u_2}(h_1 h_3 A_2) + \frac{\partial}{\partial u_3}(h_1 h_2 A_3) \right]$$

##### Curl ($\nabla \times \vec{A}$):
$$\nabla \times \vec{A} = \frac{1}{h_1 h_2 h_3} \begin{vmatrix} h_1 \hat{e}_1 & h_2 \hat{e}_2 & h_3 \hat{e}_3 \\ \frac{\partial}{\partial u_1} & \frac{\partial}{\partial u_2} & \frac{\partial}{\partial u_3} \\ h_1 A_1 & h_2 A_2 & h_3 A_3 \end{vmatrix}$$

##### Laplacian ($\nabla^2 f$):
$$\nabla^2 f = \frac{1}{h_1 h_2 h_3} \left[ \frac{\partial}{\partial u_1}\left(\frac{h_2 h_3}{h_1} \frac{\partial f}{\partial u_1}\right) + \frac{\partial}{\partial u_2}\left(\frac{h_1 h_3}{h_2} \frac{\partial f}{\partial u_2}\right) + \frac{\partial}{\partial u_3}\left(\frac{h_1 h_2}{h_3} \frac{\partial f}{\partial u_3}\right) \right]$$

---

### 2.2 Explicit Representations in Cylindrical and Spherical Coordinates

#### 1. Cylindrical Coordinates $(r, \phi, z)$
* $x = r \cos\phi, \quad y = r \sin\phi, \quad z = z$
* Scale factors: $h_r = 1, \quad h_\phi = r, \quad h_z = 1$

##### Gradient:
$$\nabla f = \frac{\partial f}{\partial r} \hat{r} + \frac{1}{r} \frac{\partial f}{\partial \phi} \hat{\phi} + \frac{\partial f}{\partial z} \hat{z}$$

##### Divergence:
$$\nabla \cdot \vec{A} = \frac{1}{r} \frac{\partial}{\partial r}(r A_r) + \frac{1}{r} \frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z}$$

##### Laplacian:
$$\nabla^2 f = \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial f}{\partial r}\right) + \frac{1}{r^2} \frac{\partial^2 f}{\partial \phi^2} + \frac{\partial^2 f}{\partial z^2}$$

#### 2. Spherical Polar Coordinates $(r, \theta, \phi)$
* $x = r \sin\theta \cos\phi, \quad y = r \sin\theta \sin\phi, \quad z = r \cos\theta$
* Scale factors: $h_r = 1, \quad h_\theta = r, \quad h_\phi = r \sin\theta$

##### Gradient:
$$\nabla f = \frac{\partial f}{\partial r} \hat{r} + \frac{1}{r} \frac{\partial f}{\partial \theta} \hat{\theta} + \frac{1}{r \sin\theta} \frac{\partial f}{\partial \phi} \hat{\phi}$$

##### Divergence:
$$\nabla \cdot \vec{A} = \frac{1}{r^2} \frac{\partial}{\partial r}(r^2 A_r) + \frac{1}{r \sin\theta} \frac{\partial}{\partial \theta}(\sin\theta A_\theta) + \frac{1}{r \sin\theta} \frac{\partial A_\phi}{\partial \phi}$$

##### Curl:
$$\nabla \times \vec{A} = \frac{1}{r \sin\theta} \left[ \frac{\partial}{\partial \theta}(\sin\theta A_\phi) - \frac{\partial A_\theta}{\partial \phi} \right] \hat{r} + \frac{1}{r} \left[ \frac{1}{\sin\theta} \frac{\partial A_r}{\partial \phi} - \frac{\partial}{\partial r}(r A_\phi) \right] \hat{\theta} + \frac{1}{r} \left[ \frac{\partial}{\partial r}(r A_\theta) - \frac{\partial A_r}{\partial \theta} \right] \hat{\phi}$$

##### Laplacian:
$$\nabla^2 f = \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \frac{\partial f}{\partial r}\right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial f}{\partial \theta}\right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}$$

---

### 2.3 Fundamental Integral Theorems & Vector Identities

#### Gauss's Divergence Theorem
For a volume $V$ bounded by a closed surface $S$:

$$\iiint_V (\nabla \cdot \vec{A}) \, dV = \iint_S \vec{A} \cdot d\vec{S}$$

#### Stokes' Theorem
For an open surface $S$ bounded by a closed contour $C$:

$$\iint_S (\nabla \times \vec{A}) \cdot d\vec{S} = \oint_C \vec{A} \cdot d\vec{\ell}$$

#### Green's Identities
1. **First Identity:**

   $$\iiint_V \left( \phi \nabla^2 \psi + \nabla \phi \cdot \nabla \psi \right) dV = \iint_S (\phi \nabla \psi) \cdot d\vec{S}$$

2. **Second Identity:**

   $$\iiint_V \left( \phi \nabla^2 \psi - \psi \nabla^2 \phi \right) dV = \iint_S \left( \phi \nabla \psi - \psi \nabla \phi \right) \cdot d\vec{S}$$

#### Key Vector Identities
* $\nabla \times (\nabla f) = 0$ (Curl of Gradient is always zero)
* $\nabla \cdot (\nabla \times \vec{A}) = 0$ (Divergence of Curl is always zero)
* $\nabla \times (\nabla \times \vec{A}) = \nabla (\nabla \cdot \vec{A}) - \nabla^2 \vec{A}$
* $\nabla \cdot (\vec{A} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{A}) - \vec{A} \cdot (\nabla \times \vec{B})$
* $\nabla (\vec{A} \cdot \vec{B}) = (\vec{A} \cdot \nabla)\vec{B} + (\vec{B} \cdot \nabla)\vec{A} + \vec{A} \times (\nabla \times \vec{B}) + \vec{B} \times (\nabla \times \vec{A})$

---

### 2.4 Dirac Delta Function & Fundamental Proof

#### Definition and Key Properties
The 1D Dirac Delta function $\delta(x)$ is a generalized function defined by:

$$\delta(x) = 0 \quad \forall x \neq 0, \qquad \text{and} \qquad \int_{-\infty}^{\infty} \delta(x) \, dx = 1$$

##### Fundamental Identities:
1. Sifting Property: $\int_{-\infty}^{\infty} f(x) \delta(x - a) \, dx = f(a)$
2. Scaling Property: $\delta(ax) = \frac{1}{|a|} \delta(x)$
3. General Composition Rule:

   $$\delta(g(x)) = \sum_{i} \frac{\delta(x - x_i)}{|g'(x_i)|}, \quad \text{where } g(x_i) = 0 \text{ and } g'(x_i) \neq 0$$

4. Derivative Property: $\int_{-\infty}^{\infty} f(x) \delta'(x - a) \, dx = -f'(a)$
5. Fourier Integral Representation:

   $$\delta(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{ikx} \, dk$$

#### Derivation of Laplacian of $1/r$
We prove that in 3D:

$$\nabla^2 \left( \frac{1}{r} \right) = -4\pi \delta^3(\vec{r})$$

##### Proof:
For $r \neq 0$, compute using spherical radial Laplacian:

$$\nabla^2 \left( \frac{1}{r} \right) = \frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{d}{dr} \left(\frac{1}{r}\right) \right) = \frac{1}{r^2} \frac{d}{dr} \left( r^2 \left(-\frac{1}{r^2}\right) \right) = \frac{1}{r^2} \frac{d}{dr}(-1) = 0$$

Now integrate $\nabla^2 (1/r)$ over a sphere $V$ of radius $R$ centered at the origin:

$$\iiint_V \nabla^2 \left( \frac{1}{r} \right) dV = \iiint_V \nabla \cdot \left[ \nabla \left( \frac{1}{r} \right) \right] dV$$

Apply Gauss's Divergence Theorem:

$$\iint_S \left[ \nabla \left( \frac{1}{r} \right) \right] \cdot d\vec{S} = \iint_S \left( -\frac{\hat{r}}{r^2} \right) \cdot (R^2 \sin\theta \, d\theta \, d\phi \, \hat{r}) \Bigg|_{r=R}$$

$$= -\frac{1}{R^2} R^2 \int_0^\pi \sin\theta \, d\theta \int_0^{2\pi} d\phi = -1 \cdot (2) \cdot (2\pi) = -4\pi$$

Since the volume integral equals $-4\pi$ for any sphere enclosing the origin, and the integrand is zero everywhere except at $r=0$, the integrand must be proportional to a three-dimensional delta function:

$$\nabla^2 \left( \frac{1}{r} \right) = -4\pi \delta^3(\vec{r})$$

---

### 2.5 Solved CSIR NET Exam-Style Examples

#### Example 1: Evaluation of Delta Function Integral
**Problem:** Compute $I = \int_{-\infty}^{\infty} \delta(x^2 - 9) \cos(\pi x) \, dx$.

**Solution:**
1. Identify the composite function inside the delta function: $g(x) = x^2 - 9$.
2. Find roots $g(x) = 0 \implies x_1 = 3, \, x_2 = -3$.
3. Compute derivative $g'(x) = 2x$.
   * At $x_1 = 3: |g'(3)| = |6| = 6$
   * At $x_2 = -3: |g'(-3)| = |-6| = 6$
4. Expand using the composite delta formula:

   $$\delta(x^2 - 9) = \frac{\delta(x - 3)}{6} + \frac{\delta(x + 3)}{6}$$

5. Substitute back into integral:

   $$I = \int_{-\infty}^{\infty} \left[ \frac{\delta(x - 3)}{6} + \frac{\delta(x + 3)}{6} \right] \cos(\pi x) \, dx$$

   $$I = \frac{1}{6} \cos(3\pi) + \frac{1}{6} \cos(-3\pi) = \frac{-1}{6} + \frac{-1}{6} = -\frac{1}{3}$$

---

## MODULE 3: LINEAR ALGEBRA & MATRICES

### 3.1 Classifications and Properties of Matrices

Let $A \in \mathbb{C}^{n \times n}$. We denote transpose by $A^T$, complex conjugate by $A^*$, and conjugate transpose (Hermitian adjoint) by $A^\dagger = (A^*)^T$.

```
                        Matrix Classification Map
                        
        Real Matrices                       Complex Matrices
      ┌───────┴───────┐                   ┌────────┴────────┐
 Symmetric      Anti-Symmetric       Hermitian         Anti-Hermitian
 (A^T = A)       (A^T = -A)          (A^† = A)           (A^† = -A)
      │               │                   │                   │
  Real E-vals     Purely Imag/0       Real E-vals     Purely Imag/0
      │               │                   │                   │
 Orthogonal       Orthogonal          Unitary             Unitary
 (A^T A = I)     (A^T A = I)         (A^† A = I)         (A^† A = I)
```

#### Detailed Properties:

##### 1. Symmetric & Anti-Symmetric Matrices
* **Symmetric ($A^T = A$):** Eigenvalues are real for real symmetric matrices.
* **Anti-Symmetric ($A^T = -A$):** Diagonal elements are zero. Eigenvalues are either purely imaginary or zero. Determinant of an odd-dimensional anti-symmetric matrix is always zero.

##### 2. Hermitian & Anti-Hermitian Matrices
* **Hermitian ($A^\dagger = A$):** Eigenvalues are guaranteed to be real ($\lambda_i \in \mathbb{R}$). Eigenvectors corresponding to distinct eigenvalues are orthogonal under the standard inner product.
* **Anti-Hermitian ($A^\dagger = -A$):** Eigenvalues are purely imaginary or zero ($\lambda_i = i b_i, \, b_i \in \mathbb{R}$).

##### 3. Orthogonal & Unitary Matrices
* **Orthogonal ($A^T A = I$):** Real matrices whose row/column vectors form an orthonormal basis. $\det(A) = \pm 1$.
* **Unitary ($A^\dagger A = I$):** Complex extension of orthogonal matrices. All eigenvalues lie on the unit complex circle: $|\lambda_i| = 1$. Preserves inner products and norms ($\langle Au, Av \rangle = \langle u, v \rangle$).

---

### 3.2 Spectral Theory, Diagonalization & Cayley-Hamilton Theorem

#### Eigenvalue Problem
For $A \in \mathbb{C}^{n \times n}$, non-zero eigenvector $\vec{v}$ and eigenvalue $\lambda$:

$$A \vec{v} = \lambda \vec{v} \implies (A - \lambda I)\vec{v} = 0$$

The characteristic polynomial is $P(\lambda) = \det(A - \lambda I) = 0$.

#### Trace and Determinant Invariants
* $\text{Tr}(A) = \sum_{i=1}^n A_{ii} = \sum_{i=1}^n \lambda_i$
* $\det(A) = \prod_{i=1}^n \lambda_i$

#### Cayley-Hamilton Theorem
Every square matrix $A$ satisfies its own characteristic equation:

$$P(A) = A^n + c_{n-1} A^{n-1} + \dots + c_1 A + c_0 I = 0$$

##### Application: Finding $A^{-1}$ and Matrix Functions
Multiply Cayley-Hamilton equation by $A^{-1}$:

$$A^{-1} = -\frac{1}{c_0} \left( A^{n-1} + c_{n-1} A^{n-2} + \dots + c_1 I \right)$$

Any analytic matrix function $f(A)$ (e.g., $e^A, \sin A$) can be expressed as a polynomial in $A$ of degree at most $n-1$:

$$f(A) = \sum_{k=0}^{n-1} \alpha_k A^k$$

The scalar coefficients $\alpha_k$ are determined by requiring the identity to hold for all eigenvalues $\lambda_i$:

$$f(\lambda_i) = \sum_{k=0}^{n-1} \alpha_k \lambda_i^k$$

---

### 3.3 Derivations: Reality of Eigenvalues and Orthogonality of Eigenvectors for Hermitian Matrices

#### Proof 1: Eigenvalues of a Hermitian Matrix are Real
Let $A^\dagger = A$, and $A \vec{v} = \lambda \vec{v}$ with $\vec{v} \neq 0$.

Take the inner product with $\vec{v}$ from the left:

$$\vec{v}^\dagger A \vec{v} = \vec{v}^\dagger (\lambda \vec{v}) = \lambda (\vec{v}^\dagger \vec{v})$$

Take the Hermitian conjugate of both sides of $A \vec{v} = \lambda \vec{v}$:

$$(A \vec{v})^\dagger = (\lambda \vec{v})^\dagger \implies \vec{v}^\dagger A^\dagger = \lambda^* \vec{v}^\dagger$$

Since $A^\dagger = A$:

$$\vec{v}^\dagger A = \lambda^* \vec{v}^\dagger$$

Multiply by $\vec{v}$ from the right:

$$\vec{v}^\dagger A \vec{v} = \lambda^* (\vec{v}^\dagger \vec{v})$$

Equating the two expressions for $\vec{v}^\dagger A \vec{v}$:

$$\lambda (\vec{v}^\dagger \vec{v}) = \lambda^* (\vec{v}^\dagger \vec{v}) \implies (\lambda - \lambda^*) (\vec{v}^\dagger \vec{v}) = 0$$

Since $\vec{v} \neq 0 \implies \vec{v}^\dagger \vec{v} = \|\vec{v}\|^2 > 0$, we must have:

$$\lambda - \lambda^* = 0 \implies \lambda = \lambda^* \quad \blacksquare$$

#### Proof 2: Eigenvectors corresponding to distinct eigenvalues are orthogonal
Let $A \vec{v}_1 = \lambda_1 \vec{v}_1$ and $A \vec{v}_2 = \lambda_2 \vec{v}_2$ with $\lambda_1 \neq \lambda_2$.

Compute $\vec{v}_2^\dagger A \vec{v}_1$:
1. Acting to the right: $\vec{v}_2^\dagger (A \vec{v}_1) = \lambda_1 (\vec{v}_2^\dagger \vec{v}_1)$
2. Acting to the left: $(\vec{v}_2^\dagger A) \vec{v}_1 = (A \vec{v}_2)^\dagger \vec{v}_1 = (\lambda_2 \vec{v}_2)^\dagger \vec{v}_1 = \lambda_2^* (\vec{v}_2^\dagger \vec{v}_1) = \lambda_2 (\vec{v}_2^\dagger \vec{v}_1)$ (since $\lambda_2 \in \mathbb{R}$).

Subtracting the two results:

$$(\lambda_1 - \lambda_2)(\vec{v}_2^\dagger \vec{v}_1) = 0$$

Since $\lambda_1 \neq \lambda_2 \implies (\lambda_1 - \lambda_2) \neq 0$, we conclude:

$$\vec{v}_2^\dagger \vec{v}_1 = 0 \quad \blacksquare$$

---

### 3.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Evaluation of Matrix Exponential $e^{\theta A}$
**Problem:** Given matrix $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, compute the explicit matrix form of $e^{\theta A}$.

**Solution:**
1. Find characteristic equation of $A$:

   $$\det(A - \lambda I) = \begin{vmatrix} -\lambda & 1 \\ 1 & -\lambda \end{vmatrix} = \lambda^2 - 1 = 0 \implies \lambda_1 = 1, \, \lambda_2 = -1$$

2. By Cayley-Hamilton theorem, any function $f(A) = e^{\theta A}$ can be written as:

   $$f(A) = \alpha_0 I + \alpha_1 A$$

3. Evaluate scalar equations at eigenvalues $\lambda_1 = 1$ and $\lambda_2 = -1$:
   * For $\lambda_1 = 1$: $e^\theta = \alpha_0 + \alpha_1 (1)$
   * For $\lambda_2 = -1$: $e^{-\theta} = \alpha_0 + \alpha_1 (-1)$
4. Solve linear equations for $\alpha_0$ and $\alpha_1$:

   $$\alpha_0 = \frac{e^\theta + e^{-\theta}}{2} = \cosh\theta$$

   $$\alpha_1 = \frac{e^\theta - e^{-\theta}}{2} = \sinh\theta$$

5. Construct matrix exponential $e^{\theta A}$:

   $$e^{\theta A} = (\cosh\theta) \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + (\sinh\theta) \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} \cosh\theta & \sinh\theta \\ \sinh\theta & \cosh\theta \end{pmatrix}$$

---

## MODULE 4: LINEAR ORDINARY DIFFERENTIAL EQUATIONS (ODEs)

### 4.1 First-Order Differential Equations

#### 1. Exact Equations
An ODE $M(x,y)dx + N(x,y)dy = 0$ is exact if and only if:

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

The solution $\psi(x,y) = C$ is obtained from $\frac{\partial \psi}{\partial x} = M$ and $\frac{\partial \psi}{\partial y} = N$.

#### 2. First-Order Linear Differential Equations
Standard Form: $\frac{dy}{dx} + P(x)y = Q(x)$
* Integrating Factor (I.F.):

  $$\mu(x) = \exp\left( \int P(x) \, dx \right)$$

* General Solution:

  $$y(x) = \frac{1}{\mu(x)} \left[ \int \mu(x) Q(x) \, dx + C \right]$$

---

### 4.2 Second-Order Linear ODEs & Particular Integral Methods

Standard inhomogeneous linear ODE with constant coefficients:

$$y'' + p y' + q y = R(x)$$

Complementary function $y_c(x)$ is solved from $y'' + p y' + q y = 0$ via auxiliary equation $m^2 + p m + q = 0$.

#### Method of Variation of Parameters
For any linear 2nd-order equation $y'' + P(x)y' + Q(x)y = R(x)$, if independent homogeneous solutions $y_1(x)$ and $y_2(x)$ are known:
1. Compute the Wronskian $W(y_1, y_2)$:

   $$W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'$$

2. Particular Integral $y_p(x)$ is given by:

   $$y_p(x) = -y_1(x) \int \frac{y_2(x) R(x)}{W(x)} \, dx + y_2(x) \int \frac{y_1(x) R(x)}{W(x)} \, dx$$

---

### 4.3 Frobenius Series Method & Classification of Singular Points

For a second-order linear ODE written in canonical form:

$$y'' + P(x) y' + Q(x) y = 0$$

#### Classification of Points around $x = x_0$:
1. **Ordinary Point:** Both $P(x)$ and $Q(x)$ are analytic at $x = x_0$.
2. **Regular Singular Point (RSP):** $x_0$ is singular, but $(x - x_0)P(x)$ and $(x - x_0)^2 Q(x)$ are analytic at $x = x_0$.
3. **Irregular Singular Point:** $(x - x_0)P(x)$ or $(x - x_0)^2 Q(x)$ is not analytic at $x = x_0$.

#### Frobenius Series Method (around RSP $x = 0$)
Assume solution form:

$$y(x) = \sum_{k=0}^{\infty} a_k x^{k + r}, \quad (a_0 \neq 0)$$

1. Compute $y'(x)$ and $y''(x)$, substitute into the ODE.
2. The coefficient of the lowest power of $x$ set to zero yields the **Indicial Equation** for $r$:

   $$r(r - 1) + p_0 r + q_0 = 0, \quad \text{where } p_0 = \lim_{x\to 0} x P(x), \quad q_0 = \lim_{x\to 0} x^2 Q(x)$$

3. Let $r_1, r_2$ be roots of the indicial equation ($r_1 \ge r_2$):
   * **Case I ($r_1 - r_2 \notin \mathbb{Z}$):** Two independent series solutions: $y_1(x) = y(x, r_1)$, $y_2(x) = y(x, r_2)$.
   * **Case II ($r_1 = r_2 = r$):** Second solution contains a logarithmic term:

     $$y_2(x) = y_1(x) \ln x + \sum_{k=0}^{\infty} b_k x^{k+r}$$

   * **Case III ($r_1 - r_2 = N \in \mathbb{Z}^+$):** Second solution:

     $$y_2(x) = C y_1(x) \ln x + \sum_{k=0}^{\infty} c_k x^{k+r_2}$$

---

### 4.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Variation of Parameters
**Problem:** Find particular solution for $y'' + y = \sec x$.

**Solution:**
1. Homogeneous equation $y'' + y = 0 \implies m^2 + 1 = 0 \implies m = \pm i$.
2. Homogeneous solutions: $y_1(x) = \cos x, \quad y_2(x) = \sin x$.
3. Compute Wronskian $W(y_1, y_2)$:

   $$W = \cos x \cdot (\cos x) - \sin x \cdot (-\sin x) = \cos^2 x + \sin^2 x = 1$$

4. Apply Variation of Parameters formula ($R(x) = \sec x$):

   $$y_p(x) = -\cos x \int \frac{\sin x \sec x}{1} \, dx + \sin x \int \frac{\cos x \sec x}{1} \, dx$$

   $$y_p(x) = -\cos x \int \tan x \, dx + \sin x \int 1 \, dx$$

   $$y_p(x) = -\cos x \ln|\sec x| + x \sin x = \cos x \ln|\cos x| + x \sin x$$

---

## MODULE 5: SPECIAL FUNCTIONS

### 5.1 Legendre Polynomials $P_n(x)$

#### Differential Equation
$$(1 - x^2) y'' - 2x y' + n(n + 1) y = 0$$

#### Generating Function
$$g(x, t) = \frac{1}{\sqrt{1 - 2xt + t^2}} = \sum_{n=0}^{\infty} P_n(x) \, t^n, \quad (|t| < 1, \, |x| \le 1)$$

#### Rodrigues' Formula
$$P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n} (x^2 - 1)^n$$

#### First Few Legendre Polynomials
* $P_0(x) = 1$
* $P_1(x) = x$
* $P_2(x) = \frac{1}{2}(3x^2 - 1)$
* $P_3(x) = \frac{1}{2}(5x^3 - 3x)$
* $P_4(x) = \frac{1}{8}(35x^4 - 30x^2 + 3)$

#### Special Values & Parity
* $P_n(1) = 1$
* $P_n(-1) = (-1)^n$
* $P_n(-x) = (-1)^n P_n(x)$
* $P_{2n+1}(0) = 0$
* $P_{2n}(0) = (-1)^n \frac{(2n)!}{2^{2n} (n!)^2}$

#### Recurrence Relations
1. $(2n + 1) x P_n(x) = (n + 1) P_{n+1}(x) + n P_{n-1}(x)$
2. $n P_n(x) = x P_n'(x) - P_{n-1}'(x)$
3. $P_{n+1}'(x) - P_{n-1}'(x) = (2n + 1) P_n(x)$

#### Orthogonality Theorem & Complete Derivation
$$\int_{-1}^{1} P_n(x) P_m(x) \, dx = \frac{2}{2n + 1} \delta_{nm}$$

##### Proof for $n = m$:
Use the generating function squared:

$$\frac{1}{1 - 2xt + t^2} = \left( \sum_{n=0}^{\infty} P_n(x) t^n \right) \left( \sum_{m=0}^{\infty} P_m(x) t^m \right) = \sum_{n=0}^{\infty} \sum_{m=0}^{\infty} P_n(x) P_m(x) t^{n+m}$$

Integrate both sides with respect to $x$ from $-1$ to $1$:

$$\int_{-1}^{1} \frac{dx}{1 - 2xt + t^2} = \sum_{n=0}^{\infty} \sum_{m=0}^{\infty} t^{n+m} \int_{-1}^{1} P_n(x) P_m(x) \, dx$$

Using orthogonality for $n \neq m$, off-diagonal terms vanish, leaving:

$$\int_{-1}^{1} \frac{dx}{1 - 2xt + t^2} = \sum_{n=0}^{\infty} t^{2n} \int_{-1}^{1} [P_n(x)]^2 \, dx$$

Evaluate the LHS integral directly:

$$\int_{-1}^{1} \frac{dx}{(1 + t^2) - 2tx} = -\frac{1}{2t} \Big[ \ln(1 + t^2 - 2tx) \Big]_{-1}^{1} = -\frac{1}{2t} \left[ \ln(1 - t)^2 - \ln(1 + t)^2 \right]$$

$$= -\frac{1}{t} \left[ \ln(1 - t) - \ln(1 + t) \right] = \frac{1}{t} \ln\left(\frac{1+t}{1-t}\right)$$

Expand $\ln\left(\frac{1+t}{1-t}\right)$ as a Maclaurin series:

$$\frac{1}{t} \ln\left(\frac{1+t}{1-t}\right) = \frac{2}{t} \left( t + \frac{t^3}{3} + \frac{t^5}{5} + \dots \right) = 2 \sum_{n=0}^{\infty} \frac{t^{2n}}{2n + 1}$$

Comparing coefficients of $t^{2n}$ on both sides yields:

$$\int_{-1}^{1} [P_n(x)]^2 \, dx = \frac{2}{2n + 1} \quad \blacksquare$$

---

### 5.2 Bessel Functions $J_\nu(x)$

#### Differential Equation
$$x^2 y'' + x y' + (x^2 - \nu^2) y = 0$$

#### Series Representation
$$J_\nu(x) = \sum_{k=0}^{\infty} \frac{(-1)^k}{k! \, \Gamma(k + \nu + 1)} \left( \frac{x}{2} \right)^{2k + \nu}$$

#### Generating Function (for Integer $n$)
$$g(x, t) = \exp\left[ \frac{x}{2} \left( t - \frac{1}{t} \right) \right] = \sum_{n=-\infty}^{\infty} J_n(x) \, t^n$$

#### Recurrence Relations
1. $J_{\nu-1}(x) + J_{\nu+1}(x) = \frac{2\nu}{x} J_\nu(x)$
2. $J_{\nu-1}(x) - J_{\nu+1}(x) = 2 J_\nu'(x)$
3. $\frac{d}{dx}\left[ x^\nu J_\nu(x) \right] = x^\nu J_{\nu-1}(x)$
4. $\frac{d}{dx}\left[ x^{-\nu} J_\nu(x) \right] = -x^{-\nu} J_{\nu+1}(x)$

#### Half-Integer Bessel Functions
* $J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x$
* $J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}} \cos x$

#### Orthogonality Relation
If $\alpha_{\nu m}, \alpha_{\nu n}$ are roots of $J_\nu(x) = 0$:

$$\int_0^R x \, J_\nu\left( \alpha_{\nu m} \frac{x}{R} \right) J_\nu\left( \alpha_{\nu n} \frac{x}{R} \right) \, dx = \frac{R^2}{2} [J_{\nu+1}(\alpha_{\nu m})]^2 \, \delta_{mn}$$

---

### 5.3 Hermite Polynomials $H_n(x)$

#### Differential Equation
$$y'' - 2x y' + 2n y = 0$$

#### Generating Function
$$g(x, t) = e^{2xt - t^2} = \sum_{n=0}^{\infty} H_n(x) \, \frac{t^n}{n!}$$

#### Rodrigues' Formula
$$H_n(x) = (-1)^n e^{x^2} \frac{d^n}{dx^n} \left( e^{-x^2} \right)$$

#### First Few Hermite Polynomials
* $H_0(x) = 1$
* $H_1(x) = 2x$
* $H_2(x) = 4x^2 - 2$
* $H_3(x) = 8x^3 - 12x$
* $H_4(x) = 16x^4 - 48x^2 + 12$

#### Recurrence Relations
1. $H_{n+1}(x) = 2x H_n(x) - 2n H_{n-1}(x)$
2. $H_n'(x) = 2n H_{n-1}(x)$

#### Orthogonality
$$\int_{-\infty}^{\infty} e^{-x^2} H_n(x) H_m(x) \, dx = 2^n n! \sqrt{\pi} \, \delta_{nm}$$

---

### 5.4 Laguerre & Associated Laguerre Polynomials

#### 1. Laguerre Differential Equation
$$x y'' + (1 - x) y' + n y = 0$$

##### Rodrigues' Formula:
$$L_n(x) = \frac{e^x}{n!} \frac{d^n}{dx^n} \left( x^n e^{-x} \right)$$

##### Generating Function:
$$\frac{e^{-xt/(1-t)}}{1 - t} = \sum_{n=0}^{\infty} L_n(x) \, t^n$$

#### 2. Associated Laguerre Differential Equation
$$x y'' + (k + 1 - x) y' + n y = 0$$

##### Relation to Laguerre Polynomials:
$$L_n^k(x) = (-1)^k \frac{d^k}{dx^k} L_{n+k}(x)$$

##### Orthogonality:
$$\int_0^{\infty} e^{-x} x^k L_n^k(x) L_m^k(x) \, dx = \frac{(n + k)!}{n!} \, \delta_{nm}$$

---

### 5.5 Formula Master Summary: Special Functions

| Function | Differential Equation | Generating Function | Orthogonality Weight $w(x)$ & Interval |
| :--- | :--- | :--- | :--- |
| **Legendre** $P_n(x)$ | $(1-x^2)y'' - 2xy' + n(n+1)y = 0$ | $(1-2xt+t^2)^{-1/2}$ | $w(x) = 1, \quad x \in [-1, 1]$ |
| **Bessel** $J_\nu(x)$ | $x^2 y'' + x y' + (x^2 - \nu^2)y = 0$ | $e^{\frac{x}{2}(t - 1/t)}$ | $w(x) = x, \quad x \in [0, R]$ |
| **Hermite** $H_n(x)$ | $y'' - 2xy' + 2ny = 0$ | $e^{2xt - t^2}$ | $w(x) = e^{-x^2}, \quad x \in (-\infty, \infty)$ |
| **Laguerre** $L_n(x)$ | $x y'' + (1-x) y' + n y = 0$ | $\frac{e^{-xt/(1-t)}}{1-t}$ | $w(x) = e^{-x}, \quad x \in [0, \infty)$ |
| **Assoc. Laguerre** $L_n^k(x)$ | $x y'' + (k+1-x) y' + n y = 0$ | $(1-t)^{-(k+1)} e^{-xt/(1-t)}$ | $w(x) = x^k e^{-x}, \quad x \in [0, \infty)$ |

---

### 5.6 Solved CSIR NET Exam-Style Examples

#### Example 1: Expansion in Legendre Polynomials
**Problem:** Express $f(x) = x^3$ as a linear combination of Legendre polynomials $\sum_{n} c_n P_n(x)$.

**Solution:**
1. List Legendre polynomials up to degree 3:
   * $P_3(x) = \frac{1}{2}(5x^3 - 3x) \implies x^3 = \frac{2}{5} P_3(x) + \frac{3}{5} x$
   * $P_1(x) = x$
2. Substitute $x = P_1(x)$ into $x^3$:

   $$x^3 = \frac{2}{5} P_3(x) + \frac{3}{5} P_1(x)$$

3. Thus, coefficients are $c_3 = \frac{2}{5}, \, c_1 = \frac{3}{5}$, and $c_0 = c_2 = 0$.

#### Example 2: Quantum Oscillator Integral via Hermite Polynomials
**Problem:** Compute $I = \int_{-\infty}^{\infty} e^{-x^2} x^2 H_2(x) H_2(x) \, dx$.

**Solution:**
1. Use recurrence relation $2x H_n(x) = H_{n+1}(x) + 2n H_{n-1}(x)$ to express $x H_2(x)$:

   $$x H_2(x) = \frac{1}{2} H_3(x) + 2 H_1(x)$$

2. The integral becomes:

   $$I = \int_{-\infty}^{\infty} e^{-x^2} [x H_2(x)]^2 \, dx = \int_{-\infty}^{\infty} e^{-x^2} \left[ \frac{1}{2} H_3(x) + 2 H_1(x) \right]^2 dx$$

3. Expand square and apply Hermite orthogonality ($\int e^{-x^2} H_n H_m dx = 2^n n! \sqrt{\pi} \delta_{nm}$):

   $$I = \frac{1}{4} \int_{-\infty}^{\infty} e^{-x^2} [H_3(x)]^2 dx + 4 \int_{-\infty}^{\infty} e^{-x^2} [H_1(x)]^2 dx + 0 \text{ (cross terms)}$$

   $$I = \frac{1}{4} \left( 2^3 \cdot 3! \sqrt{\pi} \right) + 4 \left( 2^1 \cdot 1! \sqrt{\pi} \right)$$

   $$I = \frac{1}{4} (8 \cdot 6 \sqrt{\pi}) + 4 (2 \sqrt{\pi}) = 12\sqrt{\pi} + 8\sqrt{\pi} = 20\sqrt{\pi}$$

---

## MODULE 6: FOURIER SERIES, FOURIER TRANSFORMS & LAPLACE TRANSFORMS

### 6.1 Fourier Series

#### Definition
A periodic function $f(x)$ of period $2L$ satisfying Dirichlet conditions can be expanded as:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right]$$

#### Coefficients (Euler-Fourier Formulas):
$$a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \, dx$$
$$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$$
$$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx$$

#### Complex Form:
$$f(x) = \sum_{n=-\infty}^{\infty} c_n e^{i n \pi x / L}, \quad \text{where } c_n = \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i n \pi x / L} \, dx$$

#### Parseval's Identity for Fourier Series:
$$\frac{1}{2L} \int_{-L}^{L} |f(x)|^2 \, dx = \frac{a_0^2}{4} + \frac{1}{2} \sum_{n=1}^{\infty} (a_n^2 + b_n^2) = \sum_{n=-\infty}^{\infty} |c_n|^2$$

---

### 6.2 Fourier Transform

#### Definition & Conventions
* **Forward Fourier Transform:**

  $$\mathcal{F}\{f(t)\} = F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(t) e^{-i\omega t} \, dt$$

* **Inverse Fourier Transform:**

  $$f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} \, d\omega$$

#### Fundamental Theorems & Properties
1. **Linearity:** $\mathcal{F}\{a f(t) + b g(t)\} = a F(\omega) + b G(\omega)$
2. **Time Shifting:** $\mathcal{F}\{f(t - t_0)\} = e^{-i\omega t_0} F(\omega)$
3. **Frequency Shifting:** $\mathcal{F}\{e^{i\omega_0 t} f(t)\} = F(\omega - \omega_0)$
4. **Scaling:** $\mathcal{F}\{f(at)\} = \frac{1}{|a|} F\left(\frac{\omega}{a}\right)$
5. **Derivative Property:** $\mathcal{F}\left\{ \frac{d^n f(t)}{dt^n} \right\} = (i\omega)^n F(\omega)$
6. **Convolution Theorem:** If $(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) d\tau$, then:

   $$\mathcal{F}\{(f * g)(t)\} = \sqrt{2\pi} \, F(\omega) G(\omega)$$

7. **Parseval's Identity:**

   $$\int_{-\infty}^{\infty} |f(t)|^2 \, dt = \int_{-\infty}^{\infty} |F(\omega)|^2 \, d\omega$$

#### Mathematical Derivation: Fourier Transform of Gaussian Pulse
Find $\mathcal{F}\{e^{-\alpha t^2}\}$ for $\alpha > 0$.

$$F(\omega) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-\alpha t^2} e^{-i\omega t} \, dt$$

Combine terms in exponential:

$$-\alpha t^2 - i\omega t = -\alpha \left( t^2 + \frac{i\omega}{\alpha} t \right) = -\alpha \left( t + \frac{i\omega}{2\alpha} \right)^2 - \frac{\omega^2}{4\alpha}$$

Substitute into integral:

$$F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-\frac{\omega^2}{4\alpha}} \int_{-\infty}^{\infty} \exp\left[ -\alpha \left( t + \frac{i\omega}{2\alpha} \right)^2 \right] dt$$

Shift contour $u = t + \frac{i\omega}{2\alpha} \implies du = dt$. Using standard Gaussian integral $\int_{-\infty}^{\infty} e^{-\alpha u^2} du = \sqrt{\frac{\pi}{\alpha}}$:

$$F(\omega) = \frac{1}{\sqrt{2\pi}} e^{-\frac{\omega^2}{4\alpha}} \sqrt{\frac{\pi}{\alpha}} = \frac{1}{\sqrt{2\alpha}} e^{-\frac{\omega^2}{4\alpha}} \quad \blacksquare$$

---

### 6.3 Laplace Transform

#### Definition
$$\mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) \, dt$$

#### Standard Transforms Master Table

| $f(t)$ | $\mathcal{L}\{f(t)\} = F(s)$ | Region of Convergence |
| :--- | :--- | :--- |
| $1$ | $\frac{1}{s}$ | $s > 0$ |
| $t^n \quad (n \in \mathbb{N})$ | $\frac{n!}{s^{n+1}}$ | $s > 0$ |
| $e^{at}$ | $\frac{1}{s-a}$ | $s > a$ |
| $\sin(at)$ | $\frac{a}{s^2 + a^2}$ | $s > 0$ |
| $\cos(at)$ | $\frac{s}{s^2 + a^2}$ | $s > 0$ |
| $\sinh(at)$ | $\frac{a}{s^2 - a^2}$ | $s > |a|$ |
| $\cosh(at)$ | $\frac{s}{s^2 - a^2}$ | $s > |a|$ |
| $u(t - a)$ (Heaviside Step) | $\frac{e^{-as}}{s}$ | $s > 0$ |
| $\delta(t - a)$ (Dirac Delta) | $e^{-as}$ | All $s$ |

#### Operational Identities
1. **First Shift Theorem:** $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$
2. **Second Shift Theorem:** $\mathcal{L}\{f(t - a) u(t - a)\} = e^{-as} F(s)$
3. **Transform of Derivative:**
   * $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$
   * $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$
   * $\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - \sum_{k=1}^{n} s^{n-k} f^{(k-1)}(0)$
4. **Transform of Integral:** $\mathcal{L}\left\{ \int_0^t f(\tau) d\tau \right\} = \frac{F(s)}{s}$
5. **Multiplication by $t^n$:** $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n F(s)}{ds^n}$
6. **Convolution Theorem:** If $(f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$, then:

   $$\mathcal{L}\{(f * g)(t)\} = F(s) \cdot G(s)$$

---

### 6.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Initial Value Problem via Laplace Transform
**Problem:** Solve $y'' + 4y = \delta(t - 2)$ with $y(0) = 0, \, y'(0) = 0$.

**Solution:**
1. Apply Laplace Transform to both sides:

   $$\mathcal{L}\{y''\} + 4\mathcal{L}\{y\} = \mathcal{L}\{\delta(t - 2)\}$$

2. Substitute derivative formulas and initial conditions $y(0)=0, y'(0)=0$:

   $$[s^2 Y(s) - s y(0) - y'(0)] + 4 Y(s) = e^{-2s}$$

   $$(s^2 + 4) Y(s) = e^{-2s} \implies Y(s) = \frac{e^{-2s}}{s^2 + 4}$$

3. Recognize $\mathcal{L}^{-1}\left\{\frac{1}{s^2 + 4}\right\} = \frac{1}{2} \sin(2t)$.
4. Apply Second Shift Theorem $\mathcal{L}^{-1}\{e^{-as} F(s)\} = f(t - a) u(t - a)$:

   $$y(t) = \frac{1}{2} \sin[2(t - 2)] \, u(t - 2)$$

---

## MODULE 7: ELEMENTS OF COMPLEX ANALYSIS

### 7.1 Complex Differentiability & Cauchy-Riemann Equations

Let $f(z) = u(x,y) + i v(x,y)$, where $z = x + i y$. $f(z)$ is analytic at $z_0$ if it is complex-differentiable at $z_0$ and in its neighborhood.

#### Derivation of Cauchy-Riemann (C-R) Equations
The derivative is defined as:

$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}, \quad \text{where } \Delta z = \Delta x + i \Delta y$$

##### Path 1: Approach along the real axis ($\Delta y = 0, \Delta z = \Delta x$):
$$f'(z) = \lim_{\Delta x \to 0} \frac{[u(x+\Delta x, y) + i v(x+\Delta x, y)] - [u(x,y) + i v(x,y)]}{\Delta x} = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$

##### Path 2: Approach along the imaginary axis ($\Delta x = 0, \Delta z = i \Delta y$):
$$f'(z) = \lim_{\Delta y \to 0} \frac{[u(x, y+\Delta y) + i v(x, y+\Delta y)] - [u(x,y) + i v(x,y)]}{i \Delta y} = \frac{1}{i} \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

Since $f(z)$ is analytic, the limits along both paths must be equal:

$$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

Equating real and imaginary parts gives the **Cauchy-Riemann Equations**:

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \qquad \text{and} \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \quad \blacksquare$$

#### Polar Form of Cauchy-Riemann Equations ($z = r e^{i\theta}$)
$$\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta} \qquad \text{and} \qquad \frac{\partial v}{\partial r} = -\frac{1}{r} \frac{\partial u}{\partial \theta}$$

#### Harmonic Functions
If $f(z) = u + iv$ is analytic, both $u$ and $v$ satisfy Laplace's equation in 2D:

$$\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0, \qquad \nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$$

$v(x,y)$ is called the **harmonic conjugate** of $u(x,y)$.

---

### 7.2 Contour Integration & Cauchy's Theorems

#### Cauchy's Integral Theorem
If $f(z)$ is analytic inside and on a simple closed contour $C$:

$$\oint_C f(z) \, dz = 0$$

#### Cauchy's Integral Formula
If $f(z)$ is analytic inside and on $C$, and $z_0$ is any point inside $C$:

$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz$$

#### Generalized Formula for Derivatives:
$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} \, dz$$

---

### 7.3 Series Expansions & Singularities

#### Laurent Series
Any function $f(z)$ analytic in an open annulus $r_1 < |z - z_0| < r_2$ can be expanded as:

$$f(z) = \sum_{n=0}^{\infty} a_n (z - z_0)^n + \sum_{n=1}^{\infty} \frac{b_n}{(z - z_0)^n}$$

* **Analytic Part:** $\sum_{n=0}^{\infty} a_n (z - z_0)^n$
* **Principal Part:** $\sum_{n=1}^{\infty} \frac{b_n}{(z - z_0)^n}$

```
                     Singularity Classification
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
    Removable                 Pole                    Essential
(No principal terms)     (Finite principal)     (Infinite principal)
  e.g., sin(z)/z          e.g., 1/(z-a)^m           e.g., e^(1/z)
```

#### Residue Calculations

##### 1. Simple Pole ($m = 1$):
$$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$$

If $f(z) = \frac{P(z)}{Q(z)}$ where $P(z_0) \neq 0$ and $Q(z_0) = 0, Q'(z_0) \neq 0$:

$$\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$$

##### 2. Pole of Order $m > 1$:
$$\text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

#### Cauchy's Residue Theorem
$$\oint_C f(z) \, dz = 2\pi i \sum_{k} \text{Res}(f, z_k)$$

where $z_k$ are poles of $f(z)$ contained inside $C$.

---

### 7.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Trigonometric Integral over $[0, 2\pi]$
**Problem:** Evaluate $I = \int_0^{2\pi} \frac{d\theta}{5 + 4\cos\theta}$.

**Solution:**
1. Substitute $z = e^{i\theta} \implies d\theta = \frac{dz}{i z}$, and $\cos\theta = \frac{z + z^{-1}}{2}$.
2. Convert integral to contour integral along unit circle $|z| = 1$:

   $$I = \oint_{|z|=1} \frac{dz / (i z)}{5 + 4\left(\frac{z + z^{-1}}{2}\right)} = \oint_{|z|=1} \frac{dz}{i z \left( 5 + 2z + \frac{2}{z} \right)} = \frac{1}{i} \oint_{|z|=1} \frac{dz}{2z^2 + 5z + 2}$$

3. Find poles of integrand $f(z) = \frac{1}{2z^2 + 5z + 2}$:

   $$2z^2 + 5z + 2 = 0 \implies (2z + 1)(z + 2) = 0 \implies z_1 = -1/2, \, z_2 = -2$$

4. Identify poles inside unit circle $|z| = 1$:
   * $z_1 = -1/2$ lies inside ($|-1/2| = 1/2 < 1$).
   * $z_2 = -2$ lies outside ($|-2| = 2 > 1$).
5. Compute residue at $z_1 = -1/2$:

   $$\text{Res}\left(f, -\frac{1}{2}\right) = \lim_{z \to -1/2} \left(z + \frac{1}{2}\right) \frac{1}{2(z + 1/2)(z + 2)} = \frac{1}{2(-1/2 + 2)} = \frac{1}{2(3/2)} = \frac{1}{3}$$

6. Apply Cauchy's Residue Theorem:

   $$I = \frac{1}{i} \left[ 2\pi i \cdot \text{Res}\left(f, -\frac{1}{2}\right) \right] = 2\pi \left(\frac{1}{3}\right) = \frac{2\pi}{3}$$

#### Example 2: Infinite Real Integral via Upper Half Plane Contour
**Problem:** Compute $I = \int_{-\infty}^{\infty} \frac{dx}{x^2 + 16}$.

**Solution:**
1. Consider corresponding complex function $f(z) = \frac{1}{z^2 + 16}$ over closed contour $C$ consisting of real line $[-R, R]$ and semi-circle $C_R$ in upper half plane.
2. Poles: $z^2 + 16 = 0 \implies z = \pm 4i$.
3. Enclosed pole in upper half-plane: $z = 4i$.
4. Calculate residue at simple pole $z = 4i$:

   $$\text{Res}(f, 4i) = \lim_{z \to 4i} (z - 4i) \frac{1}{(z - 4i)(z + 4i)} = \frac{1}{4i + 4i} = \frac{1}{8i}$$

5. By Residue Theorem:

   $$\oint_C f(z) dz = \int_{-R}^R \frac{dx}{x^2 + 16} + \int_{C_R} f(z) dz = 2\pi i \left( \frac{1}{8i} \right) = \frac{\pi}{4}$$

6. As $R \to \infty$, integral along $C_R$ vanishes by Jordan's Lemma ($|f(z)| \sim 1/R^2 \to 0$).
7. Thus:

   $$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 16} = \frac{\pi}{4}$$

---

## MODULE 8: ELEMENTARY PROBABILITY THEORY & DISTRIBUTIONS

### 8.1 Axiomatic Probability, Random Variables & Expectations

#### Discrete vs. Continuous Random Variables
* **Continuous PDF $f(x)$:** $\int_{-\infty}^{\infty} f(x) \, dx = 1, \quad f(x) \ge 0$
* **Cumulative Distribution Function (CDF):** $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) \, dt$

#### Expectation Values & Moments
* **Mean (1st Moment):** $\mu = \langle X \rangle = E[X] = \int_{-\infty}^{\infty} x f(x) \, dx$
* **$k$-th Raw Moment:** $\mu_k' = E[X^k] = \int_{-\infty}^{\infty} x^k f(x) \, dx$
* **Variance (2nd Central Moment):**

  $$\sigma^2 = \text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$$

#### Moment Generating Function (MGF)
$$M_X(t) = E[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} f(x) \, dx$$

Moments are generated by taking derivatives at $t = 0$:

$$E[X^k] = \left. \frac{d^k M_X(t)}{dt^k} \right|_{t=0}$$

---

### 8.2 Standard Probability Distributions Master List

```
                          Distribution Relationships
                          
       Binomial (n, p)  ──────(n -> ∞, p -> 0, np = λ)──────>  Poisson (λ)
              │                                                     │
              │ (n -> ∞, p fixed)                 (λ -> ∞)          │
              └─────────────────> Gaussian <────────────────────────┘
                                 (μ, σ²)
```

#### 1. Binomial Distribution
* **PMF:** $P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \quad k \in \{0, 1, \dots, n\}$
* **Mean:** $\mu = n p$
* **Variance:** $\sigma^2 = n p (1 - p)$
* **MGF:** $M(t) = (p e^t + 1 - p)^n$

#### 2. Poisson Distribution
Limiting case of Binomial as $n \to \infty, p \to 0$ with $\lambda = np$ fixed.
* **PMF:** $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k \in \{0, 1, 2, \dots\}$
* **Mean:** $\mu = \lambda$
* **Variance:** $\sigma^2 = \lambda$
* **MGF:** $M(t) = \exp[\lambda(e^t - 1)]$

#### 3. Normal (Gaussian) Distribution
* **PDF:** $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left[ -\frac{(x - \mu)^2}{2\sigma^2} \right], \quad x \in (-\infty, \infty)$
* **Mean:** $E[X] = \mu$
* **Variance:** $\text{Var}(X) = \sigma^2$
* **MGF:** $M(t) = \exp\left( \mu t + \frac{1}{2} \sigma^2 t^2 \right)$
* **Higher Central Moments:**
  * Odd moments: $E[(X - \mu)^{2k+1}] = 0$
  * Even moments: $E[(X - \mu)^{2k}] = (2k - 1)!! \, \sigma^{2k}$

---

### 8.3 Central Limit Theorem (CLT) & Formal Proof Outline

#### Theorem Statement
Let $X_1, X_2, \dots, X_N$ be $N$ independent and identically distributed (i.i.d.) random variables, each with finite mean $\mu$ and finite variance $\sigma^2$. Define the sample sum $S_N = \sum_{i=1}^N X_i$.

As $N \to \infty$, the standardized variable $Z_N$:

$$Z_N = \frac{S_N - N\mu}{\sigma \sqrt{N}} = \frac{\bar{X}_N - \mu}{\sigma / \sqrt{N}}$$

converges in distribution to a standard Normal distribution $\mathcal{N}(0, 1)$:

$$\lim_{N \to \infty} P(Z_N \le z) = \Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{z} e^{-t^2/2} \, dt$$

#### Analytical Proof Outline using MGFs
1. Define zero-mean standardized variables $Y_i = \frac{X_i - \mu}{\sigma}$, so $E[Y_i] = 0$ and $\text{Var}(Y_i) = 1$.
2. Write $Z_N = \frac{1}{\sqrt{N}} \sum_{i=1}^N Y_i$.
3. Compute MGF of $Z_N$:

   $$M_{Z_N}(t) = E\left[ \exp\left( t \frac{1}{\sqrt{N}} \sum_{i=1}^N Y_i \right) \right] = \prod_{i=1}^N E\left[ \exp\left( \frac{t Y_i}{\sqrt{N}} \right) \right] = \left[ M_Y\left( \frac{t}{\sqrt{N}} \right) \right]^N$$

4. Expand $M_Y(u)$ in a Maclaurin series around $u = 0$:

   $$M_Y(u) = E[e^{uY}] = 1 + u E[Y] + \frac{u^2}{2!} E[Y^2] + \mathcal{O}(u^3) = 1 + 0 + \frac{u^2}{2} (1) + \mathcal{O}(u^3)$$

5. Substitute $u = \frac{t}{\sqrt{N}}$ into $M_{Z_N}(t)$:

   $$M_{Z_N}(t) = \left[ 1 + \frac{t^2}{2N} + \mathcal{O}\left(N^{-3/2}\right) \right]^N$$

6. Take limit as $N \to \infty$:

   $$\lim_{N \to \infty} M_{Z_N}(t) = \lim_{N \to \infty} \left( 1 + \frac{t^2/2}{N} \right)^N = \exp\left( \frac{t^2}{2} \right)$$

   This is precisely the MGF of a standard normal distribution $\mathcal{N}(0, 1)$. By the continuity theorem for MGFs, $Z_N$ converges to $\mathcal{N}(0, 1)$. $\blacksquare$

---

### 8.4 Solved CSIR NET Exam-Style Examples

#### Example 1: Moment Generating Function of Poisson Distribution
**Problem:** Using the Poisson PMF, derive its moment generating function $M(t)$, and determine its mean and variance.

**Solution:**
1. Apply definition of MGF for discrete variable:

   $$M(t) = E[e^{tX}] = \sum_{k=0}^{\infty} e^{tk} \frac{\lambda^k e^{-\lambda}}{k!} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{(\lambda e^t)^k}{k!}$$

2. Using Maclaurin series for exponential $e^y = \sum_{k=0}^{\infty} \frac{y^k}{k!}$:

   $$M(t) = e^{-\lambda} \exp(\lambda e^t) = \exp[\lambda(e^t - 1)]$$

3. Compute first derivative at $t = 0$:

   $$M'(t) = \lambda e^t \exp[\lambda(e^t - 1)] \implies E[X] = M'(0) = \lambda e^0 \exp[0] = \lambda$$

4. Compute second derivative at $t = 0$:

   $$M''(t) = \lambda e^t \exp[\lambda(e^t - 1)] + (\lambda e^t)^2 \exp[\lambda(e^t - 1)]$$

   $$E[X^2] = M''(0) = \lambda + \lambda^2$$

5. Calculate variance:

   $$\text{Var}(X) = E[X^2] - (E[X])^2 = (\lambda + \lambda^2) - \lambda^2 = \lambda$$

#### Example 2: Central Limit Theorem Application
**Problem:** 100 independent random variables $X_1, X_2, \dots, X_{100}$ are drawn from a uniform distribution $U(0, 1)$. Estimate $P\left( \sum_{i=1}^{100} X_i > 55 \right)$ using the Central Limit Theorem.

*(Given for Standard Normal: $\Phi(0.87) \approx 0.8078$, so $1 - \Phi(0.87) \approx 0.1922$)*

**Solution:**
1. Compute mean $\mu$ and variance $\sigma^2$ of uniform distribution $U(0, 1)$:

   $$\mu = \int_0^1 x \, dx = \frac{1}{2}$$

   $$E[X^2] = \int_0^1 x^2 \, dx = \frac{1}{3} \implies \sigma^2 = \frac{1}{3} - \left(\frac{1}{2}\right)^2 = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$$

2. For sum $S_N = \sum_{i=1}^{100} X_i$ with $N = 100$:
   * Mean of sum: $\mu_S = N \mu = 100 \cdot (1/2) = 50$
   * Variance of sum: $\sigma_S^2 = N \sigma^2 = 100 \cdot (1/12) = 100/12 = 25/3$
   * Standard deviation: $\sigma_S = \sqrt{25/3} = \frac{5}{\sqrt{3}} \approx 2.887$

3. Standardize the variable for $S_{100} = 55$:

   $$Z = \frac{S_N - \mu_S}{\sigma_S} = \frac{55 - 50}{5 / \sqrt{3}} = \frac{5}{5 / \sqrt{3}} = \sqrt{3} \approx 1.732$$

4. Express probability in terms of standard normal distribution $\Phi(z)$:

   $$P(S_{100} > 55) = P(Z > 1.732) = 1 - \Phi(1.732)$$

5. Evaluating using standard normal tables ($\Phi(1.732) \approx 0.9584$):

   $$P(S_{100} > 55) \approx 1 - 0.9584 = 0.0416 \quad (\text{or } 4.16\%)$$

---

## CONSOLIDATED FORMULA SHEET FOR QUICK CSIR NET REVISION

### Differential Operators in Spherical Polar
$$\nabla f = \frac{\partial f}{\partial r}\hat{r} + \frac{1}{r}\frac{\partial f}{\partial \theta}\hat{\theta} + \frac{1}{r\sin\theta}\frac{\partial f}{\partial \phi}\hat{\phi}$$

$$\nabla^2 f = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 \frac{\partial f}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial f}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 f}{\partial \phi^2}$$

### Matrices & Linear Algebra
$$\text{Tr}(A) = \sum \lambda_i, \qquad \det(A) = \prod \lambda_i, \qquad f(A) = \sum_{k=0}^{n-1} \alpha_k A^k$$

### Special Functions Quick Reference
* **Legendre:** $(1-x^2)y'' - 2xy' + n(n+1)y = 0 \implies \int_{-1}^1 [P_n(x)]^2 dx = \frac{2}{2n+1}$
* **Bessel:** $x^2 y'' + x y' + (x^2 - \nu^2)y = 0 \implies J_{1/2}(x) = \sqrt{\frac{2}{\pi x}}\sin x$
* **Hermite:** $y'' - 2xy' + 2ny = 0 \implies \int_{-\infty}^\infty e^{-x^2} [H_n(x)]^2 dx = 2^n n! \sqrt{\pi}$
* **Laguerre:** $xy'' + (1-x)y' + ny = 0 \implies \int_0^\infty e^{-x} [L_n(x)]^2 dx = 1$

### Complex Analysis Residue Formulas
$$\text{Simple Pole: } \text{Res}(f, z_0) = \lim_{z \to z_0} (z-z_0)f(z) = \frac{P(z_0)}{Q'(z_0)}$$

$$\text{Pole of Order } m: \text{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z-z_0)^m f(z) \right]$$

### Fourier & Laplace Transform Identities
$$\mathcal{F}\left\{\frac{d^n f}{dt^n}\right\} = (i\omega)^n F(\omega), \qquad \mathcal{F}\{(f*g)\} = \sqrt{2\pi} F(\omega)G(\omega)$$

$$\mathcal{L}\{f'(t)\} = sF(s) - f(0), \qquad \mathcal{L}\{f''(t)\} = s^2 F(s) - sf(0) - f'(0)$$
