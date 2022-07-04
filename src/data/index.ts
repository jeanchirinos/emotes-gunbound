// IMAGES
import Hi from 'img/Hi.webp';
import Bye from 'img/Bye.webp';
import MyGod from 'img/MyGod.webp';
import Help from 'img/Help.webp';
import Good from 'img/Good.webp';
import VeryGood from 'img/VeryGood.webp';
import GoodTry from 'img/GoodTry.webp';
import Sorry from 'img/Sorry.webp';
import Beginner from 'img/Beginner.webp';
import Thanks from 'img/Thanks.webp';

// SOUNDS
// OLD - Male
import OldMaleHi from 'sounds/old/male/OldMaleHi.mp3';
import OldMaleBye from 'sounds/old/male/OldMaleBye.mp3';
import OldMaleMyGod from 'sounds/old/male/OldMaleMyGod.mp3';
import OldMaleHelp from 'sounds/old/male/OldMaleHelp.mp3';
import OldMaleGood from 'sounds/old/male/OldMaleGood.mp3';
import OldMaleVeryGood from 'sounds/old/male/OldMaleVeryGood.mp3';
import OldMaleGoodTry from 'sounds/old/male/OldMaleGoodTry.mp3';
import OldMaleSorry from 'sounds/old/male/OldMaleSorry.mp3';
import OldMaleBeginner from 'sounds/old/male/OldMaleBeginner.mp3';
import OldMaleThanks from 'sounds/old/male/OldMaleThanks.mp3';

// OLD - Female
import OldFemaleHi from 'sounds/old/female/OldFemaleHi.mp3';
import OldFemaleBye from 'sounds/old/female/OldFemaleBye.mp3';
import OldFemaleMyGod from 'sounds/old/female/OldFemaleMyGod.mp3';
import OldFemaleHelp from 'sounds/old/female/OldFemaleHelp.mp3';
import OldFemaleGood from 'sounds/old/female/OldFemaleGood.mp3';
import OldFemaleVeryGood from 'sounds/old/female/OldFemaleVeryGood.mp3';
import OldFemaleGoodTry from 'sounds/old/female/OldFemaleGoodTry.mp3';
import OldFemaleSorry from 'sounds/old/female/OldFemaleSorry.mp3';
import OldFemaleBeginner from 'sounds/old/female/OldFemaleBeginner.mp3';
import OldFemaleThanks from 'sounds/old/female/OldFemaleThanks.mp3';

// NEW - Male
import NewMaleHi from 'sounds/new/male/NewMaleHi.mp3';
import NewMaleBye from 'sounds/new/male/NewMaleBye.mp3';
import NewMaleMyGod from 'sounds/new/male/NewMaleMyGod.mp3';
import NewMaleHelp from 'sounds/new/male/NewMaleHelp.mp3';
import NewMaleGood from 'sounds/new/male/NewMaleGood.mp3';
import NewMaleVeryGood from 'sounds/new/male/NewMaleVeryGood.mp3';
import NewMaleGoodTry from 'sounds/new/male/NewMaleGoodTry.mp3';
import NewMaleSorry from 'sounds/new/male/NewMaleSorry.mp3';
import NewMaleBeginner from 'sounds/new/male/NewMaleBeginner.mp3';
import NewMaleThanks from 'sounds/new/male/NewMaleThanks.mp3';

// NEW - Female
import NewFemaleHi from 'sounds/new/female/NewFemaleHi.mp3';
import NewFemaleBye from 'sounds/new/female/NewFemaleBye.mp3';
import NewFemaleMyGod from 'sounds/new/female/NewFemaleMyGod.mp3';
import NewFemaleHelp from 'sounds/new/female/NewFemaleHelp.mp3';
import NewFemaleGood from 'sounds/new/female/NewFemaleGood.mp3';
import NewFemaleVeryGood from 'sounds/new/female/NewFemaleVeryGood.mp3';
import NewFemaleGoodTry from 'sounds/new/female/NewFemaleGoodTry.mp3';
import NewFemaleSorry from 'sounds/new/female/NewFemaleSorry.mp3';
import NewFemaleBeginner from 'sounds/new/female/NewFemaleBeginner.mp3';
import NewFemaleThanks from 'sounds/new/female/NewFemaleThanks.mp3';

// ANIMATIONS
import {
  beginner,
  bye,
  good,
  goodTry,
  hello,
  help,
  myGod,
  sorry,
  thanks,
  veryGood,
} from 'components/Animation';

import { IEmoticon } from 'interfaces';

const emoticons: IEmoticon[] = [
  {
    name: 'Hola',
    img: Hi,
    sounds: {
      old: {
        male: OldMaleHi,
        female: OldFemaleHi,
      },
      new: {
        male: NewMaleHi,
        female: NewFemaleHi,
      },
    },
    number: 1,
    animation: hello,
  },
  {
    name: 'Adios',
    img: Bye,
    sounds: {
      old: {
        male: OldMaleBye,
        female: OldFemaleBye,
      },
      new: {
        male: NewMaleBye,
        female: NewFemaleBye,
      },
    },
    number: 2,
    animation: bye,
  },
  {
    name: 'Dios mio',
    img: MyGod,
    sounds: {
      old: {
        male: OldMaleMyGod,
        female: OldFemaleMyGod,
      },
      new: {
        male: NewMaleMyGod,
        female: NewFemaleMyGod,
      },
    },
    number: 3,
    animation: myGod,
  },
  {
    name: 'Ayuda',
    img: Help,
    sounds: {
      old: {
        male: OldMaleHelp,
        female: OldFemaleHelp,
      },
      new: {
        male: NewMaleHelp,
        female: NewFemaleHelp,
      },
    },
    number: 4,
    animation: help,
  },
  {
    name: 'Bien',
    img: Good,
    sounds: {
      old: {
        male: OldMaleGood,
        female: OldFemaleGood,
      },
      new: {
        male: NewMaleGood,
        female: NewFemaleGood,
      },
    },
    number: 5,
    animation: good,
  },
  {
    name: 'Muy bien',
    img: VeryGood,
    sounds: {
      old: {
        male: OldMaleVeryGood,
        female: OldFemaleVeryGood,
      },
      new: {
        male: NewMaleVeryGood,
        female: NewFemaleVeryGood,
      },
    },
    number: 6,
    animation: veryGood,
  },
  {
    name: 'Buen intento',
    img: GoodTry,
    sounds: {
      old: {
        male: OldMaleGoodTry,
        female: OldFemaleGoodTry,
      },
      new: {
        male: NewMaleGoodTry,
        female: NewFemaleGoodTry,
      },
    },
    number: 7,
    animation: goodTry,
  },
  {
    name: 'Perdón',
    img: Sorry,
    sounds: {
      old: {
        male: OldMaleSorry,
        female: OldFemaleSorry,
      },
      new: {
        male: NewMaleSorry,
        female: NewFemaleSorry,
      },
    },
    number: 8,
    animation: sorry,
  },
  {
    name: 'Principiante',
    img: Beginner,
    sounds: {
      old: {
        male: OldMaleBeginner,
        female: OldFemaleBeginner,
      },
      new: {
        male: NewMaleBeginner,
        female: NewFemaleBeginner,
      },
    },
    number: 9,
    animation: beginner,
  },
  {
    name: 'Gracias',
    img: Thanks,
    sounds: {
      old: {
        male: OldMaleThanks,
        female: OldFemaleThanks,
      },
      new: {
        male: NewMaleThanks,
        female: NewFemaleThanks,
      },
    },
    number: 0,
    animation: thanks,
  },
];

export default emoticons;
