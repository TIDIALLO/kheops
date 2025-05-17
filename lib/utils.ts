import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction de debounce typée et optimisée
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function debounced(this: any, ...args: Parameters<T>) {
    const context = this;

    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Fonction de throttle typée et optimisée
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;

  return function throttled(this: any, ...args: Parameters<T>): ReturnType<T> {
    const context = this;

    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      setTimeout(() => (inThrottle = false), limit);
    }

    return lastResult;
  };
}

// Fonction pour formater les nombres avec séparateur de milliers
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('fr-FR').format(num);
}

// Fonction pour valider les emails
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fonction pour générer des slugs SEO-friendly
export function generateSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Fonction pour tronquer le texte avec ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Fonction pour obtenir les dimensions de la fenêtre
export function getWindowDimensions(): { width: number; height: number } {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

// Fonction pour détecter le support des animations
export function supportsAnimation(): boolean {
  if (typeof document === 'undefined') return false;
  
  const style = document.createElement('div').style;
  return 'animation' in style || 'webkitAnimation' in style;
}

// Fonction pour détecter le support du mode sombre
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Fonction pour détecter le support du mode réduction de mouvement
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Fonction pour détecter le support du hover
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true;
  
  return !window.matchMedia('(hover: none)').matches;
}

// Fonction pour détecter si l'appareil est tactile
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Fonction pour détecter si l'appareil est mobile
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Fonction pour détecter la largeur de l'écran
export function getScreenType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Fonction pour détecter la connexion réseau
export function getNetworkStatus(): {
  online: boolean;
  effectiveType?: string;
} {
  if (typeof navigator === 'undefined') {
    return { online: true };
  }

  const connection = (navigator as any).connection;
  
  return {
    online: navigator.onLine,
    effectiveType: connection?.effectiveType
  };
}

// Fonction pour détecter les capacités du navigateur
export function getBrowserCapabilities(): {
  webp: boolean;
  webgl: boolean;
  webworker: boolean;
} {
  if (typeof window === 'undefined') {
    return { webp: false, webgl: false, webworker: false };
  }

  const canvas = document.createElement('canvas');
  
  return {
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    webgl: !!window.WebGLRenderingContext,
    webworker: !!window.Worker
  };
}
