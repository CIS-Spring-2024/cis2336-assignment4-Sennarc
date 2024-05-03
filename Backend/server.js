const express = require("express");
const app = express();
const port = 5500;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests for processing order form data
app.post("/process-order", (req, res) => {
  // Process the order form data here
  const orderData = req.body; // Assuming the order data is sent in the request body
  console.log("Received order:", orderData);

  // Send a response indicating success
  res.send("Your order has been placed!");
});

// Route to handle GET requests for serving the order confirmation web page
app.get("/order-confirmation", (req, res) => {
  // Serve the order confirmation web page
  res.sendFile(__dirname + "/order-confirmation.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
