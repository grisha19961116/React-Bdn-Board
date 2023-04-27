import axios from 'axios';
const getIssues = async<T>(url: string): Promise<T | undefined> => {
    const { data } = await axios.get(url)
    return data
}
export { getIssues }