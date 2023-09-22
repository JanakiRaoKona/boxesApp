const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;

  return (
    <div className="cont">
      <div className={className}>
        <p className="paragraph">{name}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="bg-container">
      <Box className="yellow-bg" name="Small" />
      <Box className="blue-bg" name="Medium" />
      <Box className="pink-bg" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
