import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Modal from "../Modal";

const ConfirmedTxModal = ({ owner, guardian, expiration, contractAddress }) => {
  const [open, setOpen] = useState();

  useEffect(() => {
    setOpen(contractAddress && owner && guardian && expiration);
  }, [owner, guardian, expiration, contractAddress]);

  return (
    <Modal open={open} handleClose={() => setOpen(false)}>
      <Typography variant="h3">Key Set!</Typography>
    </Modal>
  );
};

export default ConfirmedTxModal;
