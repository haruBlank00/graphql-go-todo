import { ChangeEvent, Dispatch } from "react";

export const handleFormInputChange = <T>(
  e: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<React.SetStateAction<T>>
) => {
  const { name, value } = e.target;

  setState((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
