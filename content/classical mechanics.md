# COMPREHENSIVE STUDY NOTES: CLASSICAL MECHANICS

---

## MODULE 1: NEWTONIAN MECHANICS, NON-INERTIAL FRAMES & PSEUDOFORCES

### 1.1 Fundamentals of Newtonian Mechanics
Classical mechanics describes the dynamical evolution of macroscopic physical systems based on Newton's laws of motion.

#### Newton’s Laws of Motion
1. **First Law (Law of Inertia):** A body remains at rest or in a state of uniform linear motion unless acted upon by a net external force.
   $$\vec{F}_{\text{net}} = 0 \iff \vec{v} = \text{constant}$$
2. **Second Law (Law of Dynamics):** The rate of change of linear momentum of a body is directly proportional to the applied force and takes place in the direction of the force.
   $$\vec{F} = \frac{d\vec{p}}{dt} = \frac{d}{dt}(m\vec{v})$$
   If rest mass $m$ is constant:
   $$\vec{F} = m\vec{a} = m\frac{d^2\vec{r}}{dt^2}$$
3. **Third Law (Action-Reaction):** To every action, there is an equal and opposite reaction.
   $$\vec{F}_{12} = -\vec{F}_{21}$$
   *Strong form of Newton's Third Law:* $\vec{F}_{12}$ acts along the line joining particles 1 and 2 (central forces).

#### Frame of Reference
An **Inertial Frame** is a reference frame in which Newton's first law holds true (zero acceleration frame). Any reference frame moving at a constant velocity relative to an inertial frame is also an inertial frame (Galilean Invariance).

---

### 1.2 Non-Inertial Reference Frames & Transformation Equations

A **Non-Inertial Frame** is an accelerating reference frame. Newton’s second law in its standard form $\vec{F} = m\vec{a}$ does not hold in non-inertial frames unless fictitious forces (pseudoforces) are added.

