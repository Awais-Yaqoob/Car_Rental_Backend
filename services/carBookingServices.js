const { models } = require("../models/definations");

const getAllBookings = async () =>
  await models.bookings.findAll({
    include: [
      {
        model: models.cars,
        attributes: ["name"],
      },
    ],
  });

const getBookingById = async (id) =>
  await models.bookings.findByPk(id, {
    include: [
      {
        model: models.cars,
        attributes: ["name"],
      },
    ],
  });

const createBooking = async (bookingData) =>
  await models.bookings.create(bookingData);

const deleteBooking = async (id) =>
  await models.bookings.destroy({ where: { id } });

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBooking,
};
