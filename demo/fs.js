const fs = require("fs");
const path = require("path");
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder has been created");
// });

const filePath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filePath, "Some great content!!", (e) => {
//   if (e) {
//     throw e;
//   }
//   console.log("File has been created");
// });
// fs.appendFile(filePath, "Another content", (e) => {
//   if (e) {
//     throw e;
//   }
//   console.log("File has been created");
// });

fs.readFile(filePath, "UTF-8", (e, content) => {
  if (e) {
    throw e;
  }
  console.log(content);
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());
});
