import {useState, useEffect} from 'react'
import signup from './images/signup.svg'
import avatar from './images/avatar.png'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
const { default: Header } = require("../homepage/Header");
const { default: Footer } = require("../homepage/Footer");
const { default : UserCard} = require('../dashboard/UserCard')
const { default: firebase} = require("./firebase")

function Signup() {
    const [signedIn, setSignedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
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
            if(!!user){
                setUserName(firebase.auth().currentUser.displayName)
                setPhotoUrl(firebase.auth().currentUser.photoURL !== null ? firebase.auth().currentUser.photoURL: avatar)
            }
        })
    }, [signedIn])
    return (
        <>
            <Header signedIn={signedIn} />
            <div className="xl:mt-10 lg:mt-10 md:mt-8 sm:mt-4 pb-16 h-auto">
                <div className="container mx-auto">
                    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-full bg-secondary">
                       {signedIn ? null : ( <div className="flex-1 p-2">
                            <img src={signup} alt="Hero Drop" className="w-full h-80"/>
                        </div>)}
                        <div className="flex-1 bg-primary rounded-none">
                            {signedIn ? (<UserCard displayName={userName} photoUrl={photoUrl} />) : (
                                <>
                                <h3 className="select-none text-secondary text-center mt-8 text-4xl">
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
            {signedIn ? null : <Footer isShowMenu={false} />}
        </>
    )
}

export default Signup
