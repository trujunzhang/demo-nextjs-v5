export default interface Enthusiasm {
  languageName: string;
  enthusiasmLevel: number;
}

export interface Props {
  name: string;
  enthusiasm: Enthusiasm;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
