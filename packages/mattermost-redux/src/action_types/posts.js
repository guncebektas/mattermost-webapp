// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import keyMirror from 'utils/key_mirror';

export default keyMirror({
    CREATE_POST_REQUEST: null,
    CREATE_POST_SUCCESS: null,
    CREATE_POST_FAILURE: null,

    EDIT_POST_REQUEST: null,
    EDIT_POST_SUCCESS: null,
    EDIT_POST_FAILURE: null,

    DELETE_POST_REQUEST: null,
    DELETE_POST_SUCCESS: null,
    DELETE_POST_FAILURE: null,

    GET_POST_THREAD_REQUEST: null,
    GET_POST_THREAD_SUCCESS: null,
    GET_POST_THREAD_FAILURE: null,

    GET_POSTS_REQUEST: null,
    GET_POSTS_SUCCESS: null,
    GET_POSTS_FAILURE: null,

    GET_POSTS_SINCE_REQUEST: null,
    GET_POSTS_SINCE_SUCCESS: null,
    GET_POSTS_SINCE_FAILURE: null,

    GET_POSTS_BEFORE_REQUEST: null,
    GET_POSTS_BEFORE_SUCCESS: null,
    GET_POSTS_BEFORE_FAILURE: null,

    GET_POSTS_AFTER_REQUEST: null,
    GET_POSTS_AFTER_SUCCESS: null,
    GET_POSTS_AFTER_FAILURE: null,

    REACTION_REQUEST: null,
    REACTION_SUCCESS: null,
    REACTION_FAILURE: null,

    OPEN_GRAPH_REQUEST: null,
    OPEN_GRAPH_SUCCESS: null,
    OPEN_GRAPH_FAILURE: null,

    GET_POST_THREAD_WITH_RETRY_ATTEMPT: null,
    GET_POSTS_WITH_RETRY_ATTEMPT: null,
    GET_POSTS_SINCE_WITH_RETRY_ATTEMPT: null,
    GET_POSTS_BEFORE_WITH_RETRY_ATTEMPT: null,
    GET_POSTS_AFTER_WITH_RETRY_ATTEMPT: null,

    RECEIVED_POST: null,
    RECEIVED_POSTS: null,
    RECEIVED_FOCUSED_POST: null,
    RECEIVED_POST_SELECTED: null,
    RECEIVED_EDIT_POST: null,
    POST_DELETED: null,
    REMOVE_POST: null,
    RECEIVED_REACTION: null,
    RECEIVED_REACTIONS: null,
    REACTION_DELETED: null,
    RECEIVED_OPEN_GRAPH_METADATA: null
});
