(function iniciarMockBackEnd() {
	var jsonServer = require('json-server');
	var path = require('path');
	var fs = require('fs');
	var server = jsonServer.create();
	var router = jsonServer.router(path.join(__dirname, 'db.json'));
	var rewriter = jsonServer.rewriter(
		JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')))
	);
	var middlewares = jsonServer.defaults();

	server.use(middlewares);
	server.use(rewriter);
	router.render = (req, res) => {
		res.header(
			'X-CSRF-Token',
			'UIjY1JjyArvr43YeULqMGi0s3064MQGsPuWSWc5HHqk1EKlWJmHQ1SWuadcBCQDhldqlaSmGges='
		);
		if (req.url === '/authenticate') {
			res.jsonp({
				token:
					'g3GQvqd/nAnP4hMxpdnyLqsCWgIZAsp1OlBo+ks0yWMZRHInXWOYK8YF537qeWnlI3awOe3XkWg='
			});
		} else if (req.url === '/ping') {
			res.status(200).send({ time: Math.floor(Math.random() * 1000000000000) });
		}  else {
			res.jsonp(res.locals.data);
		}
	};
	server.use(router);
	server.listen(9090, () => {
		console.log('JSON Server is running');
	});
})();
