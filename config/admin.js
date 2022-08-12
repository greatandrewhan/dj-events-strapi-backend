module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f712817335bfeb56d20923b6804bdaf8'),
  },
});
