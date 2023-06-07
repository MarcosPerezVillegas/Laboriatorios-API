import { RequestHandler } from "express";
import {Op} from "sequelize";
import {Practica} from "../models/practica";


export const crearPractica: RequestHandler = async (req,res)=>{
    var prac = await Practica.create({
        nombre:req.body.nombre,
        descripcion:req.body.edificio,
        archivo:req.body.capacidad,   
    });
    return res.status(200)
    .json({message:"Practica creada. OK!", data:prac});
}
export const borrarPractica:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    const PracticaEliminada: Practica|null = await Practica.findByPk(id);
    await Practica.destroy({where:{id}});
    return res.status(200).json({message:"Practica eliminada. OK!", data:PracticaEliminada});
}
export const obtenerTodasPracticas:RequestHandler =async (req,res) => {
    const todasLasPrac:Practica[] = await Practica.findAll({
        ...req.body
    });
    return res.status(200)
    .json({message:"Practicas obtenidas ok!", data:todasLasPrac});
}

export const obtenerPracticasPorNombre:RequestHandler =async (req,res) => {
    const Practicas:Practica[] = await Practica.findAll({
        attributes: ["id",["nombre","nombre_Practica"]]
    });

    return res.status(200).json({message:"Practicas obtenidas", data:Practicas});
}

export const buscarPracticasPorNombre:RequestHandler =async (req,res) => {
    const Practicas:Practica[] = await Practica.findAll({
        attributes:["id",["nombre","nombre_Practica"]],
        where:{
            nombre : {
                [Op.like] : "%"+req.params.nombre+"%"
            }
        }
    });
    return res.status(200).json({message:"Practicas encontradas: "+Practicas.length,data:Practicas});
}

export const getPracticaPorId:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const practica: Practica | null = await Practica.findByPk(id);
    return res.status(200)
    .json({message:"Practica encontrada!", data:Practica});
}

export const actualizarPractica: RequestHandler =async (req,res) => {
    const {id} = req.params;
    await Practica.update({...req.body}, {where:{id}});
    const practicaActualizada: Practica | null = await Practica.findByPk(id);

    return res.status(200)
    .json({message:"Practica actualizada ok!", data:practicaActualizada});
}