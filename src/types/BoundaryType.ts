export type BoundaryType = 'periodic' | 'reflective' | 'true' | 'false';

function toBoundaryType(type: string): BoundaryType {
  switch (type) {
    case 'periodic':
    case 'reflective':
    case 'true':
    case 'false':
      return type;
    default:
      return 'periodic';
  }
}

export { toBoundaryType };