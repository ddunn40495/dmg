// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Tire = require("../models/tire");
const seeds = require("../models/seed");
// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//ALL TIRES
router.get("/tires", (req, res) => {
  Tire.find({}, (err, tires) => {
    res.send(tires);
  });
});
/* ===========
GET ROUTE
============= */
//

/* ===========
PATCH ROUTE
============= */
//UPDATE POST
router.patch("/:tireId", (req, res) => {
  Tire.findByIdAndUpdate(
    req.params.tireId,
    req.body,
    { new: true, omitUndefined: false },
    (err, updatedTire) => {
      console.log(
        `This is the tire you updated ======================${updatedTire}==============================================`
      );
    }
  );
});

/* ===========
SEED ROUTE
============= */
// router.get("/seed", (req, res) => {
//   Tire.insertMany(seeds, (err, tires) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(tires);
//   });
// });

module.exports = router;
