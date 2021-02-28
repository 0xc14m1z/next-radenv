import FileSystem from "fs";
import { RequestMethod } from "node-mocks-http";

import { designer } from "./designer";
import { createApiMocks } from "../testUtils";

jest.spyOn(FileSystem, "readFileSync").mockReturnValue("application code");

describe("/radenv/designer", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it.todo("respond with 404 when NOT in development mode");

  describe("GET /", () => {
    it("respond with the app bundle", () => {
      const { request, response } = createApiMocks();
      designer(request, response);
      expect(response._getData()).toBe("application code");
    });
  });

  describe("* /", () => {
    it.each<RequestMethod>([
      "CONNECT",
      "DELETE",
      "HEAD",
      "OPTIONS",
      "PATCH",
      "POST",
      "PUT",
      "TRACE",
    ])("respond with 405 unsupported method %s", (method) => {
      const { request, response } = createApiMocks({ method });
      designer(request, response);
      expect(response._getStatusCode()).toBe(405);
    });
  });
});
