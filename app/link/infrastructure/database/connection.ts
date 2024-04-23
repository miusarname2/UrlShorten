import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.ATLAS_STRCONNECT);
export async function con() {
  try {
    const uri = `${process.env.ATLAS_STRCONNECT}`;
    const client = await MongoClient.connect(uri);
    return await client.db();
  } catch (error:any) {
    return { status: 500, message: error.message };
  }
}

async function connectToMongoDB() {
  const client = new MongoClient('mongodb+srv://root:oscar3004@cluster0.ap9ecpy.mongodb.net');

try {
  await client.connect();
  const db = client.db('nombre_de_tu_base_de_datos');
  const links = db.collection('nombre_de_tu_coleccion');
  // Ahora puedes usar `links` para interactuar con tu colección
} catch (error) {
  console.error('Error al conectar a MongoDB:', error);
}
}

connectToMongoDB();