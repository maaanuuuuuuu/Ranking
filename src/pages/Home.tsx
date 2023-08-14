import Compare from 'components/Compare/Compare'

export const Home = () => {
  const handleWinnerSelected = (winner: React.ReactElement) => {
    console.log('Winner selected:', winner)
  }

  return (
    <Compare
      comparedComponents={[<div key="1">Component 1</div>, <div key="2">Component 2</div>]}
      onWinnerSelected={handleWinnerSelected}
    />
  )
}
