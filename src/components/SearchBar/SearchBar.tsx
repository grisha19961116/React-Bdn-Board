import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import asyncGetIssues from '../../redux/issues/operations';
import { actionSetUrl } from '../../redux/urls/action';
import styles from './SearchBar.module.css'
import { getUrls } from '../../redux/urls/selector';
import { ReactComponent as SvgStar } from '../../img/star-svgrepo-com.svg'
const { Search } = Input;


const SearchBar = () => {
    const urls: string[] = useSelector(getUrls);
    const dispatch = useDispatch()
    const onSearch = async (value: string) => {
        if (value.includes('https://api.github.com/repos/') && !urls.find(el => el === value)) {
            dispatch<any>(actionSetUrl(value))
            dispatch<any>(asyncGetIssues(value))
        }
    };

    //https://api.github.com/repos/microsoft/lisa/issues
    //https://api.github.com/repos/microsoft/typescript/issues
    return (
        <div className={styles.header}>
            <div className={styles.searchBar}>
                <Search
                    placeholder="Enter repo URL https://api.github.com/repos/ownerName/repoName/issues"
                    allowClear
                    enterButton="Load issues"
                    size="large"
                    onSearch={onSearch}
                    className={styles.searchBar__input}

                />
                <a className={styles.searchBar__link} href="https://www.facebook.com/" target="_blank">Facebook</a>
                <span className={styles.searchBar__more}>{'>'}</span>
                <a className={styles.searchBar__link} style={{ paddingRight: 20 }} href="https://react.dev/" target="_blank">React</a>
                <SvgStar /><span className={styles.searchBar__stars}>194 K stars</span>
            </div>
        </div>)
}

export default SearchBar