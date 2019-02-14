"use strict";

const post = {
    templateUrl: "app/post/post.html",

    bindings: {
        post: "<"
    }
}

angular
    .module("SocialApp")
    .component("post", post)