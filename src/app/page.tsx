import Noise from "./components/Noise/Noise";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Nav from "./layouts/Nav/Nav";
import Video from "./layouts/Video/video";

export default function Home() {
  return (
    <>
      <Noise />
      <Nav />
      <Header />
      <Video url="https://www.youtube.com/embed/4OOuJzf5c_w?si=_DzAFK3YwSEXdAHR" />
      <Footer />
    </>
  );
}
