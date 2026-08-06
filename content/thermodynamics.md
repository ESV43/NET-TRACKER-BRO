# CSIR NET Physical Sciences: Masterclass Study Notes
## Unit V: Thermodynamic and Statistical Physics

---

## Section 1: Laws of Thermodynamics & Their Consequences

### 1.1 Zeroth Law of Thermodynamics & Temperature
* **Statement:** If two systems $A$ and $B$ are separately in thermal equilibrium with a third system $C$, then $A$ and $B$ are in thermal equilibrium with each other.
* **Consequence:** Existence of an empirical state variable called **Temperature** ($T$).
* **Physical Significance:** Thermal equilibrium is an equivalence relation. Systems in thermal equilibrium share a single common property: equal temperature $T_A = T_B = T_C$.

---

### 1.2 First Law of Thermodynamics
* **Statement:** Energy can neither be created nor destroyed; it can only transform from one form to another. Mathematically, for an infinitesimal process in a closed system:
  $$\delta Q = dU + \delta W$$
  where:
  * $\delta Q$: Heat added to the system (inexact differential, path dependent).
  * $dU$: Change in internal energy (exact differential, state function).
  * $\delta W$: Work done by the system (inexact differential, path dependent).

#### Exact vs. Inexact Differentials
* A differential form $dZ = M(x,y)dx + N(x,y)dy$ is an **exact differential** if and only if:
  $$\left(\frac{\partial M}{\partial y}\right)_x = \left(\frac{\partial N}{\partial x}\right)_y$$
* For exact differentials, the line integral along a closed path vanishes: $\oint dZ = 0$.
* Internal energy $U$ is a state function ($\oint dU = 0$), whereas heat $Q$ and work $W$ are path functions ($\oint \delta Q \neq 0$, $\oint \delta W \neq 0$).

#### Work Done in Hydrostatic Systems
For a quasistatic volume change under external pressure $P$:
$$\delta W = P dV \implies W = \int_{V_i}^{V_f} P \, dV$$

---

### 1.3 Thermodynamic Processes for an Ideal Gas ($PV = N k_B T = n R T$)

```
                       Thermodynamic Processes
                                 │
     ┌──────────────────┬────────┴─────────┬──────────────────┐
     ▼                  ▼                  ▼                  ▼
 Isothermal         Isobaric           Isochoric          Adiabatic
($T = \text{const}$) ($P = \text{const}$) ($V = \text{const}$) ($\delta Q = 0$)
```

#### 1. Isothermal Process ($T = \text{constant}$)
* Change in internal energy for an ideal gas: $dU = C_v dT = 0 \implies Q = W$.
* Work done:
  $$W = \int_{V_i}^{V_f} \frac{nRT}{V} dV = nRT \ln\left(\frac{V_f}{V_i}\right) = nRT \ln\left(\frac{P_i}{P_f}\right)$$

#### 2. Isobaric Process ($P = \text{constant}$)
* Work done:
  $$W = P(V_f - V_i) = nR(T_f - T_i)$$
* Heat exchanged:
  $$Q = n C_p (T_f - T_i) = \Delta H$$

#### 3. Isochoric Process ($V = \text{constant}$)
* Work done:
  $$W = 0$$
* Heat exchanged:
  $$Q = \Delta U = n C_v (T_f - T_i)$$

#### 4. Adiabatic Process ($\delta Q = 0$)
* First law: $dU = -\delta W \implies n C_v dT = -P dV$.
* Using the ideal gas equation $P = nRT/V$:
  $$n C_v dT = -\frac{nRT}{V} dV \implies \frac{C_v}{R} \frac{dT}{T} + \frac{dV}{V} = 0$$
* Recalling Mayer's relation $C_p - C_v = R$, define the adiabatic index $\gamma = \frac{C_p}{C_v} \implies \frac{R}{C_v} = \gamma - 1$.
* Integrating:
  $$\int \frac{dT}{T} + (\gamma - 1) \int \frac{dV}{V} = \text{const} \implies \ln T + (\gamma - 1)\ln V = \text{const}$$
  $$T V^{\gamma - 1} = \text{constant}$$
* Using $T \propto PV$:
  $$P V^\gamma = \text{constant}$$
  $$P^{1-\gamma} T^\gamma = \text{constant}$$

#### Work Done in an Adiabatic Process
$$W = \int_{V_i}^{V_f} \frac{C}{V^\gamma} dV = \frac{C}{1-\gamma} \left[ V_f^{1-\gamma} - V_i^{1-\gamma} \right] = \frac{P_i V_i - P_f V_f}{\gamma - 1} = \frac{nR(T_i - T_f)}{\gamma - 1}$$

---

### 1.4 Second Law of Thermodynamics

#### Equivalent Statements
1. **Kelvin-Planck Statement:** It is impossible for any device that operates on a thermodynamic cycle to receive heat from a single thermal reservoir and deliver a net amount of work to the surroundings. (No 100% efficient heat engine exists).
2. **Clausius Statement:** It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a lower-temperature body to a higher-temperature body. (Heat cannot spontaneously flow from cold to hot).

#### Carnot Cycle and Engine Efficiency
A Carnot cycle is a reversible engine operating between two thermal reservoirs at temperatures $T_H$ (source) and $T_C$ (sink), consisting of four quasi-static steps:
1. **$1 \to 2$:** Reversible Isothermal Expansion at $T_H$ ($Q_H = n R T_H \ln(V_2/V_1)$).
2. **$2 \to 3$:** Reversible Adiabatic Expansion from $T_H$ to $T_C$ ($T_H V_2^{\gamma-1} = T_C V_3^{\gamma-1}$).
3. **$3 \to 4$:** Reversible Isothermal Compression at $T_C$ ($Q_C = -n R T_C \ln(V_4/V_3)$).
4. **$4 \to 1$:** Reversible Adiabatic Compression from $T_C$ to $T_H$ ($T_C V_4^{\gamma-1} = T_H V_1^{\gamma-1}$).

From the adiabatic steps:
$$\left(\frac{V_2}{V_1}\right)^{\gamma-1} = \left(\frac{T_C}{T_H}\right) \cdot \left(\frac{T_H}{T_C}\right) \left(\frac{V_3}{V_4}\right)^{\gamma-1} \implies \frac{V_2}{V_1} = \frac{V_3}{V_4}$$

Thermal Efficiency $\eta$:
$$\eta = \frac{W_{net}}{Q_H} = \frac{Q_H - |Q_C|}{Q_H} = 1 - \frac{|Q_C|}{Q_H} = 1 - \frac{n R T_C \ln(V_3/V_4)}{n R T_H \ln(V_2/V_1)} = 1 - \frac{T_C}{T_H}$$

$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

#### Carnot's Theorem
* No heat engine operating between two given reservoirs can be more efficient than a Carnot engine operating between the same two reservoirs.
* All reversible engines operating between the same two reservoirs have the same efficiency, regardless of the working substance.

---

### 1.5 Entropy ($S$) and Clausius Inequality

#### Clausius Inequality Derivation
For any cyclic process:
$$\oint \frac{\delta Q}{T} \le 0$$
* Equal to zero ($\oint \frac{\delta Q}{T} = 0$) for a **reversible** cycle.
* Strictly less than zero ($\oint \frac{\delta Q}{T} < 0$) for an **irreversible** cycle.

#### Definition of Entropy
For a reversible process, $\frac{\delta Q_{rev}}{T}$ is an exact differential. Thus, we define entropy $S$ as:
$$dS = \frac{\delta Q_{rev}}{T} \implies \Delta S = S_b - S_a = \int_a^b \frac{\delta Q_{rev}}{T}$$

For an irreversible process between states $A$ and $B$:
$$\Delta S_{system} \ge \int_a^b \frac{\delta Q}{T}$$
For an isolated system ($\delta Q = 0$):
$$\Delta S_{isolated} \ge 0 \quad \text{(Principle of Increase of Entropy)}$$

#### Entropy Changes in Standard Physical Processes

##### 1. Ideal Gas Expansion
Using $dU = T dS - P dV \implies dS = \frac{C_v}{T} dT + \frac{P}{T} dV = C_v \frac{dT}{T} + n R \frac{dV}{V}$:
$$S(T,V) - S(T_0, V_0) = C_v \ln\left(\frac{T}{T_0}\right) + n R \ln\left(\frac{V}{V_0}\right)$$
In terms of $(T, P)$:
$$S(T,P) - S(T_0, P_0) = C_p \ln\left(\frac{T}{T_0}\right) - n R \ln\left(\frac{P}{P_0}\right)$$

