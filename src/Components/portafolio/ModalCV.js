
function ModalCV(props) {
  return (
    <div className="modal fade" id={props.pm1} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Acerca de mí</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div className="col8">
               <strong>Fortalezas </strong> 
               <br></br>
               <br></br>
               <ul>
               <li>Disciplina.</li>
               <li>Responsabilidad</li>
               <li>Puntualidad.</li>
               <li>Compromiso.</li>
               <li>Trabajo en Equipo.</li>
               </ul>
            </div>
          

        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalCV;