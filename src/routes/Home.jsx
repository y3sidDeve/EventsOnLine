import Navbar from "../components/CustomNavbar";

import festSvg from "../assets/festsvg2.svg";

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
      </div>
    </>
  );
}

export default Home;
