<template>
  
  <section class="contact-page">
    <div class="header-section">
      <h1 class="title">
        Contactez <span class="highlight">Tra<strong>V</strong>agir</span> Voyages
      </h1>
      <p class="subtitle">Agence de voyages de catégorie A, agréée ONTT & IATA</p>
      <el-divider />
    </div>

    <div class="info-grid">
      <!-- Contact Info Cards -->
      <ClientOnly>
      <el-card 
        v-for="(item, index) in contactInfo" 
        :key="index" 
        class="info-card"
        shadow="hover"
        :body-style="{ padding: '20px' }"
      >
        <div class="card-content">
          <div class="icon-wrapper">
            <el-icon :size="32"><component :is="item.icon" /></el-icon>
          </div>
          <h3>{{ item.title }}</h3>
          <div v-if="item.type === 'link'">
            <p><a :href="item.value" target="_blank">{{ item.display }}</a></p>
          </div>
          <div v-else-if="item.type === 'list'">
            <ul>
              <li v-for="(listItem, i) in item.items" :key="i">{{ listItem }}</li>
            </ul>
          </div>
          <div v-else-if="item.type === 'map'">
            <iframe
              :src="item.value"
              width="100%"
              height="200"
              style="border: 0; border-radius: 8px"
  
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div v-else>
            <p>{{ item.value }}</p>
          </div>
        </div>
      </el-card>
    </ClientOnly>
    </div>

    <!-- Contact Form -->
    <client-only>
    <el-card class="contact-form" shadow="always">
      <template #header>
        <div class="form-header">
          <h3> Envoyez-nous un message</h3>
        </div>
      </template>
    
      <el-form 
        ref="formRef" 
        :model="form" 
        :rules="rules" 
        label-position="top"
        @submit.prevent="submitForm"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Nom complet" prop="name">
              <el-input v-model="form.name" placeholder="Votre nom" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" placeholder="Votre email" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-form-item label="Sujet" prop="subject">
          <el-input v-model="form.subject" placeholder="Sujet de votre message" />
        </el-form-item>
        
        <el-form-item label="Message" prop="message">
          <el-input 
            v-model="form.message" 
            type="textarea" 
            :rows="4" 
            placeholder="Votre message..."
          />
        </el-form-item>
        
        <el-form-item>
          <el-button 
            type="primary" 
            native-type="submit"
            class="submit-btn"
            :loading="loading"
          >
            Envoyer le message
          </el-button>
        </el-form-item>
      </el-form>
   
    </el-card>
  </client-only>
    <!-- Social Media Section -->
  <ClientOnly>
    <div class="social-section">
      <h3>Suivez-nous sur les réseaux sociaux</h3>
      <div class="social-icons">
        <a 
          v-for="social in socialMedia" 
          :key="social.name" 
          :href="social.url" 
          target="_blank"
          class="social-icon"
        >
          <el-tooltip :content="social.name" placement="top">
            <el-icon :size="24"><component :is="social.icon" /></el-icon>
          </el-tooltip>
        </a>
      </div>
      <div class="social-stats">
        <el-statistic title="J'aime" :value="5600" />
        <el-statistic title="Followers" :value="5800" />
      </div>
    </div>
  </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Message,
  Phone,
  Promotion,
  Link,
  Location,
  Clock,
  Present,
  Money,
  Comment,
  Avatar,
  Star
} from '@element-plus/icons-vue'

// Contact info data
const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    value: 'tel:+21671717877',
    display: '71 717 877',
    type: 'link'
  },
  {
    icon: Message,
    title: 'Email',
    value: 'mailto:contact@travagir.com',
    display: 'contact@travagir.com',
    type: 'link'
  },
  {
    icon: Link,
    title: 'Site Web',
    value: 'https://travagir.com',
    display: 'travagir.com',
    type: 'link'
  },
  {
    icon: Location,
    title: 'Adresse',
    value: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1323.847374404774!2d10.194!3d36.859833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzM1LjQiTiAxMMKwMTEnMzguNCJF!5e0!3m2!1sfr!2stn!4v1713118000000!5m2!1sfr!2stn',
    type: 'map'
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: '',
    type: 'list',
    items: [
      'Lundi - Vendredi : 09h00 - 18h00',
      'Samedi : 09h00 - 13h00',
      'Dimanche : Fermé'
    ]
  },
  {
    icon: Present,
    title: 'Services',
    value: '',
    type: 'list',
    items: [
      'À emporter',
      'Sièges en terrasse',
      'Réservation en ligne',
      'Conseils personnalisés',
      'Assistance 24/7'
    ]
  },
  {
    icon: Money,
    title: 'Fourchette de prix',
    value: '€€€ (Haut de gamme)',
    type: 'text'
  },
  {
    icon: Comment,
    title: 'Langues parlées',
    value: 'English, Français, Arabe, Deutsch, Italiano, Español, Русский',
    type: 'text'
  }
]

