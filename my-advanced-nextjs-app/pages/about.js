import Link from "next/link";
import styles from "../styles/about.module.css"; // Importe o arquivo de estilo

function AboutPage() {
  return (
    <div>
      <h1>Página Sobre</h1>
      <Link className={styles['about-link']}  href="/">Voltar para página inicial</Link>
    </div>
  );
}

export default AboutPage;
