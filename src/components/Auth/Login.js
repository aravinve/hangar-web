import login from './images/login.svg'
const { default: Header } = require("../homepage/Header");
const { default: Footer } = require("../homepage/Footer");

function Login() {
    return (
        <>
        <Header />
        <div className="mt-10 h-auto">
            <div className="container mx-auto">
                <div className="flex w-full bg-secondary rounded-md">
                    <div className="flex-1 p-2">
                        <img src={login} alt="Hero Drop" className="w-full h-80"/>
                    </div>
                    <div className="flex-1 p-4 bg-primary rounded-r-md">
                        <h3 className="select-none text-secondary p-6 text-3xl">
                            Login
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer isShowMenu={false} />
    </>
    )
}

export default Login
