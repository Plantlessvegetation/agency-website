import { motion } from 'framer-motion';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/analytics" element={<DashboardOverview />} />
            <Route path="/projects" element={<DashboardOverview />} />
            <Route path="/reports" element={<DashboardOverview />} />
            <Route path="/settings" element={<DashboardOverview />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}