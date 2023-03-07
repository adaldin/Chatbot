import { API_KEY, API_URL, CHAT_MDEL } from "../constants/APIKey";
import axios from "axios";

export const fetchData = async (input: string) => {
  const response = await axios.post(
    API_URL,
    {
      prompt: `Complete this sentence: "${input}"`,
      model: CHAT_MDEL,
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};
