/**
 * SWAPXRESTB2BAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel
 */
class SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.buyCurrencyName = this.constructor.getValue(obj.buyCurrencyName);
        this.sellCurrencyName = this.constructor.getValue(obj.sellCurrencyName);
        this.rate = this.constructor.getValue(obj.rate);
        this.updatedAt = this.constructor.getValue(obj.updatedAt);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'buyCurrencyName', realName: 'buyCurrencyName' },
            { name: 'sellCurrencyName', realName: 'sellCurrencyName' },
            { name: 'rate', realName: 'rate' },
            {
                name: 'updatedAt',
                realName: 'updatedAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
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

module.exports = SwapXRESTB2BModelsCurrenciesCurrencyRateViewModel;
