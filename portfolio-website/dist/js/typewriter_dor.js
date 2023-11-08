class TypeWriter {
	constructor(txtElement, words, wait = 500) {
		this.txtElement = txtElement;
		this.words = words;
		this.waitTime = wait;
	}

	type() {
		console.log(this.words);

		for (let i = 0; i < 3; i++) {
			console.log(i);
			this.words.forEach((word) => {
				console.log(word);
			});
		}
	}
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', initTypeWriter);

async function initTypeWriter() {
	console.log('ss');
	const txtElement = document.querySelector('.txt-type');
	// const words_ = txtElement.getAttribute('data-words');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = JSON.parse(txtElement.getAttribute('data-wait'));

	// Init TypeWriter
	const typeWriter = new TypeWriter(txtElement, words, wait);
	typeWriter.type();
}
