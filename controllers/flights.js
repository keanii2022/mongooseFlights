const Flight = require('../models/flight')
 const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    addToDetails
    
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
}

function newFlight (req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    //   console.log(req.body)
      const flight = new Flight(req.body);
    //   console.log(flight)
      flight.save(function(err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        // console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
      });
}

function addToDetails(req,res) {
  Flight.findById(req.params.id,function(err,flight) {
    flight.ticket.push(req.body.ticketId)
    flight.save(function(err) {
    res.redirect(`/flights/${flight._id}`)
  })
})
}
  
