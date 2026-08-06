# CSIR NET PHYSICAL SCIENCES: ELECTROMAGNETIC THEORY (MODULE II)

---

## SECTION 1: ELECTROSTATICS

---

### 1.1 Fundamental Field Principles & Electric Potential

#### Coulomb’s Law and Field Formulation
For two point charges $q_1$ and $q_2$ in vacuum separated by vector $\vec{r} = \vec{r}_1 - \vec{r}_2$, the force on $q_1$ due to $q_2$ is:
$$\vec{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2} \hat{r} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{|\vec{r}_1 - \vec{r}_2|^3} (\vec{r}_1 - \vec{r}_2)$$

For a continuous charge distribution with volume density $\rho(\vec{r}')$, surface density $\sigma(\vec{r}')$, or line density $\lambda(\vec{r}')$, the electric field at observation point $\vec{r}$ is given by the principle of superposition:
$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int_V \frac{\rho(\vec{r}')(\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dV' + \frac{1}{4\pi\epsilon_0} \int_S \frac{\sigma(\vec{r}')(\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dA' + \frac{1}{4\pi\epsilon_0} \int_L \frac{\lambda(\vec{r}')(\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dl'$$

#### Conservative Nature of Electrostatic Field & Scalar Potential
The electrostatic field is conservative because its line integral along any closed path vanishes:
$$\oint \vec{E} \cdot d\vec{l} = 0 \implies \nabla \times \vec{E} = 0$$

Since the curl of $\vec{E}$ is identically zero, $\vec{E}$ can be expressed as the negative gradient of a scalar potential $V(\vec{r})$:
$$\vec{E}(\vec{r}) = -\nabla V(\vec{r})$$

The potential difference between two points $A$ and $B$ is:
$$V(B) - V(A) = -\int_A^B \vec{E} \cdot d\vec{l}$$

Setting $V(\infty) = 0$ as reference for localized distributions:
$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int_V \frac{\rho(\vec{r}')}{|\vec{r} - \vec{r}'|} dV'$$

---

### 1.2 Gauss’s Law & Applications

#### Differential and Integral Forms
* **Integral Form:**
  $$\Phi_E = \oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0} = \frac{1}{\epsilon_0} \int_V \rho\, dV$$
* **Differential Form:** Apply the Divergence Theorem $\oint_S \vec{E} \cdot d\vec{A} = \int_V (\nabla \cdot \vec{E})\, dV$:
  $$\int_V (\nabla \cdot \vec{E})\, dV = \int_V \frac{\rho}{\epsilon_0}\, dV \implies \nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$

---

#### Derivation of Gauss's Law from Coulomb's Law
Consider a point charge $q$ located at the origin. The electric field is:
$$\vec{E}(\vec{r}) = \frac{q}{4\pi\epsilon_0 r^2} \hat{r}$$

The flux through an arbitrary closed surface $S$ surrounding $q$ is:
$$\Phi_E = \oint_S \vec{E} \cdot d\vec{A} = \frac{q}{4\pi\epsilon_0} \oint_S \frac{\hat{r} \cdot \hat{n}\, dA}{r^2}$$

By definition, the solid angle element subtended by $dA$ at the origin is $d\Omega = \frac{\hat{r} \cdot \hat{n}\, dA}{r^2}$. Integrating over the complete $4\pi$ solid angle of a closed surface enclosing the origin:
$$\Phi_E = \frac{q}{4\pi\epsilon_0} \oint d\Omega = \frac{q}{4\pi\epsilon_0} (4\pi) = \frac{q}{\epsilon_0}$$
If the charge lies outside $S$, the net solid angle subtended is zero, giving $\Phi_E = 0$. Superposition yields $\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0}$.

---

#### Symmetry Applications

##### Spherical Symmetry (Uniformly Charged Solid Sphere of Radius $R$, Total Charge $Q$)
* **Inside ($r \le R$):** $Q_{\text{enc}} = Q \left(\frac{r}{R}\right)^3$
  $$E(r) \cdot (4\pi r^2) = \frac{Q r^3}{\epsilon_0 R^3} \implies \vec{E}_{\text{in}}(r) = \frac{Q r}{4\pi\epsilon_0 R^3} \hat{r} = \frac{\rho r}{3\epsilon_0} \hat{r}$$
  $$V_{\text{in}}(r) = -\int_\infty^R E_{\text{out}} dr - \int_R^r E_{\text{in}} dr = \frac{Q}{8\pi\epsilon_0 R} \left[ 3 - \left(\frac{r}{R}\right)^2 \right]$$
* **Outside ($r \ge R$):** $Q_{\text{enc}} = Q$
  $$\vec{E}_{\text{out}}(r) = \frac{Q}{4\pi\epsilon_0 r^2} \hat{r}, \quad V_{\text{out}}(r) = \frac{Q}{4\pi\epsilon_0 r}$$

##### Cylindrical Symmetry (Infinite Cylinder of Radius $R$, Uniform Charge Density $\rho$)
* **Inside ($r \le R$):** $Q_{\text{enc}} = \pi r^2 L \rho$
  $$E(r) \cdot (2\pi r L) = \frac{\pi r^2 L \rho}{\epsilon_0} \implies \vec{E}_{\text{in}}(r) = \frac{\rho r}{2\epsilon_0} \hat{r}$$
* **Outside ($r \ge R$):** $Q_{\text{enc}} = \pi R^2 L \rho = \lambda L$
  $$E(r) \cdot (2\pi r L) = \frac{\lambda L}{\epsilon_0} \implies \vec{E}_{\text{out}}(r) = \frac{\lambda}{2\pi\epsilon_0 r} \hat{r} = \frac{\rho R^2}{2\epsilon_0 r} \hat{r}$$

##### Planar Symmetry (Infinite Sheet of Charge, Density $\sigma$)
Gaussian pillbox of cross-sectional area $A$ straddling the sheet:
$$2 E A = \frac{\sigma A}{\epsilon_0} \implies \vec{E} = \frac{\sigma}{2\epsilon_0} \hat{n}$$

---

### 1.3 Poisson's and Laplace's Equations & Uniqueness Theorems

#### Derivation
Substitute $\vec{E} = -\nabla V$ into $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$:
$$\nabla \cdot (-\nabla V) = \frac{\rho}{\epsilon_0} \implies \nabla^2 V = -\frac{\rho}{\epsilon_0} \quad \text{(Poisson's Equation)}$$

In regions free of continuous charge ($\rho = 0$):
$$\nabla^2 V = 0 \quad \text{(Laplace's Equation)}$$

In explicit coordinates, Laplace's equation reads:
* **Cartesian:** $\frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} = 0$
* **Spherical Polar ($r, \theta, \phi$):** $\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 \frac{\partial V}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial V}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 V}{\partial \phi^2} = 0$
* **Cylindrical ($r, \phi, z$):** $\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial V}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 V}{\partial \phi^2} + \frac{\partial^2 V}{\partial z^2} = 0$

#### First Uniqueness Theorem
**Statement:** The solution to Laplace’s equation in a volume $V$ is uniquely determined if the potential $V$ is specified on the boundary surface $S$ surrounding $V$ (Dirichlet boundary condition).

##### Proof
Suppose there exist two solutions $V_1$ and $V_2$ satisfying $\nabla^2 V_1 = 0$ and $\nabla^2 V_2 = 0$ in $V$, with $V_1|_S = V_2|_S = f(\vec{r})$.

Define a difference function $U = V_1 - V_2$. Then:
1. $\nabla^2 U = \nabla^2 V_1 - \nabla^2 V_2 = 0$ inside $V$.
2. $U|_S = V_1|_S - V_2|_S = 0$ on boundary $S$.

Apply Green’s First Identity:
$$\int_V \left[ U \nabla^2 U + (\nabla U)^2 \right] dV = \oint_S U (\nabla U) \cdot d\vec{A}$$

Since $\nabla^2 U = 0$ in $V$ and $U = 0$ on $S$:
$$\int_V (\nabla U)^2 dV = 0$$

Because $(\nabla U)^2 \ge 0$ everywhere, the integrand must be identically zero:
$$\nabla U = 0 \implies U(\vec{r}) = \text{constant}$$

Since $U = 0$ on boundary $S$, the constant is zero:
$$U(\vec{r}) = 0 \implies V_1(\vec{r}) = V_2(\vec{r}) \quad \forall\, \vec{r} \in V$$
Thus, the solution is unique. $\blacksquare$

#### Second Uniqueness Theorem
**Statement:** In a volume $V$ surrounded by conductors containing specified charges $Q_1, Q_2, \dots, Q_n$, the electric field $\vec{E} = -\nabla V$ is uniquely determined if the normal derivative $\frac{\partial V}{\partial n}$ (Neumann boundary condition) or total charges on bounding surfaces are specified.

---

### 1.4 Boundary Value Problems

#### 1.4.1 Method of Images

##### Infinite Grounded Conducting Plane ($z = 0$)
Place a point charge $+q$ at $(0, 0, d)$.
* **Image Charge Configuration:** Charge $-q$ located at $(0, 0, -d)$.
* **Potential for $z > 0$:**
  $$V(x, y, z) = \frac{q}{4\pi\epsilon_0} \left[ \frac{1}{\sqrt{x^2 + y^2 + (z - d)^2}} - \frac{1}{\sqrt{x^2 + y^2 + (z + d)^2}} \right]$$
* **Induced Surface Charge Density on Plane ($z = 0$):**
  $$\sigma(x, y) = -\epsilon_0 \left. \frac{\partial V}{\partial z} \right|_{z=0} = -\frac{q d}{2\pi (x^2 + y^2 + d^2)^{3/2}} = -\frac{q d}{2\pi (r_\perp^2 + d^2)^{3/2}}$$
* **Total Induced Charge:**
  $$Q_{\text{induced}} = \int_0^\infty \sigma(r_\perp) \, 2\pi r_\perp\, dr_\perp = -q d \int_0^\infty \frac{r_\perp\, dr_\perp}{(r_\perp^2 + d^2)^{3/2}} = -q$$
* **Force on Charge $+q$:**
  $$\vec{F} = -\frac{1}{4\pi\epsilon_0} \frac{q^2}{(2d)^2} \hat{z} = -\frac{q^2}{16\pi\epsilon_0 d^2} \hat{z}$$
* **Work Required to Bring $q$ from $\infty$ to $d$:**
  $$W = \int_\infty^d \vec{F} \cdot d\vec{z} = \int_\infty^d \left( -\frac{q^2}{16\pi\epsilon_0 z^2} \right) dz = -\frac{q^2}{16\pi\epsilon_0 d}$$

##### Grounded Conducting Sphere of Radius $R$
Place a point charge $q$ at distance $d$ ($d > R$) from center $O$.
* **Image Charge Magnitude:**
  $$q' = -q \frac{R}{d}$$
* **Image Charge Location:** Distance $b$ from origin along axis joining center and $q$:
  $$b = \frac{R^2}{d}$$
* **Potential Expression at Point $\vec{r}$ ($r \ge R$):**
  $$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \left[ \frac{q}{|\vec{r} - \vec{d}|} + \frac{q'}{|\vec{r} - \vec{b}|} \right] = \frac{q}{4\pi\epsilon_0} \left[ \frac{1}{\sqrt{r^2 + d^2 - 2rd\cos\theta}} - \frac{R/d}{\sqrt{r^2 + (R^2/d)^2 - 2r(R^2/d)\cos\theta}} \right]$$
* **Induced Charge Density at $r = R$:**
  $$\sigma(\theta) = -\epsilon_0 \left. \frac{\partial V}{\partial r} \right|_{r=R} = -\frac{q}{4\pi R} \frac{d^2 - R^2}{(R^2 + d^2 - 2Rd\cos\theta)^{3/2}}$$
* **Force on Charge $q$:**
  $$F = \frac{1}{4\pi\epsilon_0} \frac{q q'}{(d - b)^2} = -\frac{1}{4\pi\epsilon_0} \frac{q^2 (R/d)}{\left(d - \frac{R^2}{d}\right)^2} = -\frac{1}{4\pi\epsilon_0} \frac{q^2 R d}{(d^2 - R^2)^2}$$

##### Insulated Sphere Carrying Total Charge $Q$
Superimpose an additional image charge $q'' = Q - q' = Q + q \frac{R}{d}$ at the center $r = 0$.
* **Potential for $r \ge R$:**
  $$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \left[ \frac{q}{|\vec{r} - \vec{d}|} + \frac{q'}{|\vec{r} - \vec{b}|} + \frac{Q - q'}{r} \right]$$

---

#### 1.4.2 Separation of Variables

##### Cartesian Coordinates (3D Laplace Equation)
Assume $V(x,y,z) = X(x)Y(y)Z(z)$. Substituting into $\nabla^2 V = 0$ and dividing by $XYZ$:
$$\frac{1}{X}\frac{d^2 X}{dx^2} + \frac{1}{Y}\frac{d^2 Y}{dy^2} + \frac{1}{Z}\frac{d^2 Z}{dz^2} = 0 \implies -k_x^2 - k_y^2 + k_z^2 = 0$$

General solution components:
$$X(x) = C_1 \sin(k_x x) + C_2 \cos(k_x x)$$
$$Y(y) = C_3 \sin(k_y y) + C_4 \cos(k_y y)$$
$$Z(z) = C_5 \sinh(k_z z) + C_6 \cosh(k_z z) \quad \text{where } k_z = \sqrt{k_x^2 + k_y^2}$$

##### Spherical Polar Coordinates (Azimuthal Symmetry $\frac{\partial V}{\partial \phi} = 0$)
Assume $V(r,\theta) = R(r) \Theta(\theta)$. Laplace's equation separates into:
$$\frac{1}{R}\frac{d}{dr}\left(r^2 \frac{dR}{dr}\right) = l(l+1)$$
$$\frac{1}{\sin\theta}\frac{d}{d\theta}\left(\sin\theta \frac{d\Theta}{d\theta}\right) = -l(l+1)$$

Solutions:
$$R_l(r) = A_l r^l + \frac{B_l}{r^{l+1}}$$
$$\Theta_l(\theta) = P_l(\cos\theta) \quad \text{(Legendre Polynomials)}$$

General Solution with Azimuthal Symmetry:
$$V(r,\theta) = \sum_{l=0}^\infty \left( A_l r^l + \frac{B_l}{r^{l+1}} \right) P_l(\cos\theta)$$

Legendre Polynomial Properties:
* $P_0(x) = 1$
* $P_1(x) = x = \cos\theta$
* $P_2(x) = \frac{1}{2}(3x^2 - 1) = \frac{1}{2}(3\cos^2\theta - 1)$
* $P_3(x) = \frac{1}{2}(5x^3 - 3x)$
* Orthogonality relation:
  $$\int_{-1}^1 P_l(x) P_{l'}(x) dx = \frac{2}{2l+1} \delta_{ll'} \implies \int_0^\pi P_l(\cos\theta) P_{l'}(\cos\theta) \sin\theta d\theta = \frac{2}{2l+1} \delta_{ll'}$$

---

##### Example Application: Uncharged Conducting Sphere of Radius $R$ in Uniform Field $\vec{E}_0 = E_0 \hat{z}$
Boundary Conditions:
1. $V(r,\theta) \to -E_0 z = -E_0 r \cos\theta$ as $r \to \infty$
2. $V(R, \theta) = 0$

Solution Construction:
For $r \to \infty$, $A_1 r P_1(\cos\theta) = -E_0 r \cos\theta \implies A_1 = -E_0$, and $A_l = 0$ for $l \neq 1$.
$$V(r,\theta) = \left( -E_0 r + \frac{B_1}{r^2} \right) \cos\theta + \sum_{l \neq 1} \frac{B_l}{r^{l+1}} P_l(\cos\theta)$$

At $r = R$:
$$-E_0 R + \frac{B_1}{R^2} = 0 \implies B_1 = E_0 R^3; \quad B_l = 0 \ (l \neq 1)$$

Final Potential Outside Sphere ($r \ge R$):
$$V(r,\theta) = -E_0 r \cos\theta \left( 1 - \frac{R^3}{r^3} \right)$$

Induced Surface Charge Density:
$$\sigma(\theta) = -\epsilon_0 \left. \frac{\partial V}{\partial r} \right|_{r=R} = -\epsilon_0 \left[ -E_0 \cos\theta - \frac{2 E_0 R^3}{R^3} \cos\theta \right] = 3 \epsilon_0 E_0 \cos\theta$$

---

### 1.5 Multipole Expansion

#### Derivation of Potential Expansion
The potential due to a localized charge distribution $\rho(\vec{r}')$ at distance $r \gg r'$ is:
$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec{r}')}{|\vec{r} - \vec{r}'|} dV'$$

Using the generating function for Legendre polynomials, where $\frac{1}{|\vec{r} - \vec{r}'|} = \frac{1}{\sqrt{r^2 + r'^2 - 2rr'\cos\alpha}} = \frac{1}{r} \sum_{n=0}^\infty \left(\frac{r'}{r}\right)^n P_n(\cos\alpha)$:
$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \sum_{n=0}^\infty \frac{1}{r^{n+1}} \int (r')^n P_n(\cos\alpha) \rho(\vec{r}') dV'$$

Expanding the first three terms explicitly:

#### Monopole Term ($n=0$)
$$V_{\text{mono}}(\vec{r}) = \frac{1}{4\pi\epsilon_0 r} \int \rho(\vec{r}') dV' = \frac{Q_{\text{tot}}}{4\pi\epsilon_0 r}$$

#### Dipole Term ($n=1$)
$$V_{\text{dip}}(\vec{r}) = \frac{1}{4\pi\epsilon_0 r^2} \int r' \cos\alpha\, \rho(\vec{r}') dV' = \frac{\hat{r} \cdot \vec{p}}{4\pi\epsilon_0 r^2} = \frac{\vec{p} \cdot \vec{r}}{4\pi\epsilon_0 r^3}$$
where the **Electric Dipole Moment** is:
$$\vec{p} = \int \vec{r}' \rho(\vec{r}') dV' \quad \left(\text{for discrete charges: } \vec{p} = \sum_i q_i \vec{r}_i\right)$$

##### Electric Field of an Ideal Dipole
$$\vec{E}_{\text{dip}}(\vec{r}) = -\nabla \left( \frac{\vec{p} \cdot \hat{r}}{4\pi\epsilon_0 r^2} \right) = \frac{1}{4\pi\epsilon_0 r^3} \left[ 3(\vec{p} \cdot \hat{r})\hat{r} - \vec{p} \right] - \frac{\vec{p}}{3\epsilon_0} \delta^3(\vec{r})$$
(including the contact delta term at origin).

Coordinate Components (Dipole along $\hat{z}$):
$$E_r = \frac{2 p \cos\theta}{4\pi\epsilon_0 r^3}, \quad E_\theta = \frac{p \sin\theta}{4\pi\epsilon_0 r^3}, \quad E_\phi = 0$$

#### Quadrupole Term ($n=2$)
$$V_{\text{quad}}(\vec{r}) = \frac{1}{4\pi\epsilon_0 r^3} \int (r')^2 \left[ \frac{3\cos^2\alpha - 1}{2} \right] \rho(\vec{r}') dV' = \frac{1}{4\pi\epsilon_0 r^3} \sum_{i,j} \frac{1}{2} \hat{r}_i \hat{r}_j Q_{ij}$$
where the **Quadrupole Moment Tensor** $Q_{ij}$ is defined as:
$$Q_{ij} = \int \rho(\vec{r}') \left[ 3 x_i' x_j' - (r')^2 \delta_{ij} \right] dV'$$
* $Q_{ij}$ is symmetric ($Q_{ij} = Q_{ji}$) and traceless ($\text{Tr}(Q) = \sum_i Q_{ii} = 0$).

#### Torque and Energy of Dipole in External Field
* **Torque:** $\vec{\tau} = \vec{p} \times \vec{E}_{\text{ext}}$
* **Potential Energy:** $U = -\vec{p} \cdot \vec{E}_{\text{ext}}$
* **Force in Non-Uniform Field:** $\vec{F} = (\vec{p} \cdot \nabla) \vec{E}_{\text{ext}}$

---

### 1.6 Dielectric Media & Electrostatics in Matter

#### Polarization and Bound Charges
When matter is polarized, a dipole density $\vec{P}(\vec{r})$ (dipole moment per unit volume) is induced.

Potential due to polarization $\vec{P}$:
$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int_V \frac{\vec{P}(\vec{r}') \cdot (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dV' = \frac{1}{4\pi\epsilon_0} \int_V \vec{P}(\vec{r}') \cdot \nabla' \left( \frac{1}{|\vec{r} - \vec{r}'|} \right) dV'$$

Applying vector identity $\nabla' \cdot \left( \frac{\vec{P}}{\mathcal{R}} \right) = \frac{\nabla' \cdot \vec{P}}{\mathcal{R}} + \vec{P} \cdot \nabla' \left(\frac{1}{\mathcal{R}}\right)$ and Integration by Parts:
$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \oint_S \frac{\vec{P} \cdot \hat{n}'}{|\vec{r} - \vec{r}'|} dA' - \frac{1}{4\pi\epsilon_0} \int_V \frac{\nabla' \cdot \vec{P}}{|\vec{r} - \vec{r}'|} dV'$$

By defining:
* **Volume Bound Charge Density:** $\rho_b = -\nabla \cdot \vec{P}$
* **Surface Bound Charge Density:** $\sigma_b = \vec{P} \cdot \hat{n}$

$$V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \oint_S \frac{\sigma_b}{|\vec{r} - \vec{r}'|} dA' + \frac{1}{4\pi\epsilon_0} \int_V \frac{\rho_b}{|\vec{r} - \vec{r}'|} dV'$$

#### Electric Displacement Field $\vec{D}$
Total charge density $\rho = \rho_f + \rho_b$, where $\rho_f$ is free charge density.
$$\nabla \cdot \vec{E} = \frac{\rho_f + \rho_b}{\epsilon_0} = \frac{\rho_f - \nabla \cdot \vec{P}}{\epsilon_0} \implies \nabla \cdot (\epsilon_0 \vec{E} + \vec{P}) = \rho_f$$

Define **Electric Displacement Field**:
$$\vec{D} = \epsilon_0 \vec{E} + \vec{P}$$
$$\text{Differential Form: } \nabla \cdot \vec{D} = \rho_f, \quad \text{Integral Form: } \oint_S \vec{D} \cdot d\vec{A} = Q_{f, \text{enc}}$$

#### Linear Isotropic Dielectrics
For linear isotropic media:
$$\vec{P} = \epsilon_0 \chi_e \vec{E}$$
$$\vec{D} = \epsilon_0 (1 + \chi_e) \vec{E} = \epsilon_0 \epsilon_r \vec{E} = \epsilon \vec{E}$$
where:
* $\chi_e$ = Electric Susceptibility
* $\epsilon_r = 1 + \chi_e$ = Relative Permittivity (Dielectric Constant)
* $\epsilon = \epsilon_0 \epsilon_r$ = Permittivity of medium

#### Energy in Dielectric Media
$$W = \frac{1}{2} \int_V \vec{D} \cdot \vec{E} \, dV = \frac{1}{2} \int_V \epsilon E^2 \, dV$$

#### Electrostatic Boundary Conditions across Interface between Media 1 and 2
1. **Parallel Component of $\vec{E}$ (from $\nabla \times \vec{E} = 0$):**
   $$E_{1\parallel} = E_{2\parallel} \implies \vec{E}_{1\parallel} - \vec{E}_{2\parallel} = 0$$
2. **Perpendicular Component of $\vec{D}$ (from $\nabla \cdot \vec{D} = \rho_f$):**
   $$D_{1\perp} - D_{2\perp} = \sigma_f \implies \epsilon_1 E_{1\perp} - \epsilon_2 E_{2\perp} = \sigma_f$$
   If free surface charge $\sigma_f = 0$: $D_{1\perp} = D_{2\perp} \implies \epsilon_1 E_{1\perp} = \epsilon_2 E_{2\perp}$.
3. **Perpendicular Component of $\vec{E}$:**
   $$E_{1\perp} - E_{2\perp} = \frac{\sigma_{\text{total}}}{\epsilon_0} = \frac{\sigma_f + \sigma_b}{\epsilon_0}$$

---

## SECTION 2: MAGNETOSTATICS

---

### 2.1 Biot-Savart Law & Fundamental Equations

#### Biot-Savart Law
For a current element $I d\vec{l}$ at position $\vec{r}'$, the magnetic field $\vec{B}$ at observation point $\vec{r}$ is:
$$d\vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3}$$

For volume current density $\vec{J}(\vec{r}')$ and surface current density $\vec{K}(\vec{r}')$:
$$\vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J}(\vec{r}') \times (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dV' = \frac{\mu_0}{4\pi} \oint_S \frac{\vec{K}(\vec{r}') \times (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dA'$$

#### Absence of Magnetic Monopoles
$$\nabla \cdot \vec{B} = 0 \iff \oint_S \vec{B} \cdot d\vec{A} = 0$$

---

### 2.2 Standard Applications of Biot-Savart Law

#### Straight Wire Segment of Finite Length
For a wire carrying current $I$ at perpendicular distance $s$, subtending angles $\theta_1$ and $\theta_2$ at ends relative to normal:
$$B = \frac{\mu_0 I}{4\pi s} (\sin\theta_1 + \sin\theta_2)$$
* **Infinite Straight Wire ($\theta_1 = \theta_2 = \pi/2$):**
  $$B = \frac{\mu_0 I}{2\pi s}$$
* **Semi-Infinite Wire ($\theta_1 = 0, \theta_2 = \pi/2$):**
  $$B = \frac{\mu_0 I}{4\pi s}$$

#### Circular Current Loop (Radius $R$, Current $I$) along Axis at Distance $z$
$$B(z) = \frac{\mu_0 I R^2}{2 (R^2 + z^2)^{3/2}}$$
* **At Center ($z = 0$):** $B = \frac{\mu_0 I}{2R}$
* **For $N$ Circular turns:** $B = \frac{\mu_0 N I}{2R}$

#### Solenoid (Length $L$, Radius $R$, $n = N/L$ turns per unit length)
On the axis of a finite solenoid subtending angles $\theta_1$ and $\theta_2$ with the axis ends:
$$B = \frac{\mu_0 n I}{2} (\cos\theta_1 + \cos\theta_2)$$
* **Infinite Solenoid ($L \gg R$):** Inside: $B = \mu_0 n I$; Outside: $B = 0$.

#### Toroid (Inner Radius $a$, Outer Radius $b$, Total Turns $N$)
$$B(r) = \begin{cases} 
0, & r < a \text{ or } r > b \\
\frac{\mu_0 N I}{2\pi r}, & a < r < b 
\end{cases}$$

---

### 2.3 Ampere’s Circuital Law

#### Differential and Integral Forms
$$\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} = \mu_0 \int_S \vec{J} \cdot d\vec{A}$$
Applying Stokes’ Theorem ($\oint_C \vec{B} \cdot d\vec{l} = \int_S (\nabla \times \vec{B}) \cdot d\vec{A}$):
$$\nabla \times \vec{B} = \mu_0 \vec{J} \quad \text{(Valid only for Magnetostatics where } \nabla \cdot \vec{J} = 0 \text{)}$$

---

### 2.4 Magnetic Potentials

#### Vector Potential $\vec{A}$
Since $\nabla \cdot \vec{B} = 0$, vector Calculus implies $\vec{B}$ can be written as curl of a vector potential $\vec{A}$:
$$\vec{B} = \nabla \times \vec{A}$$

Substituting into Ampere's Law:
$$\nabla \times (\nabla \times \vec{A}) = \mu_0 \vec{J} \implies \nabla(\nabla \cdot \vec{A}) - \nabla^2 \vec{A} = \mu_0 \vec{J}$$

In magnetostatics, choosing the **Coulomb Gauge** $\nabla \cdot \vec{A} = 0$:
$$\nabla^2 \vec{A} = -\mu_0 \vec{J} \quad \text{(Vector Poisson Equation)}$$

Solution for localized currents:
$$\vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J}(\vec{r}')}{|\vec{r} - \vec{r}'|} dV'$$

#### Magnetic Scalar Potential $U_M$
In regions where current density $\vec{J} = 0$:
$$\nabla \times \vec{B} = 0 \implies \vec{B} = -\mu_0 \nabla U_M$$
Since $\nabla \cdot \vec{B} = 0$, $U_M$ obeys Laplace’s equation:
$$\nabla^2 U_M = 0$$

---

### 2.5 Magnetic Dipole Moment and Field

#### Definition
For a closed planar current loop $I$ bounding area $A$:
$$\vec{m} = I \vec{A} = I \oint d\vec{a} = \frac{I}{2} \oint (\vec{r} \times d\vec{l})$$
For localized volume current:
$$\vec{m} = \frac{1}{2} \int_V (\vec{r}' \times \vec{J}(\vec{r}')) dV'$$

#### Dipole Vector Potential & Field Derivation
For $r \gg r'$, expanding $\frac{1}{|\vec{r}-\vec{r}'|}$:
$$\vec{A}_{\text{dip}}(\vec{r}) = \frac{\mu_0}{4\pi r^2} \int_V \vec{J}(\vec{r}') (\hat{r} \cdot \vec{r}') dV' = \frac{\mu_0}{4\pi} \frac{\vec{m} \times \hat{r}}{r^2} = \frac{\mu_0}{4\pi} \frac{\vec{m} \times \vec{r}}{r^3}$$

Taking curl ($\vec{B} = \nabla \times \vec{A}_{\text{dip}}$):
$$\vec{B}_{\text{dip}}(\vec{r}) = \frac{\mu_0}{4\pi r^3} \left[ 3(\vec{m} \cdot \hat{r})\hat{r} - \vec{m} \right] + \frac{2\mu_0}{3} \vec{m} \delta^3(\vec{r})$$

#### Dipole Interaction Formulas
* **Torque:** $\vec{\tau} = \vec{m} \times \vec{B}_{\text{ext}}$
* **Potential Energy:** $U = -\vec{m} \cdot \vec{B}_{\text{ext}}$
* **Force in Inhomogeneous Field:** $\vec{F} = \nabla(\vec{m} \cdot \vec{B}_{\text{ext}})$

---

### 2.6 Magnetization & Magnetic Materials

#### Magnetization Vector $\vec{M}$ and Bound Currents
Magnetization $\vec{M}$ is defined as magnetic dipole moment per unit volume.

Vector potential of magnetized volume:
$$\vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{M}(\vec{r}') \times (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dV' = \frac{\mu_0}{4\pi} \int_V \frac{\nabla' \times \vec{M}}{|\vec{r} - \vec{r}'|} dV' + \frac{\mu_0}{4\pi} \oint_S \frac{\vec{M} \times \hat{n}'}{|\vec{r} - \vec{r}'|} dA'$$

Defining **Bound Currents**:
* **Volume Bound Current Density:** $\vec{J}_b = \nabla \times \vec{M}$
* **Surface Bound Current Density:** $\vec{K}_b = \vec{M} \times \hat{n}$

#### Magnetic Field Strength $\vec{H}$
Total current density $\vec{J} = \vec{J}_f + \vec{J}_b$:
$$\frac{1}{\mu_0} (\nabla \times \vec{B}) = \vec{J}_f + \vec{J}_b = \vec{J}_f + (\nabla \times \vec{M}) \implies \nabla \times \left( \frac{\vec{B}}{\mu_0} - \vec{M} \right) = \vec{J}_f$$

Define Auxiliary Magnetic Field $\vec{H}$:
$$\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$$
$$\nabla \times \vec{H} = \vec{J}_f, \quad \oint_C \vec{H} \cdot d\vec{l} = I_{f, \text{enc}}$$

#### Linear Isotropic Magnetic Media
$$\vec{M} = \chi_m \vec{H}$$
$$\vec{B} = \mu_0(1 + \chi_m)\vec{H} = \mu_0 \mu_r \vec{H} = \mu \vec{H}$$
where:
* $\chi_m$ = Magnetic Susceptibility ($\chi_m < 0$ Diamagnetic, $\chi_m > 0$ Paramagnetic, $\chi_m \gg 1$ Ferromagnetic)
* $\mu_r = 1 + \chi_m$ = Relative Permeability
* $\mu = \mu_0 \mu_r$ = Permeability of medium

#### Magnetostatic Boundary Conditions
1. **Normal Component of $\vec{B}$ (from $\nabla \cdot \vec{B} = 0$):**
   $$B_{1\perp} = B_{2\perp} \implies B_{1\perp} - B_{2\perp} = 0$$
2. **Tangential Component of $\vec{H}$ (from $\nabla \times \vec{H} = \vec{J}_f$):**
   $$\vec{H}_{1\parallel} - \vec{H}_{2\parallel} = \vec{K}_f \times \hat{n}_{12}$$
   If free surface current $\vec{K}_f = 0$: $H_{1\parallel} = H_{2\parallel} \implies \frac{B_{1\parallel}}{\mu_1} = \frac{B_{2\parallel}}{\mu_2}$.

---

## SECTION 3: ELECTRODYNAMICS & MAXWELL’S EQUATIONS

---

### 3.1 Electrodynamic Induction & Inductance

#### Faraday’s Law of Electromagnetic Induction
$$\mathcal{E} = \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{A}$$
Using Stokes’ Theorem:
$$\int_S (\nabla \times \vec{E}) \cdot d\vec{A} = -\int_S \frac{\partial \vec{B}}{\partial t} \cdot d\vec{A} \implies \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$

#### Motional EMF
For a conductor moving with velocity $\vec{v}$ in magnetic field $\vec{B}$:
$$\mathcal{E} = \oint (\vec{v} \times \vec{B}) \cdot d\vec{l}$$

#### Self and Mutual Inductance
* **Self-Inductance $L$:** $\Phi_B = L I \implies \mathcal{E} = -L \frac{dI}{dt}$
* **Mutual Inductance $M_{12}$:** $\Phi_2 = M_{12} I_1 \implies \mathcal{E}_2 = -M_{12} \frac{dI_1}{dt}$
* **Neumann Formula for Mutual Inductance:**
  $$M_{12} = \frac{\mu_0}{4\pi} \oint_{C_1} \oint_{C_2} \frac{d\vec{l}_1 \cdot d\vec{l}_2}{|\vec{r}_1 - \vec{r}_2|}$$
  By reciprocity: $M_{12} = M_{21} = M$.

#### Energy Stored in Magnetic Field
$$W = \frac{1}{2} L I^2 = \frac{1}{2\mu_0} \int_V B^2 \, dV = \frac{1}{2} \int_V (\vec{B} \cdot \vec{H}) \, dV$$

---

### 3.2 Maxwell's Modification & Displacement Current

#### Inconsistency of Ampere’s Law
Taking the divergence of magnetostatic Ampere's Law $\nabla \times \vec{B} = \mu_0 \vec{J}$:
$$\nabla \cdot (\nabla \times \vec{B}) = 0 \implies \mu_0 (\nabla \cdot \vec{J}) = 0$$
However, the Continuity Equation for charge conservation states:
$$\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$$
Thus, Ampere's Law violates charge conservation for time-varying fields ($\frac{\partial \rho}{\partial t} \neq 0$).

#### Maxwell's Correction
Using Gauss's Law $\rho = \nabla \cdot (\epsilon_0 \vec{E})$ in the continuity equation:
$$\nabla \cdot \vec{J} + \frac{\partial}{\partial t} [\nabla \cdot (\epsilon_0 \vec{E})] = 0 \implies \nabla \cdot \left( \vec{J} + \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right) = 0$$

Maxwell added the **Displacement Current Density** $\vec{J}_d$:
$$\vec{J}_d = \epsilon_0 \frac{\partial \vec{E}}{\partial t} \quad \left(\text{in matter: } \vec{J}_d = \frac{\partial \vec{D}}{\partial t}\right)$$

Modified Ampere-Maxwell Law:
$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

---

### 3.3 Maxwell’s Equations (Comprehensive Overview)

#### Differential and Integral Forms

| Law / Name | Differential Form (Free Space) | Differential Form (In Media) | Integral Form | Physical Significance |
| :--- | :--- | :--- | :--- | :--- |
| **Gauss's Law for $\vec{E}$** | $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$ | $\nabla \cdot \vec{D} = \rho_f$ | $\oint_S \vec{D} \cdot d\vec{A} = Q_{f, \text{enc}}$ | Electric charges act as sources/sinks of $\vec{E}$. |
| **Gauss's Law for $\vec{B}$** | $\nabla \cdot \vec{B} = 0$ | $\nabla \cdot \vec{B} = 0$ | $\oint_S \vec{B} \cdot d\vec{A} = 0$ | Magnetic monopoles do not exist; field lines close. |
| **Faraday's Law** | $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ | $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ | $\oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$ | Time-varying $\vec{B}$ field induces non-conservative $\vec{E}$ field. |
| **Ampere-Maxwell Law** | $\nabla \times \vec{B} = \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial \vec{E}}{\partial t}$ | $\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}$ | $\oint_C \vec{H} \cdot d\vec{l} = I_{f,\text{enc}} + \int_S \frac{\partial \vec{D}}{\partial t} \cdot d\vec{A}$ | Electric currents and time-varying $\vec{E}$ fields generate $\vec{B}$ fields. |

---

### 3.4 Boundary Conditions at General Interfaces

Consider an interface between Medium 1 ($\epsilon_1, \mu_1, \sigma_1$) and Medium 2 ($\epsilon_2, \mu_2, \sigma_2$) with free surface charge density $\sigma_f$ and free surface current density $\vec{K}_f$. The unit normal vector $\hat{n}_{12}$ points from Medium 1 to Medium 2.

```
       Medium 2 (\epsilon_2, \mu_2)
       ^ \hat{n}_{12}
=======|====================== Interface ( carrying \sigma_f, \vec{K}_f )
       |
       Medium 1 (\epsilon_1, \mu_1)
```

#### Complete Derivations via Pillbox and Amperian Loop Integrals

##### 1. Normal Component of $\vec{D}$
Construct a Gaussian pillbox straddling the interface with surface area $A$ and height $h \to 0$:
$$\oint_S \vec{D} \cdot d\vec{A} = Q_{f, \text{enc}} \implies D_{2\perp} A - D_{1\perp} A = \sigma_f A$$
$$\hat{n}_{12} \cdot (\vec{D}_2 - \vec{D}_1) = \sigma_f \iff D_{2\perp} - D_{1\perp} = \sigma_f$$

##### 2. Normal Component of $\vec{B}$
Applying $\oint_S \vec{B} \cdot d\vec{A} = 0$ over the same pillbox:
$$\hat{n}_{12} \cdot (\vec{B}_2 - \vec{B}_1) = 0 \iff B_{2\perp} = B_{1\perp}$$

##### 3. Tangential Component of $\vec{E}$
Construct an Amperian loop $C$ crossing the interface with length $L$ parallel to boundary and height $h \to 0$:
$$\oint_C \vec{E} \cdot d\vec{l} = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{A}$$
As $h \to 0$, the flux $\int \vec{B} \cdot d\vec{A} \to 0$:
$$E_{2\parallel} L - E_{1\parallel} L = 0 \implies \hat{n}_{12} \times (\vec{E}_2 - \vec{E}_1) = 0 \iff E_{2\parallel} = E_{1\parallel}$$

##### 4. Tangential Component of $\vec{H}$
Applying $\oint_C \vec{H} \cdot d\vec{l} = I_{f, \text{enc}} + \int_S \frac{\partial \vec{D}}{\partial t} \cdot d\vec{A}$:
As $h \to 0$, the displacement current flux vanishes, leaving only free surface current $I_{f, \text{enc}} = (\vec{K}_f \cdot \hat{t}_{\text{perp}}) L$:
$$\hat{n}_{12} \times (\vec{H}_2 - \vec{H}_1) = \vec{K}_f \iff H_{2\parallel} - H_{1\parallel} = |\vec{K}_f \times \hat{n}_{12}|$$

#### Summary of Interface Boundary Equations
1. $D_{2\perp} - D_{1\perp} = \sigma_f \implies \epsilon_2 E_{2\perp} - \epsilon_1 E_{1\perp} = \sigma_f$
2. $B_{2\perp} - B_{1\perp} = 0 \implies \mu_2 H_{2\perp} - \mu_1 H_{1\perp} = 0$
3. $\vec{E}_{2\parallel} - \vec{E}_{1\parallel} = 0$
4. $\vec{H}_{2\parallel} - \vec{H}_{1\parallel} = \vec{K}_f \times \hat{n}_{12} \implies \frac{\vec{B}_{2\parallel}}{\mu_2} - \frac{\vec{B}_{1\parallel}}{\mu_1} = \vec{K}_f \times \hat{n}_{12}$

---

### 3.5 Potential Formulations & Gauge Invariance

#### Scalar and Vector Potentials ($\Phi, \vec{A}$)
Since $\nabla \cdot \vec{B} = 0$, define:
$$\vec{B} = \nabla \times \vec{A}$$
Substituting this into $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$:
$$\nabla \times \left( \vec{E} + \frac{\partial \vec{A}}{\partial t} \right) = 0 \implies \vec{E} + \frac{\partial \vec{A}}{\partial t} = -\nabla \Phi$$
$$\vec{E} = -\nabla \Phi - \frac{\partial \vec{A}}{\partial t}$$

#### Gauge Transformations
The physical fields $\vec{E}$ and $\vec{B}$ remain invariant under the potential transformations:
$$\vec{A}' = \vec{A} + \nabla \Lambda$$
$$\Phi' = \Phi - \frac{\partial \Lambda}{\partial t}$$
where $\Lambda(\vec{r}, t)$ is any arbitrary scalar function (Gauge Function).

#### Gauge Fixings

##### 1. Coulomb Gauge ($\nabla \cdot \vec{A} = 0$)
Substitute potentials into $\nabla \cdot \vec{E} = \rho / \epsilon_0$:
$$\nabla \cdot \left( -\nabla \Phi - \frac{\partial \vec{A}}{\partial t} \right) = \frac{\rho}{\epsilon_0} \implies \nabla^2 \Phi + \frac{\partial}{\partial t}(\nabla \cdot \vec{A}) = -\frac{\rho}{\epsilon_0} \implies \nabla^2 \Phi = -\frac{\rho}{\epsilon_0}$$
* **Property:** Scalar potential $\Phi$ is strictly electrostatic/instantaneous:
  $$\Phi(\vec{r}, t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec{r}', t)}{|\vec{r} - \vec{r}'|} dV'$$
* **Equation for $\vec{A}$:**
  $$\nabla^2 \vec{A} - \mu_0 \epsilon_0 \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \vec{J} + \mu_0 \epsilon_0 \nabla \left( \frac{\partial \Phi}{\partial t} \right)$$

##### 2. Lorenz (Lorentz) Gauge ($\nabla \cdot \vec{A} + \mu_0 \epsilon_0 \frac{\partial \Phi}{\partial t} = 0$)
Substituting this condition uncouples the wave equations for both potentials:

* **Scalar Potential Wave Equation:**
  $$\nabla^2 \Phi - \mu_0 \epsilon_0 \frac{\partial^2 \Phi}{\partial t^2} = -\frac{\rho}{\epsilon_0} \iff \Box^2 \Phi = -\frac{\rho}{\epsilon_0}$$
* **Vector Potential Wave Equation:**
  $$\nabla^2 \vec{A} - \mu_0 \epsilon_0 \frac{\partial^2 \vec{A}}{\partial t^2} = -\mu_0 \vec{J} \iff \Box^2 \vec{A} = -\mu_0 \vec{J}$$
where $\Box^2 \equiv \nabla^2 - \frac{1}{c^2} \frac{\partial^2}{\partial t^2}$ is the d'Alembertian operator.

---

### 3.6 Energy and Momentum Conservation Laws

#### Poynting’s Theorem (Derivation)
Work done per unit time by electromagnetic forces on charges inside volume $V$:
$$\frac{dW}{dt} = \int_V \vec{f} \cdot \vec{v} \, dV = \int_V \rho (\vec{E} + \vec{v} \times \vec{B}) \cdot \vec{v} \, dV = \int_V (\vec{E} \cdot \vec{J}) \, dV$$

Express $\vec{J}$ using Ampere-Maxwell Law $\vec{J} = \frac{1}{\mu_0}(\nabla \times \vec{B}) - \epsilon_0 \frac{\partial \vec{E}}{\partial t}$:
$$\vec{E} \cdot \vec{J} = \frac{1}{\mu_0} \vec{E} \cdot (\nabla \times \vec{B}) - \epsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$$

Use vector identity $\nabla \cdot (\vec{E} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \vec{E} \cdot (\nabla \times \vec{B})$:
$$\vec{E} \cdot (\nabla \times \vec{B}) = \vec{B} \cdot \left(-\frac{\partial \vec{B}}{\partial t}\right) - \nabla \cdot (\vec{E} \times \vec{B})$$

Substitute back into integrand:
$$\vec{E} \cdot \vec{J} = -\frac{1}{\mu_0} \vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - \epsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} - \frac{1}{\mu_0} \nabla \cdot (\vec{E} \times \vec{B})$$
$$\vec{E} \cdot \vec{J} = -\frac{\partial}{\partial t} \left( \frac{1}{2} \epsilon_0 E^2 + \frac{1}{2\mu_0} B^2 \right) - \nabla \cdot \left( \frac{1}{\mu_0} \vec{E} \times \vec{B} \right)$$

Defining:
* **EM Energy Density:** $u = \frac{1}{2} \epsilon_0 E^2 + \frac{1}{2\mu_0} B^2$
* **Poynting Vector (Energy Flux Density):** $\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$

Differential Form of Poynting's Theorem:
$$\frac{\partial u}{\partial t} + \nabla \cdot \vec{S} = -\vec{J} \cdot \vec{E}$$
Integral Form:
$$\frac{d W_{\text{mech}}}{dt} + \frac{d}{dt} \int_V u \, dV = -\oint_S \vec{S} \cdot d\vec{A}$$

#### Maxwell Stress Tensor and Conservation of Momentum
The force density $\vec{f} = \rho \vec{E} + \vec{J} \times \vec{B}$ can be expressed as:
$$\vec{f} = \nabla \cdot \mathbf{T} - \mu_0 \epsilon_0 \frac{\partial \vec{S}}{\partial t}$$
where $\mathbf{T}$ is the **Maxwell Stress Tensor** with components:
$$T_{ij} = \epsilon_0 \left( E_i E_j - \frac{1}{2} \delta_{ij} E^2 \right) + \frac{1}{\mu_0} \left( B_i B_j - \frac{1}{2} \delta_{ij} B^2 \right)$$

* **Field Momentum Density:** $\vec{g} = \mu_0 \epsilon_0 \vec{S} = \frac{\vec{S}}{c^2}$
* **Conservation Equation:** $\frac{\partial}{\partial t} (\vec{g}_{\text{mech}} + \vec{g}_{\text{field}})_i = \sum_j \frac{\partial T_{ij}}{\partial x_j}$

---

## SECTION 4: ELECTROMAGNETIC WAVES

---

### 4.1 Wave Equations in Vacuum

In charge-free, current-free vacuum ($\rho = 0, \vec{J} = 0$):
$$\nabla \cdot \vec{E} = 0 \quad (1), \quad \nabla \cdot \vec{B} = 0 \quad (2)$$
$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad (3), \quad \nabla \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} \quad (4)$$

Take the curl of Equation (3):
$$\nabla \times (\nabla \times \vec{E}) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$$
$$\nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E} = -\frac{\partial}{\partial t}\left(\mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}\right)$$
Since $\nabla \cdot \vec{E} = 0$:
$$\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$

Similarly, taking the curl of Equation (4) yields:
$$\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$$

Comparing to standard 3D wave equation $\nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}$:
$$v = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = c \approx 3 \times 10^8 \text{ m/s}$$

---

### 4.2 Monochromatic Plane EM Waves in Free Space

Plane wave solutions propagating in direction of wave vector $\vec{k}$:
$$\vec{E}(\vec{r}, t) = \vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)}$$
$$\vec{B}(\vec{r}, t) = \vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)}$$
where $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$.

