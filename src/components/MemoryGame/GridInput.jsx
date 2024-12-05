function GridInput({ grid, handleGridInput, handleStartGame }) {
  return (
    <>
      <div className="text-xl text-gray-300 mt-2 mb-6">
        Enter Size And Click Start To Continue
      </div>
      <div className="join">
        <input
          className="input input-bordered join-item"
          placeholder="Grid"
          value={grid}
          onChange={(e) => handleGridInput(e.target.value)}
        />
        <button
          className="btn btn-outline btn-primary"
          onClick={handleStartGame}
        >
          Start
        </button>
      </div>
    </>
  );
}

export default GridInput;
