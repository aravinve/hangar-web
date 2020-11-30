import {useState, useEffect} from 'react'
import signup from './images/signup.svg'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
const { default: Header } = require("../homepage/Header");
const { default: Footer } = require("../homepage/Footer");
const { default: firebase} = require("./firebase")

function Signup() {
    const [signedIn, setSignedIn] = useState(false)
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            setSignedIn(!!user)
        })
    }, [signedIn])
    return (
        <>
            <Header />
            <div className="mt-10 h-auto">
                <div className="container mx-auto">
                    <div className="flex w-full bg-secondary rounded-md">
                        <div className="flex-1 p-2">
                            <img src={signup} alt="Hero Drop" className="w-full h-80"/>
                        </div>
                        <div className="flex-1 bg-primary rounded-r-md">
                            {signedIn ? (<div className="flex flex-col bg-primary"> 
                                    <h3 className="flex-1 text-center text-secondary p-4 mt-2 mb-2 text-3xl">Signed In</h3>
                                    <div className="flex-shrink-0 bg-secondary m-auto cursor-pointer text-primary text-base py-2 px-4 rounded-lg shadow-md focus:outline-none transform hover:scale-110" onClick={() => firebase.auth().signOut()}>Sign out</div>
                                    <div className="flex-1 p-4 bg-secondary mt-6">
                                        <img className="w-32 h-32 rounded-md" src={firebase.auth().currentUser.photoURL} alt="Profile DP" />
                                        <span className="inline-block text-primary text-xl">Welcome, {firebase.auth().currentUser.displayName} </span>
                                    </div>
                                </div>) : (
                                <>
                                <h3 className="select-none text-secondary text-center mt-8 text-3xl">
                                Join Today!!!
                                </h3>
                                <div className="flex-1 mt-8 mb-2">
                                <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                                </div>
                                </>)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer isShowMenu={false} />
        </>
    )
}

export default Signup
