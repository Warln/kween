var router = new VueRouter();
router.map({
	'/': {
		component: home,
		name: 'home'
	},
	'/main': {
		component: main,
		name: 'main'
	},
	'/category': {
		component: category,
		name: 'category'
	}
});
router.redirect({
	'*':"/"
});
router.start(App, 'body');
