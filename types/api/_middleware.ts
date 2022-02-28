import type { NextFetchEvent, NextRequest } from 'next/server';

export type NextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined;

export default NextMiddleware;
