var token = process.env.TOKEN;

if (!token) {
  throw new Error("Please set a token in test/config.js or an environment variable TOKEN before running tests.");
}

module.exports = {
  token: token
};
