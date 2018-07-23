const fs = require('fs');
const cheerio = require('cheerio');

const $ = cheerio.load(fs.readFileSync('./amazon_profile.htm'));

const optionCount = $('option').length;
console.log(optionCount)

const imgCount = $('img').length;
console.log(imgCount)

const profileAtCountentCount = $('.profile-at-content').length;
console.log(profileAtCountentCount);