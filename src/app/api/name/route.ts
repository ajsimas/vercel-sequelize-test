import {NextResponse} from 'next/server';
import {UserModel} from '@/db/models';
import {v4 as uuidv4} from 'uuid';

export async function POST(req: Request) {
  const {name} = await req.json();
  const userModel = await UserModel.create({name, uuid: uuidv4()});
  return NextResponse.json({greeting: `Hello ${userModel.dataValues.uuid}!`});
}
