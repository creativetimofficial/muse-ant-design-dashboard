const TreeDataItems = [
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
      }, {
        id: '3',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16131)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
      }, {
        id: '4',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16132)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
      }, {
        id: '5',
        parentId: '2',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
      },
      {
        id: '8',
        name: 'NSW Gas Report',
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
      }, {
        id: '12',
        parentId: '10',
        name: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
        icon: 'file',
        isDirectory: false,
        expanded: true,
      }
]

export default TreeDataItems;