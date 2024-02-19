
function Header({currScore,bestScore}) {
  return (
    <div className="text-yellow-400 bg-green-950 p-3 flex justify-between px-5">
      <p className="text-3xl font-bold">Giphy Memory Game</p>
      <div>
        <p>Current Score: {currScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  )
}

export default Header