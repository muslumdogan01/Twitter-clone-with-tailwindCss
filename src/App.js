import "./App.css";
import Container from "./Layout/Container";
import Content from "./Layout/Content";
import Sidebar from "./Layout/Sidebar";
import Widgets from "./Layout/Widgets";

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
     <Widgets/>
    </Container>
  );
}

export default App;
