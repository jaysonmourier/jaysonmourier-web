import Nav from "@/app/layouts/Nav/Nav";
import styles from "@/app/page.module.css";
import Header from "@/app/layouts/Header/Header";
import Carousel from "@/app/layouts/Carousel/Carousel";
import Noise from "@/app/components/Noise/Noise";
import Skills from "./layouts/Skills/Skills";
import Footer from "./layouts/Footer/Footer";

export default function Home() {
  return (
    <>
      <Noise />
      <div className={styles.home}>
        <div className={styles.container}>
          <Nav />
          <Header />
        </div>
      </div>
      <Carousel />
      <div className={styles.container}>
        <Skills />
      </div>
      <Footer />
    </>
  );
}
