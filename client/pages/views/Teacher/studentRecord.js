if(Meteor.isClient) {
    Template.studentRecord.onCreated(function () {

    });
    Template.studentRecord.onRendered(function () {

    });
    Template.studentRecord.helpers({

    });
    Template.studentRecord.events({
        "click .report":function(){
           Blaze.saveAsPDF(Template.report, {
                filename: "report.pdf", // optional, default is "document.pdf", // optional, render the template with this data context
                x: 0, // optional, left starting position on resulting PDF, default is 4 units
                y: 0, // optional, top starting position on resulting PDF, default is 4 units
                orientation: "landscape", // optional, "landscape" or "portrait" (default)
                unit: "in", // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
                format: "letter" // optional, see Page Formats, default is "a4"
            });
            Blaze.outputAsPDF(Template.report, 'dataurlnewwindow');
        }
    });
    Template.studentRecord.onDestroyed(function(){

    });
}