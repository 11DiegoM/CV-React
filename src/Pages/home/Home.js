import Navbar from '../../Components/navbar/Navbar';


import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <img className="gif" src="https://media1.giphy.com/media/gJtfnRqpKcD8aVPKYN/giphy.gif" />
      <br></br><br></br>
        <div className="position-absolute top-50 start-50 translate-middle border-radius disable"> 
          <h1 className="btn-lg btn-primary w-2500 h-400 text-white position-absolute top-50 start-50 translate-middle border-radius disable">¡Bienvenido!</h1>
        </div>
      </div>
  );
}

export default Home;