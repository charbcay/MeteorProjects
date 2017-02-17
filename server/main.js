import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

if(Meteor.isServer){
    Meteor.publish("rooms", function () {
        return FieldsExamples.find({});
    });
    Meteor.publish("question", function () {
        return Questions.find({});
    });

}
