function watchObj(node, callback){
	return new Proxy(node, {
		
	});
}

class EmailParser{
	constructor(email){
		this.email = email;
	}
}

export { watchObj, EmailParser };