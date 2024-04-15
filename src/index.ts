import log from "@ajar/marker";
import dayjs from "dayjs";
import Flight from "./flight.js";
import FlightTower from "./flight-tower.js";

const { TODAY } = process.env;

dayjs().format();

let msg: string = "hello";

function saySomething(something: string): void {
	log.yellow("today's message is:", something);
	log.magenta("today is:", TODAY);
}

saySomething(msg);
