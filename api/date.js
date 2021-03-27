module.exports = (req, res) => {
  const date = {  
      nid: 5,
      cover: 'https://myrapfarsi.com/wp-content/uploads/2021/03/Bahram%20-%20Beshno.jpg',
      title: "Beshno ",
      path: 'https://svelte-q3mtqdyo1-hamidrdeveloper.vercel.app/api/date',
      artist: "Bahram ",
      type: 'JioSaavn',}
  res.status(200).send(date);
};
