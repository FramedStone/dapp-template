const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json(), cors());

app.post('/verify-contract', (req, res) => {
  const { network, contractAddress } = req.body;

  const scriptPath = path.resolve(__dirname, 'verifyContract.js');
  exec(`node ${scriptPath} ${network} ${contractAddress}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    res.status(200).json({ output: stdout });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
