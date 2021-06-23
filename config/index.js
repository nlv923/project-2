module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    username:'postgres',
    password: '142389',
    database: 'movie_review',
    host: '127.0.0.1',
  },
  sessionSecret: 'session_secret_key',
  movieDbApiKey: 'db_api_key'
};
