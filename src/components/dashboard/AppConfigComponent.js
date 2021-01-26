import {useState, useEffect} from 'react'
import ConfigFormComponent from "./ConfigFormComponent"
import ItemsCard from "./ItemsCard"
import StepCard from "./StepCard"
import {v4} from 'uuid'


function AppConfigComponent({onConfigBack, stepData, displayName, email}) {

    const [hangarData, setHangarData] = useState([])

    useEffect(() => {
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
    }, [])

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
        console.log(hangarData, email)
    }

    return (
        <>
        <div className="m-2 py-2 px-4 focus:outline-none">
            <div className="flex-1 mt-1 mb-2">
                <div className="flex flex-row">
                    <span className="flex-shrink-0 cursor-pointer text-secondary underline text-base" onClick={onConfigBack}>
                        Cancel
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
                    tagsList={stepData.tagsList} hangarCount={stepData.hangarCount} planCost={stepData.planCost} clickHandler={false} />
                    <ItemsCard itemsList={stepData.itemsList} />
                </div>
          </div>
        </div>
        </>
    )
}

export default AppConfigComponent
