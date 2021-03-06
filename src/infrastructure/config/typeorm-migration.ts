import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  schema: process.env.DATABASE_SCHEMA,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  logging: true,
  cli: {
    migrationsDir: 'src/infrastructure/migrations'
  }
};

export = typeOrmConfig;
