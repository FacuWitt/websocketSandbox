package witt.serverSandbox.components;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

@Component
public class UserInterceptor implements ChannelInterceptor {
//    @Override
//    public void postSend(org.springframework.messaging.Message<?> message, org.springframework.messaging.MessageChannel channel, boolean sent) {
//        System.out.println("Message sent: " + message.getPayload());
//    }
//    @Override
//    public org.springframework.messaging.Message<?> preSend(org.springframework.messaging.Message<?> message, org.springframework.messaging.MessageChannel channel) {
//        System.out.println("Message received: " + message.getPayload());
//        return message;
//    }

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
//        String username = message.getHeaders().get("simpUser").toString();
//        String username = accessor.getUser().getName();
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        String username = accessor.getFirstNativeHeader("username");

        System.out.println("Message received: " + message.getPayload());

        if (username != null) {
            System.out.println("Username: " + username);
        }

        return message;
    }
}
