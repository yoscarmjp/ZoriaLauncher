import { useState } from 'react';
import {
  Box, ChevronDown, Download, FolderOpen, Gamepad2, Gauge, Grid2X2,
  HardDrive, Home, Library, MoreHorizontal, Plus, Play, Settings,
  Shield, Sparkles, Sword, UserRound, X
} from 'lucide-react';

const versions = ['1.21.4', '1.21.1', '1.20.6', '1.20.1'];

const modpacks = [
  { name: 'Spiderverse', version: '1.20.1 • Fabric', tone: 'red', icon: '🕷️', description: 'Aventura urbana con habilidades y nuevos enemigos.' },
  { name: 'Caves & Cliffs', version: '1.21.1 • Forge', tone: 'blue', icon: '⛰️', description: 'Explora cuevas profundas y construye sin límites.' },
  { name: 'Vanilla+', version: '1.21.4 • Fabric', tone: 'gold', icon: '✦', description: 'La esencia de Minecraft, mejorada y más cómoda.' },
];

function App() {
  const [active, setActive] = useState('Inicio');
  const [version, setVersion] = useState('1.21.4');
  const [selectedPack, setSelectedPack] = useState(null);
  const [playing, setPlaying] = useState(false);

  const launch = () => {
    setPlaying(true);
    window.setTimeout(() => setPlaying(false), 2200);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark"><span /></span><div><strong>ZORIA</strong><small>LAUNCHER</small></div></div>
        <div className="profile-card"><div className="avatar">Z</div><div><strong>ZoriaPlayer</strong><span>Cuenta local</span></div><MoreHorizontal size={17} /></div>
        <nav>
          <p className="nav-label">MENÚ PRINCIPAL</p>
          {[[Home, 'Inicio'], [Library, 'Instancias'], [Grid2X2, 'Versiones']].map(([Icon, label]) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => setActive(label)}><Icon size={18} /><span>{label}</span>{label === 'Instancias' && <em>3</em>}</button>)}
          <p className="nav-label spaced">GESTIONAR</p>
          {[[Download, 'Descargas'], [Settings, 'Ajustes']].map(([Icon, label]) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => setActive(label)}><Icon size={18} /><span>{label}</span></button>)}
        </nav>
        <div className="sidebar-bottom"><div className="storage"><div className="storage-row"><HardDrive size={16}/><span>Almacenamiento</span><b>68%</b></div><div className="progress"><span /></div><small>42.8 GB de 64 GB</small></div><button className="help-link"><Shield size={15} /> Centro de ayuda</button></div>
      </aside>

      <main className="content">
        <header className="topbar"><div className="crumb"><span>Launcher</span><b>/</b><strong>{active}</strong></div><div className="top-actions"><button className="icon-btn"><Gauge size={18}/></button><button className="avatar mini">Z</button></div></header>

        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><span className="pulse" /> TODO LISTO PARA JUGAR</div><h1>Tu mundo.<br/><span>A tu manera.</span></h1><p>Juega Minecraft sin límites, crea instancias y lleva tus modpacks favoritos a donde quieras.</p><button className="primary-btn" onClick={launch}>{playing ? <><Download size={18} className="spin"/> Preparando...</> : <><Play size={18} fill="currentColor"/> Jugar ahora</>}</button></div>
          <div className="hero-art"><div className="web web-a"/><div className="web web-b"/><div className="spider-emblem"><span className="leg l1"/><span className="leg l2"/><span className="leg l3"/><span className="leg l4"/><span className="body"/><span className="eye e1"/><span className="eye e2"/></div><div className="art-caption"><Sparkles size={14}/> Potenciado por tu imaginación</div></div>
        </section>

        <section className="section-head"><div><p className="eyebrow muted">ACCESO RÁPIDO</p><h2>Elige tu experiencia</h2></div><button className="text-btn" onClick={() => setActive('Instancias')}>Ver todas <ChevronDown size={16} /></button></section>
        <section className="quick-grid"><button className="quick-card featured" onClick={launch}><div className="quick-icon"><Play size={19} fill="currentColor"/></div><div><h3>Última instancia</h3><p>Vanilla+ <span>•</span> 1.21.4</p></div><Play className="quick-arrow" size={19} fill="currentColor" /></button><button className="quick-card" onClick={() => setSelectedPack('new')}><div className="quick-icon outlined"><Plus size={20}/></div><div><h3>Nueva instancia</h3><p>Empieza desde cero</p></div><ChevronDown className="quick-arrow rotate" size={18} /></button><button className="quick-card" onClick={() => setActive('Versiones')}><div className="quick-icon outlined"><Box size={19}/></div><div><h3>Explorar versiones</h3><p>Desde Alpha hasta hoy</p></div><ChevronDown className="quick-arrow rotate" size={18} /></button></section>

        <section className="section-head packs-head"><div><p className="eyebrow muted">TUS INSTANCIAS</p><h2>Modpacks recientes</h2></div><button className="text-btn" onClick={() => setActive('Instancias')}>Gestionar instancias <ChevronDown size={16}/></button></section>
        <section className="pack-grid">{modpacks.map((pack) => <article className="pack-card" key={pack.name} onClick={() => setSelectedPack(pack.name)}><div className={`pack-cover ${pack.tone}`}><span>{pack.icon}</span><i className="cover-grid"/></div><div className="pack-info"><div><h3>{pack.name}</h3><p>{pack.version}</p></div><button className="more-btn"><MoreHorizontal size={18}/></button></div></article>)}<button className="add-card" onClick={() => setSelectedPack('new')}><div><Plus size={21}/></div><strong>Crear instancia</strong><span>Tu próxima aventura empieza aquí</span></button></section>

        <section className="bottom-panel"><div><div className="panel-icon"><Sword size={18}/></div><div><h3>¿Primera vez en Zoria?</h3><p>Configura tu cuenta y descubre todo lo que puedes hacer.</p></div></div><button className="secondary-btn">Ver guía rápida <ChevronDown size={15}/></button></section>
      </main>

      <div className="version-dock"><label>VERSIÓN SELECCIONADA</label><div className="select-wrap"><Gamepad2 size={16}/><select value={version} onChange={(e) => setVersion(e.target.value)}>{versions.map(v => <option key={v}>{v}</option>)}</select><ChevronDown size={15}/></div><span className="status-dot"/> <small>Estable</small></div>
      {selectedPack && <div className="modal-backdrop" onClick={() => setSelectedPack(null)}><div className="modal" onClick={e => e.stopPropagation()}><button className="close-btn" onClick={() => setSelectedPack(null)}><X size={18}/></button><div className="modal-badge"><Plus size={20}/></div><h2>{selectedPack === 'new' ? 'Crear nueva instancia' : selectedPack}</h2><p>{selectedPack === 'new' ? 'Elige una versión y dale un nombre a tu próxima aventura.' : 'Instancia lista para configurar y jugar.'}</p><label className="input-label">NOMBRE DE LA INSTANCIA<input defaultValue={selectedPack === 'new' ? '' : selectedPack} placeholder="Ej. Mi supervivencia" /></label><button className="primary-btn full" onClick={() => setSelectedPack(null)}>Continuar <ChevronDown size={16}/></button></div></div>}
    </div>
  );
}

export default App;
