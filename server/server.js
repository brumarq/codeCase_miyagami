const express = require('express');
const axios = require('axios');

const app = express();

function formatFlickImagesObject(flickrImages) {
  const newFlickrImages = [];

  flickrImages.forEach((image) => {
    const flickrImage = {};

    flickrImage.title = image.title;
    flickrImage.image = image.media.m;
    flickrImage.publishDate = image.published;
    flickrImage.author = image.author;

    newFlickrImages.push(flickrImage);
  });

  return newFlickrImages;
}

app.get('/api/images', (req, res) => {
  const { tags } = req.query;

  axios
    .get(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`)
    .then((answer) => {
      const jsonFlickrImagesData = answer.data.items;

      res.json(formatFlickImagesObject(jsonFlickrImagesData));
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(5001, () => { console.log('Local: http://localhost:5001'); });
