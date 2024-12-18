import { motion } from "framer-motion";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useEffect, useMemo, useRef, useState } from "react";
import GridCells from "../../components/GridLights/GridCells";
import Header from "../../components/Header";

export const GridLights = () => {
  const [grid, setGrid] = useState(3);
  const [deselecting, setDeselecting] = useState(false);
  const [order, setOrder] = useState([]);

  const getCenterIndex = (gridSize) => {
    return Math.floor((gridSize * gridSize) / 2);
  };

  const interValRef = useRef();

  const getGridCells = useMemo(() => {
    return Array(grid * grid).fill(null);
  }, []);

  const onClickCellHandler = (index) => {
    if (deselecting) return;
    if (!order.includes(index)) {
      setOrder([...order, index]);
    }
  };

  useEffect(() => {
    if (order.length == 0) {
      clearInterval(interValRef.current);
      setDeselecting(false);
    }
    if (order.length == grid * grid - 1) {
      setDeselecting(true);
      interValRef.current = setInterval(() => {
        setOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          newOrder.pop();
          return newOrder;
        });
      }, 300);
    }
  }, [order]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12 h-screen">
        <Header title={" Grid Lights"} />
        <div className="conatiner bg-base-300 h-3/4 flex justify-center items-center">
          <GridCells
            grid={grid}
            getGridCells={getGridCells}
            getCenterIndex={getCenterIndex}
            order={order}
            onClickCells={onClickCellHandler}
          />
        </div>
      </div>
    </div>
  );
};
