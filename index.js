import express from "express";
import cors from "cors";

const app = express();
const port = 3000; // You can change this port as needed

app.use(cors());

// Generate random string using date and random number converted to base64
const generateRandomString = () => btoa(+new Date() + Math.random() * 100);

// Define a route for the about page
app.get("/about", (req, res) => {
  const aboutInfo = {
    title: "Maybe a Good Company?",
    description:
      "Welcome to our company's about page. Learn more about who we are and what we do.",
    team: [
      {
        name: "John Doe",
        role: "CEO",
        src: `https://source.unsplash.com/random/200x200?Person&${generateRandomString()}`,
      },
      {
        name: "Jane Doe",
        role: "CTO",
        src: `https://source.unsplash.com/random/200x200?Person&${generateRandomString()}`,
      },
      {
        name: "Alice Smith",
        role: "Lead Developer",
        src: `https://source.unsplash.com/random/200x200?Person&${generateRandomString()}`,
      },
    ],
    contact: {
      email: "info@example.com",
      phone: "+1 123-456-7890",
    },
  };

  res.json({ data: aboutInfo, message: "Successfully retrieved data" });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
