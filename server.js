import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { spawn } from "child_process";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const httpServer = createServer(handler);
const io = new Server(httpServer);

const max = 17;

const videoNames = {
  "master-page": 1,
  "somatom-menu": 4,
  "somatom-fuente": 5,
  "somatom-operacion": 6,
  "somatom-inversion": 7,
  "somatom-impacto": 8,
  "somatom-cardio": 9,
  "somatom-pulmonar": 10,
  "somatom-neurologico": 11,
  "somatom-pediatrico": 12,
  "acuson-menu": 13,
  "acuson-obtenga": 14,
  "acuson-descubra-1": 15,
  "acuson-descubra-2": 16,
  "acuson-atienda": 17,
  "acuson-optimice": 18,
  "acuson-caracteristicas": 19,
  "mamommat-menu": 20,
  "mamommat-estandar-1": 21,
  "mammomat-estandar-2": 22,
  "mamommat-mejora": 23,
  "mamommat-elimina": 24,
  "mamommat-rentable": 25,
  "ciartic-menu": 26,
  "ciartic-acelere": 27,
  "ciartic-evite": 28,
  "ciartic-reduzca": 29,
  "ciartic-amplie": 30,
  "ciartic-muevase": 31,
  "magnetom-menu": 32,
  "magnetom-infraestructura": 33,
  "magnetom-flujo": 34,
  "magnetom-excelencia": 35,
  "magnetom-eficiencia": 36,
  "artis-menu": 37,
  "artis-acceda": 38,
  "artis-acceda-2": 39,
  "artis-mejore": 40,
  "artis-conozca": 41,
  "artis-potencie": 42,
};

app.prepare().then(() => {
  io.on("connection", (socket) => {
    socket.on("animationStatus", (value) => {
      io.emit("animationStatus", value);
    });
    socket.on("videoName", (value) => {
      console.log(value);
      const pxToClick = videoNames[value];
      console.log(pxToClick)
      const ls = spawn("python", ["./setHoloVideo.py", pxToClick]);
      ls.stdout.on("data", (data) => {
        console.log(`Ejecutado correctamente: ${data}`);
      });
      
      ls.stderr.on("data", (error) => {
        console.error(`Error durante la ejecución: ${error}`);
      });
      io.emit("videoName", value);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
