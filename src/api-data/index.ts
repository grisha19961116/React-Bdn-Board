import axios from 'axios';

const fetchGitHub = async<T>(url: string): Promise<T | undefined> => {
    const { data } = await axios.get(url)
    return data
}

export { fetchGitHub }