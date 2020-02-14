

/**
 * Configuration variables
 * Comment and uncomment them based on the environment
 */


/**
 * Development environment
 */
const PORT = "7000";
const SERVER_URL = `http://localhost:${PORT}/`;


/**
 * Production environment
 */
// const PORT = "";
// const SERVER_URL = ``;
// const MONGODB_URL = "";



module.exports = {
	PORT,
	SERVER_URL
};