#### Kinematics in Rotating Frames
Consider an inertial reference frame $S$ with origin $O$ and standard unit vectors $\{\hat{i}, \hat{j}, \hat{k}\}$, and a rotating reference frame $S'$ with origin $O'$ sharing the same origin ($O \equiv O'$) rotating with an instantaneous angular velocity vector $\vec{\omega}(t)$ relative to $S$.

Let $\vec{r}$ be the position vector of a particle.

$$\vec{r} = x'\hat{i}' + y'\hat{j}' + z'\hat{k}'$$

When taking the time derivative in the inertial frame $S$:

$$\left(\frac{d\vec{r}}{dt}\right)_S = \frac{dx'}{dt}\hat{i}' + \frac{dy'}{dt}\hat{j}' + \frac{dz'}{dt}\hat{k}' + x'\frac{d\hat{i}'}{dt} + y'\frac{d\hat{j}'}{dt} + z'\frac{d\hat{k}'}{dt}$$

The rate of change of rotating basis vectors is given by:
$$\frac{d\hat{i}'}{dt} = \vec{\omega} \times \hat{i}', \quad \frac{d\hat{j}'}{dt} = \vec{\omega} \times \hat{j}', \quad \frac{d\hat{k}'}{dt} = \vec{\omega} \times \hat{k}'$$

Defining the velocity observed in frame $S'$ as $\vec{v}' = \left(\frac{d\vec{r}}{dt}\right)_{S'} = \dot{x}'\hat{i}' + \dot{y}'\hat{j}' + \dot{z}'\hat{k}'$, we obtain the fundamental operator relation:

$$\left(\frac{d}{dt}\right)_S = \left(\frac{d}{dt}\right)_{S'} + \vec{\omega} \times$$

##### Derivation of Velocity Transformation
Applying the operator to the position vector $\vec{r}$:

$$\vec{v}_S = \vec{v}_{S'} + \vec{\omega} \times \vec{r}$$

##### Derivation of Acceleration Transformation
Applying the operator derivative to velocity $\vec{v}_S$:

$$\vec{a}_S = \left(\frac{d\vec{v}_S}{dt}\right)_S = \left( \left(\frac{d}{dt}\right)_{S'} + \vec{\omega} \times \right) (\vec{v}_{S'} + \vec{\omega} \times \vec{r})$$

Expanding terms linearly:

$$\vec{a}_S = \left(\frac{d\vec{v}_{S'}}{dt}\right)_{S'} + \frac{d\vec{\omega}}{dt} \times \vec{r} + \vec{\omega} \times \left(\frac{d\vec{r}}{dt}\right)_{S'} + \vec{\omega} \times \vec{v}_{S'} + \vec{\omega} \times (\vec{\omega} \times \vec{r})$$

$$\vec{a}_S = \vec{a}_{S'} + \dot{\vec{\omega}} \times \vec{r} + 2(\vec{\omega} \times \vec{v}_{S'}) + \vec{\omega} \times (\vec{\omega} \times \vec{r})$$

---

### 1.3 Pseudoforces in Rotating Frames

Multiplying by mass $m$ and rearranging for observed acceleration in the rotating frame $\vec{a}_{S'} \equiv \vec{a}'$:

$$m\vec{a}' = \vec{F}_{\text{real}} - m\vec{a}_0 - 2m(\vec{\omega} \times \vec{v}') - m\vec{\omega} \times (\vec{\omega} \times \vec{r}) - m\dot{\vec{\omega}} \times \vec{r}$$

Where $\vec{a}_0$ is translational acceleration of frame $S'$ relative to $S$.

| Pseudoforce Component | Mathematical Expression | Key Physical Characteristic |
| :--- | :--- | :--- |
| **Linear Inertial Force** | $\vec{F}_{\text{linear}} = -m\vec{a}_0$ | Arises from pure translational acceleration of frame |
| **Coriolis Force** | $\vec{F}_{\text{Cor}} = -2m(\vec{\omega} \times \vec{v}')$ | Dependent on particle velocity relative to rotating frame; orthogonal to $\vec{v}'$ |
| **Centrifugal Force** | $\vec{F}_{\text{Cent}} = -m\vec{\omega} \times (\vec{\omega} \times \vec{r})$ | Radially outward from rotation axis; function of position |
| **Euler Force** | $\vec{F}_{\text{Euler}} = -m\left(\frac{d\vec{\omega}}{dt} \times \vec{r}\right)$ | Non-zero only for non-constant rotational acceleration |

---

### 1.4 Physical Consequences of Coriolis and Centrifugal Forces

#### 1. Effective Gravity on Rotating Earth
Consider Earth rotating with constant angular speed $\Omega = 7.292 \times 10^{-5}\text{ rad/s}$ around the polar axis. At latitude $\lambda$:

$$\vec{g}_{\text{eff}} = \vec{g}_0 - \vec{\Omega} \times (\vec{\Omega} \times \vec{r})$$

Magnitude of effective gravitational acceleration:

$$g_{\text{eff}} \approx g_0 - \Omega^2 R \cos^2\lambda$$

- **At Poles ($\lambda = \pm 90^\circ$):** $g_{\text{eff}} = g_0$ (Centrifugal force is zero).
- **At Equator ($\lambda = 0^\circ$):** $g_{\text{eff}} = g_0 - \Omega^2 R$ (Maximum reduction in weight).

The angle of deflection $\alpha$ (plumb line angle relative to true radial vector) is given by:

$$\tan \alpha \approx \frac{\Omega^2 R \sin\lambda \cos\lambda}{g_0}$$

```
                North Pole
                   N
                   |  / Omega
                   | /
                   |/_____ Surface
                  /|\
                 / | \
                /  |  \ Latitude lambda
               /   |   \
   Equator    O----|----\--------------
                   |
                   |
                South Pole
```

#### 2. Horizontal Deflection of Moving Objects
The Coriolis force on Earth ($\vec{F}_{\text{Cor}} = -2m\vec{\Omega} \times \vec{v}'$):
- **Northern Hemisphere ($\lambda > 0$):** Deflects moving particles to their **right**.
- **Southern Hemisphere ($\lambda < 0$):** Deflects moving particles to their **left**.
- **Cyclonic Motion:** Low-pressure centers cause fluid flow inward. Deflection to the right in the Northern Hemisphere induces **counter-clockwise** atmospheric cyclones (and clockwise in the Southern Hemisphere).

#### 3. Quantitative Derivation: Deflection of a Freely Falling Body

Consider a particle dropped from rest from a height $h$ at latitude $\lambda$ in the Northern Hemisphere.

Setup local coordinate system on Earth's surface:
- $\hat{i}'$: Eastward
- $\hat{j}'$: Northward
- $\hat{k}'$: Upward (vertically along radius)

Earth’s rotation vector:
$$\vec{\Omega} = 0\hat{i}' + \Omega \cos\lambda \hat{j}' + \Omega \sin\lambda \hat{k}'$$

Unperturbed trajectory ( zeroth-order approximation in $\Omega$):
$$\vec{r}^{(0)}(t) = \left(h - \frac{1}{2}gt^2\right)\hat{k}' \implies \vec{v}^{(0)}(t) = -gt\hat{k}'$$

First-order Coriolis acceleration:
$$\vec{a}_{\text{Cor}} = -2(\vec{\Omega} \times \vec{v}^{(0)}) = -2 \begin{vmatrix} \hat{i}' & \hat{j}' & \hat{k}' \\ 0 & \Omega\cos\lambda & \Omega\sin\lambda \\ 0 & 0 & -gt \end{vmatrix} = 2\Omega g t \cos\lambda \hat{i}'$$

Integrating twice with respect to time $t$ (from initial conditions $\vec{x}(0)=0, \vec{v}(0)=0$):

$$x'(t) = \frac{1}{3}\Omega g t^3 \cos\lambda$$

The total time of fall for height $h$ is $t_f = \sqrt{\frac{2h}{g}}$. Substituting $t_f$:

$$x'_f = \frac{1}{3}\Omega g \left(\frac{2h}{g}\right)^{3/2} \cos\lambda = \frac{2}{3}\Omega h \sqrt{\frac{2h}{g}}\cos\lambda$$

> **Key Result:** A freely falling object is deflected **Eastward** by an amount $x'_f = \frac{2}{3}\Omega \cos\lambda \sqrt{\frac{2h^3}{g}}$.

---

### 1.5 Foucault Pendulum
A simple pendulum free to oscillate in any 2D plane.

#### Equations of Motion
For small amplitude oscillations ($z \approx 0, T \approx mg$), the horizontal dynamics governed by Coriolis force are:

$$\ddot{x} + \omega_0^2 x - 2\Omega_z \dot{y} = 0$$
$$\ddot{y} + \omega_0^2 y + 2\Omega_z \dot{x} = 0$$

where $\omega_0 = \sqrt{\frac{g}{l}}$ and $\Omega_z = \Omega \sin\lambda$.

Defining a complex coordinate $u(t) = x(t) + i y(t)$:

$$\ddot{u} + 2i\Omega_z \dot{u} + \omega_0^2 u = 0$$

Assuming solution $u(t) = e^{-i\Omega_z t} v(t)$, and using approximation $\Omega_z \ll \omega_0$:

$$\ddot{v} + \omega_0^2 v = 0 \implies v(t) = A \cos(\omega_0 t + \delta)$$
$$u(t) = A \cos(\omega_0 t + \delta) e^{-i\Omega_z t}$$

#### Precession Frequency and Period
The factor $e^{-i\Omega_z t}$ represents a clockwise rotation of the plane of oscillation at precession rate:

$$\Omega_{\text{precession}} = \Omega \sin\lambda$$

$$\text{Time period of 360}^\circ\text{ rotation } T_{\text{precess}} = \frac{24\text{ hours}}{|\sin\lambda|}$$

---

## MODULE 2: DYNAMICAL SYSTEMS, PHASE SPACE DYNAMICS & STABILITY ANALYSIS

### 2.1 Concept of Phase Space
For a dynamical system with $f$ degrees of freedom, the **Phase Space** is a $2f$-dimensional space spanned by $f$ generalized coordinates $q_i$ and $f$ generalized momenta $p_i$ (or velocities $\dot{q}_i$).

- A single point in phase space completely specifies the state of the system at time $t$.
- **Uniqueness Theorem:** Trajectories in phase space corresponding to deterministic autonomous systems can **never intersect**, because specified initial conditions $(q_0, p_0)$ uniquely define the future trajectory.

---

### 2.2 Phase Portraits for 1D Mechanical Systems

Given $H(q, p) = \frac{p^2}{2m} + V(q) = E$:

$$p(q) = \pm \sqrt{2m(E - V(q))}$$

#### 1. Simple Harmonic Oscillator (SHO)
$V(q) = \frac{1}{2}kq^2$

$$E = \frac{p^2}{2m} + \frac{1}{2}kq^2 \implies \frac{q^2}{(2E/k)} + \frac{p^2}{(2mE)} = 1$$

Phase space trajectories are concentric **ellipses** centered at $(0,0)$.

```
            p (momentum)
               ^
               |   ...--...
               | .          .
               |/            \
    -----------+---------------> q (coordinate)
              /|              /
               | .          .
               |   ''--''
```

#### 2. Rigid/Simple Pendulum
$V(\theta) = -mgl\cos\theta$
Total Energy: $E = \frac{p_\theta^2}{2m l^2} - mgl\cos\theta$

- **Libration (Oscillation, $E < mgl$):** Closed elliptical loops around stable fixed points $(2n\pi, 0)$.
- **Rotation ($E > mgl$):** Unbounded wavy lines traversing continuously in $q$.
- **Separatrix ($E = mgl$):** The boundary trajectory separating libration and rotation. Equation:
  $$p_\theta = \pm 2ml \sqrt{g/l} \cos\left(\frac{\theta}{2}\right)$$
  Connects unstable fixed points $((2n+1)\pi, 0)$.

```
   p_theta
     ^
  ---+---------------------------------- (Rotation E > mgl)
     |       /---------\       /---------\
     |      /   Libration\    /   Libration\
  ---|-----|--- (0,0) ----|--|-- (2pi,0) --|---- (Separatrix E = mgl)
     |      \            /    \            /
     |       \----------/      \----------/
  ---+---------------------------------- (Rotation E > mgl)
     +----------------------------------------> theta
```

#### 3. Particle in a Double-Well Potential
$$V(x) = -\frac{a}{2}x^2 + \frac{b}{4}x^4 \quad (a, b > 0)$$

- Extremal points: $\frac{dV}{dx} = -ax + bx^3 = 0 \implies x = 0$ (unstable max), $x = \pm \sqrt{a/b}$ (stable mins).
- **Fixed Points:**
  - $(\pm \sqrt{a/b}, 0)$: Centers (Stable equilibrium).
  - $(0,0)$: Saddle point (Unstable equilibrium).
- **Phase Portrait Structure:**
  - For $E < 0$: Two disconnected closed loops centered at $(\pm \sqrt{a/b}, 0)$.
  - For $E = 0$: Figure-eight ($\infty$) shaped separatrix passing through $(0,0)$.
  - For $E > 0$: Single large closed trajectory surrounding all fixed points.

---

### 2.3 Stability Analysis & Fixed Points

Consider a autonomous 2D non-linear dynamical system:

$$\dot{x} = f(x, y)$$
$$\dot{y} = g(x, y)$$

#### Fixed Points (Equilibrium Points)
Points $(x_0, y_0)$ where velocity vectors vanish simultaneously:
$$f(x_0, y_0) = 0 \quad \text{and} \quad g(x_0, y_0) = 0$$

#### Linearization Strategy
Perturb system around fixed point: $x(t) = x_0 + \delta x(t)$, $y(t) = y_0 + \delta y(t)$.

$$\begin{pmatrix} \dot{\delta x} \\ \dot{\delta y} \end{pmatrix} = \mathbf{J} \begin{pmatrix} \delta x \\ \delta y \end{pmatrix}$$

Where $\mathbf{J}$ is the **Jacobian Matrix** evaluated at $(x_0, y_0)$:

$$\mathbf{J} = \begin{pmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{pmatrix}_{(x_0, y_0)}$$

Eigenvalues $\lambda$ are found from characteristic equation:

$$\det(\mathbf{J} - \lambda \mathbf{I}) = 0 \implies \lambda^2 - \tau \lambda + \Delta = 0$$

Where:
- $\tau = \text{Tr}(\mathbf{J}) = \lambda_1 + \lambda_2$ (Trace)
- $\Delta = \det(\mathbf{J}) = \lambda_1 \lambda_2$ (Determinant)

Eigenvalue solutions:
$$\lambda_{1,2} = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}$$

#### Classification Scheme of Fixed Points

```
                 Delta (Determinant)
                    ^
                    |      SINK / SOURCE FOCUS
     STABLE         |      (Complex eigenvalues)
     NODE           |              /
      \             |             /
       \  \tau^2 - 4\Delta = 0   /
        \   |       |           /
  ---------+--------+----------+---------> \tau (Trace)
        /   |       |           \
       /    | CENTER (\tau = 0)  \
      /     |                     \   UNSTABLE
            |   SADDLE POINT       \   NODE
            |   (\Delta < 0)
```

| Determinant ($\Delta$) | Trace ($\tau$) | Discriminant ($\tau^2 - 4\Delta$) | Eigenvalues ($\lambda_1, \lambda_2$) | Fixed Point Type | Stability |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $\Delta < 0$ | Any | $> 0$ | Real, opposite signs | **Saddle Point** | Unstable |
| $\Delta > 0$ | $\tau^2 > 4\Delta$ | $> 0$ | Real, same sign | **Node** | Stable if $\tau < 0$, Unstable if $\tau > 0$ |
| $\Delta > 0$ | $\tau^2 < 4\Delta$ | $< 0$ | Complex conjugate | **Spiral / Focus** | Stable if $\tau < 0$, Unstable if $\tau > 0$ |
| $\Delta > 0$ | $\tau = 0$ | $< 0$ | Purely imaginary | **Center / Elliptic** | Marginally Stable |

---

### 2.4 Liouville’s Theorem

The density of system points $\rho(q, p, t)$ in phase space behaves like an incompressible fluid.

$$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \sum_{i=1}^f \left( \frac{\partial \rho}{\partial q_i}\dot{q}_i + \frac{\partial \rho}{\partial p_i}\dot{p}_i \right) = 0$$

#### Proof:
By continuity equation in phase space:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}_{phase}) = 0$$

$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^f \left[ \frac{\partial}{\partial q_i}(\rho \dot{q}_i) + \frac{\partial}{\partial p_i}(\rho \dot{p}_i) \right] = 0$$

$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^f \left( \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} \right) + \rho \sum_{i=1}^f \left( \frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} \right) = 0$$

Using Hamilton's equations $\dot{q}_i = \frac{\partial H}{\partial p_i}$ and $\dot{p}_i = -\frac{\partial H}{\partial q_i}$:

$$\frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} = \frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i \partial q_i} = 0$$

Thus:
$$\frac{d\rho}{dt} = 0$$

> **Physical Significance:** Phase space volume $V = \int dq dp$ occupied by an ensemble of Hamiltonian systems is conserved in time. (Phase volume cannot shrink or expand for conservative systems).

---

## MODULE 3: CENTRAL FORCE MOTION & TWO-BODY PROBLEM

### 3.1 Reduction of Two-Body Problem to Equivalent One-Body Problem

Consider two masses $m_1$ and $m_2$ interacting via central potential $V(|\vec{r}_1 - \vec{r}_2|)$.

#### Transformations
Center of Mass (CM) coordinate $\vec{R}$ and Relative coordinate $\vec{r}$:

$$\vec{R} = \frac{m_1 \vec{r}_1 + m_2 \vec{r}_2}{m_1 + m_2}, \quad \vec{r} = \vec{r}_1 - \vec{r}_2$$

Expressing individual coordinates:

$$\vec{r}_1 = \vec{R} + \frac{m_2}{M}\vec{r}, \quad \vec{r}_2 = \vec{R} - \frac{m_1}{M}\vec{r} \quad (M = m_1 + m_2)$$

Total Kinetic Energy:

$$T = \frac{1}{2}m_1 \dot{\vec{r}}_1^2 + \frac{1}{2}m_2 \dot{\vec{r}}_2^2 = \frac{1}{2}M\dot{\vec{R}}^2 + \frac{1}{2}\mu\dot{\vec{r}}^2$$

where **Reduced Mass** $\mu$ is defined as:

$$\mu = \frac{m_1 m_2}{m_1 + m_2}$$

The Lagrangian decouples:
$$L = L_{\text{CM}}(\vec{R}, \dot{\vec{R}}) + L_{\text{rel}}(\vec{r}, \dot{\vec{r}}) = \frac{1}{2}M\dot{\vec{R}}^2 + \left[ \frac{1}{2}\mu\dot{\vec{r}}^2 - V(r) \right]$$

The relative vector $\vec{r}(t)$ behaves as a single fictitious mass $\mu$ moving around a fixed center of force at the origin.

---

### 3.2 Constants of Motion in Central Force Fields

1. **Angular Momentum Conservation:**
   $$\vec{\tau} = \vec{r} \times \vec{F}(r) = \vec{r} \times \left(F(r)\hat{r}\right) = 0 \implies \vec{L} = \vec{r} \times \vec{p} = \text{constant vector}$$
   Since $\vec{r} \cdot \vec{L} = 0$, motion is strictly confined to a 2D plane perpendicular to $\vec{L}$.
2. **Kepler’s Second Law (Areal Velocity):**
   In plane polar coordinates $(r, \theta)$:
   $$dA = \frac{1}{2} r^2 d\theta \implies \frac{dA}{dt} = \frac{1}{2}r^2 \dot{\theta} = \frac{L}{2\mu} = \text{constant}$$
3. **Conservation of Total Energy:**
   $$E = T + V = \frac{1}{2}\mu \dot{r}^2 + \frac{1}{2}\mu r^2 \dot{\theta}^2 + V(r) = \text{constant}$$

---

### 3.3 Radial Equation of Motion and Effective Potential

Since $L = \mu r^2 \dot{\theta} \implies \dot{\theta} = \frac{L}{\mu r^2}$, substitute into $E$:

$$E = \frac{1}{2}\mu \dot{r}^2 + V_{\text{eff}}(r)$$

where **Effective Potential Energy** $V_{\text{eff}}(r)$ is:

$$V_{\text{eff}}(r) = V(r) + \frac{L^2}{2\mu r^2}$$

```
    V_eff(r)
       ^
       |      Centrifugal Barrier (+L^2 / 2\mu r^2)
       |        \     /
       |         \   /   V_eff(r)
  -----+----------\-/--------------------> r
       |           \____ E < 0 (Bound orbit: r_min to r_max)
       |           
       |       Attraction V(r) = -k/r
```

- **Centrifugal Barrier ($\frac{L^2}{2\mu r^2}$):** Prevents the particle from reaching origin $r \to 0$ for non-zero angular momentum.
- **Turning Points ($r_{\text{min}}, r_{\text{max}}$):** Roots of equation $E - V_{\text{eff}}(r) = 0$.
  - If $E > 0$: Unbounded orbit ($r_{\text{max}} \to \infty$).
  - If $E < 0$: Bounded orbit ($r_{\text{min}} \le r \le r_{\text{max}}$).

#### Differential Orbit Equation
Change variable $u = 1/r$, $\frac{d}{dt} = \frac{L}{\mu} u^2 \frac{d}{d\theta}$:

$$\frac{d^2u}{d\theta^2} + u = -\frac{\mu}{L^2 u^2} F\left(\frac{1}{u}\right)$$

---

### 3.4 Inverse-Square Law: Kepler's Problem ($V(r) = -k/r$)

For gravitational field ($k = G m_1 m_2$) or Coulomb attraction ($k = \frac{q_1 q_2}{4\pi\varepsilon_0}$):

$$F\left(\frac{1}{u}\right) = -k u^2$$

Substituting into differential equation:

$$\frac{d^2u}{d\theta^2} + u = \frac{\mu k}{L^2}$$

General Solution:

$$u(\theta) = \frac{\mu k}{L^2} \left( 1 + e \cos(\theta - \theta_0) \right)$$

In standard conic section form $r(\theta) = \frac{p}{1 + e\cos\theta}$:

- **Semi-latus Rectum:** $p = \frac{L^2}{\mu k}$
- **Eccentricity:** $e = \sqrt{1 + \frac{2 E L^2}{\mu k^2}}$

#### Orbit Classification Summary

| Energy ($E$) | Eccentricity ($e$) | Conic Geometry | Physical State |
| :--- | :--- | :--- | :--- |
| $E = E_{\text{min}} = -\frac{\mu k^2}{2L^2}$ | $e = 0$ | Circle | Bound Orbit |
| $-\frac{\mu k^2}{2L^2} < E < 0$ | $0 < e < 1$ | Ellipse | Bound Orbit |
| $E = 0$ | $e = 1$ | Parabola | Unbound (Escaping) |
| $E > 0$ | $e > 1$ | Hyperbola | Unbound (Scattering) |

#### Elliptic Orbit Relations
- Semi-major axis: $a = \frac{p}{1-e^2} = \frac{k}{2|E|}$
- Semi-minor axis: $b = a\sqrt{1-e^2} = \frac{L}{\sqrt{2\mu |E|}}$
- Periapsis: $r_{\text{min}} = a(1-e)$
- Apoapsis: $r_{\text{max}} = a(1+e)$

#### Derivation of Kepler’s Third Law
Total area of ellipse $A = \pi a b$. Since $\frac{dA}{dt} = \frac{L}{2\mu}$:

$$T = \frac{A}{dA/dt} = \frac{\pi a b}{L / 2\mu} = \frac{2\pi \mu a b}{L}$$

Squaring both sides:
$$T^2 = \frac{4\pi^2 \mu^2 a^2 b^2}{L^2} = \frac{4\pi^2 \mu^2 a^2 [a^2(1-e^2)]}{L^2}$$

Using $p = a(1-e^2) = \frac{L^2}{\mu k} \implies \frac{\mu(1-e^2)}{L^2} = \frac{1}{a k}$:

$$T^2 = \left(\frac{4\pi^2 \mu}{k}\right) a^3$$

For gravity where $k = G M \mu$:
$$T^2 = \frac{4\pi^2}{GM} a^3$$

---

### 3.5 Laplace-Runge-Lenz (LRL) Vector

In $1/r$ potentials, there exists an additional conserved vector quantity:

$$\vec{A} = \vec{p} \times \vec{L} - \mu k \hat{r}$$

#### Proof of Conservation ($\frac{d\vec{A}}{dt} = 0$)
$$\frac{d\vec{A}}{dt} = \dot{\vec{p}} \times \vec{L} + \vec{p} \times \dot{\vec{L}} - \mu k \dot{\hat{r}}$$

Since $\dot{\vec{L}} = 0$ and $\dot{\vec{p}} = -\frac{k}{r^2}\hat{r}$:

$$\frac{d\vec{A}}{dt} = \left(-\frac{k}{r^2}\hat{r}\right) \times (\mu \vec{r} \times \dot{\vec{r}}) - \mu k \left( \frac{\dot{\vec{r}}}{r} - \frac{\vec{r}(\vec{r}\cdot\dot{\vec{r}})}{r^3} \right)$$

Using vector triple product $\hat{r} \times (\vec{r} \times \dot{\vec{r}}) = \vec{r}(\hat{r}\cdot\dot{\vec{r}}) - \dot{\vec{r}}(\hat{r}\cdot\vec{r}) = \vec{r}\dot{r} - \dot{\vec{r}}r$:

$$\frac{d\vec{A}}{dt} = -\frac{\mu k}{r^2} (\vec{r}\dot{r} - \dot{\vec{r}}r) - \mu k \left( \frac{\dot{\vec{r}}}{r} - \frac{\vec{r}\dot{r}}{r^2} \right) = 0$$

> **Physical Significance:** $\vec{A}$ points directly along the major axis towards perihelion. Its conservation guarantees that elliptic orbits **do not precess** in a pure $1/r$ force field ($SO(4)$ symmetry).

---

### 3.6 Virial Theorem

For a stable bound system of particles interacting through power-law potential $V(r) = a r^n$:

$$\langle T \rangle = \frac{n}{2} \langle V \rangle$$

- **Inverse-square force / Gravitational field ($n = -1$):**
  $$\langle T \rangle = -\frac{1}{2} \langle V \rangle \implies E = \langle T \rangle + \langle V \rangle = -\langle T \rangle = \frac{1}{2}\langle V \rangle$$
- **Harmonic Oscillator ($n = 2$):**
  $$\langle T \rangle = \langle V \rangle$$

---

## MODULE 4: TWO-BODY COLLISIONS & SCATTERING THEORY

### 4.1 Kinematics in Laboratory (LAB) vs Centre of Mass (CM) Frames

Consider incident particle $m_1$ with velocity $v_0$ striking stationary target mass $m_2$ ($v_2 = 0$).

```
LAB FRAME                                 CM FRAME
  m1 (v0)      m2 (at rest)                  m1 (u1) -----> <----- m2 (u2)
    o--------->  O                             o                O
                                                  \          /
     \ theta_lab                                   \ Theta_cm /
      \----> m1                                     v        v
```

#### Velocity Relationships
Center of Mass velocity in LAB frame:
$$\vec{V}_{\text{cm}} = \frac{m_1 \vec{v}_0}{m_1 + m_2}$$

Initial velocities relative to CM frame:
$$\vec{u}_1 = \vec{v}_0 - \vec{V}_{\text{cm}} = \frac{m_2}{m_1 + m_2}\vec{v}_0$$
$$\vec{u}_2 = 0 - \vec{V}_{\text{cm}} = -\frac{m_1}{m_1 + m_2}\vec{v}_0$$

Total linear momentum in CM frame is identically zero: $\vec{p}_{\text{cm}}^{\text{total}} = m_1 \vec{u}_1 + m_2 \vec{u}_2 = 0$.

For **elastic collisions**, speeds in CM frame remain unchanged after scattering:
$$u_1' = u_1, \quad u_2' = u_2$$

#### Angle Transformation Formula
Let $\theta$ be scattering angle in LAB frame and $\Theta$ be scattering angle in CM frame:

$$v_{1x}' = u_1' \cos\Theta + V_{\text{cm}} = u_1 \cos\Theta + V_{\text{cm}}$$
$$v_{1y}' = u_1' \sin\Theta = u_1 \sin\Theta$$

$$\tan\theta = \frac{v_{1y}'}{v_{1x}'} = \frac{u_1 \sin\Theta}{u_1 \cos\Theta + V_{\text{cm}}} = \frac{\sin\Theta}{\cos\Theta + \frac{V_{\text{cm}}}{u_1}}$$

Since $\frac{V_{\text{cm}}}{u_1} = \frac{m_1}{m_2}$:

$$\tan\theta = \frac{\sin\Theta}{\cos\Theta + \frac{m_1}{m_2}}$$

##### Special Cases:
1. **Target much heavier ($m_2 \gg m_1 \implies m_1/m_2 \to 0$):**
   $$\tan\theta \approx \tan\Theta \implies \theta \approx \Theta \quad \text{(LAB and CM frames coincide)}$$
2. **Equal Masses ($m_1 = m_2 \implies m_1/m_2 = 1$):**
   $$\tan\theta = \frac{\sin\Theta}{\cos\Theta + 1} = \frac{2\sin(\Theta/2)\cos(\Theta/2)}{2\cos^2(\Theta/2)} = \tan\left(\frac{\Theta}{2}\right) \implies \theta = \frac{\Theta}{2}$$
   Maximum LAB scattering angle $\theta_{\text{max}} = \frac{\pi}{2} = 90^\circ$. Particles always scatter at right angles to each other in LAB frame.

---

### 4.2 Differential and Total Scattering Cross-Section

#### Definitions
- **Impact Parameter ($b$):** Perpendicular distance of approach of incident particle to scattering center.
- **Solid Angle ($d\Omega$):** $d\Omega = \sin\theta d\theta d\phi$.
- **Differential Cross-Section ($\frac{d\sigma}{d\Omega}$):** Ratio of number of particles scattered per unit time into solid angle $d\Omega$ to incident flux $I_0$.

$$\frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta} \left| \frac{db}{d\theta} \right|$$

- **Total Cross-Section ($\sigma_{\text{tot}}$):**
  $$\sigma_{\text{tot}} = \int \frac{d\sigma}{d\Omega} d\Omega = \int_0^{2\pi} d\phi \int_0^\pi \frac{d\sigma}{d\Omega} \sin\theta d\theta$$

---

### 4.3 Classic Examples

#### 1. Hard Sphere Scattering
A hard rigid sphere of radius $R$.

```
               Scatterer
               /-------\
              /    R    \
    =========/===========\=============> Axis
   b        /|           |\
  --------->*|           | \
             \           /  \ theta
              \---------/    v
```

Geometric relation: $b = R \sin\alpha$.
Reflection physics: $\theta = \pi - 2\alpha \implies \alpha = \frac{\pi - \theta}{2}$.

$$b = R \sin\left(\frac{\pi - \theta}{2}\right) = R \cos\left(\frac{\theta}{2}\right)$$

Derivative:
$$\left|\frac{db}{d\theta}\right| = \frac{R}{2}\sin\left(\frac{\theta}{2}\right)$$

Differential cross-section:
$$\frac{d\sigma}{d\Omega} = \frac{R \cos(\theta/2)}{\sin\theta} \left( \frac{R}{2}\sin(\theta/2) \right) = \frac{R^2 \cos(\theta/2) \sin(\theta/2)}{2 (2\sin(\theta/2)\cos(\theta/2))} = \frac{R^2}{4}$$

> **Key Result:** Scattering is completely **isotropic** in CM frame.
> Total Cross-Section:
> $$\sigma_{\text{tot}} = \int \frac{R^2}{4} d\Omega = \frac{R^2}{4} (4\pi) = \pi R^2 \quad \text{(Geometric cross-sectional area)}$$

#### 2. Rutherford Scattering (Coulomb Field $V(r) = \frac{k}{r}$)

Impact parameter equation derived from conservation of energy and angular momentum:

$$b = \frac{k}{2E} \cot\left(\frac{\Theta}{2}\right)$$

Differentiating:
$$\left| \frac{db}{d\Theta} \right| = \frac{k}{4E} \csc^2\left(\frac{\Theta}{2}\right)$$

Differential Cross Section:
$$\frac{d\sigma}{d\Omega} = \frac{\frac{k}{2E}\cot(\Theta/2)}{\sin\Theta} \left( \frac{k}{4E} \csc^2(\Theta/2) \right) = \frac{\left(\frac{k}{2E}\right)^2 \frac{\cos(\Theta/2)}{\sin(\Theta/2)}}{2\sin(\Theta/2)\cos(\Theta/2)} \csc^2\left(\frac{\Theta}{2}\right)$$

$$\frac{d\sigma}{d\Omega} = \left(\frac{k}{4E}\right)^2 \frac{1}{\sin^4\left(\frac{\Theta}{2}\right)}$$

> **Key Result:** $\frac{d\sigma}{d\Omega} \propto \frac{1}{E^2 \sin^4(\Theta/2)}$.
> Total cross-section $\sigma_{\text{tot}} = \infty$ due to infinite range of Coulomb potential.

---

## MODULE 5: RIGID BODY DYNAMICS & MOMENT OF INERTIA TENSOR

### 5.1 Degrees of Freedom & Angular Velocity
A rigid body is a system of particles in which inter-particle distances remain constant ($|\vec{r}_i - \vec{r}_j| = c_{ij}$).
- **Degrees of Freedom:** 6 for a general 3D rigid body (3 translational + 3 rotational).

---

### 5.2 Inertia Tensor Formulation

Linear velocity of particle $i$: $\vec{v}_i = \vec{v}_{\text{cm}} + \vec{\omega} \times \vec{r}_i$.
Angular momentum of system relative to origin:

$$\vec{L} = \sum_i m_i (\vec{r}_i \times \vec{v}_i) = \sum_i m_i \left[ \vec{r}_i \times (\vec{\omega} \times \vec{r}_i) \right]$$

Using vector triple product $\vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}(\vec{A}\cdot\vec{C}) - \vec{C}(\vec{A}\cdot\vec{B})$:

$$\vec{L} = \sum_i m_i \left[ \vec{\omega} r_i^2 - \vec{r}_i (\vec{r}_i \cdot \vec{\omega}) \right]$$

In component form ($L_j = \sum_k I_{jk} \omega_k$):

$$\mathbf{I} = \begin{pmatrix} I_{xx} & I_{xy} & I_{xz} \\ I_{yx} & I_{yy} & I_{yz} \\ I_{zx} & I_{zy} & I_{zz} \end{pmatrix}$$

#### Continuous Integral Formulas
- **Diagonal Elements (Moment of Inertia):**
  $$I_{xx} = \int \rho(\vec{r}) (y^2 + z^2) dV, \quad I_{yy} = \int \rho(\vec{r}) (x^2 + z^2) dV, \quad I_{zz} = \int \rho(\vec{r}) (x^2 + y^2) dV$$
- **Off-Diagonal Elements (Product of Inertia):**
  $$I_{xy} = I_{yx} = -\int \rho(\vec{r}) x y dV$$
  $$I_{xz} = I_{zx} = -\int \rho(\vec{r}) x z dV$$
  $$I_{yz} = I_{zy} = -\int \rho(\vec{r}) y z dV$$

In index notation:

$$I_{jk} = \int \rho(\vec{r}) \left( r^2 \delta_{jk} - x_j x_k \right) dV$$

Properties: $\mathbf{I}$ is a real symmetric $3 \times 3$ matrix ($I_{jk} = I_{kj}$).

---

### 5.3 Principal Axes and Principal Moments of Inertia

Because $\mathbf{I}$ is symmetric, it can always be diagonalized by rotating to a specific body-fixed coordinate frame known as the **Principal Axes Frame**.

$$\mathbf{I}_{\text{diag}} = \begin{pmatrix} I_1 & 0 & 0 \\ 0 & I_2 & 0 \\ 0 & 0 & I_3 \end{pmatrix}$$

Diagonal values $I_1, I_2, I_3$ are **Principal Moments of Inertia**, found by solving secular eigenvalue equation:

$$\det(\mathbf{I} - I \mathbf{1}) = 0$$

#### Classification of Rigid Bodies

1. **Spherical Top:** $I_1 = I_2 = I_3$ (e.g., Uniform solid sphere, regular cube about center). Any axis is a principal axis.
2. **Symmetrical Top:** $I_1 = I_2 \neq I_3$
   - *Prolate:* $I_1 = I_2 > I_3$ (Cigar shaped, e.g., $N_2$ molecule).
   - *Oblate:* $I_1 = I_2 < I_3$ (Frisbee/pancake shaped, e.g., Benzene ring).
3. **Asymmetrical Top:** $I_1 \neq I_2 \neq I_3$ (e.g., Water molecule, irregular body).
4. **Rotor / Planar Object:** $I_3 = I_1 + I_2$ (Perpendicular Axis Theorem $I_z = I_x + I_y$).

---

### 5.4 Rotational Kinetic Energy

$$T_{\text{rot}} = \frac{1}{2} \vec{\omega}^T \mathbf{I} \vec{\omega} = \frac{1}{2} \sum_{j} \sum_{k} I_{jk} \omega_j \omega_k$$

In Principal Axes Frame:

$$T_{\text{rot}} = \frac{1}{2} I_1 \omega_1^2 + \frac{1}{2} I_2 \omega_2^2 + \frac{1}{2} I_3 \omega_3^2$$

---

### 5.5 Euler’s Equations of Motion

In body-fixed reference frame:

$$\left(\frac{d\vec{L}}{dt}\right)_{\text{space}} = \left(\frac{d\vec{L}}{dt}\right)_{\text{body}} + \vec{\omega} \times \vec{L} = \vec{N}$$

Component expansion along principal axes yields **Euler’s Equations**:

$$I_1 \dot{\omega}_1 - (I_2 - I_3)\omega_2 \omega_3 = N_1$$
$$I_2 \dot{\omega}_2 - (I_3 - I_1)\omega_3 \omega_1 = N_2$$
$$I_3 \dot{\omega}_3 - (I_1 - I_2)\omega_1 \omega_2 = N_3$$

#### Torque-Free Motion of Symmetric Top ($N_1 = N_2 = N_3 = 0, I_1 = I_2$)
Equations become:
1. $I_1 \dot{\omega}_1 = (I_1 - I_3)\omega_2 \omega_3$
2. $I_1 \dot{\omega}_2 = -(I_1 - I_3)\omega_1 \omega_3$
3. $I_3 \dot{\omega}_3 = 0 \implies \omega_3 = \text{constant}$

Defining precession frequency $\Omega_p = \frac{I_1 - I_3}{I_1} \omega_3$:

$$\dot{\omega}_1 = \Omega_p \omega_2, \quad \dot{\omega}_2 = -\Omega_p \omega_1$$

Differentiating again: $\ddot{\omega}_1 + \Omega_p^2 \omega_1 = 0$.
Solutions:

$$\omega_1(t) = \omega_\perp \cos(\Omega_p t)$$
$$\omega_2(t) = -\omega_\perp \sin(\Omega_p t)$$

> **Physical Significance:** The vector $\vec{\omega}$ precesses in a cone around the body symmetry axis ($z_3$) at angular rate $\Omega_p$.

---

## MODULE 6: LAGRANGIAN AND HAMILTONIAN FORMALISM & VARIATIONAL PRINCIPLE

### 6.1 Constraints and Generalized Coordinates

- **Holonomic Constraints:** Relations expressible as algebraic equations involving coordinates and time only:
  $$f(\vec{r}_1, \vec{r}_2, \dots, \vec{r}_N, t) = 0$$
- **Non-Holonomic Constraints:** Differential or inequality relations not integrable into coordinate equations (e.g., rolling without slipping, particle confined in sphere $r \le R$).
- **Scleronomic:** Explicitly independent of time ($\partial f/\partial t = 0$).
- **Rheonomic:** Explicitly dependent on time.

#### Degrees of Freedom (DoF)
For $N$ particles subject to $k$ independent holonomic constraints:
$$f = 3N - k$$
We choose $f$ independent **Generalized Coordinates** $q_1, q_2, \dots, q_f$.

---

### 6.2 D'Alembert's Principle and Lagrange's Equations

Virtual displacement $\delta \vec{r}_i$ is an infinitesimal displacement consistent with system constraints at fixed time ($dt = 0$).
Since virtual work done by constraint forces $\vec{f}_i^c$ vanishes ($\sum \vec{f}_i^c \cdot \delta \vec{r}_i = 0$):

$$\sum_{i=1}^N \left( \vec{F}_i^{(a)} - \dot{\vec{p}}_i \right) \cdot \delta \vec{r}_i = 0 \quad \text{(D'Alembert's Principle)}$$

Transforming to generalized coordinates yields **Euler-Lagrange Equations**:

$$\frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q}_j} \right) - \frac{\partial L}{\partial q_j} = 0 \quad (j = 1, 2, \dots, f)$$

