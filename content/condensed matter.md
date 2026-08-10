# Comprehensive Course Notes: Solid State Physics / Condensed Matter Physics

---

# Module 1: Crystal Structure & Crystallography

## 1.1 Fundamental Definitions

Solid State Physics investigates the structural, thermal, electrical, and magnetic properties of condensed matter. Solids are broadly classified into two categories based on atomic arrangement:
1. **Crystalline Solids:** Long-range periodic arrangement of atoms/molecules.
2. **Amorphous Solids:** Short-range order without long-range translational periodicity.

```
   CRYSTAL STRUCTURE  =  LATTICE  +  BASIS
```

*   **Lattice:** An infinite 3D array of mathematical points in space where every lattice point has identical surroundings.
*   **Basis (Motif):** An atom, ion, or group of atoms attached to every lattice point.
*   **Unit Cell:** The smallest volume element that, when translated repeatedly by the primitive translation vectors along the crystal axes, fills space without gaps or overlaps.
*   **Primitive Cell:** A minimum-volume unit cell that contains exactly **one lattice point** ($N_{\text{eff}} = 1$).

### Translation Vector
Any lattice point in a 3D crystal can be located relative to an origin using a translational vector $\vec{R}$:
$$\vec{R} = n_1 \vec{a} + n_2 \vec{b} + n_3 \vec{c}$$
where $n_1, n_2, n_3 \in \mathbb{Z}$ and $\vec{a}, \vec{b}, \vec{c}$ are the primitive translation vectors.

---

## 1.2 Crystal Systems and Bravais Lattices

### Two-Dimensional (2D) Lattices
In 2D space, there are **4 Crystal Systems** and **5 Bravais Lattices**:

| System | Lattice Type | Translation Vector Conditions | Angle $\gamma$ |
| :--- | :--- | :--- | :--- |
| **Oblique** | Oblique Primitive | $a \neq b$ | $\gamma \neq 90^\circ$ |
| **Rectangular** | Rectangular Primitive ($p$) | $a \neq b$ | $\gamma = 90^\circ$ |
| | Rectangular Centered ($c$) | $a \neq b$ | $\gamma = 90^\circ$ |
| **Square** | Square Primitive | $a = b$ | $\gamma = 90^\circ$ |
| **Hexagonal** | Hexagonal Primitive | $a = b$ | $\gamma = 120^\circ$ |

```
2D Bravais Lattices:
  ●---●     ●---●       ●---●         ●---●       ●---●
  |   |     | ● |      /   /         /     \     /   /
  ●---●     ●---●     ●---●         ●   ●   ●   ●---●
  Square   Rect.     Oblique       \     /  Hexagonal
          Centered                  ●---●  (γ=120°)
```

---

### Three-Dimensional (3D) Lattices
In 3D space, there are **7 Crystal Systems** and **14 Bravais Lattices**.

| Crystal System | Axial Lengths | Interaxial Angles | Bravais Lattices ($P, I, F, C$) | Total |
| :--- | :--- | :--- | :--- | :--- |
| **Cubic** | $a = b = c$ | $\alpha = \beta = \gamma = 90^\circ$ | $P, I, F$ | 3 |
| **Tetragonal** | $a = b \neq c$ | $\alpha = \beta = \gamma = 90^\circ$ | $P, I$ | 2 |
| **Orthorhombic** | $a \neq b \neq c$ | $\alpha = \beta = \gamma = 90^\circ$ | $P, I, F, C$ | 4 |
| **Monoclinic** | $a \neq b \neq c$ | $\alpha = \gamma = 90^\circ \neq \beta$ | $P, C$ | 2 |
| **Triclinic** | $a \neq b \neq c$ | $\alpha \neq \beta \neq \gamma \neq 90^\circ$ | $P$ | 1 |
| **Trigonal (Rhombohedral)**| $a = b = c$ | $\alpha = \beta = \gamma \neq 90^\circ (<120^\circ)$| $P$ | 1 |
| **Hexagonal** | $a = b \neq c$ | $\alpha = \beta = 90^\circ, \gamma = 120^\circ$| $P$ | 1 |
| **Total** | | | | **14** |

---

## 1.3 Effective Number of Atoms ($N_{\text{eff}}$)

For a conventional 3D cubic unit cell, the contribution of atoms at different sites is given by:

$$N_{\text{eff}} = \frac{N_c}{8} + \frac{N_f}{2} + \frac{N_e}{4} + N_i$$

*   $N_c$: Number of corner atoms (each shared by 8 adjacent unit cells $\implies$ contribution $= 1/8$).
*   $N_f$: Number of face-centered atoms (each shared by 2 unit cells $\implies$ contribution $= 1/2$).
*   $N_e$: Number of edge-centered atoms (each shared by 4 unit cells $\implies$ contribution $= 1/4$).
*   $N_i$: Number of interior/body-centered atoms (completely inside $\implies$ contribution $= 1$).

---

## 1.4 Comprehensive Analysis of Cubic Lattices

```
       SC                      BCC                      FCC
    ●-------●               ●-------●                ●---●---●
   /|      /|              /|      /|               /|  ●   /|
  ●-+-----● |             ●-+-----● |              ●-+-----● |
  | |     | |             | |  ●  | |              |●|  ●  |●|
  | ●-----|-●             | ●-----|-●              ●-|-----● |
  |/      |/              |/      /                |/   ●  |/
  ●-------●               ●-------●                ●---●---●
```

### 1. Simple Cubic (SC) Structure
*   **Atom Locations:** 8 corners only.
*   **Effective Number of Atoms ($N_{\text{eff}}$):**
    $$N_{\text{eff}} = \frac{8}{8} = 1 \quad \text{(Primitive Cell)}$$
*   **Atomic Radius ($r$):** Atoms touch along the cube edge ($a = 2r \implies r = a/2$).
*   **Coordination Number (CN):** Number of nearest neighbors $= 6$ at distance $a$.
    *   $1^{\text{st}}$ Nearest Neighbor: $a$, $\text{CN} = 6$
    *   $2^{\text{nd}}$ Nearest Neighbor: $\sqrt{2}a$, $\text{CN} = 12$
    *   $3^{\text{rd}}$ Nearest Neighbor: $\sqrt{3}a$, $\text{CN} = 8$
*   **Atomic Packing Fraction (APF):**
    $$\text{APF} = \frac{N_{\text{eff}} \cdot V_{\text{atom}}}{V_{\text{unit cell}}} = \frac{1 \cdot \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{4}{3}\pi \left(\frac{a}{2}\right)^3}{a^3} = \frac{\pi}{6} \approx 0.52 \quad (52\%)$$
*   **Void Space (Unoccupied Volume):**
    $$100\% - 52\% = 48\%$$

---

### 2. Body-Centered Cubic (BCC) Structure
*   **Atom Locations:** 8 corners + 1 body center.
*   **Effective Number of Atoms ($N_{\text{eff}}$):**
    $$N_{\text{eff}} = \frac{8}{8} + 1 = 2 \quad \text{(Non-Primitive Cell)}$$
