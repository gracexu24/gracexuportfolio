# Grace Xu Portfolio

A modern, responsive portfolio website built with React Native Web.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Built with React Native Web
- 🚀 Fast and optimized performance
- 📧 Contact form
- 💼 Project showcase section

## Sections

- **Header**: Navigation and hero section
- **About**: Personal introduction and skills
- **Projects**: Portfolio project showcase
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gracexuportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
gracexuportfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   └── index.js
├── .babelrc
├── webpack.config.js
├── package.json
└── README.md
```

## Customization

You can easily customize the portfolio by:

1. **Updating personal information**: Edit the content in `src/components/About.js`
2. **Adding projects**: Modify the `projects` array in `src/components/Projects.js`
3. **Changing colors**: Update the `StyleSheet` objects in each component
4. **Adding social links**: Update the social buttons in `src/components/Contact.js`

## Technologies Used

- React Native Web
- React
- Webpack
- Babel

## License

MIT
