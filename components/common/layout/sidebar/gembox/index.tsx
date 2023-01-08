import { EllipsisOutlined } from '@ant-design/icons';
// import GemCount from '../../../gemCount';
import * as S from '../sidebar.styles';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { useQuery } from 'utils/useQuery';
import { useEffect, useState } from 'react';
import { boxNameState, gemboxRefetch, isAddGembox } from 'store/store';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import GemboxModal from '../../../../gembox/modal';
import GemCard from '../../../../gembox/modal/gemcard';
import DeleteBox from '../../../../gembox/modal/deleteBox';
import EditBox from '../../../../gembox/modal/editBox';
import AddIcon from '../../../../gembox/moreIcons/add';
// import MemoIcon from '../../../../../public/icons/memoIcon.svg';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
  linkCount?: number;
  isDefault?: boolean;
};

const GemboxSidebar = () => {
  const router = useRouter();
  const totalCount = getTotalLinkCount();

  const { data, refetch } = useQuery('gemboxes');

  const [, setBoxList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  // const [openAdd, setOpenAdd] = useState(false);
  const [openAdd, setOpenAdd] = useRecoilState(isAddGembox);
  const [selectedId, setSelectedId] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [boxRefetch] = useRecoilState(gemboxRefetch);
  const [, setBoxName] = useRecoilState(boxNameState);

  const setClose = () => {
    setOpen(false);
    setOpenAdd(false);
    setIsDelete(false);
    setIsEdit(false);
  };

  const openCreate = () => {
    if (data.totalCount === 8) {
      alert('잼박스를 더 이상 추가할 수 없습니다.');
      return;
    }
    setOpenAdd(true);
  };

  const openEdit = (id: number) => () => {
    setSelectedId(id);
    setIsEdit(true);
  };

  const openDelete = (id: number) => () => {
    setIsDelete(true);
    setSelectedId(id);
  };

  const selectMenu = (menu: string, el?: any) => () => {
    if (el?.id) {
      router.push(`/${menu}/${el.id}`);
      setBoxName(el.name);
    } else {
      router.push(`/${menu}`);
      if (menu.includes('favorite')) {
        setBoxName('즐겨찾기');
      } else if (menu.includes('memo')) {
        setBoxName('메모');
      } else {
        setBoxName('전체');
      }
    }
  };

  useEffect(() => {
    data && setBoxList([...data?.contents.reverse()]);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [boxRefetch]);

  return (
    <>
      <S.Sidebar>
        <S.GemboxList>
          <S.GemboxListTitle onClick={() => setOpen(true)}>
            MY GEM BOX
            <EllipsisOutlined
              style={{
                fontSize: '20px',
                color: '#8E8E8E',
              }}
            />
          </S.GemboxListTitle>
          <S.GemboxItem>
            <S.GemboxTitle onClick={selectMenu('gembox')}>
              전체
              <span>({totalCount || 0})</span>
            </S.GemboxTitle>
            {data?.contents?.map((el: IDataType) => (
              <S.GemboxText key={uuidv4()} onClick={selectMenu('gembox', el)}>
                {`${el?.name}`}
                <span>{`(${el.linkCount})`}</span>
              </S.GemboxText>
            ))}
            <S.GemboxButton onClick={openCreate}>
              + 잼박스 만들기
            </S.GemboxButton>
          </S.GemboxItem>
        </S.GemboxList>
        <S.FilterList>
          <S.FilterTitle>Filters</S.FilterTitle>
          <ul>
            <S.GemboxText onClick={selectMenu('gembox/favorite')}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={`${
                  router.pathname === '/gembox/favorite' ? '#5200ff' : 'none'
                } `}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.231 3.12678C10.341 2.90381 10.659 2.90381 10.769 3.12678L12.4316 6.49552C12.6792 6.99727 13.1579 7.34504 13.7116 7.42549L17.4292 7.9657C17.6753 8.00145 17.7735 8.30384 17.5955 8.47741L14.9054 11.0996C14.5047 11.4902 14.3219 12.0529 14.4165 12.6043L15.0515 16.3069C15.0935 16.552 14.8363 16.7389 14.6162 16.6232L11.2911 14.8751C10.7958 14.6147 10.2042 14.6147 9.70892 14.8751L6.38377 16.6232C6.16369 16.7389 5.90646 16.552 5.94849 16.3069L6.58353 12.6043C6.67812 12.0529 6.49529 11.4902 6.09462 11.0996L3.40452 8.4774C3.22647 8.30384 3.32472 8.00145 3.57078 7.9657L7.28841 7.42549C7.84212 7.34504 8.32078 6.99727 8.56841 6.49552L10.231 3.12678Z"
                  stroke="#0F0223"
                  strokeWidth="1.4"
                />
              </svg>

              <span
                className={`${
                  router.pathname === '/gembox/favorite' && 'current'
                } side-filter`}
              >
                즐겨찾기
              </span>
              {/* <GemCount isFavorites={true} /> */}
            </S.GemboxText>
            <S.GemboxText onClick={selectMenu('gembox/memo')}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 17H3.75C3.55109 17 3.36032 16.921 3.21967 16.7803C3.07902 16.6397 3 16.4489 3 16.25V2.75C3 2.55109 3.07902 2.36032 3.21967 2.21967C3.36032 2.07902 3.55109 2 3.75 2H15.75C15.9489 2 16.1397 2.07902 16.2803 2.21967C16.421 2.36032 16.5 2.55109 16.5 2.75V16.25C16.5 16.4489 16.421 16.6397 16.2803 16.7803C16.1397 16.921 15.9489 17 15.75 17ZM15 15.5V3.5H4.5V15.5H15ZM6.75 5.75H12.75V7.25H6.75V5.75ZM6.75 8.75H12.75V10.25H6.75V8.75ZM6.75 11.75H12.75V13.25H6.75V11.75Z"
                  fill={`${
                    router.pathname === '/gembox/memo' ? '#5200ff' : '#0F0223'
                  } `}
                />
              </svg>

              <span
                className={`${
                  router.pathname === '/gembox/memo' && 'current'
                } side-filter`}
              >
                메모
              </span>
              {/* <GemCount hasMemo={true} /> */}
            </S.GemboxText>
          </ul>
        </S.FilterList>
      </S.Sidebar>
      <GemboxModal
        open={open}
        setOpen={setOpen}
        onClose={setClose}
        title={(isDelete && !'') || (isEdit && '잼박스 수정') || 'My Gem Box'}
        Component={
          <>
            {isDelete && !isEdit && (
              <DeleteBox
                setIsDelete={setIsDelete}
                selectedId={selectedId}
                refetch={refetch}
              />
            )}
            {!isDelete && isEdit && (
              <EditBox
                selectedId={selectedId}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                refetch={refetch}
              />
            )}
            {!isEdit && !isDelete && (
              <>
                <S.GemWrapper>
                  {data?.contents.map((el: IDataType, i: number) => (
                    <GemCard
                      key={uuidv4()}
                      el={el}
                      i={i}
                      openEdit={openEdit}
                      openDelete={openDelete}
                    />
                  ))}
                </S.GemWrapper>
                <S.ModalButton onClick={openCreate}>
                  + 추가할 수 있는 잼박스
                  <span>{`${8 - data?.totalCount}개`}</span>
                </S.ModalButton>
              </>
            )}
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <AddIcon
          open={openAdd}
          setOpen={setOpenAdd}
          onClose={setClose}
          refetch={refetch}
        />
      </div>
    </>
  );
};

export default GemboxSidebar;
