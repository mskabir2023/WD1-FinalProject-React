const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getResponseFromOpenApi = async (question) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices.length > 0) {
    return chatCompletion.choices[0].message.content;
  }

  return "<NO RESPONSE>";
};

const chat = async (question) => {
  try {
    const response = await getResponseFromOpenApi(question);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { chat };
