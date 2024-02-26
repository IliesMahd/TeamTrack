import NextAuth from 'next-auth';
import { Account, User as AuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../../models/User';
import { connect } from '../../../../utils/db';
import bcrypt from 'bcryptjs';

export const authOptions: any = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        try {
            // Connect to the database
            await connect();
  
            // Find the user by email
            const existingUser = await User.findOne({ email: credentials.email });
  
            if (existingUser) {
              // Check if the password is correct using bcrypt
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                existingUser.password
              );
  
              if (isPasswordCorrect) {
                // Return the user if authentication is successful
                const { _id, name, email, image } = existingUser;
                const authUser = {
                  id: _id.toString(),
                  name,
                  email,
                  image,
                };
                return authUser;
              } else {
                throw new Error('Mot de passe incorrect');
              }
            } else {
              throw new Error('Utilisateur inexistant');
            }
          } catch (error) {
            console.error(error);
            throw new Error('Mot de passe et/ou email incorrect');
          }
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };