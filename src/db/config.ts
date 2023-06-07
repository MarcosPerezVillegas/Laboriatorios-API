import {Sequelize} from "sequelize-typescript";
import { Laboratorio } from "../models/laboratorio";
import { Usuario } from "../models/usuario";
import { Carrera } from "../models/carrera";
import { Equipo } from "../models/equipo";
import { Grupo } from "../models/grupo";
import { Materia } from "../models/materia";
import { Practica } from "../models/practica";
import { Rol } from "../models/rol";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "wasd",
    database: "reservas",
    logging: true,
    port:33061,
    models:[Usuario,Laboratorio,Carrera,Equipo,Grupo,Materia,Practica,Rol],

});

export default connection;