#### Transverse Nature Proof
Applying differential operators $\nabla \to i\vec{k}$ and $\frac{\partial}{\partial t} \to -i\omega$:
1. $\nabla \cdot \vec{E} = 0 \implies i\vec{k} \cdot \vec{E} = 0 \implies \vec{k} \perp \vec{E}$
2. $\nabla \cdot \vec{B} = 0 \implies i\vec{k} \cdot \vec{B} = 0 \implies \vec{k} \perp \vec{B}$

#### Inter-relation between $\vec{E}$ and $\vec{B}$
Applying $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$:
$$i\vec{k} \times \vec{E} = -(-i\omega \vec{B}) \implies \vec{B} = \frac{\vec{k} \times \vec{E}}{\omega} = \frac{\hat{k} \times \vec{E}}{c}$$

Thus, $\vec{E}, \vec{B}$, and $\vec{k}$ form a mutually orthogonal right-handed triad.

#### Wave Energy and Intensity Expressions
* **Magnitude Ratio:** $E_0 = c B_0$
* **Time-Averaged Poynting Vector (Intensity):**
  $$\langle \vec{S} \rangle = \frac{1}{2\mu_0} \text{Re}(\vec{E} \times \vec{B}^*) = \frac{1}{2} \epsilon_0 c E_0^2 \hat{k} = \frac{E_0^2}{2 \eta_0} \hat{k}$$
  where $\eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 377\ \Omega$ is the **Intrinsic Impedance of Free Space**.
