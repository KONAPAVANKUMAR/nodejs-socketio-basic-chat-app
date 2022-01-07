const socket = io('ws://localhost:3000')
socket.on('connection', () => {
    console.log('connected')
})


var app = new Vue({
    el: '#app',
    data: {
        messages : [],
        messageController : null
    },
    methods : {

        sendMessage : function (){
            message = this.messageController
            this.messageController = null
            socket.emit('message',message)
        },

        receiveMessage : function(data){
            this.messages.push(data)
            console.log(this.messages)
        }

    }
})


socket.on('message',(data)=>{
    app.receiveMessage(data)
})