*   **Atomic Radius ($r$):** Atoms touch along the body diagonal ($\sqrt{3}a = 4r \implies r = \frac{\sqrt{3}a}{4}$).
*   **Coordination Number & Neighbors:**
    *   $1^{\text{st}}$ Nearest Neighbor: $\frac{\sqrt{3}a}{2}$, $\text{CN} = 8$
    *   $2^{\text{nd}}$ Nearest Neighbor: $a$, $\text{CN} = 6$
    *   $3^{\text{rd}}$ Nearest Neighbor: $\sqrt{2}a$, $\text{CN} = 12$
*   **Atomic Packing Fraction (APF):**
    $$\text{APF} = \frac{2 \cdot \frac{4}{3}\pi \left(\frac{\sqrt{3}a}{4}\right)^3}{a^3} = \frac{\sqrt{3}\pi}{8} \approx 0.68 \quad (68\%)$$

---

### 3. Face-Centered Cubic (FCC) Structure
*   **Atom Locations:** 8 corners + 6 face centers.
*   **Effective Number of Atoms ($N_{\text{eff}}$):**
    $$N_{\text{eff}} = \frac{8}{8} + \frac{6}{2} = 1 + 3 = 4$$
*   **Atomic Radius ($r$):** Atoms touch along the face diagonal ($\sqrt{2}a = 4r \implies r = \frac{\sqrt{2}a}{4} = \frac{a}{2\sqrt{2}}$).
*   **Coordination Number & Neighbors:**
    *   $1^{\text{st}}$ Nearest Neighbor: $\frac{a}{\sqrt{2}}$, $\text{CN} = 12$
    *   $2^{\text{nd}}$ Nearest Neighbor: $a$, $\text{CN} = 6$
    *   $3^{\text{rd}}$ Nearest Neighbor: $\sqrt{\frac{3}{2}}a = \sqrt{1.5}a$, $\text{CN} = 24$
*   **Atomic Packing Fraction (APF):**
    $$\text{APF} = \frac{4 \cdot \frac{4}{3}\pi \left(\frac{a}{2\sqrt{2}}\right)^3}{a^3} = \frac{\pi}{3\sqrt{2}} \approx 0.74 \quad (74\%)$$

---

## 1.5 Hexagonal Close-Packed (HCP) Structure

*   **Geometry:** Hexagonal base with 6 corner atoms per face, 1 center atom per face, and 3 full atoms in the middle layer.
*   **Effective Number of Atoms ($N_{\text{eff}}$):**
    $$N_{\text{eff}} = \underbrace{2 \times \left(6 \times \frac{1}{6}\right)}_{\text{top/bottom corners}} + \underbrace{2 \times \left(1 \times \frac{1}{2}\right)}_{\text{face centers}} + \underbrace{3}_{\text{interior}} = 2 + 1 + 3 = 6$$
*   **Ideal $c/a$ Ratio Derivation:**
    $$\frac{c}{a} = \sqrt{\frac{8}{3}} \approx 1.633$$
*   **Coordination Number (CN):** 12 (6 in-plane + 3 above + 3 below).
*   **Atomic Radius ($r$):** $a = 2r \implies r = a/2$.
*   **Volume of Unit Cell:**
    $$V_{\text{cell}} = \text{Base Area} \times \text{Height} = \left(6 \times \frac{\sqrt{3}}{4}a^2\right) \times c = \frac{3\sqrt{3}}{2}a^2c = 3\sqrt{2}a^3 \quad \left(\text{substituting } c = a\sqrt{\frac{8}{3}}\right)$$
*   **Atomic Packing Fraction (APF):**
    $$\text{APF} = \frac{6 \cdot \frac{4}{3}\pi r^3}{\frac{3\sqrt{3}}{2}a^2c} = \frac{\pi}{3\sqrt{2}} \approx 0.74 \quad (74\%)$$

---

## 1.6 Diamond Cubic (DC) Structure

The Diamond structure consists of an **FCC lattice with a two-atom basis** positioned at $(0,0,0)$ and $\left(\frac{a}{4}, \frac{a}{4}, \frac{a}{4}\right)$. Alternatively, it can be viewed as two interpenetrating FCC sublattices displaced along the body diagonal by $1/4$ of its length.

*   **Effective Number of Atoms ($N_{\text{eff}}$):**
    $$N_{\text{eff}} = \underbrace{4}_{\text{standard FCC}} + \underbrace{4}_{\text{tetrahedral voids}} = 8$$
*   **Atomic Radius ($r$):** Nearest neighbor distance along the body diagonal is $\frac{\sqrt{3}a}{4} = 2r$:
    $$8r = \sqrt{3}a \implies r = \frac{\sqrt{3}a}{8}$$
*   **Coordination Number:** $\text{CN} = 4$ (Tetrahedral coordination).
*   **Nearest Neighbor Distances:**
    *   $1^{\text{st}}$ NN distance: $\frac{\sqrt{3}a}{4}$, $\text{CN} = 4$
    *   $2^{\text{nd}}$ NN distance: $\frac{a}{\sqrt{2}}$, $\text{CN} = 12$
*   **Atomic Packing Fraction (APF):**
    $$\text{APF} = \frac{8 \cdot \frac{4}{3}\pi \left(\frac{\sqrt{3}a}{8}\right)^3}{a^3} = \frac{\sqrt{3}\pi}{16} \approx 0.34 \quad (34\%)$$

---

## 1.7 2D Graphene Layer

Graphene is a single 2D planar sheet of $sp^2$-bonded carbon atoms arranged in a honeycomb lattice.
*   **Lattice Type:** Triangular Bravais lattice with a 2-atom basis.
*   **Effective Atoms per Unit Cell:** $N_{\text{eff}} = 6 \times \frac{1}{3} + 1 = 2$ (within the standard primitive rhombus) or $N_{\text{eff}} = 6$ for the full hexagonal macro-cell.
*   **Nearest Neighbor Distance:** $r_{C-C} = \frac{a}{\sqrt{3}}$, where $a$ is the lattice parameter.
*   **Relations:** $2r = \frac{a}{\sqrt{3}}$, $\text{CN} = 3$ ($1^{\text{st}}$ NN at $a/\sqrt{3}$), $\text{CN} = 6$ ($2^{\text{nd}}$ NN at $a$).
*   **Unit Cell Area:**
    $$\text{Area} = \frac{3\sqrt{3}}{2}a^2$$
*   **2D Packing Fraction:**
    $$\text{APF}_{\text{2D}} = \frac{\pi}{3\sqrt{3}} \approx 0.604 \quad (60.4\%)$$

---

## 1.8 Mass Density ($\rho$) and Lattice Parameter Relation

If $M$ is the molar mass ($\text{g/mol}$ or $\text{kg/mol}$), $N_A$ is Avogadro's number ($6.022 \times 10^{23} \text{ mol}^{-1}$), $V_{\text{cell}}$ is the unit cell volume, and $n$ ($N_{\text{eff}}$) is the effective number of atoms:

