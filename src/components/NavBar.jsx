import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { MenuItem, Badge } from "@material-ui/core";

/**
 * STYLED COMPONENTS
 */

const Container = styled.nav`
  heighth: 60px;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Lenguage = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

/**
 *
 * @param {*} param0
 * @returns JSX Element
 */

export default function NavBar({}) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lenguage>ES</Lenguage>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>EL VESTIDOR DE JULIETTA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRARSE</MenuItem>
          <MenuItem>ACCEDER</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
