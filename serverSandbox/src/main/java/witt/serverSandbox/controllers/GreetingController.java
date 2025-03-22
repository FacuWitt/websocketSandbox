package witt.serverSandbox.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import witt.serverSandbox.messaging.Message;
import witt.serverSandbox.messaging.Greeting;


@Controller
public class GreetingController {
     @MessageMapping("/chat") // if a message is sent to /app/hello, the greeting() method is called
     @SendTo("/topic/greetings") // the return value is sent to /topic/greetings
     public Greeting greeting(Message message) throws Exception {
         System.out.println("Message received: " + message);
         return new Greeting("Hello, " + message.getName() + "!");
     }
}
