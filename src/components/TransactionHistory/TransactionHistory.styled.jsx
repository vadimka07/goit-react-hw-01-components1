import styled from "@emotion/styled";

const Table = styled.table`
  width: 75%;
  margin: 50px auto 0;

  th {
    background-color: red;
    color: #fff;
    padding: 2vw 0;
  }

  tbody {
    td {
      padding: 2vw 0;
      text-align: center;
    }

    tr:nth-of-type(2n) {
      td {
        background-color: #429390;
        color: #fff;
      }
    }
  }
`;

export { Table };