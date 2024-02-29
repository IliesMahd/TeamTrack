import mongoose from 'mongoose';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error('Error while connecting to database 1:', error);
    throw new Error('Error while connecting to database 2');
  }
};

export { connect };