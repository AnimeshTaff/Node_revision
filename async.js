const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log("Data get showed",data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFileAsync('C:/Users/Animesh Kumar/Desktop/async/sample.txt');