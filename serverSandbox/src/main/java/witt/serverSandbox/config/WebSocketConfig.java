package witt.serverSandbox.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){
        config.enableSimpleBroker("/topic"); // Prefix for messages that are bound for methods annotated with @SendTo
        config.setApplicationDestinationPrefixes("/app"); // Prefix for messages that are bound for methods annotated with @MessageMapping
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) { // Register STOMP endpoints
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*"); // Endpoint for websocket connections
    }
}

