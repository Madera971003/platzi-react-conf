# Configuración de entorno de React desde Cero

Ubicados en la carpeta del proyecto, se ejecutará los siguientes comandos como buenas prácticas:

*Este nos inicializa el pryecto con [git](https://git-scm.com/)*

```bash
git init
```

*Para el siguiente comando es muy importante tener instalado npm. Se nos creará un archivo [package.json](https://apuntes.de/nodejs-desarrollo-web/package-json/#gsc.tab=0)*

```bash
npm init -y
```

*Con el siguiente comando se instala algunas cosas necesarias para el proyecto*

```bash
npm install react react-dom
```

Pero aun esto no termina aquí. Es necesario incluir aun muchas cosas para tener bien definido nuestro proyecto.

## Instalación de Webpack, Babel, Plugins y Loader

En las siguientes explicaciones se mostrará cada uno de los comandos necesarios

### instalación de [Webpack](https://www.campusmvp.es/recursos/post/webpack-que-es-para-que-sirve-y-sus-ventajas-e-inconvenientes.aspx)

En esta parte también se instala el serve de webpack. Cabe mencionar que el comando: ```--save-dev``` nos sirve para guardar estas dependencias en el archivo package.json.

```bash
npm install webpack webpack-cli webpack-dev-serve --save-dev
```

### Instalación del Loader y Plugin

```bash
npm install html-webpack-plugin html-loader --save-dev
```

### Instalación de [Babel](https://www.freecodecamp.org/espanol/news/que-es-babel/)

```bash
npm install babel-loader @babel/preset-react @babel/core --save-dev
```
