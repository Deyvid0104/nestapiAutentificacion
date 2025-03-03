# NestAPI

## Descripción
NestAPI es una aplicación backend construida con NestJS, diseñada para proporcionar una API robusta y escalable para gestionar diversos recursos. Esta aplicación permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre diferentes entidades, facilitando la gestión de datos en tiempo real.

## Características
- **Arquitectura modular**: Utiliza módulos para organizar el código de manera eficiente.
- **Soporte para TypeScript**: Aprovecha las ventajas de TypeScript para un desarrollo más seguro y escalable.
- **Integración con bases de datos**: Soporta múltiples bases de datos a través de ORM como TypeORM.
- **Autenticación y autorización**: Implementa estrategias de seguridad para proteger las rutas y recursos.
- **Documentación automática**: Genera documentación de la API utilizando Swagger.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd nestapiAutentificacion
   ```
3. Instala las dependencias:
   ```bash
   npm install
   npm i @nestjs/typeorm typeorm mysql2
   npm install @nestjs/jwt @nestjs/passport passport passport-jwt passport-local bcrypt @types/passport-jwt @types/passport-local @types/bcrypt
   ```
4. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto y añadiendo las configuraciones necesarias.

## Uso
Para iniciar la aplicación, ejecuta:
```bash
npm run start:dev
```

## Ejemplo .env
```
PUERTO=5000
DBNAME=base1
DBNAME2=base2
DB_TAREA=tarea
URL=localhost
USUARIO=
PASSWORD=
PASSWORD_KEY=
```

### Ejemplo de uso
- Accede a la API utilizando herramientas como Postman o Thunder Client.
- Realiza solicitudes a las rutas definidas para interactuar con los recursos.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva característica'`).
4. Envía un pull request explicando los cambios realizados.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
