import ConfigFormComponent from "./ConfigFormComponent"
import ItemsCard from "./ItemsCard"
import StepCard from "./StepCard"


function AppConfigComponent({onConfigBack, stepData, hangarData, alert, submitHandler, handleHangarDataChange}) {

    const alertMessage = alert !== '' ? (<>
        <div className='flex flex-row bg-secondary rounded-sm shadow-md my-1 justify-center px-4'>
            <div className='flex-1 text-primary text-lg select-none'>
                <i className="fas fa-check-circle mx-1"></i> {alert}
            </div>
        </div>
    </>) : null

    return (
        <>
        <div className="m-2 py-2 px-4 focus:outline-none">
            <div className="flex-1 mt-1 mb-2">
                <div className="flex flex-row">
                    <span className="flex-shrink-0 cursor-pointer text-secondary underline text-base" onClick={onConfigBack}>
                        Back
                    </span>
                    <div className="flex-1 flex flex-row justify-end">
                        <button onClick={() => {
                            submitHandler()
                        }}
                        className='cursor-pointer p-2 rounded-md shadow-md focus:outline-none bg-secondary text-primary'>
                        <i className="fas fa-upload mx-1"></i> Create Instances
                    </button>
                    </div>
                </div>
            </div>
          <div className="flex-1 mt-2 mb-2">
            <h3 className="text-secondary text-4xl select-none">
                    {stepData.planName} App Config
            </h3>
          </div>
          {alertMessage}
          <div className="flex-1 bg-secondary mt-2 mb-2">
              <div className={`grid grid-cols-${stepData.hangarCount} gap-2`}>
                  {hangarData.map((hangarData, index) => (
                       <ConfigFormComponent key={index} planName={stepData.planName} hangarData={hangarData} submitHandler={submitHandler} handleHangarDataChange={handleHangarDataChange} index={index+1} />
                  ))}
              </div>
              <h2 className="text-primary text-3xl mt-2 mb-2 flex-1 px-4 py-2 select-none">
                  Plan Details
              </h2>
                <div className="grid grid-cols-2 grid-gap-2 mt-2 mb-2">
                    <StepCard planName={stepData.planName} planDays={stepData.planDays}
                    tagsList={stepData.tagsList} hangarCount={stepData.hangarCount} planCost={stepData.planCost} clickHandler={false} activePlan={{selected: false, value: ''}} />
                    <ItemsCard itemsList={stepData.itemsList} />
                </div>
          </div>
        </div>
        </>
    )
}

export default AppConfigComponent
