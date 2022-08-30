import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDiaplyMenu = false;

  menus = [
    {id:1, menuHeader:'Beginners', isVisibleSubmenu:false, isActive:true, routerLink:'/angular/beginner'},
    {id:2, menuHeader:'Intermediate', isVisibleSubmenu:false, isActive:true, routerLink:'/reactjs'},
    {id:3, menuHeader:'Expertr', isVisibleSubmenu:false, isActive:true, routerLink:'/javascript'},
    {id:4, menuHeader:'Coding Test', isVisibleSubmenu:false, isActive:true, routerLink:'/codingtest/beginner'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
