

//answer

function hello(name) {
  return name ? 'Hello, ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!' : 'Hello, World!';
}

// another one

function hello(name) {
  if (name === undefined || name === '') {
    return 'Hello, World!';
  } else {
    return 'Hello, ' + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  }
}


// another one

let hello = (name) => !name ? "Hello, World!" : "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
