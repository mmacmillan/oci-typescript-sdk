/**
 * Billing Center Gateway API
 * This site describes all the Rest endpoints of Billing Center Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Invoice payment action response
 */
export interface PayInvoiceReceipt {
  /**
   * Url of the Payment Service
   */
  "url"?: string;
  /**
   * Payment header id
   */
  "headerId": string;
  /**
   * Token created for Payment Service
   */
  "token"?: string;
}

export namespace PayInvoiceReceipt {
  export function getJsonObj(obj: PayInvoiceReceipt): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PayInvoiceReceipt): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
