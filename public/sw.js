importScripts("/scram-controller/controller.sw.js");
self.addEventListener("fetch", function (event) {
  if ($scramjetController.shouldRoute(event)) {
		event.respondWith($scramjetController.route(event));
	}
});