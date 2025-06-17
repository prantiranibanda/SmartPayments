import User from '../../../../../models/customerModel';
import mongoConnect from '../../../../../dbconfig/dbconnection';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// mongoConnect();

export async function POST(request) {
	try {
    await mongoConnect();

    const req = await request.json();
    const { username, email, password } = req;

    // checking user exists or not
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { success: false, mssg: 'User already exists' },
        { status: 200 }
      );
    }
    // Add validation checks
    if (!username || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    console.log('salt');
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    console.log('object created', newUser);
    const savedUser = await newUser.save(); //newUser == savedUser
    console.log('saved user', savedUser);

    const token = jwt.sign(
      { username, email, id: savedUser._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );

    const resp = NextResponse.json(
      { success: true, mssg: 'User created successfully' },
      { status: 200 }
    );

    resp.cookies.set('jwtToken', token, { httpOnly: false });
		return resp;
		
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, mssg: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
