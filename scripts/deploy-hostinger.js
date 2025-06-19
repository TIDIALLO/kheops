const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Créer un fichier zip pour le déploiement
const output = fs.createWriteStream(path.join(__dirname, '../deploy.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Niveau de compression maximum
});

output.on('close', () => {
  console.log('Archive créée avec succès !');
  console.log(`Taille totale: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Ajouter les dossiers nécessaires
archive.directory(path.join(__dirname, '../.next'), '.next');
archive.directory(path.join(__dirname, '../public'), 'public');
archive.file(path.join(__dirname, '../package.json'), { name: 'package.json' });
archive.file(path.join(__dirname, '../next.config.js'), { name: 'next.config.js' });

archive.finalize(); 