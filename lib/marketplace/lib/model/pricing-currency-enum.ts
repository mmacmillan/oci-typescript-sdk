/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible values for the pricing currency code.
 **/
export enum PricingCurrencyEnum {
  Usd = "USD",
  Cad = "CAD",
  Inr = "INR",
  Gbp = "GBP",
  Brl = "BRL",
  Jpy = "JPY",
  Omr = "OMR",
  Eur = "EUR",
  Chf = "CHF",
  Mxn = "MXN",
  Clp = "CLP",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace PricingCurrencyEnum {
  export function getJsonObj(obj: PricingCurrencyEnum): PricingCurrencyEnum {
    return obj;
  }
  export function getDeserializedJsonObj(obj: PricingCurrencyEnum): PricingCurrencyEnum {
    return obj;
  }
}
