import { Table, Model, Column, DataType} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "equipo"
})
export class Equipo extends Model{
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    nombre!:string
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    descripcion!:string
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    cantidad!:number
   
}