import {Table, Model, Column, DataType, BelongsTo} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "practicas"
})
export class Practica extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    nombre!: string

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    descripcion!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    archivo!: string
}