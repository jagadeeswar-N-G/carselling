import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  buttonStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface manufactureProps {
  manufacture: string;
  setManufacture: (manufacture: string) => void;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
