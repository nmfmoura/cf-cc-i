export default {
	fetch(request) {
		// console.log(request.url);
		// console.log(request.method);
		if(request.method == "GET") {
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
		}
		else if(request.method == "POST") {
			// console.log("received POST request");
			const reply = {
				'key1': 'value1',
				'key2': 'value2'
			}
			return new Response(JSON.stringify(reply, null, 2), {
				headers: {
					'content-type': 'application/json;charset=UTF-8',
				},
			});
		}
	},
};
