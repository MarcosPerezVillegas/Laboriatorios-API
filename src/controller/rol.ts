import { RequestHandler } from "express";


import { Rol } from "../models/rol";

export const crearRol:RequestHandler = async (req,res)=>{
    var rol = await Rol.create({
        nombre:req.body.nombre
    });
    return res.status(200)
        .json({message:"Rol creado ok!",data:rol});

}

export const borrarRol:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const rolEliminado: Rol|null = await Rol.findByPk(id);
    await Rol.destroy({where:{id}});
    return res.status(200).json({message:"Rol eliminado ok!", data:rolEliminado});
}

export const obtenerTodosLosRoles:RequestHandler =async (req,res) => {
    const todosLosRoles:Rol[] = await Rol.findAll();
    return res.status(200)
    .json({message:"Roles obtenidos ok!", data:todosLosRoles});
}

export const obtenerRolesPorNombre:RequestHandler =async (req, res) => {
    const roles:Rol[] = await Rol.findAll({
        attributes: ["id",["nombre", "Nombre_Rol"]]
    });
    return res.status(200).json({message:"Rol Encontrado!", data:roles})
}


export const getRolPorId:RequestHandler =async (req,res) => {
    const {id} = req.params;
    const rol: Rol | null = await Rol.findByPk(id);
    return res.status(200)
    .json({message:"Roles encontrados!", data:rol});
}

export const actualizarRol: RequestHandler =async (req,res) => {
    const {id} = req.params;
    await Rol.update({...req.body}, {where:{id}});
    const rolActualizado: Rol | null = await Rol.findByPk(id);

    return res.status(200)
    .json({message:"Rol actualizado ok!", data:rolActualizado});
}
