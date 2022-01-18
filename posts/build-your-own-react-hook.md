---
title: 'Build your own React hook'
date: 'June 30, 2021'
tags:
  - react
  - typescript
---

Create the useLocalStorage custom hook.

---

React hooks are useful to extract component logic and convert it into a reusable
function to share logic between components.

### How to create a hook

- Hooks name must start with `use`
- They can call another hooks
- Have any arguments and return any value

### Example: useLocalStorage

Define the hook name by creating a new function, it will receive the key and the
initial value:

```javascript
const useLocalStorage = (key, initialValue) => {}
```

Current value can be managed by \`useState\`, so we need to import it:

```javascript
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState();
}
```

We need to get the value from localStorage, so we will pass a function to
`useState` (`useState` can receive a function):

```javascript
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  return state;
```

With this, we are trying to get value from localStorage if it exists, if not,
then use the initial value.

_If the value stored in localStorage is invalid, then use the initial value._

We need to return some way to update the value returned, so we can return a
closure function:

```javascript
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setNewState = (newValue) => {
    try {
      setState(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  }

  return [state, setNewState];
```

Note that we are _stringifying_ the new value before storing it because
localStorage only allows strings as values and we want our function to store any
object.

Also we are returning an array with the current value and the setter function
like `useState` does.

Finally, we export the hook to import it from any component.

```javascript
export default useLocalStorage;
```

#### Typescript version

If you are working on a Typescript React project, you can do the following
changes to ensure typing:

```typescript
import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setNewState = (newValue: T): void => {
    try {
      setState(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  }

  return [state, setNewState] as const;
}

export default useLocalStorage;
```

This ensures we pass always a value of the same type when passing the initial
value and when passing a new value.
