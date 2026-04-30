import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
<header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
  <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <span className="gradient-text font-bold text-lg">Site</span>
    <div className="flex items-center gap-1"><Link to="/" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Home</Link><Link to="/dashboard" className="text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm">Dashboard</Link><Link to="/settings" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Settings</Link></div>
  </nav>
</header>
<div className="min-h-screen bg-warm-950 text-warm-100 p-6 md:p-8 font-['Noto_Sans_KR'] relative overflow-hidden">
  {/* Background Orbs */}
  <div className="hero-orb bg-accent-blue w-80 h-80 -top-20 -left-20" />
  <div className="hero-orb bg-accent-purple w-64 h-64 top-1/4 right-10" style={{ animationDelay: '2s' }} />
  <div className="hero-orb bg-accent-cyan w-72 h-72 bottom-1/4 left-1/3" style={{ animationDelay: '4s' }} />

  {/* Grid texture */}
  <div className="absolute inset-0 grid-overlay" />

  <div className="max-w-7xl mx-auto relative z-10">
    <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight mb-8 md:mb-12">
      대시보드
    </h1>

    {/* Stats Bar */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
      <div className="glass-card p-6">
        <div className="text-warm-400 text-sm uppercase tracking-wider mb-2">총 매출</div>
        <div className="gradient-text text-3xl font-bold">₩ 123,456,789</div>
        <div className="text-emerald-400 text-sm mt-1">+12.5% 지난 달</div>
      </div>
      <div className="glass-card p-6">
        <div className="text-warm-400 text-sm uppercase tracking-wider mb-2">신규 고객</div>
        <div className="gradient-text text-3xl font-bold">85명</div>
        <div className="text-rose-400 text-sm mt-1">-3.2% 지난 주</div>
      </div>
      <div className="glass-card p-6">
        <div className="text-warm-400 text-sm uppercase tracking-wider mb-2">진행 중인 프로젝트</div>
        <div className="gradient-text text-3xl font-bold">14개</div>
        <div className="text-warm-500 text-sm mt-1">마감 임박 3개</div>
      </div>
      <div className="glass-card p-6">
        <div className="text-warm-400 text-sm uppercase tracking-wider mb-2">완료된 작업</div>
        <div className="gradient-text text-3xl font-bold">210개</div>
        <div className="text-emerald-400 text-sm mt-1">+8.1% 이번 달</div>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Performance Summary */}
      <div className="lg:col-span-2 glass-card p-6">
        <h2 className="text-xl font-semibold text-warm-50 mb-4">성능 요약</h2>
        <p className="text-warm-400 text-sm mb-4">월별 매출 및 고객 성장 추이</p>
        <div className="relative h-64 w-full">
          <img data-search-keyword="데이터 분석 차트"
            src="https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHwlRUIlOEQlQjAlRUMlOUQlQjQlRUQlODQlQjAlMjAlRUIlQjYlODQlRUMlODQlOUQlMjAlRUMlQjAlQTglRUQlOEElQjh8ZW58MHwwfHx8MTc3NzU1Njk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="데이터 분석 차트"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 to-transparent rounded-lg" />
        </div>
        <p className="text-warm-500 text-xs mt-2">최신 데이터: 2024년 7월 25일</p>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-warm-50 mb-4">빠른 작업</h2>
        <div className="space-y-4">
          <button className="btn-premium w-full bg-gradient-to-r from-accent-blue to-accent-purple text-white py-3 rounded-xl font-semibold shadow-glow-blue">
            새 프로젝트 생성
          </button>
          <button className="btn-premium w-full glass-card text-warm-200 py-3 rounded-xl font-semibold hover:shadow-glow-purple">
            보고서 다운로드
          </button>
          <button className="btn-premium w-full glass-card text-warm-200 py-3 rounded-xl font-semibold hover:shadow-glow-cyan">
            고객 지원 문의
          </button>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="lg:col-span-2 glass-card p-6">
        <h2 className="text-xl font-semibold text-warm-50 mb-4">최근 프로젝트</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 glass-card hover:shadow-premium-sm">
            <img data-search-keyword="모바일 앱 개발"
              src="https://images.unsplash.com/photo-1731690435374-5d8b4f1a3d47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHwlRUIlQUElQTglRUIlQjAlOTQlRUMlOUQlQkMlMjAlRUMlOTUlQjElMjAlRUElQjAlOUMlRUIlQjAlOUN8ZW58MHwwfHx8MTc3NzU1Njk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="모바일 앱 개발"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-warm-100">모바일 앱 리뉴얼</div>
              <div className="text-warm-500 text-sm">진행 중 - 70% 완료</div>
            </div>
            <span className="ml-auto text-warm-300 text-sm">D-15</span>
          </div>
          <div className="flex items-center gap-4 p-3 glass-card hover:shadow-premium-sm">
            <img data-search-keyword="웹사이트 디자인"
              src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHwlRUMlOUIlQjklRUMlODIlQUMlRUMlOUQlQjQlRUQlOEElQjglMjAlRUIlOTQlOTQlRUMlOUUlOTAlRUMlOUQlQjh8ZW58MHwwfHx8MTc3NzU1Njk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="웹사이트 디자인"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-warm-100">회사 웹사이트 재구축</div>
              <div className="text-warm-500 text-sm">검토 중 - 90% 완료</div>
            </div>
            <span className="ml-auto text-warm-300 text-sm">D-7</span>
          </div>
          <div className="flex items-center gap-4 p-3 glass-card hover:shadow-premium-sm">
            <img data-search-keyword="마케팅 캠페인"
              src="https://images.unsplash.com/photo-1552890388-211d5ad61e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHwlRUIlQTclODglRUMlQkMlODAlRUQlOEMlODUlMjAlRUMlQkElQTAlRUQlOEUlOTglRUMlOUQlQjh8ZW58MHwwfHx8MTc3NzU1Njk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="마케팅 캠페인"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-warm-100">신제품 마케팅 캠페인</div>
              <div className="text-warm-500 text-sm">대기 중 - 20% 완료</div>
            </div>
            <span className="ml-auto text-warm-300 text-sm">D-30</span>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-warm-50 mb-4">알림</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 glass-card hover:shadow-premium-sm">
            <div className="w-8 h-8 rounded-full bg-accent-rose flex items-center justify-center text-white text-sm font-bold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
            </div>
            <div>
              <div className="font-semibold text-warm-100">새로운 메시지</div>
              <div className="text-warm-400 text-sm">김민수 팀장님으로부터</div>
              <div className="text-warm-500 text-xs mt-1">5분 전</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 glass-card hover:shadow-premium-sm">
            <div className="w-8 h-8 rounded-full bg-accent-emerald flex items-center justify-center text-white text-sm font-bold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
            </div>
            <div>
              <div className="font-semibold text-warm-100">월간 보고서 준비</div>
              <div className="text-warm-400 text-sm">마감일: 이번 주 금요일</div>
              <div className="text-warm-500 text-xs mt-1">1시간 전</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 glass-card hover:shadow-premium-sm">
            <div className="w-8 h-8 rounded-full bg-accent-amber flex items-center justify-center text-white text-sm font-bold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div>
              <div className="font-semibold text-warm-100">새로운 피드백</div>
              <div className="text-warm-400 text-sm">모바일 앱 사용자</div>
              <div className="text-warm-500 text-xs mt-1">어제</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer className="border-t border-warm-800/50 py-16 px-6 bg-warm-950">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="col-span-2">
      <span className="gradient-text font-bold text-lg">Site</span>
      <p className="text-warm-500 text-sm leading-relaxed mt-3 max-w-sm">Building the future, one pixel at a time.</p>
    </div>
    <div>
      <h4 className="font-semibold text-warm-300 mb-4">Pages</h4>
      <ul className="space-y-2 text-sm text-warm-500">
        <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
        <li><Link to="/dashboard" className="hover:text-accent-blue transition-colors">Dashboard</Link></li>
        <li><Link to="/settings" className="hover:text-accent-blue transition-colors">Settings</Link></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-warm-300 mb-4">Company</h4>
      <ul className="space-y-2 text-sm text-warm-500">
        <li><a href="#" className="hover:text-accent-blue transition-colors">About</a></li>
        <li><a href="#" className="hover:text-accent-blue transition-colors">Contact</a></li>
        <li><a href="#" className="hover:text-accent-blue transition-colors">Privacy</a></li>
      </ul>
    </div>
  </div>
  <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-warm-800/50 text-center text-warm-600 text-sm">
    © 2026 Site. All rights reserved.
  </div>
</footer>
</div>
  );
}