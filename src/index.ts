import { NextApiRequest, NextApiResponse } from "next";

import { backend } from "./backend";
import { designer } from "./designer";

export default function radenv(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { radenv } = request.query;

  if (!radenv) {
    throw new Error("Cannot find [...radenv].js in pages/api.");
  }

  const features = {
    designer,
    backend,
  };

  const [_, feature] = radenv as ["radenv", "designer" | "backend"];

  if (feature in features) {
    return features[feature](request, response);
  }

  response.status(404).end();
}
