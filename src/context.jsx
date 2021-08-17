import { createContext, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokeId, setPokeId] = useState(1);

  return (
    <PokeContext.Provider value={{ pokeId, setPokeId }}>
      {children}
    </PokeContext.Provider>
  );
};
