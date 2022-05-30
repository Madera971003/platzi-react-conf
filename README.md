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

## Configuración de Webpack 5 con loaders y estilos

### Instalación de css-loader

```bash
npm install css-loader mini-css-extract -plugin --save-dev
```

#### Configuración del proyecto con Sass

Para su instalación se usa lo siguiente:

```bash
npm install --save-dev sass-loader node-sass
```

Ahora es necesario ir al archivo **webpack.config.js**, a la sección de **module.export**, después en **module** y finalmente en **rules**, se agregará en el arreglo la siguiente regla. En caso que ya exista una parecida, solo modificar lo que se desea.

Verificar que al inicio del archivo **webpack.config.js** existan estas constantes:

```bash
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

```bash
{
    test: /\.scss$/,
    loader:[
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
}
```

#### Configuración del proyecto con Less

Para su instalación se usa lo siguiente:

```bash
npm install --save-dev lss less-loader
``` 

Siguiendo las pasos de la configuración anterior, verificar que existan las constantes ya mencionadas y agregar la siguiente regla:

```bash
{
    test: /\.less$/,
    loader:[
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
    ]
}
```

#### Configuración del proyecto con Stylus

Para su instalación se usa lo siguiente:

```bash
npm install --save-dev stylus stylus-loader
```

Siguiendo las pasos de la configuración para **sass**, verificar que existan las constantes ya mencionadas y agregar la siguiente regla:

```bash
{
    test: /\.styl$/,
    loader:[
        MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader'
    ]
}
```
