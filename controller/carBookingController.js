const bookingService = require("../services/carBookingServices");

const getAllBookings = async (req, res) => {
  const bookings = await bookingService.getAllBookings();
  res.json(bookings);
};

const getBookingById = async (req, res) => {
  const { id } = req.params;
  const booking = await bookingService.getBookingById(id);

  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ message: "Booking not found" });
  }
};

const createBooking = async (req, res) => {
  const bookingData = req.body;
  const newBooking = await bookingService.createBooking(bookingData);
  res.status(201).json(newBooking);
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  const deletedBooking = await bookingService.deleteBooking(id);

  if (deletedBooking) {
    res.json({ message: "Booking deleted successfully" });
  } else {
    res.status(404).json({ message: "Booking not found" });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBooking,
};
