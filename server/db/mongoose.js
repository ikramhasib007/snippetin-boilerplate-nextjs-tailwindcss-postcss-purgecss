const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const MONGO_URI = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;
mongoose.connect(MONGO_URI, (err) => {
  if(err) throw err;
});


module.export = { 
  mongoose,
  MONGO_URI
};