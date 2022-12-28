interface IAlarmBtnType {
  buttonAction: string;
  buttonText: string;
  buttonValue: string;
}
export interface IAlarmType {
  id: number;
  type: string;
  isRead: boolean;
  button: IAlarmBtnType;
  pastDay: string;
  content: string;
}
export interface IAlarmHeadType {
  type: string;
  name: string;
}
