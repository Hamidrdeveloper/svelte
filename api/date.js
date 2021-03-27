module.exports = (req, res) => {
  var date = {  
      nid: 5,
      cover: 'https://myrapfarsi.com/wp-content/uploads/2021/03/Bahram%20-%20Beshno.jpg',
      title: "Beshno ",
      path: 'https://svelte-q3mtqdyo1-hamidrdeveloper.vercel.app/api/date',
      artist: "BahramNori",
      type: 'JioSaavn',}
  res.format ({
   'text/plain': function() {
      res.send('hey');
   },

   'text/html': function() {
      res.send('hey'); 
   },

   'application/json': function() {
      res.send({ message: date });
   },

   'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
   }
});
//   res.status(200).send({ data:{date} })
};
