const { GoogleGenerativeAI } = require("@google/generative-ai");
 const genAI = new GoogleGenerativeAI(process.env.BARD_KEY);


async function getBardResult(user_prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(user_prompt);

  return result.response.text()
}

module.exports = getBardResult