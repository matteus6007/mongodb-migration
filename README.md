# MongoDB Migrations

## Local MongoDB

Run MongoDB version `7.0` locally running on port `27017` using [Mongo Docker Image](https://hub.docker.com/_/mongo):

```shell
docker-compose up
```

Stop server and delete resources:

```shell
docker-compose down -v --rmi local --remove-orphans
```

## Data Migration

Using [Flyway](https://documentation.red-gate.com/fd/tutorial-using-mongodb-with-flyway-225609601.html) to migrate [MongoDB](https://documentation.red-gate.com/fd/mongodb-225608320.html) scripts.

Examples can be found at https://www.mongodb.com/docs/mongodb-shell/write-scripts/ and https://www.mongodb.com/docs/manual/reference/method/.

### Docker

```shell
docker run --network migrations --rm -v ${pwd}/db/js:/flyway/sql -v ${pwd}/db/config/local:/flyway/conf flyway/flyway:10.11.0 migrate info
```

> [!NOTE]
> Currently throws error `No database found to handle jdbc:mongodb://localhost:27017`.

### CLI

https://documentation.red-gate.com/flyway/flyway-cli-and-api/usage/command-line

```shell
flyway -url=jdbc:mongodb://localhost:27017/test -configFiles="./db/config/local/flyway.conf" migrate info
```

### Github Actions

See https://dev.to/chetan07/automating-database-migrations-with-flyway-and-github-actions-550p for example.
