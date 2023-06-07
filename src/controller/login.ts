import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario";

/**
 * Función asíncrona que permite generar tokens basados en contraseñas
 * Esta función se encargará de generar un token para el usuario
 * @param req es el objeto con la petición del usuario, debe contener email, password
 * @param res es el objeto con el que responderemos
 * @returns imprime el token en caso de que las credenciales sean correctas
 */
export async function login(req:Request, res:Response) {
    //1. obtenemos el email y el password que envían en el cuerpo de la petición
    const {email, password} = req.body;

    //2. consultamos el usuario basándonos en su email
    const usuario = await Usuario.findOne({
        where: {email}
    });
    //3. Si no existe el usuario, lo indicamos en la respuesta
    if(!usuario){
        return res.status(401).json({message:"el usuario no existe"});
    }
    //4. Si el usuario existe, verificamos que la contraseña que nos mandan sea la misma que está en la bd
    const passValida = await bcrypt.compareSync(password,usuario.password);//bcrypt verificará que la contraseña en texto plano sea la misma que la codificada

    //5. si la password no es la misma, se lo decimos al usuario que realizó la petición
    if(!passValida){    
        return res.status(401).json({message:"La contraseña es incorrecta"});
    }
    //6. Si la contraseña es correcta generamos un token mediante jwt, ponemos un payload (el código del usuario)
    //establecemos con qué clave se hasheará
    //establecemos el tiempo en el que expirará
    const token = jwt.sign(
        {codigo:usuario.codigo},
        "clave-para.encriptar",
        {expiresIn:'2h'}
    );
    //6. Retornamos el token en json
    res.json({token});
}