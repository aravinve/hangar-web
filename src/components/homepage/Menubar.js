
function Menubar() {
    return (
        <div className="flex-1 p-1 mt-2">
                <ul className="flex flex-row space-x-1 items-center text-center">
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">
                        <a href="#home">Home</a>
                    </li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">
                        <a href="#features">Features</a>
                    </li>
                    <li className="text-primary cursor-pointer hover:text-blue-900 xl:text-xl lg:text-lg md:text-sm text-sm flex-1 xl:mr-1 lg:mr-1 md:mr-1 mr-0">
                        <a href="#connect">Connect</a>
                    </li>
                </ul>
            </div>
    )
}

export default Menubar
