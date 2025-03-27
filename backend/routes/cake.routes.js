const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");
const { addCake, getCakes, searchCakes, viewCake, getCakesByCategory } = require("../controller/cake.controller");
 
//route for adding cakes
router.post("/add", upload.single("image"), addCake);


router.get("/all", getCakes);//route for get all the cakes
router.get("/search", searchCakes); //route for searching cake
router.get("/:cakeId", viewCake);  // Route to view a specific cake by its ID 
router.get('/category/:categoryName',getCakesByCategory);  // Route to get cakes by category
module.exports = router;
