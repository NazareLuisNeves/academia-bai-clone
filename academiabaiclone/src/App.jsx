import React from "react";
import "./App.css";
import academia from './assets/academia.png';
import lupa from './assets/lupa.png';
import modelo from './assets/modelo.png';
import edificio from './assets/edificio.png';
import tired from './assets/Contabilidadeefinancas.png';
import professional from './assets/gestaobancaria.png';
import informatica from './assets/informatica.png';
import gestaoemanutencao from './assets/gestaoemanutencao.png';
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
import resto1 from './assets/resto1.png';
import cincobolinhas from './assets/cincobolinhas.png';
import resto2 from './assets/resto2.png';
import resto3 from './assets/resto3.png';
import redessoci from './assets/redessoci.png';

function App() {
  return (
     <>
    <div>
      <img src={academia} alt="" className="academia" />

      <div className="caixa">
        <input type="text" className="barra" placeholder="Pesquisar..." />
        <img src= {lupa} alt="" className="lupa" />
        <label htmlFor="text" className="label1">Academia BAI ▾</label>
        <div className="menu1">
          <a href="./sobrenos.html" Click={'./sobrenos.html'}>Sobre Nós</a> <br /><br />
          <a href="">Mensagem da Presidente</a><br /><br />
          <a href="">Órgãos Sociais</a><br /><br />
          <a href="">Galeria</a><br /><br />
          <a href="">Iniciativas</a><br /><br />
          <a href="">Carreiras</a><br /><br />
           <a href="">Qualidade <p className="setaqualidade">&gt;</p></a>
                  </div>
      
        <label htmlFor="text" className="label2">Ensino ▾</label>
         
        <label htmlFor="text" className="label3">Publicações ▾</label>
       
        <label htmlFor="text" className="label4">Espaços</label>
        <label htmlFor="text" className="label5">Contactos ▾</label>
        
      </div>

      <div className="circulomaior">
        <div className="circulomenor">
          <div className="bolinha1">
            <div className="bolinha4"></div>
            <div className="bolinha3">
          </div>
            </div>
        </div>
      </div>

      <div className="quadro">
        <img src={modelo} alt="" className="modelo" />
        <img src={edificio} alt="" className="edificio" />
      </div>

      <div className="circulocentral"></div>

      <p className="texto">Somos feitos de</p>
      <p className="seta">&lt;</p>
      <p className="orgulho">Orgulho</p>
      <p className="lasttext">
        Cada aluno e colaborador contribui para o <br />
        orgulho corporativo, reflectido na confiança <br />
        e valor pelo trabalho realizado. Isso fortalece a 
      </p>
  <p  className="nossa">nossa identidade e cultura.</p>
      <button className="botao">Sobre Nós</button>

      <div className="retangulo"></div>
      <p className="feitos">FEITOS</p>
      <p className="futuro">FUTURO</p>
      <p className="de">DE</p>

      <div className="divazul">
        <div className="divverde">
          <p className="continuamos">Continuamos comprometidos com a nossa Missão</p>
          <p className="pontos">...</p>
        </div>
      </div>

      <p className="setadireita">&lt;</p>

      <div className="div1">
        <img src={tired} alt="" className="imagem" />
        <p className="licenciatura1">Licenciatura</p>
        <p className="contabilidade">Contabilidade e<br />Finanças</p>
        <p className="data">15/08/2024</p>
      </div>

      <div className="segundadiv">
        <img src={professional} alt="" className="imagem2" />
        <p className="licenciatura2">Licenciatura</p>
        <p className="gestao">Gestão Bancária e <br />de Seguros</p>
        <p className="data2">15/08/2024</p>
      </div>

      <div className="terceiradiv">
        <img src={informatica} alt="" className="imagem3" />
        <p className="licenciatura3">Licenciatura</p>
        <p className="informatica">Informática de <br />Gestão Financeira</p>
        <p className="data3">15/08/2024</p>
      </div>

      <div className="quartadiv">
        <img src={gestaoemanutencao} alt="" className="imagem4" />
        <p className="formacao">Formação</p>
        <p className="manutencao">Gestão e <br />Manutenção de...</p>
        <p className="data4">30/09/2024</p>
      </div>

      <p className="setadireita1">&gt;</p>

      <img src={moco} alt="" className="moco" />
      <img src={idoso} alt="" className="idoso" />
      <img src={moça} alt="" className="moça" />

      <div className="faixa1"></div>
      <div className="faixa2"></div>

      <p className="sobrenos">Sobre Nós</p>
      <h1 className="umacademia">Uma Academia de Vida!</h1>
      <p className="textao">
        Temos um desafio que é transformar vidas por via da educação. <br /><br />
        Somos todos uma escola onde cada indivíduo pode descobrir ou desenvolver o seu potencial, onde o <br />conhecimento é partilhado e a inovação é incentivada. <br /><br />
        Somos um agente importante no crescimento, dos nossos jovens, dos profissionais, das organizações <br />e da comunidade.
      </p>

      <button className="saibamais">Saiba Mais &gt;</button>

      <img src={bolinhapri} alt="" className="bolinhapri" />
      <p className="academiabai">Academia BAI</p>
      <h1 className="espaco">Espaço para Eventos Corporativos</h1>
      <p className="textao2">
        Na Academia BAI, cada detalhe é cuidadosamente planeado para garantir o máximo conforto, <br />
        funcionalidade e sucesso para o seu evento. Seja qual for a ocasião, estamos prontos para <br />
        oferecer o melhor espaço e os melhores serviços. Venha conhecer e realizar o seu evento <br />
        connosco!
      </p>
<button className="saibamais2">Saiba Mais &gt;</button>
      <button className="agendarvisita">Agendar Visita</button>

      <img src={laço} alt="" className="laço" />
      <button className="baixar"></button>
      <img src={download} alt="" className="download" />
      <img src={rodadasimagens} alt="" className="rodadasimagens" />

      <div className="faixaazul">
        <div className="faixaverde"></div>
        <img src={mundo} alt="" className="mundo" />
      </div>

      <button className="maispubli">Mais Publicações &gt;</button>

      <p className="segundaacademia">Academia BAI</p>
      <h1 className="ultimaspubli">Últimas Publicações</h1>

      <div className="caixinha">
        <img src={tias} alt="" className="tias" />
        <p className="isaf">ISAF e The Bridge Global assinam protocolo de</p>
        <button className="artigorecente">Artigo Recente</button>
        <p className="lerpubli">Ler Publicação</p>
      </div>

      <div className="caixinha2">
        <img src={conferencia} alt="" className="conferencia" />
        <p className="isaf2">ISAF e ISPCS assinam <br />Protocolo de Cooperação...</p>
        <button className="data5">19/08/2025</button>
        <p className="lerpubli">Ler Publicação</p>
      </div>

      <div className="caixinha3">
        <img src={confe2} alt="" className="confe2" />
        <p className="isafencerra">ISAF Encerra Campo de <br />Cacimbo com programa...</p>
        <button className="data6">08/08/2025</button>
        <p className="lerpubli">Ler Publicação</p>
      </div>

      <div className="caixinha4">
        <img src={senhora} alt="" className="senhora" />
        <p className="RH">RH Ágil: o que muda, o <br />que desafia e o que...</p>
        <button className="data7">25/06/2025</button>
        <p className="lerpubli">Ler Publicação</p>
      </div>

      <div className="caixinha5">
        <img src={senhor} alt="" className="senhor" />
        <p className="etica">Ética Corporativa - <br />Diferencial Competitivo...</p>
        <button className="data8">17/06/2025</button>
        <p className="lerpubli">Ler Publicação</p>
      </div>

      <img src={rodadasimagens2} alt="" className="rodadasimagens2" />

      <div className="footer">
        <img src={icone} alt="" className="icone" />
        <p className="criada">
          Criada em 2012, nasceu com a missão de <br />
          contribuir para o desenvolvimento de <br />
          quadros superiores…
        </p>

        <div className="grupo1">
          <p className="titulo">Academia Bai</p>
          <p>Sobre Nós</p>
          <p>Mensagem da <br />Presidente</p>
          <p>Órgãos sociais</p>
          <p>Carreiras</p>
        </div>

        <div className="grupo2">
          <p className="atalhos">Atalhos</p>
          <p>Iniciativas</p>
          <p>Publicações</p>
          <p><br />Espaços</p>
        </div>

        <div className="grupo3">
          <p className="qualidade">Qualidade</p>
          <p>Política da Qualidade</p>
          <p>Certificado de Conformidade</p>
        </div>
         <div className="ultimogrupo">
 <p className="contatos">Contactos</p>
  <img src={resto1} alt="" className="resto1" />
  <img src={resto2} alt="" className="resto2" />
  <img src={resto3} alt="" className="resto3" />
        <p className="avenida">AV. Pedro de Castro Van-Dúnem Loy, Edifício</p>
        <p className="AB">
          AB - Academia BAI, Morro Bento, Luanda- <br />Angola
        </p>
        <p className="number">(+244) 277 281 005</p>
        <p className="email">geral@academiabai.co.ao</p>
         </div>
        <img src={cincobolinhas} alt="" className="cincobolinhas" />
        <img src={redessoci} alt="" className="redessoci" />
      </div>

      <div className="final">
        <p className="politica">Política de Privacidade</p>
        <p className="centro">2025 &copy; Academia BAI</p>
      </div>
    </div>
</>
  );
 
  

}

export default App;
