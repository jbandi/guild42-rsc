"use client";

import {useFormState, useFormStatus} from 'react-dom';
import styles from "./Child.module.css";
import {updateCountServerState} from '@/app/09-form-hooks/serverAction';



type ChildProps = {
  initialState: number;
};

export default function Child({initialState}: ChildProps  ) {

  const [state, formAction] = useFormState(updateCountServerState, '');

  console.log("rendering Child", state);
  return (
    <div className={styles.wrapper}>
      <h2 style={{margin: 0}}>Display of Child.</h2>
      <p style={{marginTop: 0}}>Rendering on client</p>
      <form action={formAction}>
        <SubmitButton/>
      </form>
      <p>{state}</p>
    </div>
  );
}


function SubmitButton() {
  const {pending}  = useFormStatus();
  return (
    <button type="submit" disabled={pending}>Update</button>
  );
}
