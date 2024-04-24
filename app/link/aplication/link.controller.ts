import { createLink,getAllLinks,getLinkById } from "../infrastructure/repository/link.js";
import shortId from "shortid";
import { Request,Response } from "express";

export async function getLinks(req:Request | any,res:Response): Promise<Response<any, Record<string, any>>> {
    try {
        let links = await getAllLinks();
        return res.status(200).json({message : "All Correct",status:200,data:links});
    } catch (error:any) {
        console.log(error);
        return res.status(500).json({message : "Hubo un error",status:500});
    }  
}

export async function createLinks(req:Request | any ,res:Response): Promise<Response<any, Record<string, any>>> {
    try {
        const uniqueId =shortId.generate();
        req.body.refernce = uniqueId;
        let link = await createLink(req.body);
        return res.status(201).json({message:"Created succesful",status:201,link:link,reference : uniqueId});
    } catch (error:any) {
        console.log(error);
        return res.status(501).json({message:"Failed to Create",status:501});
    }
}

export async function getLinkByIds(req:Request | any,res:Response) {
    try {
        let link = await getLinkById(req.params.id);
        console.log(link.link);
        let url =await link.link;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url; 
            console.log(url);
          }
        res.redirect(url);
    } catch (error:any) {
        console.log(error);
        return res.status(404).json({messsage:"not found",status:404})
    }
}