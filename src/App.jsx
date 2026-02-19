import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

function App() {
    const [generalInfo, setGeneralInfo] = useState ({
        name:'',
        email:'',
        phone:''
    })

    return (
        <div>
            <h1>CV App</h1>
            <GeneralInfo data = {generalInfo} onSubmit={setGeneralInfo} />
        </div>
    )
}

export default App;