##### 2. Reversible Phase Change at Constant $(T, P)$
$$\Delta S = \frac{Q_{latent}}{T_{phase}} = \frac{m L}{T_{phase}}$$

##### 3. Thermal Mixing of Liquids
Mixing two identical liquids of mass $m$, specific heat $c$, at initial temperatures $T_1$ and $T_2$:
* Final temperature: $T_f = \frac{T_1 + T_2}{2}$
* Entropy change:
  $$\Delta S = m c \int_{T_1}^{T_f} \frac{dT}{T} + m c \int_{T_2}^{T_f} \frac{dT}{T} = m c \ln\left( \frac{T_f^2}{T_1 T_2} \right) = m c \ln\left( \frac{(T_1+T_2)^2}{4 T_1 T_2} \right) > 0$$

---

### 1.6 Third Law of Thermodynamics
* **Nernst Heat Theorem:** As the temperature of a system approaches absolute zero ($T \to 0\text{ K}$), the entropy change $\Delta S$ for any physical or chemical transformation approaches zero:
  $$\lim_{T \to 0} S = 0 \quad \text{(for a perfect crystalline state)}$$
* **Consequences as $T \to 0\text{ K}$:**
  1. $C_v(T) \to 0$ and $C_p(T) \to 0$ as $T \to 0$.
  2. Thermal expansion coefficient $\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P \to 0$ as $T \to 0$.
  3. **Unattainability Principle:** It is impossible by any procedure, no matter how idealized, to reduce the temperature of any system to absolute zero ($T = 0\text{ K}$) in a finite number of operations.

---

## Section 2: Thermodynamic Potentials, Maxwell Relations & Phase Equilibria

### 2.1 Thermodynamic Potentials & Fundamental Relations

Thermodynamic potentials are state functions that characterize the energy state of a system under specific natural variables (control variables).

| Potential | Symbol | Expression | Natural Variables | Fundamental Differential Relation |
| :--- | :--- | :--- | :--- | :--- |
| **Internal Energy** | $U$ | $U$ | $(S, V, N)$ | $dU = T dS - P dV + \mu dN$ |
| **Enthalpy** | $H$ | $H = U + PV$ | $(S, P, N)$ | $dH = T dS + V dP + \mu dN$ |
| **Helmholtz Free Energy** | $F$ | $F = U - TS$ | $(T, V, N)$ | $dF = -S dT - P dV + \mu dN$ |
| **Gibbs Free Energy** | $G$ | $G = H - TS$ | $(T, P, N)$ | $dG = -S dT + V dP + \mu dN$ |
| **Grand Potential** | $\Omega$ | $\Omega = F - \mu N$ | $(T, V, \mu)$ | $d\Omega = -S dT - P dV - N d\mu$ |

#### Partial Derivative Definitions of Variables
From $dF = -S dT - P dV + \mu dN$:
$$S = -\left(\frac{\partial F}{\partial T}\right)_{V,N}, \quad P = -\left(\frac{\partial F}{\partial V}\right)_{T,N}, \quad \mu = \left(\frac{\partial F}{\partial N}\right)_{T,V}$$

From $dG = -S dT + V dP + \mu dN$:
$$S = -\left(\frac{\partial G}{\partial T}\right)_{P,N}, \quad V = \left(\frac{\partial G}{\partial P}\right)_{T,N}, \quad \mu = \left(\frac{\partial G}{\partial N}\right)_{T,P}$$

---

### 2.2 Maxwell Relations
Derived using Schwarz's theorem on second partial derivatives ($\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}$) applied to exact differentials.

#### Step-by-Step Derivation of the Four Basic Relations

1. **From $dU = T dS - P dV$:**
   $$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V \quad \text{--- (MR-1)}$$

2. **From $dH = T dS + V dP$:**
   $$\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P \quad \text{--- (MR-2)}$$

3. **From $dF = -S dT - P dV$:**
   $$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V \quad \text{--- (MR-3)}$$

4. **From $dG = -S dT + V dP$:**
   $$\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P \quad \text{--- (MR-4)}$$

#### Mnemonic Device: Born's Thermodynamic Square
```
   V ─────── F ─────── T
   │                   │
   │                   │
   U    [Square]       G
   │                   │
   │                   │
   S ─────── H ─────── P
```
* **Sides represent potentials:** $U(S,V)$, $F(V,T)$, $G(T,P)$, $H(P,S)$.
* **Corners represent variables:** $V, T, P, S$.
* Differential formulas read along edges. Opposite arrows give relative minus signs.

---

### 2.3 Applications of Maxwell Relations

#### 1. First and Second $T dS$ Equations
* **First $T dS$ Equation:** Considering $S = S(T,V)$:
  $$dS = \left(\frac{\partial S}{\partial T}\right)_V dT + \left(\frac{\partial S}{\partial V}\right)_T dV$$
  Multiplying by $T$ and using $C_v = T \left(\frac{\partial S}{\partial T}\right)_V$ and MR-3 $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$:
  $$T dS = C_v dT + T \left(\frac{\partial P}{\partial T}\right)_V dV$$

* **Second $T dS$ Equation:** Considering $S = S(T,P)$:
  $$dS = \left(\frac{\partial S}{\partial T}\right)_P dT + \left(\frac{\partial S}{\partial P}\right)_T dP$$
  Multiplying by $T$ and using $C_p = T \left(\frac{\partial S}{\partial T}\right)_P$ and MR-4 $\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$:
  $$T dS = C_p dT - T \left(\frac{\partial V}{\partial T}\right)_P dP$$

#### 2. Specific Heat Capacity Difference ($C_p - C_v$)
Equating the two $T dS$ expressions:
$$(C_p - C_v) dT = T \left(\frac{\partial P}{\partial T}\right)_V dV + T \left(\frac{\partial V}{\partial T}\right)_P dP$$
At constant pressure ($dP = 0$):
$$C_p - C_v = T \left(\frac{\partial P}{\partial T}\right)_V \left(\frac{\partial V}{\partial T}\right)_P$$

Using the cyclic triple product identity $\left(\frac{\partial P}{\partial T}\right)_V \left(\frac{\partial T}{\partial V}\right)_P \left(\frac{\partial V}{\partial P}\right)_T = -1 \implies \left(\frac{\partial P}{\partial T}\right)_V = -\left(\frac{\partial V}{\partial T}\right)_P / \left(\frac{\partial V}{\partial P}\right)_T$:
$$C_p - C_v = -T \frac{\left(\frac{\partial V}{\partial T}\right)_P^2}{\left(\frac{\partial V}{\partial P}\right)_T}$$

Defining:
* Volume expansion coefficient: $\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P$
* Isothermal compressibility: $\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T$

$$C_p - C_v = \frac{T V \alpha^2}{\kappa_T}$$

**Key Consequences:**
1. Since $\kappa_T > 0$ for stable mechanical systems, $C_p > C_v$ always.
2. As $T \to 0\text{ K}$, $C_p \to C_v$.
3. For water at $4^\circ\text{C}$, $\alpha = 0 \implies C_p = C_v$.

#### 3. Joule-Thomson Effect (Isenthalpic Expansion)
In a Joule-Thomson porous plug experiment, Enthalpy is conserved ($H = \text{const} \implies dH = 0$).
* **Joule-Thomson Coefficient ($\mu_{JT}$):**
  $$\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H$$
* From $dH = T dS + V dP$:
  Using the 2nd $T dS$ equation: $dH = C_p dT + \left[ V - T \left(\frac{\partial V}{\partial T}\right)_P \right] dP = 0$
  $$\mu_{JT} = \frac{1}{C_p} \left[ T \left(\frac{\partial V}{\partial T}\right)_P - V \right] = \frac{V}{C_p} (\alpha T - 1)$$

**Analysis:**
* For an ideal gas: $V = \frac{nRT}{P} \implies \left(\frac{\partial V}{\partial T}\right)_P = \frac{nR}{P} = \frac{V}{T} \implies \mu_{JT} = 0$ (No heating or cooling).
* **Inversion Temperature ($T_i$):** The temperature at which $\mu_{JT} = 0$, given by $T_i = \frac{1}{\alpha}$.
  * If $T < T_i \implies \mu_{JT} > 0$ (Cooling occurs upon expansion, $dP < 0 \implies dT < 0$).
  * If $T > T_i \implies \mu_{JT} < 0$ (Heating occurs upon expansion).

---

### 2.4 Chemical Potential ($\mu$) & Gibbs-Duhem Relation

