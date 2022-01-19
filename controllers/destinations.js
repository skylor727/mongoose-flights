const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    //We can push subdocs into Mongoose Arrays
    new Date(req.body.arrival);
    console.log(req.body);
    flight.destinations.push(req.body);
    console.log(flight);
    //Save any changes made to the movie doc
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
