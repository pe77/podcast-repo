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
        // guid: '1', // optional - defaults to url
        // categories: ['Escola','Relacionamento','Namoro','Humor'], // optional - array of item categories
        // author: 'Guest Author', // optional - defaults to feed author property
        date: 'Jun 24, 2019', // any format that js Date can parse.
        // lat: 33.417974, //optional latitude field for GeoRSS
        // long: -111.933231, //optional longitude field for GeoRSS
        enclosure : {url:'http://162.243.169.239:3033/files/1.mp3', file:'public/files/1.mp3'}, // optional enclosure
        itunesAuthor: 'Bar do Waldemar',
        itunesExplicit: true,
        itunesSubtitle: 'Como acontenciam (ou não) os namoricos no nosso tempo de escola',
        itunesSummary: 'Como acontenciam (ou não) os namoricos no nosso tempo de escola',
        itunesDuration: 2784,
        // itunesKeywords: ['Escola','Relacionamento','Namoro','Humor', 'Poscast'],
        itunesImage: "http://162.243.169.239:3033/files/1.jpg",
        image: "http://162.243.169.239:3033/files/1.jpg"
        // customElements: [{'itunes:category': {_attr:{text:"Comedy"}}}]
    });

    /* loop over data and add to feed */
    feed.addItem({
        title:  'O que é bonito?',
        description: 'Uma discussão ""saudável"" sobre o que é bonito. Como julgamos o que achamos bonito? Até onde é subjetivo ou objetivo? Ouça e não chegue a conclusão alguma!',
        url: '', // link to the item
        // guid: '1', // optional - defaults to url
        // categories: ['Escola','Relacionamento','Namoro','Humor'], // optional - array of item categories
        // author: 'Guest Author', // optional - defaults to feed author property
        date: 'Jun 27, 2019', // any format that js Date can parse.
        // lat: 33.417974, //optional latitude field for GeoRSS
        // long: -111.933231, //optional longitude field for GeoRSS
        enclosure : {url:'http://162.243.169.239:3033/files/2.mp3', file:'public/files/2.mp3'}, // optional enclosure
        itunesAuthor: 'Bar do Waldemar',
        itunesExplicit: true,
        itunesSubtitle: 'Uma discussão ""saudável"" sobre o que é bonito',
        itunesSummary: 'Uma discussão ""saudável"" sobre o que é bonito',
        itunesDuration: 2784,
        // itunesKeywords: ['Escola','Relacionamento','Namoro','Humor', 'Poscast'],
        itunesImage: "http://162.243.169.239:3033/files/2.jpg",
        image: "http://162.243.169.239:3033/files/2.jpg"
        // customElements: [{'itunes:category': {_attr:{text:"Comedy"}}}]
    });

        /* loop over data and add to feed */
        feed.addItem({
            title:  'O que é bonito?',
            description: 'Uma discussão ""saudável"" sobre o que é bonito. Como julgamos o que achamos bonito? Até onde é subjetivo ou objetivo? Ouça e não chegue a conclusão alguma!',
            url: '', // link to the item
            // guid: '1', // optional - defaults to url
            // categories: ['Escola','Relacionamento','Namoro','Humor'], // optional - array of item categories
            // author: 'Guest Author', // optional - defaults to feed author property
            date: 'Jun 27, 2019', // any format that js Date can parse.
            // lat: 33.417974, //optional latitude field for GeoRSS
            // long: -111.933231, //optional longitude field for GeoRSS
            enclosure : {url:'http://162.243.169.239:3033/files/2.mp3', file:'public/files/2.mp3'}, // optional enclosure
            itunesAuthor: 'Bar do Waldemar',
            itunesExplicit: true,
            itunesSubtitle: 'Uma discussão ""saudável"" sobre o que é bonito',
            itunesSummary: 'Uma discussão ""saudável"" sobre o que é bonito',
            itunesDuration: 2784,
            // itunesKeywords: ['Escola','Relacionamento','Namoro','Humor', 'Poscast'],
            itunesImage: "http://162.243.169.239:3033/files/2.jpg",
            image: "http://162.243.169.239:3033/files/2.jpg"
            // customElements: [{'itunes:category': {_attr:{text:"Comedy"}}}]
        });

    // https://github.com/dylang/node-xml

    var xml = feed.buildXml();

    // '</itunes:owner>';
    xml = xml.replace("</itunes:owner>", "</itunes:owner><itunes:category text=\"Comedy\"/>");

//    xml = xml.replace("</copyright>", "</copyright><language><![CDATA[pt_BR]]></language>");

    // </copyright><language><![CDATA[pt_BR]]></language>


    return xml;
    
    return feed.buildXml();
}
