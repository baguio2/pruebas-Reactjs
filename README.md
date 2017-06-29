# pruebas-Reactjs

**Repositorio con distintos ejercicios de pruebas en Reactjs**
--------------------------------------------------------------


Este repositorio crea una pequeña aplicación para visualizar la lista de empleados de una empresa. Cada uno de estos empleados tienen una pequeña colección de fotos que también se debe visualizar al presionar en el nombre del empleado.

Para la solución de este ejercicio estoy utilizando **Reactjs**.

-------------------------------------------------------------

***Solución del ejercicio.***
-----------------------

Para la realización de este ejercicio he utilizado el último estandar de programaciín de javascript ES6, que traduciré al estandar que entienden los navegadores con Browserify y Babel.

Para ello he creado una estructura del proyecto básica que se puede ver en el código. Necesito también tener instalado **NodeJs y npm** para la instalación del paquete react ejecutando el siguiente código.

    $ npm install --save react

En la solución del ejercicio he creado varios componentes para la visualización de las distintas partes de la aplicación.

 - Componentes de empleado:
	 - *empleado-app*: Componente principal de empleado que hace la llamada a la Api-rest y llama al componente empleado-list para mostrar la lista de empleados. 
	 - *empleado-list*: muestra la lista de empleados.
	 - *empleado-row*: muestra una fila con los datos del empleado.

 - Componentes de álbum:
	 - *album*: Componente principal de albúm que hace la llamada a la Api-rest recibiendo el id del empleado y llama al componente album-list para mostrar la lista de albums que tiene un empleado. 
	 - *album-list*: muestra la lista de albums de un empleado.
	 - *album-row*: muestra una fila con los datos del álbum.
 - Componentes de Galería:
	- *galería*: Componente principal de galería que hace la llamada a la Api-rest recibiendo el id del albúm para mostrar la lista de imágenes del mismo, pasando por parámetro a galeria-list el array con los datos de las imágenes. 
	- *galeria-list*: crear el objeto para mostrar la galería de imágenes. La galería de imágenes se muestra gracias a la librería utilizada *react-photo-gallery* para mostrar una galería de imágenes de forma de dinámica.

Para instalar la librería *react-photo-gallery* he ejecutado el siguiente comando:

    $ npm install --save react-photo-gallery

Para albergar los archivos de producción he creado la carpeta **build** donde tendremos que crear el ***index.html*** principal de la aplicación. 
También tendré el fichero js/bundle.js que se generará gracias a Browserify y Babelify en una tarea de gulp. Debemos instalar las siguientes dependencias para que esto ocurra. 

    $ npm install --save-dev gulp
    $ npm install --save-dev gulp-webserver
    $ npm install --save-dev gulp-stylus
    $ npm install --save-dev browserify
    $ npm install --save-dev babelify
    $ npm install --save-dev vinyl-source-stream
    $ npm install --save-dev gulp-minify-css
    $ npm install --save-dev nib

En el archivo ***gulpfile.js*** tendré los archivos scripts necesarios para la generación de las tareas necesarias.

Para la gestión de rutas dentro de la aplicación he utilizado la dependencia **react-router** instalada de la siguiente forma.

    $ npm install --save react-router
    $ npm install --save react-router-dom



-------------------------------------------------------------
Para descargar este fichero debemos abrir la terminal y realizar los siguientes pasos.

    $ git clone https://github.com/baguio2/pruebas-Reactjs.git
 A continuación debemos entrar en la carpeta *pruebas-Reactjs* creada anteriormente y ejecutar *npm install* para descargar todas las dependencias:
 

    $ cd pruebas-Reactjs
    $ npm install
Para ejecutar y probar la aplicación debemos escribir en el terminal:

    $ gulp build
    $ gulp
Abriendo el navegador y poniendo **http://localhost:8080** tendremos nuestra app corriendo.


----------
Nota: La aplicación no está terminada aún. Iré subiendo actualizaciones según vaya solucionando pequeños problemas.
