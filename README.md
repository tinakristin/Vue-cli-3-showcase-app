# vue-cli-3-showcase-app
Intro til bruk av:
- Miljøvariabler VUE_APP... i .env-filer
- VUEX-state håndtering
- Vue-router
- proxy i api-kall (Kommenter inn VUE_APP_USE_DEV_PROXY=true i .env.development, proxy satt i vue.config)
- Api-kall mot kartverket

Viser også eksempel på bruk av:
- Font-awesome ikoner
- i18n-translation-fil, kan enkelt legge til flere språk
- Jest-snapshot testing
- Word-generering vha. DocX

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
npm run build:test #test
npm run build:systest #systest
npm run build:prod #production
```

### Run your tests
```
npm run test
```

### Run your unit tests
```
npm run test:unit

# To update snapshots:
npm run test:unit --  -u
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
