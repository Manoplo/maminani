import ReactFullpage from "@fullpage/react-fullpage";
import Categories from "./Categories";
import CatOneHome from "./CatOneHome";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import CatTwoHome from "./CatTwoHome";
import axios from "axios";

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "80vh", width: "80vw" })}
`;

const Tooltip = styled.span`
  font-size: 18px;
  color: black;
  font-family: "Bodoni Moda";
  font-weight: 300;
  font-style: italic;
  ${mobile({ display: "none" })}
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const NewlyContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const New = styled.span`
  font-size: 18px;
  color: black;
  font-family: "Bodoni Moda";
  font-style: italic;
`;

const FullPageSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios(
          "http://elvestidordejulietta.test/api/v1/products/latest"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={700}
      scrollOverflow={true}
      controlArrows={true}
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>Camisetas</Tooltip>
                  <Image src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
                  <Tooltip>Camisetas</Tooltip>
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>Camisetas</Tooltip>
                  <Image src="https://images.pexels.com/photos/7446537/pexels-photo-7446537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  <Tooltip>Camisetas</Tooltip>
                </SliderWrapper>
              </div>
            </div>
            <div className="section">
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>Vestidos</Tooltip>
                  <Image src="https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                  <Tooltip>Vestidos</Tooltip>{" "}
                </SliderWrapper>
              </div>
              <div className="slide">
                <SliderWrapper>
                  <Tooltip>Vestidos</Tooltip>{" "}
                  <Image src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                  <Tooltip>Vestidos</Tooltip>{" "}
                </SliderWrapper>
              </div>
            </div>
            <div className="section fp-auto-height-responsive">
              <CatOneHome />
              <CatTwoHome />
            </div>
            <div className="section">
              {/* <Products /> TODO - ENDPOINT TO BRING PRODUCTS ORDER BY CREATED AT */}
              <NewlyContainer>
                <New>Novedades</New>
              </NewlyContainer>
              <Products products={products} />
            </div>
            <div className="section">
              <BottomContainer>
                <NewsLetter />
                <Footer />
              </BottomContainer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullPageSlider;
