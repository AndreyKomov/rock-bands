import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from 'src/environments/environment';
import { Observable, from as fromPromise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contenful.spaceId,
    accessToken: environment.contenful.token,
  })

  constructor() { }

  logContent(contentId: any) {
    this.client.getEntry(contentId)
      .then((entry) => {console.log(entry);
      })
  }

  getContent(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return fromPromise(promise).map(entry => entry.fields)
  }
}
