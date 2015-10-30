$.fn.scrollTo = function( target, options, callback ){
	if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
	var settings = $.extend({
		scrollTarget  : target,
		offsetTop     : 50,
		duration      : 500,
		easing        : 'swing'
	}, options);
	return this.each(function(){
		var scrollPane = $(this);
		var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
			if (typeof callback == 'function') { callback.call(this); }
		});
	});
}
var ProductSite = function () {
	var init = function () {
		initRecentBlogPostFetcher();
	};

	var initRecentBlogPostFetcher = function () {
		var url  = "http://www.frontlinesms.com/?json=get_recent_posts&count=1&callback=?";
		$.getJSON(url, function(result){
			var recentPost = result.posts[0];
			$('.recent-post-title').html(recentPost.title);
			$('.recent-post-image').attr('src', recentPost.thumbnail_images.medium.url);
			$('.recent-post-excerpt').html(recentPost.excerpt);
		});
	}

	init();
}
var show = function(){
    var form = $("#sign-up-form");
	form.slideDown();
	$("#showSignUp").slideUp();
	var body = $(".signup-button-container");
	//body.animate({scrollTop:1000});
	$('body').scrollTo($('#marker').offset().top);
	console.log("Animated");
};

var productSite;
$(function(){
	productSite = new ProductSite();
});
$("#showSignUp").click(show);
