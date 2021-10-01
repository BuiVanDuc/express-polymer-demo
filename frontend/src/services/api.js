const API_ROOT = "http://localhost:3000";

function requestAllPosts() {
    return axios.get(`${API_ROOT}/posts`).then(function (res) {
        return res.data.posts;
    });
}

function createAPost(title, content) {
    return axios.post(`${API_ROOT}/posts`, {
        title: title,
        content: content
    }).then(function (res) {
        return res.data.post;
    });
}

const api = {
    requestAllPosts,
    createAPost
};
