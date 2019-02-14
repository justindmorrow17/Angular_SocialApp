"use strict";

const socialposts = {
    templateUrl: "app/socialposts/socialposts.html",
    controller: [ function() {
        const vm = this;
        vm.postLibrary = [
            {title: "My day", thought: "Awesome"},
            {title: "My study time", thought: "Greeat"},
            {title: "My cookie", thought: "delicious"}
            
        ];
        vm.formToggle = false;
        vm.addPost = (newPost) => {
            vm.postLibrary.push({...newPost});
            vm.formToggle = false;
            console.log(newPost);
        }

        vm.removePost = (index) => {
            vm.postLibrary.splice(index, 1);
            console.log("click you");
        }
        
        vm.showForm = () => {
            vm.formToggle = true;
            console.log("show me");
        }

    }]
}

angular
    .module("SocialApp")
    .component("socialposts", socialposts)