const fs = require('fs').promises;
const path = require('path');

const logDir = path.join(__dirname, 'Logs');
async function removeLogs() {
    try {
        const files = await fs.readdir(logDir);

        for (const file of files) {
            const filePath = path.join(logDir, file);
            await fs.unlink(filePath);
            console.log(`Deleted: ${file}`);
        }

        await fs.rmdir(logDir);
        console.log('Logs directory removed.');
    } catch (err) {
        console.log('Logs directory not found.');
    }
}

removeLogs();
