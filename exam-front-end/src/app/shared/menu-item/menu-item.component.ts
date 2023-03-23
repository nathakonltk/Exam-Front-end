import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuItemComponent {
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth!: number;
  constructor(
    public router: Router

  ) { 
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
  }
  
  onItemSelected(item: any) {
    // if (item.route ) {
    //   this.router.navigate([item.route]);
    // }
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);      
      console.log(item);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
   
    
  }
  
}
