const reader = require ("davereader");
const utils = require ("daveutils");
const fs = require ("fs");

const readerDataFolder = "./";
const myOutputFolder = "_draft/";

var Handlebars = require('handlebars');
var moment = require ("moment");

var config = {
	flHttpEnabled: false,
	flWebSocketEnabled: false,
  ctMinutesBetwBuilds: 0,
  flAddItemsFromNewSubs: false,
	flRequestCloudNotify: false,
	flDownloadPodcasts: false
	};

var feeds = [
	"https://feeds.pinboard.in/rss/u:frankmeeuwsen/t:microlink/",
	"https://www.inoreader.com/stream/user/1006530244/tag/user-broadcasted"
	];

  var source = "---\r\n"+
              "layout: post\r\n"+
              "title: {{title}}\r\n"+
              "date: "+moment().format()+"\r\n"+
              "published: true\r\n"+
              "link: {{link}}\r\n"+
              "---\r\n"+
              "{{body}}";

function writeFeedsList (callback) {
	var f = readerDataFolder + "lists/feeds.json", jsontext = utils.jsonStringify (feeds);
	utils.sureFilePath (f, function () {
		fs.writeFile (f, jsontext, function (err) {
			if (err) {
				console.log ("writeFeedsList: err.message == " + err.message);
				}
			else {
				callback ();
				}
			});
		});
	}

function createDraft(item){
  var data = { "title": item.title, "link": item.link,
               "body": item.description};

  var template = Handlebars.compile(source);
  var result = template(data);

  var f = myOutputFolder + moment().format('YYYY-MM-DD')+'-'+item.id+'.md';
  utils.sureFilePath (f, function () {
  	fs.writeFile (f, result, function(err){
         if (err) return console.log(err);
      })
  	});
  }

function startup () {
	config.newItemCallback = function (urlfeed, itemFromParser, item) { //called for each new item
    createDraft(item);
		};
	writeFeedsList (function () {
		reader.init (config);
		});
	}
startup ();
