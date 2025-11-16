// [Q1]
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
ipRex = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;

console.log(ip.match(ipRex));
// =========================================

// [Q2]
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRex = /Os\d*O/ig;

console.log(specialNames.match(specialNamesRex));
// Output
// ['Os10O', 'OsO', 'Os100O']
// =========================================

// [Q3]
let phone = "+(995)-123 (4567)";
let phoneRex = /\+\(\d{3}\)-\d{3} \(\d{4}\)/ig;

console.log(phone.match(phoneRex));
// =========================================


// [Q4]
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//   https?:\/\/           => Matches "http://" or "https://"
//   (?:[-\w]+\.)?         => Optional subdomain like "www." or "api." (non-capturing group)
//   ([-\w]+)              => Captures the main domain name
//   \.                    => Matches the dot before the extension
//   \w+                   => Matches the main extension (com, net, org, etc.)
//   (?:\.\w+)?            => Optional second extension like ".co.uk" (non-capturing group)
//   \/?                   => Optional trailing slash
//   .*                    => Matches anything after the domain (path, query, etc.)
// /i;                     => i = case-insensitive matching
// =========================================


// [Q5]
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/| - | )\d{2}(\/| - | )\d{2,4}/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
// =========================================


// [Q6]
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /^(https?:\/\/)?([\w-]+\.)?[\w-]+\.\w+(:\d+)?(\/.*)?$/i; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
// =========================================
