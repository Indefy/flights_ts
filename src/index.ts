import log from '@ajar/marker';
import {Alian} from './api.js';
import dayjs from 'dayjs';
import  Flight from './flight.js';
import FlightTower from './flight-tower.js';

const { TODAY } = process.env;

dayjs().format()

let msg: string = "hello";

function saySomething(something:string):void{
    log.yellow('today\'s message is:',something); 
    const ET = new Alian();
    log.magenta('today is:',TODAY); 
}

saySomething(msg);