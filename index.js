tab = [];
nb_queen = 4;
i = 0;
while (i < nb_queen){
    j = 0;
    ligne = []
    while (j<nb_queen){
        ligne.push("0");
        j= j+1;
    }
    tab.push(ligne)
    i= i+1;
}

function add_queen(tab) {
    tab.forEach(i => {
        test = 0;
        i.forEach(mycase =>{
            if (mycase == "0"){
            }else{
                test = 1;
            }
        })
        if (test == 0){
            random = getRandom(nb_queen);
            tab[tab.indexOf(i)][random] = "1";
        }
    })
    return tab
}

function queen_is_here(tab){
    for (i in tab){
        if (i === "1"){
            return false;
        }
            return true
    }
}
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function eat_queen(tab){

}
tab = add_queen(tab)
console.log(tab)