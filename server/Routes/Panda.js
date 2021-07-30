const PandaRouter = require('express').Router();
const {
  getPandaByUser,
  postPandaByUser,
  deletePandaByUser,
} = require('../Controllers/Panda');

PandaRouter.get('/:id', getPandaByUser);

PandaRouter.post('/:id', postPandaByUser);

PandaRouter.delete('/:id', deletePandaByUser);

module.exports = PandaRouter;
