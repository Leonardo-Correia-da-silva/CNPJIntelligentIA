import React, { useState, useEffect, type ChangeEvent } from 'react';
import { 
  Zap, 
  FileSpreadsheet, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Globe, 
  AlertCircle, 
  CheckCircle2, 
  Database, 
  Search,
  Building2,
  Users,
  MapPin,
  Mail,
  Scale,
  Hash
} from 'lucide-react';

// --- Componente de Contador Animado ---
const AnimatedNumber: React.FC<{ value: number; duration?: number; isCurrency?: boolean }> = ({ 
  value, 
  duration = 500, 
  isCurrency = false 
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = displayValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (value - startValue) + startValue);
      setDisplayValue(current);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  if (isCurrency) {
    return (
      <span className="text-sky-300">
        {displayValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    );
  }
  return <span className="text-sky-300">{displayValue}</span>;
};

const App: React.FC = () => {
  const [cnpjCount, setCnpjCount] = useState<number>(200);
  const hoursRaw = Math.floor(cnpjCount * 4 / 60);
  const moneyRaw = hoursRaw * 35;

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCnpjCount(Number(e.target.value));
  };

  const dataList = [
    { icon: <Search size={16}/>, title: "QSA Completo", desc: "Sócios e qualificações atualizadas" },
    { icon: <Scale size={16}/>, title: "Natureza Jurídica", desc: "Classificação legal da entidade" },
    { icon: <Database size={16}/>, title: "Capital Social", desc: "Valor real integralizado" },
    { icon: <Hash size={16}/>, title: "CNAEs", desc: "Principal e secundários" },
    { icon: <ShieldCheck size={16}/>, title: "Status RFB", desc: "Situação cadastral em tempo real" },
    { icon: <MapPin size={16}/>, title: "Endereço Completo", desc: "Logradouro, número e CEP" },
    { icon: <Clock size={16}/>, title: "Data de Abertura", desc: "Histórico de fundação" },
    { icon: <Building2 size={16}/>, title: "Nome Fantasia", desc: "Razão social e marca" },
    { icon: <Mail size={16}/>, title: "Contatos", desc: "E-mail e telefones oficiais" },
    { icon: <Zap size={16}/>, title: "Porte da Empresa", desc: "ME, EPP ou Demais" },
    { icon: <Users size={16}/>, title: "Ente Federativo", desc: "Vínculo com o poder público" },
    { icon: <FileSpreadsheet size={16}/>, title: "UF / Município", desc: "Jurisdição fiscal" }
  ];

  // Adicionando scroll suave ao estilo global
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
      
      {/* Overlay effects */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Glow tecnológico mudado para ciano */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-900/30 blur-[120px] rounded-full" />
      </div>

     {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#050608]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="p-2 bg-black border border-sky-500/30 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              <Cpu size={20} className="text-sky-400 animate-pulse" />
            </div>
            {/* Logo com o nome do produto */}
            <span className="text-lg md:text-xl font-black text-white tracking-[0.05em] uppercase italic">
              CNPJ<span className="text-sky-400">Intelligent</span><span className="text-sky-600">IA</span>
            </span>
          </div>
          
          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-slate-400">
            <a href="#solucao" className="hover:text-sky-400 transition">Solução</a>
            <a href="#dossie" className="hover:text-sky-400 transition">Dossiê</a>
            <a href="#produtividade" className="hover:text-sky-400 transition">Produtividade</a>
          </div>

          <a href="https://wa.me/5519999529126" target="_blank" rel="noreferrer" className="relative group px-4 md:px-6 py-2 overflow-hidden rounded-full border border-sky-500/50 transition-all hover:border-sky-400">
            <span className="relative text-[10px] md:text-xs font-bold tracking-widest uppercase text-sky-400 group-hover:text-white">Iniciar Consulta</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-20 text-center">
        
        {/* Badge - Azul elétrico */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[9px] md:text-[10px] font-black tracking-[0.15em] md:tracking-[0.2em] text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 rounded-md">
          <Globe size={12} className="animate-spin-slow" /> Automação Profissional para Escritórios Contábeis
        </div>

        {/* Título principal - Gradiente mais leve */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9]">
          CONSULTE <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-sky-600">CENTENAS DE CNPJs</span> <br className="hidden md:block"/>
          EM SEGUNDOS.
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 mb-8 md:mb-12 font-light leading-relaxed px-2">
          Envie uma lista e receba um <span className="text-sky-400 font-medium">Excel completo e organizado</span> com dados atualizados das empresas. 
          Reduza o trabalho manual e aumente a produtividade do seu escritório.
        </p>

        {/* Benefícios rápidos - Bordas sutis */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300 mb-10 md:mb-12 font-mono">
          <div className="bg-white/5 p-3 rounded-lg border border-sky-500/10">✓ Consulta em lote</div>
          <div className="bg-white/5 p-3 rounded-lg border border-sky-500/10">✓ Dados atualizados</div>
          <div className="bg-white/5 p-3 rounded-lg border border-sky-500/10">✓ Excel formatado</div>
          <div className="bg-white/5 p-3 rounded-lg border border-sky-500/10">✓ Entrega rápida</div>
        </div>

        {/* CTA - Botão moderno */}
        <a
          href="https://wa.me/5519999529126"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-2 shadow-2xl shadow-sky-500/10"
        >
          <MessageCircle size={24} />
          SOLICITAR TESTE GRATUITO
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>

        {/* Prova de valor */}
        <p className="mt-8 text-xs text-slate-500 font-mono tracking-widest uppercase">
          Ideal para escritórios contábeis que consultam CNPJs diariamente
        </p>
      </section>

      {/* Comparison - Ajuste de cores para os cards */}
      <section id="solucao" className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 md:p-10 bg-red-500/5 border border-red-500/10 rounded-[2.5rem] space-y-6 opacity-80">
            <div className="flex items-center gap-3 text-red-500">
              <AlertCircle size={24} />
              <h3 className="font-black uppercase tracking-widest italic text-xs md:text-sm">O Problema (Manual)</h3>
            </div>
            <ul className="space-y-4 font-mono text-xs md:text-xs uppercase tracking-tight text-slate-500">
              <li className="flex items-start gap-3 italic"><span className="text-red-500">[!]</span> Consultas manuais travam a produtividade do seu escritório.</li>
              <li className="flex items-start gap-3 italic"><span className="text-red-500">[!]</span> Risco elevado de erros na validação de QSA e Natureza Jurídica.</li>
              <li className="flex items-start gap-3 italic"><span className="text-red-500">[!]</span> Complexidade na validação de Capital Social de grandes carteiras.</li>
              <li className="flex items-start gap-3 italic"><span className="text-red-500">[!]</span> Tempo excessivo gasto em cadastros manuais de CRM.</li>
            </ul>
          </div>

          <div className="p-6 md:p-10 bg-sky-500/5 border border-sky-500/10 rounded-[2.5rem] space-y-6 shadow-2xl shadow-sky-500/5">
            <div className="flex items-center gap-3 text-sky-400">
              <CheckCircle2 size={24} />
              <h3 className="font-black uppercase tracking-widest italic text-xs md:text-sm">A Solução (AvantTech)</h3>
            </div>
            <ul className="space-y-4 font-mono text-xs md:text-xs uppercase tracking-tight text-slate-300">
              <li className="flex items-start gap-3"><span className="text-sky-400">[OK]</span> Dossiê completo exportado diretamente para Excel.</li>
              <li className="flex items-start gap-3"><span className="text-sky-400">[OK]</span> Dados fiscais precisos para enquadramento tributário seguro.</li>
              <li className="flex items-start gap-3"><span className="text-sky-400">[OK]</span> Agilidade máxima no onboarding de novos clientes.</li>
              <li className="flex items-start gap-3 font-bold text-white"><span className="text-sky-400">[OK]</span> Automatize +1.000 consultas com um único comando.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Dossiê - Ícones em ciano */}
      <section id="dossie" className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-2xl font-black text-white tracking-[0.15em] md:tracking-[0.3em] uppercase italic">Dossiê de Dados Empresariais</h2>
          <p className="text-slate-500 text-[9px] md:text-[10px] uppercase mt-4 tracking-widest font-mono">Informações essenciais reunidas para máxima eficiência</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {dataList.map((item, i) => (
            <div key={i} className="p-4 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-sky-500/5 hover:border-sky-500/20 transition-all group">
              <div className="text-sky-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-tighter mb-1">{item.title}</h4>
              <p className="text-slate-500 text-[8px] md:text-[9px] uppercase leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator - Sliders e destaques em ciano */}
      <section id="produtividade" className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="relative p-6 md:p-12 bg-black/50 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">Analisador de <br /><span className="text-sky-400">Produtividade</span></h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-end font-mono">
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-sky-400 uppercase">Volume de Consultas</span>
                  <span className="text-xl md:text-2xl text-white tracking-tighter"><AnimatedNumber value={cnpjCount} /> CNPJs</span>
                </div>
                <input type="range" min="50" max="3000" step="50" value={cnpjCount} onChange={handleRangeChange} className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-sky-400" />
              </div>
            </div>
            <div className="bg-[#0a0b0e] rounded-[1.5rem] md:rounded-[2.4rem] p-6 md:p-10 text-center space-y-6 md:space-y-8 shadow-inner border border-sky-900/20">
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-slate-500 uppercase">Economia de Eficiência Mensal</p>
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                <AnimatedNumber value={moneyRaw} isCurrency={true} />
              </div>
              <div className="flex items-center justify-around pt-6 md:pt-8 border-t border-sky-900/20">
                <div className="text-center font-mono">
                  <div className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Clock size={16} className="text-sky-400" /> <AnimatedNumber value={hoursRaw} />h
                  </div>
                  <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-slate-500">Tempo Economizado</p>
                </div>
                <div className="text-center font-mono">
                  <div className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    <Zap size={16} className="text-yellow-400" /> 100%
                  </div>
                  <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-slate-500">Precisão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Botão Final */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-10 md:mb-12">Eleve a produtividade <br />do seu escritório.</h2>
        <a href="https://wa.me/5519999529126" target="_blank" rel="noreferrer" 
           className="group relative inline-flex items-center gap-3 md:gap-4 bg-white text-black px-6 md:px-12 py-5 md:py-6 rounded-2xl font-black text-sm md:text-xl hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-sky-500/10">
          <MessageCircle size={20} className="md:size-6" />
          INICIAR CONSULTA NO WHATSAPP
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-10 md:py-12 bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <Cpu size={18} className="text-sky-900" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.5em] text-slate-700 uppercase italic">Avant Technology Systems</span>
          </div>
          <p className="text-[8px] md:text-[9px] font-mono text-slate-800 uppercase tracking-widest">© 2026 Secured Infrastructure. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;