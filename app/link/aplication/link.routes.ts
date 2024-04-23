import { Router } from "express";
import { createLinks,getLinkByIds,getLinks } from "./link.controller.js";

export const link: Router = Router();

link.get('/',getLinks)
link.post('/',createLinks)
link.get('/:id',getLinkByIds)