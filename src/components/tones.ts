// Full class names are spelled out so Tailwind can find them when scanning
export const tones = {
  cobalt: {
    solid: 'bg-cobalt',
    soft: 'bg-cobalt-soft',
    text: 'text-cobalt',
    border: 'border-cobalt',
    hex: '#1f5eff',
  },
  coral: {
    solid: 'bg-coral',
    soft: 'bg-coral-soft',
    text: 'text-coral-deep',
    border: 'border-coral',
    hex: '#ff6a4d',
  },
  mint: {
    solid: 'bg-mint',
    soft: 'bg-mint-soft',
    text: 'text-mint-deep',
    border: 'border-mint',
    hex: '#14b885',
  },
  sun: {
    solid: 'bg-sun',
    soft: 'bg-sun-soft',
    text: 'text-sun-deep',
    border: 'border-sun',
    hex: '#ffc233',
  },
} as const;

export type Tone = keyof typeof tones;

export const toneCycle: Tone[] = ['cobalt', 'coral', 'mint', 'sun'];
