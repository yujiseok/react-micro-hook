import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
} from "recoil";

const textAtom = atom({
  key: "textAtom",
  default: "",
});

/**
 * 파생 상태
 * 파생 상태는 다른 상태를 기반으로 계산된 상태를 말한다.
 * 파생 상태로 얻을 수 있는 장점
 * 1. 파생 상태 자동 관리
 * 2. 컴포넌트 간 재사용성 증가
 * 3. 의조선 추적 및 최적화
 * 4. 코드 가독성과 유지보수성 증가
 */

const textLengthSelector = selector({
  key: "textLengthSelector",
  get: ({ get }) => get(textAtom).length,
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textAtom);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <span>{text}</span>
    </>
  );
};

const TextLength = () => {
  const textLength = useRecoilValue(textLengthSelector);

  return <span>Length: {textLength}</span>;
};

const TextLength2 = () => {
  const [text] = useRecoilState(textAtom);

  return <span>Length: {text.length}</span>;
};

const App = () => {
  return (
    <RecoilRoot>
      <TextInput />
      <br />
      <TextLength />
      <br />
      <TextLength2 />
    </RecoilRoot>
  );
};
export default App;
