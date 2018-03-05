import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default ({ config, db} ) => {
  let api = Router();

  // /v1/restaurant/address
  api.post('/add', (res, req) => {
    let newRest = new Reesturant();
    newwRest.name = req.body.name;

    // save method is a mongosse method
    newRest.save(err, => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Restaurant saved successfully'});
    });
  });

  return api;
}
