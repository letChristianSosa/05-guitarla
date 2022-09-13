import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen Sobre Nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quod soluta sed ipsum nisi, in nobis harum sint labore
              laborum aliquid animi! Eos excepturi laudantium similique, odio
              sit eaque libero?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias quod soluta Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Molestias quod soluta
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
