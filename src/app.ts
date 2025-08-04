import express, { json, Request, Response} from "express";
import router from "./routes/routes";
import cors from "cors";

function createApp(){
    const app = express();

    app.use(json());
    app.use("/api", router);

    const corsOptions = {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH"]
    }
    app.use(cors());
    return app;
};
    
export default createApp;