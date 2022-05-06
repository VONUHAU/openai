import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log(req.body.max)
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.productDes, req.body.max),
    temperature: 0.8,
    max_tokens: Math.round(req.body.max/4)
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(product, max = 40) {
  return `Suggest three line primary messages for the description of the product/service that win the advertising campaign with the maximum characters for each line is ${max}
  Product/Service description: Tennis shoes, Creating an accelerated response with a natural close-to-the-ground feel, implementing a torque control feature in the heel counter, this shoe is also designed to help maintain a locked in feel during quick transitions
  Copy Suggestion:  Find your perfect tennis shoe, Don't miss your perfect tennis shoe, Baseline All Court Best of both
  Product/Service description: We believe in making Candles, Reed Diffusers and Skincare items that we, ourselves, use in our homes – that are kind to our skin and our minds. Our Home Fragrance range is based on a range of aromatherapy oils carefully blended to deliver different therapeutic qualities to help your health and well-being.We use all-natural, pure, plant-based ingredients and aromatherapy oils to ensure our Home Fragrance products smell more authentic, last longer and work better than other products on the market
  Copy Suggestion: The scent is beyond beautiful, My house smells like a spa, Gorgeous long-lasting scents
  Product description: ${product}
  Copy Suggestion:`;
}