import "./App.css";
import academia from './assets/academia.png';
import lupa from './assets/lupa.png';
import modelo from './assets/modelo.png';
import edificio from './assets/edificio.png';
import tired from './assets/mocinho.jpeg';
import professional from './assets/professional.jpeg';
import imagem2 from './assets/modelo.jpeg';
import moco from './assets/moco.png';
import idoso from './assets/idoso.png';
import moça from './assets/moça.png';
import bolinhapri from './assets/bolinhapri.png';
import laço from './assets/laço.png';
import download from './assets/download.png';
import rodadasimagens from './assets/rodadasimagens.png';
import mundo from './assets/mundo.png';
import tias from './assets/tias.png';
import conferencia from './assets/conferencia.png';
import confe2 from './assets/confe2.png';
import senhora from './assets/senhora.png';
import senhor from './assets/senhor.png';
import rodadasimagens2 from './assets/rodadasimagens2.png';
import icone from './assets/icone.png';
import resto from './assets/resto.png';
import cincobolinhas from './assets/cincobolinhas.png';
import redessociais from './assets/redessociais.png';
function App() {
  return (
    <div>
      <img src={academia} alt="" id="academia" />

      <div id="caixa">
        <input type="text" id="barra" placeholder="Pesquisar..." />
        <img src= {lupa} alt="" id="lupa" />
        <label htmlFor="text" id="label1">Academia BAI v</label>
        <label htmlFor="text" id="label2">Ensino v</label>
        <label htmlFor="text" id="label3">Publicações v</label>
        <label htmlFor="text" id="label4">Espaços</label>
        <label htmlFor="text" id="label5">Contactos v</label>
      </div>

      <div className="circulomaior">
        <div className="circulomenor">
          <div id="bolinha1">
            <div id="bolinha3">
              <div id="bolinha4"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="quadro">
        <img src={modelo} alt="" id="modelo" />
        <img src={edificio} alt="" id="edificio" />
      </div>

      <div className="circulocentral"></div>

      <p className="texto">Somos feitos de</p>
      <p className="seta">&lt;</p>
      <p className="orgulho">Orgulho</p>
      <p id="lasttext">
        Cada aluno e colaborador contribui para o <br />
        orgulho corporativo, reflectido na confiança <br />
        e valor pelo trabalho realizado. Isso fortalece a <br />
        nossa identidade e cultura.
      </p>

      <button id="botao">Sobre Nós</button>

      <div id="retangulo"></div>
      <p id="feitos">FEITOS</p>
      <p id="futuro">FUTURO</p>
      <p id="de">DE</p>

      <div id="divazul">
        <div id="divverde">
          <p id="continuamos">Continuamos comprometidos com a nossa Missão</p>
          <p id="pontos">...</p>
        </div>
      </div>

      <p className="setadireita">&lt;</p>

      <div id="div1">
        <img src={tired} alt="" id="imagem" />
        <p id="licenciatura1">Licenciatura</p>
        <p className="contabilidade">Contabilidade e<br />Finanças</p>
        <p className="data">15/08/2024</p>
      </div>

      <div id="segundadiv">
        <img src={professional} alt="" id="imagem2" />
        <p id="licenciatura2">Licenciatura</p>
        <p id="gestao">Gestão Bancária e <br />de Seguros</p>
        <p className="data2">15/08/2024</p>
      </div>

      <div id="terceiradiv">
        <img src={imagem2} alt="" id="imagem3" />
        <p id="licenciatura3">Licenciatura</p>
        <p id="informatica">Informática de <br />Gestão Financeira</p>
        <p className="data3">15/08/2024</p>
      </div>

      <div id="quartadiv">
        <img src={imagem} alt="" id="imagem4" />
        <p id="formacao">Formação</p>
        <p id="manutencao">Gestão e <br />Manutenção de...</p>
        <p className="data4">30/09/2024</p>
      </div>

      <p className="setadireita1">&gt;</p>

      <img src={moco} alt="" id="moco" />
      <img src={idoso} alt="" id="idoso" />
      <img src={moça} alt="" id="moça" />

      <div id="faixa1"></div>
      <div id="faixa2"></div>

      <p id="sobrenos">Sobre Nós</p>
      <h1 className="umacademia">Uma Academia de Vida!</h1>
      <p className="textao">
        Temos um desafio que é transformar vidas por via da educação. <br /><br />
        Somos todos uma escola onde cada indivíduo pode descobrir ou desenvolver o seu potencial, onde o conhecimento é partilhado e a inovação é incentivada. <br /><br />
        Somos um agente importante no crescimento, dos nossos jovens, dos profissionais, das organizações e da comunidade.
      </p>

      <button id="saibamais">Saiba Mais &gt;</button>

      <img src={bolinhapri} alt="" id="bolinhapri" />
      <p id="academiabai">Academia BAI</p>
      <h1 id="espaco">Espaço para Eventos Corporativos</h1>
      <p id="textao2">
        Na Academia BAI, cada detalhe é cuidadosamente planeado para garantir o máximo conforto, <br />
        funcionalidade e sucesso para o seu evento. Seja qual for a ocasião, estamos prontos para <br />
        oferecer o melhor espaço e os melhores serviços. Venha conhecer e realizar o seu evento <br />
        connosco!
      </p>

      <button id="saibamais2">Saiba Mais &gt;</button>
      <button id="agendarvisita">Agendar Visita</button>

      <img src={laço} alt="" id="laço" />
      <button id="baixar"></button>
      <img src={download} alt="" id="download" />
      <img src={rodadasimagens} alt="" id="rodadasimagens" />

      <div className="faixaazul">
        <div className="faixaverde"></div>
        <img src={mundo} alt="" className="mundo" />
      </div>

      <button id="maispubli">Mais Publicações &gt;</button>

      <p className="segundaacademia">Academia BAI</p>
      <h1 className="ultimaspubli">Últimas Publicações</h1>

      <div id="caixinha">
        <img src={tias} alt="" id="tias" />
        <p id="isaf">ISAF e The Bridge Global assinam protocolo de</p>
        <button className="artigorecente">Artigo Recente</button>
        <p id="lerpubli">Ler Publicação</p>
      </div>

      <div className="caixinha2">
        <img src={conferencia} alt="" id="conferencia" />
        <p id="isaf2">ISAF e ISPCS assinam <br />Protocolo de Cooperação...</p>
        <button className="data5">19/08/2025</button>
        <p id="lerpubli">Ler Publicação</p>
      </div>

      <div id="caixinha3">
        <img src={confe2} alt="" id="confe2" />
        <p id="isafencerra">ISAF Encerra Campo de <br />Cacimbo com programa...</p>
        <button id="data6">08/08/2025</button>
        <p id="lerpubli">Ler Publicação</p>
      </div>

      <div id="caixinha4">
        <img src={senhora} alt="" id="senhora" />
        <p id="RH">RH Ágil: o que muda, o <br />que desafia e o que...</p>
        <button id="data7">25/06/2025</button>
        <p id="lerpubli">Ler Publicação</p>
      </div>

      <div id="caixinha5">
        <img src={senhor} alt="" id="senhor" />
        <p id="etica">Ética Corporativa - <br />Diferencial Competitivo...</p>
        <button id="data8">17/06/2025</button>
        <p id="lerpubli">Ler Publicação</p>
      </div>

      <img src={rodadasimagens2} alt="" className="rodadasimagens2" />

      <div id="footer">
        <img src={icone} alt="" id="icone" />
        <p className="criada">
          Criada em 2012, nasceu com a missão de <br />
          contribuir para o desenvolvimento de <br />
          quadros superiores…
        </p>

        <div id="grupo1">
          <p id="titulo">Academia Bai</p>
          <p>Sobre Nós</p>
          <p>Mensagem da <br />Presidente</p>
          <p>Órgãos sociais</p>
          <p>Carreiras</p>
        </div>

        <div id="grupo2">
          <p className="atalhos">Atalhos</p>
          <p>Iniciativas</p>
          <p>Publicações</p>
          <p><br />Espaços</p>
        </div>

        <div id="grupo3">
          <p id="qualidade">Qualidade</p>
          <p>Política da Qualidade</p>
          <p>Certificado de Conformidade</p>
        </div>

        <p id="contatos">Contactos</p>
        <p className="avenida">AV. Pedro de Castro Van-Dúnem Loy, Edifício</p>
        <p id="AB">
          AB - Academia BAI, Morro Bento, Luanda- <br />Angola
        </p>
        <p id="number">(+244) 277 281 005</p>
        <p id="email">geral@academiabai.co.ao</p>

        <img src={resto} alt="" id="resto" />
        <img src={cincobolinhas} alt="" id="cincobolinhas" />
      </div>

      <div id="final">
        <p id="politica">Política de Privacidade</p>
        <p id="centro">2025 &copy; Academia BAI</p>
        <img src={redessociais} alt="" id="redessociais" />
      </div>
    </div>
  );
}

export default App;
