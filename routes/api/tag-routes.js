const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
  include:[
    {mode:Product, through:ProductTag}
  ]
}).then((tags)=>res.json(tags))
.catch((err)=>{
  res.status(500).json(err)
  console.error(err)
})
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create(req.body);
    res.status(200).json (tagdata);
  } catch (err) {
    res.status(400).json(err);
  }
 

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    res.status(200).json(tag);
  }) .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
