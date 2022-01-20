const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    res.render("tickets/new", { flight });
  });
}

function create(req, res) {
  console.log(req.body);
  const ticket = new Ticket(req.body);
  ticket.flight = req.params.id;
  ticket.save((err) => {
    Flight.findById(req.params.id, (err, flight, ticket) => {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
