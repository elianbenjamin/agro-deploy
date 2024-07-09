import styles from "./scioCup.module.scss";
import img1 from "../../assets/gallery-images/scioCup1.jpg";

const ScioCup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img1} alt="" />
      </div>
      <div className={styles.txtContainer}>
        <h1>Lo que nos hace destacar</h1>

        <p>
          El Sciocup nos permite monitorear la humedad de manera continua y
          precisa. Con esta información, podemos tomar decisiones informadas
          sobre el momento adecuado para realizar el picado. Por ejemplo, si los
          niveles de humedad están en el rango ideal (generalmente entre 60% y
          70%), podemos proceder con el picado, asegurando una buena calidad del
          ensilado y una operación eficiente. Si la humedad no está en el nivel
          óptimo, podemos ajustar nuestras estrategias de cosecha o esperar
          hasta que las condiciones sean más favorables.
        </p>
      </div>
    </div>
  );
};

export default ScioCup;
