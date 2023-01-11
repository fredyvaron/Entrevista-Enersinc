### Front

_Que cosas necesitas para instalar el software y como instalarlas_

```
Tener Node => v18.9.0
Tener React => 18.2.0
```

### Instalación 🔧
_Instalamos las dependencias_

```
npm install
```
_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando El Proyecto ⚙️

_Levantamos el servidor con el siguiente comando_

```
npm run start
```

## Despliegue 📦

_En el despliege como directorio raiz ponemos front_


_Como comando de Inicio usamos el comando_
```
gunicorn backend.wsgi
```

_Creamos la Variable de entorno_

- REACT_APP_URL_LOCAL = Url_Del_Backend_Deployado

## Construido con 🛠️


* [React](https://es.reactjs.org/) - Una biblioteca de JavaScript para construir interfaces de usuario
* [Antd](https://ant.design/) - es una biblioteca React UI 
* [Axios](https://axios-http.com/docs/intro) - Cliente Http para peticiones
* [Dotenv](https://www.npmjs.com/package/dotenv) - Libreria Para El Uso De Variables De Entorno
* [Moment](https://momentjs.com/) - Libreria Para El Manejo De Fechas

Realizado Por [Fredy Alberto Varon Guzman](https://github.com/fredyvaron) 😊