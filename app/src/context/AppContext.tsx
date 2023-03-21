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
}

const defaultStore = {
  rules: false,
  setRules: (e: boolean) => {},
  selected: "",
  setSelected: (e: string) => {},
};

export const AppContext = createContext(defaultStore);

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const [rules, setRules] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <AppContext.Provider value={{ rules, setRules, selected, setSelected }}>
      {children}
    </AppContext.Provider>
  );
}
