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

var productSite;
$(function(){
	productSite = new ProductSite();
});
