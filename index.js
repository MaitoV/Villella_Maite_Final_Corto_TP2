import Server from './server.js';
import {PORT, MODO_PERSISTENCIA} from './config.js';

new Server(PORT, MODO_PERSISTENCIA).start();