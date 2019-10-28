global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackURL: config.get('CALLBACK_URL')
});


app.get('/api/photos', (req, res) => {
    unsplash.photos
        .listPhotos(1, 30)
        .then(toJson)
        .then(json => res.json(json));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));