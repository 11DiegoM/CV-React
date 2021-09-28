import './estilos.css';
import Navbar from '../../Components/navbar/Navbar';
import Razas from '../../Components/portafolio/Razas';
import miCara from './miCara.jpg';

function portafolio() {
  return (
    <div className="container-fluid">
       <Navbar />
        <div className="colP">
        <h1 className="til">Diego Montenegro</h1>
    <h2 className="texto1">Tecnólogo en Análisis y Desarrollo en Sistemas de Información</h2>
        <br></br>
    <div className="container">
    <img src={miCara} className="miCara" alt="miCara " />
    <br></br>
    <h1>Perfíl</h1>
    <p>Soy un Tecnólogo en Análisis y Desarrollo en Sistemas de Información, puntual y responsable.
Me enfoco en aprender cada día más, con entrega y trabajo duro. </p>
<hr/>

<h1>Habilidades Profesionales</h1>
<ul><li>Manejo de SQL y SGBD como SQL Server, MySQL, entrte otros.</li> 
<li>Dominio en UML.</li> 
<li> Conocimiento Avanzado en lenguajes de programación como Java, Php y JavaScript.</li> 
<li> Manejo de HTML, CSS y BOOTSTRAP</li> 
<li> Capacidades de implementación y desarrollo con Librerias o Frameworks</li> 
<li> Capacidad en trabajo en equipo.</li> 
<br></br>

</ul>
<hr/>

<h1>Contácto:</h1>
<p>Teléfono: 7979697
<br></br>
Móvil: 3013507146
<br></br>
Correo electrónico: alejomontenegrob@gmail.com
<br></br>
Dirección: KR 87D - 42 A 19 SUR 
<br></br>
Bogotá - Colombia.
</p>
</div>
<div className="col">
  <br></br>
<h1 className="texto">Historial académico</h1>
<br></br>
<h2 className="texto">Servicio Nacional de Aprendizaje (SENA)</h2>
<br></br>
<h4 className="texto">Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMLTI)</h4>
<br></br>
<ul className="texto">
  <li> Tecnólogo en Análisis y Desarrollo de Sistemas de Información - Actualmente</li>
<li>Técnico en Programación de Software 2019-2020.</li> 
</ul>
<br></br>
<h2 className="texto">Colegio Claretiano</h2>
<br></br>
<ul className="texto">
  <li>Bachiller Académico - 2020</li>
</ul>
<br></br>
<h1 className="texto">Otras formaciones</h1>
<br></br>
<br></br>
<h2 className="texto">Curso de Desarrollo de Apps Móviles UCM (Universidad Complutense de Madrid) y Google - 2020
</h2>
<br></br>
<br></br>
<ul className="texto">
<li>Totalidad del Curso: 40 horas.</li>
<li>Modalidad: Virtual.</li>
<li>Capadidad para programar apps y publicarlas para iOS o Android.</li>
</ul>
<br></br>

           { 
              <div className="col-12 col-md-4" >
              <Razas />
                 
              </div>
}
        
</div>
<br>
</br>
<br>
</br>
</div>
        

     
        </div>
  );
}

export default portafolio;



