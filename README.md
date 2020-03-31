# mockup

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### project structure after build:
```
- root
  |- css/ /* files css after build */
  |- fonts/ /* files fonts after build. Only icons */
  |- img/ /* files images after build */
  |- js/ /* files javascript after build */
  |- favicon.ico /* icon */
  |- index.html /* main application after build */
  |- README.md /* documentation */
```

### project structure before build:
```
- root
  |- public/
     |- index.html /* home application */
     |- favicon.ico /* icon application */
  |- src/
     |- assets/ 
        |- images
           |- about /* about images */
           |- carousel /* slide carousel images */
           |- icons /* icons images - languages */
           |- services /* service images */
        |- sass /* application css */
           |- components/ /* components scss */
              |- about/ /* about scss */
              |- contact/ /* contact scss */
              |- navbar/ /* navbar scss */
              |- services/ /* services scss */
              |- slide/ /* slide carousel scss */
           |- pages/
              |- app.scss /* main .vue scss */
              |- home.scss /* home page scss */
           |- utils/
              |- theme/colors.scss /* colors application */
           |- theme.scss /* main scss */
        |- components/
           |- navbar/Navbar.vue /* navbar html */
           |- modal/Modal.vue /* modal html */
        |- i18n/
           |- languages/
              |- en.lang.json /* internacionalization - english */
              |- pt_BR.lang.json /* internacionalization - portuguese Brazil */
           |- index.js /* main i18n */
      |- router/index.js /* application routes */
      |- views/ 
         |- home/
            |- components/
               |- about/ /* about files html */
               |- contact/ /* contact files html */
               |- services/ /* services files html */
               |- slide/ /* slide files html */
            |- Home.vue /* home page html */
      |- App.vue /* main .vue */
      |- main.js /* main application */
  |- babel.config.js /* babel configuration */
  |- package.json /* application dependencies */
  |- package-lock.json /* application dependencies */
  |- README.md  /* documentation */
```
