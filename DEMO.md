## React SPA







## React SSR







## React Server

- Components rendered on server only
- Still a SPA -> DOM updates not page refresh





### Backend

- read current directory on server

- read file on server

  - async!

- add random delay ...

  - component is rendered after delay

- read row from DB

- add suspense

  ```tsx
  <Suspense fallback={<Spinner />}>
      <Backend />
  </Suspense>
  ```

- add several backend components to `BackendPage`

  - => component is rendered when all data is available

- add several suspense boundaries

  - => explain streaming
  - show request in browser dev tools
  - send request with curl





### Clock

- We want client side updates!
  - easy: `"use client";`





### Counter

```
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
 ...
 <button onClick={handleClick}>Increment</button>
```

Errors: `useState`, `onCLick`

Solution: `"use client";`







### Composition

- Add `<Client/>` to `<Container/>`

- Add `<Shared/>` to `<Container/>`

- Add `<Shared/>` to `<Client/>`

  - `"use client";`is a boundary -> its the entry point for a client bundle ...

- Server Component as `children`

  ```tsx
  type ChildProps = { children?: React.ReactNode };
  export default function Child({ children }: ChildProps) {
  ```
  
  ```tsx
        <Shared />
        {children}
  ```
  
  ```tsx
  <Child>
    <Shared />
  </Child>
  ```







#### DataFow

Add to `Container`:

```tsx
const dataFromDb = await queryFromDB(5);

...

<Child backendData={dataFromDb} />
```

The Container only renders after data is fetched ...

=> improve by wrapping data access in its own component ...







#### Server Actions

##### Calling via inline function

In `Container.tsx`

```tsx
async function updateCount() {
  "use server";
  console.log("updating count ...");
  await updateCountInDb(dataFromDb + 1);
  revalidatePath("/");
}
...
<form action={updateCount}>
  <button type="submit">Update</button>
</form>
```

=> Why `"use server"`? It is already a Server Component! => `"use server"` is not about where the code runs, but about defining code that can be called from the client => it defines an "RPC Endpoint"

=> `"use server"` cant be used *inside* a Client Component ... React never mixes client and server code in the same file!



- Discuss closure serialization
  - We can use the closure from the server component in the server function!
- show behavior with and without `revalidatePath("/");` -> mutation and ui update in the same request!
- could also do a `redirect("/")` -> mutation and ui update in the same request!







##### Calling via server function

```tsx
<form action={updateCountServer}>
  <input name={"val"} defaultValue={dataFromDb + 1} />
  <button type="submit">Update</button>
</form>
```

=> Show function `updateCountServer`

- it needs a `"use server"` => can be on module level
- it recieves a `FromData` parameter







##### Calling from a client component

In `Child`:

```tsx
async function handleClick() {
  await updateCountServerWithValue(new Date().getMilliseconds());
}
...
<button onClick={handleClick}>Update</button>
```

- calling server action via any client-side code (ie event-handler or `useEffect`)
- passing any parameters (not just `FormData`) 







##### Calling from client component via callback passed from server-component

Change `Child` to receive a callback function:

```tsx
type ChildProps = { updateFn: () => Promise<void> };
export default function Child({ updateFn }: ChildProps) {
  async function handleClick() {
    await updateFn();
  }
```

Then pass the function from `Container` to `Child`:

```tsx
<Child updateFn={updateCount} />
```

=> Now we can again use the closure from the Server Component! This time the closure is serialized via an encrypted value in the React Server Component Payload...

See: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#closures-and-encryption



