const feedread = require('davefeedread');
const utils = require('daveutils');

const myfeed = 'https://www.inoreader.com/stream/user/1006530244/tag/user-favorites'

feedread.parseUrl(myfeed,10,function(err,res){
    if(err) throw err;
    console.log(JSON.stringify(res.head))
    for(var item in res.items){
        console.log(utils.getRandomSnarkySlogan());
        console.log(res.items[item].title);
        console.log(res.items[item].pubdate);
        console.log(res.items[item].link);
        console.log(res.items[item].source.title);
        // console.log(utils.stripMarkup(res.items[item].description));
        console.log('========================');
    }
})
