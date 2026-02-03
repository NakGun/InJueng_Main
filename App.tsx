import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, MapPin, LayoutDashboard, Home, Info, Briefcase, Image as ImageIcon, MessageSquare, ChevronRight, Loader2 } from 'lucide-react';
import { INITIAL_CONFIG, INITIAL_SERVICES, INITIAL_PORTFOLIO, INITIAL_TESTIMONIALS } from './constants.tsx';
import { SiteConfig, ServiceItem, PortfolioItem, Testimonial } from './types.ts';

// Components
const Navbar = ({ companyName }: { companyName: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent tracking-tighter">
              {companyName}
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-purple-400 transition-colors">홈</Link>
            <Link to="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">회사소개</Link>
            <Link to="/services" className="text-sm font-medium hover:text-purple-400 transition-colors">서비스</Link>
            <Link to="/portfolio" className="text-sm font-medium hover:text-purple-400 transition-colors">시공사례</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors">문의하기</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2 bg-purple-600 rounded-full text-sm font-bold purple-glow purple-glow-hover transition-all">
              무료 견적 요청
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 p-4 absolute w-full animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg">홈</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg">회사소개</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg">서비스</Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-lg">시공사례</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg">문의하기</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-purple-600 rounded-lg font-bold">무료 견적 요청</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ config }: { config: SiteConfig }) => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">{config.companyName}</h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              인정E&C는 고객의 건강과 자산 가치를 최우선으로 생각하는 프리미엄 위생 전문 기업입니다. 
              최첨단 장비와 전문가의 손길로 차원이 다른 쾌적함을 약속드립니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass rounded-full hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
              <Link to="/admin" className="p-2 glass rounded-full hover:text-purple-400 transition-colors"><LayoutDashboard size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">고객 센터</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center"><Phone size={16} className="mr-3 text-purple-400" /> {config.phone}</li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-purple-400" /> {config.contactEmail}</li>
              <li className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-purple-400" /> {config.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6">빠른 링크</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">제공 서비스</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">시공 갤러리</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">온라인 견적</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {config.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Pages
