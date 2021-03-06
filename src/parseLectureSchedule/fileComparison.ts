import * as crypto from "crypto";
import * as fs from "fs";

function checksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || "sha1")
        .update(str, "utf8")
        .digest(encoding || "hex");
}

export function compareFiles(filename, course, callback) {
    if (fs.existsSync("tmp/new." + filename) && fs.existsSync("tmp/" + course + ".pdf")) {
        fs.readFile("tmp/" + course + ".pdf", (errOld, dataOld) => {
            const oldFile = checksum(dataOld, "sha256", "hex");
            fs.readFile("tmp/new." + filename, (errNew, dataNew) => {
                const newFile = checksum(dataNew, "sha256", "hex");
                callback(newFile === oldFile);
            });
        });
        return;
    }
    callback(false);
}
