module.exports = {
  dialect: 'postgres',
  host: process.env.GOBARBER_DB_HOST,
  username: process.env.GOBARBER_DB_USERNAME,
  password: process.env.GOBARBER_DB_PASSWORD,
  database: process.env.GOBARBER_DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
