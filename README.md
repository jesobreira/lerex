# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `SWAPXRESTB2BAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=SWAPX%20REST%20B2B%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  SWAPX REST B2B APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=SWAPX%20REST%20B2B%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [BankingController](#banking_controller)
* [CardsController](#cards_controller)
* [CurrenciesController](#currencies_controller)
* [FXOrderController](#fx_order_controller)
* [HealthCheckController](#health_check_controller)
* [InsuranceManagementController](#insurance_management_controller)
* [OrganisationController](#organisation_controller)
* [StaticDataController](#static_data_controller)
* [SubscriptionController](#subscription_controller)
* [TransactionsController](#transactions_controller)
* [UsersController](#users_controller)
* [WalletController](#wallet_controller)

## <a name="banking_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BankingController") BankingController

### Get singleton instance

The singleton instance of the ``` BankingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BankingController;
```

### <a name="get_banking_create_account"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.getBankingCreateAccount") getBankingCreateAccount

> Create a GBP and EUR account for the user


```javascript
function getBankingCreateAccount(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The ID of the user |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getBankingCreateAccount(userId, function(error, response, context) {

    
    });
```



### <a name="get_banking_get_user_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.getBankingGetUserAccounts") getBankingGetUserAccounts

> Get all accounts for a user


```javascript
function getBankingGetUserAccounts(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getBankingGetUserAccounts(userId, function(error, response, context) {

    
    });
```



### <a name="get_banking_block_user_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.getBankingBlockUserAccounts") getBankingBlockUserAccounts

> Block all accounts for a user


```javascript
function getBankingBlockUserAccounts(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getBankingBlockUserAccounts(userId, function(error, response, context) {

    
    });
```



### <a name="get_banking_unblock_user_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.getBankingUnblockUserAccounts") getBankingUnblockUserAccounts

> Unblock all accounts for a user


```javascript
function getBankingUnblockUserAccounts(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getBankingUnblockUserAccounts(userId, function(error, response, context) {

    
    });
```



### <a name="create_banking_make_payment"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.createBankingMakePayment") createBankingMakePayment

> Make a payment from a Lerex bank account to a beneficiary


```javascript
function createBankingMakePayment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | the model |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsBanksBankingPaymentModel({"key":"value"});

    controller.createBankingMakePayment(input, function(error, response, context) {

    
    });
```



### <a name="get_banking_get_all_card"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.getBankingGetAllCard") getBankingGetAllCard

> Get all accounts


```javascript
function getBankingGetAllCard(callback)
```

#### Example Usage

```javascript


    controller.getBankingGetAllCard(function(error, response, context) {

    
    });
```



### <a name="delete_banking_close_account"></a>![Method: ](https://apidocs.io/img/method.png ".BankingController.deleteBankingCloseAccount") deleteBankingCloseAccount

> Close an account - this is not reversible


```javascript
function deleteBankingCloseAccount(userId, accountId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The ID of the user. |
| accountId |  ``` Required ```  | The account ID to terminate (for security reason). |



#### Example Usage

```javascript

    var userId = uniqid();
    var accountId = uniqid();

    controller.deleteBankingCloseAccount(userId, accountId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="cards_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CardsController") CardsController

### Get singleton instance

The singleton instance of the ``` CardsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CardsController;
```

### <a name="get_cards_get_card"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsGetCard") getCardsGetCard

> Get a card


```javascript
function getCardsGetCard(cardId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card to retrieve |



#### Example Usage

```javascript

    var cardId = 7;

    controller.getCardsGetCard(cardId, function(error, response, context) {

    
    });
```



### <a name="get_cards_get_all_card"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsGetAllCard") getCardsGetAllCard

> Get all cards


```javascript
function getCardsGetAllCard(callback)
```

#### Example Usage

```javascript


    controller.getCardsGetAllCard(function(error, response, context) {

    
    });
```



### <a name="get_cards_order_card"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsOrderCard") getCardsOrderCard

> Order a new Card


```javascript
function getCardsOrderCard(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The ID of the user to order a card for |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getCardsOrderCard(userId, function(error, response, context) {

    
    });
```



### <a name="create_cards_order_card_with_pin"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.createCardsOrderCardWithPIN") createCardsOrderCardWithPIN

> Order a new Card with the ability to set PIN and design


```javascript
function createCardsOrderCardWithPIN(model, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| model |  ``` Required ```  | The model. |



#### Example Usage

```javascript

    var model = new SwapXRESTB2BModelsCardsOrderCardModel({"key":"value"});

    controller.createCardsOrderCardWithPIN(model, function(error, response, context) {

    
    });
```



### <a name="get_cards_get_cards_holder"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsGetCardsHolder") getCardsGetCardsHolder

> Get all active card holders


```javascript
function getCardsGetCardsHolder(callback)
```

#### Example Usage

```javascript


    controller.getCardsGetCardsHolder(function(error, response, context) {

    
    });
```



### <a name="get_cards_activate_card"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsActivateCard") getCardsActivateCard

> Activate a card


```javascript
function getCardsActivateCard(cardId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card to activate. |



#### Example Usage

```javascript

    var cardId = 7;

    controller.getCardsActivateCard(cardId, function(error, response, context) {

    
    });
```



### <a name="get_cards_save_pin"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsSavePin") getCardsSavePin

> Change the card PIN


```javascript
function getCardsSavePin(cardId, userId, pin, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card to send the PIN of. |
| userId |  ``` Required ```  | The ID of the card user (for security reason) |
| pin |  ``` Required ```  | The new 4 digits PIN code |



#### Example Usage

```javascript

    var cardId = 7;
    var userId = uniqid();
    var pin = 'pin';

    controller.getCardsSavePin(cardId, userId, pin, function(error, response, context) {

    
    });
```



### <a name="get_cards_unblock_pin"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsUnblockPin") getCardsUnblockPin

> Unblock the card PIN


```javascript
function getCardsUnblockPin(cardId, userId, pin, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card to send the PIN of. |
| userId |  ``` Required ```  | The ID of the card user (for security reason) |
| pin |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cardId = 7;
    var userId = uniqid();
    var pin = 'pin';

    controller.getCardsUnblockPin(cardId, userId, pin, function(error, response, context) {

    
    });
```



### <a name="get_cards_get_pin"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsGetPin") getCardsGetPin

> Get the card PIN


```javascript
function getCardsGetPin(cardId, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card |
| userId |  ``` Required ```  | The ID of the card user (for security reason) |



#### Example Usage

```javascript

    var cardId = 7;
    var userId = uniqid();

    controller.getCardsGetPin(cardId, userId, function(error, response, context) {

    
    });
```



### <a name="get_cards_get_user_card_configuration"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsGetUserCardConfiguration") getCardsGetUserCardConfiguration

> Get the list of Merchant Category Codes which are blocked


```javascript
function getCardsGetUserCardConfiguration(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getCardsGetUserCardConfiguration(userId, function(error, response, context) {

    
    });
```



### <a name="create_cards_set_user_card_configuration"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.createCardsSetUserCardConfiguration") createCardsSetUserCardConfiguration

> Create/Update the list of Merchant Category Codes which are blocked


```javascript
function createCardsSetUserCardConfiguration(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsCardsBlockMccCardRequestModel({"key":"value"});

    controller.createCardsSetUserCardConfiguration(input, function(error, response, context) {

    
    });
```



### <a name="get_cards_block_card_by_user"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsBlockCardByUser") getCardsBlockCardByUser

> Block the user card


```javascript
function getCardsBlockCardByUser(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getCardsBlockCardByUser(userId, function(error, response, context) {

    
    });
```



### <a name="get_cards_unblock_card_by_user"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.getCardsUnblockCardByUser") getCardsUnblockCardByUser

> Unblock the user card


```javascript
function getCardsUnblockCardByUser(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getCardsUnblockCardByUser(userId, function(error, response, context) {

    
    });
```



### <a name="delete_cards_cancel_card"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.deleteCardsCancelCard") deleteCardsCancelCard

> Cancel / delete a card - this is not reversible


```javascript
function deleteCardsCancelCard(cardId, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cardId |  ``` Required ```  | The ID of the card to activate. |
| userId |  ``` Required ```  | The ID of the card user (for security reason). |



#### Example Usage

```javascript

    var cardId = 7;
    var userId = uniqid();

    controller.deleteCardsCancelCard(cardId, userId, function(error, response, context) {

    
    });
```



### <a name="create_cards_get_card_full_pan"></a>![Method: ](https://apidocs.io/img/method.png ".CardsController.createCardsGetCardFullPAN") createCardsGetCardFullPAN

> Allow to get the full card PAN (encrypted)


```javascript
function createCardsGetCardFullPAN(model, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| model |  ``` Required ```  | The request model. |



#### Example Usage

```javascript

    var model = new SwapXRESTB2BModelsCardsCardFullPANRequestModel({"key":"value"});

    controller.createCardsGetCardFullPAN(model, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="currencies_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CurrenciesController") CurrenciesController

### Get singleton instance

The singleton instance of the ``` CurrenciesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CurrenciesController;
```

### <a name="get_currencies_get_currencies_by_id"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetCurrenciesById") getCurrenciesGetCurrenciesById

> Get currency


```javascript
function getCurrenciesGetCurrenciesById(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 7;

    controller.getCurrenciesGetCurrenciesById(id, function(error, response, context) {

    
    });
```



### <a name="get_currencies_get_all_currencies"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetAllCurrencies") getCurrenciesGetAllCurrencies

> Get all currencies.


```javascript
function getCurrenciesGetAllCurrencies(callback)
```

#### Example Usage

```javascript


    controller.getCurrenciesGetAllCurrencies(function(error, response, context) {

    
    });
```



### <a name="get_currencies_get_currencies_by_name"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetCurrenciesByName") getCurrenciesGetCurrenciesByName

> Get currencies by ISO code


```javascript
function getCurrenciesGetCurrenciesByName(code, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| code |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var code = 'code';

    controller.getCurrenciesGetCurrenciesByName(code, function(error, response, context) {

    
    });
```



### <a name="get_currencies_get_available_wallet"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetAvailableWallet") getCurrenciesGetAvailableWallet

> Get all currencies which are available as a wallet


```javascript
function getCurrenciesGetAvailableWallet(callback)
```

#### Example Usage

```javascript


    controller.getCurrenciesGetAvailableWallet(function(error, response, context) {

    
    });
```



### <a name="get_currencies_get_rate_and_fee_by_currencies"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetRateAndFeeByCurrencies") getCurrenciesGetRateAndFeeByCurrencies

> Get rate and fee for buy currency


```javascript
function getCurrenciesGetRateAndFeeByCurrencies(sellCurrencyCode, buyCurrencyCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| sellCurrencyCode |  ``` Required ```  | The ISO code of the currency to sell. |
| buyCurrencyCode |  ``` Required ```  | The ISO code of the currency to buy. |



#### Example Usage

```javascript

    var sellCurrencyCode = 'sellCurrencyCode';
    var buyCurrencyCode = 'buyCurrencyCode';

    controller.getCurrenciesGetRateAndFeeByCurrencies(sellCurrencyCode, buyCurrencyCode, function(error, response, context) {

    
    });
```



### <a name="get_currencies_get_all_rates_to_gbp"></a>![Method: ](https://apidocs.io/img/method.png ".CurrenciesController.getCurrenciesGetAllRatesToGbp") getCurrenciesGetAllRatesToGbp

> Get all currencies with their rate


```javascript
function getCurrenciesGetAllRatesToGbp(callback)
```

#### Example Usage

```javascript


    controller.getCurrenciesGetAllRatesToGbp(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="fx_order_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FXOrderController") FXOrderController

### Get singleton instance

The singleton instance of the ``` FXOrderController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FXOrderController;
```

### <a name="get_fx_order_get_quote"></a>![Method: ](https://apidocs.io/img/method.png ".FXOrderController.getFXOrderGetQuote") getFXOrderGetQuote

> Get exchange rate from quote request


```javascript
function getFXOrderGetQuote(baseCurrencyId, baseAmount, targetCurrencyId, buySell, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| baseCurrencyId |  ``` Required ```  | TODO: Add a parameter description |
| baseAmount |  ``` Required ```  | TODO: Add a parameter description |
| targetCurrencyId |  ``` Required ```  | TODO: Add a parameter description |
| buySell |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var baseCurrencyId = 7;
    var baseAmount = 7.23211333725234;
    var targetCurrencyId = 7;
    var buySell = 7;

    controller.getFXOrderGetQuote(baseCurrencyId, baseAmount, targetCurrencyId, buySell, function(error, response, context) {

    
    });
```



### <a name="get_fx_order_execute_quote"></a>![Method: ](https://apidocs.io/img/method.png ".FXOrderController.getFXOrderExecuteQuote") getFXOrderExecuteQuote

> Execute a quote


```javascript
function getFXOrderExecuteQuote(quoteId, memo, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| quoteId |  ``` Required ```  | TODO: Add a parameter description |
| memo |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var quoteId = uniqid();
    var memo = 'memo';

    controller.getFXOrderExecuteQuote(quoteId, memo, function(error, response, context) {

    
    });
```



### <a name="get_fx_order_get_all"></a>![Method: ](https://apidocs.io/img/method.png ".FXOrderController.getFXOrderGetAll") getFXOrderGetAll

> Retrieve all past and pending FX Orders


```javascript
function getFXOrderGetAll(quoteId, memo, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| quoteId |  ``` Required ```  | TODO: Add a parameter description |
| memo |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var quoteId = uniqid();
    var memo = 'memo';

    controller.getFXOrderGetAll(quoteId, memo, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="health_check_controller"></a>![Class: ](https://apidocs.io/img/class.png ".HealthCheckController") HealthCheckController

### Get singleton instance

The singleton instance of the ``` HealthCheckController ``` class can be accessed from the API Client.

```javascript
var controller = lib.HealthCheckController;
```

### <a name="get_health_check_check"></a>![Method: ](https://apidocs.io/img/method.png ".HealthCheckController.getHealthCheckCheck") getHealthCheckCheck

> An Endpoint for API Health Checking


```javascript
function getHealthCheckCheck(callback)
```

#### Example Usage

```javascript


    controller.getHealthCheckCheck(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="insurance_management_controller"></a>![Class: ](https://apidocs.io/img/class.png ".InsuranceManagementController") InsuranceManagementController

### Get singleton instance

The singleton instance of the ``` InsuranceManagementController ``` class can be accessed from the API Client.

```javascript
var controller = lib.InsuranceManagementController;
```

### <a name="update_insurance_management_update_user"></a>![Method: ](https://apidocs.io/img/method.png ".InsuranceManagementController.updateInsuranceManagementUpdateUser") updateInsuranceManagementUpdateUser

> Update an insurance user


```javascript
function updateInsuranceManagementUpdateUser(userToUpdate, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userToUpdate |  ``` Required ```  | User to update |



#### Example Usage

```javascript

    var userToUpdate = new SwapXRESTB2BModelsInsuranceRestUpdatePolicyHolderModel({"key":"value"});

    controller.updateInsuranceManagementUpdateUser(userToUpdate, function(error, response, context) {

    
    });
```



### <a name="create_insurance_management_add_user"></a>![Method: ](https://apidocs.io/img/method.png ".InsuranceManagementController.createInsuranceManagementAddUser") createInsuranceManagementAddUser

> Add an insurance user


```javascript
function createInsuranceManagementAddUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | User to add |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsUserRestAddPolicyHolderModel({"key":"value"});

    controller.createInsuranceManagementAddUser(input, function(error, response, context) {

    
    });
```



### <a name="get_insurance_management_get_list_users_rest"></a>![Method: ](https://apidocs.io/img/method.png ".InsuranceManagementController.getInsuranceManagementGetListUsersRest") getInsuranceManagementGetListUsersRest

> Gets list of users.


```javascript
function getInsuranceManagementGetListUsersRest(searchTerm, pageNumber, pageSize, sortBy, orderBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| searchTerm |  ``` Required ```  | The search term. |
| pageNumber |  ``` Required ```  | The page number. |
| pageSize |  ``` Required ```  | Size of the page. |
| sortBy |  ``` Optional ```  | The sort by. |
| orderBy |  ``` Optional ```  | The order by. |



#### Example Usage

```javascript

    var searchTerm = 'searchTerm';
    var pageNumber = 7;
    var pageSize = 7;
    var sortBy = Object.keys(sortBy)[0];
    var orderBy = Object.keys(orderBy)[0];

    controller.getInsuranceManagementGetListUsersRest(searchTerm, pageNumber, pageSize, sortBy, orderBy, function(error, response, context) {

    
    });
```



### <a name="update_insurance_management_update_policy"></a>![Method: ](https://apidocs.io/img/method.png ".InsuranceManagementController.updateInsuranceManagementUpdatePolicy") updateInsuranceManagementUpdatePolicy

> Update policy.


```javascript
function updateInsuranceManagementUpdatePolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | Update policy |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsUserRestUpdatePolicy({"key":"value"});

    controller.updateInsuranceManagementUpdatePolicy(input, function(error, response, context) {

    
    });
```



### <a name="create_insurance_management_post_certificate_info"></a>![Method: ](https://apidocs.io/img/method.png ".InsuranceManagementController.createInsuranceManagementPostCertificateInfo") createInsuranceManagementPostCertificateInfo

> Create certificate information.


```javascript
function createInsuranceManagementPostCertificateInfo(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | The value to post. |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsUserRestAddPolicy({"key":"value"});

    controller.createInsuranceManagementPostCertificateInfo(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organisation_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganisationController") OrganisationController

### Get singleton instance

The singleton instance of the ``` OrganisationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganisationController;
```

### <a name="get_organisation_get_organisation_details"></a>![Method: ](https://apidocs.io/img/method.png ".OrganisationController.getOrganisationGetOrganisationDetails") getOrganisationGetOrganisationDetails

> Get organisation account details


```javascript
function getOrganisationGetOrganisationDetails(callback)
```

#### Example Usage

```javascript


    controller.getOrganisationGetOrganisationDetails(function(error, response, context) {

    
    });
```



### <a name="get_organisation_get_wallet_amounts"></a>![Method: ](https://apidocs.io/img/method.png ".OrganisationController.getOrganisationGetWalletAmounts") getOrganisationGetWalletAmounts

> Get organisation wallet details


```javascript
function getOrganisationGetWalletAmounts(callback)
```

#### Example Usage

```javascript


    controller.getOrganisationGetWalletAmounts(function(error, response, context) {

    
    });
```



### <a name="create_organisation_add_deposit"></a>![Method: ](https://apidocs.io/img/method.png ".OrganisationController.createOrganisationAddDeposit") createOrganisationAddDeposit

> Create a new deposit


```javascript
function createOrganisationAddDeposit(model, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| model |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var model = new SwapXRESTB2BModelsBanksAddDepositViewModel({"key":"value"});

    controller.createOrganisationAddDeposit(model, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | BadRequest |




[Back to List of Controllers](#list_of_controllers)

## <a name="static_data_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StaticDataController") StaticDataController

### Get singleton instance

The singleton instance of the ``` StaticDataController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StaticDataController;
```

### <a name="get_static_data_get_all_countries"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllCountries") getStaticDataGetAllCountries

> Get all countries


```javascript
function getStaticDataGetAllCountries(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllCountries(function(error, response, context) {

    
    });
```



### <a name="get_static_data_get_all_transaction_types"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllTransactionTypes") getStaticDataGetAllTransactionTypes

> Get all transaction types


```javascript
function getStaticDataGetAllTransactionTypes(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllTransactionTypes(function(error, response, context) {

    
    });
```



### <a name="get_static_data_get_all_transaction_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllTransactionStatuses") getStaticDataGetAllTransactionStatuses

> Get all transaction statuses


```javascript
function getStaticDataGetAllTransactionStatuses(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllTransactionStatuses(function(error, response, context) {

    
    });
```



### <a name="get_static_data_get_all_card_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllCardStatuses") getStaticDataGetAllCardStatuses

> Get all card statuses


```javascript
function getStaticDataGetAllCardStatuses(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllCardStatuses(function(error, response, context) {

    
    });
```



### <a name="get_static_data_get_all_kyc_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllKYCStatuses") getStaticDataGetAllKYCStatuses

> Get all KYC statuses


```javascript
function getStaticDataGetAllKYCStatuses(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllKYCStatuses(function(error, response, context) {

    
    });
```



### <a name="get_static_data_get_all_bank_account_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".StaticDataController.getStaticDataGetAllBankAccountStatuses") getStaticDataGetAllBankAccountStatuses

> Get all bank account statuses


```javascript
function getStaticDataGetAllBankAccountStatuses(callback)
```

#### Example Usage

```javascript


    controller.getStaticDataGetAllBankAccountStatuses(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="subscription_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SubscriptionController") SubscriptionController

### Get singleton instance

The singleton instance of the ``` SubscriptionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SubscriptionController;
```

### <a name="get_subscription_get_transaction_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionController.getSubscriptionGetTransactionSubscription") getSubscriptionGetTransactionSubscription

> Subscribe to transaction activity


```javascript
function getSubscriptionGetTransactionSubscription(callback)
```

#### Example Usage

```javascript


    controller.getSubscriptionGetTransactionSubscription(function(error, response, context) {

    
    });
```



### <a name="get_subscription_get_load_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionController.getSubscriptionGetLoadSubscription") getSubscriptionGetLoadSubscription

> Subscribe to load activity


```javascript
function getSubscriptionGetLoadSubscription(callback)
```

#### Example Usage

```javascript


    controller.getSubscriptionGetLoadSubscription(function(error, response, context) {

    
    });
```



### <a name="get_subscription_get_reject_subscription"></a>![Method: ](https://apidocs.io/img/method.png ".SubscriptionController.getSubscriptionGetRejectSubscription") getSubscriptionGetRejectSubscription

> Subscribe to rejected transactions activity


```javascript
function getSubscriptionGetRejectSubscription(callback)
```

#### Example Usage

```javascript


    controller.getSubscriptionGetRejectSubscription(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="transactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TransactionsController") TransactionsController

### Get singleton instance

The singleton instance of the ``` TransactionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TransactionsController;
```

### <a name="get_transactions_get_user_activity"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.getTransactionsGetUserActivity") getTransactionsGetUserActivity

> Get organisation activity (all fields are optional and used for filtering)


```javascript
function getTransactionsGetUserActivity(userId, currencyId, filter, pageSize, page, startDate, endDate, sortBy, orderBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Optional ```  | userId |
| currencyId |  ``` Optional ```  | CurrencyId |
| filter |  ``` Optional ```  | Filter keyword |
| pageSize |  ``` Optional ```  | Record per page |
| page |  ``` Optional ```  | Page index |
| startDate |  ``` Optional ```  | From date |
| endDate |  ``` Optional ```  | To date |
| sortBy |  ``` Optional ```  | The sort by. |
| orderBy |  ``` Optional ```  | The order by. |



#### Example Usage

```javascript

    var userId = uniqid();
    var currencyId = 7;
    var filter = 'filter';
    var pageSize = 7;
    var page = 7;
    var startDate = date("D M d, Y G:i");
    var endDate = date("D M d, Y G:i");
    var sortBy = Object.keys(sortBy1)[0];
    var orderBy = Object.keys(orderBy)[0];

    controller.getTransactionsGetUserActivity(userId, currencyId, filter, pageSize, page, startDate, endDate, sortBy, orderBy, function(error, response, context) {

    
    });
```



### <a name="get_transactions_transaction_detail"></a>![Method: ](https://apidocs.io/img/method.png ".TransactionsController.getTransactionsTransactionDetail") getTransactionsTransactionDetail

> Get details for a given transaction


```javascript
function getTransactionsTransactionDetail(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | The transaction identifier. |



#### Example Usage

```javascript

    var id = 7;

    controller.getTransactionsTransactionDetail(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsersController") UsersController

### Get singleton instance

The singleton instance of the ``` UsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsersController;
```

### <a name="get_users_get_all_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersGetAllUsers") getUsersGetAllUsers

> Get all users


```javascript
function getUsersGetAllUsers(filter, pageSize, page, order, orderBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| filter |  ``` Optional ```  | The filter. |
| pageSize |  ``` Optional ```  | Size of the page. |
| page |  ``` Optional ```  | The page. |
| order |  ``` Optional ```  | The order. |
| orderBy |  ``` Optional ```  | The order by. |



#### Example Usage

```javascript

    var filter = 'filter';
    var pageSize = 7;
    var page = 7;
    var order = 'order';
    var orderBy = 'orderBy';

    controller.getUsersGetAllUsers(filter, pageSize, page, order, orderBy, function(error, response, context) {

    
    });
```



### <a name="update_users_update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateUsersUpdateUser") updateUsersUpdateUser

> Update a user


```javascript
function updateUsersUpdateUser(model, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| model |  ``` Required ```  | The model. |



#### Example Usage

```javascript

    var model = new SwapXRESTB2BModelsUsersUpdateUserModel({"key":"value"});

    controller.updateUsersUpdateUser(model, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | BadRequest |




### <a name="create_users_create_new_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUsersCreateNewUser") createUsersCreateNewUser

> Create new user


```javascript
function createUsersCreateNewUser(model, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| model |  ``` Required ```  | The model. |



#### Example Usage

```javascript

    var model = new SwapXRESTB2BModelsUsersAddUserModel({"key":"value"});

    controller.createUsersCreateNewUser(model, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | BadRequest |




### <a name="get_users_get_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersGetUser") getUsersGetUser

> Get a single user


```javascript
function getUsersGetUser(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The ID of the user. |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getUsersGetUser(userId, function(error, response, context) {

    
    });
```



### <a name="delete_users_delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.deleteUsersDeleteUser") deleteUsersDeleteUser

> Soft delete the user.


```javascript
function deleteUsersDeleteUser(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.deleteUsersDeleteUser(userId, function(error, response, context) {

    
    });
```



### <a name="get_users_get_all_active_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersGetAllActiveUsers") getUsersGetAllActiveUsers

> Get all active users


```javascript
function getUsersGetAllActiveUsers(callback)
```

#### Example Usage

```javascript


    controller.getUsersGetAllActiveUsers(function(error, response, context) {

    
    });
```



### <a name="create_users_update_user_account_blocked"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUsersUpdateUserAccountBlocked") createUsersUpdateUserAccountBlocked

> Updates the user account blocked.


```javascript
function createUsersUpdateUserAccountBlocked(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | The input. |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsUsersUpdateUserAccountBlockModel({"key":"value"});

    controller.createUsersUpdateUserAccountBlocked(input, function(error, response, context) {

    
    });
```



### <a name="get_users_check_account_blocked_status"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersCheckAccountBlockedStatus") getUsersCheckAccountBlockedStatus

> Checks the account blocked status.


```javascript
function getUsersCheckAccountBlockedStatus(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The user identifier. |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getUsersCheckAccountBlockedStatus(userId, function(error, response, context) {

    
    });
```



### <a name="get_users_get_pending_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersGetPendingUsers") getUsersGetPendingUsers

> Get the pending users.


```javascript
function getUsersGetPendingUsers(callback)
```

#### Example Usage

```javascript


    controller.getUsersGetPendingUsers(function(error, response, context) {

    
    });
```



### <a name="create_users_update3_ds_info"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUsersUpdate3DSInfo") createUsersUpdate3DSInfo

> Updates the user 3D Secure information.


```javascript
function createUsersUpdate3DSInfo(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | The input. |



#### Example Usage

```javascript

    var input = new SwapXRESTB2BModelsUsersUpdateUser3DSInfoModel({"key":"value"});

    controller.createUsersUpdate3DSInfo(input, function(error, response, context) {

    
    });
```



### <a name="get_users_update_kyc_status"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsersUpdateKYCStatus") getUsersUpdateKYCStatus

> Updates the user KYC Status.


```javascript
function getUsersUpdateKYCStatus(userId, kYCStatus, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | The guid of the user to update. |
| kYCStatus |  ``` Required ```  | The new status of the user. |



#### Example Usage

```javascript

    var userId = uniqid();
    var kYCStatus = 7;

    controller.getUsersUpdateKYCStatus(userId, kYCStatus, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="wallet_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WalletController") WalletController

### Get singleton instance

The singleton instance of the ``` WalletController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WalletController;
```

### <a name="get_wallet_get_user_wallets"></a>![Method: ](https://apidocs.io/img/method.png ".WalletController.getWalletGetUserWallets") getWalletGetUserWallets

> Get all users wallet


```javascript
function getWalletGetUserWallets(callback)
```

#### Example Usage

```javascript


    controller.getWalletGetUserWallets(function(error, response, context) {

    
    });
```



### <a name="get_wallet_get_user_wallets1"></a>![Method: ](https://apidocs.io/img/method.png ".WalletController.getWalletGetUserWallets1") getWalletGetUserWallets1

> Get a users wallet


```javascript
function getWalletGetUserWallets1(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.getWalletGetUserWallets1(userId, function(error, response, context) {

    
    });
```



### <a name="create_wallet_wallet_un_load"></a>![Method: ](https://apidocs.io/img/method.png ".WalletController.createWalletWalletUnLoad") createWalletWalletUnLoad

> Unload a User wallet


```javascript
function createWalletWalletUnLoad(userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | Guid of the user to unload |



#### Example Usage

```javascript

    var userId = uniqid();

    controller.createWalletWalletUnLoad(userId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | BadRequest |




### <a name="create_wallet_wallet_load"></a>![Method: ](https://apidocs.io/img/method.png ".WalletController.createWalletWalletLoad") createWalletWalletLoad

> Load wallet for one or multiple user


```javascript
function createWalletWalletLoad(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| input |  ``` Required ```  | Load wallet input |



#### Example Usage

```javascript

    var input = new SwapXCoreModelsWalletUsersWalletLoadInputModel({"key":"value"});

    controller.createWalletWalletLoad(input, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | BadRequest |




[Back to List of Controllers](#list_of_controllers)



