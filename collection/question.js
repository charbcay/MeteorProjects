
Questions = new Mongo.Collection("question");
Schemas.Questions = new SimpleSchema({

    Question: {
        type: String
    },
    Answer:{
        type: String
    }
});
Questions.attachSchema(Schemas.Questions);


Questions.allow({
    "insert": function () {

        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});



