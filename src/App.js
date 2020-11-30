const { default: Footer } = require("./components/homepage/Footer");
const { default: Header } = require("./components/homepage/Header");
const { default: Hero } = require("./components/homepage/Hero");
const { default: SectionOne } = require("./components/homepage/SectionOne");
const { default: SectionTwo } = require("./components/homepage/SectionTwo");

function App() {
  return (
    <div className="w-screen h-screen overflow-auto">
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
