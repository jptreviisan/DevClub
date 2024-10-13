
const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        bracelet: user.vip ? 'Black' : 'Green'
    }

    return newUser
})
console.log(newList)