if(Meteor.isClient) {
    Meteor.subscribe("question");
    Template.createTest.onCreated(function () {
        Meteor.subscribe("fields");

    });
    Template.createTest.onRendered(function () {

    });
    Template.createTest.helpers({

    });
    Template.createTest.events({

    });
    Template.createTest.onDestroyed(function(){

    });
}