import axios from "../pages/api/data";

export default async function getAPI(url) {
    const repsonse = await axios.get(url);
    return repsonse.data;
}