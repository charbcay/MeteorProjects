import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    Question1.remove({});
    _.each(examJson,function(element){
     Question1.insert(element);
     });
    TestListCollection.remove({});
    _.each(TestList,function(element){
        TestListCollection.insert(element);
    });
});

if(Meteor.isServer){


}
var examJson= [
    { "ques": {
        "Question": "Are you ______ there? I thought you’d left.",
        "Choices": [
            {"ans1": "Still"},
            {"ans2": "Always"},
            {"ans3": "Already"},
            {"ans4": "Ever"}
        ],
        "Answer":"Still",
        "difficulties":"easy",
        "type": "multiple choice"


    }},
    { "ques": {
        "Question": "We haven’t finished working on this report ______",
        "Choices": [
            {"ans1": "Ever"},
            {"ans2": "Still"},
            {"ans3": "Yet"},
            {"ans4": "Always"}
        ],
        "Answer": "Yet",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "A town house is __________ expensive than a country house.",
        "Choices": [
            {"ans1": "Far more"},
            {"ans2": "More far"},
            {"ans3": "The far more"},
            {"ans4": "The more far"}
        ],
        "Answer": "Far more",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "John drives _______ faster than George.",
        "Choices": [
            {"ans1": "More so"},
            {"ans2": "Much so"},
            {"ans3": "Much"},
            {"ans4": "More"}
        ],
        "Answer": "Much",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "________ dreadful weather.",
        "Choices": [
            {"ans1": "What a"},
            {"ans2": "What"},
            {"ans3": "How a"},
            {"ans4": "How"}
        ],
        "Answer": "What a",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Inflation has been steady ______ 2 years.",
        "Choices": [
            {"ans1": "While"},
            {"ans2": "Since"},
            {"ans3": "For"},
            {"ans4": "During"}
        ],
        "Answer": "For",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "___________ brilliant idea.",
        "Choices": [
            {"ans1": "How a"},
            {"ans2": "What"},
            {"ans3": "How"},
            {"ans4": "What a"}
        ],
        "Answer": "What a",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Sales in our company have been increasing ________ December",
        "Choices": [
            {"ans1": "During"},
            {"ans2": "While"},
            {"ans3": "For"},
            {"ans4": "Since"}
        ],
        "Answer": "Since",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "We _______ to the meeting tomorrow",
        "Choices": [
            {"ans1": "Goes"},
            {"ans2": "Aren’t going"},
            {"ans3": "Are going not"},
            {"ans4": "Went"}
        ],
        "Answer": "Aren't going",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "They __________ to our conference next month.",
        "Choices": [
            {"ans1": "Came"},
            {"ans2": "Are coming"},
            {"ans3": "Is coming"},
            {"ans4": "Come"}
        ],
        "Answer": "Are coming",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I’ll give him the message as soon as ______ him.",
        "Choices": [
            {"ans1": "I will see"},
            {"ans2": "I see"},
            {"ans3": "I saw"},
            {"ans4": "I have saw"}
        ],
        "Answer": "I saw",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I’ll send you an e-mail when _______ his answer.",
        "Choices": [
            {"ans1": "I get"},
            {"ans2": "I will get"},
            {"ans3": "I have got"},
            {"ans4": "I got"}
        ],
        "Answer":"I get",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Can you tell me where _______ ?",
        "Choices": [
            {"ans1": "You comes from"},
            {"ans2": "You come from"},
            {"ans3": "Come you from"},
            {"ans4": "Comes you from"}
        ],
        "Answer": "You come from",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Do you know what time _______ when you arrived?",
        "Choices": [
            {"ans1": "It is"},
            {"ans2": "Is it"},
            {"ans3": "It was"},
            {"ans4": "Was it"}
        ],
        "Answer": "It is",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I can take you to the airport in my car, so _________ take a taxi.",
        "Choices": [
            {"ans1": "You should"},
            {"ans2": "You mustn’t"},
            {"ans3": "You have to"},
            {"ans4": "You don’t have to"}
        ],
        "Answer": "You don't have to",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "This is a non-smoking area, so ______ smoke.",
        "Choices": [
            {"ans1": "You must"},
            {"ans2": "You mustn’t"},
            {"ans3": "You mustn’t to"},
            {"ans4": "You needn’t"}
        ],
        "Answer": "You mustn't",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "The fire started while ________ in my office.",
        "Choices": [
            {"ans1": "I is working"},
            {"ans2": "I work"},
            {"ans3": "I was"},
            {"ans4": "I have been"}
        ],
        "Answer": "I was",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "In 2001, the conference _________ in Geneva",
        "Choices": [
            {"ans1": "Takes place"},
            {"ans2": "Taken places"},
            {"ans3": "Is taken place"},
            {"ans4": "Will take place"}
        ],
        "Answer": "Is taken place",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Where _________ lunch after the meeting?",
        "Choices": [
            {"ans1": "You did have"},
            {"ans2": "Did you have"},
            {"ans3": "Do you have"},
            {"ans4": "Didn’t you have"}
        ],
        "Answer": "Do you have",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "They ______ time to see us before they returned.",
        "Choices": [
            {"ans1": "Did have not"},
            {"ans2": "Have not"},
            {"ans3": "Didn’t have"},
            {"ans4": "Did not"}
        ],
        "Answer": "Didn't have",
        "difficulties":"easy",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "There ______ a lot of students in the past few weeks.",
        "Choices": [
            {"ans1": "Is"},
            {"ans2": "Has been"},
            {"ans3": "Have been"},
            {"ans4": "Are"}
        ], "Answer": "Are",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "If the company ________ more profit, we’d move to new premises.",
        "Choices": [
            {"ans1": "Had made"},
            {"ans2": "Made"},
            {"ans3": "Has made"},
            {"ans4": "Makes"}
        ],
        "Answer": "Had made",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "If I _______ they address, I’d send it to them.",
        "Choices": [
            {"ans1": "Know"},
            {"ans2": "Had known"},
            {"ans3": "Have know"},
            {"ans4": "Would known"}
        ],
        "Answer": "Had known",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "________ here since I left school",
        "Choices": [
            {"ans1": "I work"},
            {"ans2": "I’ve been working"},
            {"ans3": "I’ve worked"},
            {"ans4": "I am working"}
        ],
        "Answer": "I've been working",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "_______ in the suburbs since I got married",
        "Choices": [
            {"ans1": "I’ve living"},
            {"ans2": "I’d living"},
            {"ans3": "I’ve lived"},
            {"ans4": "I’d lived"}
        ],
        "Answer": "I've lived",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "She’s never ______ to Spain",
        "Choices": [
            {"ans1": "Go"},
            {"ans2": "Be"},
            {"ans3": "Been"},
            {"ans4": "Has"}
        ],
        "Answer": "Been",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Please don’t enter the workshop. The mechanic ________ the machinery.",
        "Choices": [
            {"ans1": "Is been servicing"},
            {"ans2": "Is servicing"},
            {"ans3": "____________"},
            {"ans4": "____________"}
        ],
        "Answer": "Is been servicing",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Pamela _______ she couldn’t come",
        "Choices": [
            {"ans1": "Told us"},
            {"ans2": "Said us"},
            {"ans3": "Tell us"},
            {"ans4": "Talked us"}
        ],
        "Answer": "Told us",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Did Tom _______ when he would be back?",
        "Choices": [
            {"ans1": "Said"},
            {"ans2": "Tell"},
            {"ans3": "Talk"},
            {"ans4": "Told"}
        ],
        "Answer": "Said",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Paul wants ______ the supplier tomorrow morning.",
        "Choices": [
            {"ans1": "Me call"},
            {"ans2": "To me call"},
            {"ans3": "Me to call"},
            {"ans4": "Call to me"}
        ],
        "Answer": "Me to call",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Have you finished your work _______ ? Yes, I have.",
        "Choices": [
            {"ans1": "Ever"},
            {"ans2": "Yet"},
            {"ans3": "Still"},
            {"ans4": "Even"}
        ],
        "Answer": "Still",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "My new computer is _______ better than the old one.",
        "Choices": [
            {"ans1": "As"},
            {"ans2": "Than"},
            {"ans3": "Much"},
            {"ans4": "More"}
        ],
        "Answer": "Much",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "________ interesting story!",
        "Choices": [
            {"ans1": "What an"},
            {"ans2": "How an"},
            {"ans3": "What a"},
            {"ans4": "How a"}
        ],
        "Answer": "What an",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I have been working in this company _______ the last 2 years.",
        "Choices": [
            {"ans1": "Since"},
            {"ans2": "During"},
            {"ans3": "For"},
            {"ans4": "While"}
        ],
        "Answer": "Since",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "He has written 5 novels _______ he left university.",
        "Choices": [
            {"ans1": "During"},
            {"ans2": "For"},
            {"ans3": "While"},
            {"ans4": "Since"}
        ],
        "Answer": "Since",
        "difficulties":"intermediate",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I _____ to the hairdresser’s after work today.",
        "Choices": [
            {"ans1": "Goes"},
            {"ans2": "Am going"},
            {"ans3": "Is going"},
            {"ans4": "Have gone"}
        ],
        "Answer":"Am going",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "She _______ to London next week for the project.",
        "Choices": [
            {"ans1": "Am going"},
            {"ans2": "Is going"},
            {"ans3": "Has been"},
            {"ans4": "Went"}
        ],
        "Answer": "Is going",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I will give you an answer as soon as ________",
        "Choices": [
            {"ans1": "I will can"},
            {"ans2": "I can"},
            {"ans3": "I will could"},
            {"ans4": "I could"}
        ],
        "Answer": "I can",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Could you say what ________ this morning?",
        "Choices": [
            {"ans1": "She telled you"},
            {"ans2": "She you telled"},
            {"ans3": "She you told"},
            {"ans4": "She told you"}
        ],
        "Answer": "She told you",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I can’t remember the price ________",
        "Choices": [
            {"ans1": "He give me"},
            {"ans2": "He gave me"},
            {"ans3": "He gave us"},
            {"ans4": "He given us"}
        ],
        "Answer": "He give me",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Peter _______ arrive late this evening. He is still at work.",
        "Choices": [
            {"ans1": "Must to"},
            {"ans2": "May"},
            {"ans3": "Would"},
            {"ans4": "Can"}
        ],
        "Answer": "May",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Mary doesn’t speak German. She _______ this e-mail.",
        "Choices": [
            {"ans1": "Needn’t to"},
            {"ans2": "Must to"},
            {"ans3": "Shouldn’t have written"},
            {"ans4": "Couldn’t have written"}
        ],
        "Answer": "Shouldn't have written",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "The meeting was not productive. I ______ it differently.",
        "Choices": [
            {"ans1": "Would had organized"},
            {"ans2": "Should had organized"},
            {"ans3": "Should have organized"},
            {"ans4": "Could had organized"}
        ],
        "Answer": "Could had organized",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "He _______ employed in Madrid yesterday.",
        "Choices": [
            {"ans1": "Was"},
            {"ans2": "Isn’t"},
            {"ans3": "Had"},
            {"ans4": "Is"}
        ],
        "Answer": "Was",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "Where _____ your children born?",
        "Choices": [
            {"ans1": "Were"},
            {"ans2": "Was"},
            {"ans3": "Is"},
            {"ans4": "Are"}
        ],
        "Answer": "Are",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "While I _______ emails, they were chating in the office.",
        "Choices": [
            {"ans1": "Writing"},
            {"ans2": "Is writing"},
            {"ans3": "Am writing"},
            {"ans4": "Was writing"}
        ],
        "Answer": "Am writing",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "I _______ my mind only yesterday",
        "Choices": [
            {"ans1": "Make up"},
            {"ans2": "Maden up"},
            {"ans3": "Makes up"},
            {"ans4": "Made up"}
        ],
        "Answer": "Made up",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "The alarm ______ because of the smoke in the room",
        "Choices": [
            {"ans1": "Is go off"},
            {"ans2": "Went off"},
            {"ans3": "Goes off"},
            {"ans4": ""}
        ],
        "Answer": "Goes off",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "We didn’t get the contract. We ______ harder for it.",
        "Choices": [
            {"ans1": "May have pushed"},
            {"ans2": "Would have pushed"},
            {"ans3": "Might have pushed"},
            {"ans4": "Should have pushed"}
        ],
        "Answer": "Should have pushed",
        "difficulties":"hard",
        "type": "multiple choice"
    }},
    { "ques": {
        "Question": "The end of the film was great. We ______ before the end",
        "Choices": [
            {"ans1": "Shouldn’t leave"},
            {"ans2": "Wouldn’t have left"},
            {"ans3": "Wouldn’t leave"},
            {"ans4": "Shouldn’t have left"}
        ],
        "Answer": "Shouldn't have left",
        "difficulties":"hard",
        "type": "multiple choice"
    }}
];

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
];