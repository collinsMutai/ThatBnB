const express = require("express");
const Rental = require("../models/rental");

const router = express.Router();

router.get("", (req, res, next) => {
  Rental.find().then((documents) => {
    res.status(200).json(documents);
  });
});

router.post("", (req, res, next) => {
  const rental = new Rental({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  rental.save().then((createdRental) => {
    res.status(201).json({
      message: "Rental BnB added successfully",
    });
  });
});

router.get("/:id", (req, res, next) => {
  Rental.findById(req.params.id).then((rental) => {
    if (rental) {
      res.status(200).json(rental);
    } else {
      res.status(404).json({ message: "Rental BnB not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Rental.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Rental BnB deleted!" });
  });
});

module.exports = router;
