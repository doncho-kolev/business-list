import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Business from './components/business/Business';
import NotFound from './components/notFound/NotFound';
import Layout from './components/Layout';
import BusinessList from './components/business/BusinessList';

export default function App() {
    return (
        <Router >
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route index element={<BusinessList />} />
                    <Route path="/business/:id" element={<Business />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ Router>
    );
}