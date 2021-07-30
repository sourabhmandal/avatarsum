const PandaModel = require('../Models/Panda');
const {
  uniqueNamesGenerator,
  colors,
  animals,
} = require('unique-names-generator');
const getPandaByUser = (req, res) => {
  PandaModel.find({ user_id: req.params['id'] })
    .then((resp) => {
      res.json(resp);
      return;
    })
    .catch((err) => {
      res.json({ error: err });
      return;
    });
};

const postPandaByUser = (req, res) => {
  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
  });
  const data = new PandaModel({
    name: randomName,
    user_id: req.params.id,
    panda: req.body,
  });
  data
    .save()
    .then((resp) => {
      res.json({ msg: 'Successfully saved data' });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

const deletePandaByUser = (req, res) => {
  console.log(req.params['id']);
  PandaModel.findByIdAndDelete(req.params['id'])
    .then((resp) => {
      console.log(resp);
      res.json({ msg: 'Panda deleted' });
      return;
    })
    .catch((err) => {
      res.json({ error: err });
      return;
    });
};
module.exports = { getPandaByUser, postPandaByUser, deletePandaByUser };
