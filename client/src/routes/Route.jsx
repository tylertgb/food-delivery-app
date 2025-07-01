// src/routes/Routes.jsx
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import DashboardLayout from '../components/layout/DashboardLayout';
// import Dashboard from '../pages/Dashboard/Dashboard';

export const router = createBrowserRouter([
    {
    path: '/',
    element: <DashboardLayout />,
    children: [
      // { index: true, element: <Dashboard /> },
      // { path: 'reports-dashboard', element: <ReportsDashboard/> },
      // { path: 'print', element: <PrintReports printMode /> },
      // { path: 'export', element: <ExportReports exportMode /> },
      // { path: 'beneficiaries', element: <Beneficiaries />, },
    ],
    },
]);