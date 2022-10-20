// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
$(document).on('turbo:load', function() {
	// alert('hi');
  return $('#pics').imagesLoaded(function() {
  	// alert('in here');
    return $('#pics').masonry({
      itemSelector: '.box',
      isFitWidth: true
    });
  });	
});