where Lagrangian $L = T - V$.

---

### 6.3 Hamilton’s Principle (Variational Principle)

The actual path traversed by a conservative dynamical system between fixed initial configuration $q(t_1)$ and final configuration $q(t_2)$ extremizes the **Action Integral** $S$:

$$\delta S = \delta \int_{t_1}^{t_2} L(q_j, \dot{q}_j, t) dt = 0$$

#### Derivation of Euler-Lagrange Equation from Action Optimization
Let $q_j(t, \alpha) = q_j(t, 0) + \alpha \eta_j(t)$ where variations vanish at endpoints $\eta_j(t_1) = \eta_j(t_2) = 0$.

$$\frac{dS}{d\alpha} = \int_{t_1}^{t_2} \sum_j \left( \frac{\partial L}{\partial q_j}\frac{\partial q_j}{\partial \alpha} + \frac{\partial L}{\partial \dot{q}_j}\frac{\partial \dot{q}_j}{\partial \alpha} \right) dt = 0$$

Since $\frac{\partial q_j}{\partial \alpha} = \eta_j(t)$ and $\frac{\partial \dot{q}_j}{\partial \alpha} = \dot{\eta}_j(t)$:

$$\int_{t_1}^{t_2} \sum_j \left( \frac{\partial L}{\partial q_j}\eta_j + \frac{\partial L}{\partial \dot{q}_j}\dot{\eta}_j \right) dt = 0$$

