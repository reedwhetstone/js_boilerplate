/** @format */

const { exec, execSync } = require("child_process");
const fs = require("fs");
const folderName = process.argv[2] || "New_Proj";

try {
  // set file location for creation. this ensures the file is created on desktop
  // instead of wherever I am in the terminal.
  execSync(`cd /Users/reedwhetstone/Desktop`);
  // command structure is $ node boilerplate.js "TYPE_FOLDERNAME_HERE"
  // currently only set to accept a single word folder name. If you'd like multiple words simply type_folder_like_this
  // if you do not specify, the defualt is folder name "New_Proj"
  fs.mkdirSync(folderName);
  // set to call bootstrapCDN, links app.js, style.css
  fs.writeFileSync(
    `${folderName}/index.html`,
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container mx-auto my-2">
        <h1 class="text-center">HELLO WORLD</h1>
    </div>

    <script src="app.js"></script>
</body>

</html>`
  );
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
  // executes vscode to open the new folder and contents. must have vscode set up to work with terminal.
  execSync(`code ${folderName}`);
} catch (e) {
  console.log("SOMETHING WENT WRONG!");
  console.log(e);
}