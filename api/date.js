module.exports = (req, res) => {
  var date = {  
      nid: 5,
      cover: 'https://myrapfarsi.com/wp-content/uploads/2021/03/Bahram%20-%20Beshno.jpg',
      title: "Beshno ",
      path: 'http://dlrapfarsi.ir/Mp3/1399/Bahram/Bahram%20-%20Beshno.mp3',
      artist: "BahramNori",
      type: 'JioSaavn',}
  res.status(200).json({ date })
};
