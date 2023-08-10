import { DataSource } from '@angular/cdk/collections';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

export class GenericDataSource<T> extends DataSource<T> {
  private _dataStream = new BehaviorSubject<T[]>([]);
  private load$ = new Subject<HttpParams>();

  constructor(private http: HttpClient, apiPath: string) {
    super();
    this.load$
      .pipe(
        tap((_) => {}),
        switchMap((httpParams) => {
          return this.http.get<T>(apiPath, { params: httpParams }).pipe(
            catchError((error: HttpErrorResponse) => {
              return of(new Error('Error occurred while fetching data'));
            })
          );
        })
      )
      .subscribe((res) => {});
  }

  connect(): Observable<any[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: any[]) {
    this._dataStream.next(data);
  }
}
