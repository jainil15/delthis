const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});
redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});
module.exports = redisClient;
