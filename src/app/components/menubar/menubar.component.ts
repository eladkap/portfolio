import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  currentPage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: string) {
    this.currentPage = page;
  }

}
