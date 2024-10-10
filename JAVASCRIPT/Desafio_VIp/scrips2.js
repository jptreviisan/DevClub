const alunos = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]


const nota = alunos.map(user => {
    return {
    Aluno: user.name,
    situacao: user.testGrade >= 7 ? "APROVADO" : "REPROVADO"
}

})

console.log(nota)