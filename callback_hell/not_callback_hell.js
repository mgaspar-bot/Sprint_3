const {
    readdir,
    readFile,
    writeFile
    } = require("fs/promises");
const {
    join
    } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

async function notHell () {
    try {
        const files = await readdir(inbox);
        // console.log(files);
        for (file of files) {
                const data = await readFile(join(inbox,file), "utf8");
                await writeFile(join(outbox, file), reverseText(data));
                console.log(`${file} was sucessfully saved in the outbox!`);
        }
    } catch (error) {
        console.log(error);
    } //Al final lo mes util es fer log de error "sencer" no nomes el message pq aixi
    //pots mirar en quina linia s'ha generat l'error i diferenciar qui l'ha llençat
    //com podies fer amb el callback_hell.js
}
notHell();