Integrating the second term by parts:

$$\int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}_j}\dot{\eta}_j dt = \left[ \frac{\partial L}{\partial \dot{q}_j}\eta_j \right]_{t_1}^{t_2} - \int_{t_1}^{t_2} \frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q}_j} \right)\eta_j dt$$

The surface term vanishes because $\eta_j(t_1) = \eta_j(t_2) = 0$. Thus:

$$\int_{t_1}^{t_2} \sum_j \left[ \frac{\partial L}{\partial q_j} - \frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q}_j} \right) \right] \eta_j(t) dt = 0$$

Since variations $\eta_j(t)$ are arbitrary, the integrand term in brackets must vanish identically for each $j$, proving Euler-Lagrange equations.

---

### 6.4 Special Lagrangians & Gauge Invariance

1. **Gauge Invariance:** If $L' = L + \frac{dF(q_1, \dots, q_f, t)}{dt}$ where $F$ is any differentiable function, both $L$ and $L'$ produce identical equations of motion.
2. **Electromagnetic Lagrangian:** For particle of charge $q$ in field $(\phi, \vec{A})$:
   $$L = \frac{1}{2}m\vec{v}^2 - q\phi + q(\vec{v} \cdot \vec{A})$$
   Generalized momentum:
   $$\vec{p} = \frac{\partial L}{\partial \vec{v}} = m\vec{v} + q\vec{A}$$

