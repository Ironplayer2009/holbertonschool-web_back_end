const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const file = fs.readFileSync(path, 'utf8').trim();

    const lines = file
      .split('\n')
      .filter((line) => line.trim().length > 0);

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const stdRows = lines.slice(1);
    console.log(`Number of students: ${stdRows.length}`);

    const fields = {};

    for (const row of stdRows) {
      const studentData = row.split(',');
      const firstName = studentData[0].trim();
      const field = studentData[studentData.length - 1].trim();

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
