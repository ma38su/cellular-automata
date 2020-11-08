export type InitialType = 'blank' | 'left' | 'center' | 'right' | 'random' | 'all';

function toInitialType(initType?: string): InitialType {
  switch (initType) {
    case 'blank':
    case 'left':
    case 'center':
    case 'right':
    case 'random':
    case 'all':
      return initType;
    default:
      return 'center';
  }
}

export { toInitialType };