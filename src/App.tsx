import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Business from './components/business/Business';
import NotFound from './components/notFound/NotFound';
import Layout from './components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BusinessLink } from './services/useGetBusinesses';
import AllBusiness from './components/business/AllBusinesses';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: BusinessLink
});

function App() {
    return (
        <Router >
            <Routes>
                <Route element={<Layout><Outlet /></Layout>}>
                    <Route index element={<AllBusiness />} />
                    <Route path="/business/:id" element={<Business />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ Router>
    );
}

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

export default ApolloApp;