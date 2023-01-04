
let amount = +prompt('Введите количество пользователей')

for(let i = 1; i <=amount; i++){
    imya = prompt(`Введите имя ${i} ого пользователя`),
    age = +prompt(`Введите возраст ${i} ого пользователя`)
    let data = {
    id: `Пользователь - ${i}`,
    name: `Имя - ${imya}`,
    age1: `Возраст - ${age}`
}
for(let key in data){
    console.log(data[key]);
}
}


