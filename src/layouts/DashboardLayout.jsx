import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-primary text-secondary selection:bg-accent selection:text-primary">
            <Sidebar />
            <main className="md:mr-64 min-h-screen p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
