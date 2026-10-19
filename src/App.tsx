import React, { useState } from 'react';
import { appStoreApps } from './Model/AppStoreModel';
import { workHistory } from './Model/WorkHistoryModel';
import { openSourceApps } from './Model/OpenSourceApps';
import './styles/Redesign.css';

const links = {
  linkedin: 'https://www.linkedin.com/in/lorenzobrown',
  github: 'https://github.com/lrnzbr',
  email: 'mailto:lorenzo@vydr.io',
  medium: 'https://medium.com/@lrnzbr',
  youtube: 'https://www.youtube.com/channel/UCg8kOaVBColLUp9watXYL3g',
};
const projectDetails = [
  { slug: 'loteria', category: '01 / GAMES', title: '¡Viva Lotería!', copy: 'A beloved Mexican classic, reimagined for your pocket.', note: 'iOS', word: 'SwiftUI · Multiplayer' },
  { slug: 'harmonius', category: '02 / MUSIC', title: 'Harmonius', copy: 'Small, daily practice. A more musical ear.', note: 'iOS', word: 'SwiftUI · Audio' },
  { slug: 'hornist', category: '03 / MUSIC', title: "The Hornist’s Almanac", copy: 'Fingering charts and a tuner, always within reach.', note: 'iOS', word: 'Native iOS · Music' },
];
function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All projects');
  const [platform, setPlatform] = useState('iOS');
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText('lorenzo@vydr.io'); setCopied(true); }
    catch { setCopied(false); window.location.href = links.email; }
  }
  return (
    <div className="portfolio-site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Lorenzo Brown, home"><span className="brand-mark">lb<span>.</span></span><span className="brand-name">Lorenzo Brown</span></a>
        <nav aria-label="Main navigation" className={menuOpen ? 'nav open' : 'nav'}>
          {[['Work', '#work'], ['About', '#about'], ['Connect', '#elsewhere']].map(([label, url]) => <a key={url} href={url} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-contact" href={links.email}>Let’s talk <Arrow /></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow hero-intro"><span className="status-dot" /> SOFTWARE ENGINEER / iOS & WEB</div>
            <h1 id="hero-heading">From idea.<br />To interface.<br /><span>To your hands.</span></h1>
            <p className="hero-description">I’m Lorenzo. I build native iOS apps and web experiences with a focus on performance, usability, and the details you feel.</p>
            <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <Arrow diagonal={false} /></a><a className="secondary-button" href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
            <div className="hero-stack"><span>Swift & SwiftUI</span><span>React</span><span>TypeScript</span></div>
          </div>
          <div className={`hero-lab ${platform === 'Web' ? 'web-active' : ''}`}>
            <div className="lab-topline"><span className="eyebrow">TWO PLATFORMS. ONE MINDSET.</span><div className="platform-tabs" aria-label="Explore development platforms">{['iOS', 'Web'].map(p => <button key={p} aria-pressed={platform === p} onClick={() => setPlatform(p)}>{p}</button>)}</div></div>
            <div className="lab-stage">
              <div className="code-window"><div className="window-toolbar"><span className="window-dots"><i /><i /><i /></span><span>{platform === 'iOS' ? 'ContentView.swift' : 'App.tsx'}</span><span className="code-language">{platform === 'iOS' ? 'Swift' : 'TSX'}</span></div><div className="code-body" aria-label={`${platform} code illustration`}><span className="code-comment">{'// Built for the way people use it.'}</span>{platform === 'iOS' ? <pre><span className="code-purple">import</span> SwiftUI{'\n\n'}<span className="code-purple">struct</span> <span className="code-blue">ContentView</span>: View {'{'}{'\n'}  <span className="code-purple">var</span> body: <span className="code-purple">some</span> View {'{'}{'\n'}    VStack(spacing: <span className="code-number">24</span>) {'{'}{'\n'}      Image(systemName: <span className="code-green">"sparkles"</span>){'\n'}      Text(<span className="code-green">"Make something matter."</span>){'\n'}    {'}'}{'\n'}    .padding(){'\n'}  {'}'}{'\n'}{'}'}</pre> : <pre><span className="code-purple">export default function</span> <span className="code-blue">App</span>() {'{'}{'\n'}  <span className="code-purple">return</span> ({'\n'}    &lt;<span className="code-blue">main</span>&gt;{'\n'}      &lt;<span className="code-blue">h1</span>&gt;Make something matter.&lt;/<span className="code-blue">h1</span>&gt;{'\n'}      &lt;<span className="code-blue">Experience</span>{'\n'}        platform=<span className="code-green">"web"</span>{'\n'}        builtWith=<span className="code-green">"care"</span>{'\n'}      /&gt;{'\n'}    &lt;/<span className="code-blue">main</span>&gt;{'\n'}  );{'\n'}{'}'}</pre>}</div><div className="code-status"><span><span className="status-dot" /> {platform === 'iOS' ? 'NATIVE BY DESIGN' : 'BUILT FOR THE BROWSER'}</span><span>UTF-8</span></div></div>
              <div className="hero-device"><div className="device-island" /><img src="/images/harmonius-screen.png" alt="Harmonius, my native iOS ear training app" /><div className="device-caption"><img src="/images/harmonius-icon.jpg" alt="" /><div>Harmonius<span>Independent iOS app</span></div></div></div>
              <div className="platform-label"><span className="platform-symbol" aria-hidden="true">{platform === 'iOS' ? '⌘' : '</>'}</span><div>{platform === 'iOS' ? 'Native iOS development' : 'Web development'}<span>{platform === 'iOS' ? 'Swift · SwiftUI · UIKit' : 'React · TypeScript · APIs'}</span></div><span className="platform-check" aria-hidden="true">✓</span></div>
            </div>
          </div>
        </section>
        <div className="experience-strip wrap"><span className="eyebrow">PREVIOUSLY BUILT WITH</span><div><span>Fidelity Investments</span><span className="alt-logo">alt</span><span>ClimateAI</span><span className="givelify-logo">Givelify</span><span>Brightfin</span></div></div>
        <section className="work-section wrap" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><div><p className="eyebrow section-kicker">01 / SELECTED WORK</p><h2 id="work-heading">Ideas, shipped.</h2></div><div className="filter-group" aria-label="Filter projects">{['All projects', 'iOS', 'Web'].map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div></div>
          <div className="project-grid">
            {projectDetails.map((project, i) => (filter === 'All projects' || project.note === filter) && <a className={`project-card ${project.slug}`} href={appStoreApps[i].appStoreURL} key={project.slug} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} on the App Store`}>
              <div className="project-art"><div className="art-label"><span>{project.category}</span><Arrow /></div><div className="project-visual"><div className="project-grid-lines" aria-hidden="true" /><img className="app-icon" src={`/images/${project.slug}-icon.jpg`} alt="" loading="lazy" /><div className="phone"><img src={`/images/${project.slug}-screen.png`} alt={`${project.title} app screenshot`} loading="lazy" /></div></div><span className="art-caption">{project.word}</span></div>
              <div className="project-heading"><h3>{project.title}</h3><Arrow /></div><p>{project.copy}</p><span className="project-type">{project.note}</span>
            </a>)}
            {(filter === 'All projects' || filter === 'Web') && <a className="project-card web-project" href="https://github.com/lrnzbr/portfolio-page" target="_blank" rel="noreferrer" aria-label="Explore portfolio website source on GitHub"><div className="project-art"><div className="art-label"><span>04 / PERSONAL WEBSITE</span><Arrow /></div><div className="browser-preview"><div className="mini-toolbar"><span className="window-dots"><i /><i /><i /></span><span>lorenzobrown.dev</span></div><div className="mini-content"><span className="mini-brand">lb.</span><span className="mini-nav">WORK &nbsp; ABOUT &nbsp; CONNECT</span><strong>From idea.<br />To interface.<br /><em>To your hands.</em></strong><span className="mini-button">Explore my work ↗</span><div className="mini-lines"><i /><i /><i /></div></div></div><span className="art-caption">React · TypeScript</span></div><div className="project-heading"><h3>This corner of the web</h3><Arrow /></div><p>A personal home for my work, built with React and TypeScript.</p><span className="project-type">Web</span></a>}
          </div>
          <a className="text-link all-apps" href="https://apps.apple.com/us/developer/lorenzo-brown/id1496868083" target="_blank" rel="noreferrer">Find my apps on the App Store <Arrow /></a>
        </section>
        <section className="about-section" id="about"><div className="wrap about-grid"><div><p className="eyebrow section-kicker">02 / APPROACH</p><h2>Good software.<br /><span className="accent-word">At every layer.</span></h2><div className="about-platforms"><span>iOS<span>Swift / SwiftUI / UIKit</span></span><span>Web<span>React / TypeScript / Python</span></span></div></div><div className="about-copy"><p className="large-copy">I care about what happens between the code and the person using it.</p><p>I build for iOS and the web, from the interface to the systems behind it. I’ve built across personal finance, asset trading, climate technology, and charitable giving.</p><p>Alongside that work, I build and publish my own apps. It’s where I explore new ideas and take a product all the way from the first commit to the App Store.</p><div className="skills" aria-label="Technologies">{['Swift & SwiftUI', 'React Native', 'TypeScript', 'Python'].map(s => <span key={s}>{s}</span>)}</div><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">More about my background <Arrow /></a></div></div></section>
        <section className="experience-section wrap" aria-labelledby="experience-heading"><div className="section-heading"><div><p className="eyebrow section-kicker">03 / EXPERIENCE</p><h2 id="experience-heading">Experience that runs deep.</h2></div><span className="section-aside">SELECTED EXPERIENCE</span></div><div className="experience-list">{workHistory.map((job, i) => <details key={job.company}><summary><span className="experience-index">0{i + 1}</span><span className="experience-company">{job.company}</span><span className="experience-role">{job.jobTitle.replace(/ - (Freelancer|Contractor)/, '')}</span><span className="experience-date">{job.startDate.getUTCFullYear()}{job.company !== 'Brightfin' ? `—${job.endDate.getUTCFullYear()}` : ''}</span><span className="expand-indicator" aria-hidden="true">+</span></summary><div className="experience-detail"><p>{job.bulletPoints[0]}</p><div className="skills">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{job.websiteURL && <a className="text-link" href={job.websiteURL} target="_blank" rel="noreferrer">Visit {job.company} <Arrow /></a>}</div></details>)}</div></section>
        <section className="open-source wrap" aria-labelledby="open-source-heading"><div className="open-source-intro"><p className="eyebrow section-kicker">04 / OPEN SOURCE</p><h2 id="open-source-heading">Open code. Shared ideas.</h2><p>SwiftUI experiments and projects for other developers to explore.</p><a className="text-link" href={links.github} target="_blank" rel="noreferrer">Explore my GitHub <Arrow /></a></div><div className="repo-list">{openSourceApps.map((repo, i) => <a href={repo.repoURL.replace('/blob/main', '').replace('/tree/main', '')} key={repo.title} target="_blank" rel="noreferrer"><span className="repo-icon" aria-hidden="true">{['</>', '{ }', '⌘'][i]}</span><div><h3>{repo.title}</h3><p>{repo.description.replace("Simpson's", 'Simpsons').replace('Pokédex app', 'Pokédex')}</p></div><Arrow /></a>)}</div></section>
        <section className="contact-section" id="elsewhere"><div className="wrap"><div className="contact-top"><p className="eyebrow">05 / CONNECT</p><span className="eyebrow">ALWAYS UP FOR A GOOD CONVERSATION</span></div><a className="contact-heading" href={links.email}>Have something <span className="accent-word">in mind?</span> <Arrow /></a><div className="contact-bottom"><div><a className="email-link" href={links.email}>lorenzo@vydr.io</a><button className="copy-email" onClick={copyEmail}>{copied ? 'Copied ✓' : 'Copy email ↗'}</button><span role="status" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span></div><div className="social-links">{[['LinkedIn', links.linkedin], ['GitHub', links.github], ['Medium', links.medium], ['YouTube', links.youtube]].map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name} <Arrow /></a>)}</div></div></div></section>
      </main>
      <footer className="site-footer wrap"><a href="#top" className="footer-name">Lorenzo Brown <span>↗</span></a><span>Software Engineer · iOS & Web</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
export default App;
