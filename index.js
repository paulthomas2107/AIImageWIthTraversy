const path = require('path');
const express = require('express');
const dotEnv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Enable Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openAIRoutes'));

app.listen(port, () => {
  console.log(`Started on port: ${port}`);
});
