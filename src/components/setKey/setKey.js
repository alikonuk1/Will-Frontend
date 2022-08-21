import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo, useState } from "react";
import abi from "./abi.json";
import PendingTxModal from "../PendingTxModal";
import ConfirmedTxModal from "../ConfirmedTxModal";
import { getAddressLink } from "../../utils/etherscanService";
import { useAccount, useContract, useNetwork, useSigner } from "wagmi";

const setKey = ({ contractAddress }) => {
  const { data: signer } = useSigner();
  const { activeChain } = useNetwork();
  const { data: account } = useAccount();
  const [recipient, setRecipient] = useState(account?.address);

  const [tokenId, setTokenId] = useState();
  const [pendingTx, setPendingTx] = useState();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const contractBlockscanAddress = useMemo(
    () => getAddressLink(activeChain, contractAddress),
    [activeChain, contractAddress]
  );
  const ownerBlockscanAddress = useMemo(
    () => getAddressLink(activeChain, account?.address),
    [activeChain, account]
  );

  const handleReceipt = (receipt) => {
    const newTokenId = receipt.events[0].args.tokenId.toString();
    setTokenId(newTokenId);
    setPendingTx(false);
  };

  const [_key, setKey] = useState("Private Key");

  const setkey = async () => {
    setPendingTx("Sign transaction setKey.");
    const tx = await contract.setKey(_key);
    setPendingTx("Seting a Key");
    const receipt = await tx.wait();
    handleReceipt(receipt);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" align="center">
        Key Setted!
      </Typography>
      <h3>
        Will contract (owned by{" "}
        <a target="__blank" href={ownerBlockscanAddress}>
          you
        </a>
        ):{" "}
        <a target="__blank" href={contractBlockscanAddress}>
          {contractAddress}
        </a>
      </h3>
      <h1>Set a key for your will</h1>

      <TextField
        value={_key}
        label="Set key"
        onChange={(e) => setKey(e.target.value)}
      />

      <Button onClick={setkey}>Set Key</Button>

      <ConfirmedTxModal tokenId={tokenId} contractAddress={contractAddress} />
      <PendingTxModal pendingTx={pendingTx} />
    </Box>
  );
};

export default setKey;
