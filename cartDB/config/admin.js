module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '077d0a42513c3408111c189427c16905'),
  },
});