* **Radiation Pressure:**
  * Perfect Absorber: $P_{\text{rad}} = \frac{\langle S \rangle}{c} = \langle u \rangle$
  * Perfect Reflector: $P_{\text{rad}} = \frac{2\langle S \rangle}{c} = 2\langle u \rangle$

---

### 4.3 EM Waves in Linear Isotropic Non-Conducting Media

Replacing $\epsilon_0 \to \epsilon$ and $\mu_0 \to \mu$:
* **Phase Velocity:** $v = \frac{1}{\sqrt{\epsilon \mu}} = \frac{c}{n}$
* **Refractive Index:** $n = \sqrt{\frac{\epsilon \mu}{\epsilon_0 \mu_0}} = \sqrt{\epsilon_r \mu_r} \approx \sqrt{\epsilon_r}$ (for non-magnetic media $\mu_r \approx 1$).
* **Wave Impedance:** $\eta = \sqrt{\frac{\mu}{\epsilon}} = \frac{\eta_0}{n}$

---

### 4.4 EM Waves in Conducting Media

#### Derivation of Wave Equation with Conductivity $\sigma$
Maxwell's equations in linear conductor ($\vec{J} = \sigma \vec{E}$):
$$\nabla \cdot \vec{E} = 0, \quad \nabla \cdot \vec{B} = 0$$
$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}, \quad \nabla \times \vec{B} = \mu \sigma \vec{E} + \mu \epsilon \frac{\partial \vec{E}}{\partial t}$$

