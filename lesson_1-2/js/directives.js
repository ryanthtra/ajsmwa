parking.directive("alert", function()
{
  return {
    restrict: 'E',
    scope: {
      mytopic: '@topic',  // @ - passes data as a string
      mydescription: '@description'
    },
    templateUrl: "alert.html",
    replace: true
  };
});