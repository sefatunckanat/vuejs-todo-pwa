if('serviceWorker' in navigator){
	navigator.serviceWorker
		.register('./../service-worker.js',{ scope: './'})
		.then(function(registration){
		})
		.catch(function(err){
			console.log(err);
		})
}