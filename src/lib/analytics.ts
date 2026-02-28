export const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  function loadAnalytics() {
    if (window.gtagInitialized) return;
    window.gtagInitialized = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-38K3HDMFV9';
    document.head.appendChild(script);
    script.onload = function() {
      gtag('js', new Date());
      gtag('config', 'G-38K3HDMFV9', {
        anonymize_ip: true,
        cookie_flags: 'max-age=7776000;secure;samesite=none'
      });
    };
  }

  var hasConsent = localStorage.getItem('gdpr-analytics-consent') === 'true';
  if (hasConsent) { loadAnalytics(); }

  window.grantAnalyticsConsent = function() {
    localStorage.setItem('gdpr-analytics-consent', 'true');
    loadAnalytics();
  };

  window.revokeAnalyticsConsent = function() {
    localStorage.setItem('gdpr-analytics-consent', 'false');
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_ga_G-38K3HDMFV9=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };
`;
