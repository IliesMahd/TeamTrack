// register.ts
import { NextResponse } from 'next/server';
import { connect } from '../../../utils/db';
import User from '../../../models/User';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  CREATED: 201,
};

export const POST = async (request: any) => {
  try {
    await connect();

    const { email, username, password } = await request.json();

    if (!email || !username || !password || !validator.isEmail(email)) {
      return NextResponse.json('Email, nom d\'utilisateur ou mot de passe invalide', { status: HTTP_STATUS.BAD_REQUEST });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return NextResponse.json('Cet utilisateur existe déjà', { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, username, password: hashedPassword });
    await user.save();

    return NextResponse.json('Utilisateur créé avec succès', { status: HTTP_STATUS.CREATED });
  } catch (error) {
    console.error('Erreur lors de la création d\'un utilisateur :', error);

    return NextResponse.json('Internal Server Error', { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
  }
};
