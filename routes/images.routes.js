const express = require("express");
const router = express.Router();
const upload = require("../multer/multer.mw");
const imgCtrl = require("../controllers/images.controller");

router.post("/:holidayId", upload.array("images", 10), imgCtrl.uploadImages);

router.delete("/:imageId", imgCtrl.deleteImage);

router.get("/:holidayId", imgCtrl.getImages);

module.exports = router;
