import Flight from './flight';

interface FlightData {
    number: string;
    flightNumber: string;
    destination: string;
    landed: string;
    departed: string;
  }

export default class FlightsTower {
 private flights: Flight[] = [];
 private destinations: string[] = [];
    get flightsCount(): number {
        return this.flights.length;
    }
    get uniqueDestinations(): string[] {
        return this.destinations;
    }
 
 public createFlights(data: any): void {
    if (data.flights) {
      data.flights.forEach((flightData: FlightData) => {
        const flight = new Flight(flightData);
        this.flights.push(flight);
        if (!this.destinations.includes(flightData.destination)) {
          this.destinations.push(flightData.destination);
        }
      });
    } else {
        throw new Error("Invalid data format");
    }
  }
  public departAll(): void { 
    this.flights.forEach(flight => flight.depart());
  }
}

const tower = new FlightsTower();
const flightData = await fetch('https://api.npoint.io/a4429717c3b5df271ab1').then(res => res.json());
console.log("flight data: ",flightData);
tower.createFlights(flightData);
console.log("Total flights:", tower.flightsCount);
console.log("Unique destinations:", tower.uniqueDestinations);
tower.departAll();
