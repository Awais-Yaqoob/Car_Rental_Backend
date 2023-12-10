const { models } = require("../models/definations");
const nodemailer = require("nodemailer");
const emailService = require("./emailService");

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
const createBooking = async (bookingData) => {
  const { carId } = bookingData;

  const car = await models.cars.findByPk(carId);

  if (!car || car.quantity === 0) {
    throw new Error("Car not available");
  }
  await models.bookings.create(bookingData);

  await models.cars.update(
    { quantity: car.quantity - 1 },
    { where: { id: carId } }
  );
};

// const createBooking = async (bookingData) => {
//   try {
//     const newBooking = await models.bookings.create(bookingData);

//     // Send booking confirmation email
//     await emailService.sendBookingConfirmationEmail(newBooking);

//     return newBooking;
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     throw error;
//   }
// };

const deleteBooking = async (id) =>
  await models.bookings.destroy({ where: { id } });

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBooking,
};
