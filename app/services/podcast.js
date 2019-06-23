const config    = require('config');
const Podcast   = require('podcast');
// import Podcast from 'podcast';

module.exports.GetFeed = function()
{
    const feed = new Podcast(config.podcast);

    /* loop over data and add to feed */
    feed.addItem({
        title:  'Relacionamento nos tempos de escola',
        description: 'Como acontenciam (ou não) os namoricos no nosso tempo de escola',
        url: '', // link to the item
        // guid: '1123', // optional - defaults to url
        categories: ['Escola','Relacionamento','Namoro','Humor'], // optional - array of item categories
        // author: 'Guest Author', // optional - defaults to feed author property
        date: 'Jun 24, 2019', // any format that js Date can parse.
        // lat: 33.417974, //optional latitude field for GeoRSS
        // long: -111.933231, //optional longitude field for GeoRSS
        enclosure : {url:'...', file:'public/files/1.mp3'}, // optional enclosure
        itunesAuthor: 'Bar do Waldemar',
        itunesExplicit: true,
        itunesSubtitle: 'Como acontenciam (ou não) os namoricos no nosso tempo de escola',
        itunesSummary: 'Como acontenciam (ou não) os namoricos no nosso tempo de escola',
        itunesDuration: 2784,
        itunesKeywords: ['Escola','Relacionamento','Namoro','Humor', 'Poscast']
    });
    
    return feed.buildXml();
}