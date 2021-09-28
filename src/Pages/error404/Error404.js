
import Navbar from "../../Components/navbar/Navbar";

import './Error404.css'

function Error404() {
    return (
      <div>
       
        <Navbar />

        <div className="contenedor">
          <div>
            <img src="https://blog.hubspot.es/hubfs/que-es-el-error-404.jpg" class="card-img-top mt-5" alt="404"/>
            <div>
              <h1>Esta ruta no se encuentra disponible</h1>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Buscando...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Error404;