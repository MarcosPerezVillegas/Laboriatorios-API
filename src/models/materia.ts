import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
import { Usuario } from "./usuario";
// import {reserva} from "./reserva";
// import {grupo} from "./grupo"; solo como ejemplo para la relacion de las tablas

@Table({
    timestamps:false,
    tableName:"materia"
})
export class Materia extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull:true
    })
    crn!:number
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    clave!:string
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    nombre!:string
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    grupo_idgrupo!:number

    // @BelongsTo(()=>Grupo, 'grupo_idgrupo')
    // grupo!:Grupo     ejemplo para la relacion
}

