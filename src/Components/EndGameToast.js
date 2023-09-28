import useStore from "../Store/Store";

const EndGameToast = () => {
    const { answerWord } = useStore();
    return <div>게임 실패! 단어는 {answerWord} 였습니다.</div>;
};

export default EndGameToast;
