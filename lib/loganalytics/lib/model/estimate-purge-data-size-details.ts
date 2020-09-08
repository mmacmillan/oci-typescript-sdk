/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Parameters used to estimate purge data size
 *
 */
export interface EstimatePurgeDataSizeDetails {
  /**
   * the compartment OCID under which the data will be purged
   */
  "compartmentId": string;
  /**
   * if true, purge child compartments data
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * the time before which data will be purged
   */
  "timeDataEnded": Date;
  /**
   * the solr data filter query, '*' means all
   */
  "purgeQueryString"?: string;
  /**
   * the type of the log data to be purged
   */
  "dataType"?: model.StorageDataType;
}

export namespace EstimatePurgeDataSizeDetails {
  export function getJsonObj(obj: EstimatePurgeDataSizeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
