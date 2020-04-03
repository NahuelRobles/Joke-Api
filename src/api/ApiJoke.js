import axios from 'axios';
import Config from 'react-native-config';
console.log("URL",Config.API_URL);

export default axios.create({
baseURL: `${Config.API_URL}/`,
headers:{
    Accept : 'text/plain'
}
});
