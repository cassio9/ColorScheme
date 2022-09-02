function ColorScheme({ seedColor }) {
  //copy to clipboard
  function copy(e) {
    let tooltip = e.target.children[0];
    let tooltip2 = e.target.children[1];
    navigator.clipboard.writeText(tooltip.innerText);
    tooltip2.innerText = "Copied!";
    setTimeout(() => {
      tooltip2.innerText = "Copy";
    }, 1000);
  }

  return (
    <div
      className="col-color tooltip"
      onClick={copy}
      style={{
        backgroundColor: `${seedColor}`,
      }}
    >
      <span>{`${seedColor}`}</span>
      <span className="tooltip-text" id="myTooltip">
        Copy
      </span>
    </div>
  );
}

export default ColorScheme;
