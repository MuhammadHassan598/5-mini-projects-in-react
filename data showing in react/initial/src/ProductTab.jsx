import Product from "./product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <>
      <div style={styles}>

        <Product title="Logitech Mx Master" idx={0} />
        <Product title="Apple Pen (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-transformer" idx={2} />
        <Product title="Petronics Tod 23" idx={3} />
      </div>
    </>
  );
}

export default ProductTab;
