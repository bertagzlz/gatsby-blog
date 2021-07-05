---
   path: /blog/como-funciona-gatsby
   date: 2020-02-18T15:44:02.080Z
   title: como-funciona-gatsby!
   author: Yo
---
😃 ¿Cuándo se genera el contenido estático?
Se genera cuando haces el despliegue de la aplicación, es decir, cuando ejecutas el comando `build`. Luego veremos cómo podemos automatizar este proceso desplegándolo en Netlify.

Si yo escribo un nuevo post, ¿cómo aparecerá en el sitio? Al ser un sitio web estático, este no se puede enterar en ningún momento de que los contenidos del blog o la página han cambiado. Por esta misma razón, hay que volver a ejecutar el comando build para que la página se actualice. Esto puede parecer un poco desesperante, pero luego os enseñaré un consejo para que este proceso sea mucho más simple y no tengáis que preocuparos por esto.

¿Necesito tener algo más instalado a parte de Node.js?
Sí, hay que instalar el CLI de Gatsby, cuyas instrucciones de instalación están en su página web. Pfff, ¿Otro CLI? Sé que puede llegar a ser molesto tener mil CLIs instalados en el ordenador, pero si verdaderamente vais a usar Gatsby, merece la pena.
`npm install -g gatsby-cli`

Desplegamos entorno de pruebas con `gatsby develop`, podemos acceder a:
 localhost:8000/___graphql para entrar a un entorno de pruebas de GraphQL. En esta página, podemos realizar nuestras consultas personalizadas para luego llevarlas a la aplicación y evitar algunos errores. 

## Desplegar en Netlify
Primero e github, luego a netlify. comando ´npm run build´ y seleccionamos carpt public como contenedora.
## ¿cómo puedo hacer para que cada vez que actualizo el contenido, se reconstruya la aplicación web?
Con los hooks. Los creo en netlify. No es más que una url, a la que cada vez que accedemos mediante POST se vuelve a compliar el proyecto.
## Working with pages 
https://dev.to/ibaslogic/gatsby-tutorial-a-step-by-step-guide-to-building-a-gatsby-site-from-scratch-2neh
