import { RequestHandler } from "express";
import {Op} from "sequelize";
import {Equipo} from "../models/equipo";

export const crearEquipo:RequestHandler = async (req,res)=>{
    var equip = await Equipo.create({...req.body});
    return res.status(200).json({message:"Equipo creado ok!",data:equip});

}

export const borrarEquipo:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const equipoEliminado: Equipo|null = await Equipo.findByPk(id);
    await Equipo.destroy({where:{id}});
    return res.status(200).json({message:"Equipo eliminado ok!", data:equipoEliminado});
}

export const obtenerTodosEquipos:RequestHandler =async (req,res) => {
    const todosLosEquipos:Equipo[] = await Equipo.findAll({
 
    });
    return res.status(200)
    .json({message:"Equipos obtenidos ok!", data:todosLosEquipos});
}

export const obtenerEquiposPorNombre:RequestHandler =async (req,res) => {
    const equipos:Equipo[] = await Equipo.findAll({
        attributes: ["id",["nombre","nombre_equipo"]]
    });

    return res.status(200).json({message:"Equipos obtenidos", data:equipos});
}

export const buscarEquiposPorNombre:RequestHandler =async (req,res) => {
    const equipos:Equipo[] = await Equipo.findAll({
        attributes:["id",["nombre","nombre_equipo"]],
        where:{
            nombre : {
                [Op.like] : "%"+req.params.nombre+"%"
            }
        }
    });
    return res.status(200).json({message:"Equipos encontrados: "+equipos.length,data:equipos});
}

export const getEquipoPorId:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const equip: Equipo | null = await Equipo.findByPk(id);
    return res.status(200)
    .json({message:"Equipo encontrado!", data:equip});
}

export const actualizarEquipo: RequestHandler =async (req,res) => {
    const {id} = req.params;
    await Equipo.update({...req.body}, {where:{id}});
    const equipoActualizado: Equipo | null = await Equipo.findByPk(id);

    return res.status(200)
    .json({message:"Equipo actualizado ok!", data:equipoActualizado});
}
