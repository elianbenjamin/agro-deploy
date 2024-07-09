import styles from "./scioCup.module.scss";

const ScioCup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}></div>
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

        <a
          href="https://sciocup.com/"
          target="_blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          <div className={styles.saberMas}>Saber mas</div>
        </a>
      </div>
    </div>
  );
};

export default ScioCup;
