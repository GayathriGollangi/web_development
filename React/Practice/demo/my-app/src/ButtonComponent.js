export default function ButtonComponent(props) {
  const { buttonText, backgroundCol, click } = props;
  return (
    <div>
      <button
        style={{ backgroundColor: backgroundCol, width: "100px" }}
        onClick={click}
      >
        {buttonText}
      </button>
    </div>
  );
}
