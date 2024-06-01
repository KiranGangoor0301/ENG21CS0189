const express = require('express');
const app = express();
const port = 9876;
const cors = require('cors');
app.use(cors());


const numbersData = {
  p: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
  f: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
  e: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  r: [3, 14, 15, 92, 65, 35, 89, 79, 32, 38]
};

app.get('/numbers/:id', (req, res) => {
  const { id } = req.params;
  const numbers = numbersData[id] || [];
  res.json(numbers);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
