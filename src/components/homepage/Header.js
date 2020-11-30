import logo from './images/logo.png'
import Menubar from './Menubar'

function Header({isShowMenu}) {
    return (
        <div className="w-100 bg-white h-18 p-4 m-0 lg:flex lg:flex-row md:flex-row sm:flex-col shadow-lg">
            <div className="flex-1 p-1 ml-2">
                <div className="flex">
                <img src={logo} alt="Hangar Logo" className="w-10 h-10 flex-initial"/>
                <p className="select-none text-3xl text-primary flex-1 m-1 text-justify tracking-wider space-y-2">anger</p>
                </div>
            </div>
           {isShowMenu ? <Menubar /> : null}
        </div>
    )
}

export default Header
