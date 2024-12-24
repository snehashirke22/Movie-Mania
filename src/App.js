import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import PeopleChoice from './pages/PeopleChoice';
import Genre from './pages/Genre';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <Sidebar isOpen={isSidebarOpen} />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/trending" exact element={<Trending />} />
                        <Route path="/upcoming" exact element={<Upcoming />} />
                        <Route path="/peoplechoice" exact element={<PeopleChoice />} />
                        <Route path="/genre/:genreId" exact element={<Genre />} />
                    </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
