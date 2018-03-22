const imageInput = document.getElementById('image-input')
const messageInput = document.getElementById('message-input')
const generateBtn = document.getElementById('generate-btn')
const url = document.getElementById('url')

generateBtn.onclick=function(){
	// console.log(imageInput.value)
	// console.log(messageInput.value)
	const longUrl = 
	 window.location.host +
	'/disappearing-message/message.html?img=' + 
	encodeURIComponent(imageInput.value) +
	imageInput.value + 
	'&msg=' + 
	encodeURIComponent(messageInput.value)


	// url.innerHTML = '<a href="' + longUrl + '">' + longUrl + '</a>'
	// url.innerHTML = `<a href="http://${longUrl}">${longUrl}</a>`        

	axios.get('https://api.rebrandly.com/v1/links/new',{
		params : {
			apikey: 'b69c1bb2a69348a1a6cdc025a66cd471',
			destination: 'http://' + longUrl
		}
	})
	.then(result => {	
		console.log(result)
		const shortUrl = result.data.shortUrl
		const id = result.data.id
		url.innerHTML = `<a href="http://${shortUrl}">${shortUrl}</a>`
	    
	    axios.post(`https://api.rebrandly.com/v1/links/${id}`,{
	    	apikey:'b69c1bb2a69348a1a6cdc025a66cd471',
	    	title:'Link with id ',
	    	destination: 'http://'+ longUrl + `&id=${id}`
	    })


	})




}









// url.innerHTML = '<a href= "https://www.facebook.com/">Facebook.Link</a>'

	

