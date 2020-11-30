import logo from './images/logo.png'

function Header() {
    return (
        <div className="w-100 bg-white h-18 p-4 m-0 lg:flex lg:flex-row md:flex-row sm:flex-col shadow-lg">
            <div className="flex-1 p-1 ml-2">
                <div className="flex">
                <img src={logo} alt="Hangar Logo" className="w-10 h-10 flex-initial"/>
                <p className="select-none text-3xl text-primary flex-1 m-1 text-justify tracking-wider space-y-2">anger</p>
                </div>
            </div>
            <div className="flex-1 p-1 mt-2">
                <ul className="flex flex-row space-x-1 items-center text-center">
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">Home</li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">About</li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">Features</li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">Connect</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
