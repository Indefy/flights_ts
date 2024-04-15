import dayjs from "dayjs";

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

	public depart(): void {
		this.departed = dayjs().format("YYYY-MM-DD HH:mm:ss");
	}

	private land(): void {
		this.landed = dayjs().format("YYYY-MM-DD HH:mm:ss");
	}
}
