import { DataTypes } from "sequelize";
import { db } from "../db.js";

export const Persona = db.define(
  "Persona",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      field: "nombre",
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      field: "apellido",
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    direccion: {
      field: "direccion",
      type: DataTypes.STRING(100),
    },
    email: {
      field: "email",
      type: DataTypes.STRING(80),
    },
    edad: {
      field: "edad",
      type: DataTypes.INTEGER,
    },
    altura: {
      field: "altura",
      type: DataTypes.DECIMAL,
    },
    peso: {
      field: "peso",
      type: DataTypes.DECIMAL,
    },
  },
  { tableName: "personas", timestamps: false }
);
