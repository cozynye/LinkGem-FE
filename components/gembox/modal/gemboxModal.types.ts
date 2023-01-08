import { Dispatch, SetStateAction } from 'react';

export interface IDeleteBoxProps {
  selectedId: number;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
}

export interface IEditBoxProps {
  setIsDelete?: any;
  selectedId: number;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
}

export interface IPropsGemboxModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  title: string | boolean;
  Component: any;
  isClose?: boolean;
}
