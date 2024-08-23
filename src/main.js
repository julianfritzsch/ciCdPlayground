import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Julian Fritzsch',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Agile Development',
			'Automation'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins',
		// What do you want to learn in this workshop? 
		expectations: [
			'Learn about Jenkins',
			'Overview over different CI tools'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'hiking',
			'skiing',
			'music'
		]
	}
});
