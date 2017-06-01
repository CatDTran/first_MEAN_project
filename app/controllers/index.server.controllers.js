exports.render = function(req, res){
  //if lastVisit property exists from request, then output log to console
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit)
  }
  //set lastVisit property to the current time
  req.session.lastVisit = new Date();
  res.render('index', {
    title: 'Hello World!!!!'
  });
};
exports.blahblah = function(req, res){
  res.send('Blah blah blah');
};