Taking curl of $\nabla \times \vec{E}$:
$$\nabla^2 \vec{E} = \mu \sigma \frac{\partial \vec{E}}{\partial t} + \mu \epsilon \frac{\partial^2 \vec{E}}{\partial t^2}$$

#### Complex Wave Vector & Skin Depth Analysis
Substituting plane wave ansatz $\vec{E} = \vec{E}_0 e^{i(\tilde{k} z - \omega t)}$ into wave equation:
$$-\tilde{k}^2 = -i \omega \mu \sigma - \mu \epsilon \omega^2 \implies \tilde{k}^2 = \mu \epsilon \omega^2 \left( 1 + i \frac{\sigma}{\epsilon \omega} \right)$$

Let $\tilde{k} = k + i\kappa$:
$$k^2 - \kappa^2 = \mu \epsilon \omega^2$$
$$2 k \kappa = \mu \sigma \omega$$

Solving for real ($k$) and imaginary ($\kappa$) parts:
$$k = \omega \sqrt{\frac{\mu \epsilon}{2}} \left[ \sqrt{1 + \left(\frac{\sigma}{\epsilon \omega}\right)^2} + 1 \right]^{1/2}$$
$$\kappa = \omega \sqrt{\frac{\mu \epsilon}{2}} \left[ \sqrt{1 + \left(\frac{\sigma}{\epsilon \omega}\right)^2} - 1 \right]^{1/2}$$

