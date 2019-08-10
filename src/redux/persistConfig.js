import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  key: 'session',
  storage,
  whitelist: [ //Add persist information
    'userName',
  ],
  stateReconciler: autoMergeLevel2,
};