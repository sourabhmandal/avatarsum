const PalleteModel = require('../Models/Pallete');
const {
  uniqueNamesGenerator,
  colors,
  animals,
} = require('unique-names-generator');

const getPalleteByUser = (req, res) => {
  PalleteModel.find({ user_id: req.params['id'] })
    .then((resp) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(resp);
      return;
    })
    .catch((err) => {
      res.json({ error: err });
      return;
    });
};

const postPalleteByUser = (req, res) => {
  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
  });
  const data = new PalleteModel({
    name: req.body.name ? req.body.name : randomName,
    user_id: req.params.id,
    pallete: req.body.pallete,
  });

  data
    .save()
    .then((resp) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ msg: 'Successfully saved data' });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

const deletePalleteByUser = (req, res) => {
  PalleteModel.findByIdAndDelete(req.params['id'])
    .then((resp) => {
      if (!resp) {
        res.status(404).send();
      } else {
        res.json({ msg: 'pallete deleted' });
      }
      return;
    })
    .catch((err) => {
      res.json({ error: err });
      return;
    });
};
module.exports = { getPalleteByUser, postPalleteByUser, deletePalleteByUser };
