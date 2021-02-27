import { createApiMocks } from "./testUtils";

import { radenv } from "./radenv";
import { designer } from "./designer";

jest.mock("./designer");

describe("radenv", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("throws when request.query doesn't contain 'radenv' property", () => {
    const { request, response } = createApiMocks();

    expect(() => radenv(request, response)).toThrow();
  });

  it("delegates to a feature if supported", () => {
    const { request, response } = createApiMocks({
      query: { radenv: ["radenv", "designer"] },
    });

    radenv(request, response);

    expect(designer).toHaveBeenCalled();
  });

  it("returns 404 when slug isn't understood", () => {
    const { request, response } = createApiMocks({
      query: { radenv: ["radenv", "unsupported"] },
    });

    radenv(request, response);

    expect(response._getStatusCode()).toBe(404);
  });
});
