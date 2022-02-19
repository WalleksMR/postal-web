import type { GetServerSideProps, NextPage } from "next";
import { useRef, useState } from "react";
import Head from "next/head";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import styles from "./styles.module.scss";

import Content from "../../components/Content";
import Input from "../../components/Input";
import PostsRepository from "../../services/firebase/repository/PostsRepository";
import { ICreateDTO } from "../../services/firebase/dto/post";
import { getSession } from "next-auth/client";

interface IRequest {
  title: string;
  description: string;
  url: string;
}

const Admin: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [load, setLoad] = useState(false);

  function youtube_parser(url: string) {
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return null;
    }
  }

  function cleanInput() {
    setTitle("");
    setDescription("");
    setUrl("");
  }
  const handleSubmit = async ({ title, description, url }: IRequest) => {
    try {
      const post: ICreateDTO = {
        title,
        description,
        url: `https://www.youtube.com/watch?v=${youtube_parser(url)}`,
        like: 0,
        unlike: 0,
      };
      setLoad(true);

      await PostsRepository.create(post);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoad(false);
      cleanInput();
    }
  };

  return (
    <>
      <Head>
        <title>Portal Web | Admin</title>
      </Head>
      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.adminForm}
        >
          <h1>Cadastro de vídeo</h1>
          <Input
            name="title"
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            name="description"
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            name="url"
            type="text"
            placeholder="Link do YouTube"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          {load ? (
            <button disabled>Carregando...</button>
          ) : (
            <button>Cadastrar</button>
          )}
        </Form>
      </Content>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default Admin;
