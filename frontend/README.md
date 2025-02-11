# React + TypeScript + Vite + Python + Flask

## How to setup the project -->
Open 2 terminals (frontend and backend)
'cd .\frontend\' on the first terminal
'cd .\backend\' in the second one

# frontend terminal ==> 
- 'npm install' (for node modules)
- 'npm run dev' (starts the frontend)

# backend terminal ==>
- 'python -m venv venv' (to create the virtual env to install dependencies in the virtual env and not instead of installing them on the machine(computer))
- '.\venv\Scripts\activate' (activate the virtual environment on WINDOWS => linux command : source venv/bin/activate )
- 'pip install flask flask-sqlalchemy flask-cors'
  (flask is the framework that we will use for the REST APIbackend, 
  flask sqlalchemy (ORM) => python toolkit that allows us to access databases with python code instead of SQL, 
  flask cors to remove the CORS errors)
- 'flask run --reload' (starts the backend and --reload for the hot reload)


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
