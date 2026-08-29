const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/tripnova";

async function main() {
  await mongoose.connect(MONGO_URL);
  await Review.deleteMany({});
  await Listing.updateMany({}, { $set: { reviews: [] } });
  console.log("All old reviews deleted successfully!");
  mongoose.connection.close();
}

main();

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const categories = [
  "Trending",
  "Iconic Cities",
  "Mountains",
  "Castles",
  "Camping",
  "Farms",
  "Arctic"
];


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj, index) => ({...obj, owner:'6a915dad2ff4f11a36c82d5f' , category: categories[index % categories.length]}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();