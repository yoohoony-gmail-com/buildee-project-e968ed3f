export default function DashboardPage() {
  return (
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
            <div className="text-warm-400 text-sm uppercase tracking-wider mb-2">서버 상태</div>
            <div className="gradient-text text-3xl font-bold">정상</div>
            <div className="text-emerald-400 text-sm mt-1">응답시간 45ms</div>
          </div>
        </div>
      </div>
    </div>
  );
}
