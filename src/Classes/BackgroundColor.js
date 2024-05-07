import "./backgroundColor.css";
function BackgroundColor() {

  return (
    <div id="wrapper">
      <h3>Background Color Changer </h3>
      <input
        type="color"
        onChange={(e) => {
          document.body.style.background = e.target.value;
        }}
      />
    </div>
  );
}
export default BackgroundColor;
