import io from "socket.io-client"

const socket = io("http://192.168.1.115:8080", {
    transports: ["websocket"]
})

export default socket