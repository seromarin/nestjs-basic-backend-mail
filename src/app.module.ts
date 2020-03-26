import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoginModule } from './login/login.module';
import { InboxModule } from './inbox/inbox.module';
import { SentModule } from './sent/sent.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db/mail.sqlite'
    }),
    LoginModule,
    InboxModule,
    SentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
