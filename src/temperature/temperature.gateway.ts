import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
  },
})
export class TemperatureGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private temperatureData = [
    { timestamp: new Date().toISOString(), temperature: 25 },
  ];

  emitTemperatureUpdates() {
    setInterval(() => {
      const newData = {
        timestamp: new Date().toISOString(),
        temperature: Math.floor(Math.random() * 40), 
      };
      this.temperatureData.push(newData);

      this.server.emit('temperatureUpdate', newData);
    }, 5000);
  }

  afterInit() {
    console.log('Temperature WebSocket Gateway initialized');
    this.emitTemperatureUpdates();
  }

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }
}