#### Definition
$$\mu = \left(\frac{\partial U}{\partial N}\right)_{S,V} = \left(\frac{\partial F}{\partial N}\right)_{T,V} = \left(\frac{\partial G}{\partial N}\right)_{T,P}$$
For a single-component system, since $G(T,P,N)$ is an extensive quantity proportional to $N$:
$$G(T,P,N) = N \mu(T,P) \implies \mu = \frac{G}{N}$$

#### Gibbs-Duhem Relation
Taking the total derivative of $G = N \mu$:
$$dG = N d\mu + \mu dN$$
Equating to the fundamental equation $dG = -S dT + V dP + \mu dN$:
$$N d\mu = -S dT + V dP \implies d\mu = -s dT + v dP$$
where $s = S/N$ and $v = V/N$ are the entropy and volume per particle.

---

### 2.5 Phase Equilibria & Phase Transitions

#### Conditions for Phase Equilibrium
When two phases (1 and 2) of a substance are in equilibrium:
1. **Thermal Equilibrium:** $T^{(1)} = T^{(2)}$
2. **Mechanical Equilibrium:** $P^{(1)} = P^{(2)}$
3. **Chemical/Diffusive Equilibrium:** $\mu^{(1)}(T,P) = \mu^{(2)}(T,P)$

#### Derivation of Clausius-Clapeyron Equation
Along the phase co-existence boundary:
$$d\mu^{(1)} = d\mu^{(2)}$$
Using $d\mu = -s dT + v dP$:
$$-s^{(1)} dT + v^{(1)} dP = -s^{(2)} dT + v^{(2)} dP$$
$$(v^{(2)} - v^{(1)}) dP = (s^{(2)} - s^{(1)}) dT$$
$$\frac{dP}{dT} = \frac{s^{(2)} - s^{(1)}}{v^{(2)} - v^{(1)}} = \frac{\Delta S}{\Delta V}$$
Since latent heat of transformation is $L = T \Delta S$:
$$\frac{dP}{dT} = \frac{L}{T (v^{(2)} - v^{(1)})}$$

```
                         Phase Transitions
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       First-Order Transition         Second-Order Transition
       (Discontinuous 1st deriv)      (Continuous 1st deriv,
        - Latent Heat L ≠ 0            discontinuous 2nd deriv)
        - Volume jump ΔV ≠ 0           - Latent Heat L = 0
                                       - ΔV = 0
```

#### Classification of Phase Transitions (Ehrenfest Scheme)

##### 1. First-Order Phase Transitions
* First derivatives of $G$ (i.e., $S = -\frac{\partial G}{\partial T}$ and $V = \frac{\partial G}{\partial P}$) are **discontinuous**.
* Examples: Solid-liquid melting, liquid-gas boiling, sublimation.
* Involves Latent Heat $L = T \Delta S \neq 0$ and Volume change $\Delta V \neq 0$.

##### 2. Second-Order Phase Transitions
* First derivatives of $G$ are **continuous** ($\Delta S = 0 \implies L = 0$, $\Delta V = 0$).
* Second derivatives of $G$ ($C_p = -T\frac{\partial^2 G}{\partial T^2}$, $\kappa_T = -\frac{1}{V}\frac{\partial^2 G}{\partial P^2}$, $\alpha = \frac{1}{V}\frac{\partial^2 G}{\partial T \partial P}$) exhibit **discontinuities or divergences**.
* Examples: Ferromagnetic-Paramagnetic transition at Curie point, Superconducting to normal state in zero magnetic field, Superfluid $\lambda$-transition in Liquid Helium-4.

#### Ehrenfest Equations for Second-Order Transitions
Since $\Delta S = 0$ and $\Delta V = 0$ along the transition boundary:
1. $\frac{dP}{dT} = \frac{\Delta C_p}{T V \Delta \alpha}$
2. $\frac{dP}{dT} = \frac{\Delta \alpha}{\Delta \kappa_T}$

---

### 2.6 Gibbs Phase Rule
Determines the number of thermodynamic degrees of freedom ($F$) in a multi-component, multi-phase system at equilibrium:
$$F = C - P + 2$$
where:
* $C$: Number of chemical components.
* $P$: Number of phases present in equilibrium.
* $F$: Variance (number of intensive parameters that can be varied independently).

*Example for Water ($C=1$):*
* Single phase (Liquid): $P=1 \implies F = 1 - 1 + 2 = 2$ (Temperature and Pressure can be independently varied).
* Coexistence curve (Liquid + Gas): $P=2 \implies F = 1 - 2 + 2 = 1$ (Vapor pressure curve: specifying $T$ fixes $P$).
* Triple Point (Solid + Liquid + Gas): $P=3 \implies F = 1 - 3 + 2 = 0$ (Fixed unique temperature and pressure).

---

## Section 3: Classical Statistical Mechanics & Ensembles

### 3.1 Phase Space & Micro/Macro-states

#### Phase Space Definition
For a classical system of $N$ point-particles in 3 dimensions:
* **Degree of freedom:** $3N$ position coordinates $q_i$ and $3N$ conjugate momentum coordinates $p_i$.
* **Phase Space ($\Gamma$-Space):** A $6N$-dimensional continuous space where every point represents a unique microstate $(q_1..q_{3N}, p_1..p_{3N})$ of the system.
* **Phase Space Cell Volume:** The elementary cell volume element in phase space is:
  $$d\Gamma = \frac{d^{3N}q \, d^{3N}p}{N! \, h^{3N}}$$
  where $h^{3N}$ accounts for quantum mechanical state volume (Heisenberg uncertainty $\Delta q \Delta p \ge h$), and $N!$ accounts for classical indistinguishability (Gibbs factor).

#### Microstate vs. Macrostate
* **Macrostate:** Specified by macroscopic thermodynamic properties like $(N, V, E)$ or $(N, V, T)$.
* **Microstate:** Specified by exact microscopic configuration of all particles $(q_i, p_i)$ or quantum state $|n\rangle$.
* A single macrostate corresponds to a huge number of accessible microstates $\Omega(E, V, N)$.

---

### 3.2 Liouville's Theorem

#### Derivation
Let $\rho(q,p,t)$ be the probability density of representative points in phase space. The total number of systems in an ensemble is conserved (continuity equation in phase space):
$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^{3N} \left[ \frac{\partial}{\partial q_i} (\rho \dot{q}_i) + \frac{\partial}{\partial p_i} (\rho \dot{p}_i) \right] = 0$$

Expanding the derivatives:
$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^{3N} \left[ \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} \right] + \rho \sum_{i=1}^{3N} \left[ \frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} \right] = 0$$

Using Hamilton's equations of motion:
$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

Evaluating the divergence term:
$$\frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} = \frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i \partial q_i} = 0$$

The continuity equation reduces to:
$$\frac{\partial \rho}{\partial t} + \sum_{i=1}^{3N} \left[ \frac{\partial \rho}{\partial q_i} \dot{q}_i + \frac{\partial \rho}{\partial p_i} \dot{p}_i \right] = 0 \implies \frac{d\rho}{dt} = 0$$

Alternatively, in Poisson Bracket notation:
$$\frac{\partial \rho}{\partial t} + \{\rho, H\} = 0$$

#### Physical Significance
1. The density of phase points in the neighborhood of any given moving phase point remains constant in time.
2. **Conservation of Phase Volume:** The total volume of a domain in phase space occupied by an ensemble is invariant under Hamiltonian motion.

---

### 3.3 The Statistical Ensembles

```
                             Statistical Ensembles
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
Microcanonical Ensemble       Canonical Ensemble           Grand Canonical Ensemble
      (N, V, E)                     (N, V, T)                     (μ, V, T)
 Isolated System               Thermal Contact               Thermal & Particle
 Constant Energy               Heat Reservoir Exchange       Reservoir Exchange
```

---

### 3.4 Microcanonical Ensemble $(N, V, E)$

Used for isolated systems with fixed particle number $N$, volume $V$, and energy $E$ lying in a narrow shell $[E, E + \delta E]$.

#### Density Function
$$\rho(q,p) = \begin{cases} \text{Constant} = C, & E \le H(q,p) \le E + \delta E \\ 0, & \text{otherwise} \end{cases}$$

#### Fundamental Postulate
**Postulate of Equal A Priori Probabilities:** All accessible microstates corresponding to the same macrostate $(N, V, E)$ are equally likely to occur.

#### Microcanonical Partition Function / Number of States ($\Omega$)
$$\Omega(E, V, N) = \frac{1}{N! h^{3N}} \int_{E \le H(q,p) \le E+\delta E} d^{3N}q \, d^{3N}p$$

