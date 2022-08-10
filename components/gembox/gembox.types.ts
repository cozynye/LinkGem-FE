import { Dispatch, SetStateAction } from 'react';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

export type ILinkDataType = {
  imageUrl: string;
  title: string;
  description: string;
  createDate: string;
};

export interface IPropsGemBoxUI {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  totalCount: number | undefined;
  gemboxTitle: string;
  setGembox: (el?: IDataType) => () => void;
  isCreate: boolean;
  setIsCreate: Dispatch<SetStateAction<boolean>>;
  totalData: IDataType[] | any;
  openCreate: () => void;
}

export interface IPropsGemCard {
  selectedId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  el: IDataType;
  openEdit: (id: number) => () => void;
  openDelete: (id: number) => () => void;
  isCreate: boolean;
  setIsCreate: Dispatch<SetStateAction<boolean>>;
  totalData: IDataType[] | any;
}

export interface IPropsGemboxModal {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
  data: IDataType[] | any;
  selectedId?: number;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  isCreate: boolean;
  setIsCreate: Dispatch<SetStateAction<boolean>>;
  totalData: IDataType[] | any;
}

export interface IPropsGemboxStyles {
  isChecked?: boolean;
  error?: string | boolean;
}
