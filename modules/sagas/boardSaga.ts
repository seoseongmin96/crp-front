import { writeArticle , removeBoard, writeComment } from "@/modules/apis/article";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ArticleActions } from "../slices/boardSlce";
import { Article } from "../types";

//get Saga
function* writeArticleSaga(action : {payload: Article}) {
    const {writeBoardSuccess, writeBoardFailure} = ArticleActions
    const param = action.payload
    try{
        yield call(writeArticle, param)
        yield put(writeBoardSuccess())
    } catch (error) {
        yield put(writeBoardFailure())
    }
}



function* fetchMyArticleSaga(action : {payload : any}) {
    const {fetchMyBoardSuccess, fetchMyBoardFailure} = ArticleActions
    try {
        const response: Article = yield call(action.payload)
        yield put(fetchMyBoardSuccess(response))
    } catch (error) {
        yield put(fetchMyBoardFailure())
    }
}

function* removeBoardSaga(action: {payload: Article}) {
    try{
        yield call(removeBoard, action.payload)
    } catch (error) {}
}

function* wrtieCommentSaga(action: {payload: Article}) {
    try {
        yield call(writeComment, action.payload)
    } catch (error) {}
}
// main saga
export function* watchWriteArticle(){
    yield takeLatest(ArticleActions.writeBoard, writeArticleSaga)
}

export function* watchFetchMyArticleSaga(){
    yield takeEvery(ArticleActions.fetchMyBoard, fetchMyArticleSaga)
}
export function* watchRemoveBoard(){
    yield takeLatest(ArticleActions.removeBoard, removeBoardSaga)
}
export function* watchWriteComment() {
    yield takeLatest(ArticleActions.writeComment, wrtieCommentSaga)
}