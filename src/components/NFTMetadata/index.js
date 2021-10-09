import React, { useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import xrc721 from "../../utils/abi/xrc721";
import { Conflux } from "js-conflux-sdk";

function NFTMetadata() {
  const conflux = new Conflux({
    url: "https://main.confluxrpc.com/v2",
    networkId: 1029
  });
  const [loading, setLoading] = useState(false);
  const [NFTInfo, setNFTInfo] = useState(null);

  const getNFTMetadata = async e => {
    e.preventDefault();
    setNFTInfo(null);

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    if (formDataObj.tokenAddress && formDataObj.tokenId) {
      setLoading(true);
      try {
        const contract = conflux.Contract({
          abi: xrc721.abi,
          address: formDataObj.tokenAddress
        });
        const name = (await contract.name()) || "Unknown";
        console.log(contract.tokenURI);
        const uri = contract.tokenURI
          ? await contract.tokenURI(formDataObj.tokenId)
          : await contract.uri(formDataObj.tokenId);

        setNFTInfo({
          name,
          uri
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
        <Card.Title>Get NFT Metadata</Card.Title>
        <Form
          onSubmit={async e => {
            await getNFTMetadata(e);
          }}
        >
          <Form.Group controlId="tokenAddress">
            <Form.Label>NFT Contract Address</Form.Label>
            <Form.Control
              name="tokenAddress"
              placeholder="Enter NFT Contract Address"
            />
          </Form.Group>
          <Form.Group controlId="tokenId">
            <Form.Label>TokenId</Form.Label>
            <Form.Control name="tokenId" placeholder="Enter TokenId" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Get"}
          </Button>
        </Form>
        {NFTInfo && (
          <Alert variant="success" style={{ marginTop: 10 }}>
            <strong>{NFTInfo.name}</strong> Metadata is:{" "}
            <p>
              <strong>
                <code style={{ fontSize: "100%" }}>{NFTInfo.uri}</code>
              </strong>
            </p>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default NFTMetadata;
