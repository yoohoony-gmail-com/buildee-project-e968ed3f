import { NavLink } from 'react-router-dom';

export default function Settings() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-warm-800/50 text-warm-200 hover:bg-warm-800/70' : 'text-warm-400 hover:bg-warm-800/30'}`;

  return (
    <div className="relative min-h-screen bg-warm-950 text-warm-100 py-16 px-6 md:px-8">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -left-20 animate-float" />
      <div className="hero-orb bg-accent-purple w-64 h-64 bottom-1/4 right-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 glass p-6 rounded-xl shadow-premium-md self-start sticky top-28">
          <h2 className="text-2xl font-bold text-warm-50 mb-6">설정</h2>
          <nav className="space-y-2">
            <NavLink to="/settings/profile" className={getNavLinkClass}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              프로필
            </NavLink>
            <NavLink to="/settings/account" className={getNavLinkClass}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              계정
            </NavLink>
            <NavLink to="/settings/notifications" className={getNavLinkClass}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              알림
            </NavLink>
            <NavLink to="/settings/appearance" className={getNavLinkClass}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              테마
            </NavLink>
          </nav>
        </aside>
        <div className="flex-1">
          {/* Content for the selected setting would be rendered here via a nested Outlet */}
          <div className="glass p-8 rounded-xl shadow-premium-md">
            <h1 className="text-3xl font-bold text-warm-50">Page Content</h1>
            <p className="text-warm-300 mt-4">Settings content will be displayed here based on the selected menu item.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
