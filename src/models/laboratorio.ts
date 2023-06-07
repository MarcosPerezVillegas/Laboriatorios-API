import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
import { Usuario } from "./usuario";

@Table({
    timestamps: false,
    tableName: "laboratorio"
})
export class Laboratorio extends Model{
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    nombre!:string
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    edificio!:string
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    capacidad!:number
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    usuario_codigo!:string

    @BelongsTo(()=>Usuario,'usuario_codigo')
    jefe!:Usuario
}