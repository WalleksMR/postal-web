import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { db } from "..";
import { ICreateDTO, IGetData } from "../dto/post";

class PostsRepository {
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
    if (!title || !description || !url) {
      alert("Preenche todos os campos corretamente");
      return;
    }
    try {
      const post = doc(db, this.collection, id);
      await setDoc(post, { description, like, title, unlike, url, id });
    } catch (error) {
      console.log(error);
    }
  }
  async update(id: string, like: number): Promise<any> {
    try {
      const post = doc(db, this.collection, id);
      await updateDoc(post, {
        like: increment(like),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostsRepository();
