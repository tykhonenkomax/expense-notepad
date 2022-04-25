import {CostItemComponents} from "./ components";

function App() {

    const cost=[
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.9
        },
        {
            date: new Date(2021, 11, 25),
            description: 'McBook',
            amount: 1254.72
        },
        {
            date: new Date(2021, 12, 10),
            description: 'LandRover Discovery',
            amount: 10000.00
        }
    ]


  return (
    <div>
<h1>Начнем учить Реакт!</h1>
        <CostItemComponents date={cost[0].date} description={cost[0].description} amount={cost[0].amount}></CostItemComponents>
        <CostItemComponents date={cost[1].date} description={cost[1].description} amount={cost[1].amount}></CostItemComponents>
        <CostItemComponents date={cost[2].date} description={cost[2].description} amount={cost[2].amount}></CostItemComponents>
    </div>
  );
}

export default App;
