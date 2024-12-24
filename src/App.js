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
    const [query, setQuery] = useState(''); // Search query state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Header 
                    toggleSidebar={toggleSidebar} 
                    isSidebarOpen={isSidebarOpen} 
                    setQuery={setQuery} // Pass setQuery to Header
                />
                <Sidebar isOpen={isSidebarOpen} />
                <Routes>
                    <Route path="/" exact element={<Home query={query} />} />
                    <Route path="/trending" exact element={<Trending query={query} />} />
                    <Route path="/upcoming" exact element={<Upcoming query={query} />} />
                    <Route path="/peoplechoice" exact element={<PeopleChoice query={query} />} />
                    <Route path="/genre/:genreName/:genreId" exact element={<Genre query={query} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
