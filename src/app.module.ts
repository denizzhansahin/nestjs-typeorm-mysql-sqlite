import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';

@Module({
  imports: [TypeOrmModule.forRoot({ //veya getCongig
    type: 'sqlite',
    database: 'database3.sqlite',
    synchronize: true,
    logging: false,
    entities: [User,Profile],
    migrations: [],
    subscribers: [],
  }), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
