let users = [
    {id:1, name: "Wagner Perin", username: "wagnperin"},
    {id:2, name: "Guilherme Souza", username: "guizim"},
    {id:3, name: "Bruno Alves", username: "bruninhoda011"}
]

async function findUsers(){
    return await users;
}

module.exports = {
    findUsers
};