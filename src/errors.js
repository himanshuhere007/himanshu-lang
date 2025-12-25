function error(message) {
  console.error(`❌ Himanshu Error: ${message}`);
  process.exit(1);
}

module.exports = { error };
