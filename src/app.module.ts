import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoginModule } from './login/login.module';
import { InboxModule } from './inbox/inbox.module';
import { SentModule } from './sent/sent.module';
import { SendModule } from './send/send.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db/mail-test.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    LoginModule,
    InboxModule,
    SentModule,
    SendModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