---

### 6.5 Cyclic Coordinates, Conservation Laws & Jacobi Integral

- **Generalized Momentum:** $p_j = \frac{\partial L}{\partial \dot{q}_j}$.
- **Cyclic (Ignorable) Coordinate:** If coordinate $q_k$ does not explicitly appear in Lagrangian ($\frac{\partial L}{\partial q_k} = 0$):
  $$\frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q}_k} \right) = 0 \implies p_k = \text{constant}$$

> **Noether's Theorem:** Every continuous symmetry of the Lagrangian leads to a conserved quantity.
> - Space Translation Symmetry $\implies$ Conservation of Linear Momentum.
> - Rotational Symmetry $\implies$ Conservation of Angular Momentum.
> - Time Translation Symmetry $\implies$ Conservation of Energy.

#### Jacobi Energy Integral ($h$)
$$h = \sum_{j=1}^f \dot{q}_j \frac{\partial L}{\partial \dot{q}_j} - L = \sum_{j=1}^f p_j \dot{q}_j - L$$

- If $L$ is not explicitly dependent on time ($\frac{\partial L}{\partial t} = 0$), then $\frac{dh}{dt} = 0 \implies h = \text{constant}$.
- If spatial transformations are scleronomic (time-independent) and potential $V$ is velocity-independent, kinetic energy is quadratic ($T = T_2$), and:
  $$h = T + V = E \quad (\text{Total Mechanical Energy})$$

---

### 6.6 Hamiltonian Formalism & Canonical Equations

The **Hamiltonian** $H(q, p, t)$ is obtained via Legendre transformation of $L(q, \dot{q}, t)$:

$$H(q_1, \dots, q_f, p_1, \dots, p_f, t) = \sum_{j=1}^f p_j \dot{q}_j - L(q, \dot{q}, t)$$

Taking total differential $dH$:

$$dH = \sum_j \left( p_j d\dot{q}_j + \dot{q}_j dp_j - \frac{\partial L}{\partial q_j} dq_j - \frac{\partial L}{\partial \dot{q}_j} d\dot{q}_j \right) - \frac{\partial L}{\partial t} dt$$

