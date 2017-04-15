if(Meteor.isClient) {
    Template.testList.onCreated(function () {
        Meteor.subscribe("testList");
/*
        _.each(TestList,function(element){
            TestListCollection.insert(element);
         });
        console.log(TestListCollection.find().fetch());
*/
    });
    Template.testList.onRendered(function () {

    });
    Template.testList.helpers({
        "TestList":function() {
            return TestListCollection.find({}).fetch();
        }
    });
    Template.testList.events({
        "click .glyphicon-eye-open":function(e){
            FlowRouter.go('/teacher/preview?id=' + this._id);
        },
        "click .glyphicon-envelope":function(){
            console.log(this._id);
            $('#myModalInvitation').modal();
        }
    });
    Template.testList.onDestroyed(function(){

    });
}


