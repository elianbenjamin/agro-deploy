import { NavLink } from "react-router-dom";
import style from "./flota.module.scss";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const Flota = () => {
  useEffect(() => {
    scroller.scrollTo("app", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <div className={style["flota-container"]}>
      <nav className={style["nav-bar"]}>
        <NavLink to={"/"} className={style["navBar-button"]}>
          ATRAS
        </NavLink>
      </nav>

      <h1>Nuestra Flota</h1>

      <section>
        <div className={style.camiones}>
          <h2>Camiones</h2>
          <p>- 3 Mercedes Benz 1634.</p>
          <p>- 7 volkswagen 1731.</p>
          <p>- 1 Scania 112.</p>
          <p>- 1 MB 1620 cisterna de 10.000Lts(combustible). </p>
          <p>- 1 Ford 1517 cisterna 10.000Lts(combustible).</p>
          <p>- 13 Bateas de 40mt3.</p>
          <p>- 2 Carretones de 3 ejes.</p>
        </div>
        <div className={style.picadoras}>
          <h2>Picadoras y Sembradoras</h2>
          <p>- 1 claas jaguar 960 orbis 7,50 mts.</p>
          <p>- 1 claas jaguar 960 orbis 7,50 mts.</p>
          <p>- 2 sembradoraas erca serie 6 grano grueso. </p>
        </div>
        <div className={style.tractores}>
          <h2>Tractores y Otras maquinarias</h2>
          <p>- 1 Case 340 Magnum con pala.</p>
          <p>- 1 Case 290 Magnum con pala.</p>
          <p>- 1 Case 180 con pala.</p>
          <p>- 1 New Holland T7 245.</p>
          <p>- 2 New Holland T7 245.</p>
          <p>- 2 Embolsadora green pac de 9 pies.</p>
        </div>
        <div className={style.varios}>
          <h2>Varios</h2>
          <p>- 2 Acoplados cisternas 8.000lts y 10.000lts</p>
          <p>- 1 tanque de agua 10.000lts.</p>
          <p>- 3 Carros taller </p>
          <p>- 4 Casillas 12mts</p>
          <p>- 4 Pick Up 4x4</p>
        </div>
      </section>
    </div>
  );
};

export default Flota;
