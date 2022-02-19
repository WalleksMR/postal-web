import { addDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { db } from "..";
import { IGetData, ICreateDTO } from "../dto/userDTO";

class UserRepository {
  private collection = "users";

  async listAll(): Promise<IGetData[]> {
    const datas: IGetData[] = [];
    try {
      const querySnapshot = await getDocs(collection(db, this.collection));
      querySnapshot.forEach((doc) => {
        const data = doc.data() as IGetData;
        datas.push(data);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return datas;
  }

  async create({ email, name, isAdmin, urlProfile }: ICreateDTO): Promise<any> {
    const id = uuidV4();

    const user = await addDoc(collection(db, this.collection), {
      id,
      email,
      name,
      isAdmin,
      urlProfile,
    });

    console.log(user.id);
  }
}

export default new UserRepository();
