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
