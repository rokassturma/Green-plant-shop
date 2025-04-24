import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SectionBest from "./Components/SectionBest";
import SectionCategories from "./Components/SectionCategories";
import SectionHot from "./Components/SectionHot";
import TopBanner from "./Components/TopBanner";

export default function App() {


  return (
    <div>
      <TopBanner />
      <Header />
      <Hero />
      <SectionCategories />
      <SectionBest />
      <SectionHot />

    </div>
  )
}