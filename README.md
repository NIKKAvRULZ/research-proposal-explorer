# 🔬 Research Proposal Explorer
![Banner]()
<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-F5788D?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![SLIIT](https://img.shields.io/badge/SLIIT-Academic%20Project-orange?style=for-the-badge)](https://www.sliit.lk/)

**A modern, interactive platform to explore, visualize, and compare academic research proposals.**

[View Demo](https://research-proposal-explorer.vercel.app/) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 About The Project

**Research Proposal Explorer** is a sleek web application designed to bridge the gap between complex academic data and intuitive visualization. Built for the academic community at **SLIIT**, this tool allows students and reviewers to navigate through distinct research topics, comparing data points through interactive charts and a responsive interface.

### ✨ Key Features

* **🧭 Smart Navigation**: Seamlessly browse through 6 distinct research domains with a fluid, animated interface.
* **📊 Dynamic Visualization**: Real-time data rendering using **Chart.js** to compare project metrics and proposal statistics.
* **🌓 Adaptive Theming**: Native Dark/Light mode support that respects user system preferences, powered by React Context.
* **📱 Fully Responsive**: A mobile-first approach using **Tailwind CSS** ensures the app looks great on tablets, phones, and desktops.
* **⚡ High Performance**: Powered by **Vite** for instant server starts and optimized production builds.

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|:---:|:---:|
| ![Light Mode Screenshot](https://via.placeholder.com/600x300.png?text=Dashboard+Light+Mode) | ![Dark Mode Screenshot](https://via.placeholder.com/600x300.png?text=Dashboard+Dark+Mode) |

---

## 🛠️ Tech Stack

This project leverages the latest ecosystem tools for a robust development experience.

| Category | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | [React](https://react.dev/) | `^18.2.0` |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^4.4.5` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^3.3.3` |
| **Visualization** | [Chart.js](https://www.chartjs.org/) | `^4.4.0` |
| **Linting** | [ESLint](https://eslint.org/) | `^8.x` |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* **Node.js** (v16.0 or higher)
* **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/NIKKAvRULZ/research-proposal-explorer.git](https://github.com/NIKKAvRULZ/research-proposal-explorer.git)
    cd research-proposal-explorer
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    > The app will launch at `http://localhost:5173`

---

## 📁 Project Structure

<details>
<summary><b>Click to expand file tree</b></summary>

```bash
research-proposal-explorer/
├── 📂 public/              # Static assets (favicons, manifest)
├── 📂 src/
│   ├── 📂 assets/          # Images, fonts, SVG icons
│   ├── 📂 components/      # Reusable React components
│   │   ├── 📂 common/      # Header, Footer, Navbar
│   │   ├── 📂 home/        # Landing page sections
│   │   ├── 📂 topics/      # Individual Research Topic pages
│   │   └── 📂 ui/          # Atomic components (Cards, Buttons, Charts)
│   ├── 📂 contexts/        # ThemeContext & Global State
│   ├── 📂 hooks/           # Custom hooks (useTheme, useData)
│   ├── 📂 styles/          # Global Tailwind directives
│   ├── 📂 utils/           # Chart configs & Helper functions
│   ├── 📄 App.jsx          # Root Component
│   └── 📄 main.jsx         # Entry Point
├── 📄 eslint.config.js     # Code quality rules
├── 📄 tailwind.config.js   # Style configurations
└── 📄 vite.config.js       # Build configurations
