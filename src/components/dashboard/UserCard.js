import {useState, useEffect, useRef} from 'react'
import AppConfigComponent from './AppConfigComponent'
import DashboardCard from './DashboardCard'
import SettingsCard from './SettingsCard'
import StepsCard from './StepsCard'
import {v4} from 'uuid'
import firebase from '../Auth/firebase'
import logo from '../../images/logo.png'


function UserCard({displayName, photoUrl, email}) {
    const [openSettings, setOpenSettings] = useState(false)
    const [openDashboard, setOpenDashboard] = useState(false)
    const [showConfigureApp, setShowConfigureApp] = useState(false)
    const [stepData, setStepData] = useState(null)
    const [activePlan, setActivePlan] = useState({
        selected: false,
        value: ''
    })
    const [hangarData, setHangarData] = useState([])
    const [dataId, setDataId] = useState(null)
    const [alert, setAlert] = useState('')
    const downloaderButton = useRef({})

    const resetAlert = () => {
        setTimeout(() => {
            setAlert('')
        }, 4000)
    }

    useEffect(() => {
        firebase.firestore().collection('hangaruser').onSnapshot(serverUpdate => {
            serverUpdate.docs.forEach(doc => {
                const data = doc.data()
                if(data['email'] === email){
                    setActivePlan({
                        selected: true,
                        value: data['planName']
                    })
                }
            })
        })
    }, [])


    useEffect(() => {
        if(stepData !== null){
            firebase.firestore().collection('hangaruser').onSnapshot(serverUpdate => {
                let hangarDataFromStore = []
                serverUpdate.docs.forEach(doc => {
                    const data = doc.data()
                    if(data['email'] === email){
                        hangarDataFromStore = data['hangarData']
                        setDataId(doc.id)
                        setActivePlan({
                            selected: true,
                            value: data['planName']
                        })
                    }
                })
                if(hangarDataFromStore.length > 0){
                    setHangarData(hangarDataFromStore)
                } else {
                    let count = Number(stepData.hangarCount)
                    let dataArray = []
                    for(let i=0;i<count;i++){
                        const hObject = {
                            id: v4(),
                            hangarId: generateRandomHangarId(displayName),
                            hangarPin: generateRandomHangarPin()
                        }
                        dataArray.push(hObject)
                    }
                    setHangarData(dataArray)
                }
            })
        }
    }, [stepData])

    
    const generateRandomHangarId = (displayName) => {
        let result = ''
        result += displayName.substring(0,4)
        const length = 6
        const charsString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (var i = length; i > 0; --i){
            result += charsString[Math.floor(Math.random() * charsString.length)]
        }
        return result
    }

    const generateRandomHangarPin = () => {
        return Math.floor(1000 + Math.random() * 9000).toString()
    }

    const handleHangarDataChange = (e, id) => {
        const targetItem = id
        if(e.target.name === "hangarId"){
            setHangarData(hangarData.map(data => {
                if(data.id === targetItem){
                    data.hangarId = e.target.value
                }
                return data
            }))
        } else {
            setHangarData(hangarData.map(data => {
                if(data.id === targetItem){
                    data.hangarPin = e.target.value
                }
                return data
            }))
        }
    }

    const submitHandler = () => {
        if(dataId !== null){
            firebase.firestore().collection('hangaruser').doc(dataId).update({
                hangarData: hangarData
            })
        } else {
            firebase.firestore().collection('hangaruser').add({
                email: email,
                displayName: displayName,
                photoUrl: photoUrl,
                hangarData: hangarData,
                planName: stepData.planName
            })
        }
        setAlert('Data Saved Successfully !')
        resetAlert()
    }

    const openDashboardFunction = () => {
        setOpenSettings(false)
        setOpenDashboard(true)
    }

    const openSettingsFunction = () => {
        setOpenDashboard(false)
        setOpenSettings(true)
    }

    const onBack = () => {
        setOpenDashboard(false)
        setOpenSettings(false)
    }

    const onConfigBack = () => {
        setShowConfigureApp(false)
    }

    const configureHangar = (step) => {
        setActivePlan({
            selected: true,
            value: step.planName
        })
        setStepData(step)
        setShowConfigureApp(true)
    }

    const downloadApp = () => {
        downloaderButton.current.click()
    }

    return (
        showConfigureApp ? <AppConfigComponent onConfigBack={onConfigBack} stepData={stepData} hangarData={hangarData} alert={alert} submitHandler={submitHandler} handleHangarDataChange={handleHangarDataChange} /> : (<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col bg-secondary h-90">
        <div className="flex-1 flex flex-col bg-secondary items-center rounded-l-md">
            <div className="flex-1 mt-6 mb-4">
                <img className="select-none w-16 h-16 rounded-sm" src={photoUrl} alt="Profile DP" />
            </div>
            <div className="flex-1 mt-2">
            <span className="inline-block text-primary text-xl">Welcome, {displayName} </span>
            </div>
            <div className="flex-1 mt-2 mb-4">
                <div className="flex-shrink-0 bg-secondary m-2 cursor-pointer text-primary text-base py-2 px-10 rounded-lg shadow-lg focus:outline-none">
                    <div className="inline-flex items-center justify-center" onClick={downloadApp}>
                    <img src={logo} alt="Hangar Logo" className="w-4 h-4 mx-2 flex-initial"/>
                    <span>Get Desktop App</span>
                    </div>
                </div>
                <a ref={downloaderButton} href="https://github.com/aravinve/hangar/releases/download/V1.0/hangar-1.0.zip" download hidden></a>
                <div className="flex-shrink-0 bg-secondary m-2 cursor-pointer text-primary text-base py-2 px-10 rounded-lg shadow-lg focus:outline-none" onClick={openDashboardFunction}>
                    <i className="fas fa-border-all mx-2"></i>Dashboard
                </div>
                <div className="flex-shrink-0 bg-secondary m-2 cursor-pointer text-primary text-base py-2 px-10 rounded-lg shadow-lg focus:outline-none" onClick={openSettingsFunction}>
                    <i className="fas fa-cogs mx-2"></i>Settings
                </div>
            </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-1 bg-primary rounded-r-md">
            {!openSettings && !openDashboard ? <StepsCard configureHangar={configureHangar} activePlan={activePlan} /> : null}
           {openSettings ? <SettingsCard onBack={onBack} /> : null}
           {openDashboard ? <DashboardCard onBack={onBack} /> : null}
        </div>
    </div>)
    
    )
}

export default UserCard
