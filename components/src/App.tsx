import { Routes, Route, NavLink, Link, Outlet, Navigate } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import SettingsPage from './SettingsPage';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-warm-950 text-white font-sans">
            <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
                <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
                    <div className="flex items-center gap-1">
                        <NavLink 
                            to="/" 
                            end
                            className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/dashboard" 
                            className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink 
                            to="/settings" 
                            className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}
                        >
                            Settings
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const HomePage = () => {
    // This component is rendered by the router for the '/' path.
    // The actual content for the home page is in 'structure/src/pages/HomePage.tsx'
    // This is a placeholder.
    return (
        <div className="relative min-h-screen bg-warm-950 text-warm-100 p-6 md:p-8 font-['Noto_Sans_KR'] overflow-hidden">
            <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -left-20" />
            <div className="hero-orb bg-accent-purple w-64 h-64 top-1/4 right-10" style={{ animationDelay: '2s' }} />
            <div className="absolute inset-0 grid-overlay" />

            <div className="max-w-7xl mx-auto relative z-10 text-center py-20">
                <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Site에 오신 것을 환영합니다
                </h1>
                <p className="text-lg md:text-xl text-warm-300 max-w-3xl mx-auto">
                    이것은 통합된 대시보드 애플리케이션의 홈페이지입니다. 대시보드 또는 설정 페이지로 이동하여 기능을 확인하세요.
                </p>
            </div>
        </div>
    );
};

const ProfileSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">프로필</h3><div className="glass p-8 rounded-xl"><p>프로필 정보를 관리하세요.</p></div></div>;
const AccountSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">계정</h3><div className="glass p-8 rounded-xl"><p>계정 설정을 관리하세요.</p></div></div>;
const NotificationSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">알림</h3><div className="glass p-8 rounded-xl"><p>알림 설정을 관리하세요.</p></div></div>;
const AppearanceSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">디자인</h3><div className="glass p-8 rounded-xl"><p>애플리케이션의 디자인을 변경하세요.</p></div></div>;
const IntegrationSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">연동</h3><div className="glass p-8 rounded-xl"><p>외부 서비스 연동을 관리하세요.</p></div></div>;
const BillingSettings = () => <div className="flex-1"><h3 className="text-3xl font-bold text-warm-50 mb-6">결제</h3><div className="glass p-8 rounded-xl"><p>결제 및 구독 정보를 확인하세요.</p></div></div>;

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
          <Route path="appearance" element={<AppearanceSettings />} />
          <Route path="integrations" element={<IntegrationSettings />} />
          <Route path="billing" element={<BillingSettings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