#### Connection to Thermodynamics (Boltzmann Entropy Formula)
$$S(E, V, N) = k_B \ln \Omega(E, V, N)$$
Temperature definition:
$$\frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{V,N}$$

---

### 3.5 Detailed Application: Ideal Gas in Microcanonical Ensemble

Consider $N$ non-interacting monoatomic classical particles in volume $V$.
Hamiltonian: $H = \sum_{i=1}^N \frac{\vec{p}_i^2}{2m} = \frac{1}{2m} \sum_{j=1}^{3N} p_j^2$.

#### Phase Space Volume Integration
Phase space volume for energy $\le E$:
$$\Phi(E) = \frac{1}{N! h^{3N}} \int_{V} d^{3N}q \int_{\sum p_j^2 \le 2mE} d^{3N}p = \frac{V^N}{N! h^{3N}} \cdot V_{3N}(R)$$
where $V_{3N}(R)$ is the volume of a $3N$-dimensional hypersphere of radius $R = \sqrt{2mE}$.

#### Volume of a $K$-dimensional Hypersphere
$$V_K(R) = \frac{\pi^{K/2}}{\Gamma\left(\frac{K}{2} + 1\right)} R^K \implies V_{3N}(\sqrt{2mE}) = \frac{\pi^{3N/2}}{\left(\frac{3N}{2}\right)!} (2mE)^{3N/2}$$

Number of states in energy shell $\delta E$:
$$\Omega(E) = \frac{d\Phi(E)}{dE} \delta E = \frac{V^N}{N! h^{3N}} \frac{\pi^{3N/2}}{\left(\frac{3N}{2} - 1\right)!} (2mE)^{\frac{3N}{2}-1} m \delta E$$

Taking logarithm and using Stirling's approximation ($\ln(N!) \approx N\ln N - N$):
$$\ln \Omega(E) \approx N \ln V + \frac{3N}{2} \ln\left( \frac{4\pi m E}{3N h^2} \right) + \frac{5N}{2} - N \ln N$$

#### Sackur-Tetrode Equation for Entropy
$$S = k_B \ln \Omega = N k_B \left[ \ln \left\{ \frac{V}{N} \left( \frac{4\pi m E}{3N h^2} \right)^{3/2} \right\} + \frac{5}{2} \right]$$

Since $E = \frac{3}{2} N k_B T$, substituting gives the standard form:
$$S(T,V,N) = N k_B \left[ \ln \left\{ \frac{V}{N} \left( \frac{2\pi m k_B T}{h^2} \right)^{3/2} \right\} + \frac{5}{2} \right]$$

---

### 3.6 Canonical Ensemble $(N, V, T)$

Describes a system in thermal contact with a large heat bath at constant temperature $T$.

#### Probability Distribution (Boltzmann Factor)
The probability $P_i$ of finding the system in a microstate $i$ with energy $E_i$ is:
$$P_i = \frac{e^{-\beta E_i}}{Z}$$
where $\beta = \frac{1}{k_B T}$.

#### Canonical Partition Function ($Z$)
* **Discrete Quantum System:**
  $$Z = \sum_{i} e^{-\beta E_i} = \sum_{E} g(E) e^{-\beta E}$$
  where $g(E)$ is the degeneracy of energy level $E$.
* **Continuous Classical System:**
  $$Z_N = \frac{1}{N! h^{3N}} \int e^{-\beta H(q,p)} d^{3N}q \, d^{3N}p$$

For $N$ non-interacting identical particles:
$$Z_N = \frac{(Z_1)^N}{N!}$$
where $Z_1$ is the single-particle partition function:
$$Z_1 = \frac{1}{h^3} \int e^{-\beta H_1(q,p)} d^3q \, d^3p$$

#### Connection to Thermodynamics
1. **Helmholtz Free Energy ($F$):**
   $$F = -k_B T \ln Z$$
2. **Internal Energy ($U = \langle E \rangle$):**
   $$U = -\frac{\partial}{\partial \beta} \ln Z = k_B T^2 \frac{\partial \ln Z}{\partial T}$$
3. **Entropy ($S$):**
   $$S = -\left(\frac{\partial F}{\partial T}\right)_V = k_B \ln Z + \frac{U}{T} = -k_B \sum_i P_i \ln P_i$$
4. **Pressure ($P$):**
   $$P = -\left(\frac{\partial F}{\partial V}\right)_T = k_B T \left(\frac{\partial \ln Z}{\partial V}\right)_T$$
5. **Heat Capacity ($C_v$):**
   $$C_v = \left(\frac{\partial U}{\partial T}\right)_V = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2}$$

#### Energy Fluctuations in Canonical Ensemble
Mean square deviation of energy:
$$\sigma_E^2 = \langle E^2 \rangle - \langle E \rangle^2 = \frac{\partial^2 \ln Z}{\partial \beta^2} = -\frac{\partial \langle E \rangle}{\partial \beta} = k_B T^2 C_v$$

Relative Energy Fluctuation:
$$\frac{\sigma_E}{\langle E \rangle} = \frac{\sqrt{k_B T^2 C_v}}{\langle E \rangle} \propto \frac{\sqrt{N}}{N} \sim \mathcal{O}\left(N^{-1/2}\right)$$
As $N \to \infty$ (Thermodynamic limit), fluctuations vanish, ensuring statistical equivalence between Canonical and Microcanonical Ensembles.

---

### 3.7 Classical Equipartition Theorem

#### Theorem Statement
For a classical system in thermal equilibrium at temperature $T$, every independent quadratic degree of freedom appearing in the Hamiltonian contributes an average thermal energy of $\frac{1}{2} k_B T$ to the total internal energy.

#### Proof
Let $H(q,p) = c x_i^2 + H'(q,p)$, where $x_i$ is any coordinate or momentum.
$$\langle c x_i^2 \rangle = \frac{\int_{-\infty}^{\infty} (c x_i^2) e^{-\beta c x_i^2} dx_i}{\int_{-\infty}^{\infty} e^{-\beta c x_i^2} dx_i}$$
Let $y = \sqrt{\beta c} \, x_i \implies dx_i = \frac{dy}{\sqrt{\beta c}}$:
$$\langle c x_i^2 \rangle = \frac{1}{\beta} \frac{\int_{-\infty}^{\infty} y^2 e^{-y^2} dy}{\int_{-\infty}^{\infty} e^{-y^2} dy} = \frac{1}{\beta} \left(\frac{1}{2}\right) = \frac{1}{2} k_B T$$

---

### 3.8 Grand Canonical Ensemble $(\mu, V, T)$

Describes a system that can exchange both **energy** and **particles** with a reservoir at temperature $T$ and chemical potential $\mu$.

#### Grand Canonical Probability Distribution
$$P_{i,N} = \frac{e^{-\beta (E_{i,N} - \mu N)}}{\mathcal{Z}}$$

#### Grand Partition Function ($\mathcal{Z}$)
$$\mathcal{Z}(T, V, \mu) = \sum_{N=0}^{\infty} \sum_{i} e^{-\beta (E_{i,N} - \mu N)} = \sum_{N=0}^{\infty} z^N Z_N(T,V)$$
where $z = e^{\beta \mu} = e^{\mu / k_B T}$ is the **fugacity**.

#### Connection to Thermodynamics
1. **Grand Potential ($\Omega_G$):**
   $$\Omega_G = -k_B T \ln \mathcal{Z} = -P V$$
2. **Average Particle Number ($\langle N \rangle$):**
   $$\langle N \rangle = z \frac{\partial}{\partial z} \ln \mathcal{Z} = \frac{1}{\beta} \left(\frac{\partial \ln \mathcal{Z}}{\partial \mu}\right)_{T,V}$$
3. **Pressure ($P$):**
   $$P = \frac{k_B T}{V} \ln \mathcal{Z}$$
4. **Entropy ($S$):**
   $$S = -\left(\frac{\partial \Omega_G}{\partial T}\right)_{V,\mu}$$

#### Particle Number Fluctuations
$$\sigma_N^2 = \langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta^2} \frac{\partial^2 \ln \mathcal{Z}}{\partial \mu^2} = \frac{1}{\beta} \left(\frac{\partial \langle N \rangle}{\partial \mu}\right)_{T,V}$$

Using thermodynamic identities, this links to isothermal compressibility $\kappa_T$:
$$\sigma_N^2 = \frac{\langle N \rangle^2 k_B T \kappa_T}{V} \implies \frac{\sigma_N}{\langle N \rangle} \sim \mathcal{O}\left(N^{-1/2}\right)$$

