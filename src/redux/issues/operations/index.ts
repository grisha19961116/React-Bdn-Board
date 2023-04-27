import { TIssues } from '../types';
import {
  actionGetIssuesSuccess,
  actionGetIssuesReject,
} from '../action';
import { getIssues } from '../../../api-data';


const asyncGetIssues = (url: string) => async (dispatch: any) => {
  try {
    const data = await getIssues<TIssues>(url)
    data && dispatch(actionGetIssuesSuccess(data))
  } catch (e) {
    dispatch(actionGetIssuesReject())
  }
};




export default asyncGetIssues
