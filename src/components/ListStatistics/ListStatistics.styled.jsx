import styled from "@emotion/styled";
import GetRandomHexColor from "../../helpers/GetRandomHexColor";

const ListItems = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
  margin: 0;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  text-align: center;
  display: flex;
  background-color: ${ GetRandomHexColor };
  flex-direction: column;
  padding: 10px 0;
`;

export { ListItems, ListItem };