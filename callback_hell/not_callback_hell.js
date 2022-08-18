const { clear } = require("console");
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
/*
(aixo estava dins el catch)
const props = Object.getOwnPropertyNames(error);
        console.log(`Properties of the error:
        ${props}
        
        `);
        console.log("Cause: "+error.cause);
        console.log("Message: "+error.message);
        console.log("Filename: "+error.filename);
        console.log("lineNumber: "+error.lineNumber);
        console.log("toString(): "+error.toString());
        console.log("stack: "+error.stack);
        console.log("code: "+error.code);
        console.log();
        console.log();
        console.log(error);
        console.log(`
            ${error.stack.constructor.name}
        `);
*/

/*
Amb aquest codi estrany i super fragil (si tens algun nom de directori que comença
amb numeros, fallara) parsejo el error.stack per ensenyar-te el numero de linia
directament i aixi t'estalvio energia ocular pq no has de buscar el numero tu solet.
De res:
    catch (error) {
        let linia = error.stack.split("notHell")[1];
        i = 0;
        while (isNaN(parseInt(linia.split(`:`)[i])))
            i++;
        linia = parseInt(linia.split(`:`)[i]);
        console.log(`Error!
        Tipus: ${error.constructor.name}
        Missatge: ${error.message}
        Codi: ${error.code}
        A la funció notHell, el error s'ha generat a la línia ${linia}`);
    }
*/



