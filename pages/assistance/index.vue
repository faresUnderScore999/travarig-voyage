<template>
  <div class="assistance-container">
    <div class="header-section">
      <h1 class="page-title">Visa by tra<strong style="color:orange">V</strong>agir</h1>
      <div class="title-divider"></div>
      <div class="intro-text">
        <p>
          Ce site vous fourni toutes les informations nécessaires pour déposer votre demande de visa d'une manière efficace,
          rapide et sans failles. Si vous désirez vous rendre en Europe, en Angleterre, aux Etats-Unis ou au Canada, nos
          services sont faits pour vous !
        </p>
        <p>
          Notre base de données est mise à jour régulièrement, donc les informations dont vous avez besoin vous seront
          accessibles à tout moment et au bout d'un clic.
        </p>
        <p>
          Vous trouverez sur notre site web des informations intéressantes qui vous aideront à faciliter la procédure de la
          demande de visa et à gagner beaucoup de votre temps et d'énergie.
        </p>
        <p>
          Toutes les informations sont fiables et sont tirées de sites officiels d'ambassades. Dès lors nous vous assurons
          que vous ne trouverez aucune information erronée ou qui puisse vous induire en erreur.
        </p>
      </div>
    </div>
    
    <el-divider border-style="dashed" />
    <client-only>
    <el-card class="form-card" shadow="hover">
      <div class="card-body">
        <h2 class="form-title">Formulaire d'inscription Visa by travagir</h2>
        <el-form 
          ref="subscribeForm" 
          :model="form" 
          label-position="top"
          class="visa-form"
          :rules="rules"
        >
          <el-form-item label="Civilité" prop="title">
            <el-radio-group v-model="form.title">
              <el-radio label="Mr.">Mr</el-radio>
              <el-radio label="Mme">Mme</el-radio>
              <el-radio label="Mlle">Mlle</el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <el-form-item label="Prénom" prop="firstName">
                <el-input 
                  v-model="form.firstName" 
                  placeholder="Prénom" 
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="24">
              <el-form-item label="Nom" prop="lastName">
                <el-input 
                  v-model="form.lastName" 
                  placeholder="Nom" 
                  clearable
                />
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <el-form-item label="E-mail" prop="email">
                <el-input   
                  v-model="form.email" 
                  type="email" 
                  placeholder="E-mail"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="24">
              <el-form-item label="Mobile" prop="mobile">
                <el-input v-model="form.mobile" placeholder="Mobile">
                  <template #prepend>
                    <el-select 
                      v-model="form.dialCode" 
                      placeholder="Code" 
                      style="width: 120px"
                    >
                      <el-option label="Tunisie (+216)" value="216" />
                      <el-option label="France (+33)" value="33" />
                      <el-option label="Autre" value="other" />
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-row :gutter="20">
            <el-col :span="12" :xs="24">
              <el-form-item label="Type de visa" prop="visaType">
                <el-select 
                  v-model="form.visaType" 
                  placeholder="Sélectionnez"
                  clearable
                >
                  <el-option label="Touristique" value="Touristique" />
                  <el-option label="D'études" value="Etudes" />
                  <el-option label="Familial" value="Familial" />
                  <el-option label="De travail" value="Travail" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="24">
              <el-form-item label="Région" prop="regions">
                <el-select 
                  v-model="form.regions" 
                  multiple 
                  placeholder="Sélectionnez une ou plusieurs destinations"
                  clearable
                >
                  <el-option label="Allemagne" value="Allemagne" />
                  <el-option label="France" value="France" />
                  <el-option label="Autriche" value="Autriche" />
                  <el-option label="Japon" value="Japon" />
                  <el-option label="USA" value="USA" />
                  <el-option label="UK" value="UK" />
                  <el-option label="Égypte" value="Égypte" />
                  <el-option label="Arabie Saoudite" value="Arabie Saoudite" />
                  <el-option label="Autres" value="Autres" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-form-item label="Message" prop="message">
            <el-input 
              v-model="form.message" 
              type="textarea" 
              :rows="4" 
              placeholder="Votre message..."
              resize="none"
            />
          </el-form-item>
          
          <el-form-item class="form-actions">
            <el-button 
              type="primary" 
              @click="submitForm"
              :loading="loading"
            >
              S'inscrire
            </el-button>
            <el-button @click="resetForm">
              Réinitialiser
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </client-only>
    
    <el-divider border-style="dashed" />
    
    <div class="faq-section">
      <h2 class="section-title">FAQ Visa by travagir <el-icon><Promotion /></el-icon></h2>
      <div class="title-divider"></div>
      
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1" class="faq-item">
          <template #title>
            <span class="faq-question">1. Quels types de visa propose travagir et pour quelles destinations ?</span>
          </template>
          <div class="faq-answer">
            <p>
              L'agence de voyage <a href="https://www.travagir.com/" target="_blank">travagir</a> vous accompagne dans la demande de 
              <a href="https://www.travagir.com/visa/visa-by-travagir/" target="_blank">visa</a> pour tous types de déplacements à 
              l'international. Nous traitons les demandes de visa touristique, visite familiale, affaires, travail et études. 
              Nos services couvrent toutes les destinations mondiales, que ce soit pour l'espace Schengen avec un visa Schengen, 
              soit les procédures liées aux (visa France, visa Italie, visa Allemagne, visa Espagne et d'autres pays Schengen). 
              Nous proposons également un accompagnement pour les procédures de visa USA Tunisie, visa Arabie Saoudite et visa 
              Canada, parmi bien d'autres.
            </p>
          </div>
        </el-collapse-item>
        
        <el-collapse-item name="2" class="faq-item">
          <template #title>
            <span class="faq-question">2. Quels documents sont nécessaires pour soumettre une demande de visa ?</span>
          </template>
          <div class="faq-answer">
            <p>
              La liste des documents à fournir pour demande de visa France ou une quelconque demande de visa varient en fonction 
              de votre situation personnelle, du type de visa Tunisie demandé et de la destination choisie. En général, vous 
              devrez fournir des pièces comme votre passeport Tunisie (avec une validité d'au moins 6 mois), une carte 
              d'identité nationale, des justificatifs financiers, des attestations d'emploi ou d'inscription scolaire, etc. 
              Nous vous recommandons de contacter directement nos conseillers pour une liste complète et adaptée à votre profil 
              et au pays visé.
            </p>
          </div>
        </el-collapse-item>
        
        <!-- Additional FAQ items would follow the same pattern -->
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Promotion } from '@element-plus/icons-vue'

const activeNames = ref([])
const loading = ref(false)

const form = ref({
  title: 'Mr.',
  firstName: '',
  lastName: '',
  email: '',
  dialCode: '216',
  mobile: '',
  visaType: '',
  regions: [],
  message: ''
})

const rules = {
  title: [{ required: true, message: 'Veuillez sélectionner une civilité', trigger: 'change' }],
  firstName: [{ required: true, message: 'Veuillez saisir votre prénom', trigger: 'blur' }],
  lastName: [{ required: true, message: 'Veuillez saisir votre nom', trigger: 'blur' }],
  email: [
    { required: true, message: 'Veuillez saisir votre email', trigger: 'blur' },
    { type: 'email', message: 'Veuillez saisir un email valide', trigger: ['blur', 'change'] }
  ],
  mobile: [{ required: true, message: 'Veuillez saisir votre numéro de mobile', trigger: 'blur' }],
  visaType: [{ required: true, message: 'Veuillez sélectionner un type de visa', trigger: 'change' }],
  regions: [{ required: true, message: 'Veuillez sélectionner au moins une région', trigger: 'change' }]
}

const submitForm = () => {
  loading.value = true
  // Simulate API call
  setTimeout(() => {
    
    loading.value = false
  }, 1500)
}

const resetForm = () => {
  form.value = {
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    dialCode: '216',
    mobile: '',
    visaType: '',
    regions: [],
    message: ''
  }
}
</script>

<style scoped>
.assistance-container {
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
  margin-bottom: 2rem;
}
:deep(.el-form-item__label) {
  color: white ;
}
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.title-divider {
  height: 4px;
  width: 80px;
  background-color: orange;
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.intro-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.form-card {
  margin: 2rem 0;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
}

.form-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
}

.visa-form {
  padding: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.faq-section {
  margin-top: 2rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  font-weight: 600;
  font-size: 1.1rem;
}

.faq-answer {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0 0 8px 8px;
}

.faq-answer p {
  line-height: 1.6;
}

.faq-answer a {
  color: orange;
  text-decoration: none;
}

.faq-answer a:hover {
  text-decoration: underline;
}

.el-collapse-item__header {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem;
  font-weight: 500;
}

.el-collapse-item__content {
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
}

@media (max-width: 768px) {
  .assistance-container {
    padding: 1rem;
    border-radius: 20px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .form-title, .section-title {
    font-size: 1.5rem;
  }
  
  .el-col {
    margin-bottom: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-actions .el-button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>