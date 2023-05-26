
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Content from "./components/content";
import { Fragment } from "react";
function App() {

  return (

  <Fragment >
      <Header></Header>
      <Fragment>
      <Menu></Menu>
      </Fragment>
      <Content></Content>
      <Footer></Footer>
  </Fragment>
  );
}

export default App;