$$\rho = \frac{\text{Mass of Unit Cell}}{\text{Volume of Unit Cell}} = \frac{n \cdot M}{N_A \cdot V_{\text{cell}}}$$

For a cubic system where $V_{\text{cell}} = a^3$:
$$a = \left( \frac{n M}{N_A \rho} \right)^{1/3}$$

> **Useful Calculation Factor:**
> $$\frac{1}{N_A} \approx 1.66 \times 10^{-24} \text{ g} = 1.66 \times 10^{-27} \text{ kg}$$

---

## 1.9 Miller Indices, Interplanar Spacing ($d_{hkl}$), and Angles

### Miller Indices $(hkl)$
Miller indices define the orientation of a plane in a crystal lattice:
1. Determine the intercepts of the plane along axes $\vec{a}, \vec{b}, \vec{c}$ as multiples of unit cell dimensions: $OA, OB, OC$.
2. Take the reciprocals: $\frac{a}{OA}, \frac{b}{OB}, \frac{c}{OC}$.
3. Reduce to the smallest integers $h, k, l$:
   $$h : k : l = \frac{a}{OA} : \frac{b}{OB} : \frac{c}{OC}$$

```
        z
        |
        ● (0,0,c/l)
       / \
      /   \
     /     \
    ●-------●---- y (0,b/k,0)
   / (a/h,0,0)
  x
```

### Interplanar Spacing ($d_{hkl}$)

#### General Orthorhombic System ($a \neq b \neq c$):
$$\frac{1}{d_{hkl}^2} = \frac{h^2}{a^2} + \frac{k^2}{b^2} + \frac{l^2}{c^2}$$

#### Cubic System ($a = b = c$):
$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

#### Hexagonal Close Packed (HCP) System:
$$\frac{1}{d_{hkl}^2} = \frac{4}{3}\left(\frac{h^2 + hk + k^2}{a^2}\right) + \frac{l^2}{c^2}$$

---

### Interplanar Spacing Comparison for Cubic Planes

| Plane $(hkl)$ | Simple Cubic (SC) | Body-Centered Cubic (BCC) | Face-Centered Cubic (FCC) |
| :---: | :---: | :---: | :---: |
| **$d_{100}$** | $a$ | $\frac{a}{2}$ | $\frac{a}{2}$ |
| **$d_{110}$** | $\frac{a}{\sqrt{2}}$ | $\frac{a}{\sqrt{2}}$ | $\frac{a}{2\sqrt{2}}$ |
| **$d_{111}$** | $\frac{a}{\sqrt{3}}$ | $\frac{a}{2\sqrt{3}}$ | $\frac{a}{\sqrt{3}}$ |

*Note on BCC and FCC:* Due to systemic absences (destructive interference from interior/face-centered planes), $d_{100}$ in BCC is halved to $a/2$ because the $(200)$ reflection is the first allowed order.

---

### Angle Between Two Planes $(h_1 k_1 l_1)$ and $(h_2 k_2 l_2)$ in Cubic Systems

$$\cos\theta = \frac{h_1 h_2 + k_1 k_2 + l_1 l_2}{\sqrt{h_1^2 + k_1^2 + l_1^2} \sqrt{h_2^2 + k_2^2 + l_2^2}}$$

---

## Worked Example 1.1: BCC Parameter and Density
**Problem:** Copper (FCC) has an atomic radius $r = 0.1278 \text{ nm}$ and molar mass $M = 63.55 \text{ g/mol}$. Calculate its lattice parameter $a$ and density $\rho$.

**Solution:**
1. For FCC, $4r = \sqrt{2}a$:
   $$a = \frac{4r}{\sqrt{2}} = 2\sqrt{2} (0.1278 \times 10^{-9} \text{ m}) = 0.3615 \text{ nm} = 3.615 \times 10^{-10} \text{ m}$$
2. Density formula ($n = 4$ for FCC):
   $$\rho = \frac{n M}{N_A a^3} = \frac{4 \times (63.55 \times 10^{-3} \text{ kg/mol})}{(6.022 \times 10^{23} \text{ mol}^{-1}) \times (3.615 \times 10^{-10} \text{ m})^3}$$
   $$\rho = \frac{0.2542}{6.022 \times 10^{23} \times 4.722 \times 10^{-29}} = \frac{0.2542}{2.843 \times 10^{-5}} \approx 8940 \text{ kg/m}^3$$

---

# Module 2: Reciprocal Lattice & X-Ray Diffraction

## 2.1 Concept of the Reciprocal Lattice

Every direct crystal lattice has a corresponding **Reciprocal Lattice**. A plane $(hkl)$ in direct space with interplanar spacing $d_{hkl}$ is represented by a single point in reciprocal space situated at a distance $G_{hkl} = \frac{2\pi}{d_{hkl}}$ along the normal to that plane.

### Primitive Reciprocal Vector Definitions
If $\vec{a}, \vec{b}, \vec{c}$ are primitive translation vectors of the direct lattice, the reciprocal primitive vectors $\vec{A}, \vec{B}, \vec{C}$ (also written as $\vec{a}^*, \vec{b}^*, \vec{c}^*$) are defined by:

$$\vec{A} = 2\pi \frac{\vec{b} \times \vec{c}}{\vec{a} \cdot (\vec{b} \times \vec{c})}, \quad \vec{B} = 2\pi \frac{\vec{c} \times \vec{a}}{\vec{a} \cdot (\vec{b} \times \vec{c})}, \quad \vec{C} = 2\pi \frac{\vec{a} \times \vec{b}}{\vec{a} \cdot (\vec{b} \times \vec{c})}$$

### Orthogonality Relations
$$\vec{a}_i \cdot \vec{b}_j = 2\pi \delta_{ij} \implies \vec{a} \cdot \vec{A} = 2\pi, \quad \vec{a} \cdot \vec{B} = 0, \quad \text{etc.}$$

---

## 2.2 Reciprocal Lattices of Standard Cubic Systems

### 1. Simple Cubic (SC)
*   Direct primitive vectors: $\vec{a} = a\hat{i}, \quad \vec{b} = a\hat{j}, \quad \vec{c} = a\hat{k}$
*   Direct Volume: $V_D = \vec{a} \cdot (\vec{b} \times \vec{c}) = a^3$
*   Reciprocal Primitive Vectors:
    $$\vec{A} = \frac{2\pi}{a}\hat{i}, \quad \vec{B} = \frac{2\pi}{a}\hat{j}, \quad \vec{C} = \frac{2\pi}{a}\hat{k}$$
*   **Result:** The reciprocal of an SC lattice is another **SC lattice** with lattice constant $a^* = \frac{2\pi}{a}$.

---

### 2. Body-Centered Cubic (BCC)
*   Direct primitive vectors:
    $$\vec{a}_1 = \frac{a}{2}(\hat{i} + \hat{j} - \hat{k}), \quad \vec{a}_2 = \frac{a}{2}(-\hat{i} + \hat{j} + \hat{k}), \quad \vec{a}_3 = \frac{a}{2}(\hat{i} - \hat{j} + \hat{k})$$
