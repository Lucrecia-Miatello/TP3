import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese texto: 
          <input type="text" name="frase1" />
        </p>
        <p>
          <input type="submit" value="Evaluar" />
        </p>
      </form>
	  </div>
     );
}
    function presion(e) {
  e.preventDefault();
  const frase1=(e.target.frase1.value);
	let contador=0;
	for(let i=0; i<=frase1.length; i++)
	{
		if(frase1.charAt(i)=='a' || frase1.charAt(i)=='e' || frase1.charAt(i)=='i' || frase1.charAt(i)=='o' || frase1.charAt(i)=='u' || frase1.charAt(i)=='A' || frase1.charAt(i)=='E' || frase1.charAt(i)=='I' || frase1.charAt(i)=='O' || frase1.charAt(i)=='U' ) 
			{
				contador++;
				
			}
      
  }
  alert ('la cantidad de vocales es de: '+contador);
}
export default App;
