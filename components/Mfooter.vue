<template>
    <footer class="footer">
      <div class="footer-container">
        
        <!-- Logo & About -->
        <div class="footer-section">
          <img src="~/assets/logo.png" alt="Travagir Logo" class="logo" />
          <p class="description">
            Travagir est votre plateforme tunisienne pour réserver vos vols, hôtels, Hajj et Omra en toute simplicité.
          </p>
        </div>
  
        <!-- Links -->
        <div class="footer-section">
          <h3 class="section-title">Navigation</h3>
          <ul>
            <li><el-link href="/" underline={false}>Accueil</el-link></li>
            <li><el-link href="/vols" underline={false}>Vols</el-link></li>
            <li><el-link href="/hotels" underline={false}>Hôtels</el-link></li>
            <li><el-link href="/hajj-omra" underline={false}>Hajj & Omra</el-link></li>
            <li><el-link href="/contact" underline={false}>Contact</el-link></li>
          </ul>
        </div>
  
        <!-- Contact -->
        <div class="footer-section">
          <h3 class="section-title">Contact</h3>
          <ul class="contact-info">
            <li>📍 Tunis, Tunisie</li>
            <li>📞 +216 12 345 678</li>
            <li>📧 contact@travagir.com</li>
          </ul>
        </div>
      </div>
  
      <div class="footer-bottom">
        © {{ new Date().getFullYear() }} Travagir. Tous droits réservés.
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: var(--el-bg-color-page);
    color: var(--el-text-color-regular);
    /* padding: 40px 20px 20px; */
    font-size: 14px;
    border-top: 1px solid var(--el-border-color-light);
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-section {
    flex: 1 1 200px;
  }
  
  .logo {
    height: 40px;
    margin-bottom: 12px;
  }
  
  .description {
    color: var(--el-text-color-secondary);
    line-height: 1.6;
  }
  
  .section-title {
    font-weight: bold;
    margin-bottom: 12px;
    color: var(--el-text-color-primary);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ul li {
    margin-bottom: 6px;
  }
  
  .contact-info li {
    line-height: 1.6;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 30px;
    padding-top: 16px;
    border-top: 1px solid var(--el-border-color-light);
    color: var(--el-text-color-placeholder);
  }
  </style>
  