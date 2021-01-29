import about from '../../images/about.svg'

function SectionOne() {
    return (
        <div className="w-100 bg-secondary" id="about">
            <div className="lg:flex lg:flex-row md:flex-row sm:flex-col-reverse items-center p-8 justify-items-center text-center">
                <div className="flex-1 p-2">
                    <img src={about} alt="About Drop" className="w-full h-80"/>
                </div>
                <div className="flex-1">
                    <h2 className="select-none text-4xl my-4 text-primary">
                        WHAT IS HANGAR?
                    </h2>
                    <div className="text-xl text-primary text-justify leading-relaxed">
                           Hangar is the awesome one utility app at your service. Register with us today for a free account and make your work highly productive along with cool entertainment services. Customize the apps based on your needs under your private and secure hangar.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
