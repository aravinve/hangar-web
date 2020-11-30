const { default: Login } = require("./Login");
const { default: Signup } = require("./Signup");

function Auth() {
    const isRegister = false
    return (
        <>
           {isRegister ?  <Signup />
            : <Login />}
        </>
    )
}

export default Auth
