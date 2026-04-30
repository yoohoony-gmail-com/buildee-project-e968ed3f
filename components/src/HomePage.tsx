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
            <div className="glass-card p-6 text-center rounded-xl">
              <h3 className="text-4xl font-bold text-accent-cyan mb-2">10+</h3>
              <p className="text-warm-400">년의 경험</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl">
              <h3 className="text-4xl font-bold text-accent-cyan mb-2">50+</h3>
              <p className="text-warm-400">성공적인 프로젝트</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl">
              <h3 className="text-4xl font-bold text-accent-cyan mb-2">99%</h3>
              <p className="text-warm-400">고객 만족도</p>
            </div>
            <div className="glass-card p-6 text-center rounded-xl">
              <h3 className="text-4xl font-bold text-accent-cyan mb-2">24/7</h3>
              <p className="text-warm-400">기술 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">우리의 서비스</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto">최첨단 기술을 활용하여 고객의 비즈니스 성장을 돕는 맞춤형 솔루션을 제공합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-card p-8 rounded-2xl shadow-premium-md transition-all duration-300 hover:shadow-glow-purple/40 hover:-translate-y-2">
              <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                {/* Icon for AI */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15.58 14.593c.326.07.66.113 1.007.113 1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3c0 .348.043.682.113 1.007m-1.22 1.22C14.682 15.957 14.348 16 14 16c-1.657 0-3-1.343-3-3s1.343-3 3-3c.348 0 .682.043 1.007.113m-1.22 1.22C13.674 11.326 13.34 11.284 13 11.284c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3c0 .348-.043.682-.113 1.007M9.284 13c.07.326.113.66.113 1.007 0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3c.348 0 .682.043 1.007.113m1.22 1.22C9.318 14.682 9.652 15 10 15c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3c0-.348.043-.682.113-1.007"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-warm-50 mb-3">AI 기반 솔루션</h3>
              <p className="text-warm-400">머신러닝과 딥러닝을 활용하여 데이터를 분석하고 비즈니스 프로세스를 자동화합니다.</p>
            </div>
            {/* Service Card 2 */}
            <div className="glass-card p-8 rounded-2xl shadow-premium-md transition-all duration-300 hover:shadow-glow-blue/40 hover:-translate-y-2">
              <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center text-accent-blue">
                {/* Icon for Cloud */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-warm-50 mb-3">클라우드 인프라 구축</h3>
              <p className="text-warm-400">안정적이고 확장 가능한 클라우드 환경을 설계하고 구축하여 비즈니스 연속성을 보장합니다.</p>
            </div>
            {/* Service Card 3 */}
            <div className="glass-card p-8 rounded-2xl shadow-premium-md transition-all duration-300 hover:shadow-glow-cyan/40 hover:-translate-y-2">
              <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 flex items-center justify-center text-accent-cyan">
                {/* Icon for Data */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 11v5m-4.5-2.5h9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-warm-50 mb-3">데이터 분석 및 시각화</h3>
              <p className="text-warm-400">빅데이터를 분석하여 비즈니스 인사이트를 도출하고, 효과적인 의사결정을 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-warm-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">고객 후기</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto">우리의 파트너들이 말하는 성공 스토리</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl shadow-premium-md">
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full mr-4 border-2 border-accent-blue/50" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Client 1" />
                <div>
                  <h4 className="font-bold text-lg text-warm-50">김민준</h4>
                  <p className="text-sm text-warm-400">Tech Innovators, CEO</p>
                </div>
              </div>
              <p className="text-warm-300 leading-relaxed">"이 팀과의 협업은 우리 비즈니스에 혁신을 가져왔습니다. AI 솔루션 덕분에 운영 효율성이 30% 이상 증가했습니다."</p>
            </div>
            <div className="glass-card p-8 rounded-2xl shadow-premium-md">
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full mr-4 border-2 border-accent-purple/50" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="Client 2" />
                <div>
                  <h4 className="font-bold text-lg text-warm-50">이서연</h4>
                  <p className="text-sm text-warm-400">Future Solutions, CTO</p>
                </div>
              </div>
              <p className="text-warm-300 leading-relaxed">"클라우드 마이그레이션 프로젝트를 완벽하게 수행해주셨습니다. 안정성과 확장성 모두 만족스럽습니다."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6">
        {/* Background orbs */}
        <div className="hero-orb bg-accent-blue w-96 h-96 -bottom-40 -right-20" />
        <div className="hero-orb bg-accent-purple w-72 h-72 -top-20 -left-20" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center glass-card p-12 md:p-16 rounded-3xl shadow-premium-lg">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">지금 바로 시작하세요</h2>
          <p className="text-warm-300 text-lg max-w-2xl mx-auto mb-10">
            당신의 비즈니스를 한 단계 더 발전시킬 준비가 되셨나요? <br />
            전문가와 상담하고 맞춤형 솔루션을 제안받으세요.
          </p>
          <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue hover:shadow-glow-blue/70 transition-all duration-300 text-lg">
            무료 상담 신청
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-900 border-t border-warm-800/50">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="gradient-text font-bold text-lg mb-4">Site</h4>
              <p className="text-warm-400 text-sm">디지털 미래를 위한 스마트 솔루션.</p>
            </div>
            <div>
              <h5 className="text-warm-200 font-semibold mb-4">링크</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-warm-400 hover:text-white transition-colors">서비스</a></li>
                <li><a href="#" className="text-warm-400 hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#" className="text-warm-400 hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-warm-200 font-semibold mb-4">연락처</h5>
              <ul className="space-y-2 text-sm text-warm-400">
                <li>Email: contact@site.com</li>
                <li>Phone: +82 10-1234-5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-warm-500">&copy; 2024 Site. All Rights Reserved.</p>
            {/* Social media icons can go here */}
          </div>
        </div>
      </footer>
    </div>
  );
}
