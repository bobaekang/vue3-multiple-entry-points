# Multiple entry points setup for Vue 3

> This repository is a sequal to [`bobaekang/vue-multiple-entry-setup`](https://github.com/bobaekang/vue-multiple-entry-setup) repository for Vue 3.

Showcasing a simple multiple entry points setup for Vue 3 + [Vite](https://github.com/vitejs/vite) application. 🖖

This setup allows you to build multiple Vue 3 applications sharing components from a single repository. Switching build targets is controlled by the `VITE_BUILD_TARGET` environment variable. Check out `/src/main.js` to see how this is done!

The key advantage of using multiple entry points is that this setup makes it trivial to share components between multiple Vue 3 applications. No need for creating a separate component library package or setting up a sophisticated monorepo soultion.

## Project setup

```
npm install
```

### ⚡-fast development server

```
npm run dev
```

### Production build

```
npm run build
```
