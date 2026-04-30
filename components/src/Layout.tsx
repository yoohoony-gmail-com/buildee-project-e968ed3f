import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}>Home</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}>Dashboard</NavLink>
            <NavLink to="/settings" className={({ isActive }) => `px-3 py-2 text-sm ${isActive ? 'text-white font-semibold border-b-2 border-accent-blue' : 'text-warm-400 hover:text-white transition-colors'}`}>Settings</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
