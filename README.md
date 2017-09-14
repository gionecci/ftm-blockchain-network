# FTM BlockChain Example Network

This business network defines:

**Participants**
`BankParticipant`

**Assets**
`BankAccountAsset`

**Transactions**
`SettlmentTransaction`

The `SettlmentTransaction` transaction increase by PaymentConcept.amount the `BankAccountAsset`.

To test this Business Network Definition in the **Test** tab:

Create a `BankParticipant` participant:

```
{
  "$class": "org.acme.ftm.BankParticipant",
  "ABI": "123456",
  "name": "MyPersonalBank"
}
```

Create a `BankAccountAsset` asset:

```
{
  "$class": "org.acme.ftm.BankAccountAsset",
  "destIBAN": "IBAN BankAccount",
  "amount": "1000",
  "UserName": "MioUserName"
}
```


Submit a `SettlmentTransaction` transaction:
At moment it simply update the payment amount, later it will update the
Bank Account by Payment amount
```
{
  "$class": "org.acme.ftm.SettlmentTransaction",
  "payment": {
    "$class": "org.acme.ftm.PaymentConcept",
    "paymentRefId": "",
    "amount": "12",	
    "destIBAN": "Dest",
    "transactionRefNumber": "trn"
  },
  "bankAccount": "resource:org.acme.ftm.BankAccountAsset#IBAN:2808"
}
```


Congratulations!
