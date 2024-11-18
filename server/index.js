import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import roomRouter from './routes/roomRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const port = process.env.PORT || 5001;


const app = express();

// Setup CORS with default configuration
app.use(cors());

// Set a JSON limit
app.use(express.json({ limit: '10mb' }));
mongoose.set('strictQuery', false);

// Route handlers
app.use('/user', userRouter);
app.use('/room', roomRouter);

app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));

// Handle 404 errors
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    app
      .listen(port, () => console.log(`Server is listening on port: ${port}`))
      .on('error', (e) => {
        console.log('Error happened: ', e.message);
      });
  } catch (error) {
    console.log(error);
  }
};

startServer();
