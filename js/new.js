angular.module('indexPage', [])
  .controller('nameController', function($scope,$rootScope) {

    $scope.names = ["Sarvesh Jatti","Prasan Jatti", "George", "Isaac", "Naveen","Rahul","Sachin","Vijay"];
    var tempArray = [];

    for(var i = 2;i<5;i++){
      tempArray.push($scope.names[i])
    }

    $scope.tempArray = tempArray;

    console.log($scope.names.length);

    $scope.getBioData = function(name){
      console.log(name);
    }

  })//End controller
  .controller('bioDataController', function($scope,$rootScope) {

    $scope.bioData = [{
      name:"Sarvesh Jatti",
      age:28,
      location:"Bangalore",
      native: "Bidar",
      name:"Tom Cruise"
    },{
      name:"Prasan Jatti",
      age:24,
      location:"Hyderabad",
      native: "Bidar"
    },{
      name:"George",
      age:28,
      location:"New Delhi",
      native: "Bidar"
    },{
      name:"Rahul",
      age:28,
      location:"Mumbai",
      native: "Bidar"
    },{
      name:"Isaac",
      age:23,
      location:"Chennai",
      native: "Bidar"
    }]

    })//End controller
