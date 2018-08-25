#  F O O D M A P

Crea una web-app que a través de un input pueda filtrar los restaurantes
que se encuentran cerca de ti *(Tú decides la estructura que tendrán tus datos,
puedes crear una lista de restaurantes en un arreglo, en un objeto, consumir una API, etc. Lo importante es que el contenido debe ser dinámico y no estático y el diseño es totalmente libre)*.

#### Principales Usuarios.

Personas de entre 18 y 40 años que busquen un restaurant en donde consumir que este cerca a su domicilio o donde ellos esten.

#### Como descubriste las necesidades del producto

Haciendo 2 entrevistas a usuarios potenciales que, tenian la necesidad de encontrar restaurantes pero no sabian a donde ir y necesitaban direcciones para llegar mas rapido.

#### Qué problema resuelve el producto para estos usuarios.

Simplifica en gran medida el buscar en internet un lugar al azar en donde comer segun tus gustos y criterios de busqueda que tengas.

#### Cuáles son los objetivos de estos usuarios en relación con el producto.

Encontrar un restaurant y su direccion sin gastar tantos recursos.

#### Cuáles son las principales funcionalidades del producto y cuál es su prioridad.

Filtrar segun el criterio de eleccion para que te generen los restaurantes.
Al seleccionar un nombre te salga un modal con su nombre, direccion y una imagen.

#### Benchmarck

Se encontro tres web similares a foomap:

##### Atrapalo.com
Cuenta con datos basicos de los restaurantes.
Permite reservar mesa.
Ofrece descuentos en la carta de los restaurantes.
Tiene secciones de mejor precio, mejor descuento y mejor valorado.

![Atrapalo](/img/atrapalo.png)

##### Tipadvisor.com.pe
Cuenta con datos basicos de los restaurantes.
No permite reservar mesa.
Muestra comentarios de usuarios que recomiendan restaurantes.
Permite filtrar la informacion por varios criterios

![Tripadvisor](/img/tripadvisor.png)

##### Peru Travel
Cuenta con datos basicos de los restaurantes.
No permite reservar mesa.
Muestra el costo promedio del servicio.

![PeruTravel](/img/peru_travel.png)

#### Descripcion del Producto final.(25/08/2018)

Presento una vista splash con motivos de alimentos como presentación.
Te redirige a otra vista donde puedes ver en términos generales de que se trata el producto.
Al hacer click en los nombres de restaurantes, aparece un modal que te da información sobre el restaurant.


#### Requerimientos y Flujo de la aplicación.

Vista splash con duración de 2 segundos que redirecciona a tu vista
principal.
![Splash](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/splash.jpg?raw=true)

En la vista principal se muestran todos los restaurantes "cerca de ti" junto
con el input para filtrar tu elección *(Los criterios de filtrado son decisión
tuya, puede ser por tipo de comida, costos, orden alfabético, etc.)*.
![vista principal](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/2.jpg?raw=true)

Ya que se hizo la elección del filtro deben mostrarse únicamente aquellos
restaurantes que cumplan con la condición.
![vista filtrado](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/3.jpg?raw=true)

Al seleccionar alguno de los restaurantes, deberá mostrarse la información de
este a través de un modal.
![modal imagen](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/5.jpg?raw=true)

Una vez cerrado el modal debe volver a la vista principal.
![ultima vista](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/08-code-challenges/foodmap/6.jpg?raw=true)