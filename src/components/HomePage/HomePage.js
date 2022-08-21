import styles from "../../../styles/Home.module.css";
import setKey from "../setKey";
import { useState } from "react";
import { Box } from "@mui/system";
import CreateWill from "../CreateWill";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [contractAddress, setContractAddress] = useState();

  return (
    <>
      <h1 className={styles.title}>Will</h1>
      <p className={styles.desc}>Smth smth</p>

      {contractAddress ? (
        <DeployWill contractAddress={contractAddress} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          p={3}
          gap={3}
        >
          <Typography variant="h5" color="#000000">
            Get started: deploy your Will contract.
          </Typography>
          <CreateWill onDeployed={setContractAddress} />
        </Box>
      )}
    </>
  );
};

export default HomePage;
