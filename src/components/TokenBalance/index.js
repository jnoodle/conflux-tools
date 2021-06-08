import React, { useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import BigNumber from "bignumber.js";
import xrc20 from "../../utils/abi/xrc20";
import { Conflux } from "js-conflux-sdk";

function TokenBalance() {
  const conflux = new Conflux({
    url: "https://main.confluxrpc.com/v2",
    networkId: 1029
  });
  const [loading, setLoading] = useState(false);
  const [balanceInfo, setBalanceInfo] = useState(null);

  const getTokenBalance = async e => {
    e.preventDefault();
    setBalanceInfo(null);

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    if (formDataObj.tokenAddress && formDataObj.userAddress) {
      setLoading(true);
      try {
        const contract = conflux.Contract({
          abi: xrc20.abi,
          address: formDataObj.tokenAddress
        });
        const name = (await contract.name()) || "Unknown";
        const symbol = (await contract.symbol()) || "Unknown";
        const decimals = (await contract.decimals()) || 18;
        const balance = new BigNumber(
          await contract.balanceOf(formDataObj.userAddress)
        )
          .dividedBy(new BigNumber(10).pow(decimals))
          .toNumber()
          .toLocaleString("en-US", { maximumFractionDigits: 6 });

        setBalanceInfo({
          name,
          symbol,
          decimals,
          balance
        });
      } catch (e) {
        console.error(e);
        alert(e.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert("表单填写格式错误");
    }

    console.log(formDataObj);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Token Balance</Card.Title>
        <Form
          onSubmit={async e => {
            await getTokenBalance(e);
          }}
        >
          <Form.Group controlId="tokenAddress">
            <Form.Label>Token Contract Address</Form.Label>
            <Form.Control
              name="tokenAddress"
              placeholder="Enter Token Contract Address"
            />
          </Form.Group>
          <Form.Group controlId="userAddress">
            <Form.Label>User Address</Form.Label>
            <Form.Control name="userAddress" placeholder="Enter User Address" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Search"}
          </Button>
        </Form>
        {balanceInfo && (
          <Alert variant="success" style={{ marginTop: 10 }}>
            <strong>
              {balanceInfo.name} ({balanceInfo.symbol})
            </strong>{" "}
            balance is:{" "}
            <strong>
              <code style={{ fontSize: "100%" }}>
                {balanceInfo.balance} {balanceInfo.symbol}
              </code>
            </strong>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default TokenBalance;
