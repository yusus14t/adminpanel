import axios from "axios";

export default async function ApiData() {
    
    let { data } = await axios.get(`https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json`)
    // console.log(data);

    return data
}