Since $p_j = \frac{\partial L}{\partial \dot{q}_j}$ and $\dot{p}_j = \frac{\partial L}{\partial q_j}$:

$$dH = \sum_j \left( \dot{q}_j dp_j - \dot{p}_j dq_j \right) - \frac{\partial L}{\partial t} dt$$

Comparing with $dH = \sum_j \left( \frac{\partial H}{\partial q_j} dq_j + \frac{\partial H}{\partial p_j} dp_j \right) + \frac{\partial H}{\partial t} dt$ yields **Hamilton's Canonical Equations**:

$$\dot{q}_j = \frac{\partial H}{\partial p_j}, \quad \dot{p}_j = -\frac{\partial H}{\partial q_j}, \quad \frac{\partial H}{\partial t} = -\frac{\partial L}{\partial t}$$

---

### 6.7 Canonical Transformations & Generating Functions

A transformation $(q, p) \to (Q, P)$ is **Canonical** if it preserves the form of Hamilton's equations:

$$\dot{Q}_j = \frac{\partial K}{\partial P_j}, \quad \dot{P}_j = -\frac{\partial K}{\partial Q_j}$$

This requires $\sum p_j dq_j - H dt = \sum P_j dQ_j - K dt + dF$.

#### Four Basic Types of Generating Functions

| Generating Function | Explicit Differential Relation | Derivative Canonical Relations |
| :--- | :--- | :--- |
| $F_1(q, Q, t)$ | $dF_1 = p dq - P dQ + (K-H)dt$ | $p = \frac{\partial F_1}{\partial q}, \quad P = -\frac{\partial F_1}{\partial Q}$ |
| $F_2(q, P, t)$ | $dF_2 = p dq + Q dP + (K-H)dt$ | $p = \frac{\partial F_2}{\partial q}, \quad Q = \frac{\partial F_2}{\partial P}$ |
| $F_3(p, Q, t)$ | $dF_3 = -q dp - P dQ + (K-H)dt$ | $q = -\frac{\partial F_3}{\partial p}, \quad P = -\frac{\partial F_3}{\partial Q}$ |
| $F_4(p, P, t)$ | $dF_4 = -q dp + Q dP + (K-H)dt$ | $q = -\frac{\partial F_4}{\partial p}, \quad Q = \frac{\partial F_4}{\partial P}$ |

---

### 6.8 Poisson Brackets

For dynamic functions $A(q, p, t)$ and $B(q, p, t)$:

$$\{A, B\}_{q,p} = \sum_{j=1}^f \left( \frac{\partial A}{\partial q_j} \frac{\partial B}{\partial p_j} - \frac{\partial A}{\partial p_j} \frac{\partial B}{\partial q_j} \right)$$

#### Fundamental Poisson Brackets
$$\{q_j, q_k\} = 0, \quad \{p_j, p_k\} = 0, \quad \{q_j, p_k\} = \delta_{jk}$$

#### Properties
1. Anti-symmetry: $\{A, B\} = -\{B, A\}$
2. Linearity: $\{c_1 A + c_2 B, C\} = c_1\{A, C\} + c_2\{B, C\}$
3. Product Rule: $\{AB, C\} = A\{B, C\} + \{A, C\}B$
4. Jacobi Identity: $\{A, \{B, C\}\} + \{B, \{C, A\}\} + \{C, \{A, B\}\} = 0$

#### Equation of Motion in Poisson Bracket Form
$$\frac{dA}{dt} = \{A, H\} + \frac{\partial A}{\partial t}$$

- **Constant of Motion Criterion:** $A$ is conserved ($\frac{dA}{dt} = 0$) if and only if $\{A, H\} + \frac{\partial A}{\partial t} = 0$.
- **Poisson's Theorem:** If $u$ and $v$ are two constants of motion, their Poisson bracket $\{u, v\}$ is also a constant of motion.

---

## MODULE 7: PERIODIC MOTION: SMALL OSCILLATIONS & NORMAL MODES

### 7.1 Potential Energy Expansion Around Stable Equilibrium
Consider a 1D conservative system with potential $V(q)$ having equilibrium at $q = q_0$ where $\left.\frac{dV}{dq}\right|_{q_0} = 0$.

Taylor Expansion with $\eta = q - q_0$:

$$V(q) = V(q_0) + \left.\frac{dV}{dq}\right|_{q_0} \eta + \frac{1}{2}\left.\frac{d^2V}{dq^2}\right|_{q_0} \eta^2 + \frac{1}{6}\left.\frac{d^3V}{dq^3}\right|_{q_0} \eta^3 + \dots$$

Shift zero of potential energy ($V(q_0) = 0$). Setting $k = \left.\frac{d^2V}{dq^2}\right|_{q_0}$:
- **Stable Equilibrium:** $k > 0$
- **Unstable Equilibrium:** $k < 0$
- **Neutral Equilibrium:** $k = 0$

For small amplitude ($\eta \to 0$), quadratic term dominates:

$$V(\eta) \approx \frac{1}{2} k \eta^2$$

Frequency of small oscillations:

$$\omega = \sqrt{\frac{k}{m_{\text{eff}}}} = \sqrt{\frac{\left.\frac{d^2V}{dq^2}\right|_{q_0}}{m_{\text{eff}}}}$$

---

### 7.2 Coupled Oscillations in Multi-Degree Systems

Consider $f$ degrees of freedom system with stable equilibrium at $\vec{q}_0 = 0$. Let $\eta_i = q_i - q_{i0}$.

Kinetic Energy expansion:
$$T = \frac{1}{2} \sum_{i,j=1}^f M_{ij} \dot{\eta}_i \dot{\eta}_j \quad \text{where } M_{ij} = M_{ji}$$

Potential Energy expansion:
$$V = \frac{1}{2} \sum_{i,j=1}^f V_{ij} \eta_i \eta_j \quad \text{where } V_{ij} = \left.\frac{\partial^2 V}{\partial q_i \partial q_j}\right|_0 = V_{ji}$$

Lagrangian for small oscillations:
$$L = \frac{1}{2} \sum_{i,j=1}^f \left( M_{ij} \dot{\eta}_i \dot{\eta}_j - V_{ij} \eta_i \eta_j \right)$$

Equations of Motion:
$$\sum_{j=1}^f \left( M_{ij} \ddot{\eta}_j + V_{ij} \eta_j \right) = 0 \quad (i = 1, \dots, f)$$

Matrix Form:
$$\mathbf{M}\ddot{\vec{\eta}} + \mathbf{V}\vec{\eta} = 0$$

---

### 7.3 Secular (Characteristic) Equation & Normal Modes

Assuming harmonic solutions $\vec{\eta}(t) = \vec{a} e^{i\omega t}$:

$$(\mathbf{V} - \omega^2 \mathbf{M}) \vec{a} = 0$$

For non-trivial solutions ($\vec{a} \neq 0$), matrix determinant must vanish:

$$\det(\mathbf{V} - \omega^2 \mathbf{M}) = 0$$

Roots $\omega_1^2, \omega_2^2, \dots, \omega_f^2$ yield the **Normal Frequencies**.

#### Normal Coordinates ($Q_k$)
Linear combinations of physical coordinates $\eta_i$ that completely uncouple system equations of motion:

$$L = \frac{1}{2} \sum_{k=1}^f \left( \dot{Q}_k^2 - \omega_k^2 Q_k^2 \right)$$

Each $Q_k(t)$ executes independent harmonic motion at frequency $\omega_k$:

$$\ddot{Q}_k + \omega_k^2 Q_k = 0 \implies Q_k(t) = A_k \cos(\omega_k t + \delta_k)$$

---

### 7.4 Detailed Worked Example: Linear Triatomic Molecule (e.g., $CO_2$)

Consider three masses constrained to move along a straight line: central mass $M$ bounded by two equal outer masses $m$ connected via springs of spring constant $k$.

```
     m              M              m
    ---/\/\/\/\---[   ]---/\/\/\/\---
    x1   k          x2     k         x3
```

- Generalized coordinates: $x_1, x_2, x_3$.
- Displacement coordinates: $\eta_1, \eta_2, \eta_3$.

#### Energy Matrices

$$T = \frac{1}{2}m\dot{\eta}_1^2 + \frac{1}{2}M\dot{\eta}_2^2 + \frac{1}{2}m\dot{\eta}_3^2 \implies \mathbf{M} = \begin{pmatrix} m & 0 & 0 \\ 0 & M & 0 \\ 0 & 0 & m \end{pmatrix}$$

$$V = \frac{1}{2}k(\eta_2 - \eta_1)^2 + \frac{1}{2}k(\eta_3 - \eta_2)^2 = \frac{1}{2}k \left[ \eta_1^2 + 2\eta_2^2 + \eta_3^2 - 2\eta_1\eta_2 - 2\eta_2\eta_3 \right]$$

$$\mathbf{V} = \begin{pmatrix} k & -k & 0 \\ -k & 2k & -k \\ 0 & -k & k \end{pmatrix}$$

#### Secular Determinant

$$\det(\mathbf{V} - \omega^2 \mathbf{M}) = \begin{vmatrix} k - m\omega^2 & -k & 0 \\ -k & 2k - M\omega^2 & -k \\ 0 & -k & k - m\omega^2 \end{vmatrix} = 0$$

Expanding determinant along first row:

$$(k - m\omega^2) \left[ (2k - M\omega^2)(k - m\omega^2) - k^2 \right] - (-k) \left[ -k(k - m\omega^2) \right] = 0$$

$$(k - m\omega^2) \left[ (k - m\omega^2)(2k - M\omega^2) - 2k^2 \right] = 0$$

