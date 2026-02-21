import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

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

    return (
        <div>
            <h1>CV App</h1>
            <GeneralInfo data={generalInfo} onSubmit={setGeneralInfo} />
            <Education data={education} onSubmit={setEducation} />
        </div>
    )
}


export default App;