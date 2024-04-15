import log from "@ajar/marker";
interface FlightData {
	number: string;
	flightNumber: string;
	destination: string;
	landed: string;
	departed: string;
}
export class Api {
	public data: any;

	constructor() {
		this.data = [];
	}

	async fetchData() {
		const flightData = await fetch(
			"https://api.npoint.io/a4429717c3b5df271ab1"
		).then((res) => res.json());
		this.data = flightData;
		log.magenta("flight data: ", this.data);
	}
}