// Social media data
const socialMedia = [
  { name: 'Facebook', icon: Avatar, url: 'https://facebook.com/travagir' },
  { name: 'Instagram', icon: Promotion, url: 'https://instagram.com/travagir' },
  { name: 'Twitter', icon: Comment, url: 'https://twitter.com/travagir' },
  { name: 'YouTube', icon: 'VideoPlay', url: 'https://youtube.com/travagir' },
  { name: 'LinkedIn', icon: 'Connection', url: 'https://linkedin.com/company/travagir' }
]

// Form handling
const formRef = ref()
const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules = {
  name: [
    { required: true, message: 'Veuillez saisir votre nom', trigger: 'blur' },
    { min: 3, message: 'Le nom doit contenir au moins 3 caractères', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Veuillez saisir votre email', trigger: 'blur' },
    { type: 'email', message: 'Veuillez saisir un email valide', trigger: 'blur' }
  ],
  subject: [
    { required: true, message: 'Veuillez saisir un sujet', trigger: 'blur' }
  ],
  message: [
    { required: true, message: 'Veuillez saisir votre message', trigger: 'blur' },
    { min: 10, message: 'Le message doit contenir au moins 10 caractères', trigger: 'blur' }
  ]
}

const submitForm = () => {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      loading.value = true
      // Simulate API call
      setTimeout(() => {

        formRef.value.resetFields()
        loading.value = false
      }, 1500)
    } else {
      return false
    }
  })
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  animation: fadeIn 0.5s ease-in-out;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(19, 19, 19, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-radius: 30px;
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.header-section .title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.header-section .title .highlight {
  color: #ff7b00;
  position: relative;
  display: inline-block;
}

.header-section .title .highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff7b00, #ffaa00);
  border-radius: 3px;
}

.header-section .title .highlight strong {
  color: #ff3e00;
}

.header-section .subtitle {
  color: #ffffffb6;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.header-section .el-divider {
  margin: 1.5rem auto;
  width: 80px;
  border-top: 2px solid #ff7b00;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.card-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.card-content p,
.card-content li {
  color: #34495e;
  line-height: 1.6;
}

.card-content a {
  color: #ff7b00;
  text-decoration: none;
  transition: color 0.2s;
}

.card-content a:hover {
  color: #ff3e00;
  text-decoration: underline;
}

.card-content ul {
  padding-left: 1.2rem;
}

.card-content li {
  margin-bottom: 0.5rem;
  position: relative;
}

.card-content li::before {
  content: '•';
  color: #ff7b00;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.icon-wrapper {
  margin-bottom: 1rem;
}

.icon-wrapper .el-icon {
  color: #ff7b00;
}

.contact-form {
  border-radius: 12px;
  margin-bottom: 3rem;
  border: none;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
}

.form-header h3 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-header .el-icon {
  color: #ff7b00;
}

.submit-btn {
  background: linear-gradient(90deg, #ff7b00, #ffaa00);
  border: none;
  padding: 10px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3);
}

.social-section {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.social-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff7b00, #ffaa00);
  transition: all 0.3s ease;
}

.social-icon .el-icon {
  color: white;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 15px rgba(255, 123, 0, 0.3);
}

.social-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.social-stats .el-statistic__head {
  font-weight: 500;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.social-stats .el-statistic__content {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff7b00;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }

  .header-section .title {
    font-size: 1.8rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .social-stats {
    flex-direction: column;
    gap: 1rem !important;
  }
}
</style>