---

## Section 4: Quantum Statistics & Ideal Quantum Gases

### 4.1 Comparison of Three Statistics

| Characteristic | Maxwell-Boltzmann (MB) | Bose-Einstein (BE) | Fermi-Dirac (FD) |
| :--- | :--- | :--- | :--- |
| **Particle Type** | Classical particles | Bosons | Fermions |
| **Distinguishability** | Distinguishable | Indistinguishable | Indistinguishable |
| **Spin** | Any | Integer ($0, 1, 2..$) | Half-odd integer ($\frac{1}{2}, \frac{3}{2}..$) |
| **Wavefunction Symmetry**| Unspecified | Symmetric under exchange | Antisymmetric under exchange |
| **Pauli Exclusion** | Does not apply | Does not apply | Strictly applies |
| **Occupancy per State ($n_i$)**| $0, 1, 2, 3.. \infty$ | $0, 1, 2, 3.. \infty$ | Only $0$ or $1$ |

---

### 4.2 Derivation of Quantum Distribution Functions

Consider a set of energy levels $\epsilon_i$ with degeneracy $g_i$, containing $n_i$ particles.

```
            Combinatorial Microstate Counting
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
Maxwell-Boltzmann    Bose-Einstein        Fermi-Dirac
  W = N! ∏ (g_i)^n_i / n_i!  W = ∏ (n_i+g_i-1)! / n_i!(g_i-1)!  W = ∏ g_i! / n_i!(g_i-n_i)!
```

#### 1. Maxwell-Boltzmann Statistics (Distinguishable)
* Number of ways to partition $N$ particles into groups of $n_i$: $W = N! \prod_i \frac{g_i^{n_i}}{n_i!}$
* Using Stirling's approximation to maximize $\ln W$ subject to $\sum n_i = N$ and $\sum n_i \epsilon_i = E$ via Lagrange multipliers $\alpha, \beta$:
  $$\langle n_i \rangle_{MB} = g_i e^{-\alpha - \beta \epsilon_i} = g_i e^{-\beta (\epsilon_i - \mu)}$$

#### 2. Bose-Einstein Statistics (Indistinguishable Bosons)
* Number of ways to place $n_i$ indistinguishable particles into $g_i$ degenerate states (stars and bars method):
  $$W_{BE} = \prod_i \frac{(n_i + g_i - 1)!}{n_i! (g_i - 1)!}$$
* Maximizing $\ln W_{BE}$ via Lagrange multipliers:
  $$\frac{\partial}{\partial n_i} \left[ \sum_i \left( (n_i + g_i) \ln(n_i + g_i) - n_i \ln n_i - g_i \ln g_i \right) - \alpha n_i - \beta n_i \epsilon_i \right] = 0$$
  $$\ln\left(\frac{n_i + g_i}{n_i}\right) = \alpha + \beta \epsilon_i \implies 1 + \frac{g_i}{n_i} = e^{\beta (\epsilon_i - \mu)}$$
  $$\langle n_i \rangle_{BE} = \frac{g_i}{e^{\beta(\epsilon_i - \mu)} - 1}$$

#### 3. Fermi-Dirac Statistics (Indistinguishable Fermions)
* Number of ways to choose $n_i$ occupied states out of $g_i$ available states ($n_i \le g_i$):
  $$W_{FD} = \prod_i \frac{g_i!}{n_i! (g_i - n_i)!}$$
* Maximizing $\ln W_{FD}$ via Lagrange multipliers:
  $$\frac{\partial}{\partial n_i} \left[ \sum_i \left( g_i \ln g_i - n_i \ln n_i - (g_i - n_i) \ln(g_i - n_i) \right) - \alpha n_i - \beta n_i \epsilon_i \right] = 0$$
  $$\ln\left(\frac{g_i - n_i}{n_i}\right) = \alpha + \beta \epsilon_i \implies \frac{g_i}{n_i} - 1 = e^{\beta (\epsilon_i - \mu)}$$
  $$\langle n_i \rangle_{FD} = \frac{g_i}{e^{\beta(\epsilon_i - \mu)} + 1}$$

#### Master Formula for Average Occupation Number
$$f(\epsilon) = \frac{\langle n(\epsilon) \rangle}{g(\epsilon)} = \frac{1}{e^{\beta(\epsilon - \mu)} + a}$$
where:
* $a = 0 \implies$ Maxwell-Boltzmann
* $a = -1 \implies$ Bose-Einstein
* $a = +1 \implies$ Fermi-Dirac

---

### 4.3 Condition for Classical Limit
Quantum statistics approaches classical Maxwell-Boltzmann statistics when the mean occupation number of every quantum state is much smaller than unity ($f(\epsilon) \ll 1$):
$$e^{\beta(\epsilon - \mu)} \gg 1 \implies z = e^{\beta \mu} \ll 1$$

This occurs under the condition:
$$n \lambda_{dB}^d \ll 1$$
where:
* $n = N/V$ is the particle numerical density.
* $\lambda_{dB} = \frac{h}{\sqrt{2\pi m k_B T}}$ is the **thermal de Broglie wavelength**.
* **High Temperature ($T \to \infty$)** or **Low Density ($n \to 0$)** leads to classical behavior.

---

## Section 5: Ideal Bose and Fermi Gases

### 5.1 Generalized Density of States $g(\epsilon)$ Formula

In a $d$-dimensional space with volume $V_d$, for particles governed by a dispersion relation $\epsilon = c \, p^s$:

1. Number of quantum states in momentum sphere of radius $p$:
   $$N(p) = g_s \frac{V_d}{(2\pi \hbar)^d} C_d p^d$$
   where $g_s = 2S+1$ is spin degeneracy, and $C_d$ is the volume of a unit sphere in $d$-dimensions ($C_1 = 2$, $C_2 = \pi$, $C_3 = \frac{4\pi}{3}$).

2. Expressing $p$ in terms of $\epsilon$:
   $$p = \left(\frac{\epsilon}{c}\right)^{1/s} \implies dp = \frac{1}{s c^{1/s}} \epsilon^{\frac{1}{s}-1} d\epsilon$$

3. Density of States $g(\epsilon) d\epsilon = \frac{dN(p)}{dp} dp$:
   $$g(\epsilon) d\epsilon \propto V_d \cdot \epsilon^{\left(\frac{d}{s} - 1\right)} d\epsilon$$

$$g(\epsilon) = A \cdot \epsilon^{\frac{d}{s} - 1}$$

#### Standard Cases Summary Matrix

| Dimension ($d$) | Dispersion ($\epsilon(p)$) | Parameters | Density of States dependence $g(\epsilon)$ |
| :--- | :--- | :--- | :--- |
| **3D** | Non-relativistic ($\frac{p^2}{2m}$) | $d=3, s=2$ | $g(\epsilon) = \frac{2\pi V}{h^3}(2m)^{3/2} \, \epsilon^{1/2} \propto \epsilon^{1/2}$ |
| **2D** | Non-relativistic ($\frac{p^2}{2m}$) | $d=2, s=2$ | $g(\epsilon) = \frac{2\pi m A}{h^2} \propto \epsilon^0 = \text{Constant}$ |
| **1D** | Non-relativistic ($\frac{p^2}{2m}$) | $d=1, s=2$ | $g(\epsilon) \propto \epsilon^{-1/2}$ |
| **3D** | Ultra-relativistic ($pc$) | $d=3, s=1$ | $g(\epsilon) = \frac{8\pi V}{c^3 h^3} \, \epsilon^2 \propto \epsilon^2$ |

---

### 5.2 Ideal Bose Gas & Bose-Einstein Condensation (BEC)

#### Chemical Potential Behavior
For bosons, $f(\epsilon) = \frac{1}{e^{\beta(\epsilon - \mu)} - 1} \ge 0 \implies \mu \le \epsilon_0$. Setting the ground state energy $\epsilon_0 = 0$, we have:
$$\mu \le 0$$
As temperature $T$ decreases at constant density $n$, $\mu$ increases monotonically towards zero.

#### Formulation of BEC
Total number of particles $N$:
$$N = N_0 + N_e = N_0 + \int_{0^+}^{\infty} \frac{g(\epsilon) d\epsilon}{e^{\beta(\epsilon - \mu)} - 1}$$
where $N_0$ is the ground state population ($\epsilon = 0$) and $N_e$ is the excited states population.

