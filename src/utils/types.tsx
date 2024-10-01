export type RootStackParamList = {
  Home: undefined;
  Details: { id: number; title: string; status: boolean };
};

export type TaskProps = {
  id: number;
  title: string;
  status: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
};