*   Direct Volume: $V_D = \frac{a^3}{2}$
*   Reciprocal Primitive Vectors:
    $$\vec{b}_1 = \frac{2\pi}{a}(\hat{i} + \hat{j}), \quad \vec{b}_2 = \frac{2\pi}{a}(\hat{j} + \hat{k}), \quad \vec{b}_3 = \frac{2\pi}{a}(\hat{k} + \hat{i})$$
*   **Result:** The reciprocal of a BCC lattice is an **FCC lattice** with conventional unit cell side $a^* = \frac{4\pi}{a}$.

---

### 3. Face-Centered Cubic (FCC)
*   Direct primitive vectors:
    $$\vec{a}_1 = \frac{a}{2}(\hat{i} + \hat{j}), \quad \vec{a}_2 = \frac{a}{2}(\hat{j} + \hat{k}), \quad \vec{a}_3 = \frac{a}{2}(\hat{k} + \hat{i})$$
*   Direct Volume: $V_D = \frac{a^3}{4}$
*   Reciprocal Primitive Vectors:
    $$\vec{b}_1 = \frac{2\pi}{a}(\hat{i} + \hat{j} - \hat{k}), \quad \vec{b}_2 = \frac{2\pi}{a}(-\hat{i} + \hat{j} + \hat{k}), \quad \vec{b}_3 = \frac{2\pi}{a}(\hat{i} - \hat{j} + \hat{k})$$
*   **Result:** The reciprocal of an FCC lattice is a **BCC lattice** with conventional unit cell side $a^* = \frac{4\pi}{a}$ (primitive reciprocal side $2\pi/a$).

---

## 2.3 Spatial Relations Between Direct and Reciprocal Space

### Volume Relation
$$V_R = \vec{A} \cdot (\vec{B} \times \vec{C}) = \frac{(2\pi)^3}{V_D}$$

### 2D Area Relation
$$A_R = \frac{\pi^2}{A_D}$$

---

## 2.4 Bragg's Law of X-Ray Diffraction

### 1. Direct Space Formulation
X-rays reflecting constructively off parallel lattice planes satisfy:

$$2d \sin\theta = n\lambda$$

*   $d$: Interplanar spacing ($d_{hkl}$).
*   $\theta$: Glancing angle (Bragg angle) between incident beam and lattice plane.
*   $\lambda$: X-ray wavelength.
*   $n$: Order of reflection ($n = 1, 2, 3, \dots$).

```
 Incident Beam             Reflected Beam
      \                       /
       \   θ             θ   /
  ======\===================/====== Plane 1
         \ |             | /
          \|←- d sin θ -→|/
  =========\============/========== Plane 2
             Path Diff = 2d sin θ
```

---

### 2. Reciprocal Space Formulation (Ewald Construction)
Let $\vec{k}$ be the incident wavevector ($|\vec{k}| = 2\pi/\lambda$) and $\vec{k}'$ be the diffracted wavevector ($|\vec{k}'| = 2\pi/\lambda$).

```
               Ewald Sphere
                  /  |  \
                 /   |   \  G
   k (incident) /    |    v
   ------------>●----+---->● (Reciprocal Lattice Point)
                \    |   /
                 \   |  / k' (diffracted)
                  \  | /
```

Elastic scattering condition: $|\vec{k}'| = |\vec{k}|$
$$\vec{k}' = \vec{k} + \vec{G}$$
$$\implies |\vec{k}'|^2 = |\vec{k} + \vec{G}|^2 = k^2 + 2\vec{k}\cdot\vec{G} + G^2$$
Since $|\vec{k}'|^2 = k^2$:

$$2\vec{k} \cdot \vec{G} + G^2 = 0 \quad \text{or} \quad \vec{k} \cdot \vec{G} = -\frac{G^2}{2}$$

This is the **Bragg condition in reciprocal space**.

---

## 2.5 Structure Factor & Selection Rules for Diffraction

The Geometric Structure Factor $S_{hkl}$ determines the intensity of diffracted beams:
$$S_{hkl} = \sum_{j=1}^{N_{\text{eff}}} f_j e^{-2\pi i (h x_j + k y_j + l z_j)}$$
where $(x_j, y_j, z_j)$ are fractional coordinates of atoms in the unit cell and $f_j$ is the atomic form factor. Reflection occurs only when $S_{hkl} \neq 0$.

### Selection Rules Summary

| Crystal Structure | Condition for $S_{hkl} \neq 0$ (Allowed Reflections) | Examples of Allowed Planes | First Allowed Reflection |
| :--- | :--- | :--- | :--- |
| **Simple Cubic (SC)** | All combinations of $h, k, l$ | (100), (110), (111), (200), (210)... | (100) |
| **Body-Centered (BCC)** | $h + k + l = \text{even integer}$ | (110), (200), (211), (220), (310)... | (110) |
| **Face-Centered (FCC)** | $h, k, l$ are all odd or all even | (111), (200), (220), (311), (222)... | (111) |
| **Diamond Cubic (DC)** | All $h,k,l$ odd OR all even with $h+k+l = 4n$ | (111), (220), (311), (400), (331)... | (111) |
| **HCP** | $h + 2k = 3n$ with $l = \text{even}$; or $h + 2k \neq 3n$ with any $l$ | (100), (002), (101), (102)... | (100) |

---

# Module 3: Lattice Vibrations & Thermal Properties

## 3.1 1D Monoatomic Lattice Vibrations

Consider a 1D chain of identical atoms of mass $m$ separated by lattice constant $a$, connected by springs of force constant $C$.

```
  ---(m)---C---(m)---C---(m)---C---(m)---
     u_{n-1}   u_n      u_{n+1}
```

### Equation of Motion
$$m \frac{d^2 u_n}{dt^2} = C (u_{n+1} + u_{n-1} - 2u_n)$$

### Solution
Assuming travelling wave solutions $u_n = u_0 e^{i(kna - \omega t)}$:

$$\omega(k) = \sqrt{\frac{4C}{m}} \left| \sin\left(\frac{ka}{2}\right) \right| = \omega_{\text{max}} \left| \sin\left(\frac{ka}{2}\right) \right|$$

where $\omega_{\text{max}} = \sqrt{\frac{4C}{m}}$.

```
   ω
   ^
ω_max |         /-------\
      |        /         \
      |       /           \
      +------/-------------\-----> k
           -π/a      0     π/a
```

### Key Limits:
1.  **Low $k$ (Long Wavelength Limit, $ka \ll 1$):**
    $$\sin\left(\frac{ka}{2}\right) \approx \frac{ka}{2} \implies \omega \approx a \sqrt{\frac{C}{m}} \cdot k$$
    *   Phase Velocity: $v_p = \frac{\omega}{k} = a\sqrt{\frac{C}{m}}$
    *   Group Velocity: $v_g = \frac{d\omega}{dk} = a\sqrt{\frac{C}{m}}$
    *   $v_p = v_g \implies$ **Non-dispersive behavior (Acoustic Continuum).**

