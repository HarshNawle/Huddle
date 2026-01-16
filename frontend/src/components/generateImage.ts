import boy1 from '../assets//profile images/Boys/boys1.jpg';
import boy2 from '../assets//profile images/Boys/boys2.jpg';
import boy3 from '../assets//profile images/Boys/boys3.jpg';
import boy4 from '../assets//profile images/Boys/boys4.jpg';
import boy5 from '../assets//profile images/Boys/boys5.jpg';
import boy6 from '../assets//profile images/Boys/boys6.jpg';
import boy7 from '../assets//profile images/Boys/boys7.jpg';

// Same for Girls
import girl1 from '../assets/profile images/Girls/girl1.jpg';
import girl2 from '../assets/profile images/Girls/girl2.jpg';
import girl3 from '../assets/profile images/Girls/girl3.jpg';
import girl4 from '../assets/profile images/Girls/girl4.jpg';
import girl5 from '../assets/profile images/Girls/girl5.jpg';
import girl6 from '../assets/profile images/Girls/girl6.jpg';
import girl7 from '../assets/profile images/Girls/girl7.jpg';

type Gender = 'Male' | "Female" | "male" | "female" | undefined;

const maleAvatar = [boy1,boy2,boy3,boy4,boy5,boy6,boy7];
const femaleAvatar = [girl1, girl2,girl3,girl4,girl5,girl6,girl7];

export const getAvatarByGender = (gender: Gender, seed = 0) => {
  const normalizedGender = gender?.toLowerCase();
    const avatars = normalizedGender === "female" ? femaleAvatar : maleAvatar;
    return avatars[seed % avatars.length];
  };
  