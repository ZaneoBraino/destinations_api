const { Module } = require("module");

const destinations = [
  {
    destination: "Eiffle Tower",
    location: "Paris_france",
  },
];

const cities = {
  Paris_france: {
    name: "Paris",
    country: "France",
  },
};
//export db
module.exports.destinations = destinations;
module.exports.cities = cities;