Attenuated Electric Field:
$$\vec{E}(z, t) = \vec{E}_0 e^{-\kappa z} e^{i(k z - \omega t)}$$

#### Skin Depth ($\delta$)
Distance over which field amplitude decays to $1/e$ of initial value:
$$\delta \equiv \frac{1}{\kappa}$$

##### Limiting Regimes:

1. **Good Conductors ($\frac{\sigma}{\epsilon \omega} \gg 1$):**
   $$k \approx \kappa \approx \sqrt{\frac{\mu \sigma \omega}{2}} = \sqrt{\pi f \mu \sigma}$$
   $$\delta = \sqrt{\frac{2}{\mu \sigma \omega}} = \frac{1}{\sqrt{\pi f \mu \sigma}}$$
   * Phase difference between $\vec{E}$ and $\vec{B}$: $\vec{B}$ lags $\vec{E}$ by $\phi = 45^\circ$ ($\pi/4$ radians).
   * Intrinsic Impedance: $\tilde{\eta} = \sqrt{\frac{\mu}{\epsilon}} \left(1 + i\frac{\sigma}{\epsilon\omega}\right)^{-1/2} \approx (1-i)\sqrt{\frac{\mu\omega}{2\sigma}}$.

2. **Poor Conductors / Low-Loss Dielectrics ($\frac{\sigma}{\epsilon \omega} \ll 1$):**
   $$k \approx \omega \sqrt{\mu \epsilon}, \quad \kappa \approx \frac{\sigma}{2}\sqrt{\frac{\mu}{\epsilon}}$$
   $$\delta \approx \frac{2}{\sigma}\sqrt{\frac{\epsilon}{\mu}}$$

