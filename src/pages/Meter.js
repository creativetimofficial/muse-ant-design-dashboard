import { Table } from 'antd';


const columns = [
  {
    key: "1",
    title: "Project No",
    dataIndex: "projectNo",
    
  },

  {
    key: '2',
    title: 'Project Name',
    dataIndex: 'projectName',
    
  },
  {
    key: '3',
    title: 'Project Type',
    dataIndex: 'projectType',
  },
  { 
    key: '4',
    title: 'Building',
    dataIndex: 'building',
  },
  { 
    key: '5',
    title: 'Asset',
    dataIndex: 'asset',
  },
  { 
    key: '6',
    title: 'Name',
    dataIndex: 'name',
  },
  {
    key: '7',
    title: 'MPID',
    dataIndex: 'mpid',
  },
  {
    key: '8',
    title: 'Cumulative',
    dataIndex: 'cumulative',
  },
  {
    key: '9',
    title: 'Energy Type',
    dataIndex: 'energyType',
  },
  {
    key: '10',
    title: 'Energy Profile',
    dataIndex: 'energyProfile',
  },
  {
    key: '11',
    title: 'Monitor Interval Name',
    dataIndex: 'monitorIntervalName',
  },
  {
    key: '12',
    title: 'Asset Served',
    dataIndex: 'assetServed',
  },
  {
    key: '13',
    title: 'Components',
    dataIndex: 'components',
  },
  {
    key: '14',
    title: 'Db',
    dataIndex: 'db',
  },
  {
    key: '15',
    title: 'Holidays',
    dataIndex: 'holidays',
  },
  {
    key: '16',
    title: 'Targets',
    dataIndex: 'targets',
  },
  
  {
    key: '17',
    title: 'Alerts',
    dataIndex: 'address'
  },

  {
    key: '18',
    title: 'Delete',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    projectNo:"T6987",
    projectName: 'Frasers-Williams Sonoma',
    projectType:"GBS",
    building:"Williams Sonoma",
    asset:"IT-Data Collector",
    name:"ZZZZ066052-K1",
    mpid:"3170",
    cumulative:"No",
    energyType:"Electricity-NEM12 kVARh",
    energyProfile:"System Profile",
    monitorIntervalName:"Hourly",
    assetServed:"",
    components:"",
    db:"",
    holidays:"",
    targets:"",
    alerts:"",
    delete:"",
  },
  {
    key: '2',
    projectNo:"T6987",
    projectName: 'Frasers-Williams Sonoma',
    projectType:"GBS",
    building:"Williams Sonoma",
    asset:"IT-Data Collector",
    name:"ZZZZ066052-K1",
    mpid:"3170",
    cumulative:"No",
    energyType:"Electricity-NEM12 kVARh",
    energyProfile:"System Profile",
    monitorIntervalName:"Hourly",
    assetServed:"",
    components:"",
    db:"",
    holidays:"",
    targets:"",
    alerts:"",
    delete:"",

  },
  {
    key: '3',
    projectNo:"T6987",
    projectName: 'Frasers-Williams Sonoma',
    projectType:"GBS",
    building:"Williams Sonoma",
    asset:"IT-Data Collector",
    name:"ZZZZ066052-K1",
    mpid:"3170",
    cumulative:"No",
    energyType:"Electricity-NEM12 kVARh",
    energyProfile:"System Profile",
    monitorIntervalName:"Hourly",
    assetServed:"",
    components:"",
    db:"",
    holidays:"",
    targets:"",
    alerts:"",
    delete:"",

  },

];
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1300,
    }}
  />
);
export default App;