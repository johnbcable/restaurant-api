import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default ({ config, db} ) => {
  let api = Router();

  // CRUD - Create, Read, Update and Delete
  // /v1/restaurant/add  -  Create
  api.post('/add', (req, res) => {
    let newTruck = new FoodTruck();
  //  console.log(`${req.body.name}`);
    newTruck.name = req.body.name;

    // save method is a mongosse method
    newTruck.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Food Truck saved successfully'});
    });
  });

  // /v1/restaurant/  -  Read
  api.get('/', (req, res) => {
    FoodTruck.find({}, (err, foodtrucks) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  // /v1/restaurant/:id  -  Read one restaurnt
    api.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // /v1/restaurant/:id    Update
  api.put('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }

      restaurant.name = req.body.name;

      // save method is a mongosse method
      restaurant.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({message: "Restaurant info updated"});
      });
    });
  });

  // /v1/restaurant/:id  -  Delete one restaurnt
    api.delete('/:id', (req, res) => {
    Restaurant.remove( {
      _id:  req.params.id
    }, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "Restaurant successfully removed!"});
    });
  });

  return api;
}
