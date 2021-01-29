import React from 'react'

function SettingsCard({onBack}) {
    return (
        <>
        <div className="flex-shrink-0 m-2 py-2 px-4 rounded-sm focus:outline-none">
        <span className="cursor-pointer text-secondary underline text-base" onClick={onBack}>
                Back
            </span>
        </div>
        <div className="flex mt-4 p-2 text-secondary">
            
        <h3 className="text-secondary text-2xl">
            Settings
        </h3>
        </div>
        </>
    )
}

export default SettingsCard
