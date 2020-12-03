# Hi! :wave: and welcome to ImageUp repository

### ReactJS
### 🎨 Tailwind css

```shell
    $ npm install tailwindcss postcss-cli autoprefixer@9.8.6 -D

    //initializing Tailwind Css
    $ npx tailwind init tailwind.js --full

    //create a PostCSS configuration
    $ touch postcss.config.js

    //copy following lines
    const tailwindcss = require('tailwindcss');
        module.exports = {
            plugins: [
                tailwindcss('./tailwind.js'),
                require('autoprefixer')
            ],
    };
```

- Inside your `src` folder create a folder, name it `assets`: this is where all your styles would be stored. 
- Create a `tailwind.css` file and `main.css` file respectively.
    - The `tailwind.css` file will be used by us to import Tailwind CSS styles, and for custom configurations and rules.
    - The `main.css` will hold the styles that are generated as a result of what we have in the tailwind.css file

- Add the following to your `tailwind.css` file:
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

```

- configure the project to build our CSS styles each time we run either the `npm start` or `yarn start` command. Open your package.json and copy these lines:
```
    "scripts": {
        "start": "npm run watch:css && react-scripts start",
        "build": "npm run watch:css && react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
    }
```

