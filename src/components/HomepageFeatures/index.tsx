import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { useState } from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">> | string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Zona AIoT Farm",
    Svg: require("@site/static/img/image.png").default,
    description: (
      <>
        An AI and IoT-powered system designed to optimize poultry farming
        operations. Zona AIoT enables real-time monitoring and automated control
        of temperature, humidity, and farm equipment to reduce stress and
        disease in livestock.
      </>
    ),
  },
  {
    title: "Zona Waste Management",
    Svg: require("@site/static/img/2.png").default,
    description: (
      <>
        Transform poultry waste into valuable products such as organic
        fertilizer and biogas. Zona Waste Management offers integrated systems
        for waste processing, helping farms become more sustainable and generate
        new revenue streams.
      </>
    ),
  },
  {
    title: "Zona Mobile Apps",
    Svg: require("@site/static/img/mobile_app.jpg").default,
    description: (
      <>
        Manage your farm remotely through our mobile application. With real-time
        sensor data, alerts, and automated control features, Zona Apps empowers
        farmers to make smarter decisions anytime, anywhere.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (typeof Svg === "string") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={clsx("col col--4")}>
        <div className="text--center">
          {typeof Svg === "string" ? (
            <img
              src={Svg}
              className={styles.featureSvg}
              alt={title}
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
              title="Click to view full image"
            />
          ) : (
            <Svg className={styles.featureSvg} role="img" />
          )}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>

      {/* Modal for full image */}
      {isModalOpen && typeof Svg === "string" && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <img src={Svg} alt={title} className={styles.fullImage} />
          </div>
        </div>
      )}
    </>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
