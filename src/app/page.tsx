"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">格林电工</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">关于我们</a>
            <a href="#advantages" className="text-gray-600 hover:text-emerald-600 transition-colors">核心优势</a>
            <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">服务领域</a>
            <a href="#saudi" className="text-gray-600 hover:text-emerald-600 transition-colors">沙特市场</a>
            <a href="#contact" className="btn-primary px-5 py-2 rounded-lg text-white font-medium">联系我们</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-600 hover:text-emerald-600">关于我们</a>
              <a href="#advantages" className="text-gray-600 hover:text-emerald-600">核心优势</a>
              <a href="#services" className="text-gray-600 hover:text-emerald-600">服务领域</a>
              <a href="#saudi" className="text-gray-600 hover:text-emerald-600">沙特市场</a>
              <a href="#contact" className="btn-primary px-5 py-2 rounded-lg text-white font-medium text-center">联系我们</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/thunder.png",
      alt: "雷电击中大楼避雷针",
      title: "防雷保护",
      description: "守护关键基础设施安全",
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&q=90",
      alt: "CAD电脑画图工作场景",
      title: "专业设计",
      description: "精密CAD设计，确保方案可行",
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90",
      alt: "户外安装避雷针和接地网络",
      title: "现场施工",
      description: "专业团队，规范安装",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-6">
            30+ 年防雷接地工程经验
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            防雷接地
            <br />
            <span className="text-amber-400">不可逆工程</span>
            <br />
            风险控制专家
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
            系统级解决方案与工程实践服务商，聚焦地网、基础接地、隐蔽接地体等关键工程环节，
            以工程可控性、可验证性和可追责性为核心价值。
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              获取解决方案
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              了解更多
            </a>
          </div>

          {/* Slide Info & Indicators */}
          <div className="flex items-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <div className="text-amber-400 font-bold">{slides[currentSlide].title}</div>
              <div className="text-emerald-100 text-sm">{slides[currentSlide].description}</div>
            </div>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-amber-400 w-8" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "30+", label: "年行业经验", icon: "📅" },
    { number: "40+", label: "年沙特市场经验", icon: "🌍" },
    { number: "30%", label: "沙化比", icon: "🏭" },
    { number: "100%", label: "审批通过率", icon: "✅" },
  ];

  return (
    <section className="stats-gradient py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于格林电工</h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            专注于防雷接地不可逆工程风险控制的系统级解决方案与工程实践服务商
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/green.png"
              alt="格林电工工程师"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-emerald-100">年专业经验</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              一次把不可逆风险做对
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              格林电工长期服务于电力、石化、新能源、数据中心及大型基础设施等高风险工程领域。
              公司持续聚焦地网、基础接地、隐蔽接地体等一旦完成即无法返工的关键工程环节。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们不追求"参数最漂亮"的方案，而是提供在真实工地条件下
              <strong className="text-emerald-600">可实施、可交付、可审计、可追责</strong>
              的防雷接地解决方案。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "工程可控性", desc: "前置识别并消除风险" },
                { title: "可验证性", desc: "全程可追溯可审计" },
                { title: "可追责性", desc: "明确责任边界" },
                { title: "一次做对", desc: "避免返工整改" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Advantages Section
function AdvantagesSection() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "不返工",
      description: "针对不可逆隐蔽工程，前置识别并消除设计与施工偏差风险，确保一次做对。",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "不卡审批",
      description: "资料、计算、材料与施工逻辑一次性通过业主与咨询审核，避免反复修改。",
      color: "blue",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "不拖工期",
      description: "方案与总包施工节奏高度匹配，避免后期整改与停工风险，保障项目进度。",
      color: "amber",
    },
  ];

  const colorClasses = {
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  };

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">三大核心优势</h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            帮助总包方与业主一次把不可逆风险做对
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const colors = colorClasses[adv.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`card-hover p-8 rounded-2xl border-2 ${colors.border} bg-white`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ${colors.text}`}>
                  {adv.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "电力工程",
      description: "变电站、输电线路等电力基础设施的防雷接地系统",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
    {
      title: "石化工程",
      description: "石油化工厂区的防静电与防雷接地综合解决方案",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop",
    },
    {
      title: "新能源",
      description: "光伏电站、风电场的接地系统设计与实施",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    },
    {
      title: "数据中心",
      description: "高标准数据中心的防雷与等电位接地系统",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">服务领域</h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            长期服务于高风险工程领域，积累丰富的行业经验
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-hover group relative overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Saudi Market Section
function SaudiSection() {
  const features = [
    {
      icon: "🤝",
      title: "本地代理商体系",
      description: "依托拥有40多年沙特市场服务经验的本地代理商体系，深度理解SEC、Saudi Aramco等业主的技术要求与审批逻辑",
    },
    {
      icon: "🏭",
      title: "本地合资工厂",
      description: "通过沙特本地合资工厂，实现关键产品的本地制造与加工，项目本地化率可达约30%",
    },
    {
      icon: "📋",
      title: "全面合规认证",
      description: "产品、技术资料、设计逻辑、施工流程及认证路径，全面匹配沙特法规、标准及本地审批体系",
    },
    {
      icon: "🏆",
      title: "客户认可",
      description: "防雷接地解决方案已在多个项目中获得沙特业主及欧美工程咨询公司的认可",
    },
  ];

  return (
    <section id="saudi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              沙特市场
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              成熟稳定的
              <br />
              本地化实施体系
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              格林电工在沙特市场已建立成熟、稳定的本地化实施体系，
              深度理解沙特业主及相关监管机构的技术要求与审批逻辑。
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/adwan.jpg"
              alt="Adwan Marketing Co 商务会议"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            {/* Adwan Marketing Co Partner Card */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/images/adwan-logo.png"
                  alt="Adwan Marketing Co Logo"
                  width={160}
                  height={60}
                  className="object-contain"
                />
                <div className="text-center">
                  <div className="text-xs text-gray-500">沙特本地战略合作伙伴</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-lg">🇸🇦</span>
                    <span className="text-emerald-600 font-bold text-sm">40+</span>
                    <span className="text-gray-500 text-xs">年经验</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">认证合作伙伴</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="hero-gradient py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          让我们帮您一次把不可逆风险做对
        </h2>
        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
          无论您是总包方还是业主，格林电工都能为您提供可实施、可交付、可审计、可追责的防雷接地解决方案
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
        >
          立即咨询
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            期待与您探讨防雷接地解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">发送咨询</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">公司</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="公司名称"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目类型</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors">
                  <option>请选择项目类型</option>
                  <option>电力工程</option>
                  <option>石化工程</option>
                  <option>新能源</option>
                  <option>数据中心</option>
                  <option>其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                  placeholder="请描述您的项目需求..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-4 rounded-lg text-white font-semibold"
              >
                提交咨询
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">公司地址</h4>
                  <p className="text-gray-600">中国 · 深圳市</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">电子邮件</h4>
                  <p className="text-gray-600">contact@greenelectric.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">联系电话</h4>
                  <p className="text-gray-600">+8618921518881</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-2">沙特办事处</h4>
              <p className="text-emerald-100 text-sm">
                我们在沙特设有专业团队，可为当地项目提供全方位支持服务
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold">格林电工</span>
            </div>
            <p className="text-gray-400 max-w-md">
              防雷接地不可逆工程风险控制的系统级解决方案与工程实践服务商，
              30+年行业经验，帮助客户一次把不可逆风险做对。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">关于我们</a></li>
              <li><a href="#advantages" className="hover:text-emerald-400 transition-colors">核心优势</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">服务领域</a></li>
              <li><a href="#saudi" className="hover:text-emerald-400 transition-colors">沙特市场</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">服务领域</h4>
            <ul className="space-y-2 text-gray-400">
              <li>电力工程</li>
              <li>石化工程</li>
              <li>新能源</li>
              <li>数据中心</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 格林电工 Green Electric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AdvantagesSection />
      <ServicesSection />
      <SaudiSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
