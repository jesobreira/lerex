/**
 * SWAPXRESTB2BAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SwapXRESTB2BModelsCountriesDisplayCountryModel
 */
class SwapXRESTB2BModelsCountriesDisplayCountryModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.name = this.constructor.getValue(obj.name);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
        this.isO3 = this.constructor.getValue(obj.isO3);
        this.callingCode = this.constructor.getValue(obj.callingCode);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'name', realName: 'name' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'currencyCode', realName: 'currencyCode' },
            { name: 'isO3', realName: 'isO3' },
            { name: 'callingCode', realName: 'callingCode' },
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

module.exports = SwapXRESTB2BModelsCountriesDisplayCountryModel;
