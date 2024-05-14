export interface OpenSourceAppInterface {
  title: string;
  description: string;
  coverImage: string;
  repoURL: string;
}

export class OpenSourceApp implements OpenSourceAppInterface {
  title: string;
  description: string;
  coverImage: string;
  repoURL: string;

  constructor(
    title: string,
    description: string,
    coverImage: string,
    appStoreURL: string,
  ) {
    this.title = title;
    this.description = description;
    this.coverImage = coverImage;
    this.repoURL = appStoreURL;
  }
}

const kwikEMart = new OpenSourceApp(
  "Kwik-E-Mart",
  "A Simpson's themed cash register app in SwiftUI",
  "https://github.com/lrnzbr/KwikEMartSwiftUI/blob/main/KwikEMartSwiftUI/Assets.xcassets/AppIcon.appiconset/AppIcon~ios-marketing.png?raw=true",
  "https://github.com/lrnzbr/KwikEMartSwiftUI/tree/main",
);
const pokedex = new OpenSourceApp(
  "PokéDeX",
  "A SwiftUI Pokédex app",
  "https://user-images.githubusercontent.com/2145274/217727660-76f309ed-9509-4adc-8c15-3c56cb83c058.gif",
  "https://github.com/lrnzbr/PokedexApp/blob/main",
);
const loteria = new OpenSourceApp(
  "Lotería Open Source",
  "An open source version of the popular Mexican board game",
  "https://github.com/lrnzbr/NSBuilders-Loteria/assets/2145274/7787132a-e9da-4922-9c0e-6a80e23b783e",
  "https://github.com/lrnzbr/NSBuilders-Loteria",
);

export const openSourceApps = [kwikEMart, pokedex, loteria];
