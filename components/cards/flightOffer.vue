<template>
    <div class="flight-card-container">
      <div class="flight-info-section">
        <div class="flight-header">
          <span class="flight-date">
            <i class="bi bi-calendar4 me-1"></i>{{ flight.date }}
          </span>
        </div>
  
        <div class="flight-main-info">
          <div class="airline-logo">
            <img :src="flight.airlineLogo" :alt="flight.airlineName">
          </div>
  
          <div class="flight-timings">
            <div class="departure-info">
              <div class="time">{{ flight.departureTime }}</div>
              <div class="airport-code">{{ flight.departureAirport }}</div>
            </div>
  
            <div class="flight-duration">
              <div class="stops">{{ flight.stops }}</div>
              <div class="duration-line">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
                <div class="dot-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  </svg>
                </div>
              </div>
              <div class="duration">
                <i class="bi bi-clock pe-1"></i>{{ flight.totalDuration }}
              </div>
            </div>
  
            <div class="arrival-info">
              <div class="time">{{ flight.arrivalTime }}</div>
              <div class="airport-code">{{ flight.arrivalAirport }}</div>
            </div>
          </div>
  
          <div class="flight-extra-info">
            <div class="remaining-seats">
              <span class="tooltip-container">
                <span class="tooltip-trigger">
                  <img src="https://www.gstatic.com/flights/airline_logos/70px/TK.png"> x {{ flight.remainingSeats }}
                </span>
                <span class="tooltip-content">Il ne reste que {{ flight.remainingSeats }} places</span>
              </span>
            </div>
  
            <div class="flight-class">
              {{ flight.flightClass }}
            </div>
  
            <div class="details-toggle">
              <button 
                class="details-button" 
                @click="toggleDetails"
                :aria-expanded="showDetails.toString()"
                aria-controls="flight-details"
              >
                Détails <i class="bi bi-chevron-down text-muted ms-1" :class="{ 'rotate-180': showDetails }"></i>
              </button>
            </div>
          </div>
        </div>
  
        <div 
          class="flight-details-section" 
          id="flight-details"
          v-show="showDetails"
        >
          <div class="details-header">
            <h4>Détails vol aller</h4>
            <button class="close-details" @click="toggleDetails">
              <i class="bi bi-x-circle"></i>
            </button>
          </div>
  
          <div class="segment-details" v-for="(segment, index) in flight.segments" :key="index">
            <div class="segment-header">
              <img :src="segment.airlineLogo" :alt="segment.airlineName">
              <span>{{ segment.airlineName }} <span class="flight-number">{{ segment.flightNumber }}</span></span>
            </div>
  
            <div class="segment-info">
              <p class="departure-info">
                Départ le <strong>{{ segment.departureDate }}</strong> à 
                <strong>{{ segment.departureTime }}</strong>
                <span>
                  <i class="bi bi-pin-map pe-1"></i>
                  {{ segment.departureAirport }} - Terminal {{ segment.departureTerminal }}
                </span>
              </p>
  
              <div class="segment-meta">
                <span><i class="bi bi-clock pe-1"></i>{{ segment.duration }}</span>
                <span><i class="bi bi-briefcase me-1"></i>{{ segment.flightClass }}</span>
                
                <span class="tooltip-container">
                  <span class="tooltip-trigger">
                    <i class="bi bi-bag-check me-1"></i>{{ segment.bookingClass }}
                  </span>
                  <span class="tooltip-content">Classe de réservation est {{ segment.bookingClass }}</span>
                </span>
                
                <span class="tooltip-container">
                  <span class="tooltip-trigger">
                    <i class="bi bi-bookmark-check"></i>{{ segment.aircraftType }}
                  </span>
                  <span class="tooltip-content">Type d'appareil est {{ segment.aircraftType }}</span>
                </span>
              </div>
  
              <p class="arrival-info">
                Arrivée le <strong>{{ segment.arrivalDate }}</strong> à 
                <strong>{{ segment.arrivalTime }}</strong>
                <span>
                  <i class="bi bi-pin-map pe-1"></i>
                  {{ segment.arrivalAirport }} - Terminal {{ segment.arrivalTerminal }}
                </span>
              </p>
            </div>
  
            <div class="layover-info" v-if="segment.layoverDuration">
              Escale de {{ segment.layoverDuration }}
            </div>
          </div>
        </div>
      </div>
  
      <div class="flight-price-section">
        <div class="price-info">
          <div class="total-price">{{ flight.price }} <small>TND</small></div>
          <div class="passenger-info">
            Pour {{ flight.passengerCount }} personne
            <button class="info-button" @click="showFareRules">
              <i class="bi bi-info-circle"></i>
            </button>
          </div>
        </div>
        
        <button class="select-button" @click="selectFlight">Choisissez</button>
      </div>
  
      <!-- Fare Rules Modal -->
      <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <h4>Règles tarifaires</h4>
              <h5>{{ flight.departureAirport }} <i class="bi bi-arrow-right"></i> {{ flight.arrivalAirport }}</h5>
            </div>
            
            <div class="modal-price">
              <span>Prix total</span>
              <h4>{{ flight.price }} <small>TND</small></h4>
            </div>
            
            <button class="select-button" @click="selectFlight">Choisissez</button>
            
            <button class="close-button" @click="closeModal">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          
          <div class="modal-body">
            <div class="price-details">
              <h5>Détails prix</h5>
              <div class="loading-spinner">
                <div class="spinner"></div>
              </div>
            </div>
            
            <div class="booking-conditions">
              <h5>Conditions de réservation</h5>
              <div class="loading-spinner">
                <div class="spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    flight: {
      type: Object,
      required: true,
      default: () => ({
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
      })
    }
  });
  
  const showDetails = ref(false);
  const showModal = ref(false);
  
  const toggleDetails = () => {
    showDetails.value = !showDetails.value;
  };
  
  const showFareRules = () => {
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const selectFlight = () => {
    // Emit event or handle flight selection
    console.log('Flight selected:', props.flight);
    closeModal();
  };
  </script>
  
  <style scoped>
  .flight-card-container {
    display: flex;
   
    margin: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .flight-info-section {
    flex: 1;
    padding: 1rem;
    background-color: white;
  }
  
  .flight-price-section {
    width: 200px;
    background-color: #f8f9fa;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid #e9ecef;
  }
  
  .flight-header {
    margin-bottom: 0.5rem;
  }
  
  .flight-date {
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .flight-main-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .airline-logo img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  
  .flight-timings {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .departure-info, .arrival-info {
    text-align: center;
    min-width: 50px;
  }
  
  .time {
    font-weight: 600;
    font-size: 1.125rem;
  }
  
  .airport-code {
    color: #6c757d;
    font-size: 0.875rem;
  }
  
  .flight-duration {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stops {
    font-size: 0.75rem;
    color: #6c757d;
    margin-bottom: 0.25rem;
  }
  
  .duration-line {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.25rem 0;
  }
  
  .dot-separator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .duration {
    font-size: 0.75rem;
    color: #6c757d;
  }
  
  .flight-extra-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .remaining-seats img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  
  .flight-class {
    color: #6c757d;
    font-size: 0.875rem;
  }
  
  .details-button {
    background: none;
    border: none;
    color: #6c757d;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .details-button i {
    transition: transform 0.2s;
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }
  
  .flight-details-section {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;
    position: relative;
  }
  
  .details-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .close-details {
    background: none;
    border: none;
    color: #dc3545;
    font-size: 1.25rem;
    cursor: pointer;
  }
  
  .segment-details {
    margin-bottom: 1.5rem;
  }
  
  .segment-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .segment-header img {
    width: 30px;
    height: 30px;
  }
  
  .flight-number {
    color: #6c757d;
    font-size: 0.875rem;
  }
  
  .segment-info {
    padding-left: 2rem;
  }
  
  .segment-meta {
    margin: 0.5rem 0;
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .segment-meta > span {
    margin-right: 1rem;
  }
  
  .layover-info {
    font-size: 0.875rem;
    color: #6c757d;
    margin-top: 0.5rem;
    padding-left: 2rem;
    font-style: italic;
  }
  
  .total-price {
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
  }
  
  .passenger-info {
    font-size: 0.75rem;
    color: #6c757d;
    text-align: center;
    margin-top: 0.25rem;
  }
  
  .info-button {
    background: none;
    border: none;
    color: #6c757d;
    cursor: pointer;
  }
  
  .select-button {
    background: linear-gradient(90deg, #ff7b00, #ffaa00);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 1rem;
    width: 100%;
  }
  
  .select-button:hover {
    transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3);
  }
  
  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 900px;
    max-height: 90vh;
    overflow: auto;
  }
  
  .modal-header {
    background-color: #f8f9fa;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9ecef;
    position: relative;
  }
  
  .modal-title {
    flex: 1;
  }
  
  .modal-price {
    margin: 0 1rem;
    text-align: center;
  }
  
  .modal-price span {
    display: block;
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #6c757d;
    cursor: pointer;
  }
  
  .modal-body {
    display: flex;
    padding: 1rem;
  }
  
  .price-details, .booking-conditions {
    flex: 1;
    padding: 0 1rem;
  }
  
  .price-details {
    border-right: 1px solid #e9ecef;
  }
  
  .loading-spinner {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    width: 2rem;
    height: 2rem;
    border: 0.25rem solid rgba(13, 110, 253, 0.2);
    border-top-color: #0d6efd;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Tooltip styles */
  .tooltip-container {
    position: relative;
    display: inline-block;
  }
  
  .tooltip-content {
    visibility: hidden;
    width: 150px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltip-container:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .flight-card-container {
      flex-direction: column;
    }
    
    .flight-price-section {
      width: 100%;
      flex-direction: row;
      align-items: center;
      padding: 0.75rem;
    }
    
    .price-info {
      flex: 1;
    }
    
    .select-button {
      margin-top: 0;
      width: auto;
    }
    
    .modal-body {
      flex-direction: column;
    }
    
    .price-details {
      border-right: none;
      border-bottom: 1px solid #e9ecef;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
  }
  </style>