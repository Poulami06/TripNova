if (process.env.NODE_ENV != "production") {
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
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
    initData.data = initData.data.map((obj, index) => ({
        ...obj,
        owner: "6a915dad2ff4f11a36c82d5f",
        category: categories[index % categories.length]
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};