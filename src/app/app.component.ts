import { Component, ComponentRef, OnInit, Renderer2, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('container',{read:ViewContainerRef,static:true}) container!:ViewContainerRef
  title = 'Firsttask';
  ActiveType:any = "Shupple"
  LinksData:any[] = ["Shupple","Restaurant","Cake"]
  DefaultStyle:any = {
    "display": "flex",
    "justify-content": "center", 
    "align-items": "center", 
    "height": "40px",
     "background-color":"rgb(255, 214, 139)",
     "width": "200px",
     "padding-left": "20px",
     "padding-right": "20px",
     "border-radius": "10px",
     "margin-left": "10px",
     "cursor": "pointer"
  }
  Active:any = {
    'background': "white",
    "transition": "0.3s all ease-in-out"
  }
  Deactive:any = {
    "background-color":"rgb(255, 214, 139)",
  }
  ComponentsId = new Map<string, ComponentRef<any>>();
  index:any = 0
Type:any = "Shupple"
themeArr!:Theme[];
constructor( private themeService: ThemeServiceService,
  private renderer2: Renderer2,) {
    this.themeArr = [Theme.RED, Theme.BLUE, Theme.BLACK];
    console.log('themeArr => ', this.themeArr);

  
}
  ngOnInit(): void {
    this.initialize()
  }
  Getvalue(type:any){
      switch(type.Value){
        case "Shupple":
          this.themeService.setTheme(Theme.RED, this.renderer2);
          break;
        case "Restaurant":
          this.themeService.setTheme(Theme.BLACK, this.renderer2);
          break;
        case "Cake":
          this.themeService.setTheme(Theme.BLUE, this.renderer2);
          break;
        default: break;

      }
  }
  initialize() {
    this.themeService.setTheme(Theme.RED, this.renderer2);
  }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme, this.renderer2);
  }
}
