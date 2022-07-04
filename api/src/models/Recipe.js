const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('recipe', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        health_score: {
            type: DataTypes.INTEGER,
        },
        dishtypes: {
            type: DataTypes.STRING,
        },
        step_by_step: {
            type: DataTypes.STRING,
        },
    });
};
