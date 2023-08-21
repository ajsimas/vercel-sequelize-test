import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  const {name} = await req.json();
  console.log('debug1', name);
  return NextResponse.json({greeting: `Hello ${name}!`});
}
