import React from 'react'
import StepCard from './StepCard'

function StepsCard({configureHangar}) {
    const personalTags = ["Limited Explore Features", "Basic Tools", "Limited Social Features", "Limited Storage & Downloads", "No Analytics/Monitoring"]
    const studentTags = ["Basic Explore Features", "Unlimited Tools", "Basic Social Features", "Limited Storage & Downloads", "No Analytics/Monitoring"]
    const professionalTags = ["Unlimited Explore Features", "Unlimited Tools", "Unlimited Social Features", "Unlimited Storage & Downloads", "Analytics/Monitoring"]
    const personalList = ["News, Music, Cook, Gallery", "Clock, Calendar, Calculator, Dictionary", "Reddit, Wikipedia, Covid-19 Tracker"]
    const studentList = ["News, Music, Maps", "Clock, Calendar, Calculator, Dictionary, Notes, Todoist", "Wikipedia, Covid-19 Tracker"]
    const professionalList = ["News, Music, Cook, Maps, Weather, Gallery", "Clock, Calendar, Calculator, Converter, Dictionary, Notes, Todoist, Board", "Reddit, Wikipedia, Hackernews, Covid-19 Tracker"]
    return (
       <>
            <StepCard key="H" planName="Personal" planDays="30"
            tagsList={personalTags} hangarCount="4" planCost="99" id="H" onClick={configureHangar} />
            <StepCard key="S" planName="Student" planDays="30" tagsList={studentTags} hangarCount="2" planCost="49" id="S" onClick={configureHangar} />
            <StepCard key="P" planName="Professional" planDays="30" 
            tagsList={professionalTags} hangarCount="5" planCost="129" id="P" onClick={configureHangar}/>
       </>
    )
}

export default StepsCard
