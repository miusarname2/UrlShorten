import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class SomeService {
  constructor(
    @Inject('CONNECTION') private readonly connection: any,
  ) {
    // Ahora puedes usar this.connection en este servicio
  }

  // Métodos que utilizan this.connection
}
