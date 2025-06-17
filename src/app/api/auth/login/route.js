import User from '../../../../../models/customerModel.js';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoConnect from '../../../../../dbconfig/dbconnection.js';

mongoConnect();

export async function POST(request) {
  try {
    const req = await request.json();
    const { email, password } = req;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, mssg: 'Please enter valid credentials' },
        { status: 200 }
      );
    }

    const hashStored = user.password;
    const userFound = await bcryptjs.compare(password, hashStored);

    if (!userFound) {
      return NextResponse.json(
        { success: false, mssg: 'Please enter valid credentials' },
        { status: 200 }
      );
    }

    const token = jwt.sign(
      { email, name: user.name, lcUsername: user.lcUsername, id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    const resp = NextResponse.json(
      { success: true, mssg: 'User logged in' },
      { status: 200 }
    );

    resp.cookies.set('jwtToken', token, { httpOnly: false });
    return resp;
  } catch (error) {
    return NextResponse.json(
      { success: false, mssg: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
