import { NavLink, Outlet } from 'react-router-dom';

export default function Settings() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-50 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`;

  return (
    <div className="relative min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] overflow-hidden py-16 px-6 md:px-8">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -left-20 animate-float" />
      <div className="hero-orb bg-accent-purple w-64 h-64 bottom-1/4 right-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 glass p-6 rounded-xl shadow-premium-md self-start sticky top-28">
          <h2 className="text-2xl font-bold text-warm-50 mb-6">설정</h2>
          <nav className="space-y-2">
            <NavLink to="/settings/profile" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              프로필
            </NavLink>
            <NavLink to="/settings/account" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              계정
            </NavLink>
            <NavLink to="/settings/notifications" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              알림
            </NavLink>
            <NavLink to="/settings/appearance" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>
              디자인
            </NavLink>
            <NavLink to="/settings/integrations" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
              연동
            </NavLink>
            <div className="border-t border-warm-800/50 my-4"></div>
            <NavLink to="/settings/billing" className={navLinkClasses}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              결제
            </NavLink>
          </nav>
        </aside>

        {/* Main Content for nested routes */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
