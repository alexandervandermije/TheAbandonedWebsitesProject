angular.module('grandmaApp', ['ngRoute'])
  .controller('mainController', function($scope) {
  	$scope.mainImage = "img/factoryWomenWithLogo.png";
  	setActive = function(location)
  	{
  		console.log('Loaded');
  		var homeHeader = $('#homeNavHeader');
  		var projectHeader = $('#projectNavHeader');
  		var warHeader = $('#warNavHeader');
  		var interviewHeader = $('#interviewNavHeader');

  		if(location == 'home')
  		{
  			homeHeader.addClass('active');
  		}
  		else if(location == 'project')
  		{
  			projectHeader.addClass('active');
  		}
  		else if(location == "war")
  		{
  			warHeader.addClass('active');
  		}
  		else if(location == "interviews")
  		{
  			interviewHeader.addClass('active');
  		}
  		else
  		{
  			homeHeader.addClass('active');
  		}
  		
  	}
  });

