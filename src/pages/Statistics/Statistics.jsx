import { PieChart } from '@mui/x-charts/PieChart';
// import { PieChart, Pie } from 'recharts';
const Statistics = () => {
    // const data01 = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
        
    //   ];
      
      

    

    return (
        <div className='flex justify-center items-center mt-10'>
            <PieChart
            series={[
                {
                data: [
                    {  color: '#00C49F', value: JSON.parse(localStorage.getItem('donations')).length, label: 'Your Donation' },
                    { color: '#FF444A', value: 12-JSON.parse(localStorage.getItem('donations')).length , label: 'Total Donation',  },
 
                ],
                arcLabel: (params)=> `${((params.value / 12) * 100).toFixed(1)}%`
                },
            ]}
            width={400}
            height={200}
            />
        </div>
        // <div className='flex justify-center '>
            
        //     <PieChart width={400} height={400}>
        //         <Pie
        //             dataKey="value"
        //             isAnimationActive={false}
        //             data={data01}
        //             cx="50%"
        //             cy="50%"
        //             outerRadius={80}
        //             fill="#FF444A"   
        //         />
        //     </PieChart>
            
            
        // </div>
    )
};

export default Statistics;
