import "./App.css";
import { Container } from "./App.styled";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import TransactionAmountToNumber from "./helpers/TransactionAmountToNumber";
import user from "user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const transactionResult = TransactionAmountToNumber(transactions);

function App() {
  return (
    <>
      <Container>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactionResult} />
      </Container>
    </>
  );
}

export default App;
