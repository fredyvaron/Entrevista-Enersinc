### Backend 

_Que cosas necesitas para instalar el software y como instalarlas_

```
Tener Instalado python
```

### Instalación 🔧
_Creamos un entorno virtual_

```
python3 -m venv env
```
_Activamos el entorno virtual_
```
source env/bin/activate
```
_Nos Ubicamos en la carpeta backend con el comando_

```
cd backend
```
_Instalamos las Dependencias Ejecutando El Siguiente Comando_

```
pip install -r requirements.txt
```
_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando El Proyecto ⚙️

_Levantamos el servidor con el siguiente comando_

```
python3 manage.py runserver
```

## Despliegue 📦

_En el despliege como directorio raiz ponemos el directorio backend_

_En el Buid command usamos el comando_
```
./build.sh
```

_Como comando de Inicio usamos el comando_
```
gunicorn backend.wsgi
```

_Creamos las Variables de entorno_

- DATABASE_URL = postgres://{user}:{password}@{hostname}:{port}/{database-name} / con este estilo
- PYTHON_VERSION
- SECRET_KEY
- WEB_CONCURRENCY = 4



## Construido con 🛠️


* [Django](https://www.djangoproject.com/) - Framework De python
* [Postgrestsql](https://www.postgresql.org/) - Base De Datos De Produccion
* [Sqlite3](https://www.sqlite.org/index.html) - Base De Datos Local
* [Django Rest Framework](https://www.django-rest-framework.org/) - Base De Datos Local

Realizado Por [Fredy Alberto Varon Guzman](https://github.com/fredyvaron) 😊