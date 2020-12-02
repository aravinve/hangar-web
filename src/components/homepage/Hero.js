import { Link } from 'react-router-dom'
import hero from './images/hero.svg'

function Hero() {
    return (
        <div className="w-100 bg-secondary" id="home">
            <div className="lg:flex lg:flex-row md:flex-row sm:flex-col items-center p-8 justify-items-center text-center">
                <div className="flex-1">
                    <div className="leading-10">
                        <h3 className="select-none text-5xl text-primary">
                            All Your APPS
                        </h3>
                        <h3 className="select-none text-5xl text-primary">
                        In ONE Place
                        </h3>
                    </div>
                    <div className="mt-4 flex items-center">
                        <Link to="/hangar" target="_blank" className="flex-shrink-0 bg-primary m-auto cursor-pointer text-secondary text-base py-2 px-10 rounded-lg shadow-md focus:outline-none">
                            Join Now
                         </Link>
                    </div>
                </div>
                <div className="flex-1 p-2">
                    <img src={hero} alt="Hero Drop" className="w-full h-80"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
