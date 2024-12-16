import React, { useState } from 'react';
import icon from '../assets/react.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 4,
  outline: 'none',
};

function Card({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex border-b-1 p-2 border-b-white gap-5  w-full">
      <div className="text-white  border  h-[100px] flex">
        <img src={data.Poster} width={100}></img>
      </div>
      <div className="flex text-white flex-col  gap-4">
        <h1 className="text-sm font-semibold">{data.Title}</h1>
        <p className="text-sm font-semibold">📅 {data.Year}</p>
        <button
          className="bg-indigo-700 hover:border transition-all ease-in-out delay-150 hover:border-indigo-700 hover:bg-white hover:text-black text-xs font-semibold w-20 rounded-md py-2"
          onClick={handleOpen}
        >
          Details
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={data.Poster} width={200} />
            <Typography
              id="modal-modal-title"
              sx={{ mt: 0.5, fontWeight: 500 }}
              variant="p"
              component="h5"
            >
              Movie Name : {data.Title}
            </Typography>
            <Typography
              id="modal-modal-description"
              component="h5"
              variant="p"
              sx={{ mt: 0.5, fontWeight: 500 }}
            >
              Release Year : {data.Year}
            </Typography>
            <Typography
              id="modal-modal-description"
              component="h5"
              variant="p"
              sx={{ mt: 0.5, fontWeight: 500 }}
            >
              Type : {data.Type}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Card;
