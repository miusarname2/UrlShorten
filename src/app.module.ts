import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { con } from './connection.db';

@Module({
  imports: [
    UrlModule,
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo sea global
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'CONNECTION', // Define un nombre para el proveedor
      inject: [ConfigService], // Especifica las dependencias que necesita la función con
      useFactory: (configService: ConfigService) => con(configService), // Usa una fábrica para crear la instancia
    },
  ],
})
export class AppModule {}
