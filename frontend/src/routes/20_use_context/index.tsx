import { createFileRoute } from "@tanstack/react-router";
import { createContext, ReactNode, use, useState } from "react";

export const Route = createFileRoute("/20_use_context/")({
  component: CounterExample,
});

type ICounterContext = {
  currentValue: number;
  increase(): void;
};

const CounterContext = createContext<ICounterContext | null>(null);

type CounterContextProviderProps = {
  children: ReactNode;
};
function CounterContextProvider({ children }: CounterContextProviderProps) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);

  return (
    <CounterContext value={{ currentValue: count, increase }}>
      {children}
    </CounterContext>
  );
}

// TODO:
//  - createContext zeigen
//  - CountButton: use verwenden direkt im Click-Handler
//  - CounterDisplay: use hinzufügen
//  - Render-Zyklen

function CounterExample() {
  return (
    <CounterContextProvider>
      <div className={"flex gap-x-4"}>
        <CountButton />
        <CounterDisplay />
      </div>
    </CounterContextProvider>
  );
}

function CounterDisplay() {
  console.log("Render Counter Display");

  const [showValue, setShowValue] = useState(true);

  return (
    <div className={"border-slate-400 rounded border p-4"}>
      <button onClick={() => setShowValue(!showValue)}>
        {showValue ? "Hide" : "Show"} Value
      </button>
      {showValue && <p>Current value: {use(CounterContext)!.currentValue}</p>}
    </div>
  );
}

function CountButton() {
  console.log("Render Count Button");

  return (
    <div className={"border-slate-400 rounded border p-4"}>
      <button>Increase</button>
    </div>
  );
}
