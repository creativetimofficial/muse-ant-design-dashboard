const LeftTreeDataItems = [
    {
        id: '1',
        name: 'DEXUS _1 BLIGH STREET',
        icon: 'activefolder',
        isDirectory: true,
        expanded: true,
        
      }, 
      {
        id: '2',
        parentId: '1',
        name: 'NSW Connected Electricity Report',
        icon: 'activefolder',
        isDirectory: true,
        expanded: true,
        series :[
          111.9, 107.5, 106.4, 129.2, 102.0, 176.0, 105.6, 148.5, 216.4,
          194.1, 95.6, 54.4,
        ],
          
      }, {
        id: '3',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16131)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          111.9, 177.5, 106.4, 109.2, 102.0, 176.0, 105.6, 148.5, 116.4,
          194.1, 95.6, 54.4,
        ],
      }, {
        id: '4',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16132)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          111.9, 188.5, 106.4, 129.2, 102.0, 176.0, 105.6, 11.5, 216.4,
          194.1, 95.6, 54.4,
        ],
      }, {
        id: '5',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          101.9, 107.5, 106.4, 129.2, 102.0, 176.0, 15.6, 108.5, 216.4,
          194.1, 95.6, 54.4,
        ],
      },
      {
        id: '8',
        name: 'NSW Gas Report',
        parentId: '2',
        icon: 'activefolder',
        isDirectory: true,
        expanded: true,
      }, {
        id: '9',
        parentId: '8',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16131)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          111.9, 107.5, 106.4, 129.2, 102.0, 176.0, 105.6, 148.5, 216.4,
          194.1, 95.6, 54.4,
        ],
      },{
        id: '10',
        name: 'DEXUX _1 MACQUARIE',
        icon: 'activefolder',
        isDirectory: true,
        expanded: true,
      },{
        id: '11',
        name: 'BLIGH ST_AC LEVEL 27 (ID 16132)',
        parentId: '10',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          101.9, 107.5, 106.4, 129.2, 102.0, 176.0, 15.6, 108.5, 216.4,
          194.1, 95.6, 54.4,
        ],
      }, {
        id: '12',
        parentId: '10',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
        series :[
          101.9, 107.5, 106.4, 129.2, 102.0, 176.0, 15.6, 108.5, 216.4,
          194.1, 95.6, 54.4,
        ],
      }
]

export default LeftTreeDataItems;