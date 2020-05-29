import React, { useState } from 'react';

interface TodoInputProps {
  handleSubmit(value: string): void;
}

const TodoInput = (props: TodoInputProps) => {
  // const [value, setValue] = useState<string>('');
  const [error, setError] = useState(false);

  // const onSubmitHandler = (evt: any) => {
  //   evt.preventDefault();
  //   props.handleSubmit(value);
  //   setValue('');
  // };

  // const changeValue = (evt: any) => {
  //   setValue(evt.target.value);
  // };

  if (error) {
    throw new Error('Click error');
  }

  const buttonClick = () => {
    setError(true);
  };

  return <button onClick={buttonClick}>Click me</button>;

  // return (
  //   <form onSubmit={onSubmitHandler}>
  //     <input type="text" value={value} onChange={changeValue} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

export default TodoInput;
