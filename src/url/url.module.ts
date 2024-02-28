import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { AppModule } from 'src/app.module';
import { ConfigService } from '@nestjs/config';
import { con } from 'src/connection.db';

@Module({
  controllers: [UrlController],
  providers: [UrlService,{
    provide: 'CONNECTION', // Define un nombre para el proveedor
    inject: [ConfigService], // Especifica las dependencias que necesita la función con
    useFactory: async(configService: ConfigService) => await con(configService), // Usa una fábrica para crear la instancia
  },],
})
export class UrlModule {}
