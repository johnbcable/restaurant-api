import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default ({ config, db} ) => {
  let api = Router();

  // /v1/restaurant/add
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newwRest.name = req.body.name;

    // save method is a mongosse method
    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Restaurant saved successfully'});
    });
  });

  return api;
}
