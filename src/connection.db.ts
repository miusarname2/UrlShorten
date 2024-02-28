import { ConfigService } from "@nestjs/config";
import { MongoClient } from "mongodb";

export async function con(configService : ConfigService) {
  try {
    const uri = configService.get<string>('ATLAS_STRCONNECT');
    console.log(uri);
    const client = await MongoClient.connect(uri);
    return client.db();
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

