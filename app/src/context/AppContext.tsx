import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface AppContextInterface {
  rules: boolean;
  setRules: Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const defaultStore = {
  rules: false,
  setRules: (e: boolean) => {},
  selected: "",
  setSelected: (e: string) => {},
  score: 0,
  setScore: (e: number) => {},
};

export const AppContext = createContext(defaultStore);

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [rules, setRules] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{ rules, setRules, selected, setSelected, score, setScore }}
    >
      {children}
    </AppContext.Provider>
  );
}
