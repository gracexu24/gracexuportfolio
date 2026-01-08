# DNS Configuration for gracexu.com

## Step-by-Step DNS Setup

### Option 1: Apex Domain (gracexu.com) - Recommended

Add these **4 A records** at your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

```
Type: A
Name: @ (or leave blank, or use "gracexu.com")
Value: 185.199.108.153
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Option 2: CNAME for www subdomain (www.gracexu.com)

If you want to use www.gracexu.com, add:

```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 3600
```

**Note:** You cannot use CNAME for the apex domain (gracexu.com) - you must use A records.

## Verify Your Setup

### 1. Check DNS Propagation

After adding the records, verify they're working:

```bash
# Check A records
dig gracexu.com +short

# Should return:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

Or use online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

### 2. Verify GitHub Pages Settings

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Custom domain**, you should see `gracexu.com`
4. Make sure **Enforce HTTPS** is checked (after DNS propagates)

### 3. Check GitHub Actions

1. Go to **Actions** tab in your repository
2. Verify the deployment workflow completed successfully
3. The workflow should have deployed your site

## Common Issues

### "NotServedByPagesError"

This means DNS isn't pointing to GitHub. Check:

1. **DNS Records**: Verify all 4 A records are added correctly
2. **Propagation Time**: DNS changes can take 24-48 hours (usually 1-2 hours)
3. **CNAME File**: Make sure `public/CNAME` contains `gracexu.com` (no www, no trailing slash)
4. **GitHub Pages Enabled**: Settings → Pages → Source should be "GitHub Actions"

### DNS Not Propagating?

1. Clear your DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Or use Google's DNS: 8.8.8.8
   ```

2. Check from different locations using https://dnschecker.org

3. Verify at your registrar that records are saved correctly

### HTTPS Not Working?

- Wait 24-48 hours after DNS propagates
- GitHub automatically provisions SSL certificates
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings

## Quick Checklist

- [ ] Added 4 A records at domain registrar
- [ ] CNAME file contains `gracexu.com` (no www)
- [ ] Pushed code to GitHub (CNAME file included)
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Deployment workflow completed successfully
- [ ] Waited for DNS propagation (check with dnschecker.org)
- [ ] Verified DNS records resolve correctly

## Testing Locally

Before DNS propagates, you can test your site:

```bash
npm run build
npx serve dist
```

Then visit `http://localhost:3000` to verify everything works.

