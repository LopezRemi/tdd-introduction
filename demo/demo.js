export function sum(a, b) {
    return a + b;
}

export function sayHello() {
    return 'hello';
}

const users = ["luffy", "zorro", "sanji", "usopp", "chopper", "Nami"];

export function getUsers() {
    return users
}

export function getCaptain() {
    if (users.includes('luffy')) {
        return 'luffy'
    }
    else return "hahaha vous n'avez pas dit le mot magique !!";
}

export function checkTip(a, b) {
    return (100 * a) / b;
} 