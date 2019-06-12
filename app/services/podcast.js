const config    = require('config');
const Podcast   = require('podcast');
// import Podcast from 'podcast';

module.exports.GetFeed = function()
{
    const feed = new Podcast(config.podcast);

    /* loop over data and add to feed */
    feed.addItem({
        title:  'item title',
        description: 'use this for the content. It can include html.',
        url: 'http://example.com/article4?this&that', // link to the item
        guid: '1123', // optional - defaults to url
        categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
        author: 'Guest Author', // optional - defaults to feed author property
        date: 'May 27, 2012', // any format that js Date can parse.
        lat: 33.417974, //optional latitude field for GeoRSS
        long: -111.933231, //optional longitude field for GeoRSS
        enclosure : {url:'...', file:'public/files/look at this dude.mp3'}, // optional enclosure
        itunesAuthor: 'Max Nowack',
        itunesExplicit: false,
        itunesSubtitle: 'I am a sub title',
        itunesSummary: 'I am a summary',
        itunesDuration: 12345,
        itunesKeywords: ['javascript','podcast']
    });

    return feed.buildXml();
}