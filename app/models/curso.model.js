module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define("cursos", {
    titulo: DataTypes.STRING(80),
    descripcion: DataTypes.STRING(80),
  });

  return Curso;
};
