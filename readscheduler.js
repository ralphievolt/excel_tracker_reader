const Bree = require("bree");
const { read } = require("xlsx");

const jobs = [
  // { name: "read-jobs", interval: "every 1 hours", path: "./read.js" },
  {
    name: "read-jobs",
    interval: "every 30 seconds",
    path: "./read.js",
  },
];
const bree = new Bree({
  jobs,
});
bree.start();
