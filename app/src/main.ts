import { createApp } from "vue";
import App from "./App.vue";
import Socketio from "@/plugins/socket";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import "./assets/tailwind.css";
const app = createApp(App);

app.use(Socketio, {
  connection:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/api",
  options: {
    transports: ["websocket"],
    path: "/api/socket.io",
  },
});

app.use(VueApexCharts);
app.use(router);
app.mount("#app");
