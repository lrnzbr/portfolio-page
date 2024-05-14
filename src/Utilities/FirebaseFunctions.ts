import { app } from "../Firebase";
import { HeroSection } from "../Model/HeroModel";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

// HERO
const heroConverter = {
  toFirestore: (hero: HeroSection) => {
    return {
      name: hero.title1,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return new HeroSection(data.name);
  },
};

export async function fetchHeroData() {
  const docRef = doc(db, "HeroSection", "contents");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let output = docSnap.data(); //.withConverter(heroConverter);
    console.log("OUTPUT: ", output);
    return output;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export {};
