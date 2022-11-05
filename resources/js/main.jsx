import React from "react";
import './bootstrap';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProjetList from "./pages/ProjetList"
import ProjetCreate from "./pages/ProjetCreate"
import ProjetEdit from "./pages/ProjetEdit"
import ProjetShow from "./pages/ProjetShow"

function Main () {
    return (
        <Router>

            <Routes>
                <Route exact path="/app" element= {<ProjetList/>}/>
                <Route exact path="/create" element={<ProjetCreate/>}  />
                <Route exact path="/edit/:id" element={<ProjetEdit/>}  />
                <Route exact path="/show/:id" element= {<ProjetShow/>}  />
            </Routes>
        </Router>
    )
}
export default Main;
if(document.getElementById('app')){
    ReactDOM.render(<Main/>,document.getElementById('app'));
}
