import { RequestHandler } from "express";
import {Materia} from "../models/materia";
import { Op } from "sequelize";
// import {Grupo} from "../models/grupo"; ejemplo de importacion

export const crearMateria:RequestHandler = async (req,res)=>{
    var materia = await Materia.create({...req.body});//los 3 puntos es un operador que se usa para arreglos
    //obteniendo todos valores que tiene un arreglo u objeto dependiendo de lo que se este utilizando
    return res.status(200).json({message:"Materia creada",data:materia});
}

export const deleteMateria:RequestHandler = async(req,res)=>{
    const {crn}= req.params;
    const materiaBorrada: Materia|null = await Materia.findByPk(crn);

    await Materia.destroy({where:{crn}});
    return res.status(200).json({message:"Materia eliminada ok!",data:materiaBorrada});
}

export const getAllMaterias:RequestHandler = async(req,res)=>{
    const todosLosLabs:Materia[] = await Materia.findAll();
    return res.status(200).json({message:"Materias obtenidas ok!", data:todosLosLabs});
}

export const getMateriaId:RequestHandler= async(req,res)=>{
    const {crn} = req.params;
    const materia:Materia|null = await Materia.findByPk(crn);
    return res.status(200).json({message:"Materias encontradas", data:materia});
}

export const updateMateria:RequestHandler= async(req,res)=>{
    const {crn} = req.params;
    await Materia.update({...req.body}, {where:{crn}});
    const materiaUpdate:Materia|null = await Materia.findByPk(crn);
    return res.status(200).json({message:"Materia Actualizada Correctamente!", data:materiaUpdate});
}

//metodo adicional
export const getMatByName:RequestHandler =async (req,res) => {
    const materias:Materia[] = await Materia.findAll({
        attributes:[
            "crn","nombre"]})
    return res.status(200).json({message:"Materias obtenidas solo nombre y CRN", data:materias});
}

export const getMatsByName:RequestHandler =async (req,res) => {
    const materias:Materia[] = await Materia.findAll({
        attributes:["crn",["clave","nombre"]],
        where: {
            nombre:{
                [Op.like] : '%'+req.params.nombre+'%'
            }
        }});
    return res.status(200).json({message:"Materia Encontrado por Nombre:"+materias.length, data:materias});
}
// Obtener mas datos por medio de relaciones (hasMany,manyToMany)

// export const obtenerTodasMaterias:RequestHandler = async(req,res)=>{
//     const todosLasMaterias:Materia[] = await Materia.findAll({
//         include:Grupo
//     });
//     return res.status(200).json({message:"Materias obtenidos ok!", data:todosLasMaterias});
// }
// Solo como ejemplo de relacion
