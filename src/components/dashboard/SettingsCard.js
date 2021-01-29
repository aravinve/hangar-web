import constructionImage from '../../images/under_construction_light.png'

function SettingsCard({onBack}) {
    return (
        <>
        <div className="flex-shrink-0 m-2 py-2 px-4 rounded-sm focus:outline-none">
        <span className="cursor-pointer text-secondary underline text-base" onClick={onBack}>
                Back
            </span>
        </div>
        <div className="flex flex-col mt-4 p-2 text-secondary">
        <h3 className="text-secondary text-2xl">
            Settings
        </h3>
        <div className="flex flex-col items-center justify-center">
            <div className="text-secondary text-lg my-2">
                Under Construction
            </div>
            <img src={constructionImage} className='rounded-md shadow-md my-2' alt="Construction" style={{width: '80%', height: '250px'}} />
        </div>
        </div>
        </>
    )
}

export default SettingsCard
