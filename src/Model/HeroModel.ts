export interface HeroSectionInterface {
  title1: string;
}

export class HeroSection implements HeroSectionInterface {
  title1: string;

  constructor(title1: string) {
    this.title1 = title1;
  }
}
