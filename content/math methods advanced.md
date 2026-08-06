# CSIR NET PHYSICAL SCIENCES MASTER STUDY NOTES
## SUBJECT: MATHEMATICAL METHODS OF PHYSICS

---

## MODULE 1: GREEN’S FUNCTION METHODOLOGY & APPLICATIONS

### 1.1 Fundamental Theory & Operator Formulation
A non-homogeneous linear differential equation in one dimension can be represented as:
$$\hat{L}_x y(x) = f(x)$$
where $\hat{L}_x$ is a linear differential operator acting on $x$, $f(x)$ is a known source term (forcing function), and $y(x)$ is the unknown state function defined on a domain $x \in [a, b]$.

The **Green’s Function** $G(x, x')$ represents the response of the system at position $x$ due to a point impulse source localized at $x'$ described by the Dirac delta function $\delta(x - x')$:
$$\hat{L}_x G(x, x') = \delta(x - x')$$

#### General Solution via Convolution
By linearity and the sifting property of the Dirac delta function $\int_a^b f(x') \delta(x - x') \, dx' = f(x)$, the general solution to the non-homogeneous equation subject to homogeneous boundary conditions is:
$$y(x) = \int_a^b G(x, x') f(x') \, dx'$$

If non-homogeneous boundary conditions are present, boundary integral terms involving $G(x, x')$ and its derivatives must be added.

---

### 1.2 Sturm-Liouville Boundary Value Problems
Consider a second-order linear differential operator in Sturm-Liouville form:
$$\hat{L}_x = \frac{d}{dx} \left[ p(x) \frac{d}{dx} \right] + q(x) = p(x) \frac{d^2}{dx^2} + p'(x) \frac{d}{dx} + q(x)$$

The corresponding equation for the Green's function is:
$$\frac{d}{dx} \left[ p(x) \frac{d}{dx} G(x, x') \right] + q(x) G(x, x') = \delta(x - x')$$

#### Essential Properties of $G(x, x')$
1. **Symmetry/Reciprocity**: For a self-adjoint operator $\hat{L}_x$ under the given homogeneous boundary conditions, the Green's function is symmetric under the exchange of argument and source positions:
   $$G(x, x') = G(x', x)$$
2. **Continuity at $x = x'$**: $G(x, x')$ is continuous across the point source $x = x'$:
   $$\lim_{\epsilon \to 0^+} G(x' + \epsilon, x') = \lim_{\epsilon \to 0^+} G(x' - \epsilon, x')$$
3. **Discontinuity in First Derivative (Jump Condition)**:
   Integrating the defining equation from $x = x' - \epsilon$ to $x = x' + \epsilon$ and taking the limit $\epsilon \to 0^+$:
   $$\int_{x'-\epsilon}^{x'+\epsilon} \frac{d}{dx} \left[ p(x) \frac{dG}{dx} \right] dx + \int_{x'-\epsilon}^{x'+\epsilon} q(x) G(x, x') dx = \int_{x'-\epsilon}^{x'+\epsilon} \delta(x - x') dx$$
   Since $G(x, x')$ is continuous, the integral containing $q(x)G(x,x')$ vanishes as $\epsilon \to 0^+$. Thus:
   $$\left[ p(x) \frac{dG(x, x')}{dx} \right]_{x=x'-\epsilon}^{x=x'+\epsilon} = 1$$
   $$\left. \frac{\partial G(x, x')}{\partial x} \right|_{x = x' + 0^+} - \left. \frac{\partial G(x, x')}{\partial x} \right|_{x = x' - 0^+} = \frac{1}{p(x')}$$

---

### 1.3 Step-by-Step Construction of 1D Green’s Functions

#### Method A: Homogeneous Solution Construction
To construct $G(x, x')$ for $a \le x, x' \le b$:

1. **Find Independent Homogeneous Solutions**:
   Solve $\hat{L}_x y(x) = 0$. Let $y_1(x)$ be the non-trivial solution satisfying the boundary condition at $x = a$, and $y_2(x)$ be the solution satisfying the boundary condition at $x = b$.
2. **Piecewise Definition**:
   Because $\delta(x - x') = 0$ for $x \neq x'$, $G(x, x')$ satisfies the homogeneous equation on either side of $x'$:
   $$G(x, x') = \begin{cases} C_1(x') y_1(x), & a \le x < x' \\ C_2(x') y_2(x), & x' < x \le b \end{cases}$$
3. **Apply Continuity at $x = x'$**:
   $$C_1(x') y_1(x') = C_2(x') y_2(x') \implies C_1(x') = C \cdot y_2(x'), \quad C_2(x') = C \cdot y_1(x')$$
   Substituting back:
   $$G(x, x') = \begin{cases} C y_1(x) y_2(x'), & a \le x < x' \\ C y_1(x') y_2(x), & x' < x \le b \end{cases}$$
4. **Apply Derivative Jump Condition**:
   $$\left. \frac{\partial G}{\partial x} \right|_{x = x' + 0^+} - \left. \frac{\partial G}{\partial x} \right|_{x = x' - 0^+} = C \left[ y_1(x') y_2'(x') - y_1'(x') y_2(x') \right] = \frac{1}{p(x')}$$
   Recognize the bracketed term as the Wronskian $W(y_1, y_2; x') = y_1(x') y_2'(x') - y_1'(x') y_2(x')$.
   Therefore:
   $$C = \frac{1}{p(x') W(y_1, y_2; x')}$$
   *(Note: By Abel's identity, $p(x') W(y_1, y_2; x')$ is a constant independent of $x'$).*

5. **Final Form**:
   $$G(x, x') = \frac{1}{p(x') W(y_1, y_2; x')} \begin{cases} y_1(x) y_2(x'), & x < x' \\ y_1(x') y_2(x), & x > x' \end{cases}$$

---

#### Method B: Eigenfunction Expansion Approach
If $\hat{L}_x$ possesses a complete set of orthonormal eigenfunctions $\{\phi_n(x)\}$ with corresponding eigenvalues $\{\lambda_n\}$ such that $\hat{L}_x \phi_n(x) = \lambda_n \phi_n(x)$ and $\int_a^b \phi_n(x) \phi_m^*(x) dx = \delta_{nm}$:

Expand $G(x, x')$ and $\delta(x - x')$ in terms of $\phi_n(x)$:
$$G(x, x') = \sum_{n=1}^{\infty} a_n(x') \phi_n(x), \quad \delta(x - x') = \sum_{n=1}^{\infty} \phi_n^*(x') \phi_n(x)$$
Operating $\hat{L}_x$ on $G(x, x')$:
$$\hat{L}_x G(x, x') = \sum_{n=1}^{\infty} a_n(x') \lambda_n \phi_n(x) = \sum_{n=1}^{\infty} \phi_n^*(x') \phi_n(x)$$
Matching coefficients gives $a_n(x') = \frac{\phi_n^*(x')}{\lambda_n}$. Thus:
$$G(x, x') = \sum_{n=1}^{\infty} \frac{\phi_n(x) \phi_n^*(x')}{\lambda_n}$$

---

### 1.4 Green’s Functions for Higher-Dimensional Partial Differential Equations

#### 1. Free-Space Poisson/Laplace Equation in 3D
$$\nabla^2 G(\vec{r}, \vec{r}') = \delta^3(\vec{r} - \vec{r}')$$
Using spherical symmetry centered at $\vec{r}'$:
Let $R = |\vec{r} - \vec{r}'|$. For $R > 0$, $\frac{1}{R^2} \frac{d}{dR}\left( R^2 \frac{dG}{dR} \right) = 0 \implies G(R) = \frac{A}{R} + B$.
For free-space boundary condition $G \to 0$ as $R \to \infty$, $B = 0$.
Integrating $\nabla^2 G = \delta^3(\vec{r} - \vec{r}')$ over a small sphere of radius $\epsilon$:
$$\iiint_{V_\epsilon} \nabla \cdot (\nabla G) \, d^3r = \iint_{S_\epsilon} \nabla G \cdot \hat{n} \, dS = \left( -\frac{A}{\epsilon^2} \right) (4\pi \epsilon^2) = 1 \implies A = -\frac{1}{4\pi}$$
$$G(\vec{r}, \vec{r}') = -\frac{1}{4\pi |\vec{r} - \vec{r}'|}$$

#### 2. Free-Space Poisson/Laplace Equation in 2D
$$\nabla^2 G(\vec{r}, \vec{r}') = \delta^2(\vec{r} - \vec{r}')$$
In polar coordinates with $R = |\vec{r} - \vec{r}'|$:
$$\frac{1}{R} \frac{d}{dR} \left( R \frac{dG}{dR} \right) = 0 \implies G(R) = C \ln R + D$$
Integrating over a circular disk of radius $\epsilon$:
$$\oint_{C_\epsilon} \nabla G \cdot \hat{n} \, dl = \left( \frac{C}{\epsilon} \right) (2\pi \epsilon) = 1 \implies C = \frac{1}{2\pi}$$
$$G(\vec{r}, \vec{r}') = \frac{1}{2\pi} \ln |\vec{r} - \vec{r}'|$$

---

### 1.5 Solved Step-by-Step CSIR NET Standard Problems

#### Problem 1: Find the Green's function for $\frac{d^2 y}{dx^2} + k^2 y = f(x)$ on $x \in [0, L]$ with $y(0) = 0$ and $y(L) = 0$.
**Solution**:
1. Operator: $\hat{L}_x = \frac{d^2}{dx^2} + k^2$. So $p(x) = 1$.
2. Solve $\hat{L}_x y = 0$: $y(x) = A \sin(kx) + B \cos(kx)$.
3. Left boundary $y_1(0) = 0 \implies y_1(x) = \sin(kx)$.
4. Right boundary $y_2(L) = 0 \implies y_2(x) = \sin[k(L - x)]$.
5. Compute the Wronskian $W(y_1, y_2; x)$:
   $$y_1(x) = \sin(kx) \implies y_1'(x) = k \cos(kx)$$
   $$y_2(x) = \sin(kL - kx) \implies y_2'(x) = -k \cos(kL - kx)$$
   $$W = y_1 y_2' - y_1' y_2 = -\sin(kx) k \cos(kL - kx) - k \cos(kx) \sin(kL - kx)$$
   $$W = -k \sin(kx + kL - kx) = -k \sin(kL)$$
6. Calculate constant $C$:
   $$C = \frac{1}{p(x) W} = -\frac{1}{k \sin(kL)}$$
7. Construct $G(x, x')$:
   $$G(x, x') = \begin{cases} -\frac{\sin(kx) \sin[k(L - x')]}{k \sin(kL)}, & 0 \le x \le x' \\ -\frac{\sin(kx') \sin[k(L - x)]}{k \sin(kL)}, & x' \le x \le L \end{cases}$$

---

## MODULE 2: PARTIAL DIFFERENTIAL EQUATIONS (PDEs)

### 2.1 Classification of Second-Order Linear PDEs
A general second-order linear PDE in two independent variables $(x, y)$ is:
$$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + F u = G(x, y)$$

The classification depends entirely on the sign of the discriminant $d = B^2 - 4AC$:

| Discriminant Value | PDE Type | Physical Archetype | Canonical Example |
| :--- | :--- | :--- | :--- |
| **$B^2 - 4AC < 0$** | **Elliptic** | Steady-state equilibrium field problems | Laplace Equation: $\nabla^2 u = 0$ |
| **$B^2 - 4AC = 0$** | **Parabolic** | Dissipative / Diffusion processes | Heat Diffusion Equation: $\frac{\partial u}{\partial t} = \alpha \nabla^2 u$ |
| **$B^2 - 4AC > 0$** | **Hyperbolic** | Wave propagation / Non-dissipative dynamics | Wave Equation: $\frac{\partial^2 u}{\partial t^2} = v^2 \nabla^2 u$ |

---

### 2.2 Laplace Equation ($\nabla^2 \psi = 0$)

#### 2.2.1 Separation of Variables in Cartesian Coordinates (3D)
$$\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} + \frac{\partial^2 \psi}{\partial z^2} = 0$$
Let $\psi(x, y, z) = X(x) Y(y) Z(z)$. Dividing by $X Y Z$:
$$\frac{1}{X} \frac{d^2 X}{d x^2} + \frac{1}{Y} \frac{d^2 Y}{d y^2} + \frac{1}{Z} \frac{d^2 Z}{d z^2} = 0$$
Assign constant separation parameters $-k_x^2, -k_y^2, k_z^2$:
$$\frac{d^2 X}{dx^2} + k_x^2 X = 0 \implies X(x) = A_1 \sin(k_x x) + B_1 \cos(k_x x)$$
$$\frac{d^2 Y}{dy^2} + k_y^2 Y = 0 \implies Y(y) = A_2 \sin(k_y y) + B_2 \cos(k_y y)$$
$$\frac{d^2 Z}{dz^2} - k_z^2 Z = 0 \implies Z(z) = A_3 e^{k_z z} + B_3 e^{-k_z z}$$
where $k_z^2 = k_x^2 + k_y^2$.

---

#### 2.2.2 Solution in Spherical Polar Coordinates with Azimuthal Symmetry
When $\psi = \psi(r, \theta)$ (no $\phi$ dependence):
$$\frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial \psi}{\partial r} \right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta} \left( \sin\theta \frac{\partial \psi}{\partial \theta} \right) = 0$$
Let $\psi(r, \theta) = R(r) \Theta(\theta)$. Multiplying by $\frac{r^2}{R \Theta}$:
$$\frac{1}{R} \frac{d}{dr} \left( r^2 \frac{dR}{dr} \right) + \frac{1}{\Theta \sin\theta} \frac{d}{d\theta} \left( \sin\theta \frac{d\Theta}{d\theta} \right) = 0$$
Set separation constant to $l(l+1)$:

1. **Radial Equation**:
   $$r^2 \frac{d^2 R}{dr^2} + 2r \frac{dR}{dr} - l(l+1) R = 0$$
   An Euler-Cauchy equation with ansatz $R(r) = r^\lambda$:
   $$\lambda(\lambda - 1) + 2\lambda - l(l+1) = 0 \implies \lambda^2 + \lambda - l(l+1) = 0$$
   Roots are $\lambda = l$ and $\lambda = -(l+1)$.
   $$R_l(r) = A_l r^l + B_l r^{-(l+1)}$$

2. **Angular Equation**:
   $$\frac{1}{\sin\theta} \frac{d}{d\theta} \left( \sin\theta \frac{d\Theta}{d\theta} \right) + l(l+1) \Theta = 0$$
   Substituting $u = \cos\theta$:
   $$\frac{d}{du} \left[ (1 - u^2) \frac{d\Theta}{du} \right] + l(l+1) \Theta = 0$$
   This is **Legendre's Differential Equation**. Non-singular solutions on $\theta \in [0, \pi]$ exist only when $l \in \mathbb{N}_0$, corresponding to Legendre Polynomials $P_l(\cos\theta)$.

#### General Solution (Azimuthal Symmetry)
$$\psi(r, \theta) = \sum_{l=0}^{\infty} \left( A_l r^l + \frac{B_l}{r^{l+1}} \right) P_l(\cos\theta)$$

##### Key Properties of Legendre Polynomials:
* $P_0(x) = 1, \quad P_1(x) = x, \quad P_2(x) = \frac{1}{2}(3x^2 - 1), \quad P_3(x) = \frac{1}{2}(5x^3 - 3x)$
* **Rodrigues' Formula**: $P_l(x) = \frac{1}{2^l l!} \frac{d^l}{dx^l}(x^2 - 1)^l$
* **Orthogonality**: $\int_{-1}^1 P_l(x) P_m(x) dx = \frac{2}{2l + 1} \delta_{lm}$

---

#### 2.2.3 Solution in Cylindrical Coordinates
$$\frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial \psi}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 \psi}{\partial \phi^2} + \frac{\partial^2 \psi}{\partial z^2} = 0$$
Assuming $\psi(r, \phi, z) = R(r) \Phi(\phi) Z(z)$:
* $Z(z) = C_1 e^{k z} + C_2 e^{-k z}$
* $\Phi(\phi) = A_n \cos(n\phi) + B_n \sin(n\phi)$ (with periodicity $\Phi(\phi + 2\pi) = \Phi(\phi) \implies n \in \mathbb{Z}$)
* **Radial Equation**:
  $$r^2 \frac{d^2 R}{dr^2} + r \frac{dR}{dr} + (k^2 r^2 - n^2) R = 0$$
  This is Bessel's Equation of order $n$. The general solution is $R(r) = C J_n(kr) + D Y_n(kr)$, where $J_n$ is the Bessel function of the first kind (regular at $r=0$) and $Y_n$ is the Bessel function of the second kind (Neumann function, singular at $r=0$).

---

### 2.3 The Wave Equation ($\nabla^2 u - \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2} = 0$)

#### 2.3.1 1D Wave Equation & D’Alembert’s Solution
$$\frac{\partial^2 u}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2} = 0$$
Introduce canonical coordinates $\xi = x - ct$ and $\eta = x + ct$:
$$\frac{\partial^2 u}{\partial \xi \partial \eta} = 0 \implies u(x, t) = f(x - ct) + g(x + ct)$$
where $f$ describes a right-traveling wave and $g$ describes a left-traveling wave.

#### Cauchy Initial Value Problem
Given initial displacement $u(x, 0) = \phi(x)$ and initial velocity $\left.\frac{\partial u}{\partial t}\right|_{t=0} = \psi(x)$:
1. $f(x) + g(x) = \phi(x)$
2. $-c f'(x) + c g'(x) = \psi(x) \implies -f(x) + g(x) = \frac{1}{c} \int_{x_0}^x \psi(s) ds$

Solving for $f$ and $g$ gives **D'Alembert’s Formula**:
$$u(x, t) = \frac{1}{2} [\phi(x - ct) + \phi(x + ct)] + \frac{1}{2c} \int_{x - ct}^{x + ct} \psi(s) ds$$

---

### 2.4 Heat / Diffusion Equation ($\nabla^2 T - \frac{1}{\alpha} \frac{\partial T}{\partial t} = 0$)

#### 2.4.1 Fundamental Solution in 1D Infinite Domain
$$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}, \quad -\infty < x < \infty, \quad t > 0$$
Apply Spatial Fourier Transform $\tilde{T}(k, t) = \mathcal{F}\{T(x, t)\} = \int_{-\infty}^\infty T(x, t) e^{-i k x} dx$:
$$\frac{\partial \tilde{T}}{\partial t} = -\alpha k^2 \tilde{T}(k, t) \implies \tilde{T}(k, t) = \tilde{T}(k, 0) e^{-\alpha k^2 t}$$
Taking the inverse Fourier transform yields the convolution of the initial condition $T(x, 0) = f(x)$ with the **Gaussian Heat Kernel $K(x, t)$**:
$$T(x, t) = \int_{-\infty}^\infty K(x - x', t) f(x') dx'$$
$$K(x, t) = \frac{1}{\sqrt{4\pi \alpha t}} \exp\left( -\frac{x^2}{4\alpha t} \right)$$

---

## MODULE 3: NUMERICAL METHODS & COMPUTATIONAL TECHNIQUES

### 3.1 Numerical Root Finding for Non-Linear Equations

#### 1. Bisection Method
Based on the Intermediate Value Theorem. If $f(a) \cdot f(b) < 0$, a root lies in $(a, b)$.
* Iteration step: $x_m = \frac{a + b}{2}$
* If $f(a) \cdot f(x_m) < 0 \implies b = x_m$; else $a = x_m$.
* **Error Bound**: After $N$ iterations, the maximum absolute error is:
  $$|e_N| \le \frac{b - a}{2^N}$$
* Convergence is linear with rate $r = 1$.

---

#### 2. Newton-Raphson Method
Derived using a first-order Taylor expansion near $x_n$:
$$f(x) \approx f(x_n) + f'(x_n)(x - x_n) = 0 \implies x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

##### Order of Convergence Derivation:
Let $x^*$ be the exact root ($f(x^*) = 0$), and $e_n = x_n - x^*$.
$$e_{n+1} + x^* = e_n + x^* - \frac{f(x^* + e_n)}{f'(x^* + e_n)}$$
Expanding $f(x^* + e_n)$ and $f'(x^* + e_n)$ in Taylor series about $x^*$:
$$f(x^* + e_n) = 0 + e_n f'(x^*) + \frac{e_n^2}{2} f''(x^*) + O(e_n^3)$$
$$f'(x^* + e_n) = f'(x^*) + e_n f''(x^*) + O(e_n^2)$$
Substitute these back:
$$e_{n+1} = e_n - \frac{e_n f'(x^*) + \frac{e_n^2}{2} f''(x^*)}{f'(x^*) \left[1 + e_n \frac{f''(x^*)}{f'(x^*)}\right]} = e_n - \left( e_n + \frac{e_n^2}{2} \frac{f''(x^*)}{f'(x^*)} \right) \left( 1 - e_n \frac{f''(x^*)}{f'(x^*)} \right)$$
$$e_{n+1} = \frac{f''(x^*)}{2 f'(x^*)} e_n^2 + O(e_n^3)$$
Thus $e_{n+1} \propto e_n^2$, establishing **Quadratic Convergence** ($r = 2$).

* **Condition for Local Convergence**: $\left| \frac{f(x) f''(x)}{[f'(x)]^2} \right| < 1$ in the domain of interest.

---

### 3.2 Interpolation & Extrapolation

#### 1. Lagrange Interpolating Polynomial
For $(n+1)$ distinct data points $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$:
$$P_n(x) = \sum_{i=0}^{n} y_i L_i(x)$$
where the Lagrange basis polynomials $L_i(x)$ are:
$$L_i(x) = \prod_{\substack{j=0 \\ j \neq i}}^{n} \frac{x - x_j}{x_i - x_j}$$
* Satisfies $L_i(x_k) = \delta_{ik}$.

---

#### 2. Newton’s Forward Difference Interpolation
For equally spaced $x$-nodes with grid spacing $h = x_{k+1} - x_k$. Define parameter $u = \frac{x - x_0}{h}$.
Define Forward Difference Operator $\Delta$:
$$\Delta y_0 = y_1 - y_0, \quad \Delta^2 y_0 = \Delta y_1 - \Delta y_0 = y_2 - 2y_1 + y_0, \quad \dots$$
$$P_n(x) = y_0 + u \Delta y_0 + \frac{u(u-1)}{2!} \Delta^2 y_0 + \frac{u(u-1)(u-2)}{3!} \Delta^3 y_0 + \dots + \frac{\prod_{j=0}^{n-1}(u-j)}{n!} \Delta^n y_0$$

---

### 3.3 Numerical Integration Rules

#### 1. Trapezoidal Rule
Approximates the integrand $f(x)$ as piecewise linear functions between grid points with spacing $h = \frac{b - a}{n}$:
$$I = \int_{a}^{b} f(x) dx \approx \frac{h}{2} \left[ y_0 + 2 \sum_{i=1}^{n-1} y_i + y_n \right]$$
* **Error Term**: $E_T = -\frac{(b - a) h^2}{12} f''(\xi) = -\frac{(b - a)^3}{12 n^2} f''(\xi)$ for some $\xi \in (a, b)$.
* Exact for polynomials of degree $\le 1$.

---

#### 2. Simpson’s 1/3 Rule
Approximates $f(x)$ using piecewise quadratic parabolas over pairs of intervals (requires **even** number of subintervals $n$):
$$I = \int_{a}^{b} f(x) dx \approx \frac{h}{3} \left[ y_0 + 4(y_1 + y_3 + \dots + y_{n-1}) + 2(y_2 + y_4 + \dots + y_{n-2}) + y_n \right]$$
* **Error Term**: $E_S = -\frac{(b - a) h^4}{180} f^{(4)}(\xi) = -\frac{(b - a)^5}{180 n^4} f^{(4)}(\xi)$
* Exact for polynomials of degree $\le 3$.

---

#### 3. Simpson’s 3/8 Rule
Requires $n$ to be a multiple of 3:
$$I = \int_{a}^{b} f(x) dx \approx \frac{3h}{8} \left[ y_0 + 3(y_1 + y_2 + y_4 + y_5 + \dots) + 2(y_3 + y_6 + \dots) + y_n \right]$$
* **Error Term**: $E = -\frac{(b - a) h^4}{80} f^{(4)}(\xi)$

---

### 3.4 Numerical Solutions of First-Order Ordinary Differential Equations
Problem: $\frac{dy}{dx} = f(x, y)$ given $y(x_0) = y_0$. Step size $h$.

#### 1. Euler Method (1st Order)
$$y_{n+1} = y_n + h f(x_n, y_n)$$
* Local truncation error: $O(h^2)$, Global error: $O(h)$.

#### 2. Runge-Kutta Second-Order Method (RK2 - Heun's Scheme)
$$k_1 = h f(x_n, y_n)$$
$$k_2 = h f(x_n + h, y_n + k_1)$$
$$y_{n+1} = y_n + \frac{1}{2}(k_1 + k_2)$$
* Global error: $O(h^2)$.

#### 3. Runge-Kutta Fourth-Order Method (RK4)
$$k_1 = h f(x_n, y_n)$$
$$k_2 = h f\left( x_n + \frac{h}{2}, \, y_n + \frac{k_1}{2} \right)$$
$$k_3 = h f\left( x_n + \frac{h}{2}, \, y_n + \frac{k_2}{2} \right)$$
$$k_4 = h f\left( x_n + h, \, y_n + k_3 \right)$$
$$y_{n+1} = y_n + \frac{1}{6} (k_1 + 2k_2 + 2k_3 + k_4)$$
* Global error: $O(h^4)$. Local truncation error: $O(h^5)$.

---

### 3.5 Finite Difference Methods (FDM)

#### Approximations for Derivatives
Using Taylor series expansions around $x_i$:
* **Forward Difference**: $y'(x_i) \approx \frac{y_{i+1} - y_i}{h} + O(h)$
* **Backward Difference**: $y'(x_i) \approx \frac{y_i - y_{i-1}}{h} + O(h)$
* **Central Difference**: $y'(x_i) \approx \frac{y_{i+1} - y_{i-1}}{2h} + O(h^2)$
* **Second Derivative Central Difference**:
  $$y''(x_i) \approx \frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + O(h^2)$$

#### 2D Five-Point Stencil for Poisson Equation ($\nabla^2 u = f$)
$$\frac{u_{i+1, j} - 2u_{i, j} + u_{i-1, j}}{h^2} + \frac{u_{i, j+1} - 2u_{i, j} + u_{i, j-1}}{h^2} = f_{i, j}$$
$$u_{i+1, j} + u_{i-1, j} + u_{i, j+1} + u_{i, j-1} - 4u_{i, j} = h^2 f_{i, j}$$

---

## MODULE 4: TENSOR ANALYSIS

### 4.1 Coordinate Transformations & Tensor Definitions
Consider coordinate transformation from system $x^\mu$ to $x'^\mu$ ($\mu = 1, 2, \dots, N$).

#### 1. Contravariant Vector (Rank 1 Upper Index)
A set of components $A^\mu$ transforms as:
$${A'}^\mu = \frac{\partial {x'}^\mu}{\partial x^\nu} A^\nu$$

#### 2. Covariant Vector (Rank 1 Lower Index)
A set of components $A_\mu$ transforms as:
$${A'}_\mu = \frac{\partial x^\nu}{\partial {x'}^\mu} A_\nu$$

#### 3. Mixed Tensor (Rank $r + s$)
A tensor $T^{\mu_1 \dots \mu_r}_{\nu_1 \dots \nu_s}$ transforms as:
$${T'}^{\mu_1 \dots \mu_r}_{\nu_1 \dots \nu_s} = \left( \frac{\partial {x'}^{\mu_1}}{\partial x^{\alpha_1}} \cdots \frac{\partial {x'}^{\mu_r}}{\partial x^{\alpha_r}} \right) \left( \frac{\partial x^{\beta_1}}{\partial {x'}^{\nu_1}} \cdots \frac{\partial x^{\beta_s}}{\partial {x'}^{\nu_s}} \right) T^{\alpha_1 \dots \alpha_r}_{\beta_1 \dots \beta_s}$$

---

### 4.2 Fundamental Tensor Algebra Operations
1. **Contraction**: Setting one upper index and one lower index equal (e.g., $T^{\mu \alpha}_{\nu \alpha} = S^\mu_\nu$) reduces the total tensor rank by 2.
2. **Inner Product**: Outer product followed by contraction: $A^\mu B_\mu = \text{Scalar Invariant}$.
3. **Quotient Law**: If $A^{\mu \dots} B_{\mu \dots} = C$ is a tensor invariant for any arbitrary tensor $B$, then $A$ is guaranteed to be a valid tensor.

---

### 4.3 The Metric Tensor ($g_{\mu\nu}$)
The invariant differential arc length $ds^2$ defines the metric tensor:
$$ds^2 = g_{\mu\nu} dx^\mu dx^\nu$$

#### Properties:
* Symmetric: $g_{\mu\nu} = g_{\nu\mu}$
* Inverse metric tensor $g^{\mu\nu}$ satisfies: $g_{\mu\alpha} g^{\alpha\nu} = \delta_\mu^\nu$
* **Index Lowering**: $A_\mu = g_{\mu\nu} A^\nu$
* **Index Raising**: $A^\mu = g^{\mu\nu} A_\nu$

#### Metric Components in Common 3D Coordinate Systems:
1. **Cartesian Coordinates** $(x, y, z)$:
   $$g_{ij} = \operatorname{diag}(1, 1, 1)$$
2. **Cylindrical Coordinates** $(r, \phi, z)$:
   $$ds^2 = dr^2 + r^2 d\phi^2 + dz^2 \implies g_{ij} = \operatorname{diag}(1, r^2, 1), \quad g^{ij} = \operatorname{diag}\left(1, \frac{1}{r^2}, 1\right)$$
3. **Spherical Coordinates** $(r, \theta, \phi)$:
   $$ds^2 = dr^2 + r^2 d\theta^2 + r^2 \sin^2\theta d\phi^2 \implies g_{ij} = \operatorname{diag}(1, r^2, r^2 \sin^2\theta)$$
   $$g^{ij} = \operatorname{diag}\left(1, \frac{1}{r^2}, \frac{1}{r^2 \sin^2\theta}\right)$$

---

### 4.4 Christoffel Symbols & Covariant Differentiation

#### Christoffel Symbols of the First Kind
$$[\mu\nu, \lambda] = \frac{1}{2} \left( \frac{\partial g_{\mu\lambda}}{\partial x^\nu} + \frac{\partial g_{\nu\lambda}}{\partial x^\mu} - \frac{\partial g_{\mu\nu}}{\partial x^\lambda} \right)$$

#### Christoffel Symbols of the Second Kind (Connection Coefficients)
$$\Gamma^\sigma_{\mu\nu} = g^{\sigma\lambda} [\mu\nu, \lambda] = \frac{1}{2} g^{\sigma\lambda} \left( \frac{\partial g_{\mu\lambda}}{\partial x^\nu} + \frac{\partial g_{\nu\lambda}}{\partial x^\mu} - \frac{\partial g_{\mu\nu}}{\partial x^\lambda} \right)$$
* Symmetric in lower indices: $\Gamma^\sigma_{\mu\nu} = \Gamma^\sigma_{\nu\mu}$.
* Note: $\Gamma^\sigma_{\mu\nu}$ is **not** a tensor.

---

#### Covariant Derivative ($\nabla_\nu$ or $;\nu$)
Accounts for the spatial variation of coordinate basis vectors.

* **Covariant Derivative of Contravariant Vector**:
  $$\nabla_\nu A^\mu = \partial_\nu A^\mu + \Gamma^\mu_{\nu\sigma} A^\sigma$$
* **Covariant Derivative of Covariant Vector**:
  $$\nabla_\nu A_\mu = \partial_\nu A_\mu - \Gamma^\sigma_{\mu\nu} A_\sigma$$
* **Metric Compatibility Theorem**: $\nabla_\sigma g_{\mu\nu} = 0$.

---

### 4.5 Physics Application: Electromagnetic Field Tensor $F^{\mu\nu}$
In 4D Minkowski spacetime with metric $\eta_{\mu\nu} = \operatorname{diag}(1, -1, -1, -1)$:
Four-potential: $A^\mu = (\Phi/c, \vec{A})$.
$$F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$
Maximally symmetric gauge invariant tensor structure encoding Maxwell's equations elegantly.

---

## MODULE 5: INTRODUCTORY GROUP THEORY: $SU(2)$ AND $O(3)$

### 5.1 Group Theory Foundations

#### Group Axioms
A set $G$ together with a binary operation $\cdot$ forms a group if:
1. **Closure**: $\forall a, b \in G, \, a \cdot b \in G$
2. **Associativity**: $\forall a, b, c \in G, \, (a \cdot b) \cdot c = a \cdot (b \cdot c)$
3. **Identity Element**: $\exists e \in G \text{ s.t. } a \cdot e = e \cdot a = a, \, \forall a \in G$
4. **Inverse Element**: $\forall a \in G, \, \exists a^{-1} \in G \text{ s.t. } a \cdot a^{-1} = a^{-1} \cdot a = e$

---

### 5.2 The Orthogonal Groups $O(3)$ and $SO(3)$

#### Definitions
* **$O(3)$**: The Real Orthogonal Group in 3 dimensions.
  $$O(3) = \{ R \in \mathbb{R}^{3 \times 3} \mid R^T R = I \}$$
  Preserves Euclidean norm $\|\vec{x}\|^2 = \vec{x}^T \vec{x}$.
  Taking determinant: $\det(R^T R) = (\det R)^2 = \det I = 1 \implies \det R = \pm 1$.

* **$SO(3)$**: Special Orthogonal Group in 3 dimensions (Subgroup of rotations).
  $$SO(3) = \{ R \in O(3) \mid \det R = +1 \}$$
  Matrices with $\det R = -1$ correspond to improper rotations (reflections coupled with rotations). $O(3) \cong SO(3) \times \mathbb{Z}_2$, where $\mathbb{Z}_2 = \{I, -I\}$ represents space inversion (parity).

---

#### Lie Algebra of $SO(3)$
Any element $R \in SO(3)$ near identity can be parameterized as $R(\vec{\theta}) = \exp(i \vec{\theta} \cdot \vec{J})$, where $J_x, J_y, J_z$ are infinitesimal generators of rotations:

$$J_x = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -i \\ 0 & i & 0 \end{pmatrix}, \quad J_y = \begin{pmatrix} 0 & 0 & i \\ 0 & 0 & 0 \\ -i & 0 & 0 \end{pmatrix}, \quad J_z = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

#### Lie Algebra Commutation Relations
$$[J_i, J_j] = i \epsilon_{ijk} J_k$$
This defines the Lie algebra $\mathfrak{so}(3)$.

---

### 5.3 The Special Unitary Group $SU(2)$

#### Definition
$$SU(2) = \{ U \in \mathbb{C}^{2 \times 2} \mid U^\dagger U = I, \, \det U = 1 \}$$

Let $U = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with $a,b,c,d \in \mathbb{C}$.
1. $U^\dagger = \begin{pmatrix} a^* & c^* \\ b^* & d^* \end{pmatrix}$
2. $U^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ (since $\det U = ad - bc = 1$).
3. Equating $U^\dagger = U^{-1}$:
   $$d = a^*, \quad c = -b^*$$
   Therefore, any general $SU(2)$ matrix has the structure:
   $$U = \begin{pmatrix} a & b \\ -b^* & a^* \end{pmatrix} \quad \text{with constraint } |a|^2 + |b|^2 = 1$$

---

#### Parametrization via Pauli Matrices
Let $a = x_0 + i x_3$ and $b = x_2 + i x_1$ with $x_0, x_1, x_2, x_3 \in \mathbb{R}$:
$$x_0^2 + x_1^2 + x_2^2 + x_3^2 = 1 \quad \text{(3-Sphere } S^3 \text{ topological manifold)}$$

$$U = x_0 I + i (x_1 \sigma_x + x_2 \sigma_y + x_3 \sigma_z) = x_0 I + i \vec{x} \cdot \vec{\sigma}$$

where $\sigma_x, \sigma_y, \sigma_z$ are the **Pauli Spin Matrices**:
$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

##### Properties of Pauli Matrices:
1. Hermiticity: $\sigma_i^\dagger = \sigma_i$
2. Tracelessness: $\operatorname{Tr}(\sigma_i) = 0$
3. Anti-commutation relation: $\{\sigma_i, \sigma_j\} = 2 \delta_{ij} I$
4. Commutation relation: $[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k$
5. Product Rule: $\sigma_i \sigma_j = \delta_{ij} I + i \epsilon_{ijk} \sigma_k$

---

#### Generators of $SU(2)$
Define Lie algebra generators $T_i = \frac{1}{2} \sigma_i$.
Check commutation relations:
$$[T_i, T_j] = \left[ \frac{\sigma_i}{2}, \frac{\sigma_j}{2} \right] = \frac{1}{4} (2i \epsilon_{ijk} \sigma_k) = i \epsilon_{ijk} \frac{\sigma_k}{2} = i \epsilon_{ijk} T_k$$

> **Crucial Result**: The Lie algebra of $SU(2)$ ($\mathfrak{su}(2)$) is isomorphic to the Lie algebra of $SO(3)$ ($\mathfrak{so}(3)$):
> $$\mathfrak{su}(2) \cong \mathfrak{so}(3)$$

---

### 5.4 Homomorphism between $SU(2)$ and $SO(3)$

#### The 2-to-1 Double Covering Map
To establish the relationship between $SU(2)$ and $SO(3)$:
Map a 3D vector $\vec{x} = (x, y, z) \in \mathbb{R}^3$ to a traceless Hermitian matrix $X$:
$$X = \vec{x} \cdot \vec{\sigma} = \begin{pmatrix} z & x - i y \\ x + i y & -z \end{pmatrix}$$
Notice $\det X = -(x^2 + y^2 + z^2) = -\|\vec{x}\|^2$.

Let $U \in SU(2)$ act on $X$ via similarity transformation:
$$X' = U X U^\dagger$$
Since $\operatorname{Tr}(X') = \operatorname{Tr}(X) = 0$ and $X'^\dagger = X'$, $X'$ can be written as $X' = \vec{x}' \cdot \vec{\sigma}$ for a new vector $\vec{x}'$.
Furthermore:
$$\det X' = \det(U X U^\dagger) = \det U \cdot \det X \cdot \det U^\dagger = \det X \implies \|\vec{x}'\|^2 = \|\vec{x}\|^2$$
This mapping $\vec{x} \to \vec{x}' = R(U) \vec{x}$ preserves the length of 3D vectors, so $R(U) \in SO(3)$.

#### Double-Covering Demonstration
Consider $U(\theta) = \exp\left( i \frac{\theta}{2} \sigma_z \right) = \cos\left(\frac{\theta}{2}\right) I + i \sin\left(\frac{\theta}{2}\right) \sigma_z$:
1. Rotate by $\theta = 2\pi$:
   $$U(2\pi) = \cos(\pi) I + i \sin(\pi) \sigma_z = -I \neq I$$
2. However, the corresponding rotation matrix in $SO(3)$ is:
   $$R(-I) X R(-I)^\dagger = (-I) X (-I)^\dagger = X \implies R(-I) = I_{3 \times 3}$$
   Both $U$ and $-U$ in $SU(2)$ map to the **exact same matrix** $R \in SO(3)$.

Thus, $SU(2)$ is the **universal double cover** of $SO(3)$:
$$SO(3) \cong SU(2) / \{I, -I\}$$

#### Physical Consequence in Quantum Mechanics
Spin-1/2 state functions (spinors) undergo a sign flip upon a $2\pi$ spatial rotation ($\psi \to -\psi$) and require a $4\pi$ rotation to return to their initial state.

---

## QUICK-REFERENCE FORMULA SUMMARY SHEET FOR CSIR NET

### Green’s Functions
* **1D ODE Solution**: $G(x, x') = \frac{1}{p(x') W(x')} \begin{cases} y_1(x) y_2(x'), & x < x' \\ y_1(x') y_2(x), & x > x' \end{cases}$
* **Derivative Jump**: $\left. \frac{dG}{dx} \right|_{x'+0} - \left. \frac{dG}{dx} \right|_{x'-0} = \frac{1}{p(x')}$
* **3D Free-Space Poisson**: $G(\vec{r}, \vec{r}') = -\frac{1}{4\pi |\vec{r} - \vec{r}'|}$
* **2D Free-Space Poisson**: $G(\vec{r}, \vec{r}') = \frac{1}{2\pi} \ln |\vec{r} - \vec{r}'|$

### Numerical Methods
* **Newton-Raphson**: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ (Quadratic convergence $r=2$)
* **Trapezoidal Error**: $E_T = -\frac{(b-a)^3}{12 n^2} f''(\xi)$
* **Simpson's 1/3 Error**: $E_S = -\frac{(b-a)^5}{180 n^4} f^{(4)}(\xi)$
* **RK4 Updating**: $y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$

### Tensors & Group Theory
* **Christoffel Symbol (2nd Kind)**: $\Gamma^\sigma_{\mu\nu} = \frac{1}{2} g^{\sigma\lambda} \left( \partial_\nu g_{\mu\lambda} + \partial_\mu g_{\nu\lambda} - \partial_\lambda g_{\mu\nu} \right)$
* **Covariant Derivative**: $\nabla_\nu A^\mu = \partial_\nu A^\mu + \Gamma^\mu_{\nu\sigma} A^\sigma$
* **Pauli Matrices Algebra**: $[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k, \quad \{\sigma_i, \sigma_j\} = 2\delta_{ij} I$
* **Group Mapping Relation**: $SU(2) \to SO(3)$ is a 2-to-1 surjective homomorphism ($SU(2) / \{I, -I\} \cong SO(3)$)
