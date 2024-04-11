const size = 3;
const symbols = ['x', 'o'];

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += symbols[(i + j) % 2] + ' ';
    }
    console.log(row.trim());
}