import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/25_compiler/")({
  component: Parent,
});

// Beim Klicken werden alle drei Komponenten neugerendert
// Wie können wir das verhindern:
//  React.memo fuer CounterDisplay
//  useCallback und React.memo fuer onButtonClick

function Parent() {
  console.log(new Date().toISOString(), "Rendering Parent");
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (amount: number) =>
    setCounter((currentCount) => currentCount + amount);

  return (
    <div className={"gap-x-4 border border-slate-400 p-4"}>
      <div>Current Counter: {counter}</div>
      <div className={"flex gap-x-4 p-4"}>
        <CountButton onButtonClick={handleButtonClick} />
        <CounterDisplay counter={counter} />
        <CounterHint />
      </div>
    </div>
  );
}

function CounterHint() {
  console.log(new Date().toISOString(), "Rendering CounterHint");
  return (
    <div className={"flex gap-x-4 border border-slate-400 p-4"}>
      Hint: Click on button to see things working.
    </div>
  );
}

type CounterDisplayProps = { counter: number };

function CounterDisplay({ counter }: CounterDisplayProps) {
  console.log(new Date().toISOString(), "Rendering CounterDisplay");
  return (
    <div className={"flex gap-x-4 border border-slate-400 p-4"}>
      Counter Value: {counter}
    </div>
  );
}
type CountButtonProps = {
  onButtonClick(amount: number): void;
};
function CountButton({ onButtonClick }: CountButtonProps) {
  console.log(new Date().toISOString(), "Rendering CountButton");
  return (
    <div className={"flex gap-x-4 border border-slate-400 p-4"}>
      <button onClick={() => onButtonClick(+1)}>Increase!</button>
      <button onClick={() => onButtonClick(+1)}>Decrease!</button>
    </div>
  );
}
