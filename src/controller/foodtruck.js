import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default ({ config, db} ) => {
  let api = Router();

  // CRUD - Create, Read, Update and Delete
  // /v1/foodtruck/add  -  Create
  api.post('/add', (req, res) => {
    let newFoodTruck = new FoodTruck();
  //  console.log(`${req.body.name}`);
    newFoodTruck.name = req.body.name;
    newFoodTruck.foodtype = req.body.foodtype;
    newFoodTruck.avgcost = req.body.avgcost;
    newFoodTruck.geometry.coordinates = req.body.geometry.coordinates;
    
    // save method is a mongoose method
    newFoodTruck.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Food Truck saved successfully'});
    });
  });

  // /v1/foodtruck/  -  Read
  api.get('/', (req, res) => {
    FoodTruck.find({}, (err, foodtrucks) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtrucks);
    });
  });

  // /v1/foodtruck/:id  -  Read one restaurnt
    api.get('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtruck);
    });
  });

  // /v1/foodtruck/:id    Update
  api.put('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }

      foodtruck.name = req.body.name;

      // save method is a mongosse method
      foodtruck.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({message: "Food truck info updated"});
      });
    });
  });

  // /v1/foodtruck/:id  -  Delete one foodtruck
    api.delete('/:id', (req, res) => {
    FoodTruck.remove( {
      _id:  req.params.id
    }, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "Food truck successfully removed!"});
    });
  });

  // add review for a specific food truck id
  // /v1/foodtruck/reviews/add/:id
  api.post('/reviews//add/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }

      let newReview = new Review();
      newReview.title = req.body.title;
      newReview.text = req.body.text;
      newReview.foodtruck = foodtruck._id;

      // save method is a mongoose method
      newReview.save(err => {
        if (err) {
          res.send(err);
        }
        // Need to push review reference onto reviews array
        foodtruck.reviews.push(newReview);
        foodtruck.save(err => {
          if (err) {
            res.send(err)
          }
        res.json({message: 'Food Truck review saved successfully'});
      });
    });
  });
});

  return api;
}