2.  **Brillouin Zone Boundary ($k = \pm \pi/a$):**
    $$\omega = \omega_{\text{max}} = \sqrt{\frac{4C}{m}}$$
    $$v_g = \frac{d\omega}{dk} = \frac{a}{2} \sqrt{\frac{4C}{m}} \cos\left(\frac{\pi}{2}\right) = 0$$
    *   Zero group velocity implies **standing wave formation** due to Bragg reflection at the zone boundaries.

---

## 3.2 1D Diatomic Lattice Vibrations

Consider a 1D chain containing two different atoms of masses $m_1$ and $m_2$ ($m_1 > m_2$) separated by distance $a$.

```
  ---(m1)---C---(m2)---C---(m1)---C---(m2)---
     u_n       v_n      u_{n+1}   v_{n+1}
```

### Dispersion Relation
$$\omega^2 = C \left( \frac{1}{m_1} + \frac{1}{m_2} \right) \pm C \sqrt{\left( \frac{1}{m_1} + \frac{1}{m_2} \right)^2 - \frac{4 \sin^2(ka/2)}{m_1 m_2}}$$

```
   ω
   ^
   |        /-----------\   <-- Optical Branch
ω_max2 |       /             \
ω_min2 |------+---------------+--
       |      | Forbidden Band| (Band Gap Eg)
ω_max1 |------+---------------+--
       |     /                 \  <-- Acoustic Branch
       +----+-------------------+-----> k
          -π/a        0        π/a
```

### Key Frequencies and Features:
1.  **Optical Branch ($+$ sign):**
    *   At $k = 0$: $\omega = \sqrt{2C \left( \frac{1}{m_1} + \frac{1}{m_2} \right)}$
    *   At $k = \pi/a$: $\omega = \sqrt{\frac{2C}{m_2}}$ (vibration of lighter mass $m_2$)
2.  **Acoustic Branch ($-$ sign):**
    *   At $k = 0$: $\omega = 0$
    *   At $k = \pi/a$: $\omega = \sqrt{\frac{2C}{m_1}}$ (vibration of heavier mass $m_1$)
3.  **Frequency Band Gap ($E_g$):**
    No propagating wave modes exist in the frequency region:
    $$\Delta \omega = \sqrt{\frac{2C}{m_2}} - \sqrt{\frac{2C}{m_1}}$$

### Mode Counting Formula
For a crystal in $d$-dimensions with $p$ atoms per unit cell ($N_{\text{eff}} = p$):

*   **Total Modes per $k$-vector:** $d \cdot p$
*   **Acoustic Branches:** $d$
*   **Optical Branches:** $d(p - 1)$

---

## 3.3 Specific Heat Theories of Solids

Specific heat at constant volume:
$$C_v = \left( \frac{\partial U}{\partial T} \right)_v$$

### 1. Dulong-Petit Law (Classical Model)
*   Assumes atoms behave as independent 3D classical harmonic oscillators with average energy $\langle E \rangle = 3 k_B T$.
*   Total internal energy for $N_A$ atoms: $U = 3 N_A k_B T = 3 R T$.
*   Specific heat:
    $$C_v = \frac{\partial U}{\partial T} = 3R \approx 24.9 \text{ J/mol}\cdot\text{K}$$
*   **Failure:** Cannot explain the drop in $C_v$ to zero as $T \to 0 \text{ K}$.

---

### 2. Einstein Theory of Specific Heat (Quantum Model 1)
*   Assumes all $3N_A$ harmonic oscillators vibrate independently with the **same quantum frequency** $\omega_E$.
*   Average energy per oscillator: $\langle E \rangle = \frac{\hbar \omega_E}{e^{\hbar \omega_E / k_B T} - 1}$.
*   Specific Heat:
    $$C_v = 3R \left( \frac{\Theta_E}{T} \right)^2 \frac{e^{\Theta_E / T}}{\left( e^{\Theta_E / T} - 1 \right)^2}$$
    where $\Theta_E = \frac{\hbar \omega_E}{k_B}$ is the Einstein Temperature.

#### Limiting Cases:
*   **High $T$ ($T \gg \Theta_E$):** $C_v \to 3R$ (recovers Dulong-Petit Law).
*   **Low $T$ ($T \ll \Theta_E$):** $C_v \propto e^{-\Theta_E / T}$.
*   **Failure:** $C_v$ falls exponentially to zero at low $T$, whereas experimental data shows a slower power-law drop ($C_v \propto T^3$).

---

### 3. Debye Theory of Specific Heat (Quantum Model 2)
*   Considers coupled vibrations resulting in a continuous spectrum of sound waves up to a cutoff frequency $\omega_D$ (Debye Frequency).
*   Internal Energy in 3D:
    $$U = \int_0^{\omega_D} \frac{\hbar \omega}{e^{\hbar \omega / k_B T} - 1} g(\omega) d\omega$$
    where density of modes $g(\omega) = \frac{3V \omega^2}{2\pi^2 v_s^3}$.

#### Debye $T^3$ Law (3D Low-Temperature Limit):
When $T \ll \Theta_D$ ($\Theta_D = \frac{\hbar \omega_D}{k_B}$ is the Debye Temperature):

$$C_v = \frac{12\pi^4}{5} R \left( \frac{T}{\Theta_D} \right)^3 \implies C_v \propto T^3$$

#### Dimensionality Dependence of Specific Heat at Low $T$:
For a dispersion relation $\omega \propto k^n$ in $d$-dimensional space:

$$C_v \propto T^{d/n}$$

*   For standard phonons/phononic acoustic modes ($n = 1$, $\omega \propto k$):
    *   **3D lattice:** $C_v \propto T^3$
    *   **2D lattice (e.g., Graphene):** $C_v \propto T^2$
    *   **1D lattice (Nanowires):** $C_v \propto T^1$

---

## 3.4 Specific Heat Contributions in Metals

In metals, total low-temperature specific heat contains both electronic and phononic (lattice) components:

$$C_v = C_{\text{el}} + C_{\text{ph}} = A T + B T^3$$

*   Electronic coefficient: $A = \gamma = \frac{\pi^2 N_A k_B^2}{2 E_F} \propto \frac{1}{E_F}$
*   Lattice coefficient: $B = \frac{12\pi^4 N_A k_B}{5 \Theta_D^3} \propto \frac{1}{\Theta_D^3}$

```
   C_v / T
      ^
      |        / Slope = B
      |       /
      |      /
    A +----/-----------------> T^2
      0
```
Plotting $\frac{C_v}{T}$ versus $T^2$ yields a straight line with:
*   **Y-intercept:** $A$ (electronic contribution)
*   **Slope:** $B$ (lattice contribution)

---

# Module 4: Free Electron Theory & Density of States

## 4.1 Drude-Lorentz Classical Model

Assumes free conduction electrons move inside a metal as a classical gas, colliding with heavy stationary ions.

### Relaxation Time ($\tau$)
Average time between two consecutive collisions.

