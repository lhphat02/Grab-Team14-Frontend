const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files in a directory
function findFilesInDirectory(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      findFilesInDirectory(filepath, filelist);
    } else if (filepath.endsWith('.ts') || filepath.endsWith('.tsx')) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

// Function to add //tsc_ignore at the head of the file
function addTscIgnoreToFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const tscIgnoreComment = '// @ts-nocheck \n';
  if (!fileContent.startsWith(tscIgnoreComment)) {
    fs.writeFileSync(filePath, tscIgnoreComment + fileContent, 'utf8');
    console.log('Added //tsc_ignore to ${filePath}');
  } else {
    console.log('//tsc_ignore already present in ${filePath}');
  }
}

// Main function to process the directory
function processDirectory(dir) {
  const files = findFilesInDirectory(dir);
  files.forEach((file) => {
    addTscIgnoreToFile(file);
  });
}

// Replace 'your_directory_path' with the path to your directory
const directoryPath = 'src';
processDirectory(directoryPath);
