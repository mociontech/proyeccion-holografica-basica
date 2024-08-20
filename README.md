# Proyección holográfica básica

La proyección holográfica básica se realiza mediante un ventilador holográfico que proyecta imágenes o videos en respuesta a las acciones realizadas en la pantalla táctil del dispositivo de interacción. Por ejemplo, cuando un usuario selecciona opciones a través de botones en la pantalla, el holograma se adapta y muestra contenido relevante en tiempo real, mejorando la experiencia visual y de usuario.

## Flujo de la experiencia

![Flujo de la experiencia](/flujoexp.png)

1. Pantalla de bienvenida
2. Pantalla de menú para seleccion de holograma deseado.
3. Proyección de video holografico en ventilador, con complemento en glorificador.
4. Pantalla de despedida.

# Brandeo

### Videos holográficos
Videos en resolución 1080x1080. 

Formato mp4.

Fondo negro.

### Artes

Artes puntuales de cada una de las pantallas del flujo del glorificador.

* Para background, imágenes en 1920x1080 formato PNG.
* Assets como logos, personajes, botones, etc. en formato SVG.

## Instalación y ejecución
Para ejecutar el desarrollo web correctamente es necesario abrir visual studio code como **ADMINISTRADOR**
```bash
# Clonar el repositorio en local

# Tener en cuenta que para esto debe ser colaborador
# o dueño del repositorio
git clone https://github.com/mociontech/proyeccion-holografica-basica.git

# Entra en el directorio
cd proyeccion-holografica-basica

# Crear una nueva rama para el nuevo desarrollo
git branch [nombre del proyecto]

# Trabajar sobre la nueva rama
git checkout [nombre del proyecto]

# Ingresar al directorio del desarrollo web
cd holograma-basico

# Instalar dependencias del desarrollo
npm install

# Ejecutar en servidor local en el puerto 5173
npm run dev
```
### Setup holograma
Para la correcta ejecución es necesario disponer una segunda pantalla aparte de la utilizada en el glorificador.
#### Conexión ventilador
1. Conectar el router previamente configurado.
    * Nombre red: xlz
    * Contraseña: xlz123456
2. Conectar el pc suministrado a la misma red.

#### Setup Ventilador
1. Utilizando el explorador de archivos navegar a la carpeta holo-player.
2. Buscar y ejecutar como **ADMINISTRADOR** el ejecutable ```HoloPlayerSplice_original```.
3. Asegurarse que el ventilador esté dando imágen y que la aplicación esté en pantalla completa.
4. Asegurarse que el ventilador esté conectado con ```HoloPlayerSplice_original```.
    * Panel izquierdo (splice page).
    * Doble click en la ventana con un codigo (abre una ventana emergente).
    * Debe mostrar en la lista un codigo con color.
    * En caso de no mostrarse el dispositivo en la lista, reiniciar el programa.
5. Cargar videos utilizando el botón browse (tener en cuenta que antes de pulsar el botón add esté seleccionada la opción "Circumscribe").
6. Dejar en pantalla completa la aplicación ```HoloPlayerSplice_original``` en la pantalla distinta al glorificador.

#### Setup Glorificador
1. Abrir en la pantalla del glorificador un navegador web. 
2. Dirigirse a la dirección ```[ip del pc servidor]:3000```.
    * Para obtener la ip del pc, entrar a la terminal y correr el comando ```ipconfig```.
    * la ip se encuentra con el nombre "Dirección IPv4",  debe tener una estructura similar a "128.168.xx.xx".
3. Poner en pantalla completa el navegador utilizando F11.

## Resolución
La aplicación de la proyección holográfica esta dispuesta para dos pantallas 1920x1080.