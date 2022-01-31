import styled from "@emotion/styled";
import StatusBgColor from "../../helpers/statusBgColor";
const FriendListContainer = styled.ul`
  display: grid;
  width: 350px;
  list-style-type: none;
  grid-row-gap: 20px;
  margin: 0 auto;
  padding: 0;
`;
const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 120px;
  overflow: hidden;
  padding: 15px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px #000;
`;

const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  height: 100%;
  margin: 0 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const Status = styled.span`
  background-color: ${ StatusBgColor };
  width: 25px;
  height: 25px;
  display: block;
  border-radius: 50%;
`;
const Description = styled.p`
  font-size: 23px;
`;

export { FriendListContainer, FriendListItem, ContainerImage, Image, Status, Description };
