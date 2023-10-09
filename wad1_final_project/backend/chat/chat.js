if (!process.env.OPENAI_API_KEY) {
  module.exports = require("./dummy_chat");
} else {
  module.exports = require("./openai_chat");
}