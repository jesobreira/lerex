/**
 * SWAPXRESTB2BAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SwapXCoreServicesV2ModelsCardsCardModel
 */
class SwapXCoreServicesV2ModelsCardsCardModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.userId = this.constructor.getValue(obj.userId);
        this.nameOnCard = this.constructor.getValue(obj.nameOnCard);
        this.cardNumber = this.constructor.getValue(obj.cardNumber);
        this.endMonth = this.constructor.getValue(obj.endMonth);
        this.endYear = this.constructor.getValue(obj.endYear);
        this.token = this.constructor.getValue(obj.token);
        this.activationCode = this.constructor.getValue(obj.activationCode);
        this.cardID = this.constructor.getValue(obj.cardID);
        this.cancelled = this.constructor.getValue(obj.cancelled);
        this.blockedAll = this.constructor.getValue(obj.blockedAll);
        this.blockATM = this.constructor.getValue(obj.blockATM);
        this.blockPOS = this.constructor.getValue(obj.blockPOS);
        this.blockECommerce = this.constructor.getValue(obj.blockECommerce);
        this.blockOther = this.constructor.getValue(obj.blockOther);
        this.isContactlessEnable = this.constructor.getValue(obj.isContactlessEnable);
        this.isMagstripeAllowed = this.constructor.getValue(obj.isMagstripeAllowed);
        this.cardStatus = this.constructor.getValue(obj.cardStatus);
        this.createdAt = this.constructor.getValue(obj.createdAt);
        this.updatedAt = this.constructor.getValue(obj.updatedAt);
        this.cardDesign = this.constructor.getValue(obj.cardDesign);
        this.magstripeExpiredAt = this.constructor.getValue(obj.magstripeExpiredAt);
        this.cardHolderId = this.constructor.getValue(obj.cardHolderId);
        this.secure3D = this.constructor.getValue(obj.secure3D);
        this.isCardUsed = this.constructor.getValue(obj.isCardUsed);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'userId', realName: 'userId' },
            { name: 'nameOnCard', realName: 'nameOnCard' },
            { name: 'cardNumber', realName: 'cardNumber' },
            { name: 'endMonth', realName: 'endMonth' },
            { name: 'endYear', realName: 'endYear' },
            { name: 'token', realName: 'token' },
            { name: 'activationCode', realName: 'activationCode' },
            { name: 'cardID', realName: 'cardID' },
            { name: 'cancelled', realName: 'cancelled' },
            { name: 'blockedAll', realName: 'blockedAll' },
            { name: 'blockATM', realName: 'blockATM' },
            { name: 'blockPOS', realName: 'blockPOS' },
            { name: 'blockECommerce', realName: 'blockECommerce' },
            { name: 'blockOther', realName: 'blockOther' },
            { name: 'isContactlessEnable', realName: 'isContactlessEnable' },
            { name: 'isMagstripeAllowed', realName: 'isMagstripeAllowed' },
            { name: 'cardStatus', realName: 'cardStatus' },
            {
                name: 'createdAt',
                realName: 'createdAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'updatedAt',
                realName: 'updatedAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'cardDesign', realName: 'cardDesign' },
            {
                name: 'magstripeExpiredAt',
                realName: 'magstripeExpiredAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'cardHolderId', realName: 'cardHolderId' },
            { name: 'secure3D', realName: 'secure3D' },
            { name: 'isCardUsed', realName: 'isCardUsed' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = SwapXCoreServicesV2ModelsCardsCardModel;