### Drift Velocity
$$v_d = \frac{e E \tau}{m}$$

### Electrical Conductivity ($\sigma$)
$$J = n e v_d = n e \left(\frac{e E \tau}{m}\right) = \left(\frac{n e^2 \tau}{m}\right) E \implies \sigma = \frac{n e^2 \tau}{m}$$

### Resistivity ($\rho$)
$$\rho = \frac{1}{\sigma} = \frac{m}{n e^2 \tau}$$

---

## 4.2 Density of States (DOS) - $D(E)$

Density of States $D(E)$ is the number of available quantum states per unit energy range at energy $E$.

### General Formula for Dispersion $\omega \propto k^n$ or $E \propto k^n$ in $d$-Dimensions:

$$D(E) \propto E^{\frac{d}{n} - 1}$$

### Free Electrons ($E = \frac{\hbar^2 k^2}{2m} \implies n = 2$):

| Dimension ($d$) | $D(E)$ Proportionality | Graph Shape |
| :---: | :---: | :---: |
| **1D** | $D(E) \propto E^{-1/2}$ | Hyperbolic Decrease |
| **2D** | $D(E) \propto E^0 = \text{Constant}$ | Step / Flat Line |
| **3D** | $D(E) \propto E^{1/2}$ | Parabolic Increase |

```
    1D DOS                   2D DOS                   3D DOS
  D(E)^                    D(E)^                    D(E)^
      | \                      |                        |      /---
      |  \                     |--------                |     /
      |   \___                 |                        |    /
      +--------> E             +--------> E             +--------> E
```

---

## 4.3 Key Fermi Parameters in 1D, 2D, and 3D

At $T = 0 \text{ K}$, electrons fill all lowest available energy states up to the **Fermi Energy ($E_F$)**.

```
                       1D                         2D                            3D
------------------------------------------------------------------------------------------------------
Carrier Conc.          n = N/L                    n = N/A                       n = N/V
(per unit extent)

Fermi Wavevector       k_F = (π/2) * n            k_F = (2π * n)^(1/2)          k_F = (3π² * n)^(1/3)
(k_F)

Fermi Energy           E_F = ħ²k_F² / 2m          E_F = ħ²k_F² / 2m             E_F = ħ²k_F² / 2m
(E_F)                  = (ħ²/2m)(πn/2)²           = (ħ²/2m)(2πn)                = (ħ²/2m)(3π²n)^(2/3)

Total Ground           E_total = (1/3) N E_F      E_total = (1/2) N E_F         E_total = (3/5) N E_F
State Energy (E_0)

Avg Energy per         <E> = E_F / 3              <E> = E_F / 2                 <E> = (3/5) E_F
Electron
```

### Associated Fermi Relations:
*   **Fermi Velocity:** $v_F = \frac{\hbar k_F}{m} = \sqrt{\frac{2E_F}{m}}$
*   **Fermi Momentum:** $p_F = \hbar k_F = m v_F$
*   **Fermi Temperature:** $T_F = \frac{E_F}{k_B}$

---

## 4.4 Wiedemann-Franz Law and Lorenz Number

The ratio of thermal conductivity ($K$) to electrical conductivity ($\sigma$) of a metal is directly proportional to absolute temperature $T$:

$$\frac{K}{\sigma T} = L \quad \text{(Lorenz Number)}$$

### Theoretical Value from Sommerfeld Free Electron Theory:
$$L = \frac{\pi^2}{3} \left( \frac{k_B}{e} \right)^2 \approx 2.44 \times 10^{-8} \text{ W}\cdot\Omega\cdot\text{K}^{-2}$$

---

# Module 5: Superconductivity

## 5.1 Basic Properties of Superconductors

Superconductivity is a state of matter characterized by zero electrical resistivity and expulsion of magnetic fields below a critical temperature $T_c$.

```
           Resistivity ρ vs Temperature T
      ρ ^
        |        Normal Metal Behavior
        |       /
        |      / 
        |     /  
        |----+   <-- Transition at T_c
        |    |
        +----+-------------> T
        0   T_c
```

1.  **Zero Electrical Resistance ($\rho = 0$):**
    $$\sigma \to \infty$$
2.  **Meissner Effect (Perfect Diamagnetism):**
    Inside a superconductor ($T < T_c, H < H_c$):
    $$\vec{B} = \mu_0 (\vec{H} + \vec{M}) = 0 \implies \vec{M} = -\vec{H}$$
    Magnetic susceptibility:
    $$\chi = \frac{M}{H} = -1 \quad \text{(Perfect Diamagnet)}$$

```
   T > T_c (Normal State)             T < T_c (Superconducting State)
     ~~~~~~~~~~~~~~~>                   ~~~~~~~~~~~~~~\
   ---|============|---               ---|==/=========\==|---
     ~~~~~~~~~~~~~~~>                    / |   B = 0   | \
   ---|============|---               ---|==\=========/==|---
     ~~~~~~~~~~~~~~~>                   ~~~~~~~~~~~~~~/
   Magnetic Lines Penetrate           Magnetic Lines Expelled
```

---

## 5.2 Critical Parameters

1.  **Critical Temperature ($T_c$):** Temperature below which a material becomes superconducting.
2.  **Critical Magnetic Field ($H_c(T)$):**
    $$H_c(T) = H_c(0) \left[ 1 - \left(\frac{T}{T_c}\right)^2 \right]$$
3.  **Silsbee's Effect / Critical Current Density ($J_c$):**
    The maximum current a superconductor can carry without destroying its superconducting state.

---

## 5.3 Type-I vs. Type-II Superconductors

```
   Type-I Superconductor                  Type-II Superconductor
   M ^                                    M ^
     |  Super-                              |  Super-  | Vortex | Normal
     |  conducting                          |  cond.   | State  | State
     |  /|                                  |  /|      | \      |
     | / |                                  | / |      |  \____ |
     |/  |                                  |/  |      |        |
     +---+------------> H                   +---+------+--------+----> H
    0   H_c                                0   H_c1   H_c2
```

| Property | Type-I (Soft) | Type-II (Hard) |
| :--- | :--- | :--- |
| **Transition** | Abrupt at single $H_c$ | Two critical fields ($H_{c1}, H_{c2}$) |
| **Meissner Effect** | Complete for $H < H_c$ | Complete for $H < H_{c1}$; Partial in Mixed State ($H_{c1} < H < H_{c2}$) |
| **Vortex/Mixed State**| Absent | Present between $H_{c1}$ and $H_{c2}$ |
| **Ginzburg-Landau Parameter** | $\kappa = \frac{\lambda}{\xi} < \frac{1}{\sqrt{2}}$ | $\kappa = \frac{\lambda}{\xi} > \frac{1}{\sqrt{2}}$ |
| **Materials** | Pure elements (Pb, Sn, Hg) | Alloys & Compounds (NbTi, YBCO) |

---

## 5.4 London Equations & Penetration Depth

Fritz and Heinz London proposed two phenomenological equations to explain zero resistance and the Meissner effect.

