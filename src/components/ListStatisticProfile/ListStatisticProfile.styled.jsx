import styled from "@emotion/styled";

const ListStatisticProfileContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  background: #f4eded;
  padding: 20px;
  width: 100%;
`;
const ListStatisticItemProfile = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcb4b4;
  :last-child {
    border-right: none;
  }
  .label {
    color: #ca9191;
  }

  .quantity {
    margin-top: 10px;
    font-weight: bold;
  }
`;

export {ListStatisticProfileContainer, ListStatisticItemProfile};