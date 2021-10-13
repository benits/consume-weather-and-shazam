export const getGenreByTempeture = (tempeture) => {
  if (tempeture < 16) return 'ALTERNATIVE';

  if (tempeture < 24 && tempeture > 16) return 'COUNTRY';

  if (tempeture < 32 && tempeture > 24) return 'POP';

  return 'ROCK';
};

export const setStorageMusicList = (key, value) => localStorage.setItem(key, value);

export const getStorageMusicList = (key) => localStorage.getItem(key);
