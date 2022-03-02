import { call, put, all, takeLatest } from 'redux-saga/effects'
import sampleSlice from './../../slices/sample-slice'
import sampleService from './../../services//sample-service'

const {
    getSampleData,
    getSampleDataSuccess,
    getSampleDataFailed

} = sampleSlice.actions

function* fetchUser(action: any) {
    try {
        const { data } = yield call(sampleService.getSample, action.payload);
        yield put(getSampleDataSuccess(data));
    } catch (e) {
        yield put(getSampleDataFailed(e));
    }
}

export default function* root() {
    yield all([
        takeLatest(getSampleData, fetchUser)
    ])
}