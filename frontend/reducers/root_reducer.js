import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import WorkersReducer from './workers_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  workers: WorkersReducer
});

export default rootReducer;