const HomePage = ({ config, services, portfolio, testimonials }: { config: SiteConfig, services: ServiceItem[], portfolio: PortfolioItem[], testimonials: Testimonial[] }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={config.heroImage} alt="Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 whitespace-pre-line">
              {config.slogan}
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              인정E&C는 다년간의 노하우를 바탕으로 에어컨 세척부터 건물 외벽 관리까지 
              완벽한 위생 솔루션을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <Link to="/contact" className="px-10 py-4 bg-purple-600 rounded-full font-bold text-center purple-glow purple-glow-hover transition-all">
                상담 신청하기
              </Link>
              <Link to="/services" className="px-10 py-4 glass rounded-full font-bold text-center hover:bg-white/10 transition-all">
                서비스 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold">전문적인 관리 서비스</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group glass rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
                    자세히 보기 <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1,500+</div>
              <div className="text-gray-400 text-sm">연간 시공 사례</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">고객 만족도</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm">전문 자격 보유</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-gray-400 text-sm">긴급 대응 가능</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-16">고객사 후기</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass p-8 rounded-3xl relative">
                <MessageSquare className="absolute top-8 right-8 text-purple-600/20" size={60} />
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-200 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-40 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">About Us</h2>
          <h3 className="text-4xl font-bold mb-8">최고의 기술력으로<br />공간의 생명력을 더합니다</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            인정E&C는 "정직한 기술, 인정받는 관리"라는 슬로건 아래 설립되었습니다. 
            단순히 닦고 치우는 것을 넘어, 공기질 개선과 시설물의 수명 연장을 목표로 합니다.
          </p>
          <p className="text-gray-300 leading-relaxed">
            우리는 보이지 않는 구석까지 파고드는 정밀함과, 최신 위생 테크놀로지를 결합하여 
            고객님께 가장 쾌적한 환경을 선사합니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-full object-cover" alt="Team" />
          <img src="https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1974&auto=format&fit=crop" className="rounded-2xl mt-8 h-full object-cover" alt="Cleaning" />
        </div>
      </div>
      
      <div className="glass p-12 rounded-3xl">
        <h4 className="text-2xl font-bold mb-12 text-center">인증 및 면허</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col items-center p-6 border border-white/10 rounded-xl bg-white/5">
              <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Info className="text-purple-400" />
              </div>
              <div className="text-sm font-bold text-center">건물위생관리업<br />정식 등록</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AdminDashboard = ({ 
  config, 
  setConfig, 
  services, 
  setServices, 
  portfolio, 
  setPortfolio 
}: { 
  config: SiteConfig, 
  setConfig: (c: SiteConfig) => void,
  services: ServiceItem[],
  setServices: (s: ServiceItem[]) => void,
  portfolio: PortfolioItem[],
  setPortfolio: (p: PortfolioItem[]) => void
}) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'services' | 'portfolio'>('settings');

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const addService = () => {
    const newService: ServiceItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: "신규 서비스",
      description: "서비스 설명을 입력하세요.",
      imageUrl: "https://picsum.photos/800/600",
      category: "office"
    };
    setServices([...services, newService]);
  };

  const removeService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  const updateService = (id: string, field: string, value: string) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-gray-200">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black min-h-screen border-r border-white/10 p-6 fixed">
          <h2 className="text-xl font-bold text-white mb-10 flex items-center">
            <LayoutDashboard className="mr-2 text-purple-500" /> 관리자 센터
          </h2>
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${activeTab === 'settings' ? 'bg-purple-600 text-white font-bold' : 'hover:bg-white/5'}`}
            >
              <Home className="mr-3" size={18} /> 기본 설정
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${activeTab === 'services' ? 'bg-purple-600 text-white font-bold' : 'hover:bg-white/5'}`}
            >
              <Briefcase className="mr-3" size={18} /> 서비스 관리
            </button>
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${activeTab === 'portfolio' ? 'bg-purple-600 text-white font-bold' : 'hover:bg-white/5'}`}
            >
              <ImageIcon className="mr-3" size={18} /> 시공 사례
            </button>
            <Link to="/" className="w-full flex items-center px-4 py-3 rounded-lg text-left text-gray-400 hover:text-white mt-10">
              <ChevronRight className="mr-3 rotate-180" size={18} /> 웹사이트로 돌아가기
            </Link>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 ml-64 p-10">
          <header className="mb-10 flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              {activeTab === 'settings' ? '기본 설정' : activeTab === 'services' ? '서비스 관리' : '시공 사례 관리'}
            </h1>
            <div className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-bold">
              Admin Mode
            </div>
          </header>

          <div className="glass p-8 rounded-3xl">
            {activeTab === 'settings' && (
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">회사명</label>
                  <input 
                    name="companyName" 
                    value={config.companyName} 
                    onChange={handleConfigChange}
                    className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">메인 슬로건</label>
                  <textarea 
                    name="slogan" 
                    rows={2}
                    value={config.slogan} 
                    onChange={handleConfigChange}
                    className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">메인 히어로 이미지 URL</label>
                  <input 
                    name="heroImage" 
                    value={config.heroImage} 
                    onChange={handleConfigChange}
                    className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">대표 전화</label>
                    <input 
                      name="phone" 
                      value={config.phone} 
                      onChange={handleConfigChange}
                      className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2">대표 이메일</label>
                    <input 
                      name="contactEmail" 
                      value={config.contactEmail} 
                      onChange={handleConfigChange}
                      className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">회사 주소</label>
                  <input 
                    name="address" 
                    value={config.address} 
                    onChange={handleConfigChange}
                    className="w-full bg-black border border-white/10 rounded-xl p-3 focus:border-purple-500 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-700 transition-all">설정 저장</button>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-400">등록된 총 {services.length}개의 서비스를 관리합니다.</p>
                  <button onClick={addService} className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-bold">+ 새 서비스 추가</button>
                </div>
                <div className="space-y-6">
                  {services.map((service) => (
                    <div key={service.id} className="p-6 border border-white/10 rounded-2xl flex gap-6 items-start">
                      <img src={service.imageUrl} className="w-32 h-32 object-cover rounded-xl" alt="Service" />
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <input 
                          value={service.title} 
                          onChange={(e) => updateService(service.id, 'title', e.target.value)}
                          placeholder="서비스 제목"
                          className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm"
                        />
                        <input 
                          value={service.imageUrl} 
                          onChange={(e) => updateService(service.id, 'imageUrl', e.target.value)}
                          placeholder="이미지 URL"
                          className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm"
                        />
                        <textarea 
                          value={service.description} 
                          onChange={(e) => updateService(service.id, 'description', e.target.value)}
                          placeholder="서비스 설명"
                          className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm col-span-2"
                        />
                      </div>
                      <button onClick={() => removeService(service.id)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="text-center py-20">
                <ImageIcon className="mx-auto text-gray-600 mb-4" size={48} />
                <p className="text-gray-400">포트폴리오 관리 기능은 현재 개발 중입니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ config }: { config: SiteConfig }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xnjzrgaq', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || '접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch (err) {
      setError('서버 연결에 실패했습니다. 나중에 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
          <h3 className="text-4xl font-bold">궁금하신 점을 남겨주세요</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-8">
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6">연락처 정보</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 text-purple-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">전화번호</div>
                    <div className="font-bold">{config.phone}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">이메일</div>
                    <div className="font-bold">{config.contactEmail}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 text-purple-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">본사 주소</div>
                    <div className="font-bold">{config.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 glass rounded-3xl overflow-hidden grayscale contrast-125">
               <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(config.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">성함 / 업체명</label>
                  <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">연락처</label>
                  <input required name="phone" type="tel" className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">서비스 선택</label>
                <select name="service" className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none appearance-none">
                  <option value="에어컨 세척">에어컨 세척</option>
                  <option value="건물 외벽 청소">건물 외벽 청소</option>
                  <option value="사무실/상가 정기 관리">사무실/상가 정기 관리</option>
                  <option value="기타 위생 솔루션">기타 위생 솔루션</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">문의 내용</label>
                <textarea required name="message" rows={5} className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none" placeholder="견적 요청 내용 및 면적 등을 기재해 주세요."></textarea>
              </div>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading || submitted}
                className={`w-full py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${submitted ? 'bg-green-600' : 'bg-purple-600 purple-glow hover:bg-purple-700'} ${(loading || submitted) ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                {submitted ? '문의가 접수되었습니다!' : loading ? '보내는 중...' : '견적 문의 보내기'}
              </button>
              
              {submitted && (
                <p className="text-center text-green-500 text-sm animate-in fade-in slide-in-from-top-2">
                  관리자가 확인 후 빠른 시일 내에 연락드리겠습니다. 감사합니다.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Navbar companyName={config.companyName} />
      <Routes>
        <Route path="/" element={<HomePage config={config} services={services} portfolio={portfolio} testimonials={testimonials} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<div className="pt-40"><HomePage config={config} services={services} portfolio={portfolio} testimonials={testimonials} /></div>} />
        <Route path="/portfolio" element={<div className="pt-40"><HomePage config={config} services={services} portfolio={portfolio} testimonials={testimonials} /></div>} />
        <Route path="/contact" element={<ContactPage config={config} />} />
        <Route path="/admin" element={
          <AdminDashboard 
            config={config} 
            setConfig={setConfig} 
            services={services} 
            setServices={setServices} 
            portfolio={portfolio} 
            setPortfolio={setPortfolio} 
          />
        } />
      </Routes>
      <Footer config={config} />
    </div>
  );
};

export default App;