### First London Equation
Starting from acceleration of super-electrons ($m \frac{d\vec{v}_s}{dt} = -e\vec{E}$) and $\vec{J}_s = -n_s e \vec{v}_s$:

$$\frac{\partial \vec{J}_s}{\partial t} = \frac{n_s e^2}{m} \vec{E}$$

### Second London Equation
Taking the curl of the First London Equation and combining with Maxwell's equation $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$:

$$\nabla \times \vec{J}_s = -\frac{n_s e^2}{m} \vec{B}$$

### London Penetration Depth ($\lambda_L$)
Using Ampere's Law ($\nabla \times \vec{B} = \mu_0 \vec{J}_s$):
$$\nabla \times (\nabla \times \vec{B}) = \nabla(\nabla \cdot \vec{B}) - \nabla^2 \vec{B} = \mu_0 (\nabla \times \vec{J}_s)$$
$$\implies \nabla^2 \vec{B} = \frac{\mu_0 n_s e^2}{m} \vec{B} = \frac{1}{\lambda_L^2} \vec{B}$$

$$\lambda_L = \sqrt{\frac{m}{\mu_0 n_s e^2}} \implies \lambda_L \propto \frac{1}{\sqrt{n_s}}$$

### Magnetic Field Decay Inside Superconductor:
$$B(x) = B(0) e^{-x / \lambda_L}$$
$\lambda_L$ is the depth at which the magnetic field drops to $1/e$ ($\approx 37\%$) of its surface value $B(0)$.

---

## 5.5 BCS Theory & Cooper Pairs

Bardeen, Cooper, and Schrieffer (BCS) proposed the microscopic theory of superconductivity:

```
  e⁻ (k, ↑) -------> ~~~~~Phonon Interaction~~~~~ <------- e⁻ (-k, ↓)
                      (Lattice Distortion)
```

1.  **Electron-Phonon Interaction:** An electron moving through the lattice attracts positive ions, creating a localized region of increased positive charge density (phonon). A second electron is attracted to this positive region before the lattice relaxes.
2.  **Cooper Pair:** At $T < T_c$, this indirect attractive interaction overcomes Coulomb repulsion, binding two electrons with opposite momenta and spins $(\vec{k}\uparrow, -\vec{k}\downarrow)$ into a **Cooper pair**.
3.  **Bosonic Nature:** A Cooper pair has zero total spin ($S = 0$) and acts as a **boson**, undergoing **Bose-Einstein Condensation (BEC)** into a single macroscopic ground state.
4.  **Energy Gap ($E_g$):**
    $$E_g(0) = 2\Delta(0) = 3.53 \, k_B T_c$$

---

## 5.6 Flux Quantization and Josephson Junctions

### Flux Quantization
The magnetic flux trapped through a superconducting ring is quantized in discrete integral multiples of the **Flux Quantum ($\Phi_0$)**:

$$\Phi = n \Phi_0 = n \left(\frac{h}{2e}\right)$$

$$\Phi_0 = \frac{h}{2e} \approx 2.07 \times 10^{-15} \text{ Wb} \quad \text{(or T}\cdot\text{m}^2)$$

The factor of $2e$ in the denominator directly confirms that charge carriers in superconductors are **pairs of electrons (Cooper pairs)**.

---

### Josephson Effects
A Josephson junction consists of two superconductors separated by a thin insulating barrier ($\sim 1-2 \text{ nm}$).

```
   Superconductor 1  | Insulator |  Superconductor 2
         S_1         |    I      |        S_2
```

1.  **DC Josephson Effect:**
    A zero-voltage supercurrent flows across the barrier due to phase tunneling of Cooper pairs:
    $$I = I_0 \sin(\Delta \phi)$$
    where $\Delta \phi = \phi_2 - \phi_1$ is the phase difference between wavefunction phase factors across the barrier.

2.  **AC Josephson Effect:**
    When a constant DC voltage $V$ is applied across the junction, an alternating high-frequency current oscillates across the barrier with frequency:
    $$\omega_J = \frac{2e V}{\hbar} \implies f_J = \frac{2e V}{h}$$

---

# Module 6: Magnetic Properties of Matter

## 6.1 Classification of Magnetic Materials

```
                          MAGNETIC MATERIALS
             _____________________|_____________________
            |                     |                     |
       Diamagnetic           Paramagnetic          Ferromagnetic
       (χ < 0, Temp Indep)   (χ > 0, χ = C/T)      (Spontaneous M)
                                                        |
                                          ______________|______________
                                         |                             |
                                 Antiferromagnetic              Ferrimagnetic
                                 (Sublattices Opp)              (Unequal Opp)
```

