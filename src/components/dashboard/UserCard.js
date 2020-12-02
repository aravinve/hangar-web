import {useState} from 'react'
import AppConfigComponent from './AppConfigComponent'
import DashboardCard from './DashboardCard'
import SettingsCard from './SettingsCard'
import StepsCard from './StepsCard'


function UserCard({displayName, photoUrl}) {
    const [openSettings, setOpenSettings] = useState(false)
    const [openDashboard, setOpenDashboard] = useState(false)
    const [showConfigureApp, setShowConfigureApp] = useState(false)
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
    const configureHangar = (e) => {
        console.log(e.target.id)
        setShowConfigureApp(true)
    }
    return (
    
        showConfigureApp ? <AppConfigComponent onConfigBack={onConfigBack} /> : (<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col bg-secondary h-90">
        <div className="flex-1 flex flex-col bg-secondary items-center text-center rounded-l-md">
            <div className="flex-1 mt-6 mb-4">
                <img className="select-none w-16 h-16 rounded-sm" src={photoUrl} alt="Profile DP" />
            </div>
            <div className="flex-1 mt-2">
            <span className="inline-block text-primary text-xl">Welcome, {displayName} </span>
            </div>
            <div className="flex-1 mt-2">
                <div className="flex-shrink-0 bg-primary m-2 cursor-pointer text-secondary text-base py-2 px-10 rounded-lg shadow-md focus:outline-none" onClick={openDashboardFunction}>
                    Dashboard
                </div>
                <div className="flex-shrink-0 bg-primary m-2 cursor-pointer text-secondary text-base py-2 px-10 rounded-lg shadow-md focus:outline-none" onClick={openSettingsFunction}>
                    Settings
                </div>
            </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-1 bg-primary rounded-r-md">
            {!openSettings && !openDashboard ? <StepsCard configureHangar={configureHangar} /> : null}
           {openSettings ? <SettingsCard onBack={onBack} /> : null}
           {openDashboard ? <DashboardCard onBack={onBack} /> : null}
        </div>
    </div>)
    
    )
}

export default UserCard
