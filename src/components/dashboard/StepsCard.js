import StepCard from './StepCard'

function StepsCard({configureHangar}) {
    const personalTags = ["Limited Explore Features", "Basic Tools", "Limited Social Features", "Limited Storage & Downloads", "No Analytics/Monitoring"]
    const studentTags = ["Basic Explore Features", "Unlimited Tools", "Basic Social Features", "Limited Storage & Downloads", "No Analytics/Monitoring"]
    const professionalTags = ["Unlimited Explore Features", "Unlimited Tools", "Unlimited Social Features", "Unlimited Storage & Downloads", "Analytics/Monitoring"]
    const personalList = ["News, Music, Cook, Gallery", "Clock, Calendar, Calculator, Dictionary", "Reddit, Wikipedia, Covid-19 Tracker"]
    const studentList = ["News, Music, Maps", "Clock, Calendar, Calculator, Dictionary, Notes, Todoist", "Wikipedia, Covid-19 Tracker"]
    const professionalList = ["News, Music, Cook, Maps, Weather, Gallery", "Clock, Calendar, Calculator, Converter, Dictionary, Notes, Todoist, Board", "Reddit, Wikipedia, Hackernews, Covid-19 Tracker"]
    const stepsArray = [{
        planName: "Personal",
        planDays: "30",
        tagsList: personalTags,
        itemsList: personalList,
        hangarCount: "4",
        planCost: "99"
    },
    {
        planName: "Student",
        planDays: "30",
        tagsList: studentTags,
        itemsList: studentList,
        hangarCount: "2",
        planCost: "49"
    },
    {
        planName: "Professional",
        planDays: "30",
        tagsList: professionalTags,
        itemsList: professionalList,
        hangarCount: "5",
        planCost: "129"
    }]
    return (
       <>
            {stepsArray.map((step, index) => (
                <StepCard key={index} planName={step.planName} planDays={step.planDays}
                tagsList={step.tagsList} hangarCount={step.hangarCount} planCost={step.planCost} clickHandler={true} onClick={() => configureHangar(step)} />
            ))}
       </>
    )
}

export default StepsCard
