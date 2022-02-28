import { NextMiddleware } from '@/types';

const middleware: NextMiddleware = () => {
  return new Response('Hello, world!');
};

export default middleware;
