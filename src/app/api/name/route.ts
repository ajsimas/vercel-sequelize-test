import {NextRequest, NextResponse} from 'next/server';
// import {UserModel} from '@/db/models';
// import {v4 as uuidv4} from 'uuid';

// export async function POST(req: Request) {
//   const {name} = await req.json();
//   const userModel = await UserModel.create({name, uuid: uuidv4()});
// eslint-disable-next-line max-len
//   return NextResponse.json({greeting: `Hello ${userModel.dataValues.uuid}!`});
// }

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const {name} = await req.json();
  return NextResponse.json({greeting: `Hello ${name}!`});
}
