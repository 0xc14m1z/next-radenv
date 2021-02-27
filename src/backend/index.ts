import { NextApiRequest, NextApiResponse } from "next";

export function backend(request: NextApiRequest, response: NextApiResponse) {
  response.json({
    endpoint: "backend",
  });
}
