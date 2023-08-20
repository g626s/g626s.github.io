// datalayer.js
dataLayer = window.dataLayer = window.dataLayer || []; // Check if dataLayer already exists, otherwise initialize it as an empty array
dataLayer.push({ // Push relevant data to the dataLayer
    'event': 'dataLayer-initialized', // Custom event indicating dataLayer initialization
    'content_language': 'en', // Language of the content
    'gtm_container_id': 'GTM-T34HCG4', // Google Tag Manager container ID
    'gtm_container_version': '3', // Version of the GTM container
});
