

Template.top.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    FlowRouter.redirect('/teacher/dashboard');
});

Template.top.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.top.events({
    'click .btn-link'(event) {
        Meteor.logout();
        AccountsTemplates.logout();

    },
});