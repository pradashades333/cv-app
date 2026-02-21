import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [education, setEducation] = useState({
        school: '',
        title: '',
        date: ''
    });

    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateUntil: ''
    });

    return (
        <div>
            <h1>CV App</h1>
            <GeneralInfo data={generalInfo} onSubmit={setGeneralInfo} />
            <Education data={education} onSubmit={setEducation} />
            <Experience data={experience} onSubmit={setExperience} />
        </div>
    )
}


export default App;