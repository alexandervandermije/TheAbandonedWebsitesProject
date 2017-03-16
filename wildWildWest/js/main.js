angular.module('wildWildWestApp', [])
  .controller('mainController', function($scope) {
   	
   	
   	$scope.showCastTab = true;
      $scope.showFilmmakersTab = false;
      $scope.changeAboutTab = function(people)
   	{
         console.log(people);
         $scope.showCastTab = false;
         $scope.showFilmmakersTab = false;
   		if(people == "cast")
   		{
   			$scope.showCastTab = true;
   		}
   		else if(people == 'filmmakers')
   		{
   		   $scope.showFilmmakersTab = true;
   		}
   	};
   	$('#coverflowCostumeDesign').coverflow();
   	$('#coverflowCostumeDesign').coverflow('index', 5);


   	$('#coverflowArms').coverflow();
   	

      $("#coverflowSets").coverflow();
      

      $("#coverflowSpecialEffects").coverflow();
      

   	$scope.showCostumeTab = true;
   	$scope.changeProductionTab = function(tab)
   	{
   		$scope.showArmsTab = false;
   		$scope.showCostumeTab = false;
   		$scope.showSetsTab = false;
   		$scope.showSpecialTab = false;

   		if(tab == 'special')
   		{
   			$scope.showSpecialTab = true;
            $("#coverflowSpecialEffects").coverflow('index', 5);
   		}
   		else if(tab == 'costume')
   		{
   			$scope.showCostumeTab = true;
            $('#coverflowCostumeDesign').coverflow('index', 5);
   		}
   		else if(tab == 'arms')
   		{
   			$scope.showArmsTab = true;
            $('#coverflowArms').coverflow('index', 6);
   		}
   		else if(tab == 'sets')
   		{
   			$scope.showSetsTab = true;
            $("#coverflowSets").coverflow('index', 6);
   		}
   	}
      $('#coverflowGallery').coverflow();
      $('#coverflowGallery').coverflow('index', 6)
   	
   	

});