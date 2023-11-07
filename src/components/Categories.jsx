import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Categories = () => {
    return (
       <div>
        <h2 className='text-5xl text-slate-600 font-bold mt-12 text-center mb-10'>FIND THE JOB THAT FITS YOUR LIFE</h2>


     <div className='w-1/3 mx-auto'>
            <Tabs>
    <TabList >
      <Tab >Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Grapics Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
            
        </div>
       </div>
    );
};

export default Categories;