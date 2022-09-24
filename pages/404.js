import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrada = () => {
  return (
    <div className={styles.noEncontrado}>
      <h1 className="heading">Pagina no encontrada</h1>
      <Link href="/">
        <a>Volver al Inicio</a>
      </Link>
    </div>
  );
};

export default NoEncontrada;
