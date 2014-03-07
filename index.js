var Portfolio = {};

$(document).ready(function () {
	Portfolio.Router = Backbone.Router.extend({
		routes: {
			"projects": "showProjects",
			"": "showRoot"
		},
		showProjects: function () {
			$(".view").addClass("invisible");
			$(".projects").removeClass("invisible");
		},
		showRoot: function () {
			$(".view").addClass("invisible");
			$(".root").removeClass("invisible");
		}
	});
	var router = new Portfolio.Router();
	Backbone.history.start();
});