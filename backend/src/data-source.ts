import 'reflect-metadata';
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB,

    synchronize: false,

    entities: ['dist/**/*/entity.js'],
    migrations: ['dist/migrations/*.js'],
});
