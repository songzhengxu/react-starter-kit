const fs = require('fs');
const util = require('util');
const resolve = require('path').resolve;
const findup = require('findup');

const config = getConfig();
const MAX_LENGTH = config.maxSubjectLength || 100;
const PATTERN = /^((?:fixup!\s*)?(\w*)(\(([\w\$\.\*/-]*)\))?\: (.*))(\n|$)/;
const IGNORED = /^WIP\:/;
const TYPES = config.types || ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert'];

const error = function () {
  // gitx does not display it
  // http://gitx.lighthouseapp.com/projects/17830/tickets/294-feature-display-hook-error-message-when-hook-fails
  // https://groups.google.com/group/gitx/browse_thread/thread/a03bcab60844b812
  console[config.warnOnFail ? 'warn' : 'error'](`INVALID COMMIT MSG: ${util.format.apply(null, arguments)}`);
};


const validateMessage = function (message) {
  let isValid = true;

  if (IGNORED.test(message)) {
    console.log('Commit message validation ignored.');
    return true;
  }

  const match = PATTERN.exec(message);

  if (!match) {
    error(`does not match "<type>(<scope>): <subject>" ! was: ${message}`);
    return failure();
  }

  const firstLine = match[1];
  const type = match[2];
  const scope = match[4];
  const subject = match[5];

  if (firstLine.length > MAX_LENGTH) {
    error('is longer than %d characters !', MAX_LENGTH);
    isValid = false;
  }

  if (TYPES !== '*' && TYPES.indexOf(type) === -1) {
    error('"%s" is not allowed type !', type);
    return failure();
  }

  // Some more ideas, do want anything like this ?
  // - Validate the rest of the message (body, footer, BREAKING CHANGE annotations)
  // - allow only specific scopes (eg. fix(docs) should not be allowed ?
  // - auto correct the type to lower case ?
  // - auto correct first letter of the subject to lower case ?
  // - auto add empty line after subject ?
  // - auto remove empty () ?
  // - auto correct typos in type ?
  // - store incorrect messages, so that we can learn

  return isValid ? true : failure();

  function failure() {
    return !!config.warnOnFail;
  }
};


// publish for testing
exports.validateMessage = validateMessage;

// hacky start if not run by mocha :-D
// istanbul ignore next
if (process.argv.join('').indexOf('mocha') === -1) {
  const commitMsgFile = process.argv[2] || './.git/COMMIT_EDITMSG';
  const incorrectLogFile = commitMsgFile.replace('COMMIT_EDITMSG', 'logs/incorrect-commit-msgs');

  fs.readFile(commitMsgFile, (err, buffer) => {
    const msg = firstLineFromBuffer(buffer);

    if (!validateMessage(msg)) {
      fs.appendFile(incorrectLogFile, `${msg}\n`, () => {
        process.exit(1);
      });
    } else {
      process.exit(0);
    }

    function firstLineFromBuffer(buffer) {
      return buffer.toString().split('\n').shift();
    }
  });
}

function getTypes() {
  const defaultTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert'];
  return config.types || defaultTypes;
}

function getConfig() {
  const pkgFile = findup.sync(process.cwd(), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(resolve(pkgFile, 'package.json')));
  return pkg && pkg.config && pkg.config['validate-commit-msg'] || {};
}
译;
