import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const TEAM = [
  {
    name: "Александр Волков",
    role: "Главный стратег",
    exp: "12 лет в торговле золотом",
    desc: "Специалист по техническому анализу и макроэкономическим трендам. Разработал авторскую стратегию торговли XAU/USD.",
  },
  {
    name: "Мария Соколова",
    role: "Риск-менеджер",
    exp: "8 лет опыта",
    desc: "Контролирует позиции и управляет портфельными рисками. Бывший аналитик крупного инвестиционного банка.",
  },
  {
    name: "Дмитрий Крылов",
    role: "Квантовый аналитик",
    exp: "10 лет в алго-трейдинге",
    desc: "Разрабатывает автоматизированные торговые системы и алгоритмы прогнозирования движения цены золота.",
  },
];

const STRATEGY = [
  {
    icon: "TrendingUp",
    title: "Технический анализ",
    desc: "Мультитаймфреймовый анализ с применением волн Эллиота, уровней Фибоначчи и паттернов Price Action.",
  },
  {
    icon: "Shield",
    title: "Риск-менеджмент",
    desc: "Строгое соблюдение правила 1-2% риска на сделку. Диверсификация и хеджирование позиций.",
  },
  {
    icon: "BarChart3",
    title: "Фундаментальный анализ",
    desc: "Мониторинг макроэкономических данных, ставок ФРС, инфляции и геополитических событий.",
  },
  {
    icon: "Zap",
    title: "Уровни спотового стакана",
    desc: "Отслеживание ключевых уровней из спотового стакана цен для точного определения зон входа и выхода из позиций.",
  },
];

const ROADMAP = [
  { q: "Q1 2025", title: "Основание команды", desc: "Интернет и желание учиться собрали нас в одну команду", done: true },
  { q: "Q2 2025", title: "Запуск торговли", desc: "Начало активной торговли, первые результаты и оптимизация подходов", done: true },
  { q: "Q3 2025", title: "Создание комьюнити", desc: "Большой канал в Telegram и MQL5 с торговлей в реальном времени", done: true },
  { q: "Q4 2025", title: "Публичный трекер", desc: "Запуск открытой статистики результатов для подписчиков", done: false },
  { q: "Q1 2026", title: "Образовательная платформа", desc: "Запуск курсов и менторинга по торговле золотом", done: false },
  { q: "Q2 2026", title: "Инвестиционный фонд", desc: "Открытие доверительного управления для квалифицированных инвесторов", done: false },
];



