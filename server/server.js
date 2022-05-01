const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

/**
 * Filter out the unnecessary information from flickr API
 */
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
    .catch((err) => {
      res.status(500);
      res.render('error', { error: err });
    });
});

app.listen(process.env.PORT, () => { console.log(`Local: http://localhost:${process.env.PORT}`); });
