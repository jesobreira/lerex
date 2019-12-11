/**
 * SWAPXRESTB2BAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SwapXCoreServicesV2ModelsRockPassengerInformation
 */
class SwapXCoreServicesV2ModelsRockPassengerInformation extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.firstName = this.constructor.getValue(obj.firstName);
        this.lastName = this.constructor.getValue(obj.lastName);
        this.dateOfBirth = this.constructor.getValue(obj.dateOfBirth);
        this.medicalScreeningNumber = this.constructor.getValue(obj.medicalScreeningNumber);
        this.medicalCoverIncluded = this.constructor.getValue(obj.medicalCoverIncluded);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'firstName', realName: 'firstName' },
            { name: 'lastName', realName: 'lastName' },
            {
                name: 'dateOfBirth',
                realName: 'dateOfBirth',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'medicalScreeningNumber', realName: 'medicalScreeningNumber' },
            { name: 'medicalCoverIncluded', realName: 'medicalCoverIncluded' },
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

module.exports = SwapXCoreServicesV2ModelsRockPassengerInformation;