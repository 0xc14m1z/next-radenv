import { NextApiRequest, NextApiResponse } from "next";
import { createMocks, RequestOptions, ResponseOptions } from "node-mocks-http";

export function createApiMocks(
  requestOptions?: RequestOptions,
  responseOptions?: ResponseOptions
) {
  const mocks = createMocks<NextApiRequest, NextApiResponse>(
    requestOptions,
    responseOptions
  );

  return {
    request: mocks.req,
    response: mocks.res,
  };
}
