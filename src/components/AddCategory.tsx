import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useState,
} from "react";

import PropTypes from "prop-types";

interface IProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
}

export const AddCategory = ({ setCategories }: IProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((animes) => [inputValue, ...animes]);
      setInputValue("");
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </Fragment>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
