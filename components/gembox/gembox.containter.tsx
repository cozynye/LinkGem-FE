import { useRouter } from 'next/router';
import { useQuery } from 'utils/useQuery';
import { useMutation } from 'utils/useMutation';
import GemboxUI from './gembox.presenter';
import { ILinkDataType, ILinkParams, IPropsGembox } from './gembox.types';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';
import { useEffect, useState } from 'react';

const Gembox = (props: IPropsGembox) => {
  const router = useRouter();
  const [pickLink] = useMutation('patch');
  const [boxRefetch, setBoxRefetch] = useRecoilState(gemboxRefetch);

  const [isDelete, setIsDelete] = useState(false);
  const [current, setCurrent] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const params: ILinkParams = {
    size: 24,
    page: current - 1,
  };

  if (router.query.boxId) params.gemBoxId = Number(router.query.boxId);
  if (props.isFavorMenu) params.isFavorites = true;
  if (props.hasMemo) params.hasMemo = true;

  const { data, refetch } = useQuery('links', params);

  useEffect(() => {
    refetch();
    if (isDelete) {
      setTimeout(() => {
        setIsDelete(false);
      }, 3000);
    }
    return () => setBoxRefetch(false);
  }, [boxRefetch, router.query, current]);

  const onClickPick = (el: ILinkDataType) => async () => {
    await pickLink(`links/${el?.id}`, {
      id: el?.id,
      isFavorites: !el?.favorites,
    });
    refetch();
    setBoxRefetch((prev) => !prev);
  };

  return (
    <GemboxUI
      data={data}
      refetch={refetch}
      onClickPick={onClickPick}
      isDelete={isDelete}
      setIsDelete={setIsDelete}
      current={current}
      setCurrent={setCurrent}
      startPage={startPage}
      setStartPage={setStartPage}
    />
  );
};

export default Gembox;
