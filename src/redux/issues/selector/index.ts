import { createSelector } from 'reselect';


const getIssues = (state: any) => state.arrIssues.issues
const getIssuesMemo = createSelector([getIssues], state => state);

export { getIssues, getIssuesMemo };
