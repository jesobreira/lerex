/**
  * @module SWAPXRESTB2BAPILib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const BankingController = require('./Controllers/BankingController');
const CardsController = require('./Controllers/CardsController');
const CurrenciesController = require('./Controllers/CurrenciesController');
const FXOrderController = require('./Controllers/FXOrderController');
const HealthCheckController = require('./Controllers/HealthCheckController');
const InsuranceManagementController = require('./Controllers/InsuranceManagementController');
const OrganisationController = require('./Controllers/OrganisationController');
const StaticDataController = require('./Controllers/StaticDataController');
const SubscriptionController = require('./Controllers/SubscriptionController');
const TransactionsController = require('./Controllers/TransactionsController');
const UsersController = require('./Controllers/UsersController');
const WalletController = require('./Controllers/WalletController');
const SwapXRESTB2BModelsBanksBankAccountModel =
  require('./Models/SwapXRESTB2BModelsBanksBankAccountModel');
const SwapXRESTB2BModelsBanksBankingPaymentModel =
  require('./Models/SwapXRESTB2BModelsBanksBankingPaymentModel');
const SystemWebHttpModelBindingModelState = require('./Models/SystemWebHttpModelBindingModelState');
const SystemWebHttpValueProvidersValueProviderResult =
  require('./Models/SystemWebHttpValueProvidersValueProviderResult');
const SystemWebHttpModelBindingModelError = require('./Models/SystemWebHttpModelBindingModelError');
const SwapXCoreServicesV2ModelsCardsCardModel =
  require('./Models/SwapXCoreServicesV2ModelsCardsCardModel');
const SwapXRESTB2BModelsCardsOrderCardModel =
  require('./Models/SwapXRESTB2BModelsCardsOrderCardModel');
const SwapXRESTB2BModelsUsersCardUserModel =
  require('./Models/SwapXRESTB2BModelsUsersCardUserModel');
const SwapXRESTB2BModelsCardsBlockMccCardRequestModel =
  require('./Models/SwapXRESTB2BModelsCardsBlockMccCardRequestModel');
const SwapXRESTB2BModelsCardsBlockMccCardDetailRequestModel =
  require('./Models/SwapXRESTB2BModelsCardsBlockMccCardDetailRequestModel');
const SwapXRESTB2BModelsCardsCardFullPANRequestModel =
  require('./Models/SwapXRESTB2BModelsCardsCardFullPANRequestModel');
const SwapXRESTB2BModelsCardsCardFullPANResponseModel =
  require('./Models/SwapXRESTB2BModelsCardsCardFullPANResponseModel');
const SwapXRESTB2BModelsCurrenciesCurrencyInfoModel =
  require('./Models/SwapXRESTB2BModelsCurrenciesCurrencyInfoModel');
const SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel =
  require('./Models/SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel');
const SwapXCoreServicesV2ModelsFXTradeQuoteResponse =
  require('./Models/SwapXCoreServicesV2ModelsFXTradeQuoteResponse');
const SwapXRESTB2BModelsHealthCheckHealthCheckInfoModel =
  require('./Models/SwapXRESTB2BModelsHealthCheckHealthCheckInfoModel');
const SwapXRESTB2BModelsUserRestAddPolicyHolderModel =
  require('./Models/SwapXRESTB2BModelsUserRestAddPolicyHolderModel');
const SwapXRESTB2BModelsUserRestInsurancePolicy =
  require('./Models/SwapXRESTB2BModelsUserRestInsurancePolicy');
const SwapXRESTB2BModelsInsuranceRestTravelInsuranceProperties =
  require('./Models/SwapXRESTB2BModelsInsuranceRestTravelInsuranceProperties');
const SwapXRESTB2BModelsInsuranceRestMedicalInsuranceProperties =
  require('./Models/SwapXRESTB2BModelsInsuranceRestMedicalInsuranceProperties');
const SwapXRESTB2BModelsInsuranceRestGadgetInsuranceProperties =
  require('./Models/SwapXRESTB2BModelsInsuranceRestGadgetInsuranceProperties');
const SwapXRESTB2BModelsInsuranceRestCollisionInsuranceProperties =
  require('./Models/SwapXRESTB2BModelsInsuranceRestCollisionInsuranceProperties');
const SwapXCoreServicesV2ModelsRockPassengerInformation =
  require('./Models/SwapXCoreServicesV2ModelsRockPassengerInformation');
const SwapXRESTB2BModelsInsuranceRestUpdatePolicyHolderModel =
  require('./Models/SwapXRESTB2BModelsInsuranceRestUpdatePolicyHolderModel');
const SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUserRestDisplayUserRestModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull =
  require('./Models/SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUserRestDisplayUserRestModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull');
const SwapXRESTB2BModelsUserRestDisplayUserRestModel =
  require('./Models/SwapXRESTB2BModelsUserRestDisplayUserRestModel');
const SwapXRESTB2BModelsUserRestUpdatePolicy =
  require('./Models/SwapXRESTB2BModelsUserRestUpdatePolicy');
const SwapXRESTB2BModelsUserRestAddPolicy = require('./Models/SwapXRESTB2BModelsUserRestAddPolicy');
const SwapXRESTB2BModelsAccountsOrganisationAccountDetailsModel =
  require('./Models/SwapXRESTB2BModelsAccountsOrganisationAccountDetailsModel');
const SwapXCoreServicesV2ModelsCardsTotalCardBalances =
  require('./Models/SwapXCoreServicesV2ModelsCardsTotalCardBalances');
const SwapXRESTB2BModelsWalletsUserWalletModel =
  require('./Models/SwapXRESTB2BModelsWalletsUserWalletModel');
const SwapXCoreServicesV2ModelsUserWalletWalletAmount =
  require('./Models/SwapXCoreServicesV2ModelsUserWalletWalletAmount');
const SwapXRESTB2BModelsBanksAddDepositViewModel =
  require('./Models/SwapXRESTB2BModelsBanksAddDepositViewModel');
const SwapXRESTB2BModelsCountriesDisplayCountryModel =
  require('./Models/SwapXRESTB2BModelsCountriesDisplayCountryModel');
const SwapXRESTB2BModelsTransactionsTransactionPushInfo =
  require('./Models/SwapXRESTB2BModelsTransactionsTransactionPushInfo');
const SwapXRESTB2BModelsTransactionsLoadPushInfo =
  require('./Models/SwapXRESTB2BModelsTransactionsLoadPushInfo');
const SwapXRESTB2BModelsTransactionsUserTransactionModel =
  require('./Models/SwapXRESTB2BModelsTransactionsUserTransactionModel');
const SwapXRESTB2BModelsUsersAddUserModel = require('./Models/SwapXRESTB2BModelsUsersAddUserModel');
const SwapXRESTB2BModelsUsersDisplayUserModel =
  require('./Models/SwapXRESTB2BModelsUsersDisplayUserModel');
const SwapXRESTB2BModelsUsersUpdateUserModel =
  require('./Models/SwapXRESTB2BModelsUsersUpdateUserModel');
const SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUsersDisplayUserModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull =
  require('./Models/SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUsersDisplayUserModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull');
const SwapXRESTB2BModelsUsersBasicUserInfoModel =
  require('./Models/SwapXRESTB2BModelsUsersBasicUserInfoModel');
const SwapXRESTB2BModelsUsersUpdateUserAccountBlockModel =
  require('./Models/SwapXRESTB2BModelsUsersUpdateUserAccountBlockModel');
const SwapXRESTB2BModelsUsersUpdateUser3DSInfoModel =
  require('./Models/SwapXRESTB2BModelsUsersUpdateUser3DSInfoModel');
const SwapXCoreServicesV2ModelsApiRequestUsersWalletLoadInputModel =
  require('./Models/SwapXCoreServicesV2ModelsApiRequestUsersWalletLoadInputModel');
const SwapXCoreModelsWalletUsersWalletLoadInputModel =
  require('./Models/SwapXCoreModelsWalletUsersWalletLoadInputModel');
const CardStatusEnum = require('./Models/CardStatusEnum');
const FrequencyEnum = require('./Models/FrequencyEnum');
const GroupTypeEnum = require('./Models/GroupTypeEnum');
const InsuranceTypeEnum = require('./Models/InsuranceTypeEnum');
const OrderByEnum = require('./Models/OrderByEnum');
const SortByEnum = require('./Models/SortByEnum');
const SortBy1Enum = require('./Models/SortBy1Enum');
const StatusEnum = require('./Models/StatusEnum');
const SwapXCoreServicesV2ModelsUserWalletWalletAmountErrorException =
  require('./Exceptions/SwapXCoreServicesV2ModelsUserWalletWalletAmountErrorException');
const SystemWebHttpModelBindingModelStateErrorException =
  require('./Exceptions/SystemWebHttpModelBindingModelStateErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SWAPXRESTB2BAPILib
    Configuration,
    // controllers of SWAPXRESTB2BAPILib
    BankingController,
    CardsController,
    CurrenciesController,
    FXOrderController,
    HealthCheckController,
    InsuranceManagementController,
    OrganisationController,
    StaticDataController,
    SubscriptionController,
    TransactionsController,
    UsersController,
    WalletController,
    // models of SWAPXRESTB2BAPILib
    SwapXRESTB2BModelsBanksBankAccountModel,
    SwapXRESTB2BModelsBanksBankingPaymentModel,
    SystemWebHttpModelBindingModelState,
    SystemWebHttpValueProvidersValueProviderResult,
    SystemWebHttpModelBindingModelError,
    SwapXCoreServicesV2ModelsCardsCardModel,
    SwapXRESTB2BModelsCardsOrderCardModel,
    SwapXRESTB2BModelsUsersCardUserModel,
    SwapXRESTB2BModelsCardsBlockMccCardRequestModel,
    SwapXRESTB2BModelsCardsBlockMccCardDetailRequestModel,
    SwapXRESTB2BModelsCardsCardFullPANRequestModel,
    SwapXRESTB2BModelsCardsCardFullPANResponseModel,
    SwapXRESTB2BModelsCurrenciesCurrencyInfoModel,
    SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel,
    SwapXCoreServicesV2ModelsFXTradeQuoteResponse,
    SwapXRESTB2BModelsHealthCheckHealthCheckInfoModel,
    SwapXRESTB2BModelsUserRestAddPolicyHolderModel,
    SwapXRESTB2BModelsUserRestInsurancePolicy,
    SwapXRESTB2BModelsInsuranceRestTravelInsuranceProperties,
    SwapXRESTB2BModelsInsuranceRestMedicalInsuranceProperties,
    SwapXRESTB2BModelsInsuranceRestGadgetInsuranceProperties,
    SwapXRESTB2BModelsInsuranceRestCollisionInsuranceProperties,
    SwapXCoreServicesV2ModelsRockPassengerInformation,
    SwapXRESTB2BModelsInsuranceRestUpdatePolicyHolderModel,
    SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUserRestDisplayUserRestModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull,
    SwapXRESTB2BModelsUserRestDisplayUserRestModel,
    SwapXRESTB2BModelsUserRestUpdatePolicy,
    SwapXRESTB2BModelsUserRestAddPolicy,
    SwapXRESTB2BModelsAccountsOrganisationAccountDetailsModel,
    SwapXCoreServicesV2ModelsCardsTotalCardBalances,
    SwapXRESTB2BModelsWalletsUserWalletModel,
    SwapXCoreServicesV2ModelsUserWalletWalletAmount,
    SwapXRESTB2BModelsBanksAddDepositViewModel,
    SwapXRESTB2BModelsCountriesDisplayCountryModel,
    SwapXRESTB2BModelsTransactionsTransactionPushInfo,
    SwapXRESTB2BModelsTransactionsLoadPushInfo,
    SwapXRESTB2BModelsTransactionsUserTransactionModel,
    SwapXRESTB2BModelsUsersAddUserModel,
    SwapXRESTB2BModelsUsersDisplayUserModel,
    SwapXRESTB2BModelsUsersUpdateUserModel,
    SwapXCoreServicesV2ModelsBasePagedList1SwapXRESTB2BModelsUsersDisplayUserModelSWAPXRESTB2BVersion2003CultureNeutralPublicKeyTokenNull,
    SwapXRESTB2BModelsUsersBasicUserInfoModel,
    SwapXRESTB2BModelsUsersUpdateUserAccountBlockModel,
    SwapXRESTB2BModelsUsersUpdateUser3DSInfoModel,
    SwapXCoreServicesV2ModelsApiRequestUsersWalletLoadInputModel,
    SwapXCoreModelsWalletUsersWalletLoadInputModel,
    CardStatusEnum,
    FrequencyEnum,
    GroupTypeEnum,
    InsuranceTypeEnum,
    OrderByEnum,
    SortByEnum,
    SortBy1Enum,
    StatusEnum,
    // exceptions of SWAPXRESTB2BAPILib
    SwapXCoreServicesV2ModelsUserWalletWalletAmountErrorException,
    SystemWebHttpModelBindingModelStateErrorException,
    APIException,
};

module.exports = initializer;
