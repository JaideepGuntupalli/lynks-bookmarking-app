import { FC } from 'react';

interface Props {
  id: string;
  label: string;
}

export const Input: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.id}
        id={props.id}
        name={props.id}
        className="p-2 text-black rounded-sm"
        placeholder={props.label}
      />
    </div>
  );
};
