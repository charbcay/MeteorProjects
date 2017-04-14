AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
    },
});
function myLogoutFunc(){
    FlowRouter.go("/login");
}
function mySubmitFunc(){

}
function myPreSubmitFunc(){

}
function myPostSubmitFunc(){

}
AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/login',
    template: 'myLogin',
    layoutTemplate: 'main_layout',
    layoutRegions: {
        home: 'login',

    },
    contentRegion: 'login',
    redirect: '/teacher/dashboard'
});
FlowRouter.route('/',{
    name:"index",
    action: function() {
        BlazeLayout.render('FirstLayout',
            {
                top: "top",
                main: "main",
                footer: "footer"
            });

    }
});
FlowRouter.route('/teacher',{
    name:"teacher",
    action: function() {
        BlazeLayout.render('FirstLayout',
            {
                top: "top",
                main: "main",
                footer: "footer"
            });

    }
});
FlowRouter.route('/home', {
    name:"home",
    action: function() {
        BlazeLayout.render('FirstLayout',
            {
                top: "top",
                main: "main",
                footer: "footer"
            });

    }
});
FlowRouter.route('/teacher/dashboard',{
    name:"dashboard",
    action:function(){
       BlazeLayout.render('FirstLayout',
       {
           top: "teacherNav",
           main: "dashboard",
           footer: "teacherFooter"

       });
   }
});
FlowRouter.route('/teacher/testList',{
    name: "testList",
    action:function(){
        BlazeLayout.render('FirstLayout',
            {
                top: "teacherNav",
                main: "testList",
                footer: "teacherFooter"

            });
    }
});
FlowRouter.route('/teacher/createTest',{
    name:"createTest",
    action:function(){
        BlazeLayout.render('FirstLayout',
            {
                top: "teacherNav",
                main: "createTest",
                footer: "teacherFooter"

            });
    }
});
FlowRouter.route('/teacher/studentRecord',{
    name:"studentRecord",
    action:function(){
        BlazeLayout.render('FirstLayout',
            {
                top: "teacherNav",
                main: "studentRecord",
                footer: "teacherFooter"

            });
    }
});
FlowRouter.route('/teacher/profile',{
    name:"profile",
    action:function(){
        BlazeLayout.render('FirstLayout',
            {
                top: "teacherNav",
                main: "profile",
                footer: "teacherFooter"

            });
    }
});
FlowRouter.route('/examination',{
    name:"examination",
    action:function(){
        BlazeLayout.render('ExaminationLayout',
            {
                main: "examination"
            });
    }
});
FlowRouter.route('/examination/:myTest',{
    name:"examination",
    action:function(){
        BlazeLayout.render('ExaminationLayout',
            {
                main: "exam"
            });
    }
});


