//import { Component, OnInit } from '@angular/core';


import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  
templateUrl: './article.component.html',
  
styleUrls: ['./article.component.css']
}
)

export class ArticleComponent  {

 
@HostBinding('attr.class') cssClass = 'row';
 votes: number;
 title: string;
 link: string; 
constructor() {
this.title=
 'Sherlok Holmes';
  this.link='https://en.wikipedia.org/wiki/The_Adventure_of_the_Speckled_Band';
 this.votes=10;
 }

  
voteUp(): boolean {
 this.votes += 1;
return false;
 }

 voteDown(): boolean {
 this.votes -= 1;
return false;
}
ngOnInit() {
  
}


}
