import { Box, TextField } from "@mui/material";
import { useMemo, useState, useImperativeHandle } from "react";
import { useAccount, useNetwork, useSigner } from "wagmi";
import ButtonCreateWill from "../ButtonCreateWill";
import { getAddressLink } from "../../utils/etherscanService";

const CreateWill = ({ onDeployed }) => {
  const { data: signer } = useSigner();
  const { activeChain } = useNetwork();
  const { data: account } = useAccount();
  const { address } = useAccount();

  const ownerBlockscanAddress = useMemo(
    () => getAddressLink(activeChain, account?.address),
    [activeChain, account?.address]
  );

  const [owner, setOwner] = useState(account?.address);
  const [guardian, setGuardian] = useState("Guardian");
  const [expiration, setExpiration] = useState("333");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      gap={3}
    >
      <TextField
        value={owner}
        label="Owner"
        onChange={(e) => setOwner(e.target.value)}
      />
      <TextField
        value={guardian}
        label="Guardian"
        onChange={(e) => setGuardian(e.target.value)}
      />
      <TextField
        value={expiration}
        label="Expiration"
        onChange={(e) => setExpiration(e.target.value)}
      />
      <ButtonCreateWill onDeployed={onDeployed} owner={owner} guardian={guardian} expiration={expiration}/>
    </Box>
  );
};

export default CreateWill;
