import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

const Statistics = () => {
    const [donation , setDonation] = useState(0)

    useEffect(()=>{
       const storedData = JSON.parse(localStorage.getItem('donations'))
        if(storedData !== null){
            setDonation(storedData.length)
        }

    },[])

    return (
        <div className='flex justify-center items-center mt-5 ml-12'>
            <PieChart
            series={[
                {
                data: [
                    {  color: '#00C49F', value: donation, label: 'Your Donation' },
                    { color: '#FF444A', value: 12 - donation , label: 'Total Donation',  },
 
                ],
                arcLabel: (params)=> `${((params.value / 12) * 100).toFixed(1)}%`
                },
            ]}
            legend={{
                direction: "col",
                position: {
                  vertical: "middle",
                  horizontal: "middle"
                }
              }}
              sx={{
                "--ChartsLegend-rootOffsetX": "0px",
                "--ChartsLegend-rootOffsetY": "210px",
              }}
            width={400}
            height={500}
            />
        </div>
    )
};

export default Statistics;
