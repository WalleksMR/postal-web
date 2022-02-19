import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { ICreateDTO } from "../../../services/firebase/dto/userDTO";
import UsersRepository from "../../../services/firebase/repository/UsersRepository";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const userFB = await UsersRepository.listAll();
      const userExist = userFB.find((u) => u.id === user.id);
      if (!userExist) {
        try {
          const newUse: ICreateDTO = {
            name: user.name!,
            email: user.email!,
            isAdmin: false,
            urlProfile: user.image!,
          };

          await UsersRepository.create(newUse);
          return true;
        } catch (error) {
          return false;
        }
      }
      return true;
    },
  },
});
