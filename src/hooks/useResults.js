import {useState} from 'react';
import Joke from '../api/ApiJoke';

export default () => {
    const [result, setResult] = useState('Knok, Knok');

    const searchApi = async () => {
        await Joke.get().then((response) => {
            setResult(response.data);
          });
    }
    return [searchApi, result];
};
