import { Component } from '@angular/core';
import { Router,NavigationEnd,NavigationStart,Event as NavigationEvent,ActivatedRoute  } from '@angular/router';
import { NavItem } from '../../_models/index';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent  {
  NavItem = new NavItem;
  navitem:any;
  //@Input() breadcrumb!:string;
  breadcrumb="";
  
  event$ 
  constructor(
    private router: Router,
    ) {
    let url="";
    this.event$
       =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
                
              if(event instanceof NavigationStart) {
                url=event.url;
                //console.log("url::",url);
                //console.log("router::",this.router.config);
                let res : any = this.router.config.find(i => "/"+i.path==url);
                //console.log("BreadcrumbComponent: res :",res);
                if(res){
                  this.breadcrumb=res.data.breadcrumb;
                }
                
              }
            });
    
  }
  
  
}
