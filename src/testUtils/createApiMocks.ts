import { NextApiRequest, NextApiResponse } from "next";
import {
  createRequest,
  createResponse,
  RequestOptions,
  ResponseOptions,
} from "node-mocks-http";

export function createApiMocks(
  requestOptions?: RequestOptions,
  responseOptions?: ResponseOptions
) {
  return {
    request: createRequest<NextApiRequest>(requestOptions),
    response: createResponse<NextApiResponse>(responseOptions),
  };
}
