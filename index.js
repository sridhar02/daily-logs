const fs = require("fs");
const path = require("path");

// Get current date in DD-MM format
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const fileName = `${day}-${month}-test.md`;

// Define the log template
const logTemplate = `
# Daily Log - ${day}-${month}

## Tasks Completed
- 

## Challenges Faced
- 

## Learnings
- 

## Interesting Links
- [Link Text](URL)
`;

// Define the directory to save the file
const logsDir = path.join(__dirname, "logs");

// Create the directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Check if the file already exists
const filePath = path.join(logsDir, fileName);
if (fs.existsSync(filePath)) {
  console.log(`File ${fileName} already exists.`);
} else {
  // Write the template to the file
  fs.writeFileSync(filePath, logTemplate.trim());
  console.log(`Daily log file created: ${filePath}`);
}
