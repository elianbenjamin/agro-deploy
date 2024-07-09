import styles from "./about.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/gallery-images/export";
import { useContext } from "react";
import {
  FullSizeImageContext,
  FullSizeImageContextType,
} from "../../FullSizeImageContext";

const About = () => {
  const navigate = useNavigate();
  const { setImage, setPageId } = useContext(
    FullSizeImageContext
  ) as FullSizeImageContextType;

  const handleImageClick = (image: string) => {
    setImage(image);
    setPageId("about");
    navigate("/fullsize-image");
  };

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className={styles.About} id="about">
      <section className={styles["left-container"]}>
        <h1>Nuestra Historia</h1>

        <p className={styles.text_on}>
          En 2006-2007 con mucho esfuerzo y tiempo de aprendizaje, A través de
          un servicio excepcional que generó un boca a boca positivo,
          experimentamos un crecimiento gradual. En ese entonces, Nuestra
          trayectoria empresarial se centra en el picado de forraje,
          destacándonos por la calidad de nuestro servicios y la satisfacción del
          cliente. A medida que la demanda creció, expandimos nuestras
          operaciones y la capacidad de picado para satisfacer las necesidades
          del mercado.
        </p>

        <NavLink
          to={"/flota"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <div className={styles["flota-button"]}>Nuestra flota</div>
        </NavLink>
      </section>
      <section className={styles["right-container"]}>
        {images.map((img, i) => (
          <div onClick={() => handleImageClick(img)} key={i}>
            <img src={img} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
