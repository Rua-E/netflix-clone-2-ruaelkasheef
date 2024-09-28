import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((rest) => rest.data);

export default fetcher;