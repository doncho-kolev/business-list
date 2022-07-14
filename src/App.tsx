import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import List from './components/list/List';
import Business from './components/business/Business';
import NotFound from './components/notFound/NotFound';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<List />} />
                <Route path="/business/:id" element={<Business />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}