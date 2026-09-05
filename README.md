# 👨‍💻 saptgiri — Developer Portfolio

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

> saptgiri's personal developer portfolio — a single-page application that introduces who I am, highlights the projects I've built, and makes it easy for recruiters and engineers to reach me. Built with React 19 and Framer Motion for smooth, professional animations.

🔗 **Live:** [saptgiri7.github.io/Portfolio](https://saptgiri7.github.io/Portfolio)

---

## 🧑‍🎨 What's Inside

The portfolio is divided into four key sections, each crafted to communicate a specific part of my story:

| Section | What It Communicates |
|---------|----------------------|
| **Hero** | Who I am — name, role, and animated tagline |
| **About** | My background, tech skills, and what drives me |
| **Projects** | Live demos + GitHub links for my key projects |
| **Contact** | Email, LinkedIn, and GitHub — easy to reach |

---

## ✨ UI & Animation Highlights

- **`whileInView` scroll animations** — Each section animates in as the user scrolls, built with Framer Motion — no scroll event listeners needed
- **Staggered list reveals** — Skill tags and project cards appear with a cascading delay using `staggerChildren`
- **Page transitions** — Smooth fade + slide between routes using `AnimatePresence`
- **Hover micro-interactions** — Buttons and cards respond with subtle scale/glow effects
- **Dark theme** — Deep, professional dark palette with accent highlights — optimized for readability

---

## 🛠️ Tech Stack

| Technology | Version | Why |
|-----------|---------|-----|
| React | 19 | Latest concurrent rendering features |
| Framer Motion | 12 | Production-grade animation library |
| Tailwind CSS | 3 | Utility-first, zero dead CSS in prod |
| React Router | v7 | File-based client-side routing |
| React Icons | 5 | 40+ icon libraries in one package |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── Home.js        # Hero + animated landing
│   │   ├── About.js       # Skills, bio, experience
│   │   ├── Projects.js    # Project cards with live links
│   │   └── Contact.js     # Contact form & social links
│   ├── components/
│   │   ├── Navbar.js      # Responsive sticky nav
│   │   └── ProjectCard.js # Reusable project showcase card
│   ├── assets/            # Images & icons
│   └── App.js             # Router setup + AnimatePresence wrapper
├── tailwind.config.js     # Extended theme (colors, fonts)
└── postcss.config.js
```

---

## ⚙️ Run Locally

```bash
git clone https://github.com/Saptgiri7/Portfolio.git
cd Portfolio
npm install
npm start              # http://localhost:3000
```

```bash
npm run build          # Optimized production build
```

---

## 📬 Contact Me

| Platform | Link |
|----------|------|
| GitHub | [github.com/saptgiri7](https://github.com/Saptgiri7) |
| Email | Available on the portfolio contact page |
| LinkedIn | Available on the portfolio contact page |

---

> ⭐ If you find this useful as a portfolio template, feel free to fork it!
