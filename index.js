module.exports = Phrase;

// Reverses a string
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function() {
		return this.letters().toLowerCase();
	}
	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	// Returns the letters in the content.
	this.letters = function letters() {
		const lettersRegEx = /[a-z]/gi;
		return (this.content.match(lettersRegEx) || []).join("");
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}