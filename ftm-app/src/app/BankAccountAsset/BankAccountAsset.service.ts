import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { BankAccountAsset } from '../org.acme.ftm';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BankAccountAssetService {

	
		private NAMESPACE: string = 'BankAccountAsset';
	



    constructor(private dataService: DataService<BankAccountAsset>) {
    };

    public getAll(): Observable<BankAccountAsset[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<BankAccountAsset> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<BankAccountAsset> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<BankAccountAsset> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<BankAccountAsset> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
