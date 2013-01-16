
Containrs = new Meteor.Collection("containrs");

if (Meteor.isClient) {

  Meteor.subscribe("containrs");

  Template.meineContainer.containers = function(){
    return Containrs.find({}).fetch();
  }

  function rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  Template.meineContainer.events({
    'click input' : function(){
        var ctr = prompt("Wo ist der Containr und was ist drin?", "DENN's BioMarkt Ehrenfeld "+rand(1,20)+" Sack Kartoffeln");
        Containrs.insert({title: ctr});
    }
  })

  // Template.meineContainer.events({
  //   'click input' : function () {
  //         var ctr = prompt("Wo ist der Containr und was ist drin?", "");
  //         var fragment = Meteor.render(function () {
  //           return "<li>Neuer Containr: "+ctr+"</li>"; 
  //           // return Containrs.findOne({});
  //         });
  //         $('#containrListe').append(fragment)
  //   }
  // });
}
 
// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     Meteor.autorun(function () {
//     });
//    });
// }