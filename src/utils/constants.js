export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_HOME_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg";

export const PROFILE_PIC =
  "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTof5i_ffp8ulZju_JUueXDTuFAaV-6g40t6qzwbbOrzX5TzUOFre-fy97_tGWMnKJSwR278eac2VxkLwlfELn9xPZjXC24.png?r=723";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];

//export const OPEN_AI_API_KEY =
//"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";

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_KEY;
