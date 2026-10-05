import { useEffect, useState } from 'react'
const whatsapp = 'https://wa.me/5535991338334?text=' + encodeURIComponent('Olá, Diego! Quero conversar sobre um projeto.')
const projects = [
 {name:'Alegra Odontologia',type:'Identidade visual',image:'alegra',url:'https://www.behance.net/gallery/247170741/Alegra-Odontologia'},
 {name:'F5 Marketing Digital',type:'Design de marca',image:'f5',url:'https://www.behance.net/gallery/204157239/F5-Marketing-Digital-Atual-como-seu-negocio-precisa'},
 {name:'Faculdade Famart',type:'Design para redes sociais',image:'famart',url:'https://www.behance.net/gallery/175625039/Social-Media-Faculdade-Famart'},
 {name:'Dorian',type:'Projeto visual • colaboração',image:'dorian',url:'https://www.behance.net/gallery/252568999/Dorian'},
]
const External = ({href,children,...props}) => <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
export default function App(){
 const [menu,setMenu]=useState(false)
 useEffect(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const elements = document.querySelectorAll('.section-head, .project, .service, .portrait, .about-copy, .contact h2, .contact-bottom')
  let observer
  if (!reduced && 'IntersectionObserver' in window) {
   observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
     if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
     }
    })
   }, { threshold: 0.12 })
   elements.forEach(element => { element.classList.add('reveal'); observer.observe(element) })
  }
  let frame = 0
  const update = () => {
   frame = 0
   const range = document.documentElement.scrollHeight - window.innerHeight
   document.documentElement.style.setProperty('--progress', range > 0 ? String(window.scrollY / range) : '0')
   document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 40)
  }
  const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => {
   observer?.disconnect()
   window.removeEventListener('scroll', onScroll)
   cancelAnimationFrame(frame)
   elements.forEach(element => element.classList.remove('reveal', 'visible'))
  }
 }, [])
 return <>
 <div className="reading-progress" aria-hidden="true"/><a className="skip" href="#conteudo">Pular para o conteúdo</a>
 <header className="header"><a className="brand" href="#inicio" aria-label="Diego Bramusse, início"><img src="/logo-hd.png" alt="Diego Bramusse Designer Gráfico" width="260" height="60"/></a><button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu?'Fechar':'Menu'} <span aria-hidden="true">{menu?'×':'+'}</span></button><nav id="navigation" className={menu?'open':''} aria-label="Navegação principal"><a href="#projetos" onClick={()=>setMenu(false)}>Projetos</a><a href="#servicos" onClick={()=>setMenu(false)}>Serviços</a><a href="#sobre" onClick={()=>setMenu(false)}>Sobre</a><External href={whatsapp} className="nav-contact">Vamos conversar ↗</External></nav></header>
 <main id="conteudo">
 <section className="hero wrap" id="inicio"><div className="eyebrow">Diego Bramusse / Design independente</div><h1><span className="title-line"><span>Marcas com</span></span><span className="title-line"><span>presença.</span></span><span className="title-line accent"><span>Design com intenção.</span></span></h1><div className="hero-bottom"><p>Identidade visual, comunicação e sites para transformar o que sua marca é em algo que as pessoas reconhecem.</p><a className="button" href="#projetos">Explore os projetos <span aria-hidden="true">↓</span></a><span className="hero-note">Do conceito<br/>à vida real.</span></div></section>
 <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0,1,2,3].map(i=><span key={i}>Identidade visual <i>✳</i> Criação de sites <i>✳</i> Comunicação <i>✳</i> Design independente <i>✳</i></span>)}</div></div><section id="projetos" className="work"><div className="wrap"><div className="section-head"><div><span className="eyebrow">01 / Portfólio selecionado</span><h2>O trabalho<br/>fala por si.</h2></div><External href="https://www.behance.net/dibramusse" className="text-link">Portfólio completo no Behance ↗</External></div><div className="project-grid">{projects.map((p,i)=><External href={p.url} className={'project project-'+i} key={p.name}><div className="project-image"><img src={'/'+p.image+'.webp'} alt={'Projeto '+p.name+' por Diego Bramusse'} width="808" height="632" loading={i===0?'eager':'lazy'}/><span className="project-action">Ver projeto ↗</span></div><div className="project-caption"><div><h3>{p.name}</h3><p>{p.type}</p></div><span aria-hidden="true">↗</span></div></External>)}</div></div></section>
 <section className="section wrap" id="servicos"><div className="section-head"><div><span className="eyebrow">02 / Como posso ajudar</span><h2>Uma boa ideia.<br/>Uma marca à altura.</h2></div><p>Design pensado para o seu negócio, com personalidade e consistência em cada aplicação.</p></div><div className="services">{[
 ['Identidade visual','Uma identidade que traduz sua essência e faz sua marca ser reconhecida.','Logotipo · Cores · Tipografia · Aplicações'],
 ['Design para redes sociais','Peças que organizam sua comunicação e dão unidade à presença digital.','Campanhas · Posts · Comunicação visual'],
 ['Criação de sites','Sites e landing pages que apresentam seu negócio com clareza, valorizam sua marca e facilitam o contato.','Sites institucionais · Landing pages · Design responsivo'],
 ['Design gráfico','Sua identidade ganha vida nos materiais que colocam sua marca em contato com as pessoas.','Papelaria · Materiais promocionais · Peças digitais']
 ].map(([title,desc,items],i)=><article className="service" key={title}><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{desc}</p><small>{items}</small></article>)}</div></section>
 <section className="about" id="sobre"><div className="wrap about-grid"><div className="portrait"><img src="/diego-portrait.jpg" alt="Diego Bramusse, designer gráfico" width="1254" height="1254" loading="lazy"/></div><div className="about-copy"><span className="eyebrow">03 / Quem está por trás</span><h2>Diego Bramusse.<br/><span>Olhar criativo.<br/>Decisões conscientes.</span></h2><p>Sou designer gráfico e trabalho com identidade visual, comunicação e criação de sites. Meu objetivo é dar forma ao que torna cada marca única, conectando conceito, estética e aplicação.</p><p className="muted">Um projeto precisa funcionar além da apresentação: nas redes, nos materiais e nos encontros entre sua marca e seu público.</p><External href="https://www.instagram.com/diego.bramusse/" className="text-link">Acompanhe meu trabalho no Instagram ↗</External></div></div></section>
 <section className="contact wrap" id="contato"><span className="eyebrow">04 / Vamos criar juntos</span><h2>Seu próximo<br/>projeto começa<br/><span>com uma conversa.</span></h2><div className="contact-bottom"><p>Me conte sobre sua marca e o que você precisa criar. Vamos encontrar a direção para o seu projeto.</p><External href={whatsapp} className="button">Conversar no WhatsApp ↗</External></div><External href={whatsapp} className="phone">(35) 99133-8334</External></section>
 </main><footer className="wrap"><span>© {new Date().getFullYear()} Diego Bramusse</span><div><External href="https://www.behance.net/dibramusse">Behance ↗</External><External href="https://www.instagram.com/diego.bramusse/">Instagram ↗</External><a href="#inicio">Voltar ao topo ↑</a></div></footer>
 </>
}
