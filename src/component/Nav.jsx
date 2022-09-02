function Nav(props) {
  return (
    <nav>
      <input type="color" name="color" id="color-el" />
      <select name="" id="select-El" className="select-box">
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome Dark</option>
        <option value="monochrome-light">Monochrome Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
      <button onClick={props.getColor}>Get color scheme</button>
    </nav>
  );
}

export default Nav;
