module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define("estudiantes", {
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    nro_identificacion: DataTypes.INTEGER,
  });

  return Estudiante;
};
