# Deployment Guide - GitHub Pages with Custom Domain

## Quick Start

### 1. Update Your Domain

Edit `public/CNAME` and replace `yourdomain.com` with your actual domain:
```
yourdomain.com
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Setup for deployment"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### 4. Configure DNS

At your domain registrar, add these DNS records:

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (www.yourdomain.com):**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### 5. Wait for Deployment

- GitHub Actions will automatically build and deploy
- DNS changes can take up to 48 hours (usually much faster)
- HTTPS will be automatically enabled by GitHub

## Troubleshooting

### Site not loading?
- Check DNS propagation: Use `dig yourdomain.com` or [dnschecker.org](https://dnschecker.org)
- Verify CNAME file is in the repository
- Check GitHub Actions workflow for errors

### HTTPS not working?
- Wait 24-48 hours for GitHub to provision SSL certificate
- Ensure DNS is properly configured
- Check GitHub Pages settings show your custom domain

### Build failing?
- Check the Actions tab in your GitHub repository
- Ensure all dependencies are in package.json
- Verify Node.js version in workflow matches your local version

## Testing Locally

Before deploying, test your production build:

```bash
npm run build
npx serve dist
```

Visit `http://localhost:3000` to preview your production build.

