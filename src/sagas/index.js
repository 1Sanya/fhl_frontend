import { takeEvery } from 'redux-saga/effects';

import { AUTH_LOGIN_REQUEST, AUTH_REGISTRATION_REQUEST } from '../action-types/auth';
import { TOURNAMENTS_GET_TOURNAMENTS } from '../action-types/tournaments';
import { loginSaga, registrationSaga } from './auth';
import getTournaments from './home';

function* rootSaga() {
  yield takeEvery(AUTH_LOGIN_REQUEST, loginSaga);
  yield takeEvery(AUTH_REGISTRATION_REQUEST, registrationSaga);
  yield takeEvery(TOURNAMENTS_GET_TOURNAMENTS, getTournaments);
}

export default rootSaga;
