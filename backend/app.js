//start pt of backend

const express = require("express"); //handle routes, middleware, and HTTP requests
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //load environment variables from a .env file also helps to manage sensitive info
const cors = require("cors"); //middleware to handle requests that comes from diff domains
const authRoutes = require("./routes/authRoutes"); // handles rotings
const UserModel = require("./models/userModel");
const Staff = require("./models/staffModel");



const stripe = require("stripe")(
  "pk_test_51Q4ekwGfQYqZiDkV7tF6Q51ecYxNZG3YtzW2i8Jsol4rD8t6bsKbzgxvVUnW6E5nQr5jCUkoeVGcMAhs0YA90VKi00TSrYGcyg"
); //for stripe
// const uuid = require("uuid/v4");
// const { v4: uuidv4 } = require("uuid");

dotenv.config();

const app = express();

// CORS options
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json()); //works as a translator .json(raw data from user) to .js(organised data to makes understand server)

// app.use(cors());

// MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://priyachaurasiya730:hiq9MXRobDPiKbiM@cluster0.e0opx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

mongoose
  .connect(
    "mongodb+srv://priyachaurasiya730:hiq9MXRobDPiKbiM@cluster0.e0opx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", authRoutes);

// /api/auth/register
app.get("/", (req, res) => {
  res.send("hello world! Response from server");
});
app.get("/api/user", async (req, res) => {
  try {
    const user = await UserModel.findOne(); // Fetch the first user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send user data as response
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
});
const fetchUserDetails = async (req, res) => {
  const userId = req.params.userId; // Assuming userId is passed as a URL parameter
  try {
      const user = await UserModel.findById(userId).select('-password'); // Fetch user by ID and exclude the password

      if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
      }

      res.json({ success: true, data: user }); // Send the user data in response
  } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error fetching user details" }); // Proper error handling
  }
};
app.get("/api/user/:userId", fetchUserDetails); // Define the route


//Payment Routing
app.post("/payment", (req, res) => {
  const { product, token } = req.body; //yaha pe frontend se data fetch kar rahe hain
  console.log("Product", product);
  console.log("Price", product.price);
  //user is not charged twice for that product
  const idempontencyKey = uuid();

  //returning
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "USD",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});
app.post('/api/staff', async (req, res) => {
  const { name, phone, work } = req.body;
  try {
    const newStaff = new Staff({ name, phone, work });
    const savedStaff = await newStaff.save();
    await savedStaff.save();
    res.status(200).send({ message: "Staff added successfully" });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add staff' });
  }
});


// Start server
//listen
const PORT = process.env.PORT || 8283;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//priyachaurasiya730
//hiq9MXRobDPiKbiM
