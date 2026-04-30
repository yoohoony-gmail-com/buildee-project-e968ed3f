function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Site</h1>
          <div>
            <a href="/" className="text-lg text-gray-600 hover:text-blue-600 mr-4">회사 소개</a>
            <a href="/services" className="text-lg text-gray-600 hover:text-blue-600">서비스</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-4xl font-bold">회사 소개</h2>
        <p className="mt-4">저희 회사를 소개합니다.</p>
        <p className="mt-4">저희는 최고의 서비스를 제공합니다.</p>
      </main>
    </div>
  );
}

export default App;