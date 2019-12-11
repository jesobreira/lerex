/**
 * SWAPXRESTB2BAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');
/**
 * Creates an instance of SystemWebHttpModelBindingModelStateErrorException
 */
class SystemWebHttpModelBindingModelStateErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.value = null;

        /**
         * TODO: Write general description for this field
         */
        this.errors = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'value',
                realName: 'value',
                type: 'SystemWebHttpValueProvidersValueProviderResult',
            },
            {
                name: 'errors',
                realName: 'errors',
                array: true,
                type: 'SystemWebHttpModelBindingModelError',
            },
        ]);
    }
}

module.exports = SystemWebHttpModelBindingModelStateErrorException;