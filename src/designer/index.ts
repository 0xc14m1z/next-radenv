import { NextApiRequest, NextApiResponse } from "next";

export function designer(request: NextApiRequest, response: NextApiResponse) {
  response.json({
    endpoint: "designer",
  });
}