$$(k - m\omega^2) \omega^2 \left[ m M \omega^2 - k(2m + M) \right] = 0$$

#### Eigenvalue Roots and Physical Normal Modes

1. **Root 1 ($\omega_1 = 0$):**
   - **Mode:** Pure Rigid Translation of the whole molecule.
   - Eigenvector relation: $a_1 = a_2 = a_3$.
2. **Root 2 ($\omega_2 = \sqrt{\frac{k}{m}}$):**
   - **Mode:** Symmetric Stretching Mode.
   - Substituting $\omega_2^2 = k/m$ into matrix: $a_2 = 0, a_1 = -a_3$.
   - Central mass $M$ remains stationary while outer masses vibrate $180^\circ$ out of phase.
3. **Root 3 ($\omega_3 = \sqrt{\frac{k}{\mu}} = \sqrt{k\left(\frac{1}{m} + \frac{2}{M}\right)}$):**
   - **Mode:** Asymmetric Stretching Mode.
   - Substituting $\omega_3^2$: $a_1 = a_3, a_2 = -\frac{2m}{M}a_1$.
   - Outer masses move together in one direction while central mass moves in opposition to conserve center of mass.

---

## MODULE 8: SPECIAL THEORY OF RELATIVITY (STR)

### 8.1 Postulates of Special Relativity
1. **Principle of Relativity:** Laws of physics are identical in all inertial reference frames.
2. **Constancy of Speed of Light:** Speed of light in vacuum $c$ is invariant for all observers regardless of motion of source or observer.

---

### 8.2 Lorentz Transformations

Consider frame $S'$ moving with speed $v$ along positive $x$-axis of inertial frame $S$.

$$\gamma = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{1}{\sqrt{1 - \beta^2}} \quad \left(\beta = \frac{v}{c}\right)$$

#### Transformation Equations

$$\begin{aligned}
x' &= \gamma (x - vt) \\
y' &= y \\
z' &= z \\
t' &= \gamma \left( t - \frac{vx}{c^2} \right)
\end{aligned}$$

#### Inverse Lorentz Transformations (Replace $v \to -v$)

$$\begin{aligned}
x &= \gamma (x' + vt') \\
y &= y' \\
z &= z' \\
t &= \gamma \left( t' + \frac{vx'}{c^2} \right)
\end{aligned}$$

---

### 8.3 Relativistic Kinematics Phenomenologies

#### 1. Length Contraction
Object of proper length $L_0$ at rest in frame $S'$. When measured simultaneously ($\Delta t = 0$) in frame $S$:

$$L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \beta^2}$$

> Contraction occurs **only along the direction of motion**.

#### 2. Time Dilation
Event occurs at fixed location in frame $S'$ with proper time interval $\Delta t_0$. Measured by moving clocks in $S$:

$$\Delta t = \gamma \Delta t_0 = \frac{\Delta t_0}{\sqrt{1 - \beta^2}}$$

> Moving clocks run **slower**.

#### 3. Relativistic Velocity Addition Rule
Particle moving with velocity $\vec{u}' = (u_x', u_y', u_z')$ relative to frame $S'$:

$$u_x = \frac{u_x' + v}{1 + \frac{v u_x'}{c^2}}$$
$$u_y = \frac{u_y'}{\gamma \left( 1 + \frac{v u_x'}{c^2} \right)}$$
$$u_z = \frac{u_z'}{\gamma \left( 1 + \frac{v u_x'}{c^2} \right)}$$

---

### 8.4 Relativistic Dynamics and Mass-Energy Equivalence

#### Relativistic Momentum
$$\vec{p} = \gamma m_0 \vec{v} = \frac{m_0 \vec{v}}{\sqrt{1 - v^2/c^2}}$$

where $m_0$ is proper rest mass.

#### Relativistic Force
$$\vec{F} = \frac{d\vec{p}}{dt} = \frac{d}{dt}(\gamma m_0 \vec{v}) = m_0 \gamma \vec{a} + m_0 \gamma^3 \frac{(\vec{v}\cdot\vec{a})\vec{v}}{c^2}$$

- Longitudinal Force ($\vec{F} \parallel \vec{v}$): $F_\parallel = m_0 \gamma^3 a_\parallel$
- Transverse Force ($\vec{F} \perp \vec{v}$): $F_\perp = m_0 \gamma a_\perp$

#### Energy-Momentum Relations
- Total Relativistic Energy: $E = \gamma m_0 c^2$
- Rest Mass Energy: $E_0 = m_0 c^2$
- Kinetic Energy: $T = E - E_0 = (\gamma - 1) m_0 c^2$
- **Fundamental Energy-Momentum Invariant:**
  $$E^2 - p^2 c^2 = m_0^2 c^4$$

---

### 8.5 Four-Vector Formalism in Minkowski Space

Spacetime coordinates represented as contravariant 4-vector:

$$X^\mu = (x^0, x^1, x^2, x^3) = (ct, x, y, z)$$

Minkowski Metric Tensor $\eta_{\mu\nu} = \text{diag}(1, -1, -1, -1)$:

$$ds^2 = \eta_{\mu\nu} dX^\mu dX^\nu = c^2 dt^2 - dx^2 - dy^2 - dz^2$$

- $ds^2 > 0$: **Timelike Interval** (Causally connected)
- $ds^2 < 0$: **Spacelike Interval** (Causally disconnected)
- $ds^2 = 0$: **Lightlike / Null Interval** (Path of light)

#### Core Physical 4-Vectors

1. **Proper Time ($d\tau$):** $d\tau = \frac{dt}{\gamma}$
2. **4-Velocity ($U^\mu$):**
   $$U^\mu = \frac{dX^\mu}{d\tau} = \gamma \left(c, \vec{v}\right)$$
   *Invariant Norm:* $U^\mu U_\mu = \eta_{\mu\nu} U^\mu U^\nu = \gamma^2 (c^2 - v^2) = c^2$
3. **4-Momentum ($P^\mu$):**
   $$P^\mu = m_0 U^\mu = \left( \frac{E}{c}, \vec{p} \right)$$
   *Invariant Norm:* $P^\mu P_\mu = \frac{E^2}{c^2} - p^2 = m_0^2 c^2$
4. **4-Wavevector ($K^\mu$):**
   $$K^\mu = \left( \frac{\omega}{c}, \vec{k} \right)$$
   *Invariant Norm for Photons:* $K^\mu K_\mu = \frac{\omega^2}{c^2} - k^2 = 0$

---

### 8.6 Particle Decays & Threshold Energy Kinematics

#### Threshold Energy for Endothermic Reaction ($A + B \to C + D + \dots$)
Target mass $B$ stationary in LAB frame ($P_B = (m_B c, \vec{0})$), incident projectile $A$ has 4-momentum $P_A = (E_A/c, \vec{p}_A)$.

Total initial 4-momentum: $P_{\text{tot}}^\mu = P_A^\mu + P_B^\mu$.
In Centre of Mass frame at threshold, created particles are produced at rest:

$$P_{\text{tot, CM}}^\mu = \left( \sum m_{\text{products}} c, \vec{0} \right)$$

Invariance of scalar norm ($P_{\text{tot}}^\mu P_{\text{tot}, \mu}$):

$$(P_A + P_B)^2 = \left(\sum m_{\text{final}}\right)^2 c^2$$

$$P_A^2 + P_B^2 + 2 P_A \cdot P_B = \left(\sum m_{\text{final}}\right)^2 c^2$$

$$m_A^2 c^2 + m_B^2 c^2 + 2 \left(\frac{E_A}{c}\right)(m_B c) - 0 = \left(\sum m_{\text{final}}\right)^2 c^2$$

Solving for threshold kinetic energy $T_{\text{th}} = E_A - m_A c^2$:

$$T_{\text{th}} = \frac{\left( \sum m_{\text{final}} \right)^2 - (m_A + m_B)^2}{2 m_B} c^2$$

---

## MODULE 9: MASTER COMPENDIUM OF FORMULAS & SHORTCUT TRICKS

### 9.1 Lagrangians & Hamiltonians for Standard Physical Systems

| System Description | Generalized Coordinates | Lagrangian ($L$) | Hamiltonian ($H$) |
| :--- | :--- | :--- | :--- |
| **Simple Pendulum (2D)** | $\theta$ | $\frac{1}{2}ml^2 \dot{\theta}^2 + mgl\cos\theta$ | $\frac{p_\theta^2}{2ml^2} - mgl\cos\theta$ |
| **Spherical Pendulum** | $(\theta, \phi)$ | $\frac{1}{2}ml^2(\dot{\theta}^2 + \sin^2\theta \dot{\phi}^2) + mgl\cos\theta$ | $\frac{p_\theta^2}{2ml^2} + \frac{p_\phi^2}{2ml^2\sin^2\theta} - mgl\cos\theta$ |
| **Atwood Machine** | $x$ | $\frac{1}{2}(m_1 + m_2)\dot{x}^2 + (m_1 - m_2)gx$ | $\frac{p_x^2}{2(m_1 + m_2)} - (m_1 - m_2)gx$ |
| **Bead on Rotating Wire Ring** ($\omega$) | $\theta$ | $\frac{1}{2}m R^2 \dot{\theta}^2 + \frac{1}{2}m R^2 \omega^2 \sin^2\theta + mgR\cos\theta$ | $\frac{p_\theta^2}{2m R^2} - \frac{1}{2}m R^2 \omega^2 \sin^2\theta - mgR\cos\theta$ |
| **Particle in EM Field** | $\vec{r}$ | $\frac{1}{2}m\vec{v}^2 - q\phi + q(\vec{v}\cdot\vec{A})$ | $\frac{(\vec{p} - q\vec{A})^2}{2m} + q\phi$ |
| **Double Pendulum (Equal $m, l$)** | $(\theta_1, \theta_2)$ | $ml^2 \dot{\theta}_1^2 + \frac{1}{2}ml^2 \dot{\theta}_2^2 + ml^2 \dot{\theta}_1 \dot{\theta}_2 \cos(\theta_1 - \theta_2) + 2mgl\cos\theta_1 + mgl\cos\theta_2$ | Transformed via Legendre transform |

