# NodeJS Backend

## Description
wechat mini program training backend

## Installation

```bash
$ npm install
```

## Database Connection
src\app.module.ts:18~31
```js
TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost\\SQLEXPRESS', // replace your database host
    port: 1433, // replace your database port
    database: 'wechat-training', // replace your database name
    username: 'adis', // replace your database username
    password: 'Admin123', // replace your database password
    entities: [`${__dirname}/entities/**/**.entity{.ts,.js}`],
    logging: true,
    synchronize: true,
    options: {
      encrypt: false,
    },
  }),
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## [Go back](../README.md)
