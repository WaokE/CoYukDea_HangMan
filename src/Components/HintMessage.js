import useStore from "../Store/Store";

const HintMessage = () => {
    const { hintMessage } = useStore();

    return <p>{hintMessage}</p>;
};

export default HintMessage;
