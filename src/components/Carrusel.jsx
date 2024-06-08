import Carousel from "react-bootstrap/Carousel";

// importacion de imagenes
import img1 from "../images/event1.jpg";
import img2 from "../images/event2.jpg";
import img3 from "../images/event3.jpg";

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="light">
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
                <Carousel.Caption>
                    <h5>Maria Casquito Fest</h5>
                    <p>1 de enero de 2025</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
                <Carousel.Caption>
                    <h5>Evento: Nombre del evento 2</h5>
                    <p>El día 15 de febrero de 2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
                <Carousel.Caption>
                    <h5>Evento: Nombre del evento 3</h5>
                    <p>El día 30 de marzo de 2022</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
