import academia from './assets/academia.png';
import lupa from './assets/lupa.png';
import "/.sobrenos.css";

function App() {
  return (
     <>
    <div>
      <img src={academia} alt="" className="academia" />

      <div className="caixa">
        <input type="text" className="barra" placeholder="Pesquisar..." />
        <img src= {lupa} alt="" className="lupa" />
        <label htmlFor="text" className="label1">Academia BAI ▾</label>
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
      </div>
        </>
  );
 
  

}

export default App;