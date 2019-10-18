import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { NestPgpromiseModule } from 'nest-pgpromise/dist';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    NestPgpromiseModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({connection: configService.config}),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
