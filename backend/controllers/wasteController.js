const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.classifyWaste = async (req, res) => {
  try {
    const { item } = req.body;

    if (!item) {
      return res.status(400).json({ message: "Item is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Classify the waste item "${item}" and return a JSON object with the following fields:
      - item: the name of the waste item
      - type: (Organic / Recyclable / Hazardous / E-waste / General)
      - advice: recycling advice
      - carbonImpact: environmental impact

      Return ONLY valid JSON, no other text. Format:
      {"item": "...", "type": "...", "advice": "...", "carbonImpact": "..."}`
    });

    // Parse the JSON response from AI
    let parsedResult;
    try {
      parsedResult = JSON.parse(response.text);
    } catch (parseError) {
      // If JSON parsing fails, try to extract JSON from the text
      const jsonMatch = response.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResult = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Failed to parse AI response");
      }
    }

    res.json(parsedResult);

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ message: "AI classification failed" });
  }
};