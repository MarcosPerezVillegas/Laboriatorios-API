import { RequestHandler } from "express";
import {Op} from "sequelize";
import {Laboratorio} from "../models/laboratorio";
import { Usuario } from "../models/usuario";

export const crearLaboratorio:RequestHandler = async (req,res)=>{
    var lab = await Laboratorio.create({
        nombre:req.body.nombre,
        edificio:req.body.edificio,
        capacidad:req.body.capacidad,
        usuario_codigo:req.body.usuario_codigo
    });
    return res.status(200)
        .json({message:"Laboratorio creado ok!",data:lab});

}

export const borrarLaboratorio:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const laboratorioEliminado: Laboratorio|null = await Laboratorio.findByPk(id);
    await Laboratorio.destroy({where:{id}});
    return res.status(200).json({message:"Laboratorio eliminado ok!", data:laboratorioEliminado});
}

export const obtenerTodosLaboratorios:RequestHandler =async (req,res) => {
    const todosLosLabs:Laboratorio[] = await Laboratorio.findAll({
        include:Usuario
    });
    return res.status(200)
    .json({message:"Laboratorios obtenidos ok!", data:todosLosLabs});
}

export const obtenerLaboratoriosPorNombre:RequestHandler =async (req,res) => {
    const laboratorios:Laboratorio[] = await Laboratorio.findAll({
        attributes: ["id",["nombre","nombre_laboratorio"]]
    });

    return res.status(200).json({message:"Laboratorios obtenidos", data:laboratorios});
}

export const buscarLaboratoriosPorEncargado:RequestHandler =async (req,res) => {
    const laboratorios:Laboratorio[] = await Laboratorio.findAll({
        where : {
            usuario_codigo : req.params.usuario_codigo, 
        }
    });

    return res.status(200).json({message:"Laboratorios encontrados: "+laboratorios.length,data:laboratorios})
}

export const buscarLaboratoriosPorNombre:RequestHandler =async (req,res) => {
    const laboratorios:Laboratorio[] = await Laboratorio.findAll({
        attributes:["id",["nombre","nombre_laboratorio"]],
        where:{
            nombre : {
                [Op.like] : "%"+req.params.nombre+"%"
            }
        }
    });
    return res.status(200).json({message:"Laboratorios encontrados: "+laboratorios.length,data:laboratorios});
}

export const getLabPorId:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const laboratorio: Laboratorio | null = await Laboratorio.findByPk(id);
    return res.status(200)
    .json({message:"Laboratorio encontrado!", data:laboratorio});
}

export const actualizarLaboratorio: RequestHandler =async (req,res) => {
    const {id} = req.params;
    await Laboratorio.update({...req.body}, {where:{id}});
    const laboratioActualizado: Laboratorio | null = await Laboratorio.findByPk(id);

    return res.status(200)
    .json({message:"Laboratorio actualizado ok!", data:laboratioActualizado});
}

