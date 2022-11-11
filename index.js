export default {
	fetch(request) {
		if(request.url =="https://cc1.cloudfeeling.workers.dev/test") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
};
