import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BankAccountAssetService } from './BankAccountAsset.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-BankAccountAsset',
	templateUrl: './BankAccountAsset.component.html',
	styleUrls: ['./BankAccountAsset.component.css'],
  providers: [BankAccountAssetService]
})
export class BankAccountAssetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      IBAN = new FormControl("", Validators.required);
  
      amount = new FormControl("", Validators.required);
  
      userName = new FormControl("", Validators.required);
  


  constructor(private serviceBankAccountAsset:BankAccountAssetService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          IBAN:this.IBAN,
        
    
        
          amount:this.amount,
        
    
        
          userName:this.userName
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBankAccountAsset.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.acme.ftm.BankAccountAsset",
      
        
          "IBAN":this.IBAN.value,
        
      
        
          "amount":this.amount.value,
        
      
        
          "userName":this.userName.value
        
      
    };

    this.myForm.setValue({
      
        
          "IBAN":null,
        
      
        
          "amount":null,
        
      
        
          "userName":null
        
      
    });

    return this.serviceBankAccountAsset.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "IBAN":null,
        
      
        
          "amount":null,
        
      
        
          "userName":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.ftm.BankAccountAsset",
      
        
          
        
    
        
          
            "amount":this.amount.value,
          
        
    
        
          
            "userName":this.userName.value
          
        
    
    };

    return this.serviceBankAccountAsset.updateAsset(form.get("IBAN").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceBankAccountAsset.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceBankAccountAsset.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "IBAN":null,
          
        
          
            "amount":null,
          
        
          
            "userName":null 
          
        
      };



      
        if(result.IBAN){
          formObject.IBAN = result.IBAN;
        }else{
          formObject.IBAN = null;
        }
      
        if(result.amount){
          formObject.amount = result.amount;
        }else{
          formObject.amount = null;
        }
      
        if(result.userName){
          formObject.userName = result.userName;
        }else{
          formObject.userName = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "IBAN":null,
        
      
        
          "amount":null,
        
      
        
          "userName":null 
        
      
      });
  }

}
