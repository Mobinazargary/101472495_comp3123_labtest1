const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Create log files and directory
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    //I am using writeFileSync instead of writeFile cause I wanted to get my folder In order
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`Created: ${fileName}`);
}
