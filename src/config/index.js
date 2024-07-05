// const dotEnv = require("dotenv");

// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   console.log(`Loading config from ${configFile}`);
//   dotEnv.config({ path: configFile });
// } else {
//   dotEnv.config();
// }
// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// module.exports = {
//   PORT: process.env.PORT,
//   DB_URL: process.env.MONGODB_URI,
//   APP_SECRET: process.env.APP_SECRET,
// };

const dotEnv = require("dotenv");

// Set a default value for NODE_ENV if it is not defined
const nodeEnv = process.env.NODE_ENV || "dev";
// const configFile = `./.env.${nodeEnv}`;
const configFile = "./.env";

console.log(`Loading config from ${configFile}`);
dotEnv.config({ path: configFile });

console.log("MONGODB_URI:", process.env.MONGODB_URI);

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
