import React from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const [imgError, setImgError] = React.useState(null);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!img.raw || imgError) {
      alert("Selecione uma imagem válida");
      return;
    }

    if (nome.validate() && peso.validate() && idade.validate()) {
      const formData = new FormData();
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);

      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_POST(formData, token);
      request(url, options);
    }
  }

  function handleImgChange({ target }) {
    const file = target.files[0];
    const maxSize = 3.4 * 1024 * 1024;

    if (file && file.size > maxSize) {
      setImgError(
        "A imagem é muito grande. O tamanho máximo permitido é 3.4MB.",
      );

      target.value = "";
      setImg({});
      return;
    }

    setImgError(null);
    setImg({
      preview: URL.createObjectURL(file),
      raw: file,
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error || imgError} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
