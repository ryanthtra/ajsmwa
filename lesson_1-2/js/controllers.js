// Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function($scope)
{
  $scope.appTitle = "Packt Parking";
  // Binding the car's array to the scope
  $scope.cars = [];

  $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

  // Binding the park function to the scope
  $scope.park = function(car)
  {
    car.entrance = new Date();
    $scope.cars.push(car);
    delete $scope.car;
  };
});