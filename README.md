# Webpack Configuración

**Este repo contiene  una configuración rapida y sencilla de webpack.**

Puedes desarrollar aplicaciones web modernas usando EcmaScript6+, aplicar estilos con CSS Vanilla a componentes y/o usar una hoja de estilos global. 
También añadir imagenes, te recomiendo primero optimizar el peso de las imagenes usando herramientas como [TinyPng](https://tinypng.com/)

## Caracteristicas 

* Los navegadores entenderan el código Js por medio del transcompilador Babel
* Previene que los navegadores  guarden en cache sus archivos ya que le agrega un codigo hash después del nombre __main.d8d8d3cf0d44e61e1acb.css__.
* Minifica  archivos JS y CSS.
___

## Configuraciones aplicadas

***Trabajaras con dos archivos de configuraciòn webpack***

#### Nota. Dentro de package.json, puedes ver los diferentes scripts de igual manera los puedes modificar.

En un ambiente de desarrollo debes usar el archivo **webpack.config.js**, el cual se puede ejecutar desde la Terminal

```
npm run build:dev
```

Durante el desarrollo de la aplicación, puedes ejecutar un servidor desde la terminal  

```
npm run dev-server

```

Cuando tu proyecto este listo para llevar a producción, desde la Terminal ejecutar 

```
npm run webpack

```

La implementaciòn de esta configuración es gracias a la documentación oficial de [Webpack](https://webpack.js.org/) y la mentoría de [Fernando Herrera](https://twitter.com/Fernando_Her85)
por medio de su curso [JavaScript Moderno: Guía para dominar el lenguaje](https://www.udemy.com/course/javascript-fernando-herrera/).
