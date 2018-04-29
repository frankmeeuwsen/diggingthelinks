# Welcome to Digging The Links

This project is a true "[eating your own dogfood](https://indieweb.org/selfdogfood)" project for me. Here's the bulleted version of the story

* I have [my own blog](http://diggingthedigital.com/) which runs on Jekyll
* I use [Pinboard](https://pinboard.in/u:frankmeeuwsen/t:microlink/) to save links and bookmark interesting articles
* I wanted to combine the two. Make a linkpost on specific times, by adding links to Pinboard
* I wanted to learn NodeJS as a hobby. 

So here's a first version of _part_ of the solution. What this script does is reading the RSS feeds in the variable ```feeds``` and create a Jekyll-draft everytime a new item arrives. It's still very rough around the edges, there's hardly any error detection and it's mainly to scratch my own itch. 

Feel free to fork, improve and share. Blog on!