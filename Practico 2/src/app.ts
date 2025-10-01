import express from 'express';
import cors from 'cors';
import ACTC from './service/ACTCservice';
import { makeActcRouter } from './routes/actc.route';

class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    middlewares(){
        this.app.use(express.json({limit: '150mb'}));
        //cors
        this.app.use( cors());
    }
    routes(){
        const service = new ACTC()
        this.app.use('/actc/pilotos', makeActcRouter(service))
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;