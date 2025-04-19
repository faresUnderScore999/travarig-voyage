<template>
  <div class="container-flight">
    <strong>Find yo<div >u</div>r flight </strong>
    <FlightSearch/>
    <div class="content">
        <div class="menu"> 
            <client-only>
            <flightMenu/>
            </client-only>
         </div>
        <div class="offers">
            <div v-for="i in 10" :key="i">
                <client-only>
             <flightOffer :flight="sampleFlight"/>
                </client-only>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import FlightSearch from "~/components/search/flight.vue";
import flightOffer from "~/components/cards/flightOffer.vue";
import flightMenu from "~/components/menus/flightMenu.vue";
definePageMeta({
  middleware: 'authenticate'  // this will trigger middleware in `middleware/auth.js`
})

const sampleFlight = {
  date: 'Mer, 23 avr 2025',
  airlineName: 'Alitalia',
  airlineLogo: 'https://www.gstatic.com/flights/airline_logos/70px/AZ.png',
  departureTime: '18:10',
  departureAirport: 'TUN',
  arrivalTime: '17:25',
  arrivalAirport: 'FRA',
  stops: '1 escale',
  totalDuration: '22h15min',
  remainingSeats: 1,
  flightClass: 'Économique',
  segments: [
    {
      airlineName: 'Alitalia',
      airlineLogo: 'https://www.gstatic.com/flights/airline_logos/70px/AZ.png',
      flightNumber: 'AZ867',
      departureDate: 'Mer, 23 avr 2025',
      departureTime: '18:10',
      departureAirport: 'TUN',
      departureTerminal: 'M',
      arrivalDate: 'Mer, 23 avr 2025',
      arrivalTime: '20:35',
      arrivalAirport: 'FCO',
      arrivalTerminal: '3',
      duration: '2:25',
      flightClass: 'Économique',
      bookingClass: 'S',
      aircraftType: '319',
      layoverDuration: '18h50min'
    },
    {
      airlineName: 'Alitalia',
      airlineLogo: 'https://www.gstatic.com/flights/airline_logos/70px/AZ.png',
      flightNumber: 'AZ404',
      departureDate: 'Jeu, 24 avr 2025',
      departureTime: '15:25',
      departureAirport: 'FCO',
      departureTerminal: '1',
      arrivalDate: 'Jeu, 24 avr 2025',
      arrivalTime: '17:25',
      arrivalAirport: 'FRA',
      arrivalTerminal: '1',
      duration: '2:0',
      flightClass: 'Économique',
      bookingClass: 'S',
      aircraftType: '32N'
    }
  ],
  price: '778.500',
  passengerCount: 1
}
</script>
<style scoped>
strong div{
    color: orange;
}
strong{
    background: rgba(0,0,0,0.5);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 50px;
    border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  font-family: Beyond;
  font-size: 50px;
  color: white;
  text-transform: uppercase;
}
.content{
    width: 100%;
    display: flex;
  
}
.menu{
    width: 25%;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.offers{
    background: #f0f3f5;
    width: 75%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.container-flight{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>