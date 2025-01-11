import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EverytimePage } from "@/pages/everytime";
import { BlindPage } from "@/pages/blind";
import { RedirectPage } from "@/pages/redirect";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<RedirectPage />} />
                <Route path='/everytime' element={<EverytimePage />} />
                <Route path='/blind' element={<BlindPage />} />
            </Routes>
        </Router>
    );
}

export default App;
