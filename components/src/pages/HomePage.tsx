import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="font-['Noto_Sans_KR'] min-h-screen bg-warm-950 text-warm-100 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 md:py-32">
        {/* Background orbs */}
        <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
        <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
        <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-1/4 left-1/4 opacity-50" style={{ animationDelay: '4s' }} />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-overlay" />
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8 shadow-premium-sm">
            ✨ 혁신을 선도하는 기업
          </span>
          <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            디지털 미래를 위한 스마트 솔루션
          </h1>
          <p className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, 클라우드, 데이터 분석으로 비즈니스를 혁신하고 새로운 가치를 창출하세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue hover:shadow-glow-blue/70 transition-all duration-300">
              지금 시작하기
            </button>
            <button className="glass-card px-8 py-4 rounded-xl text-warm-200 font-semibold hover:shadow-premium-md transition-all duration-300">
              자세히 알아보기
              <svg className="w-5 h-5 inline-block ml-2 -mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Row Section */}
      <section className="py-24 px-6 bg-warm-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center rounded-xl shadow-premium-sm">
              <h3 className="text-4xl font-bold text-accent-cyan mb-2">10x</h3>
              <p className="text-warm-400">효율성 증대</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl shadow-premium-sm">
              <h3 className="text-4xl font-bold text-accent-purple mb-2">+50%</h3>
              <p className="text-warm-400">비용 절감</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl shadow-premium-sm">
              <h3 className="text-4xl font-bold text-accent-blue mb-2">99.9%</h3>
              <p className="text-warm-400">서비스 가용성</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl shadow-premium-sm">
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-warm-400">기술 지원</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
