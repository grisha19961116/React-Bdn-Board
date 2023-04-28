import { TIssues } from '../types';
import {
  actionGetIssuesSuccess,
  actionGetIssuesReject,
} from '../action';
import { actionSetUrl } from '../../urls/action';
import { fetchGitHub } from '../../../api-data';


const asyncGetIssues = (url: string, repoName: string, ownerName: string) => async (dispatch: any) => {
  try {
    const issues = await fetchGitHub<TIssues>(url + '/issues')
    const repository = await fetchGitHub<{ watchers_count: number }>(url)
    if (issues && repository) {
      dispatch(actionSetUrl({ url, repoName, ownerName, watchers_count: repository.watchers_count }))
      dispatch(actionGetIssuesSuccess(issues))
    }
  } catch (e) {
    dispatch(actionGetIssuesReject())
  }
};




export default asyncGetIssues
