const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flightForm.controller"); 

router.post("/create", flightCtrl.createFlight);  
//http://localhost:3000/api/listing/create

// router.get('/posted/:id',listingCtrl.getListingsById)
// //http://localhost:3000/api/listing/posted/:id

// router.get('/available', listingCtrl.getAvailableListings);
// //http://localhost:3000/api/listing/available

// router.get("/:id", listingCtrl.getUserListings); 
// //http://localhost:3000/api/listing/:id

// router.get("/", listingCtrl.getListings); 
// //http://localhost:3000/api/listing/

// router.delete('/delete/:id', listingCtrl.deleteListing);
// //http://localhost:3000/api/listing/delete/id

// router.put('/update/:id', listingCtrl.updateListing);
// //http://localhost:3000/api/listing/update/:id

// router.put('/rent/:id', listingCtrl.updateAvailability);
// //http://localhost:3000/api/listing/rent/id



module.exports = router;
