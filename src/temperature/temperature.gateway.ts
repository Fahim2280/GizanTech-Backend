import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@WebSocketGateway()
export class TemperatureGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private readonly temperatureService: TemperatureService) {}

  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  broadcastTemperature() {
    const temperature = this.temperatureService.generateRandomTemperature();
    this.server.emit('temperatureUpdate', {
      temperature,
      timestamp: new Date().toISOString(),
    });
  }
}
