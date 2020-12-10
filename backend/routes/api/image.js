const router = require("express").Router();
let Image = require("../../models/image.model");


//route that returns all images
router.route("/images").get((req, res) => {
    Image.find()
        .then(images => {
            console.log("found n." +images.length+ " images");
            res.json(images);
        })
        .catch(err => res.status(400).json("Error: " +err));
})


//Route that store a new image
//@route POST api/image/new
router.route("/new").post((req, res) => {
    console.log("getting from body [name]: " +req.body.name);
    console.log("getting from body [file]: " +req.files);
    const {name, files} = req.body;
    if (!name || !req.files) {
        return res.status(400).send("Error inserting new image, Name or File not valid!")
    }
    console.log("name=" +name+ ", file=" +files);
    const newImage = new Image({
        name: req.body.name
    });

    //extracting data and mimetype
    const {data, mimetype} = req.files.file;
    newImage.file.Data = data;
    newImage.file.ContentType = mimetype;

    //saving new image
    newImage.save()
        .then(image => res.json(image))
        .catch(err => res.status(400).send("Error saving new image: " + err))
});

/*
router.route("/:id").get((res, req) => {
    const imageId = req.params.id;
    Image.findById(imageId, (err, imageFound) => {
        if (err) {
            return console.log("Error while finding by ID [" +imageId+"]: " +err);
        }
        //image already existing
        if (!imageFound) {
            return res.sendStatus(400)
        }
        res.json(imageFound);
    })
})
*/


module.exports = router;