---

### 4.5 Dispersion in Dielectrics & Plasma Dynamics

#### Drude-Lorentz Dispersion Model
Model electrons as damped harmonic oscillators driven by electric field:
$$m \left( \frac{d^2 \vec{x}}{dt^2} + \gamma \frac{d\vec{x}}{dt} + \omega_0^2 \vec{x} \right) = q \vec{E}_0 e^{-i\omega t}$$

Solving for displacement $\vec{x}(t)$ and polarization $\vec{P} = N q \vec{x}$:
$$\tilde{\epsilon}_r(\omega) = 1 + \frac{N q^2}{\epsilon_0 m} \sum_j \frac{f_j}{\omega_0j}^2 - \omega^2 - i \gamma_j \omega}$$

#### Normal vs Anomalous Dispersion
* **Normal Dispersion ($\frac{dn}{d\lambda} < 0$ or $\frac{dn}{d\omega} > 0$):** Away from resonance frequencies, $n$ increases with $\omega$ (blue light bends more than red light).
* **Anomalous Dispersion ($\frac{dn}{d\omega} < 0$):** Near resonance frequencies ($\omega \approx \omega_0$), absorption is maximum and refractive index decreases with frequency.

#### Wave Propagation in Plasma
In a dilute plasma, restoring force is zero ($\omega_0 = 0$) and damping $\gamma \approx 0$:
$$\tilde{\epsilon}_r(\omega) = 1 - \frac{\omega_p^2}{\omega^2}$$
where **Plasma Frequency** is:
$$\omega_p = \sqrt{\frac{N e^2}{m \epsilon_0}}$$

Dispersion Relation in Plasma:
$$k^2 = \frac{\omega^2}{c^2} \epsilon_r(\omega) \implies \omega^2 = \omega_p^2 + k^2 c^2$$

* **High Frequency Regime ($\omega > \omega_p$):** $k$ is real. Wave propagates through plasma.
* **Low Frequency Regime ($\omega < \omega_p$):** $k$ is purely imaginary. Wave undergoes total attenuation/reflection (e.g., ionospheric reflection of radio waves).
* **Group Velocity and Phase Velocity:**
  $$v_p = \frac{\omega}{k} = \frac{c}{\sqrt{1 - \omega_p^2/\omega^2}} > c$$
  $$v_g = \frac{d\omega}{dk} = c \sqrt{1 - \frac{\omega_p^2}{\omega^2}} < c \implies v_p \cdot v_g = c^2$$

---

## SECTION 5: REFLECTION, REFRACTION, POLARIZATION, AND OPTICS

---

### 5.1 Reflection and Refraction at Plane Interfaces

Consider plane wave incident at angle $\theta_i$ on planar boundary between medium 1 ($n_1$) and medium 2 ($n_2$).

#### Kinematic Boundary Conditions & Laws
Phase matching condition across boundary $z = 0$ requires equal spatial dependence for all times:
$$(\vec{k}_i \cdot \vec{r})_{z=0} = (\vec{k}_r \cdot \vec{r})_{z=0} = (\vec{k}_t \cdot \vec{r})_{z=0}$$
* **Law of Reflection:** $\theta_i = \theta_r$
* **Snell's Law of Refraction:** $n_1 \sin\theta_i = n_2 \sin\theta_t$

---

#### Derivation of Fresnel’s Equations
Let incidence plane be $xz$-plane ($z=0$ boundary).

##### Case A: s-Polarization / TE Mode ($\vec{E}$ Perpendicular to Plane of Incidence)
$\vec{E}$ fields directed along $\hat{y}$.
* **Fields:**
  $$\vec{E}_i = E_{0i} \hat{y} e^{i(\vec{k}_i \cdot \vec{r} - \omega t)}, \quad \vec{E}_r = E_{0r} \hat{y} e^{i(\vec{k}_r \cdot \vec{r} - \omega t)}, \quad \vec{E}_t = E_{0t} \hat{y} e^{i(\vec{k}_t \cdot \vec{r} - \omega t)}$$

* **Boundary Conditions at $z=0$:**
  1. $E_{\parallel}$ continuous: $E_{0i} + E_{0r} = E_{0t}$
  2. $H_{\parallel}$ continuous (assuming $\mu_1 = \mu_2 = \mu_0$):
     $$-B_{0i}\cos\theta_i + B_{0r}\cos\theta_r = -B_{0t}\cos\theta_t$$
     Since $B = \frac{n}{c} E$:
     $$n_1 (E_{0i} - E_{0r}) \cos\theta_i = n_2 E_{0t} \cos\theta_t$$

Solving linear system:
* **Reflection Coefficient ($r_\perp$):**
  $$r_\perp = \left(\frac{E_{0r}}{E_{0i}}\right)_\perp = \frac{n_1 \cos\theta_i - n_2 \cos\theta_t}{n_1 \cos\theta_i + n_2 \cos\theta_t}$$
* **Transmission Coefficient ($t_\perp$):**
  $$t_\perp = \left(\frac{E_{0t}}{E_{0i}}\right)_\perp = \frac{2 n_1 \cos\theta_i}{n_1 \cos\theta_i + n_2 \cos\theta_t}$$

---

##### Case B: p-Polarization / TM Mode ($\vec{E}$ Parallel to Plane of Incidence)
$\vec{B}$ fields directed along $\hat{y}$.

* **Boundary Conditions at $z=0$:**
  1. $E_{\parallel}$ continuous: $(E_{0i} - E_{0r}) \cos\theta_i = E_{0t} \cos\theta_t$
  2. $H_{\parallel}$ continuous: $n_1 (E_{0i} + E_{0r}) = n_2 E_{0t}$

Solving linear system:
* **Reflection Coefficient ($r_\parallel$):**
  $$r_\parallel = \left(\frac{E_{0r}}{E_{0i}}\right)_\parallel = \frac{n_2 \cos\theta_i - n_1 \cos\theta_t}{n_2 \cos\theta_i + n_1 \cos\theta_t}$$
* **Transmission Coefficient ($t_\parallel$):**
  $$t_\parallel = \left(\frac{E_{0t}}{E_{0i}}\right)_\parallel = \frac{2 n_1 \cos\theta_i}{n_2 \cos\theta_i + n_1 \cos\theta_t}$$

---

