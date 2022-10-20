# THINGS IN HERE

## GEMS

```
gem "sassc-rails"
gem 'haml'
gem 'simple_form'
gem 'devise'
gem 'masonry-rails'
gem 'acts_as_votable'
# gem 'bootstrap-sass'
# gem 'paperclip'
```
- sassc for scss
- active storage from images
- devise set for turbo, rails 7
- from: https://dev.to/efocoder/how-to-use-devise-with-turbo-in-rails-7-9n9

## MASONRY-RAILS
- added cdns
```
%script{:crossorigin => "anonymous", :integrity => "sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=", :src => "https://code.jquery.com/jquery-3.6.1.js"}
%script{:src => "https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"}	
%script{:src => "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"}
%script{:src => "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"}	
= stylesheet_link_tag "application", "data-turbo-track": "reload"
= javascript_importmap_tags
```

- added to app.js

```
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
```

## acts as votable
- add a put patch

```
  resources :pics do
    member do
      put "like", to: "pics#upvote"
    end
  end
```

- and add the button to the pic

```
.col-md-6
	.btn-group.pull-right
		= button_to like_pic_path(@pic), method: :put, class: "btn btn-default" do
			%span.glyphicon.glyphicon-thumbs-up
			= @pic.get_upvotes.size

```

- added in the controller

```
  def upvote
    @pic.upvote_by current_user
    redirect_back(fallback_location: root_path)
  end

```

## MODELS
- devise user
- user has many pics
- pics has image, acts as votable

## OTHER
- used custom stylings