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
  try {
    const bookingData = req.body;
    await bookingService.createBooking(bookingData);
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// const createBooking = async (req, res) => {
//   try {
//     const bookingData = req.body;
//     const newBooking = await bookingService.createBooking(bookingData);
//     res.status(201).json(newBooking);
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     res.status(500).json({ message: "Error creating booking" });
//   }
// };

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
