export default function App() {
  return (
    <>
      <header>
      <a className="brand" href="#inicio" aria-label="Diego Bramusse, início">
      <img src="/logo-hd.png" alt="Diego Bramusse Designer Gráfico" width="260" height="60" />
      </a>
      <nav aria-label="Navegação principal">
      <a href="#servicos">Serviços</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
      </nav>
      <a className="nav-cta" href="#contato">Vamos conversar ↗</a>
      </header>
      <main>
      <section id="inicio" className="hero wrap">
      <div>
      <div className="eyebrow">Designer gráfico · branding · web design</div>
      <h1>Sua marca<br />pode dizer <em>mais.</em>
      </h1>
      <p>Crio identidades visuais e experiências digitais para negócios que querem ser reconhecidos, entendidos e escolhidos.</p>
      <div className="hero-actions">
      <a className="button" href="#contato">Fale sobre seu projeto ↗</a>
      <a className="text-link" href="#servicos">Conheça meus serviços</a>
      </div>
      </div>
      <div className="portrait-frame">
      <img src="/diego-portrait.jpg" alt="Retrato de Diego Bramusse" width="1254" height="1254" />
      <span>Diego Bramusse / Designer gráfico</span>
      </div>
      </section>
      <div className="strip">
      <div className="wrap">
      <span>Identidade visual</span>
      <span>Branding</span>
      <span>Sites institucionais</span>
      <span>Design para comunicação</span>
      </div>
      </div>
      <section className="section wrap" id="servicos">
      <div className="section-head">
      <div>
      <div className="index">01 / O que eu faço</div>
      <h2>Design que trabalha<br />pela sua marca.</h2>
      </div>
      <p>Da primeira impressão à presença digital, cada decisão visual precisa ter um motivo.</p>
      </div>
      <div className="services">
      <article className="service">
      <div className="num">01</div>
      <h3>Identidade visual</h3>
      <p>Um sistema visual consistente para sua marca aparecer com personalidade em todos os pontos de contato.</p>
      </article>
      <article className="service">
      <div className="num">02</div>
      <h3>Branding</h3>
      <p>Direção visual e posicionamento para comunicar com clareza o valor do seu negócio.</p>
      </article>
      <article className="service">
      <div className="num">03</div>
      <h3>Sites</h3>
      <p>Sites responsivos para apresentar seus serviços, construir confiança e facilitar o contato.</p>
      </article>
      </div>
      </section>
      <section className="section about" id="sobre">
      <div className="wrap">
      <div>
      <div className="index">02 / Quem cria</div>
      <h2>Prazer,<br />Diego.</h2>
      </div>
      <div>
      <p>Sou Diego Bramusse, designer gráfico. Trabalho com marcas que têm algo próprio a dizer e precisam de uma identidade capaz de mostrar isso ao mundo.</p>
      <p className="muted">Uno conceito, estética e aplicação prática para criar peças e experiências que funcionam na vida real, do cartão ao site.</p>
      </div>
      </div>
      </section>
      <section className="section contact" id="contato">
      <div className="wrap">
      <div className="eyebrow">03 / Seu próximo passo</div>
      <h2>Vamos dar forma à sua próxima fase?</h2>
      <p>Conte o que você está construindo e quais serviços procura. Eu retorno para entender o projeto e preparar uma proposta.</p>
      <a className="button" href="https://www.instagram.com/diego.bramusse/" target="_blank" rel="noopener noreferrer">Conversar pelo Instagram ↗</a>
      </div>
      </section>
      </main>
      <footer className="wrap">
      <span>© 2026 Diego Bramusse</span>
      <span>Design gráfico · branding · sites</span>
      <a href="https://www.instagram.com/diego.bramusse/" target="_blank" rel="noopener noreferrer">@diego.bramusse ↗</a>
      </footer>
    </>
  )
}
