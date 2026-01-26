const fs = require('fs');
const path = require('path');

const seedDir = path.join(__dirname, '..', 'seed');
const dataDir = path.join(__dirname, '..', 'data');

const readJsonIfExists = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf8').trim();
  if (!raw) {
    return null;
  }

  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    return null;
  }

  return parsed;
};

const readSeed = (fileName) => {
  const seedPath = path.join(seedDir, fileName);
  return JSON.parse(fs.readFileSync(seedPath, 'utf8'));
};

const getDailyFragments = () => {
  const dailyPath = path.join(dataDir, 'daily_fragments.json');
  return readJsonIfExists(dailyPath) ?? readSeed('initial_fragments.json');
};

const getDailyHotwords = () => {
  const dailyPath = path.join(dataDir, 'daily_hotwords.json');
  return readJsonIfExists(dailyPath) ?? readSeed('initial_hotwords.json');
};

const getDailyPayload = () => ({
  fragments: getDailyFragments(),
  hotwords: getDailyHotwords(),
});

module.exports = {
  getDailyFragments,
  getDailyHotwords,
  getDailyPayload,
};
