# React + TypeScript + Vite  

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

!!! IMPORTANT !!! check out:
Type Assertions & Type Casting:

https://www.youtube.com/watch?v=Sj1425gwXxQ&list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&index=5
AND
see Typescript Index Signatures, keyof Assertions:

 https://www.youtube.com/watch?v=2eAqXLi8q70&list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&index=7

## To run local server use following expression

### npx json-server -w data/products.json -p 3500

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
