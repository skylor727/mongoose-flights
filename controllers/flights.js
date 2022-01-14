const Flight = require("../models/flight");
module.exports = {
  new: newFlight,
  index,
  create,
};

function newFlight(req, res) {
  res.render("flights/new");
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights });
  });
}

function create(req, res) {
  //checking if depart was left empty so it can be set to undefined to let the schema default kick in
  req.body.departs = req.body.departs || undefined;
  // remove any whitespace at start and end of airline
  req.body.airline.trim();
  const flight = new Flight(req.body);
  flight.save(function (err) {
    //one way to handle errors
    if (err) return res.render("flights/new");
    console.log(flight);
    //for now, redirect right back to new.ejs
    res.redirect("/flights");
  });
}
