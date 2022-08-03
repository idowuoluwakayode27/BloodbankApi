require("dotenv").config()
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./db/db');
const userRouter = require('./routes/userRoute');


const app = express();

connectDB();

app.use(express.json()); //parses json objects
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4321;

// Route handlers
app.get('/', (req, res) => res.send('Home page'));
app.use('/api', userRouter);
app.all('*', (req, res) => {
  return res.status(404).json({ message: 'Oops page not found' });
});

app.listen(port, () => {
  console.log(`Server up and running on port http://localhost:${port}`);
});

