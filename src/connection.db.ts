import { ConfigService } from "@nestjs/config";
import { MongoClient } from "mongodb";

export async function con(configService: ConfigService) {
  try {
    const uri = configService.get<string>('ATLAS_STRCONNECT');
    const client = await MongoClient.connect(uri);
    return await client.db();
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

export async function main() {
  const configService = new ConfigService(); // ¡Asegúrate de inicializar ConfigService correctamente!
  const db = await con(configService);
  // Hacer algo con db
}