#### Critical Temperature ($T_c$) Derivation in 3D
At $T = T_c$, chemical potential reaches its maximum possible value $\mu = 0$, and excited states hold the maximum possible number of particles:
$$N = \int_0^\infty \frac{g(\epsilon) d\epsilon}{e^{\beta_c \epsilon} - 1} = \frac{2\pi V}{h^3} (2m)^{3/2} \int_0^\infty \frac{\epsilon^{1/2} d\epsilon}{e^{\epsilon/k_B T_c} - 1}$$

Let $x = \frac{\epsilon}{k_B T_c} \implies d\epsilon = k_B T_c \, dx$:
$$N = \frac{2\pi V}{h^3} (2m k_B T_c)^{3/2} \int_0^\infty \frac{x^{1/2} dx}{e^x - 1}$$

Using the integral identity $\int_0^\infty \frac{x^{s-1} dx}{e^x - 1} = \Gamma(s) \zeta(s)$:
$$\int_0^\infty \frac{x^{1/2} dx}{e^x - 1} = \Gamma\left(\frac{3}{2}\right) \zeta\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2} (2.612)$$

$$N = V \left(\frac{2\pi m k_B T_c}{h^2}\right)^{3/2} \zeta(3/2)$$

Solving for $T_c$:
$$T_c = \frac{h^2}{2\pi m k_B} \left( \frac{N}{V \, \zeta(3/2)} \right)^{2/3} \approx \frac{h^2}{2\pi m k_B} \left( \frac{n}{2.612} \right)^{2/3}$$

#### Condensate Fraction ($T < T_c$)
For $T < T_c$, chemical potential remains strictly pinned at $\mu = 0$.
The population in excited states is:
$$N_e(T) = V \left(\frac{2\pi m k_B T}{h^2}\right)^{3/2} \zeta(3/2) = N \left(\frac{T}{T_c}\right)^{3/2}$$

Therefore, the fraction of particles condensed into the ground state is:
$$\frac{N_0}{N} = 1 - \frac{N_e}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

```
   N_0/N 1 ──┐
           │  └─┐
           │    └──┐
         0 ┴───────┴─────── T/T_c
                   1
```

#### Thermodynamics Below $T_c$
* Internal Energy: $U(T) = \int_0^\infty \frac{\epsilon g(\epsilon) d\epsilon}{e^{\beta \epsilon} - 1} \propto T^{5/2}$
* Heat Capacity: $C_v = \left(\frac{\partial U}{\partial T}\right)_V \propto T^{3/2}$
* Pressure: $P = \frac{2}{3}\frac{U}{V} \propto T^{5/2}$ (Independent of volume $V$ below $T_c$!).

#### Criterion for BEC Existence in Arbitrary Dimensions
BEC occurs at $T_c > 0$ if and only if the excited state integral converges at $\mu = 0$:
$$I = \int_0^\infty \frac{\epsilon^{\frac{d}{s}-1} d\epsilon}{e^{\beta \epsilon} - 1} < \infty$$
Near $\epsilon \to 0$, $e^{\beta \epsilon} - 1 \approx \beta \epsilon$, so the integrand behaves as $\epsilon^{\frac{d}{s}-2}$.
The integral converges at lower limit if:
$$\frac{d}{s} - 2 > -1 \implies \frac{d}{s} > 1$$

* **For Non-Relativistic particles ($s=2$):** BEC occurs only if $d > 2$. (No BEC in 1D or 2D at finite $T$).
* **For Ultra-Relativistic particles ($s=1$):** BEC occurs only if $d > 1$. (BEC occurs in 2D and 3D).

---

### 5.3 Ideal Fermi Gas

#### Fermi Surface Properties at $T = 0\text{ K}$
At $T = 0\text{ K}$, all quantum states up to a maximum energy $E_F$ (Fermi Energy) are completely filled ($f(\epsilon) = 1$), and all states above $E_F$ are completely empty ($f(\epsilon) = 0$).

```
       f(ε) 1 ┌──────────┐
              │          │  T = 0 K
              │          └────────────
            0 ┴──────────┴─────────── ε
                        E_F
```

#### Detailed 3D Non-Relativistic Derivation ($g_s = 2$)

##### 1. Fermi Momentum ($p_F$) & Fermi Energy ($E_F$)
Total number of particles $N$:
$$N = \int_0^{p_F} 2 \cdot \frac{V}{(2\pi \hbar)^3} 4\pi p^2 dp = \frac{2 V}{8\pi^3 \hbar^3} \frac{4\pi p_F^3}{3} = \frac{V p_F^3}{3\pi^2 \hbar^3}$$
$$p_F = \hbar \left( 3\pi^2 n \right)^{1/3}$$

$$E_F = \frac{p_F^2}{2m} = \frac{\hbar^2}{2m} \left( 3\pi^2 n \right)^{2/3}$$

##### 2. Ground State Internal Energy ($E_0$)
$$E_0 = \int_0^{E_F} \epsilon \, g(\epsilon) d\epsilon = \int_0^{E_F} \epsilon \cdot \left[ \frac{V}{2\pi^2 \hbar^3} (2m)^{3/2} \epsilon^{1/2} \right] d\epsilon = \frac{V (2m)^{3/2}}{2\pi^2 \hbar^3} \frac{2}{5} E_F^{5/2}$$
Substituting $N = \frac{V (2m)^{3/2}}{3\pi^2 \hbar^3} E_F^{3/2}$:
$$E_0 = \frac{3}{5} N E_F$$

Average energy per particle at $T=0\text{ K}$: $\langle \epsilon \rangle = \frac{3}{5} E_F$.

##### 3. Fermi Degeneracy Pressure ($P_0$)
$$P_0 = -\left(\frac{\partial E_0}{\partial V}\right)_N = -\frac{3}{5} N \left(\frac{\partial E_F}{\partial V}\right)_N$$
Since $E_F \propto V^{-2/3} \implies \frac{\partial E_F}{\partial V} = -\frac{2}{3} \frac{E_F}{V}$:
$$P_0 = \frac{2}{3} \frac{E_0}{V} = \frac{2}{5} n E_F = \frac{\hbar^2}{5m} (3\pi^2)^{2/3} n^{5/3}$$

---

#### Comparison of Fermi Parameters Across Dimensions ($s=2, g_s=2$)

| Parameter | 1D | 2D | 3D |
| :--- | :--- | :--- | :--- |
| **Fermi Momentum ($p_F$)** | $\frac{\pi \hbar n}{2}$ | $\hbar \sqrt{2\pi n}$ | $\hbar (3\pi^2 n)^{1/3}$ |
| **Fermi Energy ($E_F$)** | $\frac{\pi^2 \hbar^2 n^2}{8m}$ | $\frac{\hbar^2 \pi n}{m}$ | $\frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$ |
| **Average Energy ($\langle \epsilon \rangle$)** | $\frac{1}{3} E_F$ | $\frac{1}{2} E_F$ | $\frac{3}{5} E_F$ |
| **Degeneracy Pressure ($P_0$)** | $\frac{1}{3} n E_F$ | $\frac{1}{2} n E_F$ | $\frac{2}{5} n E_F$ |

---

#### Sommerfeld Low-Temperature Expansion ($T \ll T_F$)

For $T \ll T_F = E_F/k_B$, thermal excitations only affect electrons within an energy range $\sim k_B T$ near $E_F$.

##### Sommerfeld Lemma Formula
For any smooth function $\phi(\epsilon)$:
$$\int_0^\infty \frac{\phi(\epsilon) d\epsilon}{e^{\beta(\epsilon - \mu)} + 1} = \int_0^\mu \phi(\epsilon) d\epsilon + \frac{\pi^2}{6} (k_B T)^2 \phi'(\mu) + \mathcal{O}(T^4)$$

##### 1. Chemical Potential $\mu(T)$
Applying to particle number conservation $N = \int_0^\infty f(\epsilon) g(\epsilon) d\epsilon$:
$$\mu(T) = E_F \left[ 1 - \frac{\pi^2}{12} \left(\frac{k_B T}{E_F}\right)^2 + \dots \right]$$

##### 2. Total Internal Energy $U(T)$
$$U(T) = E_0 + \frac{\pi^2}{6} g(E_F) (k_B T)^2 = \frac{3}{5} N E_F \left[ 1 + \frac{5\pi^2}{12} \left(\frac{k_B T}{E_F}\right)^2 \right]$$

##### 3. Electronic Heat Capacity ($C_v$)
$$C_v = \left(\frac{\partial U}{\partial T}\right)_V = \frac{\pi^2}{2} N k_B \left(\frac{k_B T}{E_F}\right) = \frac{\pi^2}{2} N k_B \left(\frac{T}{T_F}\right) \equiv \gamma T$$

