/* eslint no-console: 0 */
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV === 'development',
  migrationsRun: false,
  logging: false,
  entities: [],
  migrations: ['src/shared/database/typeorm/migration/**/*.{js,ts}'],
  subscribers: [],
});

// initialize connection with the database
export const initializeDBConnection = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('✅ Database connection initialized successfully ');
    }
  } catch (error) {
    console.log('🔴 Error to initialize database connection', error);
  }
};
