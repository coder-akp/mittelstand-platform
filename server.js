const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/tools', (req, res) => {
  // Example response: tools available for adoption
  res.json([
    { id: 1, name: 'ERP System', description: 'Manage business processes' },
    { id: 2, name: 'CRM System', description: 'Customer relationship management' }
  ]);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
