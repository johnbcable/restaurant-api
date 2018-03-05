import express from 'express';
import config from './config';
import middleware from '../middleware';
import initialiseDb from '../db';
import restaurant from '../controller/restaurant'

let router = express();

// Connect to the DB
initializeDb(db => {

  // internal Middleware
  router.use(middleware( {
    config,
    db
  }));

  // api routes
  router.use('/restaurant', restauarant({config, db}));
});

export default router;
