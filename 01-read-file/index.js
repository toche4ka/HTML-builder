const fs = require('fs');
const path = require('path');

// Построение пути к файлу text.txt
const filePath = path.join(__dirname, 'text.txt');

// Создание потока для чтения файла
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

// Обработка событий потока
readStream.on('data', (chunk) => {
  process.stdout.write(chunk); // Выводим данные в консоль
});