---

### 9.2 Fast-Track Formula Cheat Sheet

#### Phase Space & Stability
- **Separatrix energy:** Set kinetic term = 0 at unstable fixed point.
- **Phase space trajectory slope:** $\frac{dp}{dq} = \frac{\dot{p}}{\dot{q}} = \frac{-\partial H/\partial q}{\partial H/\partial p}$.
- **Jacobian Stability:** $\lambda^2 - \text{Tr}(\mathbf{J})\lambda + \det(\mathbf{J}) = 0$. $\det(\mathbf{J}) < 0 \implies \text{Saddle point (Always Unstable)}$.

#### Central Force Orbits
- **Effective Potential:** $V_{\text{eff}}(r) = V(r) + \frac{L^2}{2\mu r^2}$.
- **Circular Orbit Condition:** $\left.\frac{dV_{\text{eff}}}{dr}\right|_{r_0} = 0$.
- **Circular Orbit Stability Condition:** $\left.\frac{d^2 V_{\text{eff}}}{dr^2}\right|_{r_0} > 0$.
- **Precession rate for perturbed power law $V(r) = -k/r^{1-\epsilon}$:**
  $$\Delta \theta = 2\pi \left( \frac{1}{\sqrt{\frac{r_0 V''_{\text{eff}}(r_0)}{V'_{\text{eff}}(r_0)} + 3}} - 1 \right)$$

#### Rigid Bodies
- **Parallel Axis Theorem:** $I_{ij} = I_{ij}^{\text{cm}} + M(R^2 \delta_{ij} - X_i X_j)$.
- **Principal Inertia Eigenvalues:** Solve $\det(\mathbf{I} - I\mathbf{1}) = 0$.
- **Precession Rate of Free Symmetric Top:** $\Omega_p = \frac{I_1 - I_3}{I_1}\omega_3$.

#### Relativistic Transformations & Invariants
- **4-Momentum Conservation:** $\sum P_{\text{initial}}^\mu = \sum P_{\text{final}}^\mu$.
- **Invariant Mass Squared:** $E^2 - p^2 c^2 = m_0^2 c^4$.
- **Relativistic Doppler Shift:**
  $$\nu = \nu_0 \sqrt{\frac{1 - \beta}{1 + \beta}} \quad (\text{Source receding})$$
  $$\nu = \nu_0 \sqrt{\frac{1 + \beta}{1 - \beta}} \quad (\text{Source approaching})$$

---

## MODULE 10: PRACTICE PROBLEMS & HIGH-YIELD PARADIGMS

### 10.1 Canonical Transformation Verification

#### Problem
Determine whether the transformation $Q = \sqrt{2q} e^\alpha \cos p$, $P = \sqrt{2q} e^{-\alpha} \sin p$ is canonical. If canonical, find the generating function $F_1(q, Q)$.

#### Solution
For a 1D transformation to be canonical, the fundamental Poisson bracket $\{Q, P\}_{q,p}$ must equal $1$.

$$\{Q, P\}_{q,p} = \frac{\partial Q}{\partial q}\frac{\partial P}{\partial p} - \frac{\partial Q}{\partial p}\frac{\partial P}{\partial q}$$

1. Compute derivatives:
   $$\frac{\partial Q}{\partial q} = \frac{1}{\sqrt{2q}} e^\alpha \cos p, \quad \frac{\partial Q}{\partial p} = -\sqrt{2q} e^\alpha \sin p$$
   $$\frac{\partial P}{\partial q} = \frac{1}{\sqrt{2q}} e^{-\alpha} \sin p, \quad \frac{\partial P}{\partial p} = \sqrt{2q} e^{-\alpha} \cos p$$

2. Evaluate Poisson Bracket:
   $$\{Q, P\} = \left( \frac{e^\alpha \cos p}{\sqrt{2q}} \right) \left( \sqrt{2q} e^{-\alpha} \cos p \right) - \left( -\sqrt{2q} e^\alpha \sin p \right) \left( \frac{e^{-\alpha} \sin p}{\sqrt{2q}} \right)$$
   $$\{Q, P\} = \cos^2 p + \sin^2 p = 1$$

> **Conclusion:** The transformation is **Canonical** for any parameter $\alpha$.

3. Find Generating Function $F_1(q, Q)$:
   Using $p = \frac{\partial F_1}{\partial q}$ and $P = -\frac{\partial F_1}{\partial Q}$.

   From $Q = \sqrt{2q} e^\alpha \cos p \implies \cos p = \frac{Q}{\sqrt{2q} e^\alpha} \implies p = \arccos\left(\frac{Q e^{-\alpha}}{\sqrt{2q}}\right)$.

   $$\frac{\partial F_1}{\partial q} = \arccos\left(\frac{Q e^{-\alpha}}{\sqrt{2q}}\right)$$

   Integrating with respect to $q$:
   $$F_1(q, Q) = q \arccos\left(\frac{Q e^{-\alpha}}{\sqrt{2q}}\right) - \frac{Q e^{-\alpha}}{2}\sqrt{2q - Q^2 e^{-2\alpha}}$$

---

### 10.2 Circular Orbit Stability in Central Forces

#### Problem
A particle of mass $m$ moves under the influence of an attractive central potential $V(r) = -\frac{k}{r^n}$ where $k > 0, n > 0$. Find the condition on $n$ for stable circular orbits.

#### Solution
1. Effective Potential:
   $$V_{\text{eff}}(r) = -\frac{k}{r^n} + \frac{L^2}{2mr^2}$$

2. Circular Orbit Radius $r_0$:
   $$\left.\frac{dV_{\text{eff}}}{dr}\right|_{r_0} = \frac{nk}{r_0^{n+1}} - \frac{L^2}{m r_0^3} = 0 \implies \frac{L^2}{m} = n k r_0^{2-n}$$

3. Second Derivative for Stability:
   $$\frac{d^2 V_{\text{eff}}}{dr^2} = -\frac{n(n+1)k}{r^{n+2}} + \frac{3L^2}{m r^4}$$

   Substitute $\frac{L^2}{m} = n k r_0^{2-n}$ into second derivative at $r = r_0$:

   $$\left.\frac{d^2 V_{\text{eff}}}{dr^2}\right|_{r_0} = -\frac{n(n+1)k}{r_0^{n+2}} + \frac{3(n k r_0^{2-n})}{r_0^4} = \frac{n k}{r_0^{n+2}} \left[ 3 - (n+1) \right] = \frac{n k}{r_0^{n+2}} (2 - n)$$

4. Stability Criterion:
   $$\left.\frac{d^2 V_{\text{eff}}}{dr^2}\right|_{r_0} > 0 \implies 2 - n > 0 \implies n < 2$$

> **Key Result:** Circular orbits in potential $V(r) = -k/r^n$ are stable **only if $n < 2$**. (For $n \ge 2$, orbits are unstable).

---

### 10.3 Relativistic Particle Decay Kinematics

#### Problem
A neutral pion $\pi^0$ with rest mass $m_\pi$ moving with total energy $E_\pi$ decays in flight into two photons ($\pi^0 \to \gamma_1 + \gamma_2$). Find the minimum opening angle $\theta_{\text{min}}$ between the two photons in the laboratory frame.

#### Solution
1. Let $P_\pi^\mu = P_{\gamma 1}^\mu + P_{\gamma 2}^\mu$ be 4-momentum conservation.

2. Square both sides:
   $$P_\pi^2 = (P_{\gamma 1} + P_{\gamma 2})^2 = P_{\gamma 1}^2 + P_{\gamma 2}^2 + 2 P_{\gamma 1} \cdot P_{\gamma 2}$$

3. Since $P_\pi^2 = m_\pi^2 c^2$ and photons are massless ($P_{\gamma 1}^2 = P_{\gamma 2}^2 = 0$):
   $$m_\pi^2 c^2 = 2 \left( \frac{E_1 E_2}{c^2} - \vec{p}_1 \cdot \vec{p}_2 \right) = \frac{2 E_1 E_2}{c^2} (1 - \cos\theta)$$

4. Total energy conservation: $E_\pi = E_1 + E_2$.
   Product $E_1 E_2$ is maximized when $E_1 = E_2 = \frac{E_\pi}{2}$.

5. For minimum opening angle $\theta_{\text{min}}$, $\cos\theta$ is maximized $\implies E_1 = E_2 = E_\pi/2$:
   $$m_\pi^2 c^2 = 2 \left( \frac{E_\pi^2}{4 c^2} \right) (1 - \cos\theta_{\text{min}}) = \frac{E_\pi^2}{2 c^2} (1 - \cos\theta_{\text{min}})$$

6. Rearranging terms:
   $$1 - \cos\theta_{\text{min}} = \frac{2 m_\pi^2 c^4}{E_\pi^2}$$

   Using identity $1 - \cos\theta = 2\sin^2(\theta/2)$:
   $$2 \sin^2\left(\frac{\theta_{\text{min}}}{2}\right) = \frac{2 m_\pi^2 c^4}{E_\pi^2} \implies \sin\left(\frac{\theta_{\text{min}}}{2}\right) = \frac{m_\pi c^2}{E_\pi}$$

> **Key Result:** $\sin\left(\frac{\theta_{\text{min}}}{2}\right) = \frac{m_\pi c^2}{E_\pi} = \frac{1}{\gamma}$.
