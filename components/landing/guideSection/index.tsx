import * as S from './guideSection.styles';
import { useScrollFadeIn } from 'utils/scrollEvent';

interface IGuideSectionProps {
  sectionNumber: number;
  text: string;
  title: string;
}

const GuideSection = (props: IGuideSectionProps) => {
  return (
    <S.Wrapper>
      <S.Article>
        <S.TextWrapper {...useScrollFadeIn('up', 2, 0)}>
          <S.sectionTitle>
            {props.sectionNumber === 1 && (
              <>
                복사 붙여넣기 하나로 <span>링크 저장 끝!</span>
              </>
            )}
            {props.sectionNumber === 2 && (
              <>
                언제나 찾기 쉽도록 <span>잼박스로 관리</span>
              </>
            )}
            {props.sectionNumber === 3 && (
              <>
                알람, 메모 기능으로 <span>꼼꼼스킬 LEVEL UP!</span>
              </>
            )}
          </S.sectionTitle>
          <S.sectionText>
            {props.text.split('\n').map((line: string) => {
              return (
                <span key={line}>
                  {line}
                  <br />
                </span>
              );
            })}
          </S.sectionText>
        </S.TextWrapper>
        {/* //TODO 모바일일때 이미지 위치 수정하자 */}
        {props.sectionNumber === 1 && (
          <S.ArticleContent {...useScrollFadeIn('right', 2, 0)}>
            <S.PinkBall {...useScrollFadeIn('up', 2, 1)}>Ctrl+C</S.PinkBall>
            <S.GreyBall {...useScrollFadeIn('up', 2, 2)}>Ctrl+V</S.GreyBall>
            <S.BlueBall>
              <S.DoughnutBall></S.DoughnutBall>
              <S.SaveLinkText>SAVE LINK</S.SaveLinkText>
              <S.GreenClip src="./icons/clip-161.png" />
              <S.PinkClip src="./icons/clip-162.png" />
              <S.GreyClip src="./icons/clip-163.png" />
            </S.BlueBall>
          </S.ArticleContent>
        )}
        {props.sectionNumber === 2 && (
          <S.ArticleContent>
            <S.SolidLine>
              <S.DottedLine />
              <S.Star />
            </S.SolidLine>
            {/* <S.Star /> */}
            <S.GemBox>
              <S.BlackGem
                src="./icons/gem-1.png"
                {...useScrollFadeIn('up', 2, 1.5)}
              />
              <S.GreenGem
                src="./icons/gem-2.png"
                {...useScrollFadeIn('up', 2, 1)}
              />
              <S.YellowGem
                src="./icons/gem-4.png"
                {...useScrollFadeIn('up', 2, 0.5)}
              />
              <S.PinkGem
                src="./icons/gem-3.png"
                {...useScrollFadeIn('up', 2, 0)}
              />
            </S.GemBox>
          </S.ArticleContent>
        )}
        {props.sectionNumber === 3 && (
          <S.ArticleContent>
            <S.Clock {...useScrollFadeIn('up', 2, 0)} src="./icons/clock.png" />
            <S.Memo {...useScrollFadeIn('left', 2, 0)} src="./icons/memo.png" />
          </S.ArticleContent>
        )}
      </S.Article>
    </S.Wrapper>
  );
};

export default GuideSection;
