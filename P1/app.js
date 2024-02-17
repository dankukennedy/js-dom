
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');

const quotes = [{
     quote:`"The best way to find yourself is to lose yourself in the service of others",`,
	 person:`Mahata Gandhi`
	},
	 {
		quote:`"If you want to live a happy life, tie it to a goal, not to people or things",`,
		person:`Albert Einstein`
	},
	   
	{
		quote:`"At his best, man is the noblest of all animals; seperated from law and justice he is the worse.",`,
		person:`Aristotle`
	},
	   
	{
		quote:`" The best way to find yourself is to lose yourself in the service of others",`,
		person:`Mahata Gandhi`
	},
	   
	{
		quote:`"Your time is limited, so dont waste it living someone else's life.",`,
		person:`Steve Jobs`
	},
	{
		quote:`"Tell me and i forget. Teach me and I remember. Invove me and I learn.",`,
		person:`Benjamin Fraklin`
	},
	   
	{
		quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",`,
		person:`Oprah Winfrey`
	},
	   
	{
		quote:`"It does not matter how slowly you go as long as you do not stop.",`,
		person:`Confucius`
	},
	   
	{
		quote:`"Our lives begin to end the day we become silent about things that matter.",`,
		person:`Martin Luther king, Jr`
	},
	   
	{
		quote:`"Remember that not getting what you want is sometimes a wonderful stroke of luck.",`,
		person:`Dalai Lama`
	},
	   
	{
		quote:`"The journey of a thounsand miles begin with one step",`,
		person:`Lao Tzu`
	},
	   
	];

	btn.addEventListener('click', function(){
		let random = Math.floor(Math.random() * quotes.length);
		
		quote.innerText = quotes[random].quote;
		person.innerText = quotes[random].person;
	})