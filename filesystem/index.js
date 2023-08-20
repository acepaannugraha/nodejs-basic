// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

const filePath = path.resolve(__dirname, 'notes.txt');

fs.readFile(filePath, 'UTF-8', fileReadCallback);



/*
const fs = require('fs');
// Baca isi berkas notes.txt
fs.readFile('./filesystem/notes.txt', 'utf8', (error, data) => {
    if(error) {
        console.error('Gagal membaca berkas notes.txt:', error);
        return;
    }

    // Tampilkan isi berkas pada consol
    console.log(data);
});

*/
