var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Pizza';
	$scope.promo = 'We Bake out own bread';
	$scope.pizzas = [
		{
			name: 'Chicken-pizza',
			lnk: 'https://media.istockphoto.com/photos/chicken-pizza-picture-id489809469?k=6&m=489809469&s=612x612&w=0&h=zz7CTVbhHtUjwrsAkqYc2LfYl4BpFgknMD15iXaJ02U=',
			price: 100,
			likes:0,
			dislikes:0,
			label: 'In a large skillet, cook chicken in oil over medium heat for 10-15 minutes or until no longer pink. Place the crust on a lightly greased 12-in. pizza pan. Spread with pesto; top with the chicken, tomato, beans and cheeses. Bake at 400° for 10-12 minutes or until cheese is melted.'
		},
		{
			name: 'Veg-pizza',
			lnk:'https://5.imimg.com/data5/JB/CY/MY-51761245/veg-pizza-500x500.png',
			price: 90,
			likes:0,
			dislikes:0,
			label: 'veg pizza recipe. ... vegetable pizza recipe with detailed photo and video recipe. pizza is a flat bread which is prepared with all purpose flour and fermented with yeast. it is typically topped with mozzarella cheese, pizza tomato sauce and other vegetarian pizza toppings.'
		}
	];
	$scope.plusOne = function(index){
			$scope.pizzas[index].likes+=1;
	};
	$scope.minusOne = function(index){
		$scope.pizzas[index].dislikes+=1;
	};
}]);