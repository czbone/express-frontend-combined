# TypeScript based web application with Express backend and Vue3, Quasar frontend

This TypeScript sample web application includes backend and frontend separated projects.
The backend serves API service by Node.js Express, the frontend consists of Vue3 and Quasar framework.

## How to use

### Frontend

Launch Frontend project and operate in `frontend` directory.

1. Install packages

```
yarn install
```

2. Develop by Vite debug mode

```
yarn dev
```

1. Online debugging by **Launch Chrome** on **Run and Debug view** in VSCode.

2. Building operation generates Frontend modules in `frontend/dist` directory.

```
yarn build

# Test built modules by Vite
yarn preview
```

### Backend

Lauch Backend Project and operate in root directry(Backend project directory).

0. Ready

Backend requires Frontend modules in `frontend/dist` directory.
Build Frontend in advance.

1. Install modules

```
yarn install
```

1. Launch from command line or online debuggging by **Start Server** on **Run and Debug view** in VSCode.

```
# Debugging
yarn dev

# Building as product and launch server
yarn build
yarn start

# Debugging with source mapping
yarn start-debug
```

### Debug Frontend and Backend integratedly

If launch Frontend and Backend separately, Frontend uses port 3001 and Backend uses port 3000.
Test Frontend and Backend integratedly at port 3001 from Web browser
Frontend redirects API(`/api`) access at port 3001 to Backend at port 3000 by Vite proxy.

1. Launch Backend(yarn dev)
2. Launch Frontend(yarn dev)
3. Launch VSCode in Frontend project, and debug Frontend by **Launch Chrome** on **Run and Debug view**.

### Combine Frontend and Backend as one product

Build Frontend and Backend in order, or execute below commands in Backend project.
The destnations locate in `dist` and `frontend/dist`.

```
yarn install
yarn build:all
yarn start
```
