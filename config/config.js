const config = {
  PORT: 4000,
  DB_URI: 'mongodb://localhost/exam-skeleton',
  SALT_ROUNDS: 10,
  SECRET:"wow",
  COOKIE_NAME: 'auth token',
}
module.exports = config;