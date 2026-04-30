import { NavLink } from 'react-router-dom';

export default function SettingsPage() {
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
            <NavLink to="/settings/profile" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-200 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              프로필
            </NavLink>
            <NavLink to="/settings/account" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-200 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              계정
            </NavLink>
            <NavLink to="/settings/appearance" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-200 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>
              테마
            </NavLink>
            <NavLink to="/settings/notifications" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-200 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              알림
            </NavLink>
            <NavLink to="/settings/billing" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-warm-200 bg-warm-800/50' : 'text-warm-400 hover:bg-warm-800/30'}`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="2" y1="12" x2="22" y2="12"></line></svg>
              결제 정보
            </NavLink>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4">
          <div className="glass p-8 rounded-xl shadow-premium-md">
            <h2 className="text-3xl font-bold text-warm-50 mb-2">프로필 설정</h2>
            <p className="text-warm-400 mb-8">이 정보는 공개적으로 표시됩니다. 신중하게 작성하세요.</p>

            <form className="space-y-6">
              {/* Profile Picture Upload */}
              <div className="flex items-center gap-6">
                <img className="w-24 h-24 rounded-full border-2 border-accent-blue/50" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Current Profile" />
                <div>
                  <button type="button" className="btn-secondary bg-warm-800/70 text-warm-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-warm-800 transition-colors">사진 변경</button>
                  <p className="text-xs text-warm-500 mt-2">JPG, GIF 또는 PNG. 1MB 이하.</p>
                </div>
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-warm-300 mb-2">사용자 이름</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-warm-500">site.com/</span>
                  <input type="text" id="username" defaultValue="m-kim" className="form-input pl-24" />
                </div>
              </div>

              {/* About */}
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-warm-300 mb-2">소개</label>
                <textarea id="about" rows={4} className="form-input" placeholder="자신에 대해 간단히 소개해주세요."></textarea>
                <p className="text-xs text-warm-500 mt-1">다른 사용자에게 자신을 소개하는 간단한 설명입니다.</p>
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-warm-300 mb-2">웹사이트</label>
                <input type="url" id="website" defaultValue="https://m-kim.dev" className="form-input" />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-4 border-t border-warm-800/50">
                <button type="button" className="btn-secondary bg-warm-800/70 text-warm-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-warm-800 transition-colors">취소</button>
                <button type="submit" className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-5 py-2.5 rounded-lg font-semibold shadow-glow-blue hover:shadow-glow-blue/70 transition-all">저장</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