function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function GoldChart() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gold-500/20 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
      <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-gold-500/10">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 font-body text-xs text-gold-500/70 tracking-widest uppercase">XAU/USD — Live Chart</span>
      </div>
      <iframe
        src="https://s.tradingview.com/widgetembed/?frameElementId=tv_chart&symbol=OANDA%3AXAUUSD&interval=D&hidesidetoolbar=1&hidetoptoolbar=0&symboledit=0&saveimage=0&toolbarbg=0d0d0d&theme=dark&style=1&timezone=UTC&studies=%5B%5D&hideideas=1&withdateranges=1&showpopupbutton=0&locale=ru&colorTheme=dark"
        style={{ width: "100%", height: 400, border: "none", background: "#0d0d0d" }}
        title="XAU/USD TradingView Chart"
        allowTransparency={true}
      />
    </div>
  );
}

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const team = useInView();
  const strategy = useInView();
  const roadmap = useInView();
  const chart = useInView();

  const navItems = [
    { label: "О команде", href: "#team" },
    { label: "Стратегия", href: "#strategy" },
    { label: "График", href: "#chart" },
    { label: "Дорожная карта", href: "#roadmap" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] font-body text-white overflow-x-hidden">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-10 blur-[120px] z-0"
        style={{ background: "radial-gradient(ellipse, #d4af37 0%, transparent 70%)" }} />

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "bg-[#080808]/90 backdrop-blur-xl border-b border-gold-500/10" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold tracking-widest text-gold-400">
            Копаем<span className="text-white"> золото</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-white/60 hover:text-gold-400 transition-colors tracking-wide font-body">
                {n.label}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-gold-500/10 px-6 py-4 flex flex-col gap-4">
            {navItems.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                className="text-sm text-white/70 hover:text-gold-400 transition-colors py-1">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/a01245e3-99c5-4748-a289-d3dc6be5337b/files/bcfe305f-8a17-411d-a681-d59c290c010b.jpg"
            alt="Starry sky with rocket"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.95) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8 text-gold-400 text-xs tracking-widest uppercase font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Профессиональная торговля золотом
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light leading-none mb-6 tracking-tight"
            style={{ background: "linear-gradient(135deg, #f9f0cb 0%, #d4af37 40%, #b8962a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Копаем золото
          </h1>
          <p className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            Мы превращаем движение цены золота в стабильный результат — через дисциплину, аналитику и проверенные стратегии
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#team"
              className="px-8 py-3 rounded-full font-body text-sm font-medium tracking-wide text-black transition-all hover:scale-105 animate-pulse-gold"
              style={{ background: "linear-gradient(135deg, #d4af37, #f9f0cb)" }}>
              Узнать о команде
            </a>
            <a href="#chart"
              className="px-8 py-3 rounded-full font-body text-sm font-medium tracking-wide text-gold-400 border border-gold-500/40 hover:bg-gold-500/10 transition-all">
              Live график
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-20 w-full max-w-3xl mx-auto grid grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          {[
            { val: "8", label: "Лет стабильной торговли" },
            { val: "87%", label: "Прибыльных сделок" },
            { val: "40K+", label: "Подписчиков" },
          ].map(s => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="font-display text-4xl font-light text-gold-400 mb-1">{s.val}</div>
              <div className="text-white/40 text-xs tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={20} className="text-gold-500/40" />
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6">
        <div ref={team.ref} className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${team.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-16">
              <span className="text-gold-500/60 text-xs tracking-[0.3em] uppercase font-body">Наша команда</span>
              <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white/90">О команде</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TEAM.map((m, i) => (
                <div key={m.name}
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-gold-500/5 hover:border-gold-500/20 transition-all duration-500 cursor-default"
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 rounded-full mb-6 flex items-center justify-center text-2xl font-display font-semibold text-black"
                    style={{ background: "linear-gradient(135deg, #d4af37, #f9f0cb)" }}>
                    {m.name[0]}
                  </div>
                  <h3 className="font-display text-2xl text-white/90 mb-1">{m.name}</h3>
                  <p className="text-gold-400 text-sm mb-1 font-body">{m.role}</p>
                  <p className="text-white/30 text-xs mb-4 tracking-wide">{m.exp}</p>
                  <p className="text-white/50 text-sm leading-relaxed font-body">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section id="strategy" className="py-24 px-6 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)" }} />
        <div ref={strategy.ref} className="max-w-6xl mx-auto relative">
          <div className={`transition-all duration-1000 ${strategy.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-16">
              <span className="text-gold-500/60 text-xs tracking-[0.3em] uppercase font-body">Наш подход</span>
              <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white/90">Стратегия торговли</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {STRATEGY.map((s, i) => (
                <div key={s.title}
                  className="flex gap-6 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold-500/20 hover:bg-gold-500/5 transition-all duration-500 group"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-gold-500/30 group-hover:border-gold-500/60 transition-colors"
                    style={{ background: "rgba(212,175,55,0.08)" }}>
                    <Icon name={s.icon} fallback="Star" size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white/90 mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed font-body">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section id="chart" className="py-24 px-6">
        <div ref={chart.ref} className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${chart.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-16">
              <span className="text-gold-500/60 text-xs tracking-[0.3em] uppercase font-body">Рынок в реальном времени</span>
              <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white/90">График XAU/USD</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
              <p className="text-white/40 text-sm mt-4 font-body">Живые котировки золота с историческими данными</p>
            </div>
            <GoldChart />

            {/* Historical stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "52w Минимум", val: "$2,287", trend: "down" },
                { label: "52w Максимум", val: "$3,500+", trend: "up" },
                { label: "Изм. за год", val: "+47%", trend: "up" },
                { label: "Объём (avg)", val: "$180B/d", trend: "neutral" },
              ].map(stat => (
                <div key={stat.label} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className={`font-display text-2xl font-light mb-1 ${stat.trend === "up" ? "text-emerald-400" : stat.trend === "down" ? "text-red-400" : "text-gold-400"}`}>
                    {stat.val}
                  </div>
                  <div className="text-white/30 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 px-6">
        <div ref={roadmap.ref} className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${roadmap.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-16">
              <span className="text-gold-500/60 text-xs tracking-[0.3em] uppercase font-body">Развитие</span>
              <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white/90">Дорожная карта</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5" />
            </div>
            <div className="relative">
              <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent hidden md:block" />
              <div className="space-y-8">
                {ROADMAP.map((item, i) => (
                  <div key={item.q}
                    className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <div className={`p-6 rounded-xl border transition-all duration-300 ${item.done ? "border-gold-500/30 bg-gold-500/5" : "border-white/5 bg-white/[0.02]"}`}>
                        <span className="text-gold-500/60 text-xs tracking-widest uppercase font-body">{item.q}</span>
                        <h3 className="font-display text-xl text-white/90 mt-1 mb-2">{item.title}</h3>
                        <p className="text-white/40 text-sm font-body leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 mt-4 hidden md:flex"
                      style={{ borderColor: item.done ? "#d4af37" : "rgba(255,255,255,0.1)", background: item.done ? "rgba(212,175,55,0.2)" : "#080808" }}>
                      {item.done && <Icon name="Check" size={12} className="text-gold-400" />}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg tracking-widest text-gold-400">
            Копаем<span className="text-white/50"> золото</span>
          </div>
          <p className="text-white/20 text-xs font-body text-center">
            Торговля финансовыми инструментами сопряжена с риском. Информация на сайте не является инвестиционной рекомендацией.
          </p>
          <div className="text-white/20 text-xs font-body">© 2025 GOLD TEAM</div>
        </div>
      </footer>
    </div>
  );
}