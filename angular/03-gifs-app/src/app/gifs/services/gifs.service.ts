import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []
  private apiKey: string = "NFO6CjfFFF0TU4TssGkpCRG5jeQRped7"

  public gifList: Gif[] = []

  constructor( private http: HttpClient) { }


  get tagsHistory() {
    return [...this._tagsHistory]
  }



  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0, 10)
  }

  async searchTag(tag: string): Promise<void> {

    if (tag.length === 0) return;
    this.organizeHistory(tag)


    this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=NFO6CjfFFF0TU4TssGkpCRG5jeQRped7&q=${tag}&limit=10`)
      .subscribe(resp => {

        this.gifList = resp.data;
        // console.log(this.gifList)
      })

    // await fetch(`https://api.giphy.com/v1/gifs/search?api_key=NFO6CjfFFF0TU4TssGkpCRG5jeQRped7&q=${tag}&limit=10`)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
  }
}
