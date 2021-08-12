const upload = require("../middleware/fileupload");
const fs = require("fs");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Choose a file to upload" });
    }

    res.status(200).send({
      message: "File uploaded successfully: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: `Error occured: ${err}`,
    });
  }
};

const showFiles = (req, res) => {
    const fileName = req.params.name;
    const path = __basedir + `/public/uploads/${fileName}`;
    res.sendFile(path)
    
};

module.exports = { uploadFile, showFiles };
