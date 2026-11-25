export default function ButtonComponent(props) {
  const { buttonText, backgroundCol } = props;
  return (
    <div>
      <button style={{ backgroundColor: backgroundCol, width: "100px" }}>
        {buttonText}
      </button>
    </div>
  );
}
