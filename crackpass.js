function crackPassword(password, maxAttemptsPerChar) {
  const passChars = password.split('');
  let known = [];
  let passwordFound = false;

  for (let counter = 0; counter < passChars.length; counter++) {
    let knownNot = [];
    console.log(`Attempting to find character at position [${counter}]...`);

    for (let i = 0; i < maxAttemptsPerChar; i++) {
      const attempt = getRandomCharacter();

      if (attempt === passChars[counter]) {
        known.push(attempt);
        console.log(`Found new entry @ [${counter}] -> '${attempt}'`);
        break;
      } else {
        knownNot.push(attempt);
        if (i < 5) {
          console.log(`known: [${known}], try failed (${attempt})`);
        }
      }
    }
    console.log(`Known not to be at current index: ${knownNot.join(',')}`);

    if (known.length !== counter + 1) {
      console.log(`Failed to find character at position [${counter}]. Cracking aborted.`);
      return;
    }
  }

  if (known.length === passChars.length) {
    console.log(`Password cracked! The password is: ${known.join('')}`);
  }
}

function getRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-=+[]{};:\\,<.>/?';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

crackPassword("testing", 150);function crackPassword(password, maxAttemptsPerChar) {
  const passChars = password.split('');
  let known = [];
  let passwordFound = false;

  for (let counter = 0; counter < passChars.length; counter++) {
    let knownNot = [];
    console.log(`Attempting to find character at position [${counter}]...`);

    for (let i = 0; i < maxAttemptsPerChar; i++) {
      const attempt = getRandomCharacter();

      if (attempt === passChars[counter]) {
        known.push(attempt);
        console.log(`Found new entry @ [${counter}] -> '${attempt}'`);
        break;
      } else {
        knownNot.push(attempt);
        if (i < 5) {
          console.log(`known: [${known}], try failed (${attempt})`);
        }
      }
    }
    console.log(`Known not to be at current index: ${knownNot.join(',')}`);

    if (known.length !== counter + 1) {
      console.log(`Failed to find character at position [${counter}]. Cracking aborted.`);
      return;
    }
  }

  if (known.length === passChars.length) {
    console.log(`Password cracked! The password is: ${known.join('')}`);
  }
}

function getRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-=+[]{};:\\,<.>/?';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

crackPassword("testing", 100);function crackPassword(password, maxAttemptsPerChar) {
  const passChars = password.split('');
  let known = [];
  let passwordFound = false;

  for (let counter = 0; counter < passChars.length; counter++) {
    let knownNot = [];
    console.log(`Attempting to find character at position [${counter}]...`);

    for (let i = 0; i < maxAttemptsPerChar; i++) {
      const attempt = getRandomCharacter();

      if (attempt === passChars[counter]) {
        known.push(attempt);
        console.log(`Found new entry @ [${counter}] -> '${attempt}'`);
        break;
      } else {
        knownNot.push(attempt);
        if (i < 5) {
          console.log(`known: [${known}], try failed (${attempt})`);
        }
      }
    }
    console.log(`Known not to be at current index: ${knownNot.join(',')}`);

    if (known.length !== counter + 1) {
      console.log(`Failed to find character at position [${counter}]. Cracking aborted.`);
      return;
    }
  }

  if (known.length === passChars.length) {
    console.log(`Password cracked! The password is: ${known.join('')}`);
  }
}

function getRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-=+[]{};:\\,<.>/?';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

crackPassword("testing", 100);


