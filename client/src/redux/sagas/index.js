import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "../actions";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    // console.log(posts);

    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const posts = yield call(api.createPost, action.payload);
    console.log("create post", posts);
    yield put(actions.createPost.createPostSuccess(posts.data));
  } catch (err) {
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const posts = yield call(api.updatePost, action.payload);
    console.log("update post", posts);
    yield put(actions.updatePost.updatePostSuccess(posts.data));
  } catch (err) {
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
