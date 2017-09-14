import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.ftm{
   export class BankParticipant extends Participant {
      ABI: string;
      name: string;
   }
   export class BankAccountAsset extends Asset {
      IBAN: string;
      amount: number;
      userName: string;
   }
   export class PaymentConcept {
      paymentRefId: string;
      amount: number;
      destIBAN: string;
      transactionRefNumber: string;
      currency: string;
      description: string;
      MT: string;
   }
   export class SettlmentTransaction extends Transaction {
      payment: PaymentConcept;
      bankAccount: BankAccountAsset;
   }
// }
