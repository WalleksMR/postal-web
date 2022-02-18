import { addDoc, collection, DocumentData, getDocs } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { db } from ".";
import { ICreateDTO, IGetData } from "./dto";

class DatabaseRepository {
  private collection = "posts";
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

  async create({
    description,
    like,
    title,
    unlike,
    url,
  }: ICreateDTO): Promise<any> {
    const id = uuidV4();
    try {
      await addDoc(collection(db, this.collection), {
        id,
        description,
        like,
        title,
        unlike,
        url,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

export default new DatabaseRepository();
