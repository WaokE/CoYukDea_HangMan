import useStore from "../Store/Store";

const HintMessage = () => {
    const { hintMessage } = useStore();

    return <p data-cy="hintMessage">{hintMessage}</p>;
};

export default HintMessage;
