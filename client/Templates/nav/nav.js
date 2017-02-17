if(Meteor.isClient){
    Template.teacherNav.onCreated(function(){

    });
    Template.teacherNav.onRendered(function(){
        var name = FlowRouter.current().route.name;
        $("#menu li").removeClass("active");
        $("#"+name).addClass("active");
    });
    Template.teacherNav.helpers({


    });
    Template.teacherNav.events({
        "click #dashboard":function(){
            $("#menu li").removeClass("active");
            $("#dashboard").addClass("active");
            FlowRouter.go('/teacher/dashboard');
        },
        "click #testList":function(){
            $("#menu li").removeClass("active");
            $("#testList").addClass("active");
            FlowRouter.go('/teacher/testList');
        },
        "click #createTest":function(){
            $("#menu li").removeClass("active");
            $("#createTest").addClass("active");
            FlowRouter.go('/teacher/createTest');
        },
        "click #studentRecord":function(){
            $("#menu li").removeClass("active");
            $("#studentRecord").addClass("active");
            FlowRouter.go('/teacher/studentRecord');

        },
        "click #profile":function(){
            $("#menu li").removeClass("active");
            FlowRouter.go('/teacher/profile');
        },
        "click #logout":function(){
            Meteor.logout();
            AccountsTemplates.logout();
        }

    });
    Template.dashboard.onDestroyed(function(){

    });
}