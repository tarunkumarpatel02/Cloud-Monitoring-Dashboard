import { FC, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import MainContent from "./components/main-content/MainContent";

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="container-fluid app-container">
      <Header
        setSearchQuery={setSearchQuery}
        setSelectedRegion={setSelectedRegion}
        selectedRegion={selectedRegion}
      />
      <MainContent searchQuery={searchQuery} selectedRegion={selectedRegion} />
      <Footer />
    </div>
  );
};

export default App;
