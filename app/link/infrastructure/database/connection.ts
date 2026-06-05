import { MongoClient, Db } from "mongodb";
import dotenv from 'dotenv'
dotenv.config();

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function con(): Promise<Db> {
  try {
    if (cachedDb) {
      console.log('📦 Using cached MongoDB connection');
      return cachedDb;
    }

    const uri = process.env.ATLAS_STRCONNECT;
    
    if (!uri) {
      throw new Error('ATLAS_STRCONNECT environment variable is not defined');
    }

    console.log('🔗 Establishing new MongoDB connection...');
    
    const client = new MongoClient(uri, {
      maxPoolSize: 10,
      minPoolSize: 2,
      maxIdleTimeMS: 45000,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
      retryWrites: true,
    });

    await client.connect();
    
    const db = client.db();
    
    cachedClient = client;
    cachedDb = db;
    
    console.log('✅ MongoDB connection established successfully');
    return db;
  } catch (error: any) {
    console.error('❌ MongoDB connection error:', error.message);
    throw error;
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  if (cachedClient) {
    console.log('🔌 Closing MongoDB connection...');
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
  }
});

