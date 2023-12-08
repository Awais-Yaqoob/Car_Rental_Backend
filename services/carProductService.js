const { models } = require("../models/definations");

const getAllCars = async () =>
  await models.cars.findAll({
    include: [
      {
        model: models.categories,
        attributes: ["category_name"],
      },
    ],
  });

const getCarById = async (id) =>
  await models.cars.findByPk(id, {
    include: [
      {
        model: models.categories,
        attributes: ["category_name"],
      },
    ],
  });

const createCar = async (carData) => await models.cars.create(carData);

const updateCar = async (id, carData) => {
  await models.cars.update(carData, { where: { id } });
  return await getCarById(id);
};

const deleteCar = async (id) => await models.cars.destroy({ where: { id } });

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
