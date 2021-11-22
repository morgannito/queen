var cluster = require('cluster');
const numCPUs = require('os').cpus().length;

nb_noeud = 0
nb_feuille = 0
nb_solution = 0
n = 9
tesst = 0
board = []

workers = []


function verif(board) {
    for (let l1 = 0; l1 < board.length; l1++) {
        for (let l2 = 0; l2 < l1; l2++) {
            c1 = board[l1]
            c2 = board[l2]
            if (c1 == c2) {
                return false
            }
            if (Math.abs(c1 - c2) == Math.abs(l1 - l2)) {
                return false
            }
        }
    }
    return true
}

function place(board, line, max) {
    for (let step = 0; step < max; step++) {
        board[line] = step
        nb_noeud = nb_noeud + 1
        if (line + 1 < max) {
            place(board, line + 1, max)
        } else {
            nb_feuille = nb_feuille + 1
            if (verif(board)) {
                nb_solution = nb_solution + 1
            }
        }
    }
}

for (let step = 0; step < n; step++) {
    board.push("0")
}



// if (cluster.isMaster) {
//     // Fork workers.
//     for (var i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
// } else {
    console.time('test')
    place(board, 0, n-tesst)
    console.timeEnd('test');
    console.log("n = ",nb_solution,"nombre de noeud =",nb_noeud,"nombre de feuille =",nb_feuille)
// }

