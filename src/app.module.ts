import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forRoot({ //veya getCongig
    type: 'sqlite',
    database: 'database3.sqlite',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
