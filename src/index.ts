interface User {
  name: string;
  age: number;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

function main(): void {
  const user: User = {
    name: 'Ulyana kostiukevich',
    age: 19,
  };

  const greeting = greetUser(user);
  console.log(greeting);
}

main();
