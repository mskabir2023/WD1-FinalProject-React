const chat = async (question) => {
  return {
    success: true,
    data: "This is a sample response. To get actual response please put the OPENAI_API_KEY in the .env file!",
  };
};

module.exports = { chat };