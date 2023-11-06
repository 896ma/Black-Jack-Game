import * as prompts from '@clack/prompts';
import ora from 'ora';
import delay from 'delay';
import { execSync } from 'child_process';
import readline from 'readline';

const dependencies = ['@clack/prompts', 'chalk', 'figlet', 'ora', 'delay'];

async function installMissingDependencies() {
  const missingDependencies = dependencies.filter(dep => {
    try {
      require(dep);
      return false;
    } catch (e) {
      return true;
    }
  });

  if (missingDependencies.length === 0) {
    console.log('All required dependencies are already installed.');
    startGame();
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Some dependencies need to be installed: ${missingDependencies.join(', ')}. Install them now? (Yes/No): `,
      async (answer) => {
        rl.close();
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
          await installDependencies(missingDependencies);
        } else {
          console.log('Please install dependencies to play.');
        }
        startGame();
      }
    );
  }
}

async function installDependencies(dependenciesToInstall) {
  console.log('Installing dependencies...');
  const spinner = ora('Installing dependencies...').start();
  try {
    execSync(`npm install ${dependenciesToInstall.join(' ')}`, { stdio: 'ignore' });
    spinner.succeed(`Installed ${dependenciesToInstall.length} dependencies.`);
  } catch (e) {
    spinner.fail('Failed to install dependencies.');
  }
}





async function startGame() {
  let cards = [];
  let hasBlackjack = false;
  let isAlive = true;
  let sum = 0;

  console.log('Welcome to the Blackjack game! Try to get as close to 21 as possible without going over.');
  console.log('You can draw new cards to reach your desired sum.');
  console.log('Face cards are worth 10, Aces are worth 11 or 1.');
  console.log('Good luck!\n');

  while (isAlive) {
    const newCardResponse = await prompts.select({
      type: 'select',
      name: 'newCard',
      message: 'Do you want to draw a new card?',
      choices: [{ title: 'Yes', value: 'yes' }, { title: 'No', value: 'no' }]
    });

    if (newCardResponse.newCard === 'yes') {
      const spinner = ora('Drawing a new card...').start();
      await delay(2000);
      const card = getRandomCard();
      cards.push(card);
      sum += card;
      spinner.stop();
      console.log(`New card: ${card}`);

      if (sum > 21) {
        console.log('Busted! Your sum is over 21. You lose.');
        isAlive = false;
        break;
      }
    } else {
      isAlive = false;
    }
  }

  if (hasBlackjack) {
    console.log('Congratulations! You got Blackjack!');
  } else {
    console.log(`Your final sum is ${sum}.`);
    const restartResponse = await prompts.select({
      type: 'select',
      name: 'restart',
      message: 'Do you want to play again?',
      choices: [{ title: 'Yes', value: 'yes' }, { title: 'No', value: 'no' }]
    });

    if (restartResponse.restart === 'yes') {
      startGame();
    } else {
      console.log('Thank you for playing Blackjack!');
    }
  }
}

function getRandomCard() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }

}

installMissingDependencies();


