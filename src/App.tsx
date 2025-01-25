import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { ServicePage } from "@/pages/service";
import { EverytimePage } from "@/pages/everytime";
import { BlindPage } from "@/pages/blind";
import { TiktokPage } from "@/pages/tiktok";
import { PortfolioPage } from "@/pages/portfolio";

function App() {
    return (
        <Router basename="/service">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/everytime" element={<EverytimePage />} />
                <Route path="/blind" element={<BlindPage />} />
                <Route path="/tiktok" element={<TiktokPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
}

export default App;
