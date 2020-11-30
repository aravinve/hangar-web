const { default: Header } = require("./Header");
const { default: Hero } = require("./Hero");
const { default: SectionOne } = require("./SectionOne");
const { default: SectionTwo } = require("./SectionTwo");
const { default: Footer } = require("./Footer");

function Homepage() {
    return (
       <>
        <Header isShowMenu={true} />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <Footer isShowMenu={true} />
       </>
    )
}

export default Homepage
