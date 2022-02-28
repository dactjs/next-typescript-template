import { NextResponse, NextMiddleware } from 'next/server';

const middleware: NextMiddleware = () => {
  return NextResponse.next();
};

export default middleware;
