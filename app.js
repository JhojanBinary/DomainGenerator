let pronoun = ['el', 'las', 'nuestra', 'los'];
let adj = ['malas', 'grandes'];
let noun = ['modelo', 'mano'];

// Función para generar todas las combinaciones de nombres de dominio

function generateDomainNames() {
    let domainNames = [];

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                let domainName = pronoun[i] + adj[j] + noun[k] + '.com';
                domainNames.push(domainName);
            }
        }
    }
    return domainNames;
}

let domainNames = generateDomainNames();
// Imprime los nombres de dominio
for (let i = 0; i < domainNames.length; i++) {
    console.log(domainNames[i]);
}
