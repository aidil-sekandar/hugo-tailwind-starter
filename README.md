<h1 align=center>Hugo Tailwind starter | <a href="https://hugo-tailwind-starter.netlify.app/" rel="nofollow">Demo</a></h1>

![banner](/static/banner.png)

<h3 align=center>Very basic Hugo + Tailwind CSS starter theme</h3>

> This is a starter template for creating a custom Hugo theme. It comes pre-configured with Tailwind CSS, so you don’t have to set it up yourself. Ideal for developers building their own Hugo theme with Tailwind CSS.

<div align=center>

![MIT license](https://img.shields.io/github/license/tomowang/hugo-theme-tailwind)
[![gohugo](https://img.shields.io/badge/Made_with-Hugo-blue)](https://gohugo.io/)
[![tailwindcss](https://img.shields.io/badge/Made_with-Tailwind_CSS-blue)](https://tailwindcss.com/)
![code-size](https://img.shields.io/github/languages/code-size/aidil-sekandar/hugo-tailwind-starter)

</div>

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
