import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
MovieData:any = [];
searchValue:any = [];
  constructor(private movieService:MoviesService) {}

  

  ngOnInit() {
    
    this.movieService.GetMovieData().subscribe(
 (data)=>{
 this.MovieData = data.Search;
 

 }
    );
   }
//this helps the search feature
   updateSearchList() {
    if (this.searchValue === "") {
      this.movieService.GetMovieData().subscribe(
        (data)=>{
        this.MovieData = data.Search;
        
       
        }
           );
    } else {
        this.movieService.GetSearch(this.searchValue).subscribe((data: any[]) => {
           this.MovieData = data['Search'];
        });
    }
  }
}