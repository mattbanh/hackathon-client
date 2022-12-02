import Hero from "../../components/Hero/Hero";
import TopCarousel from "../../components/TopCarousel/TopCarousel";
import Card from "../../components/Card/Card";
import CardTwo from "../../components/CardTwo/CardTwo";

function MainPage() {
  return (
    <section className="main-page">
      <Hero />
      <TopCarousel />
      <Card />
      <CardTwo />
    </section>
  );
}
export default MainPage;