#### Brewster’s Angle ($\theta_B$)
Angle of incidence at which p-polarized reflection vanishes ($r_\parallel = 0$):
$$n_2 \cos\theta_B - n_1 \cos\theta_t = 0$$
Using Snell’s Law $\cos\theta_t = \sqrt{1 - \left(\frac{n_1}{n_2}\sin\theta_B\right)^2}$:
$$\tan\theta_B = \frac{n_2}{n_1}$$
At Brewster angle, $\theta_B + \theta_t = 90^\circ$. Reflected light is completely $s$-polarized.

#### Total Internal Reflection (TIR) & Evanescent Waves
When $n_1 > n_2$, critical angle $\theta_c$ is:
$$\sin\theta_c = \frac{n_2}{n_1}$$
For $\theta_i > \theta_c$, $\sin\theta_t = \frac{n_1}{n_2}\sin\theta_i > 1 \implies \cos\theta_t = i\sqrt{\frac{n_1^2}{n_2^2}\sin^2\theta_i - 1} \equiv i \beta$.

Transmitted Wave Field dependence:
$$\vec{E}_t \propto e^{i(k_{tx} x + k_{tz} z - \omega t)} = e^{-\kappa_z z} e^{i(k_{tx} x - \omega t)}$$
where decay constant $\kappa_z = \frac{\omega}{c} \sqrt{n_1^2 \sin^2\theta_i - n_2^2}$. This represents an **Evanescent Wave** propagating along the interface and exponentially decaying perpendicular to it into Medium 2.

---

### 5.2 Polarization States & Matrix Optics

#### Classification of Polarization States
Consider wave propagating in $+\hat{z}$ direction:
$$\vec{E}(z,t) = E_{0x} \cos(kz - \omega t) \hat{x} + E_{0y} \cos(kz - \omega t + \delta) \hat{y}$$

1. **Linear Polarization:** $\delta = 0$ or $\delta = \pm \pi$.
2. **Circular Polarization:** $E_{0x} = E_{0y} = E_0$ and $\delta = \pm \pi/2$.
   * **Right Circularly Polarized (RCP / $+ \pi/2$):** $\vec{E}$ rotates clockwise looking into propagation direction.
   * **Left Circularly Polarized (LCP / $- \pi/2$):** $\vec{E}$ rotates counter-clockwise.
3. **Elliptical Polarization:** General case ($E_{0x} \neq E_{0y}$ or $\delta \neq 0, \pm \pi, \pm \pi/2$).

#### Jones Vector Representation
* Linear Horizontal ($x$-axis): $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$
* Linear Vertical ($y$-axis): $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$
* Linear at angle $\theta$: $\begin{pmatrix} \cos\theta \\ \sin\theta \end{pmatrix}$
* Right Circular (RCP): $\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -i \end{pmatrix}$
* Left Circular (LCP): $\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ i \end{pmatrix}$

#### Jones Matrices for Optical Elements
* **Linear Polarizer (Transmission Axis along $x$):** $\mathbf{J}_x = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$
* **Linear Polarizer (Transmission Axis at angle $\theta$):**
  $$\mathbf{J}(\theta) = \begin{pmatrix} \cos^2\theta & \sin\theta\cos\theta \\ \sin\theta\cos\theta & \sin^2\theta \end{pmatrix}$$
* **Retarders (Phase Shift $\Delta \phi = \phi_x - \phi_y$):**
  $$\mathbf{J}_{\text{retarder}} = \begin{pmatrix} e^{i\phi_x} & 0 \\ 0 & e^{i\phi_y} \end{pmatrix}$$
  * **Quarter-Wave Plate (QWP, $\Delta\phi = \pi/2$):** $\begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}$
  * **Half-Wave Plate (HWP, $\Delta\phi = \pi$):** $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$

#### Malus's Law
When linearly polarized light of intensity $I_0$ passes through an analyzer rotated by angle $\theta$:
$$I = I_0 \cos^2\theta$$

---

### 5.3 Interference & Coherence

#### Two-Beam Interference
Superposition of two waves $E_1 = E_{01} \cos(\omega t + \phi_1)$ and $E_2 = E_{02} \cos(\omega t + \phi_2)$:
$$I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos\delta$$
where path difference phase shift $\delta = \frac{2\pi}{\lambda} \Delta x + (\phi_2 - \phi_1)$.

* **Constructive Interference:** $\delta = 2m\pi \implies I_{\text{max}} = (\sqrt{I_1} + \sqrt{I_2})^2$
* **Destructive Interference:** $\delta = (2m+1)\pi \implies I_{\text{min}} = (\sqrt{I_1} - \sqrt{I_2})^2$
* **Visibility / Contrast:**
  $$\mathcal{V} = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}$$

#### Thin Film Interference
Film of thickness $d$ and refractive index $n$ illuminated at angle of refraction $\theta_r$:
* **Optical Path Difference:** $\Delta = 2 n d \cos\theta_r$
* **Phase Shift on Reflection (Stokes Relations):** $\pi$ shift occurs when reflecting off a denser medium.
  * For Reflection (one $\pi$ shift): Constructive $2 n d \cos\theta_r = (m + 1/2)\lambda$; Destructive $2 n d \cos\theta_r = m\lambda$.

#### Fabry-Pérot Interferometer
Multiple-beam interference instrument.

Intensity Transmission Formula (Airy distribution):
$$I_T = \frac{I_0}{1 + F \sin^2(\delta/2)}$$
where:
* **Coefficient of Finesse:** $F = \frac{4R}{(1 - R)^2}$ ($R$ = mirror reflectivity)
* **Finesse $\mathcal{F}$:**
  $$\mathcal{F} = \frac{\pi \sqrt{F}}{2} = \frac{\pi \sqrt{R}}{1 - R}$$
* **Free Spectral Range (FSR):** $\Delta \lambda_{\text{FSR}} = \frac{\lambda^2}{2 n d}$

#### Coherence Theory
* **Temporal Coherence:** Measure of monochromaticity.
  * Coherence Time: $\tau_c \approx \frac{1}{\Delta \nu}$
  * Coherence Length: $L_c = c \tau_c \approx \frac{\lambda^2}{\Delta \lambda}$
* **Spatial Coherence:** Phase relation across wavefront space. Transverse coherence length $L_s \approx \frac{\lambda D}{d_s}$ ($d_s$ = source size, $D$ = distance).

---

### 5.4 Diffraction

#### Fraunhofer Diffraction (Far-Field Approximation)

##### 1. Single Slit (Width $a$)
Intensity Distribution:
$$I(\theta) = I_0 \left( \frac{\sin\beta}{\beta} \right)^2 = I_0 \text{sinc}^2(\beta) \quad \text{where } \beta = \frac{\pi a \sin\theta}{\lambda}$$
* Minima condition: $a \sin\theta = m \lambda \quad (m = \pm 1, \pm 2, \dots)$

##### 2. Double Slit (Width $a$, Separation $d$)
Combination of single-slit diffraction and two-slit interference:
$$I(\theta) = I_0 \left( \frac{\sin\beta}{\beta} \right)^2 \cos^2\alpha \quad \text{where } \alpha = \frac{\pi d \sin\theta}{\lambda}$$
* Missing Orders Condition: $\frac{d}{a} = \frac{m_{\text{interference}}}{n_{\text{diffraction}}}$

##### 3. $N$-Slit Diffraction Grating
$$I(\theta) = I_0 \left( \frac{\sin\beta}{\beta} \right)^2 \left( \frac{\sin N\alpha}{\sin\alpha} \right)^2$$
* **Principal Maxima:** $d \sin\theta = m \lambda \quad (m = 0, \pm 1, \pm 2, \dots)$
* **Chromating Resolving Power:** $R = \frac{\lambda}{\Delta \lambda} = m N$
* **Angular Dispersion:** $\frac{d\theta}{d\lambda} = \frac{m}{d \cos\theta}$

##### 4. Circular Aperture (Diameter $D$)
Intensity pattern gives Airy Disk:
$$I(\theta) = I_0 \left( \frac{2 J_1(\gamma)}{\gamma} \right)^2 \quad \text{where } \gamma = \frac{\pi D \sin\theta}{\lambda}$$
* First Minimum Angle (Rayleigh Criterion):
  $$\sin\theta_1 = 1.22 \frac{\lambda}{D}$$

---

#### Fresnel Diffraction (Near-Field)

##### Fresnel Half-Period Zones
Radius of $n$-th zone for plane wave incident on circular aperture:
$$r_n \approx \sqrt{n f \lambda} \implies r_n \propto \sqrt{n}$$

##### Zone Plate
An optical device that blocks alternate zones (either odd or even):
* Action mimics a lens with primary focal length:
  $$f_1 = \frac{r_1^2}{\lambda}$$
* Higher order focal lengths: $f_m = \frac{f_1}{2m-1}$ ($m = 1, 2, 3, \dots$).

---

## SECTION 6: DYNAMICS OF CHARGED PARTICLES IN EM FIELDS

---

### 6.1 Lorentz Force Equation

For charge $q$, mass $m$ moving with velocity $\vec{v}$:
$$\vec{F} = \frac{d\vec{p}}{dt} = q (\vec{E} + \vec{v} \times \vec{B})$$

Power delivered to particle:
$$P = \vec{F} \cdot \vec{v} = q (\vec{E} \cdot \vec{v}) + q (\vec{v} \times \vec{B}) \cdot \vec{v} = q (\vec{E} \cdot \vec{v})$$
Magnetic fields do zero work on moving charged particles ($\vec{F}_B \perp \vec{v}$).

---

### 6.2 Motion in Pure Static Uniform Electric Field ($\vec{E} = E_0 \hat{y}$)

Initial velocity $\vec{v}_0 = v_{0x} \hat{x}$.
* Acceleration: $a_x = 0, \quad a_y = \frac{q E_0}{m}$
* Velocity components: $x(t) = v_{0x} t, \quad y(t) = \frac{1}{2} \left(\frac{q E_0}{m}\right) t^2$
* **Trajectory (Parabola):**
  $$y(x) = \frac{q E_0}{2 m v_{0x}^2} x^2$$

---

### 6.3 Motion in Pure Static Uniform Magnetic Field ($\vec{B} = B_0 \hat{z}$)

