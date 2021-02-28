import FileSystem from "fs";
import { RequestMethod } from "node-mocks-http";

import { EnvironmentMock, createApiMocks } from "../testUtils";

import { designer } from "./designer";

jest.spyOn(FileSystem, "readFileSync").mockReturnValue("application code");

describe("/radenv/designer", () => {
  const environment = new EnvironmentMock();

  beforeEach(() => {
    environment.mockVariable("NODE_ENV", "development");
  });

  afterAll(() => {
    environment.restore();
    jest.resetAllMocks();
  });

  it.each([
    [200, "development"],
    [404, "production"],
    [404, "test"],
    [404, "whatever"],
  ])(
    "respond with %s when NODE_ENV is %s",
    (statusCode, testingEnvironment) => {
      environment.mockVariableOnce("NODE_ENV", testingEnvironment);
      const { request, response } = createApiMocks();
      designer(request, response);
      expect(response._getStatusCode()).toBe(statusCode);
    }
  );

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
