import { useState } from 'react';
import {
  Item,
  ListWrapper,
  SelectWrapper,
} from '../../common/styles/selectBox.styles';
import { v4 as uuidv4 } from 'uuid';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

const SelectBoxPage = (props: {
  selectList: any[];
  gembox: IDataType;
  boxName: string;
  handleChange: (el: any) => () => void;
}) => {
  const [open, setOpen] = useState(false);

  console.log('📗📗📗📗📗📗📗📗📗');
  console.log(props);

  return (
    <SelectWrapper onClick={() => setOpen((prev) => !prev)}>
      {props.gembox?.name || '잼박스 선택'}{' '}
      <img src={`/icons/${open ? 'up' : 'down'}-arrow.png`} />
      {open && (
        <ListWrapper>
          {props.selectList.map((el) => (
            <Item
              key={uuidv4()}
              onClick={props.handleChange(el)}
              isColor={props.boxName === el.name}
            >
              {el.name}
            </Item>
          ))}
        </ListWrapper>
      )}
    </SelectWrapper>
  );
};

export default SelectBoxPage;
