//start pt of backend

const express = require("express"); //handle routes, middleware, and HTTP requests
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //load environment variables from a .env file also helps to manage sensitive info
const cors = require("cors"); //middleware to handle requests that comes from diff domains
const authRoutes = require("./routes/authRoutes"); // handles rotings

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
    const user = await User.findOne(); // Fetch the first user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send user data as response
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//to fetch users for admin panel
const User = require("./models/userModel"); // Assuming you have a User model

// Route to get all users
// app.get("/api/user", async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users
//     res.json(users); // Send users data as a response
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.get("/api/user2", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    console.log("Fetched Users:", users); // Log the fetched users
    res.json(users); // Send users data as a response
  } catch (err) {
    console.error(err);
    // console.error(users);
    res.status(500).json({ message: "Server error" });
  }
});

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

// Start server
//listen
const PORT = process.env.PORT || 8283;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//priyachaurasiya730
//hiq9MXRobDPiKbiM
