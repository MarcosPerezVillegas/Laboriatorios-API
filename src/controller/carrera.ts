import { RequestHandler } from "express";
import {Carrera} from "../models/carrera";

export const crearCarrera:RequestHandler = async (req,res)=>{
    var car = await Carrera.create({
        clave:req.body.clave,
        nombre:req.body.nombre
    });
    return res.status(200)
        .json({message:"Carrera creado ok!",data:car}); 
 
}

export const borrarCarrera:RequestHandler =async (req,res) => {
    const {clave} = req.params;
    const carreraEliminada: Carrera|null = await Carrera.findByPk(clave);
    await Carrera.destroy({where:{clave}});
    return res.status(200).json({message:"Carrera eliminada ok!", data:carreraEliminada});
}

export const obtenerTodasCarreras:RequestHandler =async (req,res) => {
    const todasLasCarreras:Carrera[] = await Carrera.findAll();
    return res.status(200)
    .json({message:"Carreras obtenidas ok!", data:todasLasCarreras});
}

export const obtenerCarrerasPorNombre:RequestHandler =async (req, res) => {
    const carreras:Carrera[] = await Carrera.findAll({
        attributes: ["clave",["nombre", "Nombre_Carrera"]]
    });
    
    return res.status(200).json({message:"Carrera Encontrada!", data:carreras})
}

export const getCarPorClave:RequestHandler =async (req,res) => {
    const {clave} = req.params;
    const carrera: Carrera | null = await Carrera.findByPk(clave);
    return res.status(200)
    .json({message:"Carrera encontradas!", data:carrera});
}

export const actualizarCarrera: RequestHandler =async (req,res) => {
    const {clave} = req.params;
    await Carrera.update({...req.body}, {where:{clave}});
    const carreraActualizada: Carrera | null = await Carrera.findByPk(clave);

    return res.status(200)
    .json({message:"Carrera actualizada ok!", data:carreraActualizada});
}
