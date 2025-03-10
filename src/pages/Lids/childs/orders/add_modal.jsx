import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Framer Motion import

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  width: 530,
  height: "133vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 0,
  overflowY: "auto",
};

const modalVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 1 } },
};

const Add_modal = ({ is_add_modal_open, set_is_add_modal_open }) => {
  return (
    <Modal
      open={is_add_modal_open}
      onClose={() => set_is_add_modal_open(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflow: "hidden" }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate={is_add_modal_open ? "visible" : "hidden"}
        exit="exit"
      >
        <Box sx={style}>
          <div>
            <p></p>
          </div>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default Add_modal;
