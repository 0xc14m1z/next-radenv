import FileSystem from "fs";
import Path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export function designer(request: NextApiRequest, response: NextApiResponse) {
  switch (request.method) {
    case "GET": {
      const source = "./node_modules/next-radenv/dist/designer/app.html";
      const frontend = FileSystem.readFileSync(Path.resolve(source)).toString();
      return response.send(frontend);
    }
  }

  response.status(405).end();
}
