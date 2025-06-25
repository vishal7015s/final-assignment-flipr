// const express = require('express');
// const app = express();

// const contactRoute = require("./routes/contactUs")

// const database = require("./config/database");
// // const cookieParser = require("cookie-parser");

// const dotenv = require("dotenv");
// dotenv.config();

// const PORT = process.env.PORT || 4000;

// //database connect
// database.connect();

// // middleware
// // app.use(express.json());
// app.use(cookieParser());

// app.use("/api/v1/auth", contactRoute);

// app.get("/", (req, res) => {
  //     return res.json({
    //         success: true,
    //         message: "Your server is up and running..."
    //     });
    // });
    
    // app.listen(PORT, () => {
      //     console.log(`Server is running on port ${PORT}`);
      // });
      
      
      const express = require('express');
      const app = express();
      
      const dotenv = require("dotenv");
      
      const cors = require("cors");
      app.use(
        cors({
          origin: "*",
          credentials: true,
        })
      );
      
      
      const contactRoute = require('./routes/contactUs'); // Adjust path as needed
const projectRoutes = require('./routes/projects');
const clientRoutes = require('./routes/clients');
const newsletterRoutes = require('./routes/newsLetter');




const database = require("./config/database");
database.connect();

const {cloudinaryConnect} = require("./config/cloudinary");
cloudinaryConnect();

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));




app.use(express.json()); // For parsing application/json

// Use your routes
app.use('/api', contactRoute); // Added '/api' prefix as good practice
app.use('/api', projectRoutes);
app.use('/api', clientRoutes);
app.use('/api', newsletterRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req,res)=>{
  return res.json({
    message: "listeinig",
  })
})