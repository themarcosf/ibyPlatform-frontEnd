import Head from "next/head";
import Lottie from "lottie-react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EsgPractice from "../components/EsgPractice/EsgPractice";
import Planet from "../../public/planet.json";
import House from "../../public/home-lootie.json";
import CarouselIndex from "../components/Carousel/Carousel";
import styles from "../styles/index.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Iby Platform</title>
      </Head>
      <div className={styles.body}>
        <Header />
        <CarouselIndex />
        <div id="howStarted" className={styles.texts}>
          <h3>Como surgiu a Plataforma Iby?</h3>
          <p>
            A ideia surgiu quando vimos a possibilidade de criar algo inovador
            no mercado
            <br /> imobiliário, unindo a experiência de participar de leilões
            junto ao universo
            <br /> Web3. Foi assim que nasceu a IbyPlatform, que trás a
            possibilidade de comprar <br />
            imóveis e ganhar dinheiro, tudo isso em um só lugar.
          </p>
          <h3>Qual o nosso objetivo?</h3>
          <p>
            Nosso objetivo é fazer com que você compre ou alugue imóveis sem
            seguro
            <br /> fiança, sem taxas de entrada e com possibilidade de ganho na
            valorização do <br />
            seu token.
          </p>
        </div>
        <div className={styles.esg}>
          <div
            style={{
              width: "28%",
              marginTop: "2%",
              position: "relative",
              left: "3%",
            }}
          >
            <Lottie animationData={Planet} />
          </div>
          <div className={styles.esgTexts}>
            <h3>Iniciativas ESG</h3>
            <p>
              O ESG resume as melhores práticas de caráter ambiental,
              <br /> social e de governança (Environmental, Social,
              <br /> Governance) que as empresas devem seguir.
              <br />
              Trata-se de um tripé que sustenta as ações de um novo
              <br /> mercado, em que organizações, investidores e,
              <br /> sobretudo, consumidores estão mais preocupados com a<br />{" "}
              sustentabilidade e a responsabilidade social das marcas
              <br /> com as quais se relacionam.
            </p>
          </div>
        </div>
        <div className={styles.esgMessage}>
          <p>
            A IbyPlatform promove a prática do{" "}
            <span style={{ color: "#66A570", fontWeight: "bold" }}>ESG</span> no
            momento em que a pessoa realiza a compra de <br />
            algum imóvel. Ou seja, antes da realização da compra há a opção de
            pagar de 1 a 3% a mais <br />
            do valor do imóvel para promover as práticas ESG, deste modo o
            governo paga o mesmo <br />
            valor referente a doação.{" "}
          </p>
        </div>
        <p
          style={{
            color: "#66A570",
            fontWeight: "500",
            fontSize: "28px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Na prática
        </p>
        <EsgPractice />
        <div className={styles.nftContainer}>
          <div>
            <h3>
              Ganhe um NFT <br />
              especial
            </h3>
            <p>
              Quando você realiza uma ação no fundo de ESG <br />
              promovido pelo Governo Federal, você recebe um <br />
              NFT referente a esta doação. Essa NFT é exclusiva e <br />
              tem um design diferente dos demais.
            </p>
            <h4
              style={{ color: "#66A570", marginTop: "40px", fontSize: "24px" }}
            >
              Faça a diferença, faça um Iby
            </h4>
          </div>
          <div
            style={{
              width: "35%",
              marginTop: "2%",
              marginLeft: "20%",
              position: "relative",
              left: "2%",
            }}
          >
            <Lottie animationData={House} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;