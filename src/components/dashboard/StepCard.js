
function StepCard({planName, planDays, tagsList, hangarCount, planCost, id, onClick}) {
    return (
        <div className="p-1 m-4 rounded-md bg-secondary flex-1 text-center items-center shadow-md transform hover:scale-105">
            <div className="select-none text-primary text-2xl mt-2">
                {planName}
            </div>
            <div className="text-md text-primary mt-2">
                {planDays.concat('days')}
            </div>
            <div className="text-md text-primary mt-2">
            {hangarCount.concat(' Hangar Instances')} 
            </div>
            <div className="text-secondary py-1 px-2 bg-primary mt-2">
                {tagsList.map(tag=> (
                    <li className="list-none text-xs text-secondary mt-1">{tag}</li>
                ))}
            </div>
            <div className="text-lg text-primary mt-2">
                {'$ '.concat(planCost)}
            </div>
            <div className="flex-shrink-0 bg-primary m-2 cursor-pointer text-secondary text-base py-2 px-10 rounded-lg shadow-md focus:outline-none"  onClick={onClick} id={id}>
                Select
            </div>
        </div>
    )
}

export default StepCard