Initial velocity $\vec{v}_0 = v_{0x} \hat{x} + v_{0z} \hat{z}$.

#### Differential Equations of Motion
$$m \frac{d\vec{v}}{dt} = q (\vec{v} \times B_0 \hat{z}) \implies \begin{cases} \dot{v}_x = \frac{q B_0}{m} v_y = \omega_c v_y \\ \dot{v}_y = -\frac{q B_0}{m} v_x = -\omega_c v_x \\ \dot{v}_z = 0 \end{cases}$$
where **Cyclotron Frequency** is $\omega_c = \frac{|q| B_0}{m}$.

#### Trajectory Solution
* Parallel motion: $z(t) = z_0 + v_{0z} t$ (constant linear motion along field line)
* Perpendicular motion: Differentiating $\dot{v}_x$:
  $$\ddot{v}_x = \omega_c \dot{v}_y = -\omega_c^2 v_x \implies v_x(t) = v_\perp \cos(\omega_c t + \phi_0)$$
  $$v_y(t) = -v_\perp \sin(\omega_c t + \phi_0)$$

Integrating velocity equations:
$$x(t) = x_0 + R_c \sin(\omega_c t + \phi_0)$$
$$y(t) = y_0 + R_c \cos(\omega_c t + \phi_0)$$
where **Cyclotron Radius (Larmor Radius)** is:
$$R_c = \frac{m v_\perp}{|q| B_0}$$

#### Path Characteristics
The resulting motion is a **Helical Path**:
* **Pitch of Helix ($p$):** Distance traveled along $\vec{B}$ in one cyclotron period $T = \frac{2\pi}{\omega_c}$:
  $$p = v_{\parallel} T = \frac{2\pi m v_{\parallel}}{|q| B_0}$$

---

### 6.4 Motion in Crossed Electric and Magnetic Fields ($\vec{E} \perp \vec{B}$)

Let $\vec{E} = E_0 \hat{y}$ and $\vec{B} = B_0 \hat{z}$.

#### Step-by-Step Derivation of Drift Motion
Equations of motion:
$$m \ddot{x} = q B_0 \dot{y} \quad (1)$$
$$m \ddot{y} = q E_0 - q B_0 \dot{x} \quad (2)$$
$$m \ddot{z} = 0 \quad (3)$$

Define $\omega_c = \frac{q B_0}{m}$. Rewrite (1) and (2):
$$\ddot{x} = \omega_c \dot{y}$$
$$\ddot{y} = \omega_c \left( \frac{E_0}{B_0} - \dot{x} \right)$$

Define velocity shift $u_x = \dot{x} - \frac{E_0}{B_0}$ and $u_y = \dot{y}$:
$$\dot{u}_x = \omega_c u_y$$
$$\dot{u}_y = -\omega_c u_x$$

Taking derivative of $\dot{u}_x$:
$$\ddot{u}_x + \omega_c^2 u_x = 0$$

General Solution for velocities (assuming particle starts from origin at $t=0$ with zero velocity):
$$u_x(t) = -\frac{E_0}{B_0} \cos(\omega_c t) \implies \dot{x}(t) = \frac{E_0}{B_0} \left[ 1 - \cos(\omega_c t) \right]$$
$$u_y(t) = \frac{E_0}{B_0} \sin(\omega_c t) \implies \dot{y}(t) = \frac{E_0}{B_0} \sin(\omega_c t)$$

Integrating positions:
$$x(t) = \frac{E_0}{\omega_c B_0} (\omega_c t - \sin\omega_c t)$$
$$y(t) = \frac{E_0}{\omega_c B_0} (1 - \cos\omega_c t)$$

Defining rolling circle radius $R = \frac{E_0}{\omega_c B_0} = \frac{m E_0}{q B_0^2}$ and drift velocity $v_d = \frac{E_0}{B_0}$:
$$x(t) = R (\omega_c t - \sin\omega_c t)$$
$$y(t) = R (1 - \cos\omega_c t)$$

#### Physical Interpretation
This represents a **Cycloid / Trochoid Trajectory** consisting of:
1. Circular motion with frequency $\omega_c$ and radius $R$.
2. Uniform linear drift along $+\hat{x}$ with **$\vec{E} \times \vec{B}$ Drift Velocity**:
   $$\vec{v}_d = \frac{\vec{E} \times \vec{B}}{B^2}$$

* **Crucial Note:** The drift velocity $\vec{v}_d$ is independent of both the particle's mass $m$ and charge $q$ (including charge sign).

#### Velocity Selector Condition
For non-deflected straight-line trajectory ($\vec{F}_{\text{net}} = 0$):
$$q E = q v B \implies v = \frac{E}{B}$$

---

### 6.5 Relativistic Particle Dynamics Overview

When particle speeds approach $c$ ($v \approx c$), relativistic momentum $\vec{p} = \gamma m_0 \vec{v}$ must be used, where $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$.

#### Relativistic Lorentz Equation
$$\frac{d}{dt}(\gamma m_0 \vec{v}) = q (\vec{E} + \vec{v} \times \vec{B})$$

* **Relativistic Cyclotron Frequency:**
  $$\omega_c^{\text{rel}} = \frac{|q| B}{\gamma m_0} = \omega_c^{\text{classical}} \sqrt{1 - \frac{v^2}{c^2}}$$
  Since $\gamma$ increases with energy, the cyclotron frequency decreases at high energies (requiring frequency modulation in Synchrotrons).
* **Relativistic Larmor Radius:**
  $$R_c^{\text{rel}} = \frac{\gamma m_0 v_\perp}{|q| B} = \frac{p_\perp}{|q| B}$$

---

## SECTION 7: CSIR NET FORMULA MATRIX & EXAM TACTICS

---

### Quick Reference Formula Matrix

```
+------------------------------------+---------------------------------------------------------------------------------+
| Physical Quantity                  | Fundamental Equation / Formula                                                  |
+------------------------------------+---------------------------------------------------------------------------------+
| Poisson / Laplace Equations        | \nabla^2 V = -\rho/\epsilon_0  |  \nabla^2 V = 0                                |
| Conductive Sphere Image Charge     | q' = -q(R/d),   b = R^2/d                                                       |
| Spherical Harmonic Expansion       | V(r,\theta) = \sum_{l=0}^\infty (A_l r^l + B_l r^{-(l+1)}) P_l(\cos\theta)      |
| Dipole Electric Field              | \vec{E} = \frac{1}{4\pi\epsilon_0 r^3} [3(\vec{p}\cdot\hat{r})\hat{r} - \vec{p}]|
| Bound Charge Densities             | \rho_b = -\nabla \cdot \vec{P},   \sigma_b = \vec{P} \cdot \hat{n}              |
| Bound Current Densities            | \vec{J}_b = \nabla \times \vec{M},   \vec{K}_b = \vec{M} \times \hat{n}          |
| Magnetic Vector Potential          | \nabla^2 \vec{A} = -\mu_0 \vec{J}  (\text{Coulomb Gauge } \nabla\cdot\vec{A}=0) |
| Poynting Vector & Energy Density   | \vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B}),  u = \frac{1}{2}(\epsilon E^2 + B^2/\mu_0) |
| Skin Depth (\delta)                | \delta = \sqrt{\frac{2}{\mu \sigma \omega}} \quad (\text{Good Conductors})      |
| Plasma Frequency & Dispersion      | \omega_p = \sqrt{\frac{N e^2}{m \epsilon_0}},   \omega^2 = \omega_p^2 + k^2 c^2|
| Brewster's Angle                   | \tan\theta_B = \frac{n_2}{n_1}                                                  |
| Fresnel Reflectivity (Normal)      | R = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2                                  |
| Rayleigh Criterion (Circular)      | \theta_1 = 1.22 \frac{\lambda}{D}                                               |
| Grating Resolving Power            | R = \frac{\lambda}{\Delta \lambda} = m N                                        |
| Cyclotron Radius & Frequency       | R_c = \frac{m v_\perp}{q B},   \omega_c = \frac{q B}{m}                         |
| E x B Drift Velocity               | \vec{v}_d = \frac{\vec{E} \times \vec{B}}{B^2}                                 |
+------------------------------------+---------------------------------------------------------------------------------+
```

---

### CSIR NET Exam Shortcuts & Problem-Solving Tactics

1. **Dimensional Consistency Checks:**
   Always verify dimensions of complicated field equations before selecting options. Note that $[\vec{E}] = [\vec{v} \times \vec{B}] \implies E/B$ has dimensions of velocity ($m/s$). $[\mu_0 \epsilon_0] = 1/c^2$.

2. **Symmetry Rules for Multipole Expansion:**
   * If a system has zero total charge ($Q = 0$), the lowest non-zero term (usually dipole) is **independent** of the choice of origin.
   * For symmetric charge distributions ($\rho(\vec{r}) = \rho(-\vec{r})$), all odd multipole moments (dipole, octupole, etc.) vanish identically.

3. **Boundary Condition Fast-Rules:**
   * At a interface with no surface charge ($\sigma_f = 0$), $D_\perp$ is continuous. Thus $E_\perp$ jumps by ratio $\epsilon_1/\epsilon_2$.
   * At a conductor boundary ($E_{\text{inside}} = 0$), field outside is purely normal: $\vec{E} = \frac{\sigma}{\epsilon_0} \hat{n}$.
   * Tangential $\vec{E}$ is **always continuous** across any boundary, regardless of surface charge or currents.

4. **Poynting Flux Calculations:**
   When calculating power flow through surfaces in coaxial cables, wires, or capacitors:
   * Find $\vec{E}$ and $\vec{B}$ at the boundary surface.
   * Evaluate $\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$.
   * Integrate $\oint_S \vec{S} \cdot d\vec{A}$ over the surface. The result matches $P = V I$ or $I^2 R$ or $-\frac{d U}{dt}$.

5. **Crossed Fields Drift Trajectory Quick Analysis:**
   If a particle starts from rest in crossed fields ($\vec{E} = E \hat{y}, \vec{B} = B \hat{z}$), its maximum displacement along the electric field $\hat{y}$ is $y_{\text{max}} = 2 R = \frac{2 m E}{q B^2}$, and its average drift speed along $\hat{x}$ is $v_d = E/B$.
