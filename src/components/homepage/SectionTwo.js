function SectionTwo() {
    return (
        <div className="w-100 bg-secondary">
            <div className="flex-1 items-center py-4 justify-items-center text-center">
                <h2 className="select-none text-4xl my-4 text-primary">
                    FEATURES
                </h2>
                <div className="text-lg text-primary text-center mt-6 leading-relaxed">
                    The <span className="select-none text-white text-xl rounded bg-primary py-1 px-2">ONE UTILITY</span> App
                </div>
            </div>
            <div className="lg:flex lg:flex-row md:flex-row sm:flex-col items-center py-4 px-2 justify-items-center text-center">
                <div className="flex-1 bg-secondary h-80 rounded-md text-primary mx-2 my-2 lg:my-0 xl:my-0 md:mx-2 md:my-2 sm:my-2 sm:mx-2 shadow-md">
                    <h5 className="select-none text-xl text-secondary bg-primary py-1 rounded-t-md">
                        Explore
                    </h5>
                    <ul className="mt-4 leading-8">
                        <li>News</li>
                        <li>Music</li>
                        <li>Cook</li>
                        <li>Maps</li>
                        <li>Weather</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className="flex-1 bg-secondary h-80 rounded-md text-primary lg:my-0 xl:my-0 mx-2 my-2 md:mx-2 md:my-2 sm:my-2 sm:mx-2 shadow-md">
                    <h5 className="select-none text-xl text-secondary bg-primary py-1 rounded-t-md">
                        Tools
                    </h5>
                    <ul className="mt-4 leading-8">
                        <li>Clock</li>
                        <li>Notes</li>
                        <li>Board</li>
                        <li>Todoist</li>
                        <li>Calculator</li>
                        <li>Calendar</li>
                        <li>Converter</li>
                        <li>Dictionary</li>
                    </ul>
                </div>
                <div className="flex-1 bg-secondary h-80 rounded-md text-primary lg:my-0 xl:my-0 mx-2 my-2 md:mx-2 md:my-2 sm:my-2 sm:mx-2 shadow-md">
                    <h5 className="select-none text-xl text-secondary bg-primary py-1 rounded-t-md">
                        Social
                    </h5>
                    <ul className="mt-4 leading-8">
                        <li>Reddit</li>
                        <li>Wikipedia</li>
                        <li>Hackernews</li>
                        <li>Covid-19 Tracker</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
