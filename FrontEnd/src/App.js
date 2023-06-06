import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import RouteApp from './Routes/route'
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/Header";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <RouteApp />
                <Footer />
            </div>
        </Router>
    )
}
export default App



