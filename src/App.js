import Global from "./components/styles/Global";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "./data";
import { CardWrap } from "./components/styles/Card.style";
function App() {
  const travel = Data.map((element) => {
    return (
      <Card
        key={element.id}
        {...element}
      />
    );
  });
  return (
    <>
      <Global />
      <Nav />
      <CardWrap>{travel}</CardWrap>
    </>
  );
}

export default App;
