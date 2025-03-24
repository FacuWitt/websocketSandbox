package witt.serverSandbox.controllers;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import witt.serverSandbox.messaging.Message;

import static org.apache.logging.log4j.message.MapMessage.MapFormat.JSON;


@Controller
public class ChatController {

//    @MessageMapping("/chat") // if a message is sent to /app/hello, the greeting() method is called
//    @SendTo("/topic/chat_channel") // the return value is sent to /topic/greetings
//    public Message broadcastMessage(Message message) throws Exception {
//        System.out.println("Message received: " + message.getContent() + " from " + message.getSender());
//        return message;
//    }




    @MessageMapping("/chat")
    @SendTo("/topic/chat_channel")
    public Message broadcastMessage(Message message, SimpMessageHeaderAccessor headerAccessor) {
//        String sender = headerAccessor.getFirstNativeHeader("username");
//        Object sender = headerAccessor.getHeader("username");
        System.out.println("Message receiveeeed from " + message.getSender() + ": " + message.getContent());

//        message.setSender(sender); // Agregar el remitente al mensaje
        return message;
    }

}