**Physical Insight:** Only a fraction $\sim \frac{T}{T_F}$ of total electrons can absorb thermal energy, leading to a linear dependence on temperature at low $T$.

---

#### Relativistic Fermi Gas ($\epsilon = pc$)

For ultra-relativistic electrons ($E \gg m c^2$):
1. **Fermi Energy:** $E_F = p_F c = \hbar c (3\pi^2 n)^{1/3}$
2. **Ground State Energy:** $E_0 = \frac{3}{4} N E_F$
3. **Pressure:** $P_0 = \frac{1}{3} \frac{E_0}{V} = \frac{1}{4} n E_F \propto n^{4/3}$

#### Application: White Dwarf Stars & Chandrasekhar Mass Limit
A white dwarf is supported against gravitational collapse by electron degeneracy pressure.
* Non-relativistic pressure ($P \propto n^{5/3}$) balances gravity for low masses: $R \propto M^{-1/3}$.
* Ultra-relativistic pressure ($P \propto n^{4/3}$) leads to an instability at a maximum critical mass:
  $$M_{Ch} \approx 1.44 M_\odot$$
  If mass $M > M_{Ch}$, degeneracy pressure cannot prevent collapse into a neutron star or black hole.

---

## Section 6: Principle of Detailed Balance & Non-Equilibrium Concepts

### 6.1 Microscopic Reversibility
Underlying fundamental laws of classical mechanics and quantum mechanics are invariant under time reversal $t \to -t$.

---

### 6.2 Master Equation
The time evolution of the probability distribution $P_i(t)$ among microstates is governed by the rate equation:
$$\frac{d P_i}{dt} = \sum_{j} \left[ W_{j \to i} P_j - W_{i \to j} P_i \right]$$
where $W_{i \to j}$ is the transition probability per unit time from state $i$ to state $j$.

---

### 6.3 Principle of Detailed Balance
At thermodynamic equilibrium, the system is in a stationary state ($\frac{dP_i}{dt} = 0$). The principle of detailed balance requires that the rate of transition from any state $i$ to state $j$ **exactly equals** the reverse rate from $j$ to $i$ individually:
$$W_{i \to j} P_i^{(eq)} = W_{j \to i} P_j^{(eq)}$$

#### Ratio of Transition Rates
$$\frac{W_{i \to j}}{W_{j \to i}} = \frac{P_j^{(eq)}}{P_i^{(eq)}} = \frac{e^{-\beta E_j}}{e^{-\beta E_i}} = e^{-\beta(E_j - E_i)}$$

#### Application: Einstein's $A$ and $B$ Coefficients
Consider atomic transitions between levels 1 and 2 in the presence of radiation density $u(\nu)$:
* Rate of absorption ($1 \to 2$): $R_{12} = N_1 B_{12} u(\nu)$
* Rate of emission ($2 \to 1$): $R_{21} = N_2 [A_{21} + B_{21} u(\nu)]$

Detailed balance at equilibrium requires $R_{12} = R_{21}$:
$$N_1 B_{12} u(\nu) = N_2 [A_{21} + B_{21} u(\nu)]$$

Using Boltzmann distribution $\frac{N_2}{N_1} = e^{-h\nu / k_B T}$:
$$u(\nu) = \frac{A_{21}/B_{21}}{\frac{B_{12}}{B_{21}} e^{h\nu/k_B T} - 1}$$
Comparing with Planck's Radiation Law requires:
$$B_{12} = B_{21} \quad \text{and} \quad \frac{A_{21}}{B_{21}} = \frac{8\pi h \nu^3}{c^3}$$

---

## Section 7: Blackbody Radiation & Planck's Law

### 7.1 Cavity Radiation as a Photon Gas
Properties of photons:
* Zero rest mass ($m_0 = 0$).
* Energy-momentum relation: $\epsilon = h \nu = \hbar \omega = pc$.
* Spin $S = 1$ (Bosons) with $g_s = 2$ transverse polarization states.
* **Non-conserved particle number:** Photons are continuously absorbed and emitted by cavity walls.

#### Chemical Potential of Photon Gas
To minimize Helmholtz free energy with respect to particle number at fixed $(T, V)$:
$$\left(\frac{\partial F}{\partial N}\right)_{T,V} = 0 \implies \mu = 0$$
Thus, photon fugacity $z = e^{\beta \mu} = e^0 = 1$.

---

### 7.2 Photon Density of States

In a 3D cavity of volume $V$:
$$g(\nu) d\nu = 2 \cdot \frac{V}{(2\pi)^3} \cdot 4\pi k^2 dk = \frac{V}{\pi^2} \left(\frac{2\pi \nu}{c}\right)^2 \left(\frac{2\pi d\nu}{c}\right)$$
$$g(\nu) d\nu = \frac{8\pi V \nu^2}{c^3} d\nu$$

In terms of angular frequency $\omega$:
$$g(\omega) d\omega = \frac{V \omega^2}{\pi^2 c^3} d\omega$$

---

### 7.3 Classical Laws vs. Planck's Quantum Theory

#### 1. Rayleigh-Jeans Law (Classical)
Assumes classical equipartition theorem: average energy per mode $\langle \epsilon \rangle = k_B T$.
$$u(\nu) d\nu = \frac{g(\nu) d\nu}{V} \langle \epsilon \rangle = \frac{8\pi \nu^2 k_B T}{c^3} d\nu$$
* **Ultraviolet Catastrophe:** As $\nu \to \infty$, total energy density $\int_0^\infty u(\nu)d\nu \to \infty$, which is unphysical.

#### 2. Wien's Distribution Law (Empirical)
$$u(\nu) d\nu = A \nu^3 e^{-b \nu / T} d\nu$$
* Fits well at high frequencies ($\nu \to \infty$), fails at low frequencies ($\nu \to 0$).

#### 3. Planck's Distribution Law (Quantum Solution)
Planck postulated that energy exchange occurs in discrete quanta $\epsilon_n = n h \nu$ ($n = 0, 1, 2..$).
Average energy per mode:
$$\langle \epsilon \rangle = \frac{\sum_{n=0}^\infty (n h \nu) e^{-\beta n h \nu}}{\sum_{n=0}^\infty e^{-\beta n h \nu}} = -\frac{d}{d\beta} \ln \left( \frac{1}{1 - e^{-\beta h \nu}} \right) = \frac{h\nu}{e^{h\nu/k_B T} - 1}$$

##### Spectral Energy Density $u(\nu) d\nu$
$$u(\nu) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{\frac{h\nu}{k_B T}} - 1} d\nu$$

##### Spectral Energy Density $u(\lambda) d\lambda$
Using $\nu = c/\lambda \implies d\nu = -\frac{c}{\lambda^2} d\lambda$:
$$u(\lambda) d\lambda = \frac{8\pi h c}{\lambda^5} \frac{1}{e^{\frac{hc}{\lambda k_B T}} - 1} d\lambda$$

---

### 7.4 Limiting Cases of Planck's Formula

#### Low-Frequency / High-Temperature Limit ($h\nu \ll k_B T$)
Taylor expanding $e^{x} \approx 1 + x$:
$$e^{h\nu/k_B T} - 1 \approx \frac{h\nu}{k_B T}$$
$$u(\nu) d\nu \approx \frac{8\pi h \nu^3}{c^3} \left( \frac{k_B T}{h\nu} \right) d\nu = \frac{8\pi \nu^2 k_B T}{c^3} d\nu \quad \text{(Rayleigh-Jeans Law)}$$

