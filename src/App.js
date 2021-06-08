import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import TokenBalance from "./components/TokenBalance";
import NFTTransfer from "./components/NFTTransfer";
import { useConfluxPortal } from "@cfxjs/react-hooks";

function App() {
  const { address, login, useEnsurePortalLogin } = useConfluxPortal();
  useEnsurePortalLogin();
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Conflux Network Tools</Navbar.Brand>
        <Button variant="outline-success" onClick={login}>
          {address ? address : "Connect Wallet"}
        </Button>
      </Navbar>
      <Container fluid style={{ marginTop: 10 }}>
        <Row>
          <Col md="6" sm="12">
            <TokenBalance />
          </Col>
          <Col md="6" sm="12">
            <NFTTransfer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
