import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  
  @ViewChild("mySidebar") mySideBar : any;
  @ViewChild("myOverlay") myOverlay : any;
  @ViewChild("img01") img01 : any;
  @ViewChild("modal01") modal01 : any;
  @ViewChild("main") main : any;
  @ViewChild("bodyx") body : any;

  status: boolean = false;
 
  
  constructor(private renderer: Renderer2) { 
    
  }

  ngAfterViewInit(): void {
    // console.log("sidebar: "+this.mySideBar)
    // console.dir(this.mySideBar.nativeElement);
    // this.renderer.setStyle(this.mySideBar.nativeElement, 'display', 'block');
    // this.renderer.setStyle(this.myOverlay.nativeElement, 'display', 'block');
    // let bodyElement =  document.querySelector('body');
    // console.log("body: "+ bodyElement)
  }

  ngOnInit() {
    // const bodyElement = document.querySelector('body');
    // console.log("body: "+ bodyElement)
  }



 

  // public mySideBar = document.getElementById<HTMLElement>('mySidebar');

  // Script to open and close sidebar
  w3_open() {
      // this.mySideBar.style.display = "block";
      // this.myOverlay.style.display = "block";

      //this works by also in the html writing #nameofId
      // this.renderer.setStyle(this.mySideBar.nativeElement, 'display', 'block');
      // this.renderer.setStyle(this.myOverlay.nativeElement, 'display', 'block');
      this.status = !this.status;
      document.body.style.overflow ="hidden"
    
      // this.renderer.setStyle(this.body.nativeElement, 'overflow', 'hidden');

   
      
      // this.main.style.overflow = "hidden"
      console.log("clicked")
   
  }

  w3_close() {
      // this.mySideBar.style.display = "none";
      // this.myOverlay.style.display = "none";

      //this works by also in the html writing #nameofId
      // this.renderer.setStyle(this.mySideBar.nativeElement, 'display', 'none');
      // this.renderer.setStyle(this.myOverlay.nativeElement, 'display', 'none');
      this.status = !this.status;  
      document.body.style.overflow ="visible"
      console.log("clicked")
  }

  // Modal Image Gallery
  onClick(element: any): void {
    
 

      // document.getElementById("img01").src = element.src;
     this.renderer.setProperty(this.img01.nativeElement, 'src', 'https://www.w3schools.com/w3images/natureboy.jpg')
     console.table(this.img01)
      // document.getElementById("modal01").style.display = "block";
      this.renderer.setStyle(this.modal01.nativeElement, 'display', 'block');
      // var captionText = document.getElementById("caption");
      // captionText.innerHTML = element.alt;


      
  }


}
