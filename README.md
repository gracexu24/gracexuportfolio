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

## Deployment to GitHub Pages with Custom Domain

### Step 1: Update CNAME File

Edit `public/CNAME` and replace `yourdomain.com` with your actual domain name:
```
yourdomain.com
```

### Step 2: Configure GitHub Repository

1. Go to your GitHub repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 3: Configure DNS for Your Domain

Add the following DNS records at your domain registrar:

**Option A: Using Apex Domain (yourdomain.com)**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `185.199.108.153`
- Add additional A records for:
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**Option B: Using Subdomain (www.yourdomain.com)**
- Type: `CNAME`
- Name: `www`
- Value: `yourusername.github.io`

### Step 4: Deploy

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

After pushing, the workflow will:
1. Build your React Native Web app
2. Deploy it to GitHub Pages
3. Your site will be available at your custom domain

### Step 5: Enable HTTPS (Automatic)

GitHub Pages automatically provides HTTPS for custom domains. It may take a few minutes to provision the SSL certificate after DNS propagation.

### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
# Then push the dist folder to the gh-pages branch
```

## Technologies Used

- React Native Web
- React
- Webpack
- Babel

## License

MIT
