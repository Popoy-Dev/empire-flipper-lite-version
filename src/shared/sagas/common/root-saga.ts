import { all, fork } from 'redux-saga/effects'

import sample from '../users/sample-saga'

export default function* root() {
    yield all([
        fork(sample)
    ])
}