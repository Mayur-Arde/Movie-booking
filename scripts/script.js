const seatContainer = document.querySelector('.seat-container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total =document.getElementById('total');

const selectedMovie = document.getElementById('movie');
let ticketPrice = +selectedMovie.value;

// console.log(ticketPrice);

function updateCountTotal(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const numberOfSeats = selectedSeats.length;
  count.textContent = numberOfSeats;
  total.textContent = `₹${+numberOfSeats * ticketPrice}`;
}

selectedMovie.addEventListener('change', e=>{
  ticketPrice = +e.target .value;
  updateCountTotal();
})


seatContainer.addEventListener('click', e =>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
  }
  updateCountTotal();
})

