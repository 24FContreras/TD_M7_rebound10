module.exports = {
  HOST: "localhost",
  USER: "talentodigital",
  PASSWORD: "talentodigital",
  DB: "rdm7s10",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
