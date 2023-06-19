import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "98af7dd3d0e34984a1e401fd0cf256df",
  },
});
