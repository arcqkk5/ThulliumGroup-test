import { CardMedia, Backdrop, Box, Modal, Fade } from "@mui/material";
import "./modalWindow.scss";

const ModalWindow = ({ open, handleClose, url, handleOpen }) => {
  return (
    <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
      <Fade in={open}>
        <Box className="modal__window">
          <CardMedia
            component="img"
            height="600"
            width="600"
            image={url}
            alt="photo_modal"
            onClick={handleOpen}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
