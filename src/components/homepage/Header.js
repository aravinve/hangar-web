import logo from '../../images/logo.png'
import Menubar from './Menubar'
const { default: firebase} = require("../Auth/firebase")

function Header({isShowMenu, signedIn}) {
    const classAdded = signedIn ? 'sm:flex-row' : 'sm:flex-col'
    return (
        <div className={`w-100 bg-white h-18 p-4 m-0 lg:flex lg:flex-row md:flex-row shadow-lg `.concat(classAdded)}>
            <div className="flex-1 p-1 ml-2">
                <div className="flex">
                <img src={logo} alt="Hangar Logo" className="w-10 h-10 flex-initial"/>
                <p className="select-none text-3xl text-primary flex-1 m-1 text-justify tracking-wider space-y-2">anger</p>
                </div>
            </div>
           {isShowMenu ? <Menubar /> : null}
           {signedIn ? (<div className="m-auto cursor-pointer text-primary" onClick={() => firebase.auth().signOut()}>Sign out</div>): null}
        </div>
    )
}

export default Header
