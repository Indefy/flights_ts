
import dayjs from 'dayjs';

export default class Flight {
  private number: number;
  private origin: string;
  private destination: string;
  private landed: string;
  private departed: string;

  constructor(data: any) {
    this.number = data.number;
    this.origin = data.origin;
    this.destination = data.destination;
    this.landed = data.landed;
    this.departed = data.departed;
  }
  get flightNumber(): number {
    return this.number;
  }
  get flightOrigin(): string {
    return this.origin;
  }
  get flightDestination(): string {
    return this.destination;
  }
  get flightLanded(): string {
    return this.landed;
  }
  get flightDeparted(): string {
    return this.departed;
  }

  public depart(): void {
    this.departed = dayjs().format('YYYY-MM-DD HH:mm:ss'); 
  }

  private land(): void {
    this.landed = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }
}
