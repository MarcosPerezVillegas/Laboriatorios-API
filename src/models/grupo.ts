import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript";
import { Carrera } from "./carrera";

@Table({
    timestamps: false,
    tableName: "grupo"
})
export class Grupo extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        primaryKey:true,
    })
    idgrupo!:number;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    nombre!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    carrera_clave!:string

    @BelongsTo(()=>Carrera,'carrera_clave')
    ILEC!:Carrera

}
