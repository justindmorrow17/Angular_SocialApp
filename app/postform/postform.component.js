"use strict";

const postform = {
    templateUrl: "app/postform/postform.html",

    bindings: {
        showForm: "&",
        formToggle: "<",
        addpost: "&",
        expandOnFocus: "&"
    }
}


angular
    .module("SocialApp")
    .component("postform", postform)