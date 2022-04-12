/** @format */

const { exec, execSync } = require('child_process');
const fs = require('fs');
const folderName = process.argv[2] || 'newProject';
// set file location for creation with the directory var. this ensures the file is created on desktop
// instead of wherever I am in the terminal.
const directory = '/Users/reedwhetstone/Desktop/';

try {
  execSync(`cd ${directory}`);
  // command structure is $ node boilerplate.js "TYPE_FOLDERNAME_HERE"
  // currently only set to accept a single word folder name. If you'd like multiple words simply type_folder_like_this
  // if you do not specify, the default is folder name "New_Proj"
  fs.mkdirSync(`${directory}${folderName}`);
  // set to call bootstrapCDN, links app.js, style.css
  fs.writeFileSync(
    `${directory}${folderName}/index.html`,
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> -->  
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Hello World</h1>

    <script src="app.js"></script>
</body>

</html>`
  );
  fs.writeFileSync(`${directory}${folderName}/app.js`, '');
  fs.writeFileSync(
    `${directory}${folderName}/style.css`,
    `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}`
  );
  // executes vscode to open the new folder and contents. must have vscode set up to work with terminal.
  execSync(`code ${directory}${folderName}`);
} catch (e) {
  console.log('SOMETHING WENT WRONG!');
  console.log(e);
}
