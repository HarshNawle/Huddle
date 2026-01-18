import dotenv from "dotenv";
dotenv.config();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

type Gender = "Male" | "Female";

const maleAvatar = [
  "v1768585620/boys1_fmovgk.jpg",
  "v1768585620/boys2_cqhaco.jpg",
  "v1768715238/boy7_v1wdj3.jpg", 
  "v1768585619/boys4_aqprwy.jpg",
  "v1768585619/boys5_qrwmn2.jpg",
  "v1768585620/boys6_lf6uzr.jpg",
  "v1768585621/boys7_ztiszz.jpg",
];

const femaleAvatar = [
  "v1768585619/girl1_iakhbr.jpg",
  "v1768585619/girl2_ilzhan.jpg",
  "v1768585619/girl3_pz29ou.jpg",
  "v1768585620/girl4_nepyix.jpg",
  "v1768585620/girl5_qqwqaw.jpg",
  "v1768585619/girl6_rdrbjz.jpg",
  "v1768585620/girl7_k0song.jpg",
]

export const getAvatarByGender = (gender: Gender) => {
  const avatar = gender === "Female" ? femaleAvatar : maleAvatar;
  const selected = avatar[Math.floor(Math.random() * avatar.length)];

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${selected}`
}
