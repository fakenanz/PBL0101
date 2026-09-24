const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>HELLO WORLD</h1>

        <p>#PBW3B1PBL0101</p>
        <p>251080200027 M. NANDA WAHYU ERWANSYAH</p>
        <p>Framework Pilihan → JavaScript [4] - Express</p>

        <p>TIME : ${new Date().toLocaleString('id-ID')}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});