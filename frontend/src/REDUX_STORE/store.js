import { configureStore, combineReducers } from '@reduxjs/toolkit';
import statusReducer from '../REDUX_ISECURION/status/statusReducer';
import projectReducer from '../REDUX_ISECURION/retestStatus/retestReducer';
import countReducer from '../REDUX_ISECURION/projectCount/countReducer';
import fetchProjectsReducer from '../REDUX_ISECURION/projectList/projectlistReducer';
import fetchVulnerabilities from '../REDUX_ISECURION/vulnerList/vulnerReducer';
import documentReducer from '../REDUX_ISECURION/docList/docReducer';
import setProjectReducer from '../REDUX_ISECURION/statusPage/statuspageReducer';
import clientCountReducer from '../REDUX_CLIENT/projectCount/projectCountReducer';
import fetchClientProjectsReducer from '../REDUX_CLIENT/projectList/cltprojectReducer';
import setClientProjectReducer from '../REDUX_CLIENT/clientProjectStatus/cltProjectReducer';
import fetchClientVulnerabilities from '../REDUX_CLIENT/clientVulnerability/cltvulnerReducer';
import fetchDocumentReducer from '../REDUX_CLIENT/clientDocuments/cltDocumentReducer';
import viewActionReducer from '../REDUX_CLIENT/viewStatus/viewRetestStatusReducer';
import clientRetestStatusReducer from '../REDUX_CLIENT/clientRetest/clientRetestReducer';
import setUsernameReducer from '../REDUX_ISECURION/navbarUsername/usernameReducer';
import messageReducer from '../REDUX_ISECURION/fetchmessage/fetchmessageReducer';
import fetchClientMsgReducer from '../REDUX_CLIENT/fetchMessages/fetchClientMsgReducer';
import { fetchVulnerabilityTableData } from '../REDUX_ISECURION/fetchReportDetails/reportDetailsReducer';

const rootReducer = combineReducers({
  status: statusReducer,
  project: projectReducer,
  count: countReducer,
  projectlist: fetchProjectsReducer,
  vulnerlist: fetchVulnerabilities,
  doc:documentReducer,
  alldata:setProjectReducer,
  clientCount: clientCountReducer,
  cltprojectList: fetchClientProjectsReducer,
  cltalldata: setClientProjectReducer,
  cltvulnerlist:fetchClientVulnerabilities,
  cltDoc: fetchDocumentReducer,
  statusMatched : viewActionReducer,
  cltRetestStatus: clientRetestStatusReducer,
  isecUserName:setUsernameReducer,
  fetchMessage:messageReducer,
  fetchedMessage:fetchClientMsgReducer,
  vuldatalist:fetchVulnerabilityTableData
});

const store = configureStore({
  reducer: rootReducer,
});

export default store


