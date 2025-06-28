import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.calculator.app',
  appName: 'Advanced Calculator',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
