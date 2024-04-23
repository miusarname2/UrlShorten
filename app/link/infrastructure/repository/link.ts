import { con } from "../database/connection.js";

const db = await con();
// @ts-ignore
const links = await db.collection("link");

export const createLink = async (linkToCreate : any)=>{
    try {
        return await links.insertOne(linkToCreate);
      } catch (error:any) {
        return { error: error, completed: false };
      }
}

export const getLinkById = async (ids: string | number) => {
  try {
    return await links.findOne({ refernce: ids });
  } catch (error:any) {
    console.error("Error al obtener el video por ID:", error);
    return null;
  }
};

export const getAllLinks = async () => {
    try {
        const data = await links.find({}).toArray();
        return data;
    } catch (error:any) {
        console.error("Error al obtener el video por ID:", error);
        return null;
    }
}