| Property | Diamagnetism | Paramagnetism | Ferromagnetism | Antiferromagnetism | Ferrimagnetism |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Origin** | Orbital electron motion (Lenz's Law) | Unpaired electron spin | Exchange interaction / Domains | Antiparallel identical sublattices | Antiparallel un-equal sublattices |
| **Susceptibility $\chi$** | Small & Negative ($\chi < 0$) | Small & Positive ($\chi > 0$) | Large & Positive ($\chi \gg 0$) | Small & Positive | Positive |
| **Temperature Dependence** | Independent of $T$ | Curie's Law: $\chi = \frac{C}{T}$ | Curie-Weiss: $\chi = \frac{C}{T - T_c}$ | Curie-Weiss: $\chi = \frac{2C}{T + T_N}$ | Complex non-linear |
| **Spin Alignment** | Opposes applied field | Random $\to$ aligns with field | Parallel within domains | Antiparallel equal ($\uparrow\downarrow\uparrow\downarrow$) | Antiparallel unequal ($\uparrow\downarrow\uparrow\downarrow$) |

---

## 6.2 Temperature Dependence and Critical Phase Transitions

```
            Ferromagnetic                     Antiferromagnetic
      χ ^                                 χ ^
        |       Paramagnetic Region         |       Paramagnetic Region
        |        χ = C / (T - T_c)          |        χ = 2C / (T + T_N)
        |       /                           |        /\
        |      /                            |       /  \
        |_____/                             |      /    \
        +-----+--------------> T            +-----+------+------------> T
        0    T_c                           0     T_N
```

### Critical Temperature Transitions:
1.  **Ferromagnetic to Paramagnetic Transition ($T > T_c$, Curie Temp):**
    $$\chi = \frac{C}{T - T_c} \quad (T > T_c)$$
2.  **Antiferromagnetic to Paramagnetic Transition ($T > T_N$, Néel Temp):**
    $$\chi = \frac{2C}{T + T_N} \quad (T > T_N)$$

### Scaling Behavior of Magnetization ($M$) Near $T_c$:
*   **Below Critical Point ($T < T_c$):**
    $$M(T) \propto (T_c - T)^{1/2}$$
*   **Above Critical Point ($T > T_c$):**
    $$\chi(T) \propto (T - T_c)^{-1}$$

---

# Module 7: Hall Effect in Solids

## 7.1 Physics and Setup of the Hall Effect

When a current-carrying conductor or semiconductor is placed in a transverse magnetic field, a potential difference (**Hall Voltage, $V_H$**) is developed across the sample in a direction perpendicular to both current flow and magnetic field.

```
                  z (Magnetic Field B_z)
                  ^
                  |    ________________
                  |   /               /|
                  |  /_______________/ |
                  | |               |  |  
     (Electric    | |   + + + + +   |  | <-- Top Face (+ charge)
      Field E_y)  | |               |  |
                  | |   - - - - -   | /  <-- Bottom Face (- charge)
                  | |_______________|/
                  +----------------------> y (Sample thickness t)
                 / 
                /
               v x (Current I_x)
```

---

## 7.2 Mathematical Derivation of Hall Parameters

Consider charge carriers of charge $q$ ($q = -e$ for electrons, $q = +e$ for holes) moving with drift velocity $v_x$ along the x-axis under an applied magnetic field $B_z$ along the z-axis.

1.  **Lorentz Force Balance:**
    Carriers experience a magnetic Lorentz force $F_M = q v_x B_z$ along the y-axis, causing charge separation until an opposing transverse Hall Electric Field $E_y$ is built up. At steady-state equilibrium:

    $$F_E + F_M = 0 \implies q E_y = q v_x B_z \implies E_y = v_x B_z$$

2.  **Current Density ($J_x$):**
    $$J_x = n q v_x \implies v_x = \frac{J_x}{n q}$$

3.  **Hall Field ($E_H = E_y$):**
    $$E_H = \frac{J_x B_z}{n q}$$

4.  **Hall Coefficient ($R_H$):**
    $$R_H = \frac{E_y}{J_x B_z} = \frac{1}{n q}$$

    *   For **Metals / Electrons ($q = -e$):**
        $$R_H = -\frac{1}{n e}$$
    *   For **Holes ($q = +e$):**
        $$R_H = +\frac{1}{p e}$$

---

### Hall Voltage Formula ($V_H$)

If $t$ is the thickness along the direction of the Hall field ($E_y$), and $w$ is the width along the direction of the magnetic field ($B_z$):

$$V_H = E_y \cdot t = (v_x B_z) \cdot t$$

Since $J_x = \frac{I_x}{A} = \frac{I_x}{w \cdot t}$:
$$V_H = \left(\frac{I_x}{n q w t}\right) B_z t \implies V_H = \frac{I_x B_z}{n q w} = \frac{R_H I_x B_z}{w}$$

---

## 7.3 Hall Coefficient in Semiconductors

For a semiconductor with both electrons ($n, \mu_e$) and holes ($p, \mu_h$):

$$R_H = \frac{p \mu_h^2 - n \mu_e^2}{e (p \mu_h + n \mu_e)^2}$$

### Special Cases:
1.  **Intrinsic Semiconductor ($n = p = n_i$):**
    $$R_H = \frac{1}{n_i e} \left( \frac{\mu_h^2 - \mu_e^2}{(\mu_h + \mu_e)^2} \right) = \frac{1}{n_i e} \left( \frac{\mu_h - \mu_e}{\mu_h + \mu_e} \right)$$
    Since electron mobility is higher than hole mobility ($\mu_e > \mu_h$), **$R_H$ is negative for intrinsic semiconductors**.
2.  **Extrinsic p-type ($p \gg n$):** $R_H > 0$ (Positive).
3.  **Extrinsic n-type ($n \gg p$):** $R_H < 0$ (Negative).

---

## 7.4 Determination of Carrier Mobility ($\mu$)

Combining conductivity $\sigma = n e \mu$ and $R_H = \frac{1}{ne}$:

$$\mu = \sigma |R_H|$$

---

## Worked Example 7.1: Hall Effect Calculation
**Problem:** A copper strip of width $w = 2 \text{ cm}$ and thickness $t = 1 \text{ mm}$ carries a current $I = 20 \text{ A}$ in a magnetic field $B = 1.5 \text{ T}$. Assuming $n = 8.5 \times 10^{28} \text{ m}^{-3}$, calculate the Hall voltage $V_H$ and Hall coefficient $R_H$.

**Solution:**
1. **Hall Coefficient ($R_H$):**
   $$R_H = -\frac{1}{n e} = -\frac{1}{8.5 \times 10^{28} \times 1.6 \times 10^{-19}} = -7.35 \times 10^{-11} \text{ m}^3/\text{C}$$

2. **Hall Voltage ($V_H$):**
   $$V_H = \frac{I B}{n e w} = \frac{|R_H| \cdot I \cdot B}{w}$$
   Note: The relevant dimension in $V_H = \frac{I B}{n e w}$ is the dimension parallel to $B$. Here, $w$ is the dimension parallel to $B$.
   $$V_H = \frac{20 \times 1.5}{8.5 \times 10^{28} \times 1.6 \times 10^{-19} \times 0.02} = \frac{30}{2.72 \times 10^{8}} \approx 1.10 \times 10^{-7} \text{ V} = 0.11 \, \mu\text{V}$$

---

# Comprehensive Formula Quick-Reference Sheet

```
1. Effective Atoms:
   N_eff = N_c/8 + N_f/2 + N_e/4 + N_i

2. Cubic APF & Radii:
   SC:  r = a/2,              N_eff = 1, APF = π/6 ≈ 0.52
   BCC: r = (√3/4)a,          N_eff = 2, APF = (√3 π)/8 ≈ 0.68
   FCC: r = a/(2√2),          N_eff = 4, APF = π/(3√2) ≈ 0.74
   DC:  r = (√3/8)a,          N_eff = 8, APF = (√3 π)/16 ≈ 0.34

3. Interplanar Spacing (Cubic):
   d_hkl = a / √(h² + k² + l²)

4. Reciprocal Lattice Vectors:
   A = 2π (b x c) / [a · (b x c)],   V_R = (2π)³ / V_D

5. Reciprocal Relations:
   SC  --> SC (side 2π/a)
   BCC --> FCC (side 4π/a)
   FCC --> BCC (side 4π/a)

6. Bragg's Law:
   2d sin θ = n λ   <==>   2 k · G + G² = 0

7. DOS & Specific Heat Power Laws:
   D(E) ∝ E^((d/n) - 1)  for  E ∝ k^n
   C_v ∝ T^(d/n)        for  ω ∝ k^n at low T
   C_v (Debye 3D) = (12π⁴/5) R (T / Θ_D)³

8. Fermi Wavevector (Free Electron):
   1D: k_F = πn/2
   2D: k_F = √(2πn)
   3D: k_F = (3π²n)^(1/3)

9. Superconductivity:
   H_c(T) = H_c(0) [1 - (T/T_c)²]
   λ_L = √(m / (μ_0 n_s e²))
   Φ_0 = h / 2e ≈ 2.07 x 10⁻¹⁵ Wb
   E_g(0) = 2Δ(0) ≈ 3.53 k_B T_c

10. Hall Effect:
    R_H = 1 / (n q)
    V_H = I B / (n q w)
    μ = σ |R_H|
```
