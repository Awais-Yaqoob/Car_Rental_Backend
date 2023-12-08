// controllers/carController.js

const carService = require("../services/carProductService");

const getAllCars = async (req, res) => {
  const cars = await carService.getAllCars();
  res.json(cars);
};

const getCarById = async (req, res) => {
  const { id } = req.params;
  const car = await carService.getCarById(id);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

const createCar = async (req, res) => {
  const carData = req.body;
  const newCar = await carService.createCar(carData);
  res.status(201).json(newCar);
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const carData = req.body;

  const updatedCar = await carService.updateCar(id, carData);

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const deletedCar = await carService.deleteCar(id);

  if (deletedCar) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
