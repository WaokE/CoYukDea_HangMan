import useStore from "../Store/Store";

const EndGameToast = () => {
    const { word } = useStore();
    return <div>게임 실패! 단어는 {word} 였습니다.</div>;
};

export default EndGameToast;
