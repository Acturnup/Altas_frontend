const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');

dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
	fetch('https://random.dog/woof.json')


		.then(res => res.json())
		.then(data => {
			dog_result.innerHTML = `<img src="${data.url}"/>`
		}) 
}





		// ANOTHER WAY TO DO THIS
		// .then(res => res.json())
		// .then(data => {
		// 	if(data.url.includes('.mp4')) {  // if the data of the dog url contains a .mp4 then call the function getRandomDog
		// 		getRandomDog();
		// 	}
		// 	else {
		// 		dog_result.innerHTML = `<img src=${data.url} alt="dog" />`; // this includes the dog_result div class and then 
		// 																	// it is added in the innerHTML which says the src 
		// 	}
		// });