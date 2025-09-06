// Cloudflare Turnstile Configuration
// Site keys are public and safe to expose in frontend code

export const TURNSTILE_CONFIG = {
  // Production key (provided by user)
  PRODUCTION_SITE_KEY: "0x4AAAAAABzv-jxJBEpvYMZ_",
  
  // Testing keys from Cloudflare docs
  // Always passes: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
  TEST_ALWAYS_PASSES: "1x00000000000000000000AA",
  
  // Always blocks: 
  TEST_ALWAYS_BLOCKS: "2x00000000000000000000AB",
  
  // Forces interactive challenge:
  TEST_INTERACTIVE: "1x00000000000000000000BB",
};

// Get the appropriate site key based on environment
export const getTurnstileSiteKey = () => {
  // Use production key in production, test key in development
  if (import.meta.env.PROD) {
    return TURNSTILE_CONFIG.PRODUCTION_SITE_KEY;
  } else {
    // In development, use the "always passes" test key for easier testing
    return TURNSTILE_CONFIG.TEST_ALWAYS_PASSES;
  }
};