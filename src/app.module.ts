import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapModule } from './soap/soap.module';

@Module({
  imports: [SoapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
