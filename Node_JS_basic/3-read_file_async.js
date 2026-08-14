const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, fileContent) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = fileContent.trim().split('\n').filter((line) => line.trim().length > 0);
      const stdRows = lines.slice(1);
      const output = [`Number of students: ${stdRows.length}`];
      const fields = {};

      for (const row of stdRows) {
        const studentData = row.split(',');
        const firstName = studentData[0].trim();
        const field = studentData[studentData.length - 1].trim();

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      output.forEach((line) => console.log(line));
      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
