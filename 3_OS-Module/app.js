import os from 'os';

let platform = os.platform();
let arch = os.arch();
let freemem = os.freemem() / 10 ** 6;
let totalmem = os.totalmem();
let uptime = os.uptime();
let userInfo = os.userInfo();
let homedir = os.homedir();
let hostname = os.hostname();
let tempdir = os.tmpdir();
let ostype = os.type();
let networkInterfaces = os.networkInterfaces();

console.log({
    platform,
    arch,
    freemem,
    totalmem,
    uptime,
    userInfo,
    homedir,
    hostname,
    tempdir,
    ostype,
    ...networkInterfaces,
});