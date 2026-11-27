const cardsContainer=
document.getElementById('cards');
const cards=[
    {
     title: 'FULL NAME',
     desc: 'Marie Salomea Sklodowska Curire'
    },
    {
     title: 'BORN',
     desc: '7 November 1867'
    },
    {
     title: 'BIRTHPLACE',
     desc: 'Warsaw, Poland'
    },
    {
     title: 'DIED',
     desc: '4 July 1934'
    },
    {
     title: 'NATIONALITY',
     desc: 'Polish and French'
    },
    {
     title: 'FIELDS',
     desc: 'Physics and Chemistry'
    },
    {
     title: 'SPOUSE',
     desc: 'Pierre curire'
    },
    {
     title: 'CHIDERN',
     desc: 'Irene and Eve Curire'
    }
]


cards.forEach((card)=>{
    let child = `<div class="card">
    <div class="content">
    <h6>${card.title}</h6>
    <p>${card.desc}</p>
    </div>
    </div>`;
    cardsContainer.innerHTML+= child;
})
