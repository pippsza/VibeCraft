import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import MainMenu from "./components/MainMenu/MainMenu.jsx";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper.jsx";

function App() {
  return (
    <BackgroundWrapper>
      <Toaster />
      <Header />
      <HeroSection />
      <MainMenu />
      <p>test</p>
    </BackgroundWrapper>
  );
}

export default App;
