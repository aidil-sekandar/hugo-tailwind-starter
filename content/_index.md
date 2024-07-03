---
title: 'Home'
layout: 'home'
---

<h1 align=center>Hugo Tailwind starter
</h1>
<h3 align=center>Very basic Hugo + Tailwind CSS starter theme</h3>

> This is a starter template for creating a custom Hugo theme. It comes pre-configured with Tailwind CSS, so you don’t have to set it up yourself. Ideal for developers building their own Hugo theme with Tailwind CSS.

## Features

- Tailwind CSS: Pre-installed and pre-configured.
- Prettier Plugin for Go Templates: Pre-installed and pre-configured.
- Prettier: Ensures better HTML formatting that follows Hugo’s standard format.

##  File Structure

```
hugo-tailwind-starter
|
│    .gitignore
│    .prettierrc
│    go.mod
│    hugo.toml
│    LICENSE
│    package-lock.json
│    package.json
|    postcss.config.js
│    README.md
|    tailwind.config.js
|    theme.toml
|    public/
|
├─── static
|    └─── banner.png
|
├─── assets
|    └─── css
|         └─── index.css
|         └─── main.css
|
├─── content
|    └─── _index.md
|
├─── layouts
|    ├─── 404.html
|    └─── _default
|         └─── baseof.html
|         └─── home.html
|    └─── partials
|         ├─── footer.html
|         ├─── head.html
|         ├─── header.html
|         └─── head
|              └─── css.html
```

## Guideline for developers
### Installation:

```bash
git clone https://github.com/aidil-sekandar/hugo-tailwind-starter.git
```

### Files explanation:
- `theme.toml:` Contains essential information about the theme.
- `tailwind.config.js:` Tailwind’s configuration file.
- `postcss.config.js:` PostCSS’s configuration file.
- `package.json:` List of necessary npm dependencies.
- `.prettierrc:` Prettier’s configuration file.
- `/assets/css/index.css:` Auto-generated CSS classes by Tailwind.
- `/assets/css/main.css:` The theme’s main/global CSS file

### Getting Started 🚀
- Run `npm install` to install the necessary dependencies.
- Run `npm run dev` to start the development server
- Start working with Hugo and TailwindCSS 🎉 