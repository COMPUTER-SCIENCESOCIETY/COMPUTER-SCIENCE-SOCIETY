import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import creativeRoute from "./routes/memberRoute.js";
import eventRoutes from "./routes/eventRouts.js";
import path from "path";
const port = process.env.PORT || 5000;
// port define

//database Connection
import ConnectDataBase from "./config/db.js";

ConnectDataBase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/creativemember", creativeRoute);
app.use("/api/eventpage",eventRoutes)



if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, './client/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}


app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`server is Running at ${port}`));
