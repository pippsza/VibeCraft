import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import MainMenu from "./components/MainMenu/MainMenu.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Toaster />
      <Header />
      <HeroSection />
      <MainMenu />

      <p>test</p>
    </div>
  );
}

export default App;
