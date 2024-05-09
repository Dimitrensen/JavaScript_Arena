const fs = require('fs');
const { exec } = require('child_process');

// Function to read a JSON file
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}

// Function to save a JSON object to a file
function saveJsonToFile(jsonData, filePath) {
  try {
    const data = JSON.stringify(jsonData, null, 2); // null and 2 are for formatting purposes
    fs.writeFileSync(filePath, data);
    console.log('File successfully saved:', filePath);
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// Function to run jq and update JSON
function runJq(base, extension) {
  const jqCommand = `jq --argjson base '${JSON.stringify(base)}' '{store, data: { point: $base.a }, price: $base.d, location: { toc: $base.b.c }, target: { f: $base.b }}'`;
  exec(jqCommand, { input: JSON.stringify(extension) }, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing jq:', error);
      return;
    }
    if (stderr) {
      console.error('Error stderr:', stderr);
      return;
    }
    const result = JSON.parse(stdout);
    saveJsonToFile(result, 'result.json');
  });
}

// Main process
const base = readJsonFile('base.json');
const extension = readJsonFile('extension.json');

if (base && extension) {
  runJq(base, extension);
}