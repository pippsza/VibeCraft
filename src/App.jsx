import { Toaster } from "react-hot-toast";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MainMenu from "./components/MainMenu.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <HeroSection />
        <MainMenu />
      </main>
    </>
  );
}

export default App;
