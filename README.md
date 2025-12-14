# Research Proposal Explorer

A modern, interactive web application built with React and Vite for exploring and comparing research proposals. This project features a clean UI with dark/light theme support, data visualizations using Chart.js, and responsive design powered by Tailwind CSS.

## 🚀 Features

- **Interactive Topic Navigation**: Browse through 6 different research topics with smooth navigation
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Data Visualizations**: Interactive charts powered by Chart.js for project comparisons
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI Components**: Reusable card and chart components
- **Smooth Scrolling**: Back-to-top button for enhanced user experience
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- npm (comes with Node.js) or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/NIKKAvRULZ/research-proposal-explorer.git
cd research-proposal-explorer
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Getting Started

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open at `http://localhost:5173` (default Vite port).

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
research-proposal-explorer/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # React components
│   │   ├── common/     # Shared components (Header, Footer, Navigation)
│   │   ├── home/       # Home page components
│   │   ├── topics/     # Topic pages (Topic1-6)
│   │   └── ui/         # UI components (Card, Chart)
│   ├── contexts/       # React Context (ThemeContext)
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions and configurations
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global CSS
├── eslint.config.js    # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## 🎨 Tech Stack

- **Frontend Framework**: [React](https://react.dev/) 18.2.0
- **Build Tool**: [Vite](https://vitejs.dev/) 4.4.5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.3
- **Charts**: [Chart.js](https://www.chartjs.org/) 4.4.0 with [react-chartjs-2](https://react-chartjs-2.js.org/) 5.2.0
- **Linting**: [ESLint](https://eslint.org/) with React plugins
- **State Management**: React Context API

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured in [tailwind.config.js](tailwind.config.js). Customize your theme, colors, and utilities here.

### ESLint

ESLint rules are defined in [eslint.config.js](eslint.config.js). The project uses recommended React and React Hooks rules.

### Vite

Vite configuration can be found in [vite.config.js](vite.config.js), including the React plugin setup.

## 🌙 Theme Support

The application supports both dark and light themes. Users can toggle between themes using the theme switcher in the header. Theme preference is managed through React Context.

## 📊 Charts and Visualizations

The project uses Chart.js for data visualizations. Chart configurations are centralized in [src/utils/chartConfigs.js](src/utils/chartConfigs.js) for easy customization and reusability.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and intended for academic purposes at SLIIT.

## 👨‍💻 Author

**NIKKAvRULZ**
- GitHub: [@NIKKAvRULZ](https://github.com/NIKKAvRULZ)

## 🙏 Acknowledgments

- SLIIT (Sri Lanka Institute of Information Technology)
- React and Vite communities
- All contributors and supporters of this project

---

Made with ❤️ for research exploration