import FileSystem from "fs";
import Path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const source = "./node_modules/next-radenv/dist/designer/app/index.html";
const frontend = FileSystem.readFileSync(Path.resolve(source)).toString();

export function designer(request: NextApiRequest, response: NextApiResponse) {
  switch (request.method) {
    case "GET": {
      return response.send(frontend);
    }
  }

  response.status(405).end();
}
