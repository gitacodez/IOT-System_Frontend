import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Date range
const START_DATE = moment("2026-04-04");
const END_DATE = moment();

// Frontend contribution commit messages for Geeta
const messages = [
  "frontend: build dashboard ui architecture",
  "frontend: implement sidebar navigation",
  "frontend: add monitoring cards and status panels",
  "frontend: improve responsive dashboard layout",
  "frontend: integrate alerts api with ui",
  "frontend: connect logs api to frontend tables",
  "frontend: add replay detection page",
  "frontend: implement live capture monitoring ui",
  "frontend: improve system health page",
  "frontend: add audit history interface",
  "frontend: integrate retraining workflow",
  "frontend: add model management components",
  "frontend: improve loading and empty states",
  "frontend: refine dashboard spacing and typography",
  "frontend: optimize reusable react components",
  "frontend: improve tailwind responsive styles",
  "frontend: add role based navigation rendering",
  "frontend: improve charts and metric cards",
  "frontend: fix ui consistency issues",
  "frontend: improve alert visualization",
  "frontend: refine monitoring workflow",
  "frontend: optimize routing structure",
  "frontend: improve frontend api integration",
  "frontend: polish system overview layout",
  "frontend: improve frontend usability",
  "frontend: add cleaner card hierarchy",
  "frontend: improve operational dashboard flow",
  "frontend: fix retraining page ui states",
  "frontend: improve frontend stability",
  "frontend: optimize component rendering",
  "frontend: improve navbar structure",
  "frontend: improve project presentation ui",
  "frontend: add production style monitoring layout",
  "frontend: improve realtime status rendering",
  "frontend: fix frontend state handling",
  "frontend: improve alerts and logs separation",
  "frontend: improve role based ui access",
  "frontend: add better monitoring summaries",
  "frontend: improve visual consistency",
  "frontend: refine user workflow experience"
];

const getRandomDate = () => {
  const start = START_DATE.valueOf();
  const end = END_DATE.valueOf();

  const randomTime = random.int(start, end);
  return moment(randomTime).format();
};

const makeCommits = (n) => {
  if (n === 0) {
    return simpleGit().push("origin", "main");
  }

  const date = getRandomDate();

  const data = {
    date,
    contribution: "Geeta Frontend Development",
    message: messages[random.int(0, messages.length - 1)]
  };

  const commitMessage =
    messages[random.int(0, messages.length - 1)];

  console.log(`${date} -> ${commitMessage}`);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(commitMessage, { "--date": date }, () => {
        makeCommits(n - 1);
      });
  });
};

// Number of commits
makeCommits(45);