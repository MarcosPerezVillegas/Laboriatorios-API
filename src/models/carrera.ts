import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "carrera"
})
export class Carrera extends Model{

    @Column({
        type: DataType.STRING,
        allowNull:false,
        primaryKey:true,
    })
    clave!:string

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    nombre!:string
   
}