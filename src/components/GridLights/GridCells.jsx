function GridCells({
  grid,
  getGridCells,
  getCenterIndex,
  order,
  onClickCells,
}) {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
    >
      {getGridCells.map((i, index) => {
        if (index == getCenterIndex(grid)) {
          return (
            <div
              id={index}
              key={index}
              className="rounded-md px-8 py-6 border invisible"
            ></div>
          );
        }
        return (
          <div
            key={index}
            onClick={() => onClickCells(index)}
            className={
              "rounded-md p-12 border cursor-pointer " +
              (order.includes(index) && "bg-primary")
            }
          ></div>
        );
      })}
    </div>
  );
}

export default GridCells;
