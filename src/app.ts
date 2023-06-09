import express from "express";
import rutasLaboratorio from "./routes/laboratorios";
import rutasUsuarios from "./routes/usuarios";
import rutasCarreras from "./routes/carrera";
import rutasEquipos from "./routes/equipos";
import rutasPracticas from "./routes/practicas";
import rutasMaterias from "./routes/materia";
import rutasRol from "./routes/rol"
import rutasGrupo from "./routes/grupos";
import connection from "./db/config";
import {json, urlencoded} from "body-parser";
//importo la ruta que cree para login y la llamo rutaLogin
import rutaLogin from './routes/auth';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(json());
app.use(urlencoded({extended:true}));

app.use("/laboratorios",rutasLaboratorio);
app.use("/usuarios",rutasUsuarios);
//le indico a mi app que cree un nuevo endpoint que será /login y funcionará con las rutas definidas en rutaLogin
app.use("/login",rutaLogin);
app.use("/carreras",rutasCarreras);
app.use("/equipos",rutasEquipos);
app.use("/practicas",rutasPracticas);
app.use("/materias",rutasMaterias);
app.use("/rol",rutasRol);
app.use("/grupo",rutasGrupo);
/**
 * C Create
 * R Read
 * U Update
 * D Delete
 */
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    )=>{
        res.status(500).json({message: err.message});
    }
)

connection.sync().then(()=>{
    console.log("La base de datos funciona");
}).catch((err)=>{
    console.log("Error",err);
});

app.listen(3005, ()=>{
    console.log("Server inciado en el puerto 3005");
});