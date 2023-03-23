export class NavItem {
  public navItems= [

    {
      displayName: 'Resume',
      disabled: true,
      iconName: 'account_box',
      route: '/resume'
    },
    {
      displayName: 'ข้อสอบ',
      disabled: true,
      iconName: 'description',
      //route: '/exam',
      children:[
        {
          displayName: 'ข้อสอบข้อที่ 1',
          disabled: true,
          iconName: 'looks_one',
          route: '/exam/exam1'
        },
        {
          displayName: 'ข้อสอบข้อที่ 2',
          disabled: true,
          iconName: 'looks_two',
          route: '/exam/exam2'
        } ,
        {
          path:'exam3',
          displayName: 'ข้อสอบข้อที่ 3',
          disabled: true,
          iconName: 'looks_3',
          route: '/exam/exam3'
        }
      ]

    },
   
    
  ];
}
