// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const up = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ep = [1, 2, 3, 4];

const ep2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const isMultiArray = (array) => array.every((item) => Array.isArray(item));

function haveAccess(
  expectedPrivileges: Array<any>,
  userPrivileges: number[],
  mode: number = 0
) {
  if (isMultiArray(expectedPrivileges)) {
    if (mode === 1)
      return expectedPrivileges.some((privs) =>
        haveAccess(privs as any[], userPrivileges, mode)
      );
    return expectedPrivileges.every((privs) =>
      haveAccess(privs as any[], userPrivileges, mode)
    );
  }

  if (mode === 1) {
    return expectedPrivileges.some((privId) => userPrivileges.includes(privId));
  }

  return expectedPrivileges.every(
    (privId) => userPrivileges.indexOf(privId) > -1
  );
}

console.log('Have Access: 1d', haveAccess(ep, up));
console.log('Have Access: 2d', haveAccess(ep2, up));
