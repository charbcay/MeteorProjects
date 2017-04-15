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


var TestList=[
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 25,
        "TotalStudentTaken" : 1
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 35,
        "TotalStudentTaken" : 10
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 15,
        "TotalStudentTaken" : 5
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 9,
        "TotalStudentTaken" : 9
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 15,
        "TotalStudentTaken" : 11
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 22,
        "TotalStudentTaken" : 13
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 25,
        "TotalStudentTaken" : 25
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 18,
        "TotalStudentTaken" : 14
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 25,
        "TotalStudentTaken" : 10
    },
    {
        "Title": "English",
        "DateCreated": "02/09/2016 10:30 am",
        "DateUpdated": "02/10/2016 11:45 am",
        "TotalStudent": 5,
        "TotalStudentTaken" : 5
    }
]