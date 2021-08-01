const os = require("os");
console.log("Operation system: ", os.platform());
console.log("Proccess arch: ", os.arch());
console.log("Info about CPU: ", os.cpus());
console.log("Free memory: ", os.freemem());
console.log("All memory: ", os.totalmem());
console.log("Home directory: ", os.homedir());
console.log("System active: ", os.uptime());
