import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "rol"
})
export class Rol extends Model{
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    nombre!:string
   
}