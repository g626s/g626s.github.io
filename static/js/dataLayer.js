// datalayer.js
dataLayer = window.dataLayer = window.dataLayer || []; // Check if dataLayer already exists, otherwise initialize it as an empty array
dataLayer.push({ // Push relevant data to the dataLayer
    'event': 'dataLayer-initialized', // Custom event indicating dataLayer initialization
    'content_language': '<content_language>', // Language of the content
    'content_group': '<content_group>', // Grouping identifier for content
    'page_location': '<scrubbed page URL>', // URL of the current page 
    'page_referrer': '<scrubbed previous URL>', // URL of the previous page 
    'gtm_container_id': '<gtm_container>', // Google Tag Manager container ID
    'gtm_container_version': '<gtm_container version>', // Version of the GTM container
    'external_referrer': '<scrubbed external referrer>', // URL of the external page that led to the current page
});
