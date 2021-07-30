const PalleteRouter = require('express').Router();
const {
  getPalleteByUser,
  postPalleteByUser,
  deletePalleteByUser,
} = require('../Controllers/Pallete');

PalleteRouter.get('/:id', getPalleteByUser);

PalleteRouter.post('/:id', postPalleteByUser);

PalleteRouter.delete('/:id', deletePalleteByUser);

module.exports = PalleteRouter;
