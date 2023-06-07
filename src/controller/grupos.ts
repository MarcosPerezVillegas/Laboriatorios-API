import { RequestHandler } from "express";
import {Op} from "sequelize";
import { Grupo } from "../models/grupo";
import { Carrera } from "../models/carrera";

export const crearGrupo:RequestHandler = async (req,res)=>{
    var gru = await Grupo.create({
        nombre:req.body.nombre,
        carrera_clave:req.body.carrera_clave
    });
    return res.status(200)
        .json({message:"Grupo creado ok!",data:gru});
}   

export const borrarGrupo:RequestHandler = async (req,res) => {
    const {idgrupo} = req.params;
    const grupoEliminado: Grupo|null = await Grupo.findByPk(idgrupo);
    await Grupo.destroy({where:{idgrupo}});
    return res.status(200).json({message:"Grupo eliminado ok!", data:grupoEliminado});
}

export const obtenerTodosGrupos:RequestHandler =async (req,res) => {
    const todosLosGrups:Grupo[] = await Grupo.findAll({
        include:Carrera
    });
    return res.status(200)
    .json({message:"Grupos obtenidos ok!", data:todosLosGrups});
}

export const obtenerGruposPorNombre:RequestHandler =async (req,res) => {
    const grupos:Grupo[] = await Grupo.findAll({
        attributes: ["idgrupo",["nombre","nombre_grupo"]]
    });

    return res.status(200).json({message:"Grupos obtenidos", data:grupos});
}

export const buscarGruposPorEncargado:RequestHandler =async (req,res) => {
    const grupos:Grupo[] = await Grupo.findAll({
        where : {
            carrera_clave : req.params.carrera_clave, 
        }
    });

    return res.status(200).json({message:"Grupos encontrados: "+grupos.length,data:grupos})
}

export const buscarGruposPorNombre:RequestHandler =async (req,res) => {
    const grupos:Grupo[] = await Grupo.findAll({
        attributes:["idgrupo",["nombre","nombre_grupo"]],
        where:{
            nombre : {
                [Op.like] : "%"+req.params.nombre+"%"
            }
        }
    });
    return res.status(200).json({message:"Grupos encontrados: "+grupos.length,data:grupos});
}

export const getLabPorId:RequestHandler =async (req,res) => {
    const {idgrupo} = req.params;
    const grupo: Grupo | null = await Grupo.findByPk(idgrupo);
    return res.status(200)
    .json({message:"Grupo encontrado!", data:grupo});
}

export const actualizarGrupo: RequestHandler =async (req,res) => {
    const {idgrupo} = req.params;
    await Grupo.update({...req.body}, {where:{idgrupo}});
    const grupotioActualizado: Grupo | null = await Grupo.findByPk(idgrupo);

    return res.status(200)
    .json({message:"Grupo actualizado ok!", data:grupotioActualizado});
}