#### High-Frequency / Low-Temperature Limit ($h\nu \gg k_B T$)
$$e^{h\nu/k_B T} - 1 \approx e^{h\nu/k_B T}$$
$$u(\nu) d\nu \approx \frac{8\pi h \nu^3}{c^3} e^{-\frac{h\nu}{k_B T}} d\nu \quad \text{(Wien's Law)}$$

---

### 7.5 Derivation of Stefan-Boltzmann Law

Total energy density $u(T) = \int_0^\infty u(\nu) d\nu$:
$$u(T) = \frac{8\pi h}{c^3} \int_0^\infty \frac{\nu^3 d\nu}{e^{h\nu/k_B T} - 1}$$

Let $x = \frac{h\nu}{k_B T} \implies \nu = \left(\frac{k_B T}{h}\right) x$:
$$u(T) = \frac{8\pi h}{c^3} \left(\frac{k_B T}{h}\right)^4 \int_0^\infty \frac{x^3 dx}{e^x - 1}$$

Using the standard integral $\int_0^\infty \frac{x^3 dx}{e^x - 1} = \frac{\pi^4}{15}$:
$$u(T) = \left( \frac{8\pi^5 k_B^4}{15 c^3 h^3} \right) T^4 = a T^4$$
where $a = \frac{8\pi^5 k_B^4}{15 c^3 h^3} \approx 7.566 \times 10^{-16} \text{ J m}^{-3}\text{K}^{-4}$ is the radiation constant.

#### Emissive Power ($E$) & Stefan-Boltzmann Constant ($\sigma$)
$$E = \frac{c}{4} u(T) = \left( \frac{2\pi^5 k_B^4}{15 c^2 h^3} \right) T^4 = \sigma T^4$$

$$\sigma = \frac{c a}{4} \approx 5.67 \times 10^{-8} \text{ W m}^{-2}\text{K}^{-4}$$

---

### 7.6 Derivation of Wien's Displacement Law

To find the wavelength $\lambda_{max}$ corresponding to peak spectral energy density:
$$\frac{d u(\lambda)}{d\lambda} = 0$$

$$\frac{d}{d\lambda} \left[ \lambda^{-5} \left( e^{\frac{hc}{\lambda k_B T}} - 1 \right)^{-1} \right] = 0$$

Let $x = \frac{hc}{\lambda k_B T}$:
$$-5 \lambda^{-6} (e^x - 1)^{-1} - \lambda^{-5} (e^x - 1)^{-2} e^x \left(-\frac{hc}{\lambda^2 k_B T}\right) = 0$$

$$-5 (e^x - 1) + x e^x = 0 \implies \frac{x e^x}{e^x - 1} = 5 \implies 5(1 - e^{-x}) = x$$

This transcendental equation has numerical solution $x \approx 4.965114$.

$$\frac{hc}{\lambda_{max} k_B T} = 4.965114 \implies \lambda_{max} T = \frac{hc}{4.965114 \, k_B} \equiv b$$

$$b \approx 2.898 \times 10^{-3} \text{ m}\cdot\text{K}$$

---

### 7.7 Complete Thermodynamics of a Photon Gas

1. **Internal Energy:** $U(T,V) = V u(T) = a V T^4$
2. **Grand Potential / Helmholtz Free Energy:**
   $$F = -k_B T \ln \mathcal{Z} = k_B T V \int_0^\infty \ln(1 - e^{-\beta h\nu}) \frac{8\pi \nu^2}{c^3} d\nu = -\frac{1}{3} a V T^4 = -\frac{1}{3} U$$
3. **Radiation Pressure:**
   $$P = -\left(\frac{\partial F}{\partial V}\right)_T = \frac{1}{3} a T^4 = \frac{1}{3} \frac{U}{V}$$
4. **Entropy:**
   $$S = -\left(\frac{\partial F}{\partial T}\right)_V = \frac{4}{3} a V T^3 = \frac{4}{3} \frac{U}{T}$$
5. **Heat Capacity:**
   $$C_v = \left(\frac{\partial U}{\partial T}\right)_V = 4 a V T^3$$
6. **Reversible Adiabatic Expansion:**
   $$S = \text{constant} \implies V T^3 = \text{constant}$$
   Using $P \propto T^4$:
   $$P V^{4/3} = \text{constant} \implies \gamma_{photon} = \frac{4}{3}$$

---

## Section 8: Formula Sheet & Exam-Oriented Problem-Solving Guide

### 8.1 Key CSIR NET Formulas

1. **Thermodynamic Relations & Coefficients:**
   * $C_p - C_v = \frac{T V \alpha^2}{\kappa_T}$
   * $\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H = \frac{V}{C_p}(\alpha T - 1)$
   * Adiabatic lapse rate / process: $T V^{\gamma-1} = \text{const}, P^{1-\gamma}T^\gamma = \text{const}$.

2. **Phase Transitions & Scaling:**
   * Clausius-Clapeyron: $\frac{dP}{dT} = \frac{L}{T \Delta V}$
   * Integrated Clausius-Clapeyron (ideal gas vapor): $P(T) = P_0 e^{-\frac{L}{R T}}$
   * Ehrenfest Second Order: $\frac{dP}{dT} = \frac{\Delta C_p}{T V \Delta \alpha} = \frac{\Delta \alpha}{\Delta \kappa_T}$

3. **Phase Space & Density of States:**
   * Number of states in $d$-dim with $\epsilon \propto p^s$: $g(\epsilon) \propto V_d \, \epsilon^{\frac{d}{s}-1}$
   * Ideal Gas canonical partition function: $Z_N = \frac{V^N}{N! \lambda_{dB}^{3N}}$, where $\lambda_{dB} = \sqrt{\frac{h^2}{2\pi m k_B T}}$

4. **Quantum Gases Core Relations:**
   * **Bosons (BEC in 3D):** $T_c = \frac{h^2}{2\pi m k_B} \left( \frac{n}{2.612} \right)^{2/3}$, $N_0 = N\left[1 - (T/T_c)^{3/2}\right]$
   * **Fermions (3D Non-relativistic):**
     * $E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$
     * $E_0 = \frac{3}{5} N E_F$, $P_0 = \frac{2}{5} n E_F$
     * $C_v^{elec} = \frac{\pi^2}{2} N k_B \left(\frac{T}{T_F}\right)$

5. **Blackbody Radiation:**
   * Spectral density: $u(\nu) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_B T}-1} d\nu$
   * Total energy: $U = a V T^4$, Pressure: $P = \frac{1}{3} u = \frac{1}{3} a T^4$
   * Stefan's Law: $E = \sigma T^4$, Wien's Law: $\lambda_{max} T = b$

---

### 8.2 Standard CSIR NET Problem Patterns & Quick Solvers

#### Pattern 1: $N$-Harmonic Oscillators in Canonical Ensemble
* 1D Classical Harmonic Oscillator: $H = \frac{p^2}{2m} + \frac{1}{2} m \omega^2 q^2$
  $$Z_1 = \frac{1}{h} \int_{-\infty}^\infty e^{-\beta \frac{p^2}{2m}} dp \int_{-\infty}^\infty e^{-\beta \frac{m\omega^2 q^2}{2}} dq = \frac{1}{h} \sqrt{\frac{2\pi m}{\beta}} \sqrt{\frac{2\pi}{\beta m \omega^2}} = \frac{1}{\beta \hbar \omega} = \frac{k_B T}{\hbar \omega}$$
  $$U = N k_B T, \quad C_v = N k_B$$
* 1D Quantum Harmonic Oscillator: $E_n = \left(n + \frac{1}{2}\right)\hbar \omega$
  $$Z_1 = \sum_{n=0}^\infty e^{-\beta \hbar \omega (n + 1/2)} = \frac{e^{-\frac{1}{2}\beta \hbar \omega}}{1 - e^{-\beta \hbar \omega}} = \frac{1}{2 \sinh\left(\frac{\beta \hbar \omega}{2}\right)}$$
  $$U = N \hbar \omega \left[ \frac{1}{2} + \frac{1}{e^{\beta \hbar \omega} - 1} \right]$$

#### Pattern 2: Paramagnetic System (Spin 1/2)
* Magnetic moment $\mu_0$, field $B$, energy $E = \mp \mu_0 B$.
  $$Z_1 = e^{\beta \mu_0 B} + e^{-\beta \mu_0 B} = 2 \cosh(\beta \mu_0 B)$$
  $$\text{Magnetization } M = N \mu_0 \tanh(\beta \mu_0 B)$$
  * High Temperature ($\beta \mu_0 B \ll 1$): $M \approx \frac{N \mu_0^2 B}{k_B T}$ (Curie's Law: $\chi \propto 1/T$).

#### Pattern 3: Dimensional Dependence of Density of States ($g(\epsilon)$) & Thermal Properties
To quickly find temperature scaling of heat capacity $C_v$ at low temperatures:
* If $g(\epsilon) \propto \epsilon^x$:
  * Internal Energy $U(T) \propto \int \epsilon \cdot g(\epsilon) f(\epsilon) d\epsilon \propto T^{x+2}$
  * Heat capacity $C_v = \frac{\partial U}{\partial T} \propto T^{x+1}$
* *Examples:*
  * Photons in 3D ($x=2 \implies g(\epsilon) \propto \epsilon^2$): $C_v \propto T^3$ (Debye $T^3$ law).
  * Photons in $d$-dimensions: $C_v \propto T^d$.
  * Phonons in 2D graphene ($x=1$): $C_v \propto T^2$.
