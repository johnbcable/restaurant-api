import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

export default ({ config, db} ) => {
  let api = Router();

  // CRUD - Create, Read, Update and Delete
  // /v1/restaurant/add  -  Create
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    console.log(`${req.body.name}`);
    newRest.name = req.body.name;

    // save method is a mongosse method
    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Restaurant saved successfully'});
    });
  });

  // /v1/restaurant/  -  Read
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  return api;
}
