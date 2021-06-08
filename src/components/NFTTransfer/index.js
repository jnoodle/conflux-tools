import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { default as xrc1155 } from "../../utils/abi/xrc1155";
import { Conflux, format } from "js-conflux-sdk";
import { useConfluxPortal } from "@cfxjs/react-hooks";

function NFTTransfer() {
  const conflux = new Conflux({
    url: "https://main.confluxrpc.com/v2",
    networkId: 1029
  });
  const { address, login } = useConfluxPortal();
  const [loading, setLoading] = useState(false);
  const [balanceInfo, setBalanceInfo] = useState(null);
  const [tokenIds, setTokenIds] = useState([]);
  const [operationType, setOperationType] = useState(1); // 0-get balance 1-transfer

  const handleSubmit = async e => {
    e.preventDefault();

    if (!address) {
      login();
      return false;
    }

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const contract = conflux.Contract({
      abi: xrc1155,
      address: formDataObj.tokenAddress
    });
    const contract2 = window.confluxJS.Contract({
      abi: xrc1155,
      address: formDataObj.tokenAddress
    });

    if (operationType === 0) {
      if (formDataObj.tokenAddress) {
        setTokenIds(null);
        setLoading(true);
        try {
          const ids = (await contract.tokensOf(address)) || null;
          console.log(ids);
          setTokenIds(ids);
        } catch (e) {
          console.error(e);
          alert(e.message);
        } finally {
          setLoading(false);
        }
      } else {
        alert("表单填写格式错误");
      }
    } else if (operationType === 1) {
      if (
        formDataObj.tokenAddress &&
        formDataObj.toAddress &&
        formDataObj.tokenIds &&
        formDataObj.amounts
      ) {
        setLoading(true);
        try {
          const tx = await contract2
            .safeBatchTransferFrom(
              address,
              formDataObj.toAddress,
              formDataObj.tokenIds.split(","),
              formDataObj.amounts.split(","),
              ""
            )
            .sendTransaction({
              from: address,
              gas: 200000
            });
          alert("success, tx hash: " + tx);
          console.log(tx);
        } catch (e) {
          console.error(e);
          alert(e.message);
        } finally {
          setLoading(false);
        }
      } else {
        alert("表单填写格式错误");
      }
    }

    console.log(formDataObj);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>NFT Transfer</Card.Title>
        <Form
          onSubmit={async e => {
            await handleSubmit(e);
          }}
        >
          <Form.Group controlId="tokenAddress">
            <Form.Label>NFT Token Contract Address</Form.Label>
            <Form.Control
              name="tokenAddress"
              placeholder="Enter Token Contract Address"
            />
          </Form.Group>
          <Button
            variant="info"
            size="sm"
            type="submit"
            disabled={loading}
            onClick={async () => {
              setOperationType(0);
            }}
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Get Owned TokenIds"
            )}
          </Button>
          <Alert variant="info" style={{ marginTop: 10 }}>
            Owned TokenIds:{" "}
            {tokenIds
              ? tokenIds.length > 0
                ? tokenIds.join(",")
                : "none"
              : ""}
          </Alert>
          <Form.Group controlId="toAddress">
            <Form.Label>To Address</Form.Label>
            <Form.Control name="toAddress" placeholder="Enter To Address" />
          </Form.Group>
          <Form.Group controlId="tokenIds">
            <Form.Label>TokenIds</Form.Label>
            <Form.Control
              name="tokenIds"
              placeholder="Enter TokenIds (e.g: 123,234)"
            />
          </Form.Group>
          <Form.Group controlId="amounts">
            <Form.Label>Amounts</Form.Label>
            <Form.Control
              name="amounts"
              placeholder="Enter Amounts (e.g: 1,2)"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            onClick={async () => {
              setOperationType(1);
            }}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Transfer"}
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

export default NFTTransfer;
