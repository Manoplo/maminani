import Announcement from "../components/Announcement";
import styled from "styled-components";

import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Categories from "../components/Categories";
import NavBarFixed from "../components/NavBarFixed";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 20px auto;
`;

const CategoriesList = () => {
  return (
    <Container>
      <NavBarFixed />

      <FilterContainer>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <Link to="/categorias">
          <p>Categorías</p>
        </Link>
      </FilterContainer>
      <Categories />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default CategoriesList;
