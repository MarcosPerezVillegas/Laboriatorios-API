import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Laboratorio } from "./laboratorio";

@Table({
    timestamps: true,
    tableName: "usuario",
    paranoid:true
})
export class Usuario extends Model{
    @Column({
        type:DataType.STRING,
        allowNull:false,
        primaryKey:true,
    })
    codigo!:string;
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    email!:string
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    password!:string
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    rol_id!:number

    @HasMany(()=>Laboratorio,'usuario_codigo')
    laboratorios!:Laboratorio[]
}