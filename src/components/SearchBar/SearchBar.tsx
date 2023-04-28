import { Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import asyncGetIssues from '../../redux/issues/operations';
import styles from './SearchBar.module.css'
import { getUrls } from '../../redux/urls/selector';
import { ReactComponent as SvgStar } from '../../img/star-svgrepo-com.svg'
import { TUrl } from '../../redux/urls/types';
const { Search } = Input;


const SearchBar = () => {
    const urls: TUrl[] = useSelector(getUrls);
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const handleOnSearch = async (value: string) => {
        if (value.includes('https://github.com/')) {
            const [repoName, ownerName] = value.split('/').reverse()
            const url = `https://api.github.com/repos/${ownerName}/${repoName}`
            if (!urls.find(el => el.url === url)) {
                dispatch<any>(asyncGetIssues(url, repoName, ownerName))
                setValue('')
            }
        }
    };
    const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
        setValue(value.trim().replace(' ', ''))

    const lastUrl = urls[urls.length - 1]

    return (
        <header className={styles.header}>
            <div className={styles.searchBar}>
                <Search
                    placeholder="Enter repo URL https://github.com/ownerName/repoName"
                    allowClear
                    enterButton="Load issues"
                    size="large"
                    onSearch={handleOnSearch}
                    onChange={handleOnChange}
                    value={value}
                    className={styles.searchBar__input}
                />
                {lastUrl && <>
                    <a className={styles.searchBar__link} href={`https://github.com/${lastUrl.ownerName}`} target="_blank" rel="noreferrer">{lastUrl.ownerName}</a>
                    <span className={styles.searchBar__more}>{'>'}</span>
                    <a className={styles.searchBar__link} style={{ paddingRight: 20 }} href={`https://github.com/${lastUrl.ownerName}/${lastUrl.repoName}`} target="_blank" rel="noreferrer">{lastUrl.repoName}</a>
                    <SvgStar /><span className={styles.searchBar__stars}>
                        {lastUrl.watchers_count > 1000 ?
                            `${Math.round(lastUrl.watchers_count / 1000)} K` :
                            lastUrl.watchers_count} stars
                    </span>
                </>}
            </div>
        </header>)
}

export default SearchBar