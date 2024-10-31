import { sha256 } from "js-sha256";

export function hashPassword(password) {
    return sha256(password + 10);
}