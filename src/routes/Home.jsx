import Navbar from "../components/CustomNavbar";

import festSvg from "../assets/festsvg2.svg";
import imgTec1 from "../images/tecmg.webp";
import imgHip from "../images/tecmg2.webp";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row header">
          <div className="col-lg-6">
            <h1>Proximos eventos destacados</h1>
            <p>
              Encuentra los mejores eventos en un solo lugar, no te los pierdas
            </p>
            <div className="btn-group gap-3 ">
              <button className="button button-primary">Ver eventos</button>

              <button className="button button-outline">Regístrate</button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4">
            <img src={festSvg} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 text-center text-event">
            <h2>Eventos destacados</h2>
            <p>Conoce los proximos eventos que tenemos para ti</p>
          </div>
        </div>

        <div className="row event-content mt-2">
          <div className="col-lg-6 event-description ">
            <h3 className="subtitle mb-3">Conferencia de tecnología</h3>
            <p>15 de noviembre de 2024</p>
            <p>Centro de convenciones</p>
            <button className="button button-link">Ver detalles</button>
          </div>
          <div className="col-lg-6">
            <img src={imgTec1} alt="" />
          </div>
        </div>

        <div className="row event-content mt-5">
          <div className="col-lg-6 event-description ">
            <h3 className="subtitle mb-3">Hip Hop Music Fest</h3>
            <p>25 de noviembre de 2024</p>
            <p>Royal Center</p>
            <button className="button button-link">Ver detalles</button>
          </div>
          <div className="col-lg-6">
            <img src={imgHip} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
