const PREFIX = '@FineMe_';

const STORAGE_KEY = {
  token: 'token',
};

Object.keys(STORAGE_KEY).forEach(value => {
  const key = value as keyof typeof STORAGE_KEY;
  STORAGE_KEY[key] = PREFIX + STORAGE_KEY[key];
});

export default STORAGE_KEY;
