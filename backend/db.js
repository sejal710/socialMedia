const mongoose = require("mongoose");
require('dotenv').config();
const connection = mongoose.connect(process.env.API);
module.export = {connection};