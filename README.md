# Rudra Potghan — Cybersecurity Portfolio

A dark, dramatic cybersecurity portfolio with a blog, certifications, and a timeline.

## 🚀 Deploy on GitHub Pages (Free)

1. Create a repository on GitHub named `<your-username>.github.io`
2. Upload all files from this folder
3. Go to repo **Settings → Pages → Source: main branch / root**
4. Your site is live at `https://<your-username>.github.io`

---

## 📁 File Structure

```
/
├── index.html               ← Home page (hero + timeline + contact)
├── pages/
│   ├── certifications.html  ← Certifications page
│   └── blog.html            ← Blog + rich text editor
├── css/
│   ├── main.css             ← Shared styles, theme
│   ├── home.css             ← Home page styles
│   ├── certifications.css   ← Cert page styles
│   └── blog.css             ← Blog + editor styles
└── js/
    ├── main.js              ← Nav, scroll, shared utils
    ├── certifications.js    ← Cert CRUD logic
    └── blog.js              ← Blog CRUD + rich editor
```

---

## 🔐 Changing the Admin Password

Two separate passwords exist (you can make them the same):

- **Certifications page:** Edit `js/certifications.js` → `const ADMIN_PASS = 'rudra2025';`
- **Blog page:** Edit `js/blog.js` → `const ADMIN_PASS = 'rudra2025';`

> ⚠️ These passwords are stored in public JS files. This is fine for a personal portfolio but remember the password is visible in the source code. It's just a basic gate to add content.

---

## ✍️ How to Write a Blog Post

1. Go to `/pages/blog.html`
2. Click **Admin Login** → enter your password
3. Click **+ New Post**
4. Use the rich text toolbar to format (bold, italic, headings, code blocks, images, links)
5. Click **Publish** (or **Save Draft** to keep it hidden)

---

## 🎓 How to Add a Certification

1. Go to `/pages/certifications.html`
2. Click **Admin Login**
3. Click **+ Add Certification**
4. Fill: Name, Issuer, Year, Category, Link, Image URL, Description
5. Click **Save** — the card appears instantly

---

## 🎨 Personalizing

In `index.html`, update:
- Your contact links (LinkedIn, TryHackMe, GitHub, Medium, Email)
- Your tagline and about section text

In `css/main.css`, change `--accent` to your preferred color:
```css
--accent: #00ff9d;   /* change this */
```

---

## 📦 Data Storage

All blog posts and certifications are stored in **localStorage** of the visitor's browser. This means:
- Your data persists when YOU visit your own site on the same browser
- To publish content permanently for everyone, see the upgrade options below

### Upgrading to persistent storage (optional)
- **Netlify CMS** — free, file-based CMS on top of GitHub
- **Supabase** — free Postgres database with REST API
- **Contentful / Sanity** — headless CMS with free tier

---

*Built with HTML, CSS & Vanilla JS — no frameworks, no build step, just upload and go.*
