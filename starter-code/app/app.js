$(document).ready(function(){
	function displayBooks(){
		$('#books').empty();
		let booksJSON = $.get('https://den-super-crud.herokuapp.com/books').done(function(data){
			console.log('data: ' + data);
			console.log('booksJSON: ' + booksJSON);
			let booksArr = booksJSON.responseJSON.books;
			for(let i = 0; i < booksArr.length; ++i){
				let bookEntry = $('<ul class = "bookEntry">');
				let titleLi = $('<li class = "titleLi">' + booksArr[i].title + '</li>');
				let authorLi = $('<li class = "authorLi">' + booksArr[i].author + '</li>');
				let dateLi = $('<li class = "dateLi">' + booksArr[i].releaseDate + '</li>');
				let imageLi = $('<img class = "imageLi" src = ' + booksArr[i].image + '>');
				bookEntry.append(titleLi, authorLi, dateLi, imageLi);
				$('#books').append(bookEntry);
			}
		});
	}
	$('#submit').click(function(event){
		event.preventDefault();
		let myTitle = $('#book-title').val();
		let myAuthor = $('#book-author').val();
		let myImage = $('#book-image').val();
		let myDate = $('#book-release-date').val();
		console.log("Title: " + myTitle + "  Author: " + myAuthor + "  Image: " + myImage + "  Release Date: " + myDate);
		myBook = {
			title: myTitle, 
			author: myAuthor, 
			image: myImage, 
			releaseDate: myDate
		};
		$.post('https://den-super-crud.herokuapp.com/books', myBook);
		displayBooks();
	});
	displayBooks();
});