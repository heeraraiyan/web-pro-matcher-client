

import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Categories = () => {
   
  

  
    return (
       <div className='mb-24'>
        
        <h2 className='text-5xl text-slate-600 font-bold mt-12 text-center mb-10'>FIND THE JOB THAT FITS YOUR LIFE</h2>


     <div className='w-1/3 mx-auto'>
            <Tabs>
            <Link to='/alljobs'>
    <TabList >
      <Tab >Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Grapics Design</Tab>
    </TabList>
    
    <TabPanel>
      <h2 className='text-4xl text-slate-600'> Web Development Jobs</h2>
      <img src="https://i.ibb.co/VxrS3xP/pexels-pixabay-39284.jpg" alt="" />
      
    </TabPanel>
    <TabPanel>
      <h2  className='text-4xl text-slate-600'>Digital MarketingJobs</h2>
      <img src="https://i.ibb.co/YNZnJ1c/pexels-christina-morillo-1181263.jpg" alt="" />
    </TabPanel>
    <TabPanel>
      <h2  className='text-4xl text-slate-600'>Grapics Design jobs</h2>
      <img src="https://i.ibb.co/CtpF3Qf/pexels-roberto-nickson-3082341.jpg" alt="" />
    </TabPanel>
    </Link>
    
  </Tabs>
            
        </div>
       </div>
    );
